"use client";

import { type CSSProperties, type KeyboardEvent, type Ref, useId, useRef, useState } from "react";
import type { Locale } from "@/i18n/locales";
import styles from "./fields.module.css";
import { ClockIcon } from "./icons";
import { PICKER_STRINGS } from "./picker.strings";
import { Segment } from "./Segment";
import { fillSegments, joinTime, parseTimeText, type Period, splitTime, to12, type TimeParts } from "./segments";
import { TimePanel } from "./TimePanel";
import { assignRef, leaveCheck, usePopover } from "./usePopover";

/** Horloge de 12 heures (AM, PM) en anglais ; de 24 heures en français. */
export const USES_12_HOURS: Readonly<Record<Locale, boolean>> = { fr: false, en: true };

export interface TimeFieldProps {
  /** Identifiant du segment des heures : l'étiquette et le récapitulatif des erreurs y mènent. */
  id: string;
  labelId: string;
  /** "HH:MM" sur 24 heures une fois complète, "" si vide, sinon une valeur partielle que le formulaire refuse. */
  value: string;
  onChange: (value: string) => void;
  locale: Locale;
  invalid?: boolean;
  required?: boolean;
  disabled?: boolean;
  describedBy?: string;
  inputRef?: Ref<HTMLInputElement>;
  /** Le focus a quitté le champ entier (segments et panneau) : le formulaire peut le revalider. */
  onLeave?: () => void;
}

/**
 * Champ d'heure en segments (hh : mm, plus AM ou PM en anglais) : on tape l'heure, ou on la choisit dans un panneau à
 * colonnes. La valeur reste sur 24 heures quelle que soit la langue ; seul l'affichage change.
 */
