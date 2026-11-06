import type { PlanetKey } from "./keys";

export type PlanetGroup = "luminary" | "personal" | "social" | "transpersonal";

export interface PlanetData {
  readonly key: PlanetKey;
  readonly group: PlanetGroup;
  /**
   * Période sidérale en jours (NASA, Planetary Fact Sheet) : le tour de son orbite ; pour le Soleil, l'année sidérale
   * de la Terre (le tour apparent du zodiaque).
   */
  readonly siderealPeriodDays: number;
  /** Période synodique en jours : d'une conjonction avec le Soleil à la suivante, vue de la Terre. */
  readonly synodicPeriodDays: number | null;
  /** Mouvement moyen géocentrique le long du zodiaque, en degrés par jour. */
  readonly meanDailyMotionDeg: number;
  /** Durée moyenne d'une rétrogradation, en jours ; le Soleil et la Lune ne rétrogradent jamais. */
  readonly retrogradeDays: number | null;
  /** Temps moyen passé dans un signe, en jours. */
  readonly meanDaysPerSign: number;
  /** Année de la découverte au télescope ; les sept autres sont connus depuis l'Antiquité. */
  readonly discoveryYear: number | null;
}

export const PLANETS: Readonly<Record<PlanetKey, PlanetData>> = {
  sun: {
    key: "sun",
    group: "luminary",
    siderealPeriodDays: 365.256,
    synodicPeriodDays: null,
    meanDailyMotionDeg: 0.9856,
    retrogradeDays: null,
    meanDaysPerSign: 30.4,
    discoveryYear: null,
  },
  moon: {
    key: "moon",
    group: "luminary",
    siderealPeriodDays: 27.3217,
    synodicPeriodDays: 29.5306,
    meanDailyMotionDeg: 13.1764,
    retrogradeDays: null,
    meanDaysPerSign: 2.28,
    discoveryYear: null,
  },
  mercury: {
    key: "mercury",
    group: "personal",
    siderealPeriodDays: 87.969,
    synodicPeriodDays: 115.88,
    meanDailyMotionDeg: 0.9856,
    retrogradeDays: 21,
    meanDaysPerSign: 30.4,
    discoveryYear: null,
  },
  venus: {
    key: "venus",
    group: "personal",
    siderealPeriodDays: 224.701,
    synodicPeriodDays: 583.92,
    meanDailyMotionDeg: 0.9856,
    retrogradeDays: 42,
    meanDaysPerSign: 30.4,
    discoveryYear: null,
  },
  mars: {
    key: "mars",
    group: "personal",
    siderealPeriodDays: 686.98,
    synodicPeriodDays: 779.94,
    meanDailyMotionDeg: 0.524,
    retrogradeDays: 72,
    meanDaysPerSign: 57,
    discoveryYear: null,
  },
  jupiter: {
    key: "jupiter",
    group: "social",
    siderealPeriodDays: 4332.589,
    synodicPeriodDays: 398.88,
    meanDailyMotionDeg: 0.0831,
    retrogradeDays: 121,
    meanDaysPerSign: 361,
    discoveryYear: null,
  },
  saturn: {
    key: "saturn",
    group: "social",
    siderealPeriodDays: 10759.22,
    synodicPeriodDays: 378.09,
    meanDailyMotionDeg: 0.0335,
    retrogradeDays: 138,
    meanDaysPerSign: 897,
    discoveryYear: null,
  },
  uranus: {
    key: "uranus",
    group: "transpersonal",
    siderealPeriodDays: 30685.4,
    synodicPeriodDays: 369.66,
    meanDailyMotionDeg: 0.01173,
    retrogradeDays: 151,
    meanDaysPerSign: 2557,
    discoveryYear: 1781,
  },
  neptune: {
    key: "neptune",
    group: "transpersonal",
    siderealPeriodDays: 60189,
    synodicPeriodDays: 367.49,
    meanDailyMotionDeg: 0.00598,
    retrogradeDays: 158,
    meanDaysPerSign: 5016,
    discoveryYear: 1846,
  },
  pluto: {
    key: "pluto",
    group: "transpersonal",
    siderealPeriodDays: 90560,
    synodicPeriodDays: 366.73,
    meanDailyMotionDeg: 0.00397,
    retrogradeDays: 160,
    meanDaysPerSign: 7547,
    discoveryYear: 1930,
  },
};
