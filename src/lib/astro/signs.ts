import type { ClassicalPlanetKey, ElementKey, ModalityKey, PlanetKey, SignKey, ZodiacConstellationKey } from "./keys";
import { SIGN_KEYS } from "./keys";

/** Un décan : un tiers de signe (10°), sa « face » chaldéenne et le signe de même élément qui le colore. */
export interface Decan {
  readonly startDeg: 0 | 10 | 20;
  /** Ordre chaldéen (Mars, Soleil, Vénus, Mercure, Lune, Saturne, Jupiter), en partant de 0° Bélier. */
  readonly faceRuler: ClassicalPlanetKey;
  /** Décans « par triplicité » des auteurs modernes : signe, puis les deux suivants du même élément. */
  readonly triplicitySign: SignKey;
}

export interface MonthDay {
  readonly month: number;
  readonly day: number;
}

export interface SignData {
  readonly key: SignKey;
  /** Le signe couvre [30 × index, 30 × index + 30[ en longitude tropicale. */
  readonly index: number;
  readonly element: ElementKey;
  readonly modality: ModalityKey;
  /** Dates usuelles du Soleil dans le signe ; elles varient d'un jour selon l'année. */
  readonly dates: { readonly start: MonthDay; readonly end: MonthDay };
  readonly rulers: { readonly traditional: ClassicalPlanetKey; readonly modern: PlanetKey };
  /** Exaltation et son degré traditionnel ; cinq signes n'en ont pas. */
  readonly exaltation: { readonly planet: ClassicalPlanetKey; readonly degree: number } | null;
  readonly decans: readonly [Decan, Decan, Decan];
  /** Constellation dont le signe porte le nom (et non celle où se trouve le Soleil aujourd'hui). */
  readonly constellation: ZodiacConstellationKey;
}

const CHALDEAN_ORDER = ["mars", "sun", "venus", "mercury", "moon", "saturn", "jupiter"] as const satisfies readonly ClassicalPlanetKey[];

const ELEMENT_BY_INDEX = ["fire", "earth", "air", "water"] as const satisfies readonly ElementKey[];
const MODALITY_BY_INDEX = ["cardinal", "fixed", "mutable"] as const satisfies readonly ModalityKey[];

function decansOf(index: number): readonly [Decan, Decan, Decan] {
  const decan = (n: 0 | 1 | 2): Decan => ({
    startDeg: (n * 10) as 0 | 10 | 20,
    faceRuler: CHALDEAN_ORDER[(index * 3 + n) % 7],
    triplicitySign: SIGN_KEYS[(index + n * 4) % 12],
  });
  return [decan(0), decan(1), decan(2)];
}

type SignSeed = Pick<SignData, "dates" | "rulers" | "exaltation" | "constellation">;

