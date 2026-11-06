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

export const ASPECTS_STRINGS: AspectsStrings = {
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
};
