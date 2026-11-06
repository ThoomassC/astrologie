// @vitest-environment node
import { describe, expect, it } from "vitest";
import { LOCALES } from "@/i18n/locales";
import { loadStringTables } from "@/i18n/testUtils";

/*
 * Budget des chaînes client : les tables `*.strings.ts` partent au navigateur dans les deux langues, avec les
 * composants client qui les lisent. Au-delà de 20 000 caractères par langue, un texte doit vivre côté serveur
 * (`src/content/`), rendu dans le HTML de la page.
 */
const BUDGET_PER_LOCALE = 20_000;

const tables = await loadStringTables();

/** Taille d'une table dans une langue : son JSON, chaque fonction (pluriel, phrase calculée) comptée par sa source. */
const sizeOf = (strings: unknown) =>
  JSON.stringify(strings, (_key, value: unknown) => (typeof value === "function" ? value.toString() : value)).length;

describe("budget des chaînes client", () => {
  it("devrait mesurer toutes les tables *.strings.ts, chacune non vide dans chaque langue", () => {
    expect(tables.length).toBeGreaterThanOrEqual(9);
    for (const { name, strings } of tables) {
      for (const locale of LOCALES) expect(sizeOf(strings[locale]), `${name}.${locale}`).toBeGreaterThan(2);
    }
  });

  it.each(LOCALES)("devrait tenir dans 20 000 caractères, toutes tables réunies (%s)", (locale) => {
    const sizes = tables.map(({ name, strings }) => ({ name, size: sizeOf(strings[locale]) }));
    const total = sizes.reduce((sum, { size }) => sum + size, 0);
    const detail = sizes.map(({ name, size }) => `${name} ${size}`).join(", ");
    expect(total, detail).toBeLessThanOrEqual(BUDGET_PER_LOCALE);
    // Garde contre le test vide : les tables pèsent plus de 15 000 caractères par langue.
    expect(total, detail).toBeGreaterThan(5_000);
  });
});
