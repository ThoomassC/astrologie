import type { UiContent } from "./types";

const DECAN_NAMES = ["Premier décan", "Deuxième décan", "Troisième décan"] as const;

/** Nombre à la française, avec décimales facultatives : « 1 392,7 ». */
function number(n: number, digits = 0): string {
  return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: digits, minimumFractionDigits: 0 }).format(n);
}

export const UI_FR: UiContent = {
  signs: {
    galleryTitle: "Les douze signes",
    elementsTitle: "Les quatre éléments",
    modalitiesTitle: "Les trois modalités",
    matrixCaption: "Les douze signes, rangés par élément et par modalité",
    matrixCorner: "Modalité",
    wheelTitle: (signName) => `Roue du zodiaque, le signe ${signName} mis en évidence`,
    fiche: {
      label: "Fiche du signe",
      dates: "Dates usuelles",
      element: "Élément",
      modality: "Modalité",
      polarity: "Polarité",
      ruler: "Maître",
      modernRuler: "Maître moderne",
      exaltation: "Exaltation",
      detriment: "Exil",
      fall: "Chute",
      body: "Partie du corps",
      constellation: "Constellation",
      brightestStar: "Étoile la plus brillante",
      none: "aucune",
    },
    polarityValues: { masculine: "masculine, diurne", feminine: "féminine, nocturne" },
    qualities: "Qualités selon la tradition",
    shadows: "Travers selon la tradition",
    decansCaption: "Les trois décans du signe",
    decansHeaders: ["Décan", "Degrés", "Face (ordre chaldéen)", "Signe de même élément"],
    decanName: (n) => DECAN_NAMES[n - 1],
    degrees: (from, to) => `de ${from}° à ${to}°`,
    passage: (year, constellationOf, start, end) =>
      `En ${year}, le Soleil traverse la constellation ${constellationOf} du ${start} au ${end}.`,
    passageOphiuchus: (year, start, end) =>
      `Puis il passe par Ophiuchus, le Serpentaire, du ${start} au ${end} ${year} : une constellation que le zodiaque des astrologues ne compte pas.`,
    passageNote: "Dates calculées pour ce site avec les limites officielles des constellations (Union astronomique internationale), à un jour près.",
    previous: "Signe précédent",
    next: "Signe suivant",
    signsOf: (name) => `Les signes ${name}`,
    seePlanet: (planetName) => `Lire la fiche ${planetName}`,
    constellationValue: (latin, areaSqDeg) => `${latin}, ${number(areaSqDeg)} degrés carrés`,
    starValue: (name, designation, magnitude) => `${name} (${designation}), magnitude ${magnitude}`,
  },
  history: { sources: "Pour aller plus loin" },
  home: { doorsLabel: "Explorer le site" },
  science: {
    sources: "Sources",
    asideLabel: "En marge",
    sisterSite: "Astronomie",
    sisterSiteText: "Pour voir le vrai ciel, les vraies distances et les vraies tailles : le site frère",
  },
  lexicon: { seeAlso: "Voir aussi", lettersLabel: "Lettres du lexique" },
  about: {
    creditsTitle: "Toutes les images, une par une",
    creditsSigns: "Les cartes des signes",
    creditsHistory: "Les planches de l'histoire",
    creditsMaps: "Les cartes des astres",
    creditsOther: "Ciel et papier",
  },
  planets: {
    fiche: {
      label: "Fiche de l'astre",
      group: "Groupe",
      sidereal: "Tour du zodiaque",
      synodic: "Retour auprès du Soleil",
      perSign: "Temps moyen dans un signe",
      retrograde: "Rétrogradation",
      domiciles: "Domicile",
      exaltation: "Exaltation",
      detriment: "Exil",
      fall: "Chute",
      discovery: "Découverte",
      ancient: "connu depuis l'Antiquité",
      never: "jamais",
      none: "aucune",
    },
    days: (n) => `${number(n, n < 10 ? 1 : 0)} jour${n >= 2 ? "s" : ""}`,
    years: (n) => `${number(n, n < 10 ? 1 : 0)} an${n >= 2 ? "s" : ""}`,
    retrogradeEvery: (days) => `environ ${number(days)} jours à chaque fois`,
    previous: "Astre précédent",
    next: "Astre suivant",
  },
};
