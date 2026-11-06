import { type FormEvent, type MouseEvent, type Ref, useId, useRef, useState } from "react";
import { flushSync } from "react-dom";
import text from "@/components/text/text.module.css";
import { InfoTip } from "@/components/text/InfoTip";
import demo from "@/components/wheel/demo.module.css";
import { DateField } from "@/components/form/DateField";
import { TimeField } from "@/components/form/TimeField";
import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/locales";
import { HOUSE_SYSTEM_NAMES } from "@/i18n/names";
import {
  type BirthFormValues,
  type BirthInputError,
  parseBirthInput,
  type ValidBirthInput,
} from "@/lib/astro/birthInput";
import { HOUSE_SYSTEM_KEYS } from "@/lib/astro/keys";
import { isTimeZone } from "@/lib/astro/time";
import { CITIES, isCityKey } from "@/lib/geo/cities";
import { CITY_STRINGS } from "./cities.strings";
import { clockJump, coordinatePair, decimal, readDecimal, shortOffset, standardOffset } from "./format";
import { type ClockJump, type FixedBirthError, NATAL_STRINGS, type NatalStrings } from "./natal.strings";
import { CITY_GROUPS, timeZoneSuggestions } from "./places";
import styles from "./natal.module.css";

/** Valeur de la liste des lieux qui ouvre la saisie des coordonnées ; aucune clé de ville (kebab-case) ne l'égale. */
const OTHER_PLACE = "_autre";
const MIN_DATE = "1800-01-01";
const MAX_DATE = "2100-12-31";
const DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;
const TIME_PATTERN = /^(\d{1,2}):(\d{2})$/;
/** Écart, en degrés, entre la longitude et le méridien du fuseau, au-delà duquel un signe inversé est soupçonné. */
const SIGN_SUSPICION_DEG = 30;

/** Saisie en cours, telle que dans les champs. */
interface FormValues {
  date: string;
  time: string;
  timeUnknown: boolean;
  /** "" (rien de choisi), une clé de ville, ou OTHER_PLACE. */
  place: string;
  latitude: string;
  longitude: string;
  timeZone: string;
  utcOffset: string;
  houseSystem: string;
}

const EMPTY: FormValues = {
  date: "",
  time: "",
  timeUnknown: false,
  place: "",
  latitude: "",
  longitude: "",
  timeZone: "",
  utcOffset: "",
  houseSystem: "placidus",
};

type FieldKey = BirthInputError["field"];
/** Champs rangés dans les réglages avancés : une erreur les y ouvre. */
const ADVANCED_FIELDS: ReadonlySet<FieldKey> = new Set<FieldKey>(["houseSystem", "utcOffset"]);
const NO_FIELDS: ReadonlySet<FieldKey> = new Set();

function toBirthValues(v: FormValues, ambiguity: BirthFormValues["ambiguity"]): BirthFormValues {
  return {
    date: v.date,
    time: v.time,
    timeUnknown: v.timeUnknown,
    place:
      v.place === OTHER_PLACE
        ? { kind: "manual", latitude: v.latitude, longitude: v.longitude, timeZone: v.timeZone }
        : { kind: "city", cityKey: v.place },
    utcOffsetOverride: v.utcOffset,
    ambiguity,
    houseSystem: v.houseSystem,
  };
}

/** Zone du lieu saisi ; null si elle n'est pas (encore) connue. */
function zoneOf(v: FormValues): string | null {
  if (v.place === OTHER_PLACE) return isTimeZone(v.timeZone.trim()) ? v.timeZone.trim() : null;
  return isCityKey(v.place) ? CITIES[v.place].zone : null;
}

const yearOf = (v: FormValues) => {
  const match = DATE_PATTERN.exec(v.date.trim());
  return match ? Number(match[1]) : null;
};

/** Fuseau de cet appareil, pour pré-remplir un lieu saisi à la main. */
const deviceTimeZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

function fixedMessage(error: FixedBirthError, S: NatalStrings): string {
  switch (error.field) {
    case "date":
      return S.errors.date[error.code];
    case "time":
      return S.errors.time[error.code];
    case "city":
      return S.errors.city[error.code];
    case "latitude":
    case "longitude":
      return S.errors[error.field][error.code];
    case "timeZone":
      return S.errors.timeZone[error.code];
    case "utcOffset":
      return S.errors.utcOffset[error.code];
    case "houseSystem":
      return S.errors.houseSystem[error.code];
  }
}

