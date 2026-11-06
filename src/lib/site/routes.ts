import type { AspectKey, HouseNumber, PlanetKey, SignKey } from "@/lib/astro/keys";
import { PLANET_KEYS, SIGN_KEYS } from "@/lib/astro/keys";

/** Adresses des pages du site (segments français). */
export const SECTION_PATHS = {
  home: "/",
  signs: "/signes",
  planets: "/planetes",
  houses: "/maisons",
  aspects: "/aspects",
  natal: "/theme-natal",
  history: "/histoire",
  science: "/science",
  lexicon: "/lexique",
  about: "/a-propos",
} as const;
export type SectionKey = keyof typeof SECTION_PATHS;

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

export function signPath(sign: SignKey): string {
  return `${SECTION_PATHS.signs}/${SIGN_SLUGS[sign]}`;
}

export function planetPath(planet: PlanetKey): string {
  return `${SECTION_PATHS.planets}/${PLANET_SLUGS[planet]}`;
}

export function houseAnchor(house: HouseNumber): string {
  return `maison-${house}`;
}

export function housePath(house: HouseNumber): string {
  return `${SECTION_PATHS.houses}#${houseAnchor(house)}`;
}

export function aspectPath(aspect: AspectKey): string {
  return `${SECTION_PATHS.aspects}#${ASPECT_ANCHORS[aspect]}`;
}

export function lexiconPath(entryId: string): string {
  return `${SECTION_PATHS.lexicon}#${entryId}`;
}

export function signFromSlug(slug: string): SignKey | null {
  return SIGN_KEYS.find((key) => SIGN_SLUGS[key] === slug) ?? null;
}

export function planetFromSlug(slug: string): PlanetKey | null {
  return PLANET_KEYS.find((key) => PLANET_SLUGS[key] === slug) ?? null;
}
