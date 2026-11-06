export interface CommonContent {
  readonly siteTitle: string;
  readonly siteDescription: string;
  readonly notFound: { readonly title: string; readonly text: string; readonly back: string };
  /** Mots du fil d'Ariane et des renvois communs. */
  readonly breadcrumbHome: string;
  readonly breadcrumbLabel: string;
  readonly previous: string;
  readonly next: string;
  /** Bouton des détails, fermé puis ouvert. */
  readonly details: string;
  readonly hideDetails: string;
  /** Mot devant le nom de l'auteur d'une image, et renvoi vers sa page source. */
  readonly imageSource: string;
  readonly imageCredit: string;
}
