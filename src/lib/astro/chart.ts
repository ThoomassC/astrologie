import { type ChartAngles, computeAngles, type SkyFrame } from "./angles";
import { type Aspect, type AspectPoint, findAspects } from "./aspects";
import type { ValidBirthInput } from "./birthInput";
import { type EarthFrame, earthFrame, type EphemerisPoint, longitudeAt, pointAt } from "./ephemeris";
import { computeHouses, type HouseResult, houseOf } from "./houses";
import {
  ELEMENT_KEYS,
  type ChartPointKey,
  type ElementKey,
  type HouseNumber,
  type Longitude,
  MODALITY_KEYS,
  type ModalityKey,
  PLANET_KEYS,
  type SignKey,
} from "./keys";
import { PLANETS } from "./planets";
import { SIGNS } from "./signs";
import { type LocalDateTime, localToUtc, wallClockMs } from "./time";
import { degreeInSign, norm360, signOf } from "./zodiac";

/** Un point du thème placé : position, signe, mouvement, maison. */
export interface BodyPosition extends EphemerisPoint {
  key: ChartPointKey;
  sign: SignKey;
  degreeInSign: number;
  motion: "direct" | "retrograde";
  /** |v| < 10 % de PLANETS[k].meanDailyMotionDeg ; le nœud n'est jamais stationnaire. */
  stationary: boolean;
  /** null si l'heure est inconnue (et toujours dans le ciel du moment). */
  house: HouseNumber | null;
  /** Heure inconnue et signe différent à 00:00 et à 23:59, heure locale. */
  signUncertain: boolean;
}

/** Thème natal complet, calculé à partir d'une entrée validée. */
export interface NatalChart {
  input: ValidBirthInput;
  /** ramcDeg : null si l'heure est inconnue. */
  frame: EarthFrame & { ramcDeg: number | null };
  positions: Readonly<Record<ChartPointKey, BodyPosition>>;
  /** null si l'heure est inconnue. */
  angles: ChartAngles | null;
  /** null si l'heure est inconnue. */
  houses: HouseResult | null;
  /** Entre les dix astres, l'Ascendant et le Milieu du Ciel ; le nœud est exclu. */
  aspects: readonly Aspect[];
  /** Comptes sur les dix astres ; dominants : ceux du compte maximal, ex aequo compris, dans l'ordre des clés. */
  balance: {
    elements: Readonly<Record<ElementKey, number>>;
    modalities: Readonly<Record<ModalityKey, number>>;
    dominantElements: readonly ElementKey[];
    dominantModalities: readonly ModalityKey[];
  };
}

/** Sous 10 % de son mouvement moyen, un astre est dit stationnaire. */
const STATIONARY_SHARE = 0.1;

/** Applique `f` aux onze points du thème ; l'objet écrit en entier garde le type exact, sans conversion. */
export function mapChartPoints<T>(f: (key: ChartPointKey) => T): Readonly<Record<ChartPointKey, T>> {
  return {
    sun: f("sun"),
    moon: f("moon"),
    mercury: f("mercury"),
    venus: f("venus"),
    mars: f("mars"),
    jupiter: f("jupiter"),
    saturn: f("saturn"),
    uranus: f("uranus"),
    neptune: f("neptune"),
    pluto: f("pluto"),
    northNode: f("northNode"),
  };
}

/** Un point placé : signe, degré, mouvement et maison (`house` et `signUncertain` sont fournis par l'appelant). */
export function describePosition(
  key: ChartPointKey,
  point: EphemerisPoint,
  house: HouseNumber | null,
  signUncertain: boolean,
): BodyPosition {
  return {
    ...point,
    key,
    sign: signOf(point.longitude),
    degreeInSign: degreeInSign(point.longitude),
    motion: point.speedDegPerDay < 0 ? "retrograde" : "direct",
    stationary:
      key !== "northNode" && Math.abs(point.speedDegPerDay) < STATIONARY_SHARE * PLANETS[key].meanDailyMotionDeg,
    house,
    signUncertain,
  };
}

/** Point d'un aspect qui est un angle du thème (Ascendant, Milieu du Ciel). */
function isAngle(key: AspectPoint["key"]): boolean {
  return key === "ascendant" || key === "midheaven";
}

/** Les dix astres, prêts pour `findAspects` (le nœud n'y entre jamais). */
export function planetAspectPoints(positions: Readonly<Record<ChartPointKey, EphemerisPoint>>): AspectPoint[] {
  return PLANET_KEYS.map((key) => ({
    key,
    longitude: positions[key].longitude,
    speedDegPerDay: positions[key].speedDegPerDay,
  }));
}

