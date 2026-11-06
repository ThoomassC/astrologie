import type { Longitude } from "./keys";
import { norm360 } from "./zodiac";

/** Le ciel local à un instant : de quoi poser les angles et les maisons. */
export interface SkyFrame {
  /** Ascension droite du Milieu du Ciel (temps sidéral local × 15), en degrés. */
  ramcDeg: number;
  /** Obliquité vraie de l'écliptique, en degrés. */
  obliquityDeg: number;
  /** Latitude géographique, en degrés (nord positif). */
  latitudeDeg: number;
}

/** Les quatre angles du thème, longitudes écliptiques dans [0, 360). */
export interface ChartAngles {
  ascendant: Longitude;
  midheaven: Longitude;
  /** Ascendant + 180°. */
  descendant: Longitude;
  /** Fond du Ciel : Milieu du Ciel + 180°. */
  imumCoeli: Longitude;
}

const RAD = Math.PI / 180;

/** Point de l'écliptique dont l'ascension droite vaut `rightAscensionDeg` (même quadrant), en degrés. */
export function eclipticLongitudeOfRightAscension(rightAscensionDeg: number, obliquityDeg: number): Longitude {
  const alpha = rightAscensionDeg * RAD;
  return norm360(Math.atan2(Math.sin(alpha), Math.cos(alpha) * Math.cos(obliquityDeg * RAD)) / RAD);
}

/**
 * ASC : point de l'écliptique sur l'horizon EST (|φ| ≤ 89,9) ; MC : culmination supérieure (AR = RAMC).
 * Au-delà des cercles polaires, la formule usuelle de l'ASC rend parfois le point ouest : c'est l'azimut qui tranche.
 */
export function computeAngles(f: SkyFrame): ChartAngles {
  const theta = f.ramcDeg * RAD;
  const epsilon = f.obliquityDeg * RAD;
  const phi = f.latitudeDeg * RAD;
  const midheaven = eclipticLongitudeOfRightAscension(f.ramcDeg, f.obliquityDeg);

  // Intersection de l'écliptique et de l'horizon : tan λ = −cos θ / (sin θ cos ε + tan φ sin ε). Les deux termes sont
  // multipliés par cos φ > 0, ce qui évite tan φ près des pôles sans changer le quadrant d'atan2.
  const candidate =
    Math.atan2(
      Math.cos(theta) * Math.cos(phi),
      -(Math.sin(theta) * Math.cos(epsilon) * Math.cos(phi) + Math.sin(phi) * Math.sin(epsilon)),
    ) / RAD;
  // Côté est : produit scalaire positif avec le point est de l'horizon (−sin θ, cos θ, 0). Pour ce candidat, il est du
  // signe de cos ε cos φ + sin θ sin φ sin ε, toujours positif hors des cercles polaires.
  const isEast = Math.cos(epsilon) * Math.cos(phi) + Math.sin(theta) * Math.sin(phi) * Math.sin(epsilon) > 0;
  const ascendant = norm360(isEast ? candidate : candidate + 180);

  return {
    ascendant,
    midheaven,
    descendant: norm360(ascendant + 180),
    imumCoeli: norm360(midheaven + 180),
  };
}
