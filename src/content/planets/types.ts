import type { Explained, PageHead, Titled } from "@/content/explained";
import type { PlanetKey } from "@/lib/astro/keys";
import type { PlanetGroup } from "@/lib/astro/planets";

export const PLANET_SECTION_IDS = [
  "symbolique",
  "dans-un-theme",
  "mythe",
  "astronomie",
  "retrogradation",
  "maitrises",
] as const;
export type PlanetSectionId = (typeof PLANET_SECTION_IDS)[number];

export interface PlanetText {
  /** Accroche, une phrase de 160 caractères au plus. */
  readonly tagline: string;
  readonly intro: Explained;
  /** Domaines de vie que la tradition lui confie, en minuscules (« l'identité », « la vitalité »). */
  readonly keywords: readonly string[];
  readonly sections: Readonly<Record<PlanetSectionId, Titled>>;
  /** Texte alternatif de la sphère texturée (carte de l'astre). */
  readonly imageAlt: string;
}

export interface PlanetsContent {
  readonly index: PageHead & { readonly intro: Explained };
  readonly groups: Readonly<Record<PlanetGroup, Titled>>;
  readonly planets: Readonly<Record<PlanetKey, PlanetText>>;
  /** Le nœud nord (et sud) de la Lune : un point calculé, pas un astre. */
  readonly northNode: Titled;
}
