import { LEXICON_FR } from "./fr";
import type { LexiconContent } from "./types";

/** Lexique (serveur seulement). */
export function getLexiconContent(): LexiconContent {
  return LEXICON_FR;
}
