import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import ts from "typescript";
import { getAboutContent } from "@/content/about/content";
import { getAspectsContent } from "@/content/aspects/content";
import { getCommonContent } from "@/content/common/content";
import { getHistoryContent } from "@/content/history/content";
import { getHomeContent } from "@/content/home/content";
import { getHousesContent } from "@/content/houses/content";
import { getImagesContent } from "@/content/images/content";
import { getLexiconContent } from "@/content/lexicon/content";
import { getNatalContent } from "@/content/natal/content";
import { getPlanetsContent } from "@/content/planets/content";
import { getScienceContent } from "@/content/science/content";
import { getSignsContent } from "@/content/signs/content";
import { getUiContent } from "@/content/ui/content";

/*
 * Outils des gardes transversales des textes (typographie française, complétude, budget des chaînes client, frontière
 * serveur/client) : tous les textes du site, et le code qui les écrit. Réservé aux tests, lancés depuis la racine du
 * dépôt comme le fait Vitest : il lit le disque et charge tous les contenus.
 */

const ROOT = process.cwd();

/** Fichiers sources du site (`src/**`, `.ts` et `.tsx`, hors tests), relatifs à la racine : « src/i18n/names.ts ». */
export function sourceFiles(): string[] {
  return readdirSync(join(ROOT, "src"), { recursive: true, encoding: "utf8" })
    .map((file) => `src/${file.split("\\").join("/")}`)
    .filter((file) => /\.tsx?$/.test(file) && !/\.test\.tsx?$/.test(file))
    .sort();
}

export function readSource(file: string): string {
  return readFileSync(join(ROOT, file), "utf8");
}

/** Arbre syntaxique d'un fichier source (TypeScript, JSX selon l'extension), parents renseignés. */
export function parseSource(file: string): ts.SourceFile {
  const kind = file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
  return ts.createSourceFile(file, readSource(file), ts.ScriptTarget.Latest, true, kind);
}

/** Contenus serveur, un par domaine de `src/content/`. */
export const SERVER_CONTENTS: Readonly<Record<string, () => object>> = {
  about: getAboutContent,
  aspects: getAspectsContent,
  common: getCommonContent,
  history: getHistoryContent,
  home: getHomeContent,
  houses: getHousesContent,
  images: getImagesContent,
  lexicon: getLexiconContent,
  natal: getNatalContent,
  planets: getPlanetsContent,
  science: getScienceContent,
  signs: getSignsContent,
  ui: getUiContent,
};

/** Une table de chaînes client : son export (`SITE_STRINGS`), son fichier, ses textes. */
export interface StringTable {
  name: string;
  file: string;
  strings: unknown;
}

/** Toutes les tables de chaînes client : chaque export `*_STRINGS` des fichiers `*.strings.ts`, découverts sur le disque. */
export async function loadStringTables(): Promise<StringTable[]> {
  const files = sourceFiles().filter((file) => file.endsWith(".strings.ts"));
  const tables = await Promise.all(
    files.map(async (file) => {
      const exports = (await import(/* @vite-ignore */ join(ROOT, file))) as Record<string, unknown>;
      return Object.entries(exports)
        .filter(([name]) => name.endsWith("_STRINGS"))
        .map(([name, strings]) => ({ name, file, strings }));
    }),
  );
  return tables.flat();
}

export type TextFunction = (...args: never[]) => unknown;

export interface TextLeaf {
  path: string;
  value: string | TextFunction;
}

/** Clés qui ne portent pas de texte affiché : adresses, ancres, clés d'images. */
const NOT_TEXT_KEYS: ReadonlySet<string> = new Set(["href", "id", "key", "see", "pageHref", "licenseHref"]);

/** Feuilles de texte d'un contenu ou d'une table, dans l'ordre de l'objet ; nombres et booléens exclus. */
export function textLeaves(value: unknown, path = ""): TextLeaf[] {
  if (typeof value === "string") return [{ path, value }];
  if (typeof value === "function") return [{ path, value: value as TextFunction }];
  if (value !== null && typeof value === "object") {
    return Object.entries(value)
      .filter(([key]) => !NOT_TEXT_KEYS.has(key))
      .flatMap(([key, child]) => textLeaves(child, path ? `${path}.${key}` : key));
  }
  return [];
}

export function stringLeaves(value: unknown): { path: string; text: string }[] {
  return textLeaves(value).flatMap(({ path, value: leaf }) => (typeof leaf === "string" ? [{ path, text: leaf }] : []));
}

/** Littéral de chaîne du code source : chaîne entière, ou morceau de gabarit entre deux `${…}`. */
export interface SourceLiteral {
  file: string;
  line: number;
  text: string;
}

const isModuleSpecifier = (node: ts.Node) =>
  ts.isImportDeclaration(node.parent) || ts.isExportDeclaration(node.parent) || ts.isExternalModuleReference(node.parent);

/** Fichiers qui écrivent du texte affiché : contenus `fr.ts`, tables `*.strings.ts`, noms (`src/i18n/names.ts`). */
export function isFrenchTextFile(file: string): boolean {
  return file.endsWith("/fr.ts") || file.endsWith(".strings.ts") || file === "src/i18n/names.ts";
}

/** Littéraux de chaîne d'un fichier source (chaînes et morceaux de gabarits), chemins de modules exclus. */
export function sourceLiterals(file: string): SourceLiteral[] {
  const source = parseSource(file);
  const literals: SourceLiteral[] = [];
  const visit = (node: ts.Node) => {
    const isText =
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(node) ||
      ts.isTemplateHead(node) ||
      ts.isTemplateMiddle(node) ||
      ts.isTemplateTail(node);
    if (isText && !isModuleSpecifier(node)) {
      const line = source.getLineAndCharacterOfPosition(node.getStart(source)).line + 1;
      literals.push({ file, line, text: node.text });
    }
    ts.forEachChild(node, visit);
  };
  visit(source);
  return literals;
}
