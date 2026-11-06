import type { Locale } from "@/i18n/locales";
import { ABOUT_EN } from "./en";
import { ABOUT_FR } from "./fr";
import type { AboutContent } from "./types";

const CONTENT: Readonly<Record<Locale, AboutContent>> = { fr: ABOUT_FR, en: ABOUT_EN };

/** Textes de la page À propos, dans une langue (serveur seulement). */
export function getAboutContent(locale: Locale): AboutContent {
  return CONTENT[locale];
}
