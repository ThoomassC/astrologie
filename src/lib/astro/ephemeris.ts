import {
  type AstroTime,
  Body,
  Constellation,
  e_tilt,
  Ecliptic,
  EclipticGeoMoon,
  EquatorFromVector,
  GeoVector,
  MakeTime,
  SiderealTime,
  SunPosition,
} from "astronomy-engine";
import { type ChartPointKey, type Longitude, ZODIAC_CONSTELLATION_KEYS, type ZodiacConstellationKey } from "./keys";
import { meanNodeMeanEquinox } from "./node";
import { norm360 } from "./zodiac";

/**
 * Le seul module qui parle à astronomy-engine : les autres reçoivent des nombres.
 * Positions géocentriques apparentes (temps de lumière, aberration, nutation), rapportées à l'écliptique vraie et à
 * l'équinoxe de la date : le zodiaque tropical.
 */

/** Position d'un point du thème vue du centre de la Terre. */
export interface EphemerisPoint {
  longitude: Longitude;
  /** Latitude écliptique, en degrés (0 pour le nœud). */
  latitude: number;
  /** Vitesse en longitude, en degrés par jour : différence centrée sur ±12 h, passage par 0° compris. */
  speedDegPerDay: number;
}

/** Orientation de la Terre à un instant : de quoi poser le ciel local. */
export interface EarthFrame {
  /** Temps sidéral apparent de Greenwich, en heures, dans [0, 24). */
  gastHours: number;
  /** Obliquité vraie de l'écliptique, en degrés. */
  trueObliquityDeg: number;
  /** Nutation en longitude Δψ, en degrés. */
  nutationLongitudeDeg: number;
}

const HALF_DAY_MS = 43_200_000;
const ARCSEC_PER_DEG = 3600;
const DAYS_PER_JULIAN_CENTURY = 36_525;

/** Planètes calculées par GeoVector (le Soleil, la Lune et le nœud ont leur propre chemin). */
const ENGINE_BODIES: Readonly<Record<Exclude<ChartPointKey, "sun" | "moon" | "northNode">, Body>> = {
  mercury: Body.Mercury,
  venus: Body.Venus,
  mars: Body.Mars,
  jupiter: Body.Jupiter,
  saturn: Body.Saturn,
  uranus: Body.Uranus,
  neptune: Body.Neptune,
  pluto: Body.Pluto,
};

const timeAt = (utcMs: number): AstroTime => MakeTime(new Date(utcMs));

/** Longitude et latitude écliptiques apparentes, équinoxe et écliptique vrais de la date. */
function eclipticAt(key: ChartPointKey, time: AstroTime): { longitude: Longitude; latitude: number } {
  switch (key) {
    case "sun": {
      const { elon, elat } = SunPosition(time);
      return { longitude: norm360(elon), latitude: elat };
    }
    case "moon": {
      const { lon, lat } = EclipticGeoMoon(time);
      return { longitude: norm360(lon), latitude: lat };
    }
    case "northNode": {
      // Nœud moyen de l'équinoxe moyen (Meeus 47.7), porté à l'équinoxe vrai par la nutation en longitude.
      const meanNode = meanNodeMeanEquinox(time.tt / DAYS_PER_JULIAN_CENTURY);
      return { longitude: norm360(meanNode + e_tilt(time).dpsi / ARCSEC_PER_DEG), latitude: 0 };
    }
    default: {
      const { elon, elat } = Ecliptic(GeoVector(ENGINE_BODIES[key], time, true));
      return { longitude: norm360(elon), latitude: elat };
    }
  }
}

/** Écart signé to − from, dans ]−180, 180] : la différence centrée enjambe 0° sans sauter de 360°. */
function signedArc(from: Longitude, to: Longitude): number {
  const arc = norm360(to - from);
  return arc > 180 ? arc - 360 : arc;
}

/** Temps sidéral apparent de Greenwich, obliquité vraie et nutation en longitude à l'instant UTC donné. */
export function earthFrame(utcMs: number): EarthFrame {
  const time = timeAt(utcMs);
  const tilt = e_tilt(time);
  return {
    gastHours: SiderealTime(time),
    trueObliquityDeg: tilt.tobl,
    nutationLongitudeDeg: tilt.dpsi / ARCSEC_PER_DEG,
  };
}

/** Position d'un point du thème ; le nœud est le nœud moyen (Meeus 47.7) corrigé de Δψ, de latitude 0. */
export function pointAt(k: ChartPointKey, utcMs: number): EphemerisPoint {
  const here = eclipticAt(k, timeAt(utcMs));
  const before = eclipticAt(k, timeAt(utcMs - HALF_DAY_MS)).longitude;
  const after = eclipticAt(k, timeAt(utcMs + HALF_DAY_MS)).longitude;
  // ±12 h : l'écart couvre un jour, la vitesse est en degrés par jour.
  return { ...here, speedDegPerDay: signedArc(before, after) };
}

/** Longitude seule d'un point du thème (une évaluation au lieu de trois) : pour comparer des signes. */
export function longitudeAt(k: ChartPointKey, utcMs: number): Longitude {
  return eclipticAt(k, timeAt(utcMs)).longitude;
}

/**
 * Constellation (limites de l'UAI) où se trouve le Soleil apparent à l'instant UTC donné. Lève une erreur si le moteur
 * rend une constellation hors du zodiaque astronomique : le Soleil, sur l'écliptique, n'en sort jamais.
 */
export function sunConstellationAt(utcMs: number): ZodiacConstellationKey {
  // Constellation() attend des coordonnées équatoriales J2000 : GeoVector les donne (EQJ), aberration comprise.
  const { ra, dec } = EquatorFromVector(GeoVector(Body.Sun, timeAt(utcMs), true));
  const { symbol } = Constellation(ra, dec);
  const key = ZODIAC_CONSTELLATION_KEYS.find((candidate) => candidate === symbol);
  if (key === undefined) {
    throw new Error(`Le Soleil serait dans la constellation « ${symbol} », hors du zodiaque : réponse du moteur incohérente.`);
  }
  return key;
}
