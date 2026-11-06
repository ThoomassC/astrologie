/**
 * Forme commune des textes du site : un résumé simple, toujours visible, puis des détails à la demande (bouton
 * « Détails », `<details>` natif). Lu côté serveur seulement.
 */

/** Un bloc de détails : un paragraphe, ou une liste à puces. */
export type Block = { readonly kind: "p"; readonly text: string } | { readonly kind: "list"; readonly items: readonly string[] };

export interface Explained {
  /** Une à trois phrases simples, 320 caractères au plus. */
  readonly summary: string;
  /** Au moins un bloc. */
  readonly details: readonly [Block, ...Block[]];
}

export interface Titled extends Explained {
  readonly heading: string;
}

export interface SourceLink {
  readonly label: string;
  readonly href: `https://${string}`;
}

/** Tête de page : titre et chapeau (une phrase). */
export interface PageHead {
  readonly title: string;
  readonly lead: string;
}
