import type { Locale } from "@/i18n/locales";
import { SCIENCE_EN } from "./en";
import { SCIENCE_FR } from "./fr";
import type { ScienceContent } from "./types";

const CONTENT: Readonly<Record<Locale, ScienceContent>> = { fr: SCIENCE_FR, en: SCIENCE_EN };

/** Textes de la page Science, dans une langue (serveur seulement). */
export function getScienceContent(locale: Locale): ScienceContent {
  return CONTENT[locale];
}
