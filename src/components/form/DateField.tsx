"use client";

import { type CSSProperties, Fragment, type Ref, useId, useRef, useState } from "react";
import type { Locale } from "@/i18n/locales";
import { CalendarPanel } from "./CalendarPanel";
import styles from "./fields.module.css";
import { CalendarIcon } from "./icons";
import { PICKER_STRINGS } from "./picker.strings";
import { Segment } from "./Segment";
import {
  type CalendarDay,
  type DateParts,
  dayOf,
  daysInMonth,
  fillSegments,
  isoDay,
  joinDate,
  splitDate,
} from "./segments";
import { assignRef, leaveCheck, usePopover } from "./usePopover";

type DateKey = keyof DateParts;

/** Ordre des segments : jour, mois, année, en français comme en anglais britannique (celui du site). */
const ORDER: readonly DateKey[] = ["day", "month", "year"];

export interface DateFieldProps {
  /** Identifiant du premier segment : l'étiquette et le récapitulatif des erreurs y mènent. */
  id: string;
  /** Identifiant de l'étiquette visible, qui nomme le groupe. */
  labelId: string;
  /** "YYYY-MM-DD" une fois complète, "" si vide, sinon une valeur partielle que le formulaire refuse. */
  value: string;
  onChange: (value: string) => void;
  locale: Locale;
  min: string;
  max: string;
  invalid?: boolean;
  required?: boolean;
  describedBy?: string;
  /** Ref du premier segment (focus à l'envoi). */
  inputRef?: Ref<HTMLInputElement>;
  /** Le focus a quitté le champ entier (segments et panneau) : le formulaire peut le revalider. */
  onLeave?: () => void;
}

const today = (): CalendarDay => {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
};

/**
 * Champ de date en trois segments (jj / mm / aaaa, dd / mm / yyyy en anglais) : on tape la date d'un trait, ou on
 * la choisit dans un calendrier (mois et année en listes, pour remonter vite à 1950). Le format ne dépend pas de la
 * langue du navigateur, contrairement à `<input type="date">`.
 */
export function DateField(props: DateFieldProps) {
  const { value, onChange, locale } = props;
  const S = PICKER_STRINGS[locale];
  const own = useId();
  const panelId = `${own}-calendrier`;
  const anchor = `--date-${own.replace(/[^a-zA-Z0-9_-]/g, "")}`;

  const [parts, setParts] = useState<DateParts>(() => splitDate(value));
  const [synced, setSynced] = useState(value);
  // Valeur changée par le parent (remise à zéro) : les segments la suivent.
  if (value !== synced) {
    setSynced(value);
    setParts(splitDate(value));
  }

  const [open, setOpen] = useState(false);
  const segments = useRef<(HTMLInputElement | null)[]>([]);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const close = usePopover(panel, trigger, setOpen);

  const update = (next: DateParts) => {
    setParts(next);
    const joined = joinDate(next);
    setSynced(joined);
    onChange(joined);
  };

  const order = ORDER;
  /** Texte collé dans le segment `index` : réparti sur lui et les suivants, puis le focus va au premier non rempli. */
  const fill = (index: number, text: string) => {
    const values = fillSegments(order.slice(index), text);
    if (values.length === 0) return;
    const next = { ...parts };
    values.forEach((v, i) => {
      next[order[index + i]] = v;
    });
    update(next);
    // Après le rendu : la sortie du segment collé ne doit pas réécrire l'ancienne valeur.
    requestAnimationFrame(() => focusSegment(Math.min(index + values.length, order.length - 1)));
  };
  const focusSegment = (index: number) => segments.current[index]?.focus();

  const month = Number(parts.month);
  const year = parts.year.length === 4 ? Number(parts.year) : 2000;
  const dayMax = month >= 1 && month <= 12 ? daysInMonth(year, month) : undefined;

  const min = dayOf(props.min) ?? { year: 1800, month: 1, day: 1 };
  const max = dayOf(props.max) ?? { year: 2100, month: 12, day: 31 };
  const clamp = (day: CalendarDay) => {
    const iso = isoDay(day);
    return iso < isoDay(min) ? min : iso > isoDay(max) ? max : day;
  };
  const selected = dayOf(value);
  /** Jour mis en avant à l'ouverture : la date saisie, ou le mois et l'année déjà tapés, ou aujourd'hui. */
  const start = (): CalendarDay => {
    if (selected) return clamp(selected);
    const now = today();
    const typedMonth = month >= 1 && month <= 12 ? month : now.month;
    const typedYear = parts.year.length === 4 ? Number(parts.year) : now.year;
    return clamp({ year: typedYear, month: typedMonth, day: Math.min(Number(parts.day) || 1, daysInMonth(typedYear, typedMonth)) });
  };

  const labels: Readonly<Record<DateKey, string>> = { day: S.day, month: S.month, year: S.year };
  const kinds = { day: "day", month: "month", year: "year" } as const;

  return (
    <div
      className={styles.field}
      data-invalid={props.invalid || undefined}
      role="group"
      aria-labelledby={props.labelId}
      style={{ anchorName: anchor } as CSSProperties}
      onBlur={(event) => leaveCheck(event.currentTarget, event.relatedTarget, props.onLeave)}
    >
      <div className={styles.segments}>
        {order.map((key, index) => (
          <Fragment key={key}>
            {index > 0 ? (
              <span className={styles.separator} aria-hidden="true">
                /
              </span>
            ) : null}
            <Segment
              kind={kinds[key]}
              id={index === 0 ? props.id : undefined}
              inputRef={(element: HTMLInputElement | null) => {
                segments.current[index] = element;
                if (index === 0) assignRef(props.inputRef, element);
              }}
              value={parts[key]}
              label={labels[key]}
              groupLabelId={props.labelId}
              placeholder={S.placeholders[key]}
              invalid={props.invalid}
              required={props.required}
              describedBy={index === 0 ? props.describedBy : undefined}
              start={key === "year" ? () => today().year : undefined}
              max={key === "day" ? dayMax : undefined}
              onValue={(next) => update({ ...parts, [key]: next })}
              onNext={() => focusSegment(index + 1)}
              onPrevious={() => focusSegment(index - 1)}
              onFill={(text) => fill(index, text)}
            />
          </Fragment>
        ))}
      </div>
      <button
        ref={trigger}
        type="button"
        className={styles.trigger}
        popoverTarget={panelId}
        aria-label={S.openCalendar}
      >
        <CalendarIcon />
      </button>
      <div
        ref={panel}
        id={panelId}
        popover="auto"
        role="dialog"
        aria-label={S.calendar}
        className={styles.panel}
        style={{ positionAnchor: anchor } as CSSProperties}
      >
        {open ? (
          <CalendarPanel
            locale={locale}
            start={start()}
            selected={selected}
            today={today()}
            min={min}
            max={max}
            onPick={(day) => {
              update({
                day: String(day.day).padStart(2, "0"),
                month: String(day.month).padStart(2, "0"),
                year: String(day.year),
              });
              close();
            }}
          />
        ) : null}
      </div>
    </div>
  );
}
