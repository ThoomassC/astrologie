import { type ChartAngles, eclipticLongitudeOfRightAscension, type SkyFrame } from "./angles";
import { HOUSE_NUMBERS, type HouseNumber, type HouseSystemKey, type Longitude, type Twelve } from "./keys";
import { norm360 } from "./zodiac";

/** Cuspides des douze maisons : [0] = cuspide I, [9] = cuspide X. */
export type HouseCusps = Twelve<Longitude>;

/** Au-delà de cette latitude (en valeur absolue), Placidus se replie sur Porphyre. */
export const PLACIDUS_MAX_LATITUDE = 66;

/** Système demandé, système appliqué et cuspides obtenues. */
export interface HouseResult {
  requested: HouseSystemKey;
  used: HouseSystemKey;
  cusps: HouseCusps;
  /** Repli sur Porphyre quand Placidus ne peut pas être calculé ; null sinon. */
  fallback: { reason: "polar-latitude"; latitudeDeg: number } | { reason: "no-convergence" } | null;
}

const RAD = Math.PI / 180;

/** Arrêt de l'itération de Placidus : deux estimations successives de l'ascension droite à moins de 1e-10°. */
const PLACIDUS_TOLERANCE_DEG = 1e-10;
/** L'itération contracte d'un facteur ≤ 2/3 par tour : 200 tours suffisent largement. */
const PLACIDUS_MAX_ITERATIONS = 200;

/** Arc parcouru de `from` à `to` dans le sens des longitudes croissantes, dans [0, 360). */
const arcForward = (from: Longitude, to: Longitude) => norm360(to - from);

/** Les douze cuspides à partir des six du demi-cercle oriental ; chaque autre est l'opposée de l'une d'elles. */
function fromEasternHalf(
  i: Longitude,
  ii: Longitude,
  iii: Longitude,
  x: Longitude,
  xi: Longitude,
  xii: Longitude,
): HouseCusps {
  const opposite = (l: Longitude) => norm360(l + 180);
  return [
    norm360(i),
    norm360(ii),
    norm360(iii),
    opposite(x),
    opposite(xi),
    opposite(xii),
    opposite(i),
    opposite(ii),
    opposite(iii),
    norm360(x),
    norm360(xi),
    norm360(xii),
  ];
}

function porphyry(a: ChartAngles): HouseCusps {
  const upper = arcForward(a.midheaven, a.ascendant);
  const lower = arcForward(a.ascendant, a.imumCoeli);
  return fromEasternHalf(
    a.ascendant,
    a.ascendant + lower / 3,
    a.ascendant + (2 * lower) / 3,
    a.midheaven,
    a.midheaven + upper / 3,
    a.midheaven + (2 * upper) / 3,
  );
}

function equal(a: ChartAngles): HouseCusps {
  const cusp = (n: number) => norm360(a.ascendant + 30 * n);
  return [cusp(0), cusp(1), cusp(2), cusp(3), cusp(4), cusp(5), cusp(6), cusp(7), cusp(8), cusp(9), cusp(10), cusp(11)];
}

function wholeSign(a: ChartAngles): HouseCusps {
  // ASC − (ASC mod 30) est exact : le début du signe de l'Ascendant, sans arrondi de ASC / 30.
  const first = a.ascendant - (a.ascendant % 30);
  const cusp = (n: number) => norm360(first + 30 * n);
  return [cusp(0), cusp(1), cusp(2), cusp(3), cusp(4), cusp(5), cusp(6), cusp(7), cusp(8), cusp(9), cusp(10), cusp(11)];
}

/**
 * Placidus par itération des demi-arcs, en ascension droite α : pour un point de l'écliptique, tan δ = tan ε sin α,
 * donc DSA(α) = acos(−tan φ tan ε sin α). Chaque cuspide est un point fixe α = RAMC + décalage + part × DSA(α) :
 * XI (0, 1/3), XII (0, 2/3), II (60, 2/3) car DSA + NSA/3 = 60 + 2·DSA/3, III (120, 1/3) car DSA + 2·NSA/3 = 120 + DSA/3.
 * |dDSA/dα| ≤ |tan φ tan ε| < 1 : l'itération contracte d'un facteur ≤ 2/3 et converge partout où les demi-arcs
 * existent. Rend null s'ils n'existent pas (un point de l'écliptique ne se lève pas) ou sans convergence.
 */
