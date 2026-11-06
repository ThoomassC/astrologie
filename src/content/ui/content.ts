import type { Locale } from "@/i18n/locales";
import { UI_EN } from "./en";
import { UI_FR } from "./fr";
import type { UiContent } from "./types";

const CONTENT: Readonly<Record<Locale, UiContent>> = { fr: UI_FR, en: UI_EN };

/** Libellés d'interface des pages serveur, dans une langue (serveur seulement). */
export function getUiContent(locale: Locale): UiContent {
  return CONTENT[locale];
}
