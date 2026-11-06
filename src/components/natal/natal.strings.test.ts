// @vitest-environment node
import { describe, expect, it } from "vitest";
import { LOCALES } from "@/i18n/locales";
import { CITIES, CITY_KEYS } from "@/lib/geo/cities";
import { CITY_STRINGS } from "./cities.strings";
import { NATAL_STRINGS } from "./natal.strings";
import { CITY_GROUPS } from "./places";

const S = NATAL_STRINGS.fr;

/** Taille mesurée comme la garde globale (`src/i18n/stringsBudget.test.ts`) : JSON, fonctions comprises. */
const sizeOf = (strings: unknown) =>
  JSON.stringify(strings, (_key, value: unknown) => (typeof value === "function" ? value.toString() : value)).length;

describe("CITY_STRINGS", () => {
  it.each(LOCALES)("devrait nommer chaque ville du formulaire, et rien d'autre (%s)", (locale) => {
    expect(Object.keys(CITY_STRINGS[locale].cities).sort()).toEqual([...CITY_KEYS].sort());
    expect(CITY_KEYS.filter((key) => CITY_STRINGS[locale].cities[key].trim() === "")).toEqual([]);
  });

  it.each(LOCALES)("devrait nommer chaque pays des villes, et rien d'autre (%s)", (locale) => {
    const countries = [...new Set(CITY_KEYS.map((key) => CITIES[key].country))].sort();
    expect(Object.keys(CITY_STRINGS[locale].countries).sort()).toEqual(countries);
  });

  it("devrait grouper les villes par pays, la France d'abord, les villes par ordre alphabétique", () => {
    expect(CITY_GROUPS.fr.flatMap((group) => group.cities)).toHaveLength(CITY_KEYS.length);
    expect(CITY_GROUPS.fr[0]).toMatchObject({ country: "FR", label: "France" });
    expect(CITY_GROUPS.fr[0].cities.slice(0, 3)).toEqual(["ajaccio", "bordeaux", "lille"]);
    expect(CITY_GROUPS.fr.find((group) => group.country === "CA")?.cities).toEqual(["moncton", "montreal", "quebec"]);
  });

  it("devrait nommer les pays en anglais et ranger leurs villes par leur nom anglais", () => {
    expect(CITY_GROUPS.en.flatMap((group) => group.cities)).toHaveLength(CITY_KEYS.length);
    expect(CITY_GROUPS.en.find((group) => group.country === "BE")).toMatchObject({ label: "Belgium", cities: ["bruxelles", "liege"] });
    expect(CITY_GROUPS.en.find((group) => group.country === "DZ")?.label).toBe("Algeria");
  });
});

describe("NATAL_STRINGS", () => {
  it.each(LOCALES)("devrait tenir, avec les villes, dans les 9 000 caractères alloués au calculateur (%s)", (locale) => {
    const natal = sizeOf(NATAL_STRINGS[locale]);
    const cities = sizeOf(CITY_STRINGS[locale]);
    expect(natal + cities, `natal ${natal}, villes ${cities}`).toBeLessThanOrEqual(9000);
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

  it("devrait composer en anglais les libellés de l'heure répétée et la phrase de synthèse", () => {
    const en = NATAL_STRINGS.en;
    expect(en.choice(false, en.utc("+2"), true)).toBe("First time (summer time, UTC+2)");
    expect(en.bigThree("Cancer", "Gemini", "Scorpio").join("")).toBe("Sun in Cancer, Moon in Gemini, Ascendant Scorpio.");
    expect(en.dominants(["Fire"], ["Cardinal", "Fixed"])).toBe("Dominants: Fire; Cardinal and Fixed.");
  });

  it("devrait nommer les éléments puis les modalités dominants", () => {
    expect(S.dominants(["Feu"], ["Cardinal", "Fixe"]).replace(/\s/g, " ")).toBe("Dominantes : Feu ; Cardinal et Fixe.");
  });
});
