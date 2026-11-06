import type {
  AngleKey,
  AspectKey,
  ChartPointKey,
  ElementKey,
  HouseNumber,
  HouseSystemKey,
  ModalityKey,
  SignKey,
  ZodiacConstellationKey,
} from "@/lib/astro/keys";
import type { PlanetGroup } from "@/lib/astro/planets";

/**
 * Noms affichés, lus côté serveur comme côté client (courts : ils partent au navigateur). `of` est la forme après
 * « de » (« du Bélier », « de la Balance », « d'Uranus ») ; `the` la forme sujet (« le Soleil », « Mercure »).
 */
export interface SignName {
  readonly name: string;
  readonly of: string;
  /** Forme avec article : « le Bélier », « la Vierge », « les Gémeaux ». */
  readonly the: string;
}

export const SIGN_NAMES: Readonly<Record<SignKey, SignName>> = {
  aries: { name: "Bélier", of: "du Bélier", the: "le Bélier" },
  taurus: { name: "Taureau", of: "du Taureau", the: "le Taureau" },
  gemini: { name: "Gémeaux", of: "des Gémeaux", the: "les Gémeaux" },
  cancer: { name: "Cancer", of: "du Cancer", the: "le Cancer" },
  leo: { name: "Lion", of: "du Lion", the: "le Lion" },
  virgo: { name: "Vierge", of: "de la Vierge", the: "la Vierge" },
  libra: { name: "Balance", of: "de la Balance", the: "la Balance" },
  scorpio: { name: "Scorpion", of: "du Scorpion", the: "le Scorpion" },
  sagittarius: { name: "Sagittaire", of: "du Sagittaire", the: "le Sagittaire" },
  capricorn: { name: "Capricorne", of: "du Capricorne", the: "le Capricorne" },
  aquarius: { name: "Verseau", of: "du Verseau", the: "le Verseau" },
  pisces: { name: "Poissons", of: "des Poissons", the: "les Poissons" },
};

export interface PointName {
  readonly name: string;
  readonly of: string;
  readonly the: string;
}

export const POINT_NAMES: Readonly<Record<ChartPointKey | AngleKey, PointName>> = {
  sun: { name: "Soleil", of: "du Soleil", the: "le Soleil" },
  moon: { name: "Lune", of: "de la Lune", the: "la Lune" },
  mercury: { name: "Mercure", of: "de Mercure", the: "Mercure" },
  venus: { name: "Vénus", of: "de Vénus", the: "Vénus" },
  mars: { name: "Mars", of: "de Mars", the: "Mars" },
  jupiter: { name: "Jupiter", of: "de Jupiter", the: "Jupiter" },
  saturn: { name: "Saturne", of: "de Saturne", the: "Saturne" },
  uranus: { name: "Uranus", of: "d'Uranus", the: "Uranus" },
  neptune: { name: "Neptune", of: "de Neptune", the: "Neptune" },
  pluto: { name: "Pluton", of: "de Pluton", the: "Pluton" },
  northNode: { name: "Nœud nord", of: "du Nœud nord", the: "le Nœud nord" },
  ascendant: { name: "Ascendant", of: "de l'Ascendant", the: "l'Ascendant" },
  midheaven: { name: "Milieu du Ciel", of: "du Milieu du Ciel", the: "le Milieu du Ciel" },
};

/** Abréviations des angles dans la roue. */
export const ANGLE_ABBREVIATIONS: Readonly<Record<AngleKey | "descendant" | "imumCoeli", string>> = {
  ascendant: "AS",
  midheaven: "MC",
  descendant: "DS",
  imumCoeli: "FC",
};

export const ELEMENT_NAMES: Readonly<Record<ElementKey, { readonly name: string; readonly signs: string }>> = {
  fire: { name: "Feu", signs: "signes de feu" },
  earth: { name: "Terre", signs: "signes de terre" },
  air: { name: "Air", signs: "signes d'air" },
  water: { name: "Eau", signs: "signes d'eau" },
};

export const MODALITY_NAMES: Readonly<Record<ModalityKey, { readonly name: string; readonly signs: string }>> = {
  cardinal: { name: "Cardinal", signs: "signes cardinaux" },
  fixed: { name: "Fixe", signs: "signes fixes" },
  mutable: { name: "Mutable", signs: "signes mutables" },
};

export const PLANET_GROUP_NAMES: Readonly<Record<PlanetGroup, string>> = {
  luminary: "Luminaires",
  personal: "Planètes personnelles",
  social: "Planètes sociales",
  transpersonal: "Planètes transpersonnelles",
};

export const ASPECT_NAMES: Readonly<Record<AspectKey, string>> = {
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
};

export const HOUSE_SYSTEM_NAMES: Readonly<Record<HouseSystemKey, string>> = {
  placidus: "Placidus",
  equal: "Maisons égales",
  wholeSign: "Signes entiers",
  porphyry: "Porphyre",
};

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"] as const;

export function houseRoman(house: HouseNumber): string {
  return ROMAN[house - 1];
}

/** Constellations du zodiaque astronomique : nom français et nom latin de l'UAI. */
export const CONSTELLATION_NAMES: Readonly<Record<ZodiacConstellationKey, { readonly name: string; readonly latin: string }>> = {
  Ari: { name: "Bélier", latin: "Aries" },
  Tau: { name: "Taureau", latin: "Taurus" },
  Gem: { name: "Gémeaux", latin: "Gemini" },
  Cnc: { name: "Cancer", latin: "Cancer" },
  Leo: { name: "Lion", latin: "Leo" },
  Vir: { name: "Vierge", latin: "Virgo" },
  Lib: { name: "Balance", latin: "Libra" },
  Sco: { name: "Scorpion", latin: "Scorpius" },
  Oph: { name: "Ophiuchus (le Serpentaire)", latin: "Ophiuchus" },
  Sgr: { name: "Sagittaire", latin: "Sagittarius" },
  Cap: { name: "Capricorne", latin: "Capricornus" },
  Aqr: { name: "Verseau", latin: "Aquarius" },
  Psc: { name: "Poissons", latin: "Pisces" },
};

export const MONTH_NAMES = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
] as const;
