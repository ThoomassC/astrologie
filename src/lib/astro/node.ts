import type { Longitude } from "./keys";
import { norm360 } from "./zodiac";

/**
 * Longitude du nœud ascendant moyen de la Lune, rapportée à l'équinoxe moyen de la date (Meeus, éq. 47.7) :
 * Ω = 125,0445479 − 1934,1362891·T + 0,0020754·T² + T³/467441 − T⁴/60616000, ramenée dans [0, 360).
 * T : siècles juliens de temps terrestre (TT) depuis J2000.
 */
export function meanNodeMeanEquinox(tCenturiesTT: number): Longitude {
  const t = tCenturiesTT;
  return norm360(125.0445479 + t * (-1934.1362891 + t * (0.0020754 + t * (1 / 467441 - t / 60616000))));
}
