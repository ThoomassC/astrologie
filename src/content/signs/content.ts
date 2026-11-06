import type { Locale } from "@/i18n/locales";
import { SIGNS_EN } from "./en";
import { SIGNS_FR } from "./fr";
import type { SignsContent } from "./types";

const CONTENT: Readonly<Record<Locale, SignsContent>> = { fr: SIGNS_FR, en: SIGNS_EN };

/** Textes des signes, dans une langue (serveur seulement). */
export function getSignsContent(locale: Locale): SignsContent {
  return CONTENT[locale];
}
