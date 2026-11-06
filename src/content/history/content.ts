import { HISTORY_FR } from "./fr";
import type { HistoryContent } from "./types";

/** Textes de l'histoire (serveur seulement). */
export function getHistoryContent(): HistoryContent {
  return HISTORY_FR;
}
