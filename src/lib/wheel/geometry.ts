import type { Longitude } from "@/lib/astro/keys";

/** Côté du carré de dessin de la roue (viewBox 0 0 1000 1000), centre au milieu. */
export const WHEEL_SIZE = 1000;
export const CENTER = WHEEL_SIZE / 2;

/** Rayons des anneaux, de l'extérieur vers le centre. */
export const RADII = {
  outer: 492,
  ticks: 466,
  signsInner: 386,
  signGlyph: 426,
  housesInner: 332,
  houseNumber: 359,
  pointsWithHouses: 284,
  pointsWithoutHouses: 318,
  aspects: 226,
} as const;

/** Arrondi à deux décimales : le même SVG au serveur et au navigateur (pas d'écart d'hydratation à l'ulp près). */
export function svgNumber(n: number): number {
  return Math.round(n * 100) / 100;
}

/**
 * Angle à l'écran (degrés, sens trigonométrique, 0 à droite) d'une longitude : `leftLongitude` est à gauche (9 h),
 * et le zodiaque tourne dans le sens inverse des aiguilles d'une montre, comme dans un thème (l'Ascendant à gauche,
 * le Milieu du Ciel en haut).
 */
export function screenAngle(longitude: Longitude, leftLongitude: Longitude): number {
  return 180 + (longitude - leftLongitude);
}

export function toXY(longitude: Longitude, radius: number, leftLongitude: Longitude): { x: number; y: number } {
  const angle = (screenAngle(longitude, leftLongitude) * Math.PI) / 180;
  return { x: svgNumber(CENTER + radius * Math.cos(angle)), y: svgNumber(CENTER - radius * Math.sin(angle)) };
}

/** Segment radial entre deux rayons, à une longitude : chaîne SVG « Mx yLx y ». */
export function radialSegment(longitude: Longitude, r1: number, r2: number, leftLongitude: Longitude): string {
  const a = toXY(longitude, r1, leftLongitude);
  const b = toXY(longitude, r2, leftLongitude);
  return `M${a.x} ${a.y}L${b.x} ${b.y}`;
}

/** Secteur d'anneau entre deux longitudes (sens du zodiaque) et deux rayons. */
export function ringSector(from: Longitude, to: Longitude, rOuter: number, rInner: number, leftLongitude: Longitude): string {
  const span = (((to - from) % 360) + 360) % 360;
  const large = span > 180 ? 1 : 0;
  const a = toXY(from, rOuter, leftLongitude);
  const b = toXY(to, rOuter, leftLongitude);
  const c = toXY(to, rInner, leftLongitude);
  const d = toXY(from, rInner, leftLongitude);
  // Sens trigonométrique à l'écran = balayage 0 en SVG (axe y vers le bas).
  return `M${a.x} ${a.y}A${rOuter} ${rOuter} 0 ${large} 0 ${b.x} ${b.y}L${c.x} ${c.y}A${rInner} ${rInner} 0 ${large} 1 ${d.x} ${d.y}Z`;
}
