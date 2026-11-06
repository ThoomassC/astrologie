import { CITIES, type CityKey, isCityKey } from "@/lib/geo/cities";
import { type HouseSystemKey, isHouseSystemKey } from "./keys";
import { isTimeZone, type LocalDateTime, localToUtc, type Offset, wallClockMs } from "./time";

/** Valeurs brutes du formulaire, telles que saisies. */
export interface BirthFormValues {
  /** « AAAA-MM-JJ ». */
  date: string;
  /** « HH:MM » ; ignorée si `timeUnknown`. */
  time: string;
  timeUnknown: boolean;
  place: { kind: "city"; cityKey: string } | { kind: "manual"; latitude: string; longitude: string; timeZone: string };
  /**
   * "" (décalage tiré de la zone), « +01:00 », « -03:30 » ou « +00:09:21 » ; le signe moins U+2212 vaut « - ».
   * Saisi, il remplace la zone : ni heure inexistante, ni heure ambiguë.
   */
  utcOffsetOverride: string;
  /** Choix de l'utilisateur quand l'heure locale se répète (retour à l'heure d'hiver). */
  ambiguity: "earlier" | "later" | null;
  houseSystem: string;
}

/* La marque existe à l'exécution : seule cette fonction peut écrire la propriété, sans conversion de type. */
const validBirth: unique symbol = Symbol("validBirth");

/** Entrée validée : ne s'obtient que par `parseBirthInput`. */
export interface ValidBirthInput {
  readonly [validBirth]: true;
  /** 12:00 si l'heure est inconnue. */
  readonly local: LocalDateTime;
  readonly timeKnown: boolean;
  readonly utcMs: number;
  readonly offsetSeconds: number;
  readonly offsetSource: "zone" | "manual";
  readonly latitude: number;
  readonly longitude: number;
  /** null : lieu saisi à la main, sans zone, avec un décalage saisi. */
  readonly timeZone: string | null;
  readonly cityKey: CityKey | null;
  readonly houseSystem: HouseSystemKey;
  /**
   * Date avant 1970 et zone « linked », décalage tiré de la zone : l'heure légale de la ville peut différer de celle
   * de la base. Toujours faux pour un lieu saisi à la main (on ignore si sa zone est un lien) ou un décalage saisi.
   */
  readonly zoneHistoryUncertain: boolean;
}

/** Erreur d'un champ du formulaire, à traduire par l'interface. */
export type BirthInputError =
  /** Dates acceptées : 1800-01-01 à 2100-12-31. « nonexistent » : heure inconnue un jour sauté par le fuseau. */
  | { field: "date"; code: "required" | "invalid" | "out-of-range" | "nonexistent" }
  | { field: "time"; code: "required" | "invalid" }
  | { field: "time"; code: "nonexistent"; offsetBeforeSeconds: number; offsetAfterSeconds: number }
  /** Levée quand `ambiguity` est fourni. */
  | { field: "time"; code: "ambiguous"; earlier: Offset; later: Offset }
  | { field: "city"; code: "required" | "unknown" }
  /** Virgule ou point décimal ; |φ| ≤ 89,9 ; |λ| ≤ 180. */
  | { field: "latitude" | "longitude"; code: "required" | "invalid" | "out-of-range" }
  | { field: "timeZone"; code: "required" | "unknown" }
  /** |décalage| ≤ 14 h. */
  | { field: "utcOffset"; code: "invalid" | "out-of-range" }
  | { field: "houseSystem"; code: "unknown" };

/** Résultat d'un parseur : la valeur, ou au moins une erreur. */
export type ParseResult<T, E> = { ok: true; value: T } | { ok: false; errors: readonly [E, ...E[]] };

/** Erreurs consignées au fil de la lecture : chaque lecteur rend sa valeur, ou null après avoir consigné. */
type Errors = BirthInputError[];

const MIN_DATE = 18000101;
const MAX_DATE = 21001231;
const MAX_LATITUDE = 89.9;
const MAX_LONGITUDE = 180;
const MAX_OFFSET_SECONDS = 14 * 3600;
/** Heure retenue quand l'heure de naissance est inconnue. */
const UNKNOWN_TIME: { hour: number; minute: number } = { hour: 12, minute: 0 };
/** Avant cette année, une zone « linked » ne garantit que l'histoire d'une autre ville. */
const RELIABLE_LINK_HISTORY_YEAR = 1970;

const DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;
const TIME_PATTERN = /^(\d{1,2}):(\d{2})$/;
const DECIMAL_PATTERN = /^[+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+)$/;
const OFFSET_PATTERN = /^([+-])(\d{1,2}):(\d{2})(?::(\d{2}))?$/;

