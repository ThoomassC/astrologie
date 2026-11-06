import type { ElementKey } from "@/lib/astro/keys";

/** Pigment de chaque élément (variables de globals.css), pour les pastilles. */
export const ELEMENT_COLORS: Readonly<Record<ElementKey, string>> = {
  fire: "var(--feu)",
  earth: "var(--terre)",
  air: "var(--air)",
  water: "var(--eau)",
};
