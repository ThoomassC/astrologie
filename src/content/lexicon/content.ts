import type { Locale } from "@/i18n/locales";
import { LEXICON_EN } from "./en";
import { LEXICON_FR } from "./fr";
import type { LexiconContent } from "./types";

const CONTENT: Readonly<Record<Locale, LexiconContent>> = { fr: LEXICON_FR, en: LEXICON_EN };

/** Lexique, dans une langue (serveur seulement). */
export function getLexiconContent(locale: Locale): LexiconContent {
  return CONTENT[locale];
}