/** Instant UTC d'une heure locale du jour de naissance ; `side` tranche une heure répétée (début ou fin de journée). */
function instantOfLocal(input: ValidBirthInput, local: LocalDateTime, side: "earlier" | "later"): number {
  if (input.offsetSource === "manual" || input.timeZone === null) {
    return wallClockMs(local) - input.offsetSeconds * 1000;
  }
  const resolved = localToUtc(local, input.timeZone);
  switch (resolved.kind) {
    case "unique":
      return resolved.utcMs;
    case "ambiguous":
      return resolved[side].utcMs;
    case "nonexistent":
      // Minuit sauté (passage à l'heure d'été à 00:00) : l'ancien décalage donne l'instant du saut.
      return wallClockMs(local) - resolved.offsetBeforeSeconds * 1000;
  }
}

/** Heure inconnue : le signe de chaque point à 00:00 et à 23:59, heure locale, du jour de naissance. */
function signChangesDuringDay(input: ValidBirthInput): (key: ChartPointKey) => boolean {
  const dayStart = instantOfLocal(input, { ...input.local, hour: 0, minute: 0 }, "earlier");
  const dayEnd = instantOfLocal(input, { ...input.local, hour: 23, minute: 59 }, "later");
  return (key) => signOf(longitudeAt(key, dayStart)) !== signOf(longitudeAt(key, dayEnd));
}

function balanceOf(positions: Readonly<Record<ChartPointKey, BodyPosition>>): NatalChart["balance"] {
  const signs = PLANET_KEYS.map((key) => SIGNS[positions[key].sign]);
  const countElement = (element: ElementKey) => signs.filter((sign) => sign.element === element).length;
  const countModality = (modality: ModalityKey) => signs.filter((sign) => sign.modality === modality).length;
  const elements: Record<ElementKey, number> = {
    fire: countElement("fire"),
    earth: countElement("earth"),
    air: countElement("air"),
    water: countElement("water"),
  };
  const modalities: Record<ModalityKey, number> = {
    cardinal: countModality("cardinal"),
    fixed: countModality("fixed"),
    mutable: countModality("mutable"),
  };
  const topElement = Math.max(...ELEMENT_KEYS.map((key) => elements[key]));
  const topModality = Math.max(...MODALITY_KEYS.map((key) => modalities[key]));
  return {
    elements,
    modalities,
    dominantElements: ELEMENT_KEYS.filter((key) => elements[key] === topElement),
    dominantModalities: MODALITY_KEYS.filter((key) => modalities[key] === topModality),
  };
}

/**
 * Thème natal d'une entrée validée. Heure connue : angles, maisons du système demandé (avec repli éventuel), maison de
 * chaque point. Heure inconnue : ni angles ni maisons, et deux évaluations de plus (00:00 et 23:59 locales) pour dire
 * quels signes sont incertains.
 */
export function computeNatalChart(i: ValidBirthInput): NatalChart {
  const earth = earthFrame(i.utcMs);
  const points = mapChartPoints((key) => pointAt(key, i.utcMs));

  const sky: SkyFrame | null = i.timeKnown
    ? {
        ramcDeg: norm360(15 * earth.gastHours + i.longitude),
        obliquityDeg: earth.trueObliquityDeg,
        latitudeDeg: i.latitude,
      }
    : null;
  const angles = sky === null ? null : computeAngles(sky);
  const houses = sky === null || angles === null ? null : computeHouses(i.houseSystem, sky, angles);

  const isSignUncertain = i.timeKnown ? () => false : signChangesDuringDay(i);
  const houseAt = (longitude: Longitude) => (houses === null ? null : houseOf(longitude, houses.cusps));
  const positions = mapChartPoints((key) =>
    describePosition(key, points[key], houseAt(points[key].longitude), isSignUncertain(key)),
  );

  const anglePoints: AspectPoint[] =
    angles === null
      ? []
      : [
          { key: "ascendant", longitude: angles.ascendant, speedDegPerDay: null },
          { key: "midheaven", longitude: angles.midheaven, speedDegPerDay: null },
        ];

  return {
    input: i,
    frame: { ...earth, ramcDeg: sky === null ? null : sky.ramcDeg },
    positions,
    angles,
    houses,
    // L'Ascendant et le Milieu du Ciel forment entre eux un angle de construction (souvent proche du carré), pas un
    // aspect : le couple est écarté.
    aspects: findAspects([...planetAspectPoints(points), ...anglePoints]).filter(
      (aspect) => !(isAngle(aspect.a) && isAngle(aspect.b)),
    ),
    balance: balanceOf(positions),
  };
}
