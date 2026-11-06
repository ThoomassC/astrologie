// @vitest-environment node
import { describe, expect, it } from "vitest";
import { fixFrenchSpacing, NBSP, NNBSP, PLACES } from "@/i18n/frenchTypography";
import {
  isFrenchTextFile,
  loadStringTables,
  SERVER_CONTENTS,
  sourceFiles,
  sourceLiterals,
  stringLeaves,
} from "@/i18n/testUtils";

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

const FRENCH_TEXTS = [
  ...Object.entries(SERVER_CONTENTS).flatMap(([domain, getContent]) =>
    stringLeaves(getContent()).map(({ path, text }) => ({ origin: `content/${domain}`, path, text })),
  ),
  ...tables.flatMap(({ name, strings }) => stringLeaves(strings).map(({ path, text }) => ({ origin: name, path, text }))),
];

const FRENCH_LITERALS = sourceFiles().filter(isFrenchTextFile).flatMap(sourceLiterals);

describe("typographie française des textes affichés", () => {
  it("devrait lire tous les contenus serveur et toutes les tables client (garde contre le test vide)", () => {
    const origins = new Set(FRENCH_TEXTS.map(({ origin }) => origin));
    for (const domain of Object.keys(SERVER_CONTENTS)) expect(origins).toContain(`content/${domain}`);
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

  it("ne devrait laisser aucune espace fautive dans un littéral français, morceaux de gabarit compris", () => {
    const faults = FRENCH_LITERALS.flatMap(({ file, line, text }) =>
      frenchSpacingFaults(text, false).map((fault) => `${file}:${line} : ${fault}`),
    );
    expect(faults).toEqual([]);
  });
});
