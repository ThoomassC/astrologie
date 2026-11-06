// @vitest-environment node
import { describe, expect, it } from "vitest";
import { loadStringTables } from "@/i18n/testUtils";

/*
 * Budget des chaînes client : les tables `*.strings.ts` partent au navigateur avec les composants client qui les
 * lisent. Au-delà de 20 000 caractères en tout, un texte doit vivre côté serveur (`src/content/`), rendu dans le HTML.
 */
const BUDGET = 20_000;

const tables = await loadStringTables();

const sizeOf = (strings: unknown) =>
  JSON.stringify(strings, (_key, value: unknown) => (typeof value === "function" ? value.toString() : value)).length;

describe("budget des chaînes client", () => {
  it("devrait mesurer des tables *.strings.ts non vides (garde contre le test vide)", () => {
    expect(tables.length).toBeGreaterThanOrEqual(3);
    for (const { name, strings } of tables) expect(sizeOf(strings), name).toBeGreaterThan(2);
  });

  it("devrait tenir dans 20 000 caractères, toutes tables réunies", () => {
    const sizes = tables.map(({ name, strings }) => ({ name, size: sizeOf(strings) }));
    const total = sizes.reduce((sum, { size }) => sum + size, 0);
    expect(total, sizes.map(({ name, size }) => `${name} ${size}`).join(", ")).toBeLessThanOrEqual(BUDGET);
  });
});