/** Heures de l'horloge autour d'un saut, d'après la saisie (que le parseur vient d'accepter, au saut près). */
function jumpOf(v: FormValues, offsetBefore: number, offsetAfter: number, locale: Locale): ClockJump | null {
  const zone = zoneOf(v);
  const date = DATE_PATTERN.exec(v.date.trim());
  const time = TIME_PATTERN.exec(v.time.trim());
  if (zone === null || date === null || time === null) return null;
  const local = {
    year: Number(date[1]),
    month: Number(date[2]),
    day: Number(date[3]),
    hour: Number(time[1]),
    minute: Number(time[2]),
  };
  return clockJump(local, zone, offsetBefore, offsetAfter, locale);
}

function messageOf(error: BirthInputError, values: FormValues, S: NatalStrings, locale: Locale): string {
  if (error.field === "time") {
    if (error.code === "ambiguous") return S.ambiguous;
    if (error.code === "nonexistent") {
      return S.nonexistent(jumpOf(values, error.offsetBeforeSeconds, error.offsetAfterSeconds, locale));
    }
    return S.errors.time[error.code];
  }
  return fixedMessage(error, S);
}

/**
 * Longitude dont le signe semble inversé : loin du méridien du fuseau (heure d'hiver × 15°), alors que son opposée en
 * serait plus proche. Bordeaux (−0,58° pour un fuseau à +1 h) n'est pas suspecte ; Fort-de-France à +61,53° l'est.
 */
function longitudeSuspicion(v: FormValues, locale: Locale): { east: boolean; zone: string; suggestion: string } | null {
  const zone = zoneOf(v);
  const longitude = readDecimal(v.longitude);
  if (v.place !== OTHER_PLACE || zone === null || longitude === null || longitude === 0) return null;
  const offset = standardOffset(zone, yearOf(v) ?? new Date().getFullYear());
  if (offset === null || offset === 0) return null;
  const meridian = offset / 240;
  const gap = Math.abs(longitude - meridian);
  if (gap <= SIGN_SUSPICION_DEG || Math.abs(-longitude - meridian) >= gap) return null;
  const opposite = -longitude;
  return { east: longitude > 0, zone, suggestion: `${opposite < 0 ? "−" : ""}${decimal(Math.abs(opposite), locale)}` };
}

interface BirthFormProps {
  /** Saisie validée : le calcul peut partir. */
  onValid: (input: ValidBirthInput) => void;
  /** Focus dans le formulaire : de quoi charger le moteur à l'avance. */
  onWarmUp: () => void;
  /** Champ de la date, où « Modifier la saisie » rend le focus. */
  dateRef: Ref<HTMLInputElement>;
}

/**
 * Formulaire de naissance. Aucun attribut `name`, aucune `action` : même envoyé avant l'hydratation, il ne mettrait
 * rien dans l'adresse. À l'envoi, `parseBirthInput` tranche et toutes les erreurs s'affichent ; ensuite, un champ n'est
 * revalidé en direct que s'il avait déjà une erreur ou qu'on l'a quitté (erreurs calculées au rendu, jamais copiées).
 */
