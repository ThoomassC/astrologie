import type { Explained, PageHead, SourceLink, Titled } from "@/content/explained";

export const SCIENCE_TOPIC_IDS = [
  "precession",
  "ophiuchus",
  "carlson-1985",
  "jumeaux-temporels",
  "gauquelin",
  "effet-barnum",
  "mecanisme",
] as const;
export type ScienceTopicId = (typeof SCIENCE_TOPIC_IDS)[number];

export interface ScienceTopic extends Titled {
  readonly sources: readonly SourceLink[];
}

export interface ScienceContent extends PageHead {
  readonly intro: Explained;
  readonly topics: Readonly<Record<ScienceTopicId, ScienceTopic>>;
  /** Pourquoi l'astrologie reste un fait culturel, et comment en parler sans mépris. */
  readonly culture: Titled;
}
