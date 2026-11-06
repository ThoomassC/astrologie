import type { Longitude } from "./keys";

export const MOON_PHASE_KEYS = [
  "new",
  "waxingCrescent",
  "firstQuarter",
  "waxingGibbous",
  "full",
  "waningGibbous",
  "lastQuarter",
  "waningCrescent",
] as const;
export type MoonPhaseKey = (typeof MOON_PHASE_KEYS)[number];

/**
 * Phase de la Lune d'après son élongation (longitude de la Lune moins celle du Soleil) : huit phases de 45°, centrées
 * sur 0° (nouvelle lune), 90° (premier quartier), 180° (pleine lune) et 270° (dernier quartier).
 */
export function moonPhase(sun: Longitude, moon: Longitude): MoonPhaseKey {
  const elongation = (((moon - sun) % 360) + 360) % 360;
  return MOON_PHASE_KEYS[Math.floor(((elongation + 22.5) % 360) / 45)];
}