export function BirthForm({ onValid, onWarmUp, dateRef }: BirthFormProps) {
  const locale = useLocale();
  const S = NATAL_STRINGS[locale];
  const id = useId();
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [attempted, setAttempted] = useState(false);
  /** Champs en erreur au dernier envoi, et champs quittés depuis : les seuls revalidés en direct. */
  const [flagged, setFlagged] = useState<ReadonlySet<FieldKey>>(NO_FIELDS);
  const [touched, setTouched] = useState<ReadonlySet<FieldKey>>(NO_FIELDS);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  const parsed = attempted ? parseBirthInput(toBirthValues(values, null)) : null;
  const errors: readonly BirthInputError[] =
    parsed !== null && !parsed.ok ? parsed.errors.filter((e) => flagged.has(e.field) || touched.has(e.field)) : [];
  const errorOf = (field: FieldKey) => errors.find((error) => error.field === field);
  const suspicion = longitudeSuspicion(values, locale);

  const fieldId = (field: FieldKey) => `${id}-${field}`;
  const errorId = (field: FieldKey) => `${id}-${field}-erreur`;
  const helpId = (field: FieldKey) => `${id}-${field}-aide`;
  const coordinatesHelpId = `${id}-coordonnees`;
  const warningId = `${id}-longitude-signe`;
  const firstChoiceId = `${id}-premier-passage`;
  const describedBy = (field: FieldKey, ...help: string[]) =>
    [...(errorOf(field) ? [errorId(field)] : []), ...help].join(" ") || undefined;
  const touch = (field: FieldKey) => setTouched((current) => (current.has(field) ? current : new Set(current).add(field)));
  /** Attributs communs d'un champ : identifiant, état d'erreur, et la sortie du champ qui le fait revalider. */
  const control = (field: FieldKey) => ({
    id: fieldId(field),
    "aria-invalid": errorOf(field) ? true : undefined,
    onBlur: () => touch(field),
  });

  const labelId = (field: FieldKey) => `${id}-${field}-etiquette`;

  const set = <K extends keyof FormValues>(key: K, value: FormValues[K]) =>
    setValues((current) => ({ ...current, [key]: value }));

  function choosePlace(place: string) {
    setValues((current) => ({
      ...current,
      place,
      timeZone: place === OTHER_PLACE && current.timeZone.trim() === "" ? deviceTimeZone() : current.timeZone,
    }));
  }

  /** Un couple collé (« 48.1173, -1.6778 ») remplit la latitude et la longitude. */
  function typeLatitude(latitude: string) {
    const pair = coordinatePair(latitude);
    setValues((current) =>
      pair ? { ...current, latitude: pair[0], longitude: pair[1] } : { ...current, latitude },
    );
  }

  function submit(ambiguity: BirthFormValues["ambiguity"]) {
    const result = parseBirthInput(toBirthValues(values, ambiguity));
    if (result.ok) {
      setAttempted(false);
      setFlagged(NO_FIELDS);
      setTouched(NO_FIELDS);
      onValid(result.value);
      return;
    }
    flushSync(() => {
      setAttempted(true);
      setFlagged(new Set(result.errors.map((error) => error.field)));
      setTouched(NO_FIELDS);
      if (result.errors.some((error) => ADVANCED_FIELDS.has(error.field))) setAdvancedOpen(true);
    });
    summaryRef.current?.focus();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submit(null);
  }

  function clear() {
    setValues(EMPTY);
    setAttempted(false);
    setFlagged(NO_FIELDS);
    setTouched(NO_FIELDS);
    setAdvancedOpen(false);
    document.getElementById(fieldId("date"))?.focus();
  }

  /** Lien du récapitulatif : le focus va au champ, l'adresse ne change pas (rien dans l'URL, pas même une ancre). */
  function followError(event: MouseEvent<HTMLAnchorElement>, target: string, field: FieldKey) {
    event.preventDefault();
    if (ADVANCED_FIELDS.has(field)) flushSync(() => setAdvancedOpen(true));
    document.getElementById(target)?.focus();
  }

  function errorText(field: FieldKey) {
    const error = errorOf(field);
    if (error === undefined) return null;
    let choices = null;
    if (error.field === "time" && error.code === "ambiguous") {
      // « Heure d'été, puis d'hiver » seulement si le second passage est à l'heure normale de la zone.
      const zone = zoneOf(values);
      const year = yearOf(values);
      const standard = zone === null || year === null ? null : standardOffset(zone, year);
      const seasonal = standard === error.later.offsetSeconds && error.earlier.offsetSeconds > standard;
      choices = (
        <div className={styles.choices}>
          <button id={firstChoiceId} type="button" className="bouton bouton-second" onClick={() => submit("earlier")}>
            {S.choice(false, S.utc(shortOffset(error.earlier.offsetSeconds)), seasonal)}
          </button>
          <button type="button" className="bouton bouton-second" onClick={() => submit("later")}>
            {S.choice(true, S.utc(shortOffset(error.later.offsetSeconds)), seasonal)}
          </button>
        </div>
      );
    }
    return (
      <>
        <p id={errorId(field)} className={styles.error}>
          {messageOf(error, values, S, locale)}
        </p>
        {choices}
      </>
    );
  }

  const manual = values.place === OTHER_PLACE;

  return (
    <form
      className={styles.form}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      onFocus={onWarmUp}
      aria-labelledby={`${id}-titre`}
      aria-describedby={`${id}-obligatoires`}
    >
      <div className={styles.labelRow}>
        <h2 id={`${id}-titre`} className={styles.formTitle}>
          {S.title}
        </h2>
        <InfoTip subject={S.title} id={`${id}-obligatoires`}>
          {S.requiredNote}
        </InfoTip>
      </div>

      {errors.length > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="group"
          aria-labelledby={`${id}-recap`}
          aria-describedby={`${id}-recap-liste`}
          className={styles.summary}
        >
          <h3 id={`${id}-recap`} className={styles.summaryTitle}>
            {S.summaryTitle}
          </h3>
          <ul id={`${id}-recap-liste`}>
            {errors.map((error) => {
              const target =
                error.field === "time" && error.code === "ambiguous" ? firstChoiceId : fieldId(error.field);
              return (
                <li key={error.field}>
                  <a href={`#${target}`} onClick={(event) => followError(event, target, error.field)}>
                    {messageOf(error, values, S, locale)}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      {/* Sur grand écran, deux colonnes : date et heure, puis lieu et réglages avancés. */}
      <div className={styles.columns}>
        <fieldset className={styles.group}>
          <legend>{S.birthLegend}</legend>
          <div className={styles.pair}>
            <div className={demo.field}>
              <div className={styles.labelRow}>
                <label id={labelId("date")} htmlFor={fieldId("date")}>
                  {S.date}
                </label>
                <InfoTip subject={S.date} id={helpId("date")}>
                  {S.dateHelp}
                </InfoTip>
              </div>
              <DateField
                onLeave={() => touch("date")}
                id={fieldId("date")}
                labelId={labelId("date")}
                inputRef={dateRef}
                locale={locale}
                min={MIN_DATE}
                max={MAX_DATE}
                required
                invalid={errorOf("date") !== undefined}
                value={values.date}
                onChange={(value) => set("date", value)}
                describedBy={describedBy("date", helpId("date"))}
              />
              {errorText("date")}
            </div>
            <div className={demo.field}>
              <div className={styles.labelRow}>
                <label id={labelId("time")} htmlFor={fieldId("time")}>
                  {S.time}
                </label>
                <InfoTip subject={S.time} id={helpId("time")}>
                  {S.timeHelp}
                </InfoTip>
              </div>
              <TimeField
                onLeave={() => touch("time")}
                id={fieldId("time")}
                labelId={labelId("time")}
                locale={locale}
                required={!values.timeUnknown}
                disabled={values.timeUnknown}
                invalid={errorOf("time") !== undefined}
                value={values.time}
                onChange={(value) => set("time", value)}
                describedBy={describedBy("time", helpId("time"))}
              />
              {errorText("time")}
            </div>
          </div>
          <div className={styles.labelRow}>
            <label className={styles.check}>
              <input
                type="checkbox"
                checked={values.timeUnknown}
                onChange={(event) => set("timeUnknown", event.target.checked)}
                aria-describedby={`${id}-heure-inconnue`}
              />
              {S.timeUnknown}
            </label>
            <InfoTip subject={S.timeUnknown} id={`${id}-heure-inconnue`}>
              {S.timeUnknownHelp}
            </InfoTip>
          </div>
        </fieldset>

        <div className={styles.column}>
          <fieldset className={styles.group}>
            <legend>{S.placeLegend}</legend>
            <div className={demo.field}>
              <div className={styles.labelRow}>
                <label htmlFor={fieldId("city")}>{S.city}</label>
                <InfoTip subject={S.city} id={helpId("city")}>
                  {S.cityHelp}
                </InfoTip>
              </div>
              <select
                {...control("city")}
                className={styles.control}
                required
                value={values.place}
                onChange={(event) => choosePlace(event.target.value)}
                aria-describedby={describedBy("city", helpId("city"))}
              >
                <option value="">{S.cityChoose}</option>
                {CITY_GROUPS[locale].map((group) => (
                  <optgroup key={group.country} label={group.label}>
                    {group.cities.map((key) => (
                      <option key={key} value={key}>
                        {CITY_STRINGS[locale].cities[key]}
                      </option>
                    ))}
                  </optgroup>
                ))}
                <option value={OTHER_PLACE}>{S.cityOther}</option>
              </select>
              {errorText("city")}
            </div>

            {manual ? (
              <>
                <div className={styles.pair}>
                  <div className={demo.field}>
                    <div className={styles.labelRow}>
                      <label htmlFor={fieldId("latitude")}>{S.latitude}</label>
                      <InfoTip subject={S.latitude} id={coordinatesHelpId}>
                        {S.coordinatesHelp}
                      </InfoTip>
                    </div>
                    <input
                      {...control("latitude")}
                      className={styles.control}
                      type="text"
                      spellCheck={false}
                      required
                      value={values.latitude}
                      onChange={(event) => typeLatitude(event.target.value)}
                      aria-describedby={describedBy("latitude", coordinatesHelpId)}
                    />
                    {errorText("latitude")}
                  </div>
                  <div className={demo.field}>
                    <label htmlFor={fieldId("longitude")}>{S.longitude}</label>
                    <input
                      {...control("longitude")}
                      className={styles.control}
                      type="text"
                      spellCheck={false}
                      required
                      value={values.longitude}
                      onChange={(event) => set("longitude", event.target.value)}
                      aria-describedby={describedBy(
                        "longitude",
                        ...(suspicion ? [warningId] : []),
                        coordinatesHelpId,
                      )}
                    />
                    {errorText("longitude")}
                    {suspicion ? (
                      <p id={warningId} className={styles.warning}>
                        {S.longitudeWarning(suspicion.east, suspicion.zone, suspicion.suggestion)}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className={demo.field}>
                  <div className={styles.labelRow}>
                    <label htmlFor={fieldId("timeZone")}>{S.timeZone}</label>
                    <InfoTip subject={S.timeZone} id={helpId("timeZone")}>
                      {S.timeZoneHelp}
                    </InfoTip>
                  </div>
                  <input
                    {...control("timeZone")}
                    className={styles.control}
                    type="text"
                    list={`${id}-fuseaux`}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck={false}
                    required={values.utcOffset.trim() === ""}
                    value={values.timeZone}
                    onChange={(event) => set("timeZone", event.target.value)}
                    aria-describedby={describedBy("timeZone", helpId("timeZone"))}
                  />
                  <datalist id={`${id}-fuseaux`}>
                    {timeZoneSuggestions().map((zone) => (
                      <option key={zone} value={zone} />
                    ))}
                  </datalist>
                  {errorText("timeZone")}
                </div>
              </>
            ) : null}
          </fieldset>

          <details
            className={text.details}
            open={advancedOpen}
            onToggle={(event) => setAdvancedOpen(event.currentTarget.open)}
          >
            <summary className={text.summary}>
              <span className={text.plus} aria-hidden="true" />
              {S.advanced}
            </summary>
            <div className={text.panel}>
              <div className={demo.field}>
                <div className={styles.labelRow}>
                  <label htmlFor={fieldId("houseSystem")}>{S.houseSystem}</label>
                  <InfoTip subject={S.houseSystem} id={helpId("houseSystem")}>
                    {S.houseSystemHelp}
                  </InfoTip>
                </div>
                <select
                  {...control("houseSystem")}
                  className={styles.control}
                  value={values.houseSystem}
                  onChange={(event) => set("houseSystem", event.target.value)}
                  aria-describedby={describedBy("houseSystem", helpId("houseSystem"))}
                >
                  {HOUSE_SYSTEM_KEYS.map((key) => (
                    <option key={key} value={key}>
                      {HOUSE_SYSTEM_NAMES[locale][key]}
                    </option>
                  ))}
                </select>
                {errorText("houseSystem")}
              </div>
              <div className={demo.field}>
                <div className={styles.labelRow}>
                  <label htmlFor={fieldId("utcOffset")}>{S.utcOffset}</label>
                  <InfoTip subject={S.utcOffset} id={helpId("utcOffset")}>
                    {S.utcOffsetHelp}
                  </InfoTip>
                </div>
                <input
                  {...control("utcOffset")}
                  className={styles.control}
                  type="text"
                  spellCheck={false}
                  value={values.utcOffset}
                  onChange={(event) => set("utcOffset", event.target.value)}
                  aria-describedby={describedBy("utcOffset", helpId("utcOffset"))}
                />
                {errorText("utcOffset")}
              </div>
            </div>
          </details>
        </div>
      </div>

      <div className={styles.submitRow}>
        <div className={styles.actions}>
          <button type="submit" className="bouton" aria-describedby={`${id}-confidentialite`}>
            {S.submit}
          </button>
          <InfoTip subject={S.privacyTitle} id={`${id}-confidentialite`}>
            {S.privacy}
          </InfoTip>
          <button type="button" className="bouton bouton-second" onClick={clear}>
            {S.clear}
          </button>
        </div>
      </div>
    </form>
  );
}
