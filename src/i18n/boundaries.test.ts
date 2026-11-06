// @vitest-environment node
import { posix } from "node:path";
import ts from "typescript";
import { describe, expect, it } from "vitest";
import { parseSource, sourceFiles } from "@/i18n/testUtils";

/*
 * Deux frontières du paquet client :
 * 1. les contenus longs (`src/content/**`) restent sur le serveur, rendus dans le HTML de la page : un module client
 *    qui en importerait un, même de loin, l'enverrait au navigateur ;
 * 2. le moteur d'éphémérides (`astronomy-engine`, ~21 Ko gzip) n'arrive au navigateur que par `import()`, à la
 *    demande : aucun import statique depuis un module client, même indirect.
 */

const FILES = sourceFiles();
const KNOWN: ReadonlySet<string> = new Set(FILES);
const ENGINE = "astronomy-engine";

function resolveImport(from: string, specifier: string): string | null {
  if (specifier === ENGINE) return ENGINE;
  const base = specifier.startsWith("@/")
    ? `src/${specifier.slice(2)}`
    : specifier.startsWith(".")
      ? posix.join(posix.dirname(from), specifier)
      : null;
  if (base === null) return null;
  const candidates = [base, `${base}.ts`, `${base}.tsx`, `${base}/index.ts`, `${base}/index.tsx`];
  return candidates.find((file) => KNOWN.has(file)) ?? null;
}

function isTypeOnlyImport({ importClause }: ts.ImportDeclaration): boolean {
  if (!importClause) return false;
  if (importClause.isTypeOnly) return true;
  const bindings = importClause.namedBindings;
  return (
    importClause.name === undefined &&
    bindings !== undefined &&
    ts.isNamedImports(bindings) &&
    bindings.elements.length > 0 &&
    bindings.elements.every((element) => element.isTypeOnly)
  );
}

function isTypeOnlyExport({ isTypeOnly, exportClause }: ts.ExportDeclaration): boolean {
  if (isTypeOnly) return true;
  return (
    exportClause !== undefined &&
    ts.isNamedExports(exportClause) &&
    exportClause.elements.length > 0 &&
    exportClause.elements.every((element) => element.isTypeOnly)
  );
}

interface Imports {
  /** Imports statiques et réexports, types exclus. */
  readonly static: readonly string[];
  /** `import()` dynamiques. */
  readonly dynamic: readonly string[];
}

function runtimeImports(source: ts.SourceFile): Imports {
  const found: { static: string[]; dynamic: string[] } = { static: [], dynamic: [] };
  const visit = (node: ts.Node) => {
    if (ts.isImportDeclaration(node) && ts.isStringLiteral(node.moduleSpecifier)) {
      if (!isTypeOnlyImport(node)) found.static.push(node.moduleSpecifier.text);
    } else if (ts.isExportDeclaration(node) && node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) {
      if (!isTypeOnlyExport(node)) found.static.push(node.moduleSpecifier.text);
    } else if (ts.isCallExpression(node) && node.expression.kind === ts.SyntaxKind.ImportKeyword) {
      const [specifier] = node.arguments;
      if (specifier && ts.isStringLiteral(specifier)) found.dynamic.push(specifier.text);
    }
    ts.forEachChild(node, visit);
  };
  visit(source);
  const resolve = (list: string[]) => list.flatMap((specifier) => resolveImport(source.fileName, specifier) ?? []);
  return { static: resolve(found.static), dynamic: resolve(found.dynamic) };
}

function isClientModule(source: ts.SourceFile): boolean {
  for (const statement of source.statements) {
    if (!ts.isExpressionStatement(statement) || !ts.isStringLiteral(statement.expression)) return false;
    if (statement.expression.text === "use client") return true;
  }
  return false;
}

const SOURCES = FILES.map(parseSource);
const IMPORTS: ReadonlyMap<string, Imports> = new Map(SOURCES.map((source) => [source.fileName, runtimeImports(source)]));
const CLIENT_MODULES = SOURCES.filter(isClientModule).map((source) => source.fileName);

/** Plus court chemin d'imports d'un module vers une cible (« a.tsx → b.ts → cible »), ou null. */
function pathTo(start: string, isTarget: (file: string) => boolean, follow: (imports: Imports) => readonly string[]) {
  const parents = new Map<string, string | null>([[start, null]]);
  const queue = [start];
  for (let file = queue.shift(); file !== undefined; file = queue.shift()) {
    if (isTarget(file)) {
      const path = [file];
      for (let parent = parents.get(file); parent; parent = parents.get(parent)) path.unshift(parent);
      return path;
    }
    for (const target of follow(IMPORTS.get(file) ?? { static: [], dynamic: [] })) {
      if (!parents.has(target)) {
        parents.set(target, file);
        queue.push(target);
      }
    }
  }
  return null;
}

const both = (imports: Imports) => [...imports.static, ...imports.dynamic];
const staticOnly = (imports: Imports) => imports.static;

describe("frontières du paquet client", () => {
  it("devrait trouver des modules client et le moteur derrière un import dynamique (garde contre le test vide)", () => {
    expect(CLIENT_MODULES.length).toBeGreaterThanOrEqual(5);
    const reachesEngine = CLIENT_MODULES.some((file) => pathTo(file, (f) => f === ENGINE, both) !== null);
    expect(reachesEngine).toBe(true);
  });

  it("ne devrait laisser aucun module client atteindre src/content/, même par un import indirect ou dynamique", () => {
    const crossings = CLIENT_MODULES.flatMap(
      (file) => pathTo(file, (f) => f.startsWith("src/content/"), both)?.join(" → ") ?? [],
    );
    expect(crossings).toEqual([]);
  });

  it("ne devrait laisser aucun module client importer astronomy-engine statiquement, même de loin", () => {
    const crossings = CLIENT_MODULES.flatMap((file) => pathTo(file, (f) => f === ENGINE, staticOnly)?.join(" → ") ?? []);
    expect(crossings).toEqual([]);
  });
});
