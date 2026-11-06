import { formatMonthDay } from "@/i18n/dates";
import { type LocalDateTime, localToUtc, wallClockMs } from "@/lib/astro/time";
import type { ClockJump } from "./natal.strings";

/*
 * Mise en forme du calculateur : décalages, heures, dates, nombres. Que des chiffres et des signes ; les mots vivent
 * dans `natal.strings.ts`.
 */

const MINUS = "−";
const MINUTE_MS = 60_000;
const DECIMAL = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 4 });

const pad = (n: number) => String(n).padStart(2, "0");

function offsetParts(seconds: number) {
  const abs = Math.abs(seconds);
  return { sign: seconds < 0 ? MINUS : "+", h: Math.floor(abs / 3600), m: Math.floor((abs % 3600) / 60), s: abs % 60 };
}

/** « +02:00 », « −03:30 », « +00:09:21 » : le décalage tel qu'il se saisit dans le réglage avancé. */
export function clockOffset(seconds: number): string {
  const { sign, h, m, s } = offsetParts(seconds);
  return `${sign}${pad(h)}:${pad(m)}${s ? `:${pad(s)}` : ""}`;
}

/** « +2 », « +5:30 », « −3 », « +0:09:21 » : la forme courte, après « UTC ». */
export function shortOffset(seconds: number): string {
  const { sign, h, m, s } = offsetParts(seconds);
  return `${sign}${h}${m || s ? `:${pad(m)}` : ""}${s ? `:${pad(s)}` : ""}`;
}

/** « 14:30 ». */
export function clockTime({ hour, minute }: { hour: number; minute: number }): string {
  return `${pad(hour)}:${pad(minute)}`;
}

/** « 3 juillet 2024 », « 1er mai 1990 ». */
export function longDate(date: { year: number; month: number; day: number }): string {
  return `${formatMonthDay(date)} ${date.year}`;
}

/** « 48,85 » : un nombre à la française, quatre décimales au plus. */
export function decimal(n: number): string {
  return DECIMAL.format(n);
}

/** Champs d'une heure de l'horloge lue comme si elle était UTC : l'inverse de `wallClockMs`. */
function fromWallClock(ms: number): LocalDateTime {
  const d = new Date(ms);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
  };
}

/** Date et heure UTC d'un instant : « 3 juillet 2024 » et « 12:30 ». */
export function utcDateTime(utcMs: number): { date: string; time: string } {
  const at = fromWallClock(utcMs);
  return { date: longDate(at), time: clockTime(at) };
}

/** Au-delà, un saut n'est plus un changement d'heure mais de fuseau (Apia a sauté un jour entier en 2011). */
const MAX_JUMP_SECONDS = 3 * 3600;

/**
 * Heure sautée (passage à l'heure d'été) : l'heure de l'horloge où le saut commence, celle où il mène, l'heure saisie et
 * cette heure décalée du saut (« 02:00 », « 03:00 », « 02:30 », « 03:30 »). On recule minute par minute depuis l'heure
 * saisie tant qu'elle n'existe pas, au plus de la durée du saut (180 pas). null pour un saut de plus de trois heures ou
 * qui ne compte pas un nombre entier de minutes (décalages anciens, à la seconde).
 */
export function clockJump(
  local: LocalDateTime,
  zone: string,
  offsetBeforeSeconds: number,
  offsetAfterSeconds: number,
): ClockJump | null {
  const gapSeconds = offsetAfterSeconds - offsetBeforeSeconds;
  if (gapSeconds <= 0 || gapSeconds > MAX_JUMP_SECONDS || gapSeconds % 60 !== 0) return null;
  const typed = wallClockMs(local);
  let start = typed;
  for (let step = 0; step < gapSeconds / 60; step++) {
    const previous = start - MINUTE_MS;
    if (localToUtc(fromWallClock(previous), zone).kind !== "nonexistent") break;
    start = previous;
  }
  const at = (ms: number) => clockTime(fromWallClock(ms));
  return { from: at(start), to: at(start + gapSeconds * 1000), time: at(typed), shifted: at(typed + gapSeconds * 1000) };
}

/** Décalage d'un instant (heure locale − UTC), en secondes, dans la zone. */
function offsetOn(zone: string, year: number, month: number): number | null {
  const resolved = localToUtc({ year, month, day: 15, hour: 12, minute: 0 }, zone);
  return resolved.kind === "unique" ? resolved.offsetSeconds : null;
}

/**
 * Décalage de l'heure d'hiver (heure normale) de la zone, l'année donnée : le plus petit de janvier et de juillet, pour
 * valoir dans les deux hémisphères. null si la zone ne le dit pas.
 */
export function standardOffset(zone: string, year: number): number | null {
  const january = offsetOn(zone, year, 1);
  const july = offsetOn(zone, year, 7);
  return january === null || july === null ? null : Math.min(january, july);
}

const NUMBER = String.raw`[+\-−]?\d+(?:[.,]\d+)?`;
/** Deux nombres séparés par une virgule suivie d'une espace, un point-virgule ou des espaces : « 48.1173, -1.6778 ». */
const PAIR = new RegExp(`^\\s*(${NUMBER})\\s*(?:;|,\\s|\\s)\\s*(${NUMBER})\\s*$`);

/** Couple latitude, longitude collé d'une carte en ligne ; null pour un nombre seul (« 48,85 »). */
export function coordinatePair(text: string): readonly [string, string] | null {
  const match = PAIR.exec(text);
  return match ? [match[1], match[2]] : null;
}

/** Nombre décimal saisi (virgule ou point, moins U+2212) ; null s'il n'en est pas un. */
export function readDecimal(text: string): number | null {
  const clean = text.trim().replaceAll("−", "-");
  if (!/^[+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+)$/.test(clean)) return null;
  return Number(clean.replace(",", "."));
}
