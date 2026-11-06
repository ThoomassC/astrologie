import type { Locale } from "@/i18n/locales";
import { HOUSES_EN } from "./en";
import { HOUSES_FR } from "./fr";
import type { HousesContent } from "./types";

const CONTENT: Readonly<Record<Locale, HousesContent>> = { fr: HOUSES_FR, en: HOUSES_EN };

/** Textes des maisons, dans une langue (serveur seulement). */
export function getHousesContent(locale: Locale): HousesContent {
  return CONTENT[locale];
}
