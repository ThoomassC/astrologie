import {
  e_tilt,
  HorizonFromVector,
  MakeTime,
  Observer,
  RotateVector,
  Rotation_ECT_EQD,
  Rotation_EQD_HOR,
  SiderealTime,
  Spherical,
  VectorFromSphere,
} from "astronomy-engine";
import type { SkyFrame } from "../angles";

/*
 * Oracles des tests (réservé aux tests) : la définition des angles et des maisons, écrite sans rien emprunter au code
 * testé. Les conversions par formules sont vérifiées contre la chaîne d'astronomy-engine dans `oracles.test.ts`.
 */

const RAD = Math.PI / 180;

const wrap360 = (d: number) => (((d % 360) + 360) % 360);

/** Écart signé a − b ramené dans ]−180, 180]. */
export function angularGap(a: number, b: number): number {
  const d = wrap360(a - b);
  return d > 180 ? d - 360 : d;
}

/** Arc parcouru de `from` à `to` dans le sens croissant des longitudes, dans [0, 360). */
export function arcForward(from: number, to: number): number {
  return wrap360(to - from);
}

/** |value| < tolerance ; faux pour NaN, pour qu'un calcul raté compte comme un échec et non comme un succès. */
export function isWithin(value: number, tolerance: number): boolean {
  return Math.abs(value) < tolerance;
}

/** Générateur pseudo-aléatoire (mulberry32) : même graine, mêmes tirages à chaque exécution ; valeurs dans [0, 1). */
export function seededRandom(seed: number): () => number {
  let state = seed | 0;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface FrameSampling {
  seed: number;
  count: number;
  /** Latitudes tirées dans [−max, max). */
  maxAbsLatitudeDeg: number;
  /** Obliquités tirées dans [min, max). */
  obliquityDeg: readonly [number, number];
}

/** Cieux tirés au hasard, graine fixe : RAMC dans [0, 360), latitude et obliquité dans les bornes demandées. */
export function sampleSkyFrames({ seed, count, maxAbsLatitudeDeg, obliquityDeg: [min, max] }: FrameSampling): SkyFrame[] {
  const random = seededRandom(seed);
  return Array.from({ length: count }, () => ({
    ramcDeg: 360 * random(),
    latitudeDeg: -maxAbsLatitudeDeg + 2 * maxAbsLatitudeDeg * random(),
    obliquityDeg: min + (max - min) * random(),
  }));
}

/** Instants tirés au hasard, graine fixe, dans [fromUtcMs, toUtcMs). */
export function sampleInstants(seed: number, count: number, fromUtcMs: number, toUtcMs: number): number[] {
  const random = seededRandom(seed);
  return Array.from({ length: count }, () => Math.floor(fromUtcMs + (toUtcMs - fromUtcMs) * random()));
}

export interface EquatorialPoint {
  rightAscensionDeg: number;
  declinationDeg: number;
}

export interface HorizontalPoint {
  altitudeDeg: number;
  /** Compté depuis le nord vers l'est : est = 90, ouest = 270. */
  azimuthDeg: number;
}

/** Point de l'écliptique (latitude nulle) en coordonnées équatoriales de la même date. */
export function eclipticToEquatorial(longitudeDeg: number, obliquityDeg: number): EquatorialPoint {
  const l = longitudeDeg * RAD;
  const e = obliquityDeg * RAD;
  const y = Math.sin(l) * Math.cos(e);
  const z = Math.sin(l) * Math.sin(e);
  return { rightAscensionDeg: wrap360(Math.atan2(y, Math.cos(l)) / RAD), declinationDeg: Math.asin(z) / RAD };
}

/** Angle horaire H = RAMC − AR, positif vers l'ouest (le point a passé le méridien), dans ]−180, 180]. */
export function hourAngleDeg(rightAscensionDeg: number, ramcDeg: number): number {
  return angularGap(ramcDeg, rightAscensionDeg);
}

/** Point équatorial vu de l'horizon du lieu, sans réfraction. */
export function equatorialToHorizontal(
  point: EquatorialPoint,
  frame: Pick<SkyFrame, "ramcDeg" | "latitudeDeg">,
): HorizontalPoint {
  const h = hourAngleDeg(point.rightAscensionDeg, frame.ramcDeg) * RAD;
  const d = point.declinationDeg * RAD;
  const p = frame.latitudeDeg * RAD;
  const altitude = Math.asin(Math.sin(p) * Math.sin(d) + Math.cos(p) * Math.cos(d) * Math.cos(h));
  const azimuth = Math.atan2(
    -Math.cos(d) * Math.sin(h),
    Math.sin(d) * Math.cos(p) - Math.cos(d) * Math.cos(h) * Math.sin(p),
  );
  return { altitudeDeg: altitude / RAD, azimuthDeg: wrap360(azimuth / RAD) };
}

/** Point de l'écliptique vu de l'horizon du lieu, par la trigonométrie sphérique (obliquité quelconque). */
export function eclipticToHorizontal(longitudeDeg: number, frame: SkyFrame): HorizontalPoint {
  return equatorialToHorizontal(eclipticToEquatorial(longitudeDeg, frame.obliquityDeg), frame);
}

/** Ciel local réel : RAMC = 15 × GAST + longitude est ; obliquité vraie de la date (astronomy-engine). */
export function skyFrameAt(utcMs: number, latitudeDeg: number, longitudeEastDeg: number): SkyFrame {
  const date = new Date(utcMs);
  return {
    ramcDeg: wrap360(15 * SiderealTime(date) + longitudeEastDeg),
    obliquityDeg: e_tilt(MakeTime(date)).tobl,
    latitudeDeg,
  };
}

/**
 * La même conversion par la chaîne d'astronomy-engine, pour un instant et un lieu réels : écliptique vraie de la date
 * → équateur de la date → horizon (VectorFromSphere, Rotation_ECT_EQD, Rotation_EQD_HOR, HorizonFromVector).
 */
export function eclipticToHorizontalAt(
  longitudeDeg: number,
  utcMs: number,
  latitudeDeg: number,
  longitudeEastDeg: number,
): HorizontalPoint {
  const time = MakeTime(new Date(utcMs));
  const ecliptic = VectorFromSphere(new Spherical(0, longitudeDeg, 1), time);
  const equatorial = RotateVector(Rotation_ECT_EQD(time), ecliptic);
  const observer = new Observer(latitudeDeg, longitudeEastDeg, 0);
  const { lat, lon } = HorizonFromVector(RotateVector(Rotation_EQD_HOR(time, observer), equatorial), "");
  return { altitudeDeg: lat, azimuthDeg: lon };
}

export interface SemiArcs {
  /** DSA = acos(−tan φ tan δ) : du lever à la culmination, en degrés d'angle horaire. */
  diurnalDeg: number;
  /** NSA = 180 − DSA. */
  nocturnalDeg: number;
}

/** Demi-arcs d'un point de déclinaison δ vu de la latitude φ ; lève pour un point qui ne se lève ou ne se couche pas. */
export function semiArcs(declinationDeg: number, latitudeDeg: number): SemiArcs {
  const x = -Math.tan(latitudeDeg * RAD) * Math.tan(declinationDeg * RAD);
  if (Math.abs(x) > 1) {
    throw new Error(`Demi-arc indéfini : point circumpolaire (δ = ${declinationDeg}°, φ = ${latitudeDeg}°).`);
  }
  const diurnalDeg = Math.acos(x) / RAD;
  return { diurnalDeg, nocturnalDeg: 180 - diurnalDeg };
}
