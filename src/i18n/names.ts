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
import type { Locale } from "./locales";

/*
 * Noms affichés, dans les deux langues, lus côté serveur comme côté client (courts : ils partent au navigateur).
 * Chaque table s'indexe d'abord par la langue : `SIGN_NAMES[locale].aries`.
 */

/**
 * Nom d'un signe ou d'un astre, et ses deux formes en phrase :
 * - `of`, la forme après « de » : « du Bélier », « de la Balance », « d'Uranus » ; en anglais « of Aries », « of the Sun » ;
 * - `the`, la forme sujet, avec article : « le Bélier », « Mercure » ; en anglais « Aries », « the Sun », « Mercury ».
 */
export interface SignName {
  readonly name: string;
  readonly of: string;
  readonly the: string;
}

export type PointName = SignName;

export const SIGN_NAMES: Readonly<Record<Locale, Readonly<Record<SignKey, SignName>>>> = {
  fr: {
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
  },
  en: {
    aries: { name: "Aries", of: "of Aries", the: "Aries" },
    taurus: { name: "Taurus", of: "of Taurus", the: "Taurus" },
    gemini: { name: "Gemini", of: "of Gemini", the: "Gemini" },
    cancer: { name: "Cancer", of: "of Cancer", the: "Cancer" },
    leo: { name: "Leo", of: "of Leo", the: "Leo" },
    virgo: { name: "Virgo", of: "of Virgo", the: "Virgo" },
    libra: { name: "Libra", of: "of Libra", the: "Libra" },
    scorpio: { name: "Scorpio", of: "of Scorpio", the: "Scorpio" },
    sagittarius: { name: "Sagittarius", of: "of Sagittarius", the: "Sagittarius" },
    capricorn: { name: "Capricorn", of: "of Capricorn", the: "Capricorn" },
    aquarius: { name: "Aquarius", of: "of Aquarius", the: "Aquarius" },
    pisces: { name: "Pisces", of: "of Pisces", the: "Pisces" },
  },
};

export const POINT_NAMES: Readonly<Record<Locale, Readonly<Record<ChartPointKey | AngleKey, PointName>>>> = {
  fr: {
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
  },
  en: {
    sun: { name: "Sun", of: "of the Sun", the: "the Sun" },
    moon: { name: "Moon", of: "of the Moon", the: "the Moon" },
    mercury: { name: "Mercury", of: "of Mercury", the: "Mercury" },
    venus: { name: "Venus", of: "of Venus", the: "Venus" },
    mars: { name: "Mars", of: "of Mars", the: "Mars" },
    jupiter: { name: "Jupiter", of: "of Jupiter", the: "Jupiter" },
    saturn: { name: "Saturn", of: "of Saturn", the: "Saturn" },
    uranus: { name: "Uranus", of: "of Uranus", the: "Uranus" },
    neptune: { name: "Neptune", of: "of Neptune", the: "Neptune" },
    pluto: { name: "Pluto", of: "of Pluto", the: "Pluto" },
    northNode: { name: "North Node", of: "of the North Node", the: "the North Node" },
    ascendant: { name: "Ascendant", of: "of the Ascendant", the: "the Ascendant" },
    midheaven: { name: "Midheaven", of: "of the Midheaven", the: "the Midheaven" },
  },
};

/** Abréviations des angles dans la roue : AS, MC, DS, FC ; en anglais AC, MC, DC, IC. */
export const ANGLE_ABBREVIATIONS: Readonly<
  Record<Locale, Readonly<Record<AngleKey | "descendant" | "imumCoeli", string>>>
> = {
  fr: { ascendant: "AS", midheaven: "MC", descendant: "DS", imumCoeli: "FC" },
  en: { ascendant: "AC", midheaven: "MC", descendant: "DC", imumCoeli: "IC" },
};

type GroupName = { readonly name: string; readonly signs: string };

