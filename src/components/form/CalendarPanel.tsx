"use client";

import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import styles from "./fields.module.css";
import { ChevronIcon } from "./icons";
import { INTL_LOCALE, type Locale } from "@/i18n/locales";
import { PICKER_STRINGS } from "./picker.strings";
import { type CalendarDay, isoDay, monthGrid, moveDay } from "./segments";

export interface CalendarPanelProps {
  locale: Locale;
  /** Jour qui reçoit le focus à l'ouverture. */
  start: CalendarDay;
  selected: CalendarDay | null;
  today: CalendarDay;
  min: CalendarDay;
  max: CalendarDay;
  onPick: (day: CalendarDay) => void;
}

/** La semaine commence le lundi, en français comme en anglais britannique. */
const WEEK_START = 1;

const utc = (d: CalendarDay) => {
  const date = new Date(Date.UTC(2000, d.month - 1, d.day));
  date.setUTCFullYear(d.year);
  return date;
};

const same = (a: CalendarDay | null, b: CalendarDay) =>
  a !== null && a.year === b.year && a.month === b.month && a.day === b.day;

const capitalize = (text: string) => text.charAt(0).toLocaleUpperCase() + text.slice(1);

/**
 * Calendrier d'un mois : listes du mois et de l'année, mois précédent et suivant, puis la grille des jours. Clavier :
 * flèches (jour, semaine), Page précédente et suivante (mois ; avec Maj, année), Début et Fin (semaine), Entrée pour
 * choisir. Un seul jour est atteignable par tabulation : celui qui a le focus.
 */
export function CalendarPanel({ locale, start, selected, today, min, max, onPick }: CalendarPanelProps) {
  const S = PICKER_STRINGS[locale];
  const tag = INTL_LOCALE[locale];
  const [focus, setFocus] = useState<CalendarDay>(start);
  const grid = useRef<HTMLTableElement>(null);
  const moveFocus = useRef(true);

  useEffect(() => {
    if (!moveFocus.current) return;
    moveFocus.current = false;
    grid.current?.querySelector<HTMLButtonElement>('button[tabindex="0"]')?.focus();
  }, [focus]);

  const minIso = isoDay(min);
  const maxIso = isoDay(max);
  const inRange = (d: CalendarDay) => isoDay(d) >= minIso && isoDay(d) <= maxIso;
  const clamp = (d: CalendarDay) => (isoDay(d) < minIso ? min : isoDay(d) > maxIso ? max : d);
  const go = (next: CalendarDay, takeFocus: boolean) => {
    moveFocus.current = takeFocus;
    setFocus(clamp(next));
  };

  const full = new Intl.DateTimeFormat(tag, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const monthName = new Intl.DateTimeFormat(tag, { month: "long", timeZone: "UTC" });
  const weekdayShort = new Intl.DateTimeFormat(tag, { weekday: "short", timeZone: "UTC" });
  const weekdayLong = new Intl.DateTimeFormat(tag, { weekday: "long", timeZone: "UTC" });
  const weekStart = WEEK_START;
  // 2 janvier 2000 : un dimanche.
  const weekdays = Array.from({ length: 7 }, (_, i) => new Date(Date.UTC(2000, 0, 2 + ((i + weekStart) % 7))));

  const years: number[] = [];
  for (let y = min.year; y <= max.year; y++) years.push(y);

  const onGridKey = (event: KeyboardEvent<HTMLButtonElement>) => {
    const position = (utc(focus).getUTCDay() - weekStart + 7) % 7;
    const moves: Record<string, { days?: number; months?: number }> = {
      ArrowLeft: { days: -1 },
      ArrowRight: { days: 1 },
      ArrowUp: { days: -7 },
      ArrowDown: { days: 7 },
      PageUp: { months: event.shiftKey ? -12 : -1 },
      PageDown: { months: event.shiftKey ? 12 : 1 },
      Home: { days: -position },
      End: { days: 6 - position },
    };
    const move = moves[event.key];
    if (!move) return;
    event.preventDefault();
    go(moveDay(focus, move), true);
  };

  const atStart = focus.year === min.year && focus.month === min.month;
  const atEnd = focus.year === max.year && focus.month === max.month;

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarHead}>
        <button
          type="button"
          className={styles.navButton}
          aria-label={S.previousMonth}
          aria-disabled={atStart}
          onClick={() => {
            // aria-disabled plutôt que disabled : le bouton garde le focus en bout de plage.
            if (!atStart) go(moveDay(focus, { months: -1 }), false);
          }}
        >
          <ChevronIcon direction="left" />
        </button>
        <select
          className={styles.select}
          aria-label={S.month}
          value={focus.month}
          onChange={(event) => go(moveDay(focus, { months: Number(event.target.value) - focus.month }), false)}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i + 1}>
              {capitalize(monthName.format(new Date(Date.UTC(2000, i, 1))))}
            </option>
          ))}
        </select>
        <select
          className={styles.select}
          aria-label={S.year}
          value={focus.year}
          onChange={(event) => go(moveDay(focus, { months: (Number(event.target.value) - focus.year) * 12 }), false)}
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <button
          type="button"
          className={styles.navButton}
          aria-label={S.nextMonth}
          aria-disabled={atEnd}
          onClick={() => {
            if (!atEnd) go(moveDay(focus, { months: 1 }), false);
          }}
        >
          <ChevronIcon direction="right" />
        </button>
      </div>

      <table ref={grid} className={styles.days}>
        <thead>
          <tr>
            {weekdays.map((date) => (
              <th key={date.getUTCDay()} scope="col" abbr={weekdayLong.format(date)}>
                {weekdayShort.format(date).replace(".", "")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {monthGrid(focus.year, focus.month, weekStart).map((week, w) => (
            <tr key={w}>
              {week.map((day, i) => {
                if (day === null) return <td key={i} />;
                const d = { year: focus.year, month: focus.month, day };
                return (
                  <td key={i}>
                    <button
                      type="button"
                      className={styles.day}
                      tabIndex={same(focus, d) ? 0 : -1}
                      aria-label={full.format(utc(d))}
                      aria-pressed={same(selected, d)}
                      aria-current={same(today, d) ? "date" : undefined}
                      disabled={!inRange(d)}
                      onClick={() => onPick(d)}
                      onKeyDown={onGridKey}
                      onFocus={() => {
                        if (!same(focus, d)) setFocus(d);
                      }}
                    >
                      {day}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