function placidus(f: SkyFrame, a: ChartAngles): HouseCusps | null {
  const tanPhiTanEpsilon = Math.tan(f.latitudeDeg * RAD) * Math.tan(f.obliquityDeg * RAD);
  if (!(Math.abs(tanPhiTanEpsilon) < 1)) return null;
  const diurnalSemiArc = (alphaDeg: number) => Math.acos(-tanPhiTanEpsilon * Math.sin(alphaDeg * RAD)) / RAD;

  const cusp = (offsetDeg: number, share: number): Longitude | null => {
    let alpha = f.ramcDeg + offsetDeg + share * 90;
    for (let iteration = 0; iteration < PLACIDUS_MAX_ITERATIONS; iteration++) {
      const next = f.ramcDeg + offsetDeg + share * diurnalSemiArc(alpha);
      if (Math.abs(next - alpha) < PLACIDUS_TOLERANCE_DEG) {
        return eclipticLongitudeOfRightAscension(next, f.obliquityDeg);
      }
      alpha = next;
    }
    return null;
  };

  const xi = cusp(0, 1 / 3);
  const xii = cusp(0, 2 / 3);
  const ii = cusp(60, 2 / 3);
  const iii = cusp(120, 1 / 3);
  if (xi === null || xii === null || ii === null || iii === null) return null;
  return fromEasternHalf(a.ascendant, ii, iii, a.midheaven, xi, xii);
}

/**
 * Cuspides selon le système demandé ; dans tous les systèmes, chaque cuspide est à 180° de son opposée.
 * - Placidus : la cuspide XI est le point de l'écliptique d'angle horaire H = −DSA/3, la XII à −2·DSA/3, la II à
 *   −(DSA + NSA/3), la III à −(DSA + 2·NSA/3) (H = RAMC − AR, positif vers l'ouest ; DSA = acos(−tan φ tan δ),
 *   NSA = 180 − DSA) ; I = ASC, X = MC. Repli sur Porphyre si |φ| > PLACIDUS_MAX_LATITUDE ou sans convergence.
 * - Porphyre : I = ASC, X = MC, chaque quadrant divisé en trois parts égales.
 * - Égales : cuspide n = ASC + 30·(n − 1) ; le MC n'est en général pas la cuspide X.
 * - Signes entiers : cuspide I = 30·⌊ASC/30⌋, cuspide n = I + 30·(n − 1), donc X = I + 270 (mod 360).
 */
export function computeHouses(s: HouseSystemKey, f: SkyFrame, a: ChartAngles): HouseResult {
  switch (s) {
    case "porphyry":
      return { requested: s, used: s, cusps: porphyry(a), fallback: null };
    case "equal":
      return { requested: s, used: s, cusps: equal(a), fallback: null };
    case "wholeSign":
      return { requested: s, used: s, cusps: wholeSign(a), fallback: null };
    case "placidus": {
      if (Math.abs(f.latitudeDeg) > PLACIDUS_MAX_LATITUDE) {
        return {
          requested: s,
          used: "porphyry",
          cusps: porphyry(a),
          fallback: { reason: "polar-latitude", latitudeDeg: f.latitudeDeg },
        };
      }
      const cusps = placidus(f, a);
      return cusps === null
        ? { requested: s, used: "porphyry", cusps: porphyry(a), fallback: { reason: "no-convergence" } }
        : { requested: s, used: s, cusps, fallback: null };
    }
  }
}

/** Maison où tombe une longitude ; un point exactement sur une cuspide est dans la maison qui commence là. */
export function houseOf(l: Longitude, c: HouseCusps): HouseNumber {
  // Repli si l'arrondi laisse le point entre deux maisons : la maison dont la cuspide le précède de plus près.
  let nearest: HouseNumber = 1;
  let nearestArc = Number.POSITIVE_INFINITY;
  for (const house of HOUSE_NUMBERS) {
    const start = c[house - 1];
    const into = arcForward(start, l);
    const size = arcForward(start, c[house % 12]);
    if (into < size) return house;
    if (size > 0 && into < nearestArc) {
      nearest = house;
      nearestArc = into;
    }
  }
  return nearest;
}
