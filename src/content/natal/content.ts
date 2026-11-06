import type { Locale } from "@/i18n/locales";
import { NATAL_EN } from "./en";
import { NATAL_FR } from "./fr";
import type { NatalContent } from "./types";

const CONTENT: Readonly<Record<Locale, NatalContent>> = { fr: NATAL_FR, en: NATAL_EN };

/** Textes de la page du thème natal, dans une langue (serveur seulement). */
export function getNatalContent(locale: Locale): NatalContent {
  return CONTENT[locale];
}
