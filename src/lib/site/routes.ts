import { isLocale, type Locale } from "@/i18n/locales";
import type { AspectKey, HouseNumber, PlanetKey, SignKey } from "@/lib/astro/keys";
import { PLANET_KEYS, SIGN_KEYS } from "@/lib/astro/keys";

/**
 * Adresses des pages du site. Chaque page existe dans chaque langue, sous `/{langue}` ; les segments et les ancres
 * sont les mêmes dans les deux langues (« /fr/signes/belier », « /en/signes/belier ») : changer de langue ne remplace
 * que le premier segment, et une ancre (« #maison-4 ») reste valable.
 */
export const SECTION_SEGMENTS = {
  home: "",
  signs: "signes",
  planets: "planetes",
  houses: "maisons",
  aspects: "aspects",
  natal: "theme-natal",
  history: "histoire",
  science: "science",
  lexicon: "lexique",
  about: "a-propos",
} as const;
export type SectionKey = keyof typeof SECTION_SEGMENTS;

function isSectionKey(key: string): key is SectionKey {
  return Object.hasOwn(SECTION_SEGMENTS, key);
}

/** Les pages de section, dans l'ordre de `SECTION_SEGMENTS`. */
export const SECTION_KEYS: readonly SectionKey[] = Object.keys(SECTION_SEGMENTS).filter(isSectionKey);

/** Chemin d'une page dans une langue : « /fr », « /en/signes/belier », « /fr/maisons#maison-4 ». */
export type SitePath = `/${Locale}` | `/${Locale}/${string}` | `/${Locale}#${string}`;

export const SIGN_SLUGS = {
  aries: "belier",
  taurus: "taureau",
  gemini: "gemeaux",
  cancer: "cancer",
  leo: "lion",
  virgo: "vierge",
  libra: "balance",
  scorpio: "scorpion",
  sagittarius: "sagittaire",
  capricorn: "capricorne",
  aquarius: "verseau",
  pisces: "poissons",
} as const satisfies Record<SignKey, string>;

export const PLANET_SLUGS = {
  sun: "soleil",
  moon: "lune",
  mercury: "mercure",
  venus: "venus",
  mars: "mars",
  jupiter: "jupiter",
  saturn: "saturne",
  uranus: "uranus",
  neptune: "neptune",
  pluto: "pluton",
} as const satisfies Record<PlanetKey, string>;

/** Ancres des aspects dans la page Aspects. */
export const ASPECT_ANCHORS = {
  conjunction: "conjonction",
  sextile: "sextile",
  square: "carre",
  trine: "trigone",
  opposition: "opposition",
  semiSextile: "semi-sextile",
  semiSquare: "semi-carre",
  quintile: "quintile",
  sesquiquadrate: "sesqui-carre",
  biquintile: "biquintile",
  quincunx: "quinconce",
} as const satisfies Record<AspectKey, string>;

/** « /fr », « /en/signes », « /fr/theme-natal ». */
export function sectionPath(section: SectionKey, locale: Locale): SitePath {
  const segment = SECTION_SEGMENTS[section];
  return segment === "" ? `/${locale}` : `/${locale}/${segment}`;
}

export function signPath(sign: SignKey, locale: Locale): SitePath {
  return `${sectionPath("signs", locale)}/${SIGN_SLUGS[sign]}` as SitePath;
}

export function planetPath(planet: PlanetKey, locale: Locale): SitePath {
  return `${sectionPath("planets", locale)}/${PLANET_SLUGS[planet]}` as SitePath;
}

export function houseAnchor(house: HouseNumber): string {
  return `maison-${house}`;
}

export function housePath(house: HouseNumber, locale: Locale): SitePath {
  return `${sectionPath("houses", locale)}#${houseAnchor(house)}` as SitePath;
}

export function aspectPath(aspect: AspectKey, locale: Locale): SitePath {
  return `${sectionPath("aspects", locale)}#${ASPECT_ANCHORS[aspect]}` as SitePath;
}

export function lexiconPath(entryId: string, locale: Locale): SitePath {
  return `${sectionPath("lexicon", locale)}#${entryId}` as SitePath;
}

export function signFromSlug(slug: string): SignKey | null {
  return SIGN_KEYS.find((key) => SIGN_SLUGS[key] === slug) ?? null;
}

export function planetFromSlug(slug: string): PlanetKey | null {
  return PLANET_KEYS.find((key) => PLANET_SLUGS[key] === slug) ?? null;
}

/**
 * Chemin sans langue, que le proxy négocie (x-default) : « /fr/signes/belier » → « /signes/belier », « /en » → « / ».
 * Un chemin sans langue en tête est rendu tel quel.
 */
export function negotiatedPath(path: string): string {
  const [, first, ...rest] = path.split("/");
  if (!isLocale(first)) return path;
  return `/${rest.join("/")}`;
}

/**
 * Même chemin dans une autre langue : remplace le premier segment s'il est une langue, sinon préfixe la langue.
 * « /fr/signes/belier » → « /en/signes/belier » ; « /en » → « /fr ».
 */
export function switchLocale(pathname: string, locale: Locale): SitePath {
  const [, first] = pathname.split("/");
  const rest = isLocale(first) ? pathname.slice(first.length + 1) : pathname === "/" ? "" : pathname;
  return `/${locale}${rest}` as SitePath;
}
