import type { Locale } from "@/i18n/locales";
import { SIGN_NAMES } from "@/i18n/names";
import type { Longitude } from "@/lib/astro/keys";
import { degreeInSign, signOf } from "@/lib/astro/zodiac";

const NBSP = "\u00a0";
const PRIME = "\u2032";
/**
 * Garde d'arrondi avant la troncature, en degrés : 102,35° vaut 12,349999999999994° dans le Cancer en double précision,
 * que la troncature seule écrirait 12°20′. 1e-9° (3,6 µ″) ne change aucune minute réelle.
 */
const ROUNDING_GUARD_DEG = 1e-9;
/** 29°59′ : la dernière minute d'un signe ; la garde ne doit jamais faire écrire 30°00′. */
const LAST_MINUTE_OF_SIGN = 30 * 60 - 1;

function degreesAndMinutes(l: Longitude): string {
  const totalMinutes = Math.min(Math.floor((degreeInSign(l) + ROUNDING_GUARD_DEG) * 60), LAST_MINUTE_OF_SIGN);
  const minutes = totalMinutes % 60;
  return `${(totalMinutes - minutes) / 60}°${String(minutes).padStart(2, "0")}${PRIME}`;
}

/**
 * « 12°34′ Bélier » : degré dans le signe, minutes TRONQUÉES sur deux chiffres (29,9999 → « 29°59′ Bélier », jamais
 * « 30°00′ »), prime U+2032, espace insécable (U+00A0) avant le nom du signe, pour que la ligne ne s'y coupe pas.
 * Le nom du signe suit la langue : « 12°34′ Aries » en anglais.
 */
export function formatPosition(l: Longitude, locale: Locale): string {
  return `${degreesAndMinutes(l)}${NBSP}${SIGN_NAMES[locale][signOf(l)].name}`;
}

/** « 12°34′ » : la même chose, sans le signe. */
export function formatDegreeInSign(l: Longitude): string {
  return degreesAndMinutes(l);
}
