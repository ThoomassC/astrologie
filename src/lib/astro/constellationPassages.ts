import { sunConstellationAt } from "./ephemeris";
import type { ZodiacConstellationKey } from "./keys";

/** Un passage du Soleil dans une constellation : [startUtcMs, endUtcMs[. */
interface SunPassage {
  constellation: ZodiacConstellationKey;
  startUtcMs: number;
  endUtcMs: number;
}

const DAY_MS = 86_400_000;
/** Précision des dates d'entrée : la minute (la page n'affiche que des jours). */
const PRECISION_MS = 60_000;
/** Le Sagittaire, dernier passage commencé dans l'année, finit vers le 20 janvier : 60 jours de marge suffisent. */
const SCAN_LIMIT_MS = 60 * DAY_MS;

/* Une année ne dépend que d'elle-même : calculée une fois, partagée entre les pages des signes. */
const byYear = new Map<number, readonly SunPassage[]>();

/** Premier instant (à la minute près) où le Soleil a quitté `from`, entre `lo` (encore dedans) et `hi` (dehors). */
function exitInstant(lo: number, hi: number, from: ZodiacConstellationKey): number {
  let inside = lo;
  let outside = hi;
  while (outside - inside > PRECISION_MS) {
    const middle = inside + Math.floor((outside - inside) / 2);
    if (sunConstellationAt(middle) === from) inside = middle;
    else outside = middle;
  }
  return outside;
}

function computePassages(year: number): readonly SunPassage[] {
  const yearStart = Date.UTC(year, 0, 1);
  const nextYearStart = Date.UTC(year + 1, 0, 1);
  const passages: SunPassage[] = [];
  // Le Soleil séjourne au moins six jours dans chaque constellation : un pas d'un jour ne peut en manquer aucune.
  let current = sunConstellationAt(yearStart);
  let entered: { constellation: ZodiacConstellationKey; startUtcMs: number } | null = null;
  for (let t = yearStart; t < nextYearStart + SCAN_LIMIT_MS; t += DAY_MS) {
    const next = sunConstellationAt(t + DAY_MS);
    if (next === current) continue;
    const at = exitInstant(t, t + DAY_MS, current);
    if (entered !== null) passages.push(Object.freeze({ ...entered, endUtcMs: at }));
    // La première sortie après la fin de l'année clôt le dernier passage commencé dans l'année.
    if (at >= nextYearStart) return Object.freeze(passages);
    entered = { constellation: next, startUtcMs: at };
    current = next;
  }
  throw new Error(`Passages du Soleil de ${year} : aucune sortie trouvée dans les ${SCAN_LIMIT_MS / DAY_MS} jours suivants.`);
}

/**
 * Serveur : dates réelles du Soleil dans les constellations (limites de l'UAI, `Constellation()` d'astronomy-engine,
 * à travers `ephemeris.ts`). Rend les 13 passages dont l'entrée tombe dans l'année civile `year` (UTC), dans l'ordre
 * chronologique et sans trou : la fin de l'un est le début du suivant ; le dernier (Sagittaire) finit l'année d'après.
 */
export function sunPassages(
  year: number,
): readonly { constellation: ZodiacConstellationKey; startUtcMs: number; endUtcMs: number }[] {
  if (!Number.isInteger(year)) throw new RangeError(`Année invalide : ${year}.`);
  const cached = byYear.get(year);
  if (cached) return cached;
  const passages = computePassages(year);
  byYear.set(year, passages);
  return passages;
}
