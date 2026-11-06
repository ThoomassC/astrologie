import type { Locale } from "@/i18n/locales";
import { HISTORY_EN } from "./en";
import { HISTORY_FR } from "./fr";
import type { HistoryContent } from "./types";

const CONTENT: Readonly<Record<Locale, HistoryContent>> = { fr: HISTORY_FR, en: HISTORY_EN };

/** Textes de l'histoire, dans une langue (serveur seulement). */
export function getHistoryContent(locale: Locale): HistoryContent {
  return CONTENT[locale];
}
