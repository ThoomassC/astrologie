// @vitest-environment node
import { describe, expect, it } from "vitest";
import { LOCALES, type Locale } from "@/i18n/locales";
import { loadStringTables, NAME_TABLES, SERVER_CONTENTS, stringLeaves, textLeaves } from "@/i18n/testUtils";

/*
 * Complétude des textes, dans les deux langues : chaque contenu serveur (`src/content/<domaine>`), chaque table de
 * chaînes client (`*.strings.ts`) et chaque table de noms (`src/i18n/names.ts`) donne en anglais les mêmes textes
 * qu'en français, aux mêmes places, sans vide ni brouillon, et traduits. Une feuille recopiée du français est une
 * traduction oubliée, sauf ce qui s'écrit pareil d'une langue à l'autre : ponctuation, nombres et symboles, noms
 * propres, et quelques mots listés un à un. Puis le ton : chaque page de notions présente l'astrologie comme une
 * tradition, pas comme un savoir établi.
 */

/** Langues traduites depuis le français. */
const TRANSLATED = ["en"] as const satisfies readonly Locale[];

type Translated = (typeof TRANSLATED)[number];

/** Marqueur de brouillon, en capitales seulement. */
const DRAFT_MARK = /\b(?:TODO|FIXME|XXX)\b/;

/** Symboles et abréviations, les mêmes dans les deux langues : unités, points cardinaux, gabarits de saisie. */
const SYMBOLS: ReadonlySet<string> = new Set([
  ...["km", "h", "min", "s", "UTC", "N", "S", "E", "MC", "AM", "PM", "mm", "hh", "i"],
]);

/** Mots d'un texte, traits d'union compris (« Semi-sextile ») ; nombres et ponctuation laissés de côté. */
const wordsOf = (text: string) => text.match(/\p{L}+(?:-\p{L}+)*/gu) ?? [];

/** Texte sans mot à traduire : ponctuation, nombres, signes et symboles (« — », « 30° », « UTC+2 »). */
const isNumbersAndSymbols = (text: string) => wordsOf(text).every((word) => SYMBOLS.has(word));

/**
 * Places des noms propres, laissés tels quels : titres, auteurs et licences des images, titres des sources citées,
 * villes et pays du formulaire, noms latins des constellations, étoiles, lieux de la démonstration des maisons.
 */
const PROPER_NAME_PATHS =
  /(?:^|\.)(?:title|author|license|brightestStarName|latin)$|(?:^|\.)(?:links|sources)\.\d+\.label$|(?:^|\.)(?:cities|countries)\.[^.]+$|(?:^|\.)presets\.\d+\.label$/;

/**
 * Mots écrits exactement comme en français, un à un : noms propres hors des places ci-dessus, mots communs. Un texte
 * fait de ces mots, de symboles et de nombres peut rester tel quel (« Sextile (60°) », « Astrologie, home »).
 */
const SAME_AS_FRENCH: Readonly<Record<Translated, readonly string[]>> = {
  en: [
    // Noms propres : le site et son frère, les astres, un signe, un système de maisons.
    "Astrologie",
    "Astronomie",
    "Mars",
    "Jupiter",
    "Uranus",
    "Neptune",
    "Cancer",
    "Ophiuchus",
    "Placidus",
    // Mots qui s'écrivent pareil en français et en anglais.
    "Menu",
    "Aspects",
    "Aspect",
    "Ascendant",
    "Air",
    "Cardinal",
    "Mutable",
    "Sextile",
    "Opposition",
    "Semi-sextile",
    "Quintile",
    "Biquintile",
    "Latitude",
    "Longitude",
    "Position",
    "Science",
    "Minutes",
    "Source",
    "source",
    "Sources",
    "direct",
    "exact",
    "Exaltation",
    "Constellation",
    "Domicile",
    "Stellium",
    "home",
  ],
};

/** Phrases calculées qui se construisent comme en français, par source et chemin. */
const SAME_FUNCTIONS_AS_FRENCH: Readonly<Record<Translated, readonly string[]>> = {
  en: [
    // « © 2026 Thomas Caron », « UTC+2 », « Paris (France) », « 30° » : sans mot.
    "SITE_STRINGS copyright",
    "NATAL_STRINGS utc",
    "NATAL_STRINGS cityIn",
    "HOUSES_STRINGS size",
    // Le décan par sa table de noms ; « magnitude » s'écrit pareil.
    "content/ui signs.decanName",
    "content/ui signs.starValue",
  ],
};

/** Vrai quand une traduction peut écrire ce texte comme le français, à cette place. */
function mayEqualFrench(locale: Translated, path: string, text: string): boolean {
  if (isNumbersAndSymbols(text) || PROPER_NAME_PATHS.test(path)) return true;
  const words = wordsOf(text);
  return words.length > 0 && words.every((word) => SYMBOLS.has(word) || SAME_AS_FRENCH[locale].includes(word));
}

describe("règles de la complétude", () => {
  it.each([
    ["TODO traduire", true],
    ["Texte FIXME", true],
    ["Todo list", false],
  ])("devrait chercher les marqueurs de brouillon en capitales seulement (« %s » : %s)", (text, draft) => {
    expect(DRAFT_MARK.test(text)).toBe(draft);
  });

  it.each([
    ["menu", "Menu"],
    ["signs.aries.title", "Aries and Musca Borealis"],
    ["cities.paris", "Paris"],
    ["eras.0.sources.1.label", "MUL.APIN"],
    ["Cnc.latin", "Cancer"],
    ["noPhase", "—"],
    ["choice", "UTC+2"],
    ["aspects.sextile.heading", "Sextile (60°)"],
    ["brandHome", "Astrologie, home"],
  ] as const)("devrait accepter, à la place « %s », le texte français « %s »", (path, text) => {
    expect(mayEqualFrench("en", path, text)).toBe(true);
  });

  it.each([
    ["details", "Détails"],
    ["nav.lexicon", "Lexique"],
    ["intro.summary", "Placez deux astres sur la roue."],
    ["nav.signs", "Mars et Vénus"],
  ] as const)("devrait refuser, à la place « %s », le texte français « %s »", (path, text) => {
    expect(mayEqualFrench("en", path, text)).toBe(false);
  });
});

