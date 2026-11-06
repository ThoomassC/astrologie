import type { Locale } from "@/i18n/locales";

/** Libellés des champs de date et d'heure et de leurs panneaux (composants clients). */
export interface PickerStrings {
  day: string;
  month: string;
  year: string;
  hour: string;
  minute: string;
  /** Segment AM / PM, sur une horloge de 12 heures : son nom, avec sa valeur ou « non choisi ». */
  period: string;
  periodValue: (value: string | null) => string;
  placeholders: { day: string; month: string; year: string; hour: string; minute: string };
  am: string;
  pm: string;
  openCalendar: string;
  calendar: string;
  previousMonth: string;
  nextMonth: string;
  openClock: string;
  clock: string;
  /** Petits en-têtes des colonnes du panneau de l'heure. */
  hourShort: string;
  minuteShort: string;
}

export const PICKER_STRINGS: Readonly<Record<Locale, PickerStrings>> = {
  fr: {
    day: "Jour",
    month: "Mois",
    year: "Année",
    hour: "Heures",
    minute: "Minutes",
    period: "Matin ou après-midi",
    periodValue: (value) => `Matin ou après-midi\u00a0: ${value ?? "non choisi"}`,
    placeholders: { day: "jj", month: "mm", year: "aaaa", hour: "hh", minute: "mm" },
    am: "AM",
    pm: "PM",
    openCalendar: "Choisir dans le calendrier",
    calendar: "Calendrier",
    previousMonth: "Mois précédent",
    nextMonth: "Mois suivant",
    openClock: "Choisir l'heure",
    clock: "Heure",
    hourShort: "h",
    minuteShort: "min",
  },
  en: {
    day: "Day",
    month: "Month",
    year: "Year",
    hour: "Hours",
    minute: "Minutes",
    period: "AM or PM",
    periodValue: (value) => `AM or PM: ${value ?? "not set"}`,
    placeholders: { day: "dd", month: "mm", year: "yyyy", hour: "hh", minute: "mm" },
    am: "AM",
    pm: "PM",
    openCalendar: "Choose from the calendar",
    calendar: "Calendar",
    previousMonth: "Previous month",
    nextMonth: "Next month",
    openClock: "Choose the time",
    clock: "Time",
    hourShort: "h",
    minuteShort: "min",
  },
};
