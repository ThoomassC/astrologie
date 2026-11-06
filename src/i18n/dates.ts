import type { MonthDay } from "@/lib/astro/signs";
import { MONTH_NAMES } from "./names";

/** « 21 mars », « 1er avril » (ordinal du premier jour, comme l'écrit le français). */
export function formatMonthDay({ month, day }: MonthDay): string {
  return `${day === 1 ? "1er" : day} ${MONTH_NAMES[month - 1]}`;
}

/** Jour et mois d'un instant, lus en temps universel : « 19 avril ». */
export function formatUtcDay(utcMs: number): string {
  const date = new Date(utcMs);
  return formatMonthDay({ month: date.getUTCMonth() + 1, day: date.getUTCDate() });
}
