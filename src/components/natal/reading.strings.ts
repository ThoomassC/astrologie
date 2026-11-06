import type { AspectNature, HouseNumber, PlanetKey, SignKey } from "@/lib/astro/keys";

/**
 * Lecture guidée du thème (composant client) : les mots-clés de la tradition, assemblés en phrases, pour montrer
 * comment un astrologue lit une position — l'astre dit de quoi il s'agit, le signe comment, la maison où. Ce n'est
 * pas une interprétation : la phrase d'avertissement le dit.
 */
export interface ReadingStrings {
  title: string;
  intro: string;
  /** Ce que représente l'astre, après « qui représente » : « l'identité et l'élan vital ». */
  planetDomain: Readonly<Record<PlanetKey, string>>;
  /** La couleur du signe, après « prend la couleur du Bélier : » : « élan, franchise et goût du défi ». */
  signManner: Readonly<Record<SignKey, string>>;
  /** Le domaine de la maison, après « d'abord dans » : « la façon de se présenter et le corps ». */
  houseArea: Readonly<Record<HouseNumber, string>>;
  /** État de deux astres en aspect, après « sont » : « en harmonie », « en tension », « unis ». */
  aspectNature: Readonly<Record<AspectNature, string>>;
  sentence: (planetThe: string, domain: string, signOf: string, manner: string, area: string | null) => string;
  aspectSentence: (aThe: string, bThe: string, nature: string, aspect: string) => string;
  /** L'Ascendant, quand l'heure est connue : « du Lion », « élan… ». */
  ascendantSentence: (signOf: string, manner: string) => string;
  caveat: string;
}

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export const READING_STRINGS: ReadingStrings = {
  title: "Lecture guidée",
  intro:
    "Les mots-clés de la tradition, mis bout à bout pour chaque astre : l'astre dit de quoi il s'agit, le signe comment, la maison où, et les aspects avec quels autres astres.",
  planetDomain: {
    sun: "l'identité et l'élan vital",
    moon: "les émotions et les besoins intimes",
    mercury: "la pensée et la communication",
    venus: "l'amour, le goût et les plaisirs",
    mars: "l'action, le désir et le courage",
    jupiter: "la confiance, l'expansion et la quête de sens",
    saturn: "la structure, la durée et les limites",
    uranus: "l'originalité, la liberté et les ruptures",
    neptune: "le rêve, l'idéal et l'intuition",
    pluto: "les forces profondes et la transformation",
  },
  signManner: {
    aries: "élan, franchise et goût du défi",
    taurus: "patience, constance et sens du concret",
    gemini: "curiosité, vivacité et goût de l'échange",
    cancer: "tendresse, attachement et besoin de protection",
    leo: "rayonnement, générosité et confiance en soi",
    virgo: "précision, sens pratique et souci du détail",
    libra: "harmonie, diplomatie et sens de la justice",
    scorpio: "intensité, profondeur et passion",
    sagittarius: "enthousiasme, optimisme et goût de l'aventure",
    capricorn: "ambition, persévérance et sens des responsabilités",
    aquarius: "originalité, indépendance et sens du collectif",
    pisces: "imagination, compassion et sensibilité",
  },
  houseArea: {
    1: "la façon de se présenter et le corps",
    2: "les ressources et les biens",
    3: "les échanges, l'entourage proche et les petits trajets",
    4: "le foyer, la famille et les racines",
    5: "la création, les plaisirs et les amours",
    6: "le travail quotidien et la santé",
    7: "le couple et les associations",
    8: "les crises, les héritages et les biens partagés",
    9: "les études, les voyages lointains et les convictions",
    10: "la vocation, la carrière et la réputation",
    11: "les amitiés et les projets",
    12: "la vie intérieure, la solitude et les épreuves",
  },
  aspectNature: { neutral: "côte à côte", harmonious: "en harmonie", tense: "en tension" },
  sentence: (planetThe, domain, signOf, manner, area) =>
    `${capitalize(planetThe)}, qui représente ${domain}, prend la couleur ${signOf} : ${manner}${area ? `, d'abord dans ${area}` : ""}.`,
  ascendantSentence: (signOf, manner) =>
    `L'Ascendant, le signe qui se levait à l'est à la naissance, représente selon la tradition la façon de se présenter ; il prend la couleur ${signOf} : ${manner}.`,
  aspectSentence: (aThe, bThe, nature, aspect) => `${capitalize(aThe)} et ${bThe} sont ${nature} (${aspect}).`,
  caveat:
    "Ces phrases assemblent les mots-clés de la tradition, position par position : elles ne décrivent pas une personne et ne prédisent rien.",
};
