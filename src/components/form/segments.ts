/**
 * Logique pure des champs de date et d'heure en segments : saisie des chiffres dans un segment, pas des flèches,
 * passage des segments aux valeurs que garde le formulaire ("YYYY-MM-DD", "HH:MM" sur 24 heures), et mise en page
 * d'un mois pour le calendrier. Rien du DOM ici : chaque règle est testée seule.
 */

export type SegmentKind = "day" | "month" | "year" | "hour24" | "hour12" | "minute";

interface SegmentRule {
  /** Nombre de chiffres du segment complet. */
  length: number;
  min: number;
  max: number;
  /** Un premier chiffre plus grand ne peut pas commencer un nombre à deux chiffres : il est complété ("4" devient "04") et le champ passe au suivant. */
  firstMax: number;
}

const RULES: Readonly<Record<SegmentKind, SegmentRule>> = {
  day: { length: 2, min: 1, max: 31, firstMax: 3 },
  month: { length: 2, min: 1, max: 12, firstMax: 1 },
  year: { length: 4, min: 1, max: 9999, firstMax: 9 },
  hour24: { length: 2, min: 0, max: 23, firstMax: 2 },
  hour12: { length: 2, min: 1, max: 12, firstMax: 1 },
  minute: { length: 2, min: 0, max: 59, firstMax: 5 },
};

export const segmentLength = (kind: SegmentKind) => RULES[kind].length;
export const segmentMin = (kind: SegmentKind) => RULES[kind].min;
export const segmentMax = (kind: SegmentKind) => RULES[kind].max;

export interface Accepted {
  value: string;
  /** Segment complet : le focus passe au suivant. */
  advance: boolean;
}

/**
 * Ce que devient un segment après une frappe. `typed` est le texte brut du champ (tout sauf les chiffres est ignoré).
 * Renvoie null quand le chiffre ne peut pas appartenir au segment (« 35 » pour un jour) : le champ garde sa valeur.
 */
export function acceptDigits(kind: SegmentKind, typed: string): Accepted | null {
  const rule = RULES[kind];
  const digits = typed.replace(/\D/g, "");
  if (digits === "") return { value: "", advance: false };
  if (digits.length > rule.length) return null;
  if (digits.length < rule.length) {
    if (rule.length === 2 && Number(digits) > rule.firstMax) return { value: `0${digits}`, advance: true };
    return { value: digits, advance: false };
  }
  const n = Number(digits);
  if (kind !== "year" && (n < rule.min || n > rule.max)) return null;
  return { value: digits, advance: true };
}

/** Valeur affichée quand on quitte le segment : deux chiffres ("7" devient "07") ; un "0" seul, hors de la plage, est effacé. */
export function padSegment(kind: SegmentKind, value: string): string {
  if (value === "" || kind === "year") return value;
  if (Number(value) < RULES[kind].min) return "";
  return value.padStart(2, "0");
}

/**
 * Un cran de flèche, qui boucle dans la plage du segment. Un segment vide part de `start` (l'année en cours pour
 * l'année), sinon du minimum (vers le haut) ou du maximum (vers le bas). `max` remplace le maximum du segment : le
 * nombre de jours du mois choisi.
 */
export function stepSegment(kind: SegmentKind, value: string, delta: 1 | -1, start?: number, max?: number): string {
  const rule = RULES[kind];
  const top = max ?? rule.max;
  const text = (n: number) => (kind === "year" ? String(n) : String(n).padStart(2, "0"));
  if (value === "") return text(start ?? (delta === 1 ? rule.min : top));
  const span = top - rule.min + 1;
  const next = ((((Number(value) + delta - rule.min) % span) + span) % span) + rule.min;
  return text(next);
}

/* ---------- Dates ---------- */

export interface DateParts {
  day: string;
  month: string;
  year: string;
}

export const EMPTY_DATE: DateParts = { day: "", month: "", year: "" };