/** Le signe moins typographique (U+2212) vaut le trait d'union. */
const withAsciiMinus = (text: string) => text.trim().replaceAll("\u2212", "-");

const isLeapYear = (year: number) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] as const;
const daysInMonth = (year: number, month: number) =>
  month === 2 && isLeapYear(year) ? 29 : DAYS_IN_MONTH[month - 1];

function readDate(raw: string, errors: Errors): { year: number; month: number; day: number } | null {
  const text = raw.trim();
  if (text === "") return fail(errors, { field: "date", code: "required" });
  const match = DATE_PATTERN.exec(text);
  if (!match) return fail(errors, { field: "date", code: "invalid" });
  const [year, month, day] = [Number(match[1]), Number(match[2]), Number(match[3])];
  if (month < 1 || month > 12 || day < 1 || day > daysInMonth(year, month)) {
    return fail(errors, { field: "date", code: "invalid" });
  }
  const stamp = year * 10_000 + month * 100 + day;
  if (stamp < MIN_DATE || stamp > MAX_DATE) return fail(errors, { field: "date", code: "out-of-range" });
  return { year, month, day };
}

function readTime(raw: string, errors: Errors): { hour: number; minute: number } | null {
  const text = raw.trim();
  if (text === "") return fail(errors, { field: "time", code: "required" });
  const match = TIME_PATTERN.exec(text);
  if (!match) return fail(errors, { field: "time", code: "invalid" });
  const [hour, minute] = [Number(match[1]), Number(match[2])];
  if (hour > 23 || minute > 59) return fail(errors, { field: "time", code: "invalid" });
  return { hour, minute };
}

function readCoordinate(raw: string, field: "latitude" | "longitude", errors: Errors): number | null {
  const text = withAsciiMinus(raw);
  if (text === "") return fail(errors, { field, code: "required" });
  const value = DECIMAL_PATTERN.test(text) ? Number(text.replace(",", ".")) : Number.NaN;
  if (!Number.isFinite(value)) return fail(errors, { field, code: "invalid" });
  const limit = field === "latitude" ? MAX_LATITUDE : MAX_LONGITUDE;
  if (Math.abs(value) > limit) return fail(errors, { field, code: "out-of-range" });
  return value + 0;
}

/** Décalage saisi, en secondes ; undefined si le champ est vide (la zone décide), null si erreur. */
function readOffsetOverride(raw: string, errors: Errors): number | null | undefined {
  const text = withAsciiMinus(raw);
  if (text === "") return undefined;
  const match = OFFSET_PATTERN.exec(text);
  if (!match) return fail(errors, { field: "utcOffset", code: "invalid" });
  const [hours, minutes, seconds] = [Number(match[2]), Number(match[3]), Number(match[4] ?? 0)];
  if (minutes > 59 || seconds > 59) return fail(errors, { field: "utcOffset", code: "invalid" });
  const total = (match[1] === "-" ? -1 : 1) * (hours * 3600 + minutes * 60 + seconds);
  if (Math.abs(total) > MAX_OFFSET_SECONDS) return fail(errors, { field: "utcOffset", code: "out-of-range" });
  return total + 0;
}

interface Place {
  latitude: number;
  longitude: number;
  timeZone: string | null;
  cityKey: CityKey | null;
  zoneHistory: "own" | "linked" | null;
}

function readPlace(place: BirthFormValues["place"], offsetTyped: boolean, errors: Errors): Place | null {
  if (place.kind === "city") {
    const key = place.cityKey.trim();
    if (key === "") return fail(errors, { field: "city", code: "required" });
    if (!isCityKey(key)) return fail(errors, { field: "city", code: "unknown" });
    const city = CITIES[key];
    return {
      latitude: city.latitude,
      longitude: city.longitude,
      timeZone: city.zone,
      cityKey: key,
      zoneHistory: city.zoneHistory,
    };
  }
  const latitude = readCoordinate(place.latitude, "latitude", errors);
  const longitude = readCoordinate(place.longitude, "longitude", errors);
  const zone = readManualZone(place.timeZone, offsetTyped, errors);
  if (latitude === null || longitude === null || zone === null) return null;
  return { latitude, longitude, timeZone: zone.timeZone, cityKey: null, zoneHistory: null };
}

