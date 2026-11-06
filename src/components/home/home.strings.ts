import { INTL_LOCALE, type Locale } from "@/i18n/locales";
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
  /** Phase après « La Lune, » ; en anglais, adjectif devant « Moon » (« The full Moon is in Leo »). */
  moon: (phase: string, signName: string) => string;
  retrogrades: (names: readonly string[]) => string;
  noRetrograde: string;
  phases: Readonly<Record<MoonPhaseKey, string>>;
  natalCta: string;
  signsCta: string;
}

const list = (locale: Locale, names: readonly string[]) =>
  new Intl.ListFormat(INTL_LOCALE[locale], { style: "long", type: "conjunction" }).format(names);

const capitalize = (text: string) => text.replace(/^./, (c) => c.toUpperCase());

/** « Vendredi 6 novembre 2026 à 11:30 », « Friday 6 November 2026 at 11:30 ». */
const longDate = (locale: Locale, date: Date) =>
  capitalize(
    new Intl.DateTimeFormat(INTL_LOCALE[locale], {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }).format(date),
  );

export const HOME_STRINGS: Readonly<Record<Locale, HomeStrings>> = {
  fr: {
    title: "Le ciel du jour",
    lead: "Où sont le Soleil, la Lune et les planètes dans le zodiaque, en ce moment : calculé dans votre navigateur.",
    loading: "Calcul des positions du jour…",
    error: "Les positions du jour n'ont pas pu être calculées. Vérifiez votre connexion, puis recalculez.",
    retry: "Recalculer les positions",
    wheelTitle: "Roue du zodiaque : les positions des astres en ce moment",
    listTitle: "Positions du moment",
    retrograde: "rétrograde",
    aspectsTitle: "Aspects majeurs du moment",
    aspectLine: (a, b, aspect) => `${capitalize(a)} et ${b} ${aspect}`,
    aspectIn: {
      conjunction: "en conjonction",
      sextile: "en sextile",
      square: "en carré",
      trine: "en trigone",
      opposition: "en opposition",
    },
    noAspect: "Aucun aspect majeur entre les astres en ce moment.",
    date: (date) => longDate("fr", date),
    sun: (signThe) => `Le Soleil traverse ${signThe}.`,
    moon: (phase, signName) => `La Lune, ${phase}, est en ${signName}.`,
    retrogrades: (names) => `${names.length > 1 ? "Rétrogrades" : "Rétrograde"} en ce moment : ${list("fr", names)}.`,
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
  },
  en: {
    title: "Today's sky",
    lead: "Where the Sun, the Moon and the planets are in the zodiac right now: calculated in your browser.",
    loading: "Calculating today's positions…",
    error: "Today's positions could not be calculated. Check your connection, then recalculate.",
    retry: "Recalculate the positions",
    wheelTitle: "Zodiac wheel: the positions of the planets right now",
    listTitle: "Positions right now",
    retrograde: "retrograde",
    aspectsTitle: "Major aspects right now",
    aspectLine: (a, b, aspect) => `${capitalize(a)} and ${b} ${aspect}`,
    aspectIn: {
      conjunction: "in conjunction",
      sextile: "in sextile",
      square: "in square",
      trine: "in trine",
      opposition: "in opposition",
    },
    noAspect: "No major aspect between the planets right now.",
    date: (date) => longDate("en", date),
    sun: (signThe) => `The Sun is crossing ${signThe}.`,
    moon: (phase, signName) => `The ${phase} Moon is in ${signName}.`,
    retrogrades: (names) => `Retrograde right now: ${list("en", names)}.`,
    noRetrograde: "No planet is retrograde right now.",
    phases: {
      new: "new",
      waxingCrescent: "waxing crescent",
      firstQuarter: "first-quarter",
      waxingGibbous: "waxing gibbous",
      full: "full",
      waningGibbous: "waning gibbous",
      lastQuarter: "last-quarter",
      waningCrescent: "waning crescent",
    },
    natalCta: "Calculate your birth chart",
    signsCta: "Discover the twelve signs",
  },
};
