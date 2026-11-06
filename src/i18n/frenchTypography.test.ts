// @vitest-environment node
import { describe, expect, it } from "vitest";
import { fixFrenchSpacing, isAddress, NBSP, NNBSP, PLACES } from "@/i18n/frenchTypography";
import {
  loadStringTables,
  NAME_TABLES,
  SERVER_CONTENTS,
  type SourceLiteral,
  sourceFiles,
  sourceLiterals,
  stringLeaves,
} from "@/i18n/testUtils";

/*
 * Typographie française, sur le français seulement : contenus `fr.ts`, branches `fr` des tables `*.strings.ts` et des
 * noms (`names.ts`). L'anglais suit ses propres règles (« : » collé au mot), que cette garde ne juge pas.
 */

const SPACE_NAMES: Readonly<Record<string, string>> = {
  " ": "espace ordinaire",
  [NBSP]: "espace insécable (U+00A0)",
  [NNBSP]: "espace fine insécable (U+202F)",
};

function around(text: string, index: number): string {
  return text
    .slice(Math.max(0, index - 12), index + 12)
    .replaceAll(NBSP, "⍽")
    .replaceAll(NNBSP, "‿");
}

/** Fautes d'espacement ; `whole` : texte entier (une valeur affichée), sinon morceau de gabarit (espaces seules). */
function frenchSpacingFaults(text: string, whole: boolean): string[] {
  if (isAddress(text)) return [];
  return PLACES.flatMap(({ name, expected, wrong, missing }) => {
    const fault = (found: string, index: number) =>
      `${found} ${name}, ${SPACE_NAMES[expected]} attendue : « ${around(text, index)} »`;
    return [
      ...Array.from(text.matchAll(wrong), (match) => fault(SPACE_NAMES[match[1]], match.index)),
      ...(whole && missing ? Array.from(text.matchAll(missing), (match) => fault("aucune espace", match.index)) : []),
    ];
  });
}

describe("frenchSpacingFaults et fixFrenchSpacing", () => {
  it("laisse les adresses telles quelles : « File: » de Wikimedia Commons reste collé", () => {
    const address = "https://commons.wikimedia.org/wiki/File:";
    expect(fixFrenchSpacing(address)).toBe(address);
    expect(frenchSpacingFaults(address, true)).toEqual([]);
  });


  it.each([
    ["1 392 700 km", 2],
    ["Soleil : Terre", 1],
    ["vraiment ?", 1],
    ["ici ; là", 1],
    ["« réelles »", 2],
  ])("devrait relever chaque espace fautive de « %s » (%i)", (text, count) => {
    expect(frenchSpacingFaults(text, false)).toHaveLength(count);
    expect(frenchSpacingFaults(fixFrenchSpacing(text), true)).toEqual([]);
  });

  it.each(["Soleil: Terre", "vraiment?", "«réelles»"])("devrait ajouter l'espace absente de « %s »", (text) => {
    expect(frenchSpacingFaults(text, true).length).toBeGreaterThan(0);
    expect(frenchSpacingFaults(fixFrenchSpacing(text), true)).toEqual([]);
  });

  it.each([
    `1${NNBSP}392${NNBSP}700 km`,
    `Soleil${NBSP}: Terre`,
    `vraiment${NNBSP}?! oui${NNBSP}; non${NNBSP}!`,
    `«${NBSP}distances réelles${NBSP}»`,
    "de 1800 à 2050, 4 h 10, 2039-2040, 12:30, https://example.org",
    "(?) et 12°34′",
  ])("devrait accepter et laisser intact « %s »", (text) => {
    expect(frenchSpacingFaults(text, true)).toEqual([]);
    expect(fixFrenchSpacing(text)).toBe(text);
  });
});

const tables = await loadStringTables();

/** Textes français affichés : chaque chaîne des contenus serveur, des tables client et des noms, avec sa provenance. */
const FRENCH_TEXTS = [
  ...Object.entries(SERVER_CONTENTS).flatMap(([domain, getContent]) =>
    stringLeaves(getContent("fr")).map(({ path, text }) => ({ origin: `content/${domain}`, path, text })),
  ),
  ...tables.flatMap(({ name, strings }) => stringLeaves(strings.fr).map(({ path, text }) => ({ origin: name, path, text }))),
  ...Object.entries(NAME_TABLES).flatMap(([name, table]) =>
    stringLeaves(table.fr).map(({ path, text }) => ({ origin: name, path, text })),
  ),
];

/** Littéraux du code écrits en français : fichiers `fr.ts`, propriétés `fr`, déclarations `_FR` et `Fr`. */
const FRENCH_LITERALS: readonly SourceLiteral[] = sourceFiles()
  .flatMap(sourceLiterals)
  .filter(({ language }) => language === "fr");

describe("typographie française des textes affichés", () => {
  it("devrait lire tous les contenus serveur, toutes les tables client et les noms, en français", () => {
    const origins = new Set(FRENCH_TEXTS.map(({ origin }) => origin));
    for (const domain of Object.keys(SERVER_CONTENTS)) expect(origins).toContain(`content/${domain}`);
    // Une table faite seulement de phrases calculées (INFO_STRINGS) n'a pas de valeur fixe : son code est jugé plus bas.
    for (const { name, strings } of tables) if (stringLeaves(strings.fr).length > 0) expect(origins).toContain(name);
    expect(FRENCH_TEXTS.length).toBeGreaterThan(800);
  });

  it("devrait trouver la règle appliquée au moins une fois (avant « : » et dans les guillemets)", () => {
    expect(FRENCH_TEXTS.some(({ text }) => text.includes(`${NBSP}:`))).toBe(true);
    expect(FRENCH_TEXTS.some(({ text }) => new RegExp(`«${NBSP}[^»]+${NBSP}»`).test(text))).toBe(true);
  });

  it("ne devrait laisser aucune espace fautive, ni manquante, dans un texte affiché", () => {
    const faults = FRENCH_TEXTS.flatMap(({ origin, path, text }) =>
      frenchSpacingFaults(text, true).map((fault) => `${origin} ${path} : ${fault}`),
    );
    expect(faults).toEqual([]);
  });
});

describe("typographie française du code qui écrit les textes", () => {
  it("devrait lire les littéraux français des contenus, des tables, des noms et de leurs fonctions", () => {
    const files = new Set(FRENCH_LITERALS.map(({ file }) => file));
    expect(FRENCH_LITERALS.length).toBeGreaterThan(800);
    expect(files).toContain("src/content/signs/fr.ts");
    expect(files).toContain("src/components/natal/natal.strings.ts");
    expect(files).toContain("src/i18n/names.ts");
  });

  it("ne devrait jamais prendre un littéral anglais pour du français", () => {
    const english = sourceLiterals("src/components/natal/natal.strings.ts").filter(({ text }) => text.includes("Greenwich"));
    expect(english.map(({ language }) => language).sort()).toEqual(["en", "fr"]);
  });

  /*
   * Les fonctions des tables (pluriels, phrases calculées) écrivent leur texte par morceaux de gabarit, que la lecture
   * des valeurs ne voit pas : leurs espaces sont jugées ici, dans le code.
   */
  it("ne devrait laisser aucune espace fautive dans un littéral français, morceaux de gabarit compris", () => {
    const faults = FRENCH_LITERALS.flatMap(({ file, line, text }) =>
      frenchSpacingFaults(text, false).map((fault) => `${file}:${line} : ${fault}`),
    );
    expect(faults).toEqual([]);
  });
});
