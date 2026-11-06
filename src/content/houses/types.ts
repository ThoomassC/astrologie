import type { Explained, PageHead, Titled } from "@/content/explained";
import type { HouseNumber, HouseSystemKey } from "@/lib/astro/keys";

export interface HouseText extends Titled {
  /** Domaines de vie, en minuscules (« la personnalité », « le corps »). */
  readonly keywords: readonly string[];
}

export interface HousesContent {
  readonly index: PageHead & { readonly intro: Explained };
  /** Les quatre angles : Ascendant, Descendant, Milieu du Ciel, Fond du Ciel. */
  readonly angles: Titled;
  /** Hémisphères, quadrants ; maisons angulaires, succédentes, cadentes. */
  readonly quadrants: Titled;
  readonly houses: Readonly<Record<HouseNumber, HouseText>>;
  readonly systems: Readonly<Record<HouseSystemKey, Titled>>;
  /** Pourquoi Placidus échoue près des cercles polaires. */
  readonly polar: Titled;
}
