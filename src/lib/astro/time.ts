/** Heure locale « de l'horloge », lue dans une zone IANA (Intl). */
export interface LocalDateTime {
  year: number;
  /** 1 à 12. */
  month: number;
  day: number;
  hour: number;
  minute: number;
}

/** Un instant et le décalage de l'heure locale qui le désigne. */
export interface Offset {
  utcMs: number;
  /** Heure locale − UTC, en secondes (Paris l'été : +7200 ; temps moyen de Paris : +561). */
  offsetSeconds: number;
}

/**
 * Une heure locale désigne un instant, deux (heure répétée au retour à l'heure d'hiver : `earlier` est le premier
 * passage, à l'ancien décalage) ou aucun (heure sautée au passage à l'heure d'été).
 */
export type LocalToUtc =
  | ({ kind: "unique" } & Offset)
  | { kind: "ambiguous"; earlier: Offset; later: Offset }
  | { kind: "nonexistent"; offsetBeforeSeconds: number; offsetAfterSeconds: number };

const DAY_MS = 86_400_000;

/* Un formateur Intl coûte cher à construire : un par zone, gardé pour toute la session. */
const formatters = new Map<string, Intl.DateTimeFormat>();

/** Lève une RangeError si Intl ne connaît pas la zone. */
function formatterFor(zone: string): Intl.DateTimeFormat {
  const cached = formatters.get(zone);
  if (cached) return cached;
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: zone,
    hourCycle: "h23",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  formatters.set(zone, formatter);
  return formatter;
}

/** L'heure de l'horloge lue comme si elle était UTC, en millisecondes : la base des décalages. */
export function wallClockMs(l: LocalDateTime): number {
  return Date.UTC(l.year, l.month - 1, l.day, l.hour, l.minute);
}

/** Décalage (heure locale − UTC) en secondes dans la zone, à l'instant donné. */
function offsetSecondsAt(utcMs: number, zone: string): number {
  // Intl ne donne pas les millisecondes : on compare à l'instant ramené à la seconde.
  const wholeSecondMs = Math.floor(utcMs / 1000) * 1000;
  const fields = new Map<string, number>();
  for (const part of formatterFor(zone).formatToParts(wholeSecondMs)) {
    if (part.type !== "literal") fields.set(part.type, Number(part.value));
  }
  const field = (type: Intl.DateTimeFormatPartTypes) => {
    const value = fields.get(type);
    if (value === undefined || !Number.isInteger(value)) {
      throw new Error(`Intl n'a pas rendu le champ « ${type} » de l'heure locale (zone ${zone}).`);
    }
    return value;
  };
  const localMs = Date.UTC(
    field("year"),
    field("month") - 1,
    field("day"),
    field("hour"),
    field("minute"),
    field("second"),
  );
  return Math.round((localMs - wholeSecondMs) / 1000);
}

/** Vrai si Intl connaît la zone. */
export function isTimeZone(z: string): boolean {
  if (z.trim() === "") return false;
  try {
    formatterFor(z);
    return true;
  } catch {
    return false;
  }
}

/**
 * Instant(s) UTC que désigne une heure locale dans la zone : on essaie les décalages en vigueur un jour avant et un
 * jour après, et on garde ceux qui se confirment (même méthode que Temporal). Suppose au plus un changement d'heure
 * dans ces 48 heures. Lève une RangeError si la zone est inconnue.
 */
export function localToUtc(l: LocalDateTime, zone: string): LocalToUtc {
  const wallMs = wallClockMs(l);
  const offsetBeforeSeconds = offsetSecondsAt(wallMs - DAY_MS, zone);
  const offsetAfterSeconds = offsetSecondsAt(wallMs + DAY_MS, zone);
  const confirmed = [...new Set([offsetBeforeSeconds, offsetAfterSeconds])]
    .map((offsetSeconds): Offset => ({ utcMs: wallMs - offsetSeconds * 1000, offsetSeconds }))
    .filter(({ utcMs, offsetSeconds }) => offsetSecondsAt(utcMs, zone) === offsetSeconds)
    .sort((x, y) => x.utcMs - y.utcMs);
  if (confirmed.length === 0) return { kind: "nonexistent", offsetBeforeSeconds, offsetAfterSeconds };
  if (confirmed.length === 1) return { kind: "unique", ...confirmed[0] };
  return { kind: "ambiguous", earlier: confirmed[0], later: confirmed[1] };
}
