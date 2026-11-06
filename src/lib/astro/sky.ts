import { type Aspect, findAspects } from "./aspects";
import { type BodyPosition, describePosition, mapChartPoints, planetAspectPoints } from "./chart";
import { pointAt } from "./ephemeris";
import type { ChartPointKey } from "./keys";

/**
 * Le ciel à un instant, sans lieu : ni angles ni maisons (`house` null partout), aspects entre les dix astres
 * seulement.
 */
export function computeSky(utcMs: number): {
  utcMs: number;
  positions: Readonly<Record<ChartPointKey, BodyPosition>>;
  aspects: readonly Aspect[];
} {
  const points = mapChartPoints((key) => pointAt(key, utcMs));
  return {
    utcMs,
    // L'instant est exact : aucun signe n'est incertain.
    positions: mapChartPoints((key) => describePosition(key, points[key], null, false)),
    aspects: findAspects(planetAspectPoints(points)),
  };
}