/** Zone d'un lieu saisi à la main : facultative si un décalage est saisi, mais une zone saisie doit être connue. */
function readManualZone(raw: string, offsetTyped: boolean, errors: Errors): { timeZone: string | null } | null {
  const zone = raw.trim();
  if (zone === "") return offsetTyped ? { timeZone: null } : fail(errors, { field: "timeZone", code: "required" });
  if (!isTimeZone(zone)) return fail(errors, { field: "timeZone", code: "unknown" });
  return { timeZone: zone };
}

function readHouseSystem(raw: string, errors: Errors): HouseSystemKey | null {
  const key = raw.trim();
  return isHouseSystemKey(key) ? key : fail(errors, { field: "houseSystem", code: "unknown" });
}

/** Consigne l'erreur et rend null, pour écrire `return fail(…)`. */
function fail(errors: Errors, error: BirthInputError): null {
  errors.push(error);
  return null;
}

/** L'instant UTC de l'heure locale : décalage saisi, sinon la zone (heure inexistante ou ambiguë à trancher). */
function resolveInstant(
  local: LocalDateTime,
  timeKnown: boolean,
  offsetOverride: number | undefined,
  timeZone: string | null,
  ambiguity: BirthFormValues["ambiguity"],
  errors: Errors,
): (Offset & { source: "zone" | "manual" }) | null {
  if (offsetOverride !== undefined) {
    return { utcMs: wallClockMs(local) - offsetOverride * 1000, offsetSeconds: offsetOverride, source: "manual" };
  }
  if (timeZone === null) {
    // readPlace exige une zone quand aucun décalage n'est saisi : ce cas trahit une erreur de programmation.
    throw new Error("Ni zone ni décalage : la saisie aurait dû être refusée.");
  }
  const resolved = localToUtc(local, timeZone);
  switch (resolved.kind) {
    case "unique":
      return { utcMs: resolved.utcMs, offsetSeconds: resolved.offsetSeconds, source: "zone" };
    case "ambiguous": {
      // Heure inconnue : midi est une convention, le premier passage convient.
      const choice = ambiguity ?? (timeKnown ? null : "earlier");
      if (choice === null) {
        return fail(errors, { field: "time", code: "ambiguous", earlier: resolved.earlier, later: resolved.later });
      }
      return { ...resolved[choice], source: "zone" };
    }
    case "nonexistent": {
      if (timeKnown) {
        return fail(errors, {
          field: "time",
          code: "nonexistent",
          offsetBeforeSeconds: resolved.offsetBeforeSeconds,
          offsetAfterSeconds: resolved.offsetAfterSeconds,
        });
      }
      // Heure inconnue (midi) tombée dans un saut : le jour entier a été sauté (Pacific/Apia, 30 décembre 2011),
      // c'est la date qui n'a pas existé en ce lieu.
      return fail(errors, { field: "date", code: "nonexistent" });
    }
  }
}

/** Frontière : chaînes du formulaire → entrée validée ; toutes les erreurs de champs indépendants à la fois. */
export function parseBirthInput(v: BirthFormValues): ParseResult<ValidBirthInput, BirthInputError> {
  const errors: Errors = [];
  const date = readDate(v.date, errors);
  const time = v.timeUnknown ? UNKNOWN_TIME : readTime(v.time, errors);
  const offsetOverride = readOffsetOverride(v.utcOffsetOverride, errors);
  const place = readPlace(v.place, v.utcOffsetOverride.trim() !== "", errors);
  const houseSystem = readHouseSystem(v.houseSystem, errors);

  // L'instant dépend de la date, de l'heure et du lieu : il ne se calcule que s'ils sont tous valides.
  if (date !== null && time !== null && place !== null && offsetOverride !== null) {
    const local: LocalDateTime = { ...date, hour: time.hour, minute: time.minute };
    const timeKnown = !v.timeUnknown;
    const instant = resolveInstant(local, timeKnown, offsetOverride, place.timeZone, v.ambiguity, errors);
    if (instant !== null && houseSystem !== null && errors.length === 0) {
      return {
        ok: true,
        value: {
          [validBirth]: true,
          local,
          timeKnown,
          utcMs: instant.utcMs,
          offsetSeconds: instant.offsetSeconds,
          offsetSource: instant.source,
          latitude: place.latitude,
          longitude: place.longitude,
          timeZone: place.timeZone,
          cityKey: place.cityKey,
          houseSystem,
          zoneHistoryUncertain:
            instant.source === "zone" && place.zoneHistory === "linked" && local.year < RELIABLE_LINK_HISTORY_YEAR,
        },
      };
    }
  }

  if (errors.length === 0) {
    throw new Error("Saisie refusée sans erreur consignée : erreur de programmation du parseur.");
  }
  return { ok: false, errors: [errors[0], ...errors.slice(1)] };
}
