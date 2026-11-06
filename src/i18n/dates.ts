import type { MonthDay } from "@/lib/astro/signs";
import type { Locale } from "./locales";
import { MONTH_NAMES } from "./names";

/**
 * Jour et mois : « 21 mars », « 1er avril » (ordinal du premier jour, comme l'écrit le français) ; en anglais
 * britannique, « 21 March », « 1 April ».
 */
export function formatMonthDay({ month, day }: MonthDay, locale: Locale): string {
  const dayText = locale === "fr" && day === 1 ? "1er" : String(day);
  return `${dayText} ${MONTH_NAMES[locale][month - 1]}`;
}

/** Jour et mois d'un instant, lus en temps universel : « 19 avril », « 19 April ». */
export function formatUtcDay(utcMs: number, locale: Locale): string {
  const date = new Date(utcMs);
  return formatMonthDay({ month: date.getUTCMonth() + 1, day: date.getUTCDate() }, locale);
}
