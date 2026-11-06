// @vitest-environment node
import { describe, expect, it } from "vitest";
import {
  DEFAULT_LOCALE,
  INTL_LOCALE,
  isLocale,
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE_S,
  LOCALE_NAMES,
  LOCALES,
  OG_LOCALE,
  otherLocale,
} from "@/i18n/locales";

describe("LOCALES", () => {
  it("devrait proposer le français puis l'anglais", () => {
    expect(LOCALES).toEqual(["fr", "en"]);
  });

  it("devrait parler français quand rien ne dit la langue", () => {
    expect(DEFAULT_LOCALE).toBe("fr");
  });
});

describe("isLocale", () => {
  it.each(["fr", "en"])("devrait reconnaître la langue du site « %s »", (value) => {
    expect(isLocale(value)).toBe(true);
  });

  it.each([
    { label: "majuscules", value: "FR" },
    { label: "balise régionale", value: "en-GB" },
    { label: "langue absente du site", value: "es" },
    { label: "espace autour", value: " fr" },
    { label: "chaîne vide", value: "" },
    { label: "null", value: null },
    { label: "undefined", value: undefined },
    { label: "nombre", value: 1 },
  ])("devrait refuser une valeur qui n'est pas une langue du site ($label)", ({ value }) => {
    expect(isLocale(value)).toBe(false);
  });
});

describe("otherLocale", () => {
  it("devrait donner l'autre langue du site", () => {
    expect(otherLocale("fr")).toBe("en");
    expect(otherLocale("en")).toBe("fr");
  });
});

describe("tables par langue", () => {
  it("devrait donner à Intl l'anglais britannique (jour-mois-année, formats métriques)", () => {
    expect(INTL_LOCALE).toEqual({ fr: "fr-FR", en: "en-GB" });
  });

  it("devrait nommer chaque langue dans sa propre langue", () => {
    expect(LOCALE_NAMES).toEqual({ fr: "Français", en: "English" });
  });

  it("devrait donner la locale Open Graph de chaque langue", () => {
    expect(OG_LOCALE).toEqual({ fr: "fr_FR", en: "en_GB" });
  });
});

describe("cookie de langue", () => {
  it("devrait s'appeler « lang » et garder la préférence un an", () => {
    expect(LOCALE_COOKIE).toBe("lang");
    expect(LOCALE_COOKIE_MAX_AGE_S).toBe(365 * 24 * 60 * 60);
  });
});
