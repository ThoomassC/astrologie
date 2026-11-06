import type { Explained, PageHead, SourceLink, Titled } from "@/content/explained";

export const HISTORY_ERA_IDS = [
  "mesopotamie",
  "egypte-hellenistique",
  "rome-et-ptolemee",
  "monde-islamique",
  "europe-medievale",
  "renaissance",
  "rupture-scientifique",
  "xxe-siecle",
] as const;
export type HistoryEraId = (typeof HISTORY_ERA_IDS)[number];

/** Illustrations de la page Histoire (fichiers : src/lib/site/images.ts). */
export type HistoryImageKey =
  | "mulApin"
  | "denderah"
  | "cellariusSysteme"
  | "astrolabe"
  | "hommeZodiacal"
  | "cellariusPlanisphere"
  | "cellariusHemisphere"
  | "flammarion";

export interface HistoryEra extends Titled {
  /** Période, en clair : « vers 1800 – 300 av. J.-C. ». */
  readonly period: string;
  readonly image: { readonly key: HistoryImageKey; readonly alt: string; readonly caption: string } | null;
  readonly sources: readonly SourceLink[];
}

export interface HistoryContent extends PageHead {
  readonly intro: Explained;
  readonly eras: Readonly<Record<HistoryEraId, HistoryEra>>;
}
