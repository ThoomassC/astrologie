"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/locales";
import { MAIN_ID } from "@/lib/site/ids";
import { sectionPath } from "@/lib/site/routes";
import styles from "./not-found.module.css";

/** Textes de la page introuvable, par langue : titre, phrase, lien vers l'accueil. */
export type NotFoundTexts = Readonly<
  Record<Locale, { readonly title: string; readonly text: string; readonly back: string }>
>;

/** Corps de la 404 sous `[lang]`, dans la langue de la page. */
export function NotFoundMessage({ texts }: { texts: NotFoundTexts }) {
  const locale = useLocale();
  const { title, text, back } = texts[locale];
  return (
    <main id={MAIN_ID} tabIndex={-1} className={styles.main}>
      <h1>{title}</h1>
      <p>{text}</p>
      <p>
        <Link href={sectionPath("home", locale)}>{back}</Link>
      </p>
    </main>
  );
}
