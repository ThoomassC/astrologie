import { ASPECTS } from "./aspectData";
import { ASPECT_KEYS, type AspectFamily, type AspectKey, type AspectPointKey, type Longitude } from "./keys";
import { norm360, separation } from "./zodiac";

/** Un point qui peut former un aspect : sa longitude et, si on la suit, sa vitesse. */
export interface AspectPoint {
  key: AspectPointKey;
  longitude: Longitude;
  /** null pour un point dont on ne suit pas la vitesse (Ascendant, Milieu du Ciel). */
  speedDegPerDay: number | null;
}

/** Un aspect retenu entre deux points. */
export interface Aspect {
  a: AspectPointKey;
  b: AspectPointKey;
  key: AspectKey;
  /** Écart angulaire entre a et b, dans [0, 180]. */
  separation: number;
  /** |separation − angle exact de l'aspect|. */
  orb: number;
  /** Orbe toléré : ASPECTS[key].orb, plus luminaryBonus si le Soleil ou la Lune y prend part. */
  maxOrb: number;
  /** true si l'écart se resserre vers l'angle exact, false s'il se défait ; null si une vitesse manque. */
  applying: boolean | null;
}

const LUMINARIES: ReadonlySet<AspectPointKey> = new Set<AspectPointKey>(["sun", "moon"]);

/** Écart signé to − from, dans ]−180, 180]. */
function signedGap(to: Longitude, from: Longitude): number {
  const gap = norm360(to - from);
  return gap > 180 ? gap - 360 : gap;
}

/**
 * Sens de variation de l'orbe |séparation − angle| : la séparation est |e|, avec e = b − a ramené dans ]−180, 180] et
 * de/dt = vb − va. En e = 0 la séparation ne peut que croître, en e = 180 que décroître ; à l'angle exact, l'orbe ne
 * peut que croître (l'aspect se défait).
 */
function isApplying(a: AspectPoint, b: AspectPoint, aspectAngle: number): boolean | null {
  if (a.speedDegPerDay === null || b.speedDegPerDay === null) return null;
  const elongation = signedGap(b.longitude, a.longitude);
  const relativeSpeed = b.speedDegPerDay - a.speedDegPerDay;
  const separationRate =
    elongation === 0
      ? Math.abs(relativeSpeed)
      : elongation === 180
        ? -Math.abs(relativeSpeed)
        : Math.sign(elongation) * relativeSpeed;
  const offset = Math.abs(elongation) - aspectAngle;
  const orbRate = offset === 0 ? Math.abs(separationRate) : Math.sign(offset) * separationRate;
  return orbRate < 0;
}

/**
 * Aspects entre les points fournis : au plus un par couple (le plus serré), triés par orbe croissant, retenus quand
 * orb ≤ maxOrb (borne incluse). Sans `families`, toutes les familles comptent.
 */
export function findAspects(p: readonly AspectPoint[], families?: readonly AspectFamily[]): readonly Aspect[] {
  const candidates = ASPECT_KEYS.map((key) => ASPECTS[key]).filter(
    (aspect) => families === undefined || families.includes(aspect.family),
  );
  const found: Aspect[] = [];
  p.forEach((a, index) => {
    for (const b of p.slice(index + 1)) {
      const gap = separation(a.longitude, b.longitude);
      const withLuminary = LUMINARIES.has(a.key) || LUMINARIES.has(b.key);
      let tightest: Aspect | null = null;
      for (const aspect of candidates) {
        const orb = Math.abs(gap - aspect.angle);
        const maxOrb = aspect.orb + (withLuminary ? aspect.luminaryBonus : 0);
        if (orb <= maxOrb && (tightest === null || orb < tightest.orb)) {
          tightest = { a: a.key, b: b.key, key: aspect.key, separation: gap, orb, maxOrb, applying: null };
        }
      }
      if (tightest !== null) {
        found.push({ ...tightest, applying: isApplying(a, b, ASPECTS[tightest.key].angle) });
      }
    }
  });
  // Tri stable (ES2019) : à orbe égal, l'ordre des points fournis.
  return found.sort((x, y) => x.orb - y.orb);
}