export const ELEMENT_NAMES: Readonly<Record<Locale, Readonly<Record<ElementKey, GroupName>>>> = {
  fr: {
    fire: { name: "Feu", signs: "signes de feu" },
    earth: { name: "Terre", signs: "signes de terre" },
    air: { name: "Air", signs: "signes d'air" },
    water: { name: "Eau", signs: "signes d'eau" },
  },
  en: {
    fire: { name: "Fire", signs: "fire signs" },
    earth: { name: "Earth", signs: "earth signs" },
    air: { name: "Air", signs: "air signs" },
    water: { name: "Water", signs: "water signs" },
  },
};

export const MODALITY_NAMES: Readonly<Record<Locale, Readonly<Record<ModalityKey, GroupName>>>> = {
  fr: {
    cardinal: { name: "Cardinal", signs: "signes cardinaux" },
    fixed: { name: "Fixe", signs: "signes fixes" },
    mutable: { name: "Mutable", signs: "signes mutables" },
  },
  en: {
    cardinal: { name: "Cardinal", signs: "cardinal signs" },
    fixed: { name: "Fixed", signs: "fixed signs" },
    mutable: { name: "Mutable", signs: "mutable signs" },
  },
};

export const PLANET_GROUP_NAMES: Readonly<Record<Locale, Readonly<Record<PlanetGroup, string>>>> = {
  fr: {
    luminary: "Luminaires",
    personal: "Planètes personnelles",
    social: "Planètes sociales",
    transpersonal: "Planètes transpersonnelles",
  },
  en: {
    luminary: "Luminaries",
    personal: "Personal planets",
    social: "Social planets",
    transpersonal: "Transpersonal planets",
  },
};

export const ASPECT_NAMES: Readonly<Record<Locale, Readonly<Record<AspectKey, string>>>> = {
  fr: {
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
  en: {
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
};

export const HOUSE_SYSTEM_NAMES: Readonly<Record<Locale, Readonly<Record<HouseSystemKey, string>>>> = {
  fr: { placidus: "Placidus", equal: "Maisons égales", wholeSign: "Signes entiers", porphyry: "Porphyre" },
  en: { placidus: "Placidus", equal: "Equal houses", wholeSign: "Whole signs", porphyry: "Porphyry" },
};

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"] as const;

/** Numéro d'une maison en chiffres romains, le même dans les deux langues. */
export function houseRoman(house: HouseNumber): string {
  return ROMAN[house - 1];
}

type ConstellationName = { readonly name: string; readonly latin: string };

/** Constellations du zodiaque astronomique : nom usuel dans la langue et nom latin de l'UAI. */
export const CONSTELLATION_NAMES: Readonly<Record<Locale, Readonly<Record<ZodiacConstellationKey, ConstellationName>>>> = {
  fr: {
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
  },
  en: {
    Ari: { name: "Aries", latin: "Aries" },
    Tau: { name: "Taurus", latin: "Taurus" },
    Gem: { name: "Gemini", latin: "Gemini" },
    Cnc: { name: "Cancer", latin: "Cancer" },
    Leo: { name: "Leo", latin: "Leo" },
    Vir: { name: "Virgo", latin: "Virgo" },
    Lib: { name: "Libra", latin: "Libra" },
    Sco: { name: "Scorpius", latin: "Scorpius" },
    Oph: { name: "Ophiuchus (the Serpent Bearer)", latin: "Ophiuchus" },
    Sgr: { name: "Sagittarius", latin: "Sagittarius" },
    Cap: { name: "Capricornus", latin: "Capricornus" },
    Aqr: { name: "Aquarius", latin: "Aquarius" },
    Psc: { name: "Pisces", latin: "Pisces" },
  },
};

type Months = readonly [string, string, string, string, string, string, string, string, string, string, string, string];

/** Mois, en minuscules en français, avec la capitale en anglais. */
export const MONTH_NAMES: Readonly<Record<Locale, Months>> = {
  fr: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};
