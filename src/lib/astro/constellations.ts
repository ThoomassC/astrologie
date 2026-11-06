import type { ZodiacConstellationKey } from "./keys";

export interface ConstellationData {
  readonly key: ZodiacConstellationKey;
  /** Aire officielle de l'UAI (limites de Delporte, 1930), en degrés carrés. */
  readonly areaSqDeg: number;
  /** Désignation de Bayer de l'étoile la plus brillante (le nom propre est un texte : src/content). */
  readonly brightestDesignation: string;
  /** Magnitude apparente visuelle de cette étoile (Antarès est variable : valeur moyenne). */
  readonly brightestMagnitude: number;
}

export const CONSTELLATIONS: Readonly<Record<ZodiacConstellationKey, ConstellationData>> = {
  Ari: { key: "Ari", areaSqDeg: 441.4, brightestDesignation: "α Arietis", brightestMagnitude: 2.0 },
  Tau: { key: "Tau", areaSqDeg: 797.2, brightestDesignation: "α Tauri", brightestMagnitude: 0.86 },
  Gem: { key: "Gem", areaSqDeg: 513.8, brightestDesignation: "β Geminorum", brightestMagnitude: 1.14 },
  Cnc: { key: "Cnc", areaSqDeg: 505.9, brightestDesignation: "β Cancri", brightestMagnitude: 3.5 },
  Leo: { key: "Leo", areaSqDeg: 947.0, brightestDesignation: "α Leonis", brightestMagnitude: 1.4 },
  Vir: { key: "Vir", areaSqDeg: 1294.4, brightestDesignation: "α Virginis", brightestMagnitude: 0.97 },
  Lib: { key: "Lib", areaSqDeg: 538.1, brightestDesignation: "β Librae", brightestMagnitude: 2.61 },
  Sco: { key: "Sco", areaSqDeg: 496.8, brightestDesignation: "α Scorpii", brightestMagnitude: 1.06 },
  Oph: { key: "Oph", areaSqDeg: 948.3, brightestDesignation: "α Ophiuchi", brightestMagnitude: 2.07 },
  Sgr: { key: "Sgr", areaSqDeg: 867.4, brightestDesignation: "ε Sagittarii", brightestMagnitude: 1.85 },
  Cap: { key: "Cap", areaSqDeg: 413.9, brightestDesignation: "δ Capricorni", brightestMagnitude: 2.85 },
  Aqr: { key: "Aqr", areaSqDeg: 979.9, brightestDesignation: "β Aquarii", brightestMagnitude: 2.87 },
  Psc: { key: "Psc", areaSqDeg: 889.4, brightestDesignation: "η Piscium", brightestMagnitude: 3.62 },
};