export function TimeField(props: TimeFieldProps) {
  const { value, onChange, locale, disabled } = props;
  const S = PICKER_STRINGS[locale];
  const h12 = USES_12_HOURS[locale];
  const own = useId();
  const panelId = `${own}-horloge`;
  const anchor = `--time-${own.replace(/[^a-zA-Z0-9_-]/g, "")}`;

  const [parts, setParts] = useState<TimeParts>(() => splitTime(value, h12));
  const [synced, setSynced] = useState(`${h12}|${value}`);
  if (`${h12}|${value}` !== synced) {
    setSynced(`${h12}|${value}`);
    setParts(splitTime(value, h12));
  }

  const [open, setOpen] = useState(false);
  const hourRef = useRef<HTMLInputElement | null>(null);
  const minuteRef = useRef<HTMLInputElement | null>(null);
  const periodRef = useRef<HTMLButtonElement | null>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const close = usePopover(panel, trigger, setOpen);

  const update = (next: TimeParts) => {
    setParts(next);
    const joined = joinTime(next, h12);
    setSynced(`${h12}|${joined}`);
    onChange(joined);
  };

  /**
   * Texte collé : une heure entière (« 14:30 », « 2:30 PM »), dans l'une ou l'autre convention, est convertie dans
   * celle du champ ; sinon les chiffres sont répartis. Le focus change après le rendu, pour que la sortie du segment
   * ne réécrive pas l'ancienne valeur.
   */
  const fill = (from: "hour" | "minute", text: string) => {
    const whole = from === "hour" ? parseTimeText(text) : null;
    if (whole) {
      const twelve = to12(whole.hour);
      update({
        hour: String(h12 ? twelve.hour : whole.hour).padStart(2, "0"),
        minute: String(whole.minute).padStart(2, "0"),
        period: h12 ? twelve.period : "",
      });
      requestAnimationFrame(() => (h12 ? periodRef.current : minuteRef.current)?.focus());
      return;
    }
    const keys = from === "hour" ? (["hour", "minute"] as const) : (["minute"] as const);
    const values = fillSegments(keys.map((k) => (k === "hour" ? (h12 ? "hour12" : "hour24") : "minute")), text);
    if (values.length === 0) return;
    const next = { ...parts };
    values.forEach((v, i) => {
      next[keys[i]] = v;
    });
    const mark = /([ap])\.?\s*m?\.?\s*$/i.exec(text.trim());
    if (h12 && mark) next.period = mark[1].toLowerCase() === "a" ? "am" : "pm";
    update(next);
    requestAnimationFrame(() => {
      if (keys[values.length] === "minute") minuteRef.current?.focus();
      else if (h12 && next.period === "") periodRef.current?.focus();
    });
  };

  const setPeriod = (period: Period) => update({ ...parts, period });
  /** « a » et « p » choisissent AM et PM depuis n'importe quel segment. */
  const periodKey = (event: KeyboardEvent<HTMLElement>) => {
    if (!h12 || event.metaKey || event.ctrlKey || event.altKey) return false;
    const key = event.key.toLowerCase();
    if (key !== "a" && key !== "p") return false;
    setPeriod(key === "a" ? "am" : "pm");
    return true;
  };

  const onPeriodKey = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (periodKey(event)) {
      event.preventDefault();
      return;
    }
    switch (event.key) {
      // Entrée envoie le formulaire, comme dans les segments ; seuls l'Espace et le clic changent la période.
      case "Enter":
        event.preventDefault();
        event.currentTarget.form?.requestSubmit();
        return;
      case "ArrowUp":
      case "ArrowDown":
        event.preventDefault();
        setPeriod(parts.period === "am" ? "pm" : "am");
        return;
      case "Backspace":
      case "Delete":
        event.preventDefault();
        if (parts.period === "") minuteRef.current?.focus();
        else setPeriod("");
        return;
      case "ArrowLeft":
        event.preventDefault();
        minuteRef.current?.focus();
    }
  };

  const periodText = parts.period === "" ? "––" : S[parts.period];

  return (
    <div
      className={styles.field}
      data-invalid={props.invalid || undefined}
      data-disabled={disabled || undefined}
      role="group"
      aria-labelledby={props.labelId}
      style={{ anchorName: anchor } as CSSProperties}
      onBlur={(event) => leaveCheck(event.currentTarget, event.relatedTarget, props.onLeave)}
    >
      <div className={styles.segments}>
        <Segment
          kind={h12 ? "hour12" : "hour24"}
          id={props.id}
          inputRef={(element: HTMLInputElement | null) => {
            hourRef.current = element;
            assignRef(props.inputRef, element);
          }}
          value={parts.hour}
          label={S.hour}
          groupLabelId={props.labelId}
          placeholder={S.placeholders.hour}
          invalid={props.invalid}
          required={props.required}
          disabled={disabled}
          describedBy={props.describedBy}
          onValue={(hour) => update({ ...parts, hour })}
          onNext={() => minuteRef.current?.focus()}
          onPrevious={() => {}}
          onKey={periodKey}
          onFill={(text) => fill("hour", text)}
        />
        <span className={styles.separator} aria-hidden="true">
          :
        </span>
        <Segment
          kind="minute"
          inputRef={minuteRef}
          value={parts.minute}
          label={S.minute}
          groupLabelId={props.labelId}
          placeholder={S.placeholders.minute}
          invalid={props.invalid}
          required={props.required}
          disabled={disabled}
          onValue={(minute) => update({ ...parts, minute })}
          onNext={() => periodRef.current?.focus()}
          onPrevious={() => hourRef.current?.focus()}
          onKey={periodKey}
          onFill={(text) => fill("minute", text)}
        />
        {h12 ? (
          <button
            ref={periodRef}
            type="button"
            className={`${styles.segment} ${styles.period}`}
            data-empty={parts.period === "" || undefined}
            aria-label={S.periodValue(parts.period === "" ? null : S[parts.period])}
            disabled={disabled}
            onClick={() => setPeriod(parts.period === "am" ? "pm" : "am")}
            onKeyDown={onPeriodKey}
          >
            {periodText}
          </button>
        ) : null}
      </div>
      <button
        ref={trigger}
        type="button"
        className={styles.trigger}
        popoverTarget={panelId}
        aria-label={S.openClock}
        disabled={disabled}
      >
        <ClockIcon />
      </button>
      <div
        ref={panel}
        id={panelId}
        popover="auto"
        role="dialog"
        aria-label={S.clock}
        className={styles.panel}
        style={{ positionAnchor: anchor } as CSSProperties}
      >
        {open ? <TimePanel locale={locale} h12={h12} parts={parts} onChange={update} onDone={close} /> : null}
      </div>
    </div>
  );
}
