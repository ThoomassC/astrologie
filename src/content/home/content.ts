import type { Locale } from "@/i18n/locales";
import { HOME_EN } from "./en";
import { HOME_FR } from "./fr";
import type { HomeContent } from "./types";

const CONTENT: Readonly<Record<Locale, HomeContent>> = { fr: HOME_FR, en: HOME_EN };

/** Textes de l'accueil, dans une langue (serveur seulement). */
export function getHomeContent(locale: Locale): HomeContent {
  return CONTENT[locale];
}