/** Segments d'une valeur écrite par `joinDate` (complète "1990-07-14" ou partielle "1990-7-"). */
export function splitDate(value: string): DateParts {
  const [year = "", month = "", day = ""] = value.split("-");
  return { day, month, year };
}

/**
 * La valeur que garde le formulaire : vide si tous les segments le sont, "YYYY-MM-DD" s'ils sont complets, sinon les
 * segments bruts ("1990--14"), que le formulaire refuse : une date à moitié tapée n'est jamais lue comme une autre.
 */
export function joinDate(parts: DateParts): string {
  const { day, month, year } = parts;
  if (day === "" && month === "" && year === "") return "";
  const complete = year.length === 4 && month !== "" && Number(month) >= 1 && day !== "" && Number(day) >= 1;
  return complete ? `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}` : `${year}-${month}-${day}`;
}

/** Nombre de jours d'un mois du calendrier grégorien (proleptique). */
export function daysInMonth(year: number, month: number): number {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

/** Jour de la semaine, 0 pour dimanche. */
export function weekday(year: number, month: number, day: number): number {
  const date = new Date(Date.UTC(2000, month - 1, day));
  date.setUTCFullYear(year);
  return date.getUTCDay();
}

/** Le mois en semaines de sept cases (null hors du mois), la semaine commençant le lundi (`weekStart` 1) ou le dimanche (0). */
export function monthGrid(year: number, month: number, weekStart: 0 | 1): (number | null)[][] {
  const lead = (weekday(year, month, 1) - weekStart + 7) % 7;
  const cells: (number | null)[] = [...Array<null>(lead).fill(null)];
  for (let day = 1; day <= daysInMonth(year, month); day++) cells.push(day);
  while (cells.length % 7 !== 0) cells.push(null);
  const weeks: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  return weeks;
}

export interface CalendarDay {
  year: number;
  month: number;
  day: number;
}

/** Un jour déplacé de quelques jours, ou de quelques mois (même quantième si le mois l'a, sinon son dernier jour). */
export function moveDay(from: CalendarDay, by: { days?: number; months?: number }): CalendarDay {
  if (by.months !== undefined) {
    const index = from.year * 12 + (from.month - 1) + by.months;
    const year = Math.floor(index / 12);
    const month = (index % 12) + 1;
    return { year, month, day: Math.min(from.day, daysInMonth(year, month)) };
  }
  const date = new Date(Date.UTC(2000, from.month - 1, from.day));
  date.setUTCFullYear(from.year);
  date.setUTCDate(date.getUTCDate() + (by.days ?? 0));
  return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate() };
}

/** Le jour que nomme une date complète et réelle, sinon null. */
export function dayOf(value: string): CalendarDay | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const [year, month, day] = [Number(match[1]), Number(match[2]), Number(match[3])];
  if (month < 1 || month > 12 || day < 1 || day > daysInMonth(year, month)) return null;
  return { year, month, day };
}

export const isoDay = (d: CalendarDay) =>
  `${String(d.year).padStart(4, "0")}-${String(d.month).padStart(2, "0")}-${String(d.day).padStart(2, "0")}`;

/* ---------- Times ---------- */

export type Period = "am" | "pm" | "";

export interface TimeParts {
  hour: string;
  minute: string;
  /** Seulement sur une horloge de 12 heures. */
  period: Period;
}

export const EMPTY_TIME: TimeParts = { hour: "", minute: "", period: "" };

/** Heure sur 24 heures d'après une heure sur 12 : 12 AM vaut 0, 12 PM vaut 12. */
export const to24 = (hour12: number, period: "am" | "pm") => (hour12 % 12) + (period === "pm" ? 12 : 0);

/** Heure sur 12 heures et période (AM, PM) d'après une heure sur 24. */
export const to12 = (hour24: number): { hour: number; period: "am" | "pm" } => ({
  hour: hour24 % 12 === 0 ? 12 : hour24 % 12,
  period: hour24 < 12 ? "am" : "pm",
});

