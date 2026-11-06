import type { UiContent } from "./types";

const DECAN_NAMES = ["First decan", "Second decan", "Third decan"] as const;

/** Number in British English format, with optional decimals: “1,392.7”. */
function number(n: number, digits = 0): string {
  return new Intl.NumberFormat("en-GB", { maximumFractionDigits: digits, minimumFractionDigits: 0 }).format(n);
}

/** English plural: singular for exactly one, plural otherwise (“0.5 days”, “1 day”, “1.5 days”). */
function plural(n: number, digits: number, word: string): string {
  const text = number(n, digits);
  return `${text} ${text === "1" ? word : `${word}s`}`;
}

export const UI_EN: UiContent = {
  signs: {
    galleryTitle: "The twelve signs",
    elementsTitle: "The four elements",
    modalitiesTitle: "The three modalities",
    matrixCaption: "The twelve signs, arranged by element and by modality",
    matrixCorner: "Modality",
    wheelTitle: (signName) => `Zodiac wheel, with the sign ${signName} highlighted`,
    fiche: {
      label: "Sign profile",
      dates: "Usual dates",
      element: "Element",
      modality: "Modality",
      polarity: "Polarity",
      ruler: "Ruler",
      modernRuler: "Modern ruler",
      exaltation: "Exaltation",
      detriment: "Detriment",
      fall: "Fall",
      body: "Part of the body",
      constellation: "Constellation",
      brightestStar: "Brightest star",
      none: "none",
    },
    polarityValues: { masculine: "masculine, diurnal", feminine: "feminine, nocturnal" },
    qualities: "Qualities according to tradition",
    shadows: "Failings according to tradition",
    decansCaption: "The three decans of the sign",
    decansHeaders: ["Decan", "Degrees", "Face (Chaldean order)", "Sign of the same element"],
    decanName: (n) => DECAN_NAMES[n - 1],
    degrees: (from, to) => `from ${from}° to ${to}°`,
    passage: (year, constellationOf, start, end) =>
      `In ${year}, the Sun passes through the constellation ${constellationOf} from ${start} to ${end}.`,
    passageOphiuchus: (year, start, end) =>
      `It then crosses Ophiuchus, the Serpent Bearer, from ${start} to ${end} ${year}: a constellation that the astrologers' zodiac does not count.`,
    passageInfo: "how these dates are calculated",
    passageNote: "Dates calculated for this site using the official constellation boundaries (International Astronomical Union), to within a day.",
    previous: "Previous sign",
    next: "Next sign",
    signsOf: (name) => `The ${name} signs`,
    seePlanet: (planetName) => `Read the page on ${planetName}`,
    constellationValue: (latin, areaSqDeg) => `${latin}, ${number(areaSqDeg)} square degrees`,
    starValue: (name, designation, magnitude) => `${name} (${designation}), magnitude ${magnitude}`,
  },
  history: { sources: "Further reading" },
  home: { doorsLabel: "Explore the site" },
  science: {
    sources: "Sources",
    asideLabel: "In the margin",
    sisterSite: "Astronomie",
    sisterSiteText: "To see the real sky, the real distances and the real sizes: the sister site",
  },
  lexicon: { seeAlso: "See also", lettersLabel: "Glossary letters" },
  about: {
    creditsTitle: "Every image, one by one",
    creditsSigns: "The sign plates",
    creditsHistory: "The history plates",
    creditsMaps: "The maps of the planets",
    creditsOther: "Sky and paper",
  },
  planets: {
    fiche: {
      label: "Planet profile",
      group: "Group",
      sidereal: "Circuit of the zodiac",
      synodic: "Return to the Sun",
      perSign: "Average time in a sign",
      retrograde: "Retrograde motion",
      domiciles: "Domicile",
      exaltation: "Exaltation",
      detriment: "Detriment",
      fall: "Fall",
      discovery: "Discovery",
      ancient: "known since Antiquity",
      never: "never",
      none: "none",
    },
    days: (n) => plural(n, n < 10 ? 1 : 0, "day"),
    years: (n) => plural(n, n < 10 ? 1 : 0, "year"),
    retrogradeEvery: (days) => `about ${number(days)} days each time`,
    previous: "Previous body",
    next: "Next body",
  },
};