const tables = await loadStringTables();

/** Chaque source de textes, nommée (« content/signs », « NATAL_STRINGS », « SIGN_NAMES ») et lue dans une langue. */
const SOURCES: readonly { name: string; read: (locale: Locale) => unknown }[] = [
  ...Object.entries(SERVER_CONTENTS).map(([domain, getContent]) => ({ name: `content/${domain}`, read: getContent })),
  ...tables.map(({ name, strings }) => ({ name, read: (locale: Locale) => strings[locale] })),
  ...Object.entries(NAME_TABLES).map(([name, table]) => ({ name, read: (locale: Locale) => table[locale] })),
];

/** Forme d'une source dans une langue : le chemin de chaque feuille et sa nature (chaîne ou phrase calculée). */
const shapeOf = (value: unknown) => textLeaves(value).map(({ path, value: leaf }) => `${path} (${typeof leaf})`);

describe("complétude des deux langues", () => {
  it("devrait lire les treize contenus serveur, toutes les tables client et les noms, chacun en deux langues", () => {
    expect(Object.keys(SERVER_CONTENTS)).toHaveLength(13);
    expect(tables.length).toBeGreaterThanOrEqual(9);
    for (const { name, strings } of tables) expect(Object.keys(strings).sort(), name).toEqual([...LOCALES].sort());
    // Garde contre le test vide : plusieurs milliers de feuilles en français.
    const leaves = SOURCES.reduce((sum, { read }) => sum + textLeaves(read("fr")).length, 0);
    expect(leaves).toBeGreaterThan(1500);
  });

  describe.each(SOURCES)("$name", ({ name, read }) => {
    it("devrait donner en anglais les mêmes feuilles qu'en français, aux mêmes places", () => {
      const french = shapeOf(read("fr"));
      expect(french.length).toBeGreaterThan(0);
      for (const locale of TRANSLATED) expect(shapeOf(read(locale)), locale).toEqual(french);
    });

    it("ne devrait laisser aucun texte vide ni marqueur de brouillon, dans aucune langue", () => {
      for (const locale of LOCALES) {
        for (const { path, value } of textLeaves(read(locale))) {
          const text = typeof value === "string" ? value : value.toString();
          expect(text.trim(), `${locale} ${path}`).not.toBe("");
          expect(text, `${locale} ${path}`).not.toMatch(DRAFT_MARK);
        }
      }
    });

    it("devrait tout traduire : aucun texte recopié du français en anglais", () => {
      const french = new Map(textLeaves(read("fr")).map(({ path, value }) => [path, value]));
      const copies = TRANSLATED.flatMap((locale) =>
        textLeaves(read(locale)).flatMap(({ path, value }) => {
          const original = french.get(path);
          if (typeof value === "string") {
            const copied = value === original && !mayEqualFrench(locale, path, value);
            return copied ? [`${locale} ${path} : « ${value} »`] : [];
          }
          const copied = typeof original === "function" && value.toString() === original.toString();
          const allowed = SAME_FUNCTIONS_AS_FRENCH[locale].includes(`${name} ${path}`);
          return copied && !allowed ? [`${locale} ${path} (fonction)`] : [];
        }),
      );
      expect(copies).toEqual([]);
    });
  });
});

/** Tous les textes, dans chaque langue, avec leur provenance. */
const TEXTS = LOCALES.flatMap((locale) =>
  SOURCES.flatMap(({ name, read }) =>
    stringLeaves(read(locale)).map(({ path, text }) => ({ origin: `${locale} ${name}`, path, text })),
  ),
);

describe("ton et forme des textes", () => {
  it("devrait garder chaque résumé sous 320 caractères et chaque accroche sous 160, dans les deux langues", () => {
    const long = TEXTS.filter(
      ({ path, text }) =>
        (/(^|\.)summary$/.test(path) && text.length > 320) || (/(^|\.)tagline$/.test(path) && text.length > 160),
    ).map(({ origin, path, text }) => `${origin} ${path} (${text.length})`);
    expect(long).toEqual([]);
  });

  it.each(LOCALES.flatMap((locale) => ["signs", "planets", "houses", "aspects"].map((domain) => [domain, locale] as const)))(
    "devrait présenter l'astrologie comme une tradition dès l'introduction (%s, %s)",
    (domain, locale) => {
      const content = SERVER_CONTENTS[domain](locale) as { index: { intro: { summary: string; details: unknown } } };
      const intro = stringLeaves(content.index.intro)
        .map(({ text }) => text)
        .join(" ");
      expect(intro).toMatch(/tradition|astrolog/i);
    },
  );

  it("ne devrait employer aucun caractère astrologique Unicode (rendu emoji sur iOS) : les glyphes sont en SVG", () => {
    const withSymbols = TEXTS.filter(({ text }) => /[☉☽☾☿♀♂-♓☊☋☌☍⚹⚻]/u.test(text));
    expect(withSymbols.map(({ origin, path }) => `${origin} ${path}`)).toEqual([]);
  });
});
