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
import { LOCALES, type Locale } from "./locales";
import {
  ANGLE_ABBREVIATIONS,
  ASPECT_NAMES,
  CONSTELLATION_NAMES,
  ELEMENT_NAMES,
  HOUSE_SYSTEM_NAMES,
  MODALITY_NAMES,
  MONTH_NAMES,
  PLANET_GROUP_NAMES,
  POINT_NAMES,
  SIGN_NAMES,
} from "./names";

/*
 * Outils des gardes transversales des textes (typographie française, complétude des langues, budget des chaînes
 * client, frontière serveur/client) : tous les textes du site, dans les deux langues, et le code qui les écrit.
 * Réservé aux tests, lancés depuis la racine du dépôt comme le fait Vitest : il lit le disque et charge tous les
 * contenus.
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

/** Contenus serveur, un par domaine de `src/content/`, lus dans une langue. */
export const SERVER_CONTENTS: Readonly<Record<string, (locale: Locale) => object>> = {
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

/** Noms affichés (`src/i18n/names.ts`), table par table, chacune indexée par la langue. */
export const NAME_TABLES: Readonly<Record<string, Readonly<Record<Locale, unknown>>>> = {
  SIGN_NAMES,
  POINT_NAMES,
  ANGLE_ABBREVIATIONS,
  ELEMENT_NAMES,
  MODALITY_NAMES,
  PLANET_GROUP_NAMES,
  ASPECT_NAMES,
  HOUSE_SYSTEM_NAMES,
  CONSTELLATION_NAMES,
  MONTH_NAMES,
};

/** Une table de chaînes client : son export (`SITE_STRINGS`), son fichier, ses textes par langue. */
export interface StringTable {
  name: string;
  file: string;
  strings: Readonly<Record<Locale, unknown>>;
}

/**
 * Toutes les tables de chaînes client : chaque export `*_STRINGS` des fichiers `*.strings.ts`, découverts sur le disque.
 * Aucune liste à tenir : une table neuve est gardée dès sa création.
 */
export async function loadStringTables(): Promise<StringTable[]> {
  const files = sourceFiles().filter((file) => file.endsWith(".strings.ts"));
  const tables = await Promise.all(
    files.map(async (file) => {
      const exports = (await import(/* @vite-ignore */ join(ROOT, file))) as Record<string, unknown>;
      return Object.entries(exports)
        .filter(([name]) => name.endsWith("_STRINGS"))
        .map(([name, strings]) => ({ name, file, strings: strings as Readonly<Record<Locale, unknown>> }));
    }),
  );
  return tables.flat();
}

export type TextFunction = (...args: never[]) => unknown;

export interface TextLeaf {
  path: string;
  value: string | TextFunction;
}

/** Clés qui ne portent pas de texte affiché : adresses, ancres, clés d'images, nature d'un bloc (« p », « list »). */
const NOT_TEXT_KEYS: ReadonlySet<string> = new Set(["href", "id", "key", "kind", "see", "pageHref", "licenseHref"]);

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
  /** Texte, échappements résolus (« \u00a0 » devient l'espace insécable). */
  text: string;
  /**
   * Langue que le code donne au littéral, du plus proche au plus lointain : propriété `fr` ou `en` (tables, noms) ;
   * déclaration nommée en `_FR` ou en `Fr` (`HOME_FR`, `creditLineFr`) ; fichier `fr.ts` ou `en.ts` (contenus
   * serveur). null ailleurs : code commun, messages pour les développeurs.
   */
  language: Locale | null;
}

/** Langue d'un nom de déclaration : `HOME_FR`, `creditLineEn` ; null pour `SIGN_SLUGS`, `LIST`. */
function languageOfName(name: string): Locale | null {
  const match = /(?:_|[a-z\d])(FR|EN)$|(?<=[a-z\d])(Fr|En)$/.exec(name);
  const code = (match?.[1] ?? match?.[2])?.toLowerCase();
  return LOCALES.find((locale) => locale === code) ?? null;
}

/** Langue que porte un nœud du code par lui-même : propriété `fr`, déclaration `HOME_FR` ; null sinon. */
function languageOfNode(node: ts.Node): Locale | null {
  if (ts.isPropertyAssignment(node) && (ts.isIdentifier(node.name) || ts.isStringLiteral(node.name))) {
    return LOCALES.find((locale) => locale === node.name.getText().replace(/^["']|["']$/g, "")) ?? null;
  }
  if ((ts.isVariableDeclaration(node) || ts.isFunctionDeclaration(node)) && node.name && ts.isIdentifier(node.name)) {
    return languageOfName(node.name.text);
  }
  return null;
}

const isModuleSpecifier = (node: ts.Node) =>
  ts.isImportDeclaration(node.parent) || ts.isExportDeclaration(node.parent) || ts.isExternalModuleReference(node.parent);

/** Littéraux de chaîne d'un fichier source (chaînes et morceaux de gabarits), chemins de modules exclus. */
export function sourceLiterals(file: string): SourceLiteral[] {
  const source = parseSource(file);
  const fileLanguage = LOCALES.find((locale) => file.endsWith(`/${locale}.ts`)) ?? null;
  const literals: SourceLiteral[] = [];
  const visit = (node: ts.Node, language: Locale | null) => {
    const own = languageOfNode(node) ?? language;
    const isText =
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(node) ||
      ts.isTemplateHead(node) ||
      ts.isTemplateMiddle(node) ||
      ts.isTemplateTail(node);
    if (isText && !isModuleSpecifier(node)) {
      const line = source.getLineAndCharacterOfPosition(node.getStart(source)).line + 1;
      literals.push({ file, line, text: node.text, language: own });
    }
    ts.forEachChild(node, (child) => visit(child, own));
  };
  visit(source, fileLanguage);
  return literals;
}
