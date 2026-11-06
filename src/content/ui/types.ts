/** Libellés d'interface des pages serveur : fiches, tableaux, renvois. */
export interface UiContent {
  readonly signs: {
    readonly galleryTitle: string;
    readonly elementsTitle: string;
    readonly modalitiesTitle: string;
    readonly matrixCaption: string;
    readonly matrixCorner: string;
    readonly wheelTitle: (signName: string) => string;
    readonly fiche: {
      readonly label: string;
      readonly dates: string;
      readonly element: string;
      readonly modality: string;
      readonly polarity: string;
      readonly ruler: string;
      readonly modernRuler: string;
      readonly exaltation: string;
      readonly detriment: string;
      readonly fall: string;
      readonly body: string;
      readonly constellation: string;
      readonly brightestStar: string;
      readonly none: string;
    };
    readonly polarityValues: { readonly masculine: string; readonly feminine: string };
    readonly qualities: string;
    readonly shadows: string;
    readonly decansCaption: string;
    readonly decansHeaders: readonly [string, string, string, string];
    readonly decanName: (n: 1 | 2 | 3) => string;
    readonly degrees: (from: number, to: number) => string;
    readonly passage: (year: number, constellationOf: string, start: string, end: string) => string;
    readonly passageOphiuchus: (year: number, start: string, end: string) => string;
    readonly passageNote: string;
    readonly previous: string;
    readonly next: string;
    readonly signsOf: (name: string) => string;
    readonly seePlanet: (planetName: string) => string;
    readonly constellationValue: (latin: string, areaSqDeg: number) => string;
    readonly starValue: (name: string, designation: string, magnitude: string) => string;
  };
  readonly history: { readonly sources: string };
  readonly home: { readonly doorsLabel: string };
  readonly science: {
    readonly sources: string;
    readonly sisterSite: string;
    readonly sisterSiteText: string;
    /** Nom de la manchette (estampe et renvoi au site frère). */
    readonly asideLabel: string;
  };
  readonly lexicon: { readonly seeAlso: string; readonly lettersLabel: string };
  readonly about: { readonly creditsTitle: string; readonly creditsSigns: string; readonly creditsHistory: string; readonly creditsMaps: string; readonly creditsOther: string };
  readonly planets: {
    readonly fiche: {
      readonly label: string;
      readonly group: string;
      readonly sidereal: string;
      readonly synodic: string;
      readonly perSign: string;
      readonly retrograde: string;
      readonly domiciles: string;
      readonly exaltation: string;
      readonly detriment: string;
      readonly fall: string;
      readonly discovery: string;
      readonly ancient: string;
      readonly never: string;
      readonly none: string;
    };
    readonly days: (n: number) => string;
    readonly years: (n: number) => string;
    readonly retrogradeEvery: (days: number) => string;
    readonly previous: string;
    readonly next: string;
  };
}
