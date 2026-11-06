"use client";

import { type KeyboardEvent, useEffect, useRef } from "react";
import styles from "./fields.module.css";
import { PICKER_STRINGS } from "./picker.strings";
import type { Locale } from "@/i18n/locales";
import type { TimeParts } from "./segments";

export interface TimePanelProps {
  locale: Locale;
  h12: boolean;
  parts: TimeParts;
  onChange: (parts: TimeParts) => void;
  /** Heure complète, après les minutes ou AM / PM : le panneau se ferme et rend le focus. */
  onDone: () => void;
}

type Column = "hour" | "minute" | "period";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Panneau de l'heure : une colonne par segment (heures, minutes, et AM / PM en anglais), chacune une liste à choix
 * unique. Flèches haut et bas dans la colonne, gauche et droite d'une colonne à l'autre, Entrée ou Espace pour
 * choisir. Le panneau se ferme quand l'heure est complète, après le choix des minutes ou de AM / PM.
 */
export function TimePanel({ locale, h12, parts, onChange, onDone }: TimePanelProps) {
  const S = PICKER_STRINGS[locale];
  const root = useRef<HTMLDivElement>(null);

  const columns: { key: Column; label: string; short: string; options: { value: string; text: string }[] }[] = [
    {
      key: "hour",
      label: S.hour,
      short: S.hourShort,
      options: (h12 ? Array.from({ length: 12 }, (_, i) => i + 1) : Array.from({ length: 24 }, (_, i) => i)).map(
        (n) => ({ value: pad(n), text: pad(n) }),
      ),
    },
    {
      key: "minute",
      label: S.minute,
      short: S.minuteShort,
      options: Array.from({ length: 60 }, (_, i) => ({ value: pad(i), text: pad(i) })),
    },
    ...(h12
      ? [
          {
            key: "period" as const,
            label: S.period,
            short: "",
            options: [
              { value: "am", text: S.am },
              { value: "pm", text: S.pm },
            ],
          },
        ]
      : []),
  ];

  const current = (key: Column) => {
    const value = parts[key];
    return key === "period" || value === "" ? value : value.padStart(2, "0");
  };

  // À l'ouverture : chaque colonne défile jusqu'à sa valeur, et le focus va à la première colonne.
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    for (const list of element.querySelectorAll<HTMLElement>('[role="listbox"]')) {
      const option = list.querySelector<HTMLElement>('[tabindex="0"]');
      if (option) list.scrollTop = option.offsetTop - list.clientHeight / 2 + option.offsetHeight / 2;
    }
    element.querySelector<HTMLElement>('[role="listbox"] [tabindex="0"]')?.focus();
  }, []);

  const lists = () => [...(root.current?.querySelectorAll<HTMLElement>('[role="listbox"]') ?? [])];

  const choose = (key: Column, value: string) => {
    const next = { ...parts, [key]: value };
    onChange(next);
    const complete = next.hour !== "" && next.minute !== "" && (!h12 || next.period !== "");
    if (complete && key !== "hour") {
      onDone();
      return;
    }
    // Colonne suivante : les minutes après l'heure, AM / PM après les minutes.
    const index = columns.findIndex((c) => c.key === key);
    const list = lists()[index + 1];
    (list?.querySelector<HTMLElement>('[tabindex="0"]') ?? list?.querySelector<HTMLElement>('[role="option"]'))?.focus();
  };

  const onKey = (event: KeyboardEvent<HTMLElement>, key: Column, value: string) => {
    const option = event.currentTarget;
    const list = option.parentElement;
    if (!list) return;
    const options = [...list.querySelectorAll<HTMLElement>('[role="option"]')];
    const index = options.indexOf(option);
    const focusAt = (i: number) => options[Math.max(0, Math.min(options.length - 1, i))]?.focus();
    const columnIndex = lists().indexOf(list);
    switch (event.key) {
      case "ArrowDown":
        focusAt(index + 1);
        break;
      case "ArrowUp":
        focusAt(index - 1);
        break;
      case "Home":
        focusAt(0);
        break;
      case "End":
        focusAt(options.length - 1);
        break;
      case "PageDown":
        focusAt(index + 6);
        break;
      case "PageUp":
        focusAt(index - 6);
        break;
      case "ArrowLeft":
      case "ArrowRight": {
        const target = lists()[columnIndex + (event.key === "ArrowLeft" ? -1 : 1)];
        (target?.querySelector<HTMLElement>('[tabindex="0"]') ?? target?.querySelector<HTMLElement>('[role="option"]'))?.focus();
        break;
      }
      case "Enter":
      case " ":
        choose(key, value);
        break;
      default:
        return;
    }
    event.preventDefault();
  };

  return (
    <div ref={root} className={styles.clock}>
      {columns.map((column) => {
        const selected = current(column.key);
        const hasSelected = column.options.some((o) => o.value === selected);
        return (
          <div key={column.key} className={styles.clockColumn}>
            <span className={styles.clockHead} aria-hidden="true">
              {column.short}
            </span>
            <div role="listbox" aria-label={column.label} className={styles.clockList}>
              {column.options.map((option, i) => {
                const isSelected = option.value === selected;
                return (
                  <div
                    key={option.value}
                    role="option"
                    aria-selected={isSelected}
                    tabIndex={isSelected || (!hasSelected && i === 0) ? 0 : -1}
                    className={styles.clockOption}
                    onClick={() => choose(column.key, option.value)}
                    onKeyDown={(event) => onKey(event, column.key, option.value)}
                  >
                    {option.text}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
