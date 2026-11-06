// @vitest-environment node
import { describe, expect, it } from "vitest";
import { CITIES, CITY_KEYS } from "@/lib/geo/cities";
import { CITY_STRINGS } from "./cities.strings";
import { NATAL_STRINGS as S } from "./natal.strings";
import { CITY_GROUPS } from "./places";

/** Taille mesurée comme la garde globale (`src/i18n/stringsBudget.test.ts`) : JSON, fonctions comprises. */
const sizeOf = (strings: unknown) =>
  JSON.stringify(strings, (_key, value: unknown) => (typeof value === "function" ? value.toString() : value)).length;

describe("CITY_STRINGS", () => {
  it("devrait nommer chaque ville du formulaire, et rien d'autre", () => {
    expect(Object.keys(CITY_STRINGS.cities).sort()).toEqual([...CITY_KEYS].sort());
    expect(CITY_KEYS.filter((key) => CITY_STRINGS.cities[key].trim() === "")).toEqual([]);
  });

  it("devrait nommer chaque pays des villes, et rien d'autre", () => {
    const countries = [...new Set(CITY_KEYS.map((key) => CITIES[key].country))].sort();
    expect(Object.keys(CITY_STRINGS.countries).sort()).toEqual(countries);
  });

  it("devrait grouper les villes par pays, la France d'abord, les villes par ordre alphabétique", () => {
    expect(CITY_GROUPS.flatMap((group) => group.cities)).toHaveLength(CITY_KEYS.length);
    expect(CITY_GROUPS[0]).toMatchObject({ country: "FR", label: "France" });
    expect(CITY_GROUPS[0].cities.slice(0, 3)).toEqual(["ajaccio", "bordeaux", "lille"]);
    expect(CITY_GROUPS.find((group) => group.country === "CA")?.cities).toEqual(["moncton", "montreal", "quebec"]);
  });
});

describe("NATAL_STRINGS", () => {
  it("devrait tenir, avec les villes, dans les 9 000 caractères alloués au calculateur", () => {
    const size = sizeOf(S) + sizeOf(CITY_STRINGS);
    expect(size, `natal ${sizeOf(S)}, villes ${sizeOf(CITY_STRINGS)}`).toBeLessThanOrEqual(9000);
  });

  it("devrait calculer les libellés de l'heure répétée à partir des décalages", () => {
    expect(S.choice(false, S.utc("+2"), true)).toBe("Première fois (heure d'été, UTC+2)");
    expect(S.choice(true, S.utc("+1"), true)).toBe("Seconde fois (heure d'hiver, UTC+1)");
    expect(S.choice(true, S.utc("+3"), false)).toBe("Seconde fois (UTC+3)");
  });

  it("devrait expliquer l'heure sautée, avec les heures du saut quand elles sont connues", () => {
    expect(S.nonexistent({ from: "02:00", to: "03:00", time: "02:30", shifted: "03:30" })).toMatch(/^À cette date, les horloges sont passées de 02:00 à 03:00 :/);
    expect(S.nonexistent({ from: "02:00", to: "03:00", time: "02:30", shifted: "03:30" }).replace(/\s/g, " ")).toBe(
      "À cette date, les horloges sont passées de 02:00 à 03:00 : 02:30 n'a pas existé. L'acte suit peut-être l'heure d'hiver : essayez 03:30, ou indiquez le décalage dans les réglages avancés.",
    );
    expect(S.nonexistent(null)).toMatch(/^À cette date, les horloges ont avancé :/);
  });

  it("devrait composer la phrase de synthèse, avec ou sans Ascendant", () => {
    expect(S.bigThree("Cancer", "Gémeaux", "Scorpion").join("")).toBe(
      "Soleil en Cancer, Lune en Gémeaux, Ascendant Scorpion.",
    );
    expect(S.bigThree("Cancer", "Gémeaux", null).join("")).toMatch(/^Soleil en Cancer, Lune en Gémeaux\. Sans l'heure/);
  });

  it("devrait accorder les dominants au nombre", () => {
    expect(S.dominantElements(["Feu"])).toBe("Élément dominant : Feu.");
    expect(S.dominantModalities(["Cardinal", "Fixe"])).toBe("Modalités dominantes : Cardinal et Fixe.");
  });
});
