import type { Explained, PageHead, Titled } from "@/content/explained";
import type { AspectKey } from "@/lib/astro/keys";

export interface AspectText extends Titled {
  /** Trois à cinq mots-clés (« la fusion », « l'intensité »). */
  readonly keywords: readonly string[];
}

export interface AspectsContent {
  readonly index: PageHead & { readonly intro: Explained };
  readonly aspects: Readonly<Record<AspectKey, AspectText>>;
  /** Ce qu'est un orbe ; pourquoi il varie selon les écoles et les astres. */
  readonly orbs: Titled;
  /** Aspect appliquant et séparant. */
  readonly applying: Titled;
  /** Configurations : grand trigone, carré en T, grande croix, yod, stellium. */
  readonly patterns: Titled;
}
