import type { Explained, PageHead, Titled } from "@/content/explained";
import type { ElementKey, ModalityKey, SignKey } from "@/lib/astro/keys";

/** Sections de chaque fiche de signe, dans l'ordre de la page (et ancres : `#caractere`, …). */
export const SIGN_SECTION_IDS = [
  "caractere",
  "dans-un-theme",
  "symbolique",
  "mythe",
  "maitrises",
  "decans",
  "constellation",
] as const;
export type SignSectionId = (typeof SIGN_SECTION_IDS)[number];

export interface SignText {
  /** Accroche, une phrase de 160 caractères au plus, sous le nom du signe. */
  readonly tagline: string;
  /** Présentation du signe : le résumé ouvre la fiche, les détails la prolongent. */
  readonly intro: Explained;
  /** Cinq à sept qualités selon la tradition, en minuscules (« l'élan », « le courage »). */
  readonly keywords: readonly string[];
  /** Trois à cinq travers selon la tradition. */
  readonly shadowKeywords: readonly string[];
  /** Partie du corps associée (mélothésie), avec article : « la tête ». */
  readonly bodyPart: string;
  readonly sections: Readonly<Record<SignSectionId, Titled>>;
  /** Nom propre de l'étoile la plus brillante de la constellation (« Hamal »). */
  readonly brightestStarName: string;
  /** Texte alternatif de la carte d'Urania's Mirror qui illustre la fiche. */
  readonly imageAlt: string;
}

export interface ElementText extends Titled {
  readonly keywords: readonly string[];
}

export interface SignsContent {
  readonly index: PageHead & { readonly intro: Explained };
  readonly elements: Readonly<Record<ElementKey, ElementText>>;
  readonly modalities: Readonly<Record<ModalityKey, ElementText>>;
  /** Signes masculins (feu, air) et féminins (terre, eau), diurnes et nocturnes. */
  readonly polarity: Titled;
  /** Pourquoi les dates changent d'un jour selon l'année ; ce que veut dire « né sur la cuspide ». */
  readonly cusps: Titled;
  readonly signs: Readonly<Record<SignKey, SignText>>;
}
