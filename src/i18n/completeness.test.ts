// @vitest-environment node
import { describe, expect, it } from "vitest";
import { loadStringTables, SERVER_CONTENTS, stringLeaves } from "@/i18n/testUtils";

/*
 * Complétude des textes : aucun texte vide, aucun « TODO », aucun résumé trop long ; et le ton : chaque page de
 * notions présente l'astrologie comme une tradition, pas comme un savoir établi.
 */

const tables = await loadStringTables();

const TEXTS = [
  ...Object.entries(SERVER_CONTENTS).flatMap(([domain, getContent]) =>
    stringLeaves(getContent()).map(({ path, text }) => ({ origin: `content/${domain}`, path, text })),
  ),
  ...tables.flatMap(({ name, strings }) => stringLeaves(strings).map(({ path, text }) => ({ origin: name, path, text }))),
];

describe("complétude des textes", () => {
  it("ne devrait laisser aucun texte vide ni « TODO »", () => {
    const faults = TEXTS.filter(({ text }) => text.trim() === "" || /\bTODO\b/i.test(text)).map(
      ({ origin, path }) => `${origin} ${path}`,
    );
    expect(faults).toEqual([]);
  });

  it("devrait garder chaque résumé sous 320 caractères et chaque accroche sous 160", () => {
    const long = TEXTS.filter(
      ({ path, text }) => (/(^|\.)summary$/.test(path) && text.length > 320) || (/(^|\.)tagline$/.test(path) && text.length > 160),
    ).map(({ origin, path, text }) => `${origin} ${path} (${text.length})`);
    expect(long).toEqual([]);
  });

  it.each(["signs", "planets", "houses", "aspects"])(
    "devrait présenter l'astrologie comme une tradition dès l'introduction (%s)",
    (domain) => {
      const content = SERVER_CONTENTS[domain]() as { index: { intro: { summary: string; details: unknown } } };
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
