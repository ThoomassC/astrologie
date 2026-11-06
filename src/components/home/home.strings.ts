import type { MAJOR_ASPECT_KEYS } from "@/lib/astro/keys";
import type { MoonPhaseKey } from "@/lib/astro/moonPhase";

/** Textes du ciel du jour (composant client de l'accueil). */
export interface HomeStrings {
  title: string;
  lead: string;
  loading: string;
  error: string;
  retry: string;
  wheelTitle: string;
  listTitle: string;
  retrograde: string;
  aspectsTitle: string;
  /** « Le Soleil et Mars en trigone » : les deux astres (forme sujet), puis l'aspect. */
  aspectLine: (a: string, b: string, aspect: string) => string;
  aspectIn: Readonly<Record<(typeof MAJOR_ASPECT_KEYS)[number], string>>;
  noAspect: string;
  date: (date: Date) => string;
  sun: (signThe: string) => string;
  moon: (phase: string, signName: string) => string;
  retrogrades: (names: readonly string[]) => string;
  noRetrograde: string;
  phases: Readonly<Record<MoonPhaseKey, string>>;
  natalCta: string;
  signsCta: string;
}

const LIST = new Intl.ListFormat("fr-FR", { style: "long", type: "conjunction" });

export const HOME_STRINGS: HomeStrings = {
  title: "Le ciel du jour",
  lead: "Où sont le Soleil, la Lune et les planètes dans le zodiaque, en ce moment : calculé dans votre navigateur.",
  loading: "Calcul des positions du jour…",
  error: "Les positions du jour n'ont pas pu être calculées. Vérifiez votre connexion, puis recalculez.",
  retry: "Recalculer les positions",
  wheelTitle: "Roue du zodiaque : les positions des astres en ce moment",
  listTitle: "Positions du moment",
  retrograde: "rétrograde",
  aspectsTitle: "Aspects majeurs du moment",
  aspectLine: (a, b, aspect) => `${a.replace(/^./, (c) => c.toUpperCase())} et ${b} ${aspect}`,
  aspectIn: {
    conjunction: "en conjonction",
    sextile: "en sextile",
    square: "en carré",
    trine: "en trigone",
    opposition: "en opposition",
  },
  noAspect: "Aucun aspect majeur entre les astres en ce moment.",
  date: (date) =>
    new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "2-digit" })
      .format(date)
      .replace(/^./, (c) => c.toUpperCase()),
  sun: (signThe) => `Le Soleil traverse ${signThe}.`,
  moon: (phase, signName) => `La Lune, ${phase}, est en ${signName}.`,
  retrogrades: (names) => `${names.length > 1 ? "Rétrogrades" : "Rétrograde"} en ce moment : ${LIST.format(names)}.`,
  noRetrograde: "Aucune planète n'est rétrograde en ce moment.",
  phases: {
    new: "nouvelle",
    waxingCrescent: "en premier croissant",
    firstQuarter: "à son premier quartier",
    waxingGibbous: "gibbeuse croissante",
    full: "pleine",
    waningGibbous: "gibbeuse décroissante",
    lastQuarter: "à son dernier quartier",
    waningCrescent: "en dernier croissant",
  },
  natalCta: "Calculer votre thème natal",
  signsCta: "Découvrir les douze signes",
};
