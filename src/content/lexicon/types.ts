import type { Explained, PageHead } from "@/content/explained";

export interface LexiconEntry {
  /** Ancre, en kebab-case sans accents : « ascendant », « maitre-du-signe ». */
  readonly id: string;
  readonly term: string;
  readonly text: Explained;
  /** Ancres d'autres entrées à voir aussi. */
  readonly see: readonly string[];
}

export interface LexiconContent extends PageHead {
  /** Entrées dans l'ordre alphabétique français. */
  readonly entries: readonly LexiconEntry[];
}
