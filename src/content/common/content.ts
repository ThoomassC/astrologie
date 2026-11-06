import type { Locale } from "@/i18n/locales";
import { COMMON_EN } from "./en";
import { COMMON_FR } from "./fr";
import type { CommonContent } from "./types";

const CONTENT: Readonly<Record<Locale, CommonContent>> = { fr: COMMON_FR, en: COMMON_EN };

/** Textes communs du site, dans une langue (serveur seulement). */
export function getCommonContent(locale: Locale): CommonContent {
  return CONTENT[locale];
}
