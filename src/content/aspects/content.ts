import type { Locale } from "@/i18n/locales";
import { ASPECTS_EN } from "./en";
import { ASPECTS_FR } from "./fr";
import type { AspectsContent } from "./types";

const CONTENT: Readonly<Record<Locale, AspectsContent>> = { fr: ASPECTS_FR, en: ASPECTS_EN };

/** Textes des aspects, dans une langue (serveur seulement). */
export function getAspectsContent(locale: Locale): AspectsContent {
  return CONTENT[locale];
}
