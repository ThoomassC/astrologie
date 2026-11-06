import { type Longitude, SIGN_KEYS, type SignKey } from "./keys";

/**
 * Ramène un angle dans [0, 360). Ne rend jamais 360, même pour un négatif minuscule (−1e-9, −1e-14) que l'addition
 * de 360 arrondirait à 360.
 */
export function norm360(d: number): Longitude {
  const remainder = d % 360;
  const wrapped = remainder < 0 ? remainder + 360 : remainder;
  // 360 − 1e-14 s'arrondit à 360 en double précision : on rend 0, son équivalent. « + 0 » efface le zéro négatif.
  return wrapped >= 360 ? 0 : wrapped + 0;
}

/** Écart angulaire le plus court entre deux longitudes, dans [0, 180]. */
export function separation(a: Longitude, b: Longitude): number {
  const gap = norm360(a - b);
  return gap > 180 ? 360 - gap : gap;
}

/** Signe tropical : [0, 30) Bélier, [30, 60) Taureau… [330, 360) Poissons. */
export function signOf(l: Longitude): SignKey {
  if (!Number.isFinite(l)) throw new RangeError(`Longitude invalide : ${l}.`);
  const x = norm360(l);
  // x − (x mod 30) est un multiple exact de 30 : pas d'arrondi de x / 30 qui ferait déborder sur le signe suivant.
  return SIGN_KEYS[(x - (x % 30)) / 30];
}

/** Degré dans le signe, dans [0, 30). */
export function degreeInSign(l: Longitude): number {
  // Le reste flottant est exact (fmod) : toujours < 30, et cohérent avec `signOf`.
  return norm360(l) % 30;
}
