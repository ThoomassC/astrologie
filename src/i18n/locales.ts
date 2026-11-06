/**
 * Langues du site, dans l'ordre de la bascule. Ce module n'importe rien : le proxy, les composants serveur et les
 * composants client le lisent tous.
 */
export const LOCALES = ["fr", "en"] as const;

export type Locale = (typeof LOCALES)[number];

/** Langue des composants rendus hors fournisseur et des visites qui n'en préfèrent aucune. */
export const DEFAULT_LOCALE: Locale = "fr";

/** Vrai pour une langue du site, écrite telle quelle : « fr », mais pas « FR » ni « fr-FR ». */
export function isLocale(value: unknown): value is Locale {
  return LOCALES.some((locale) => locale === value);
}

/** L'autre langue du site : la cible de la bascule. */
export function otherLocale(locale: Locale): Locale {
  return locale === "fr" ? "en" : "fr";
}

/** Balise BCP 47 donnée à Intl (nombres, dates, listes) : anglais britannique, jour-mois-année, formats métriques. */
export const INTL_LOCALE: Readonly<Record<Locale, string>> = { fr: "fr-FR", en: "en-GB" };

/** Nom de chaque langue dans sa propre langue. */
export const LOCALE_NAMES: Readonly<Record<Locale, string>> = { fr: "Français", en: "English" };

/** Locale Open Graph (`og:locale`). */
export const OG_LOCALE: Readonly<Record<Locale, string>> = { fr: "fr_FR", en: "en_GB" };

/** Cookie de préférence, posé par la bascule de langue, lu par le proxy. */
export const LOCALE_COOKIE = "lang";

/** Durée de vie du cookie de langue : un an, en secondes. */
export const LOCALE_COOKIE_MAX_AGE_S = 31_536_000;