const SEEDS: Readonly<Record<SignKey, SignSeed>> = {
  aries: {
    dates: { start: { month: 3, day: 21 }, end: { month: 4, day: 19 } },
    rulers: { traditional: "mars", modern: "mars" },
    exaltation: { planet: "sun", degree: 19 },
    constellation: "Ari",
  },
  taurus: {
    dates: { start: { month: 4, day: 20 }, end: { month: 5, day: 20 } },
    rulers: { traditional: "venus", modern: "venus" },
    exaltation: { planet: "moon", degree: 3 },
    constellation: "Tau",
  },
  gemini: {
    dates: { start: { month: 5, day: 21 }, end: { month: 6, day: 20 } },
    rulers: { traditional: "mercury", modern: "mercury" },
    exaltation: null,
    constellation: "Gem",
  },
  cancer: {
    dates: { start: { month: 6, day: 21 }, end: { month: 7, day: 22 } },
    rulers: { traditional: "moon", modern: "moon" },
    exaltation: { planet: "jupiter", degree: 15 },
    constellation: "Cnc",
  },
  leo: {
    dates: { start: { month: 7, day: 23 }, end: { month: 8, day: 22 } },
    rulers: { traditional: "sun", modern: "sun" },
    exaltation: null,
    constellation: "Leo",
  },
  virgo: {
    dates: { start: { month: 8, day: 23 }, end: { month: 9, day: 22 } },
    rulers: { traditional: "mercury", modern: "mercury" },
    exaltation: { planet: "mercury", degree: 15 },
    constellation: "Vir",
  },
  libra: {
    dates: { start: { month: 9, day: 23 }, end: { month: 10, day: 22 } },
    rulers: { traditional: "venus", modern: "venus" },
    exaltation: { planet: "saturn", degree: 21 },
    constellation: "Lib",
  },
  scorpio: {
    dates: { start: { month: 10, day: 23 }, end: { month: 11, day: 21 } },
    rulers: { traditional: "mars", modern: "pluto" },
    exaltation: null,
    constellation: "Sco",
  },
  sagittarius: {
    dates: { start: { month: 11, day: 22 }, end: { month: 12, day: 21 } },
    rulers: { traditional: "jupiter", modern: "jupiter" },
    exaltation: null,
    constellation: "Sgr",
  },
  capricorn: {
    dates: { start: { month: 12, day: 22 }, end: { month: 1, day: 19 } },
    rulers: { traditional: "saturn", modern: "saturn" },
    exaltation: { planet: "mars", degree: 28 },
    constellation: "Cap",
  },
  aquarius: {
    dates: { start: { month: 1, day: 20 }, end: { month: 2, day: 18 } },
    rulers: { traditional: "saturn", modern: "uranus" },
    exaltation: null,
    constellation: "Aqr",
  },
  pisces: {
    dates: { start: { month: 2, day: 19 }, end: { month: 3, day: 20 } },
    rulers: { traditional: "jupiter", modern: "neptune" },
    exaltation: { planet: "venus", degree: 27 },
    constellation: "Psc",
  },
};

export const SIGNS: Readonly<Record<SignKey, SignData>> = Object.fromEntries(
  SIGN_KEYS.map((key, index) => [
    key,
    {
      key,
      index,
      element: ELEMENT_BY_INDEX[index % 4],
      modality: MODALITY_BY_INDEX[index % 3],
      decans: decansOf(index),
      ...SEEDS[key],
    } satisfies SignData,
  ]),
) as Record<SignKey, SignData>;

export function signAt(index: number): SignData {
  return SIGNS[SIGN_KEYS[((index % 12) + 12) % 12]];
}

export function oppositeSign(sign: SignKey): SignKey {
  return SIGN_KEYS[(SIGNS[sign].index + 6) % 12];
}

/** Exil : les maîtres du signe opposé. Dérivé, jamais stocké. */
export function detriment(sign: SignKey): SignData["rulers"] {
  return SIGNS[oppositeSign(sign)].rulers;
}

/** Chute : l'astre exalté dans le signe opposé, s'il y en a un. */
export function fall(sign: SignKey): ClassicalPlanetKey | null {
  return SIGNS[oppositeSign(sign)].exaltation?.planet ?? null;
}

/** Domiciles d'un astre, selon la tradition (sept astres) et selon les modernes (Uranus, Neptune, Pluton). */
export function domiciles(planet: PlanetKey): { traditional: readonly SignKey[]; modern: readonly SignKey[] } {
  return {
    traditional: SIGN_KEYS.filter((s) => SIGNS[s].rulers.traditional === planet),
    modern: SIGN_KEYS.filter((s) => SIGNS[s].rulers.modern === planet),
  };
}

/** Signe d'exaltation d'un astre (et son degré), s'il en a un. */
export function exaltationOf(planet: PlanetKey): { sign: SignKey; degree: number } | null {
  const sign = SIGN_KEYS.find((s) => SIGNS[s].exaltation?.planet === planet);
  return sign ? { sign, degree: SIGNS[sign].exaltation!.degree } : null;
}

export function signsOfElement(element: ElementKey): readonly SignKey[] {
  return SIGN_KEYS.filter((s) => SIGNS[s].element === element);
}

export function signsOfModality(modality: ModalityKey): readonly SignKey[] {
  return SIGN_KEYS.filter((s) => SIGNS[s].modality === modality);
}
