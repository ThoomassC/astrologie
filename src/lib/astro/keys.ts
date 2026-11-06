/**
 * Clés du domaine, en anglais, sans aucun nom affiché : les noms vivent dans `src/i18n/names.ts`, les adresses
 * (slugs français) dans `src/lib/site/routes.ts`.
 */

export const SIGN_KEYS = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces",
] as const;
export type SignKey = (typeof SIGN_KEYS)[number];

export const PLANET_KEYS = [
  "sun",
  "moon",
  "mercury",
  "venus",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
  "pluto",
] as const;
export type PlanetKey = (typeof PLANET_KEYS)[number];

/** Les sept astres de l'astrologie ancienne, visibles à l'œil nu. */
export const CLASSICAL_PLANET_KEYS = ["sun", "moon", "mercury", "venus", "mars", "jupiter", "saturn"] as const;
export type ClassicalPlanetKey = (typeof CLASSICAL_PLANET_KEYS)[number];

/** Points d'un thème : les dix astres et le nœud nord (moyen). */
export const CHART_POINT_KEYS = [...PLANET_KEYS, "northNode"] as const;
export type ChartPointKey = (typeof CHART_POINT_KEYS)[number];

export const ANGLE_KEYS = ["ascendant", "midheaven"] as const;
export type AngleKey = (typeof ANGLE_KEYS)[number];

/** Ce qui peut former un aspect : les dix astres, l'Ascendant et le Milieu du Ciel (pas le nœud). */
export type AspectPointKey = PlanetKey | AngleKey;

export const ELEMENT_KEYS = ["fire", "earth", "air", "water"] as const;
export type ElementKey = (typeof ELEMENT_KEYS)[number];

export const MODALITY_KEYS = ["cardinal", "fixed", "mutable"] as const;
export type ModalityKey = (typeof MODALITY_KEYS)[number];

export const HOUSE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
export type HouseNumber = (typeof HOUSE_NUMBERS)[number];

export const HOUSE_SYSTEM_KEYS = ["placidus", "equal", "wholeSign", "porphyry"] as const;
export type HouseSystemKey = (typeof HOUSE_SYSTEM_KEYS)[number];

export const MAJOR_ASPECT_KEYS = ["conjunction", "sextile", "square", "trine", "opposition"] as const;
export const MINOR_ASPECT_KEYS = [
  "semiSextile",
  "semiSquare",
  "quintile",
  "sesquiquadrate",
  "biquintile",
  "quincunx",
] as const;
export const ASPECT_KEYS = [...MAJOR_ASPECT_KEYS, ...MINOR_ASPECT_KEYS] as const;
export type AspectKey = (typeof ASPECT_KEYS)[number];
export type AspectFamily = "major" | "minor";
/** Couleur d'un aspect dans la roue : harmonieux, tendu, ou neutre (la conjonction). */
export type AspectNature = "neutral" | "harmonious" | "tense";

/** Constellations que traverse le Soleil, symboles de l'UAI ; Ophiuchus (Oph) n'est pas un signe. */
export const ZODIAC_CONSTELLATION_KEYS = [
  "Ari",
  "Tau",
  "Gem",
  "Cnc",
  "Leo",
  "Vir",
  "Lib",
  "Sco",
  "Oph",
  "Sgr",
  "Cap",
  "Aqr",
  "Psc",
] as const;
export type ZodiacConstellationKey = (typeof ZODIAC_CONSTELLATION_KEYS)[number];

/** Longitude écliptique en degrés, dans [0, 360). */
export type Longitude = number;

export type Twelve<T> = readonly [T, T, T, T, T, T, T, T, T, T, T, T];

function isOneOf<T extends string>(values: readonly T[], value: unknown): value is T {
  return typeof value === "string" && (values as readonly string[]).includes(value);
}

export const isSignKey = (value: unknown): value is SignKey => isOneOf(SIGN_KEYS, value);
export const isPlanetKey = (value: unknown): value is PlanetKey => isOneOf(PLANET_KEYS, value);
export const isHouseSystemKey = (value: unknown): value is HouseSystemKey => isOneOf(HOUSE_SYSTEM_KEYS, value);
export const isAspectKey = (value: unknown): value is AspectKey => isOneOf(ASPECT_KEYS, value);
