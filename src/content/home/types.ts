import type { Titled } from "@/content/explained";

export const HOME_DOOR_KEYS = ["signs", "planets", "houses", "aspects", "natal", "history", "science"] as const;
export type HomeDoorKey = (typeof HOME_DOOR_KEYS)[number];

export interface HomeContent {
  /** « L'astrologie en bref » : quatre notions, chacune un résumé puis ses détails. */
  readonly essentialsTitle: string;
  readonly essentials: readonly [Titled, Titled, Titled, Titled];
  /** Portes vers les sections : un titre court et une phrase. */
  readonly doors: Readonly<Record<HomeDoorKey, { readonly title: string; readonly text: string }>>;
  /** Encart honnête : ce que dit la science, en deux phrases. */
  readonly scienceNote: { readonly title: string; readonly text: string };
  /** Intertitre et chapeau de la frise des douze signes. */
  readonly signsFrieze: { readonly title: string; readonly lead: string };
}