/** Segments d'une valeur écrite par `joinTime` ("14:30", ou partielle "7:?" et "07:30?"). */
export function splitTime(value: string, h12: boolean): TimeParts {
  const complete = /^(\d{2}):(\d{2})$/.exec(value);
  if (complete) {
    const hour = Number(complete[1]);
    if (!h12) return { hour: complete[1], minute: complete[2], period: "" };
    const twelve = to12(hour);
    return { hour: String(twelve.hour).padStart(2, "0"), minute: complete[2], period: twelve.period };
  }
  const partial = /^(\d*):(\d*)(am|pm)?\??$/.exec(value);
  if (!partial) return EMPTY_TIME;
  return { hour: partial[1], minute: partial[2], period: h12 ? ((partial[3] ?? "") as Period) : "" };
}

/**
 * La valeur que garde le formulaire : toujours "HH:MM" sur 24 heures une fois complète, vide si tous les segments le
 * sont, sinon une valeur partielle que le formulaire refuse ("7:?", ou "07:30?" tant que AM ou PM manque).
 */
export function joinTime(parts: TimeParts, h12: boolean): string {
  const { hour, minute, period } = parts;
  if (hour === "" && minute === "" && period === "") return "";
  const hourOk = hour !== "" && (!h12 || Number(hour) >= 1);
  if (hourOk && minute !== "" && (!h12 || period !== "")) {
    const h = h12 ? to24(Number(hour), period as "am" | "pm") : Number(hour);
    return `${String(h).padStart(2, "0")}:${minute.padStart(2, "0")}`;
  }
  return `${hour}:${minute}${period}?`;
}

/* ---------- Collage ---------- */

/**
 * Répartit un texte collé ou inséré d'un bloc sur des segments, à partir du premier : groupes séparés (« 14/07/1990 »,
 * « 14:30 ») un par segment, sinon chiffres à la suite (« 14071990 »). Une date ISO (« 1990-07-14 ») est remise dans
 * l'ordre jour, mois, année. Renvoie les valeurs acceptées, dans l'ordre, et s'arrête au premier segment refusé.
 */
export function fillSegments(kinds: readonly SegmentKind[], text: string): string[] {
  let groups = text.split(/\D+/).filter((group) => group !== "");
  const isoDate = kinds[0] === "day" && kinds[1] === "month" && kinds[2] === "year" && groups.length === 3 && groups[0].length === 4;
  if (isoDate) groups = [groups[2], groups[1], groups[0]];
  const values: string[] = [];
  if (groups.length > 1) {
    for (const [i, kind] of kinds.entries()) {
      if (groups[i] === undefined) break;
      const accepted = acceptDigits(kind, groups[i]);
      if (accepted === null) break;
      values.push(kind === "year" ? accepted.value : padSegment(kind, accepted.value));
    }
    return values;
  }
  let rest = groups[0] ?? "";
  for (const kind of kinds) {
    if (rest === "") break;
    const rule = RULES[kind];
    const take = rule.length === 2 && Number(rest[0]) > rule.firstMax ? 1 : rule.length;
    const accepted = acceptDigits(kind, rest.slice(0, take));
    if (accepted === null) break;
    values.push(accepted.value);
    rest = rest.slice(take);
  }
  return values;
}

/**
 * Heure lue dans un texte collé, quelle que soit sa convention : « 14:30 », « 1430 », « 14h30 », « 2:30 PM »,
 * « 2.30pm ». Renvoie l'heure sur 24 heures, ou null si le texte n'est pas une heure.
 */
export function parseTimeText(text: string): { hour: number; minute: number } | null {
  const match = /^\s*(\d{1,2})\s*[:h.]?\s*(\d{2})\s*(?:([ap])\.?\s*m?\.?)?\s*$/i.exec(text);
  if (!match) return null;
  const minute = Number(match[2]);
  let hour = Number(match[1]);
  if (minute > 59) return null;
  if (match[3]) {
    if (hour < 1 || hour > 12) return null;
    hour = to24(hour, match[3].toLowerCase() === "a" ? "am" : "pm");
  } else if (hour > 23) return null;
  return { hour, minute };
}
