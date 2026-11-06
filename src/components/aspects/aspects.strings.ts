import type { Locale } from "@/i18n/locales";
import type { AspectKey } from "@/lib/astro/keys";

/** Textes de l'explorateur des aspects (composant client). */
export interface AspectsStrings {
  title: string;
  intro: string;
  wheelTitle: string;
  pointLabel: (n: 1 | 2) => string;
  planet: string;
  position: string;
  separation: (degrees: string) => string;
  /** Début du résumé (« Soleil et Lune : »), puis le nom de l'aspect (un lien) et la suite. */
  pair: (a: string, b: string) => string;
  found: (orb: string, maxOrb: string) => string;
  exact: string;
  none: (degrees: string) => string;
  natures: Readonly<Record<"neutral" | "harmonious" | "tense", string>>;
  nature: (nature: string) => string;
  placeLabel: string;
  place: (aspect: string) => string;
  aspectNames: Readonly<Record<AspectKey, string>>;
}

export const ASPECTS_STRINGS: Readonly<Record<Locale, AspectsStrings>> = {
  fr: {
    title: "Former un aspect",
    intro:
      "Placez deux astres sur la roue : l'explorateur mesure l'écart entre eux et dit quel aspect ils forment, avec son orbe (l'écart à l'angle exact).",
    wheelTitle: "Deux astres sur la roue du zodiaque, reliés par l'aspect qu'ils forment",
    pointLabel: (n) => (n === 1 ? "Premier astre" : "Second astre"),
    planet: "Astre",
    position: "Position sur le zodiaque",
    separation: (degrees) => `Écart : ${degrees}°`,
    pair: (a, b) => `${a} et ${b} : `,
    found: (orb, maxOrb) => `, orbe de ${orb}° (toléré jusqu'à ${maxOrb}°).`,
    exact: " exact.",
    none: (degrees) => `aucun aspect à ${degrees}° : l'écart ne tombe dans l'orbe d'aucun angle.`,
    natures: { neutral: "aspect neutre", harmonious: "aspect harmonieux", tense: "aspect tendu" },
    nature: (nature) => `C'est un ${nature}.`,
    placeLabel: "Placer le second astre",
    place: (aspect) => `Placer en ${aspect}`,
    aspectNames: {
      conjunction: "Conjonction",
      sextile: "Sextile",
      square: "Carré",
      trine: "Trigone",
      opposition: "Opposition",
      semiSextile: "Semi-sextile",
      semiSquare: "Semi-carré",
      quintile: "Quintile",
      sesquiquadrate: "Sesqui-carré",
      biquintile: "Biquintile",
      quincunx: "Quinconce",
    },
  },
  en: {
    title: "Form an aspect",
    intro:
      "Place two planets on the wheel: the explorer measures the gap between them and tells you which aspect they form, with its orb (the distance from the exact angle).",
    wheelTitle: "Two planets on the zodiac wheel, joined by the aspect they form",
    pointLabel: (n) => (n === 1 ? "First planet" : "Second planet"),
    planet: "Planet",
    position: "Position in the zodiac",
    separation: (degrees) => `Gap: ${degrees}°`,
    pair: (a, b) => `${a} and ${b}: `,
    found: (orb, maxOrb) => `, orb of ${orb}° (allowed up to ${maxOrb}°).`,
    exact: " exact.",
    none: (degrees) => `no aspect at ${degrees}°: the gap falls within the orb of no angle.`,
    natures: { neutral: "neutral aspect", harmonious: "harmonious aspect", tense: "tense aspect" },
    nature: (nature) => `It is a ${nature}.`,
    placeLabel: "Place the second planet",
    place: (aspect) => `Place in ${aspect}`,
    aspectNames: {
      conjunction: "Conjunction",
      sextile: "Sextile",
      square: "Square",
      trine: "Trine",
      opposition: "Opposition",
      semiSextile: "Semi-sextile",
      semiSquare: "Semi-square",
      quintile: "Quintile",
      sesquiquadrate: "Sesquiquadrate",
      biquintile: "Biquintile",
      quincunx: "Quincunx",
    },
  },
};
