import { INTL_LOCALE, type Locale } from "@/i18n/locales";
import { CITIES, CITY_KEYS, type CityKey } from "@/lib/geo/cities";
import { CITY_STRINGS } from "./cities.strings";

/** Un groupe de la liste des villes (`<optgroup>`) : un pays, ses villes. */
export interface CityGroup {
  readonly country: string;
  readonly label: string;
  readonly cities: readonly CityKey[];
}

/** Nom affiché d'un pays dans la langue ; son code si la table l'ignore (le test garde la table complète). */
export function countryName(code: string, locale: Locale): string {
  return Object.entries(CITY_STRINGS[locale].countries).find(([key]) => key === code)?.[1] ?? code;
}

/** Les pays dans l'ordre de `CITY_KEYS` (rangées par région, la France d'abord), les villes de chacun par nom. */
function groupsIn(locale: Locale): readonly CityGroup[] {
  const names = CITY_STRINGS[locale].cities;
  const byName = (a: CityKey, b: CityKey) => names[a].localeCompare(names[b], INTL_LOCALE[locale]);
  return [...new Set(CITY_KEYS.map((key) => CITIES[key].country))].map((country) => ({
    country,
    label: countryName(country, locale),
    cities: CITY_KEYS.filter((key) => CITIES[key].country === country).sort(byName),
  }));
}

/** Groupes de la liste des villes, dans chaque langue (noms et ordre alphabétique de la langue). */
export const CITY_GROUPS: Readonly<Record<Locale, readonly CityGroup[]>> = { fr: groupsIn("fr"), en: groupsIn("en") };

let zones: readonly string[] | null = null;

/** Fuseaux proposés à la saisie : ceux que connaît Intl ; à défaut (navigateur ancien), ceux des villes du formulaire. */
export function timeZoneSuggestions(): readonly string[] {
  zones ??=
    typeof Intl.supportedValuesOf === "function"
      ? Intl.supportedValuesOf("timeZone")
      : [...new Set(CITY_KEYS.map((key) => CITIES[key].zone))].sort();
  return zones;
}
