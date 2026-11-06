import type { Locale } from "@/i18n/locales";
import { PLANETS_EN } from "./en";
import { PLANETS_FR } from "./fr";
import type { PlanetsContent } from "./types";

const CONTENT: Readonly<Record<Locale, PlanetsContent>> = { fr: PLANETS_FR, en: PLANETS_EN };

/** Textes des planètes, dans une langue (serveur seulement). */
export function getPlanetsContent(locale: Locale): PlanetsContent {
  return CONTENT[locale];
}
