import { CITIES, CITY_KEYS, type CityKey } from "@/lib/geo/cities";
import { CITY_STRINGS } from "./cities.strings";

/** Un groupe de la liste des villes (`<optgroup>`) : un pays, ses villes. */
export interface CityGroup {
  readonly country: string;
  readonly label: string;
  readonly cities: readonly CityKey[];
}

/** Nom affiché d'un pays ; son code si la table l'ignore (le test garde la table complète). */
export function countryName(code: string): string {
  return Object.entries(CITY_STRINGS.countries).find(([key]) => key === code)?.[1] ?? code;
}

const byName = (a: CityKey, b: CityKey) => CITY_STRINGS.cities[a].localeCompare(CITY_STRINGS.cities[b], "fr");

/** Les pays dans l'ordre de `CITY_KEYS` (rangées par région, la France d'abord), les villes de chacun par nom. */
export const CITY_GROUPS: readonly CityGroup[] = [...new Set(CITY_KEYS.map((key) => CITIES[key].country))].map(
  (country) => ({
    country,
    label: countryName(country),
    cities: CITY_KEYS.filter((key) => CITIES[key].country === country).sort(byName),
  }),
);

let zones: readonly string[] | null = null;

/** Fuseaux proposés à la saisie : ceux que connaît Intl ; à défaut (navigateur ancien), ceux des villes du formulaire. */
export function timeZoneSuggestions(): readonly string[] {
  zones ??=
    typeof Intl.supportedValuesOf === "function"
      ? Intl.supportedValuesOf("timeZone")
      : [...new Set(CITY_KEYS.map((key) => CITIES[key].zone))].sort();
  return zones;
}
