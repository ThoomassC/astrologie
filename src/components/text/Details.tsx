import type { ReactNode } from "react";
import { getCommonContent } from "@/content/common/content";
import type { Locale } from "@/i18n/locales";
import styles from "./text.module.css";

/** Entre « Détails » et son sujet, lu seulement : « Détails : le mythe du Bélier », « Details: the myth of Aries ». */
const SUBJECT_SEPARATOR: Readonly<Record<Locale, string>> = { fr: "\u00a0: ", en: ": " };

/**
 * Bouton « Détails » : un `<details>` natif, qui s'ouvre au clavier comme à la souris, sans JavaScript, et dont le
 * contenu est dans le HTML (moteurs de recherche, recherche dans la page). Le nom accessible dit de quoi : « Détails :
 * le mythe du Bélier » ; ouvert, « Masquer les détails : … ».
 */
export function Details({ subject, locale, children }: { subject: string; locale: Locale; children: ReactNode }) {
  const { details, hideDetails } = getCommonContent(locale);
  const of = `${SUBJECT_SEPARATOR[locale]}${subject}`;
  return (
    <details className={styles.details}>
      <summary className={styles.summary}>
        <span className={styles.plus} aria-hidden="true" />
        <span className={styles.whenClosed}>
          {details}
          <span className="sr-only">{of}</span>
        </span>
        <span className={styles.whenOpen}>
          {hideDetails}
          <span className="sr-only">{of}</span>
        </span>
      </summary>
      <div className={styles.panel}>{children}</div>
    </details>
  );
}
