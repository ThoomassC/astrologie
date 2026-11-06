import type { Locale } from "@/i18n/locales";

/** Bulle d'information « i » (composant client). */
export interface InfoStrings {
  label: (subject: string) => string;
}

export const INFO_STRINGS: Readonly<Record<Locale, InfoStrings>> = {
  fr: { label: (subject) => `Plus d'informations\u00a0: ${subject}` },
  en: { label: (subject) => `More information: ${subject}` },
};
