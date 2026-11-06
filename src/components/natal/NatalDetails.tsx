import type { ReactNode } from "react";
import text from "@/components/text/text.module.css";
import { useLocale } from "@/i18n/LocaleProvider";
import { NATAL_STRINGS } from "./natal.strings";

/**
 * Le bouton « Détails » du site (`src/components/text/Details.tsx`), pour le calculateur : même balisage, même style,
 * même nom accessible (« Détails : positions des astres », ouvert « Masquer les détails : … »). `Details.tsx` lit ses
 * libellés dans `src/content/`, que la garde de frontière interdit aux modules client : ils viennent ici de la table.
 * Rendu seulement sous un composant client (le calculateur) : il lit la langue par `useLocale`.
 */
export function NatalDetails({ subject, children }: { subject: string; children: ReactNode }) {
  const S = NATAL_STRINGS[useLocale()];
  const of = S.detailsOf(subject);
  return (
    <details className={text.details}>
      <summary className={text.summary}>
        <span className={text.plus} aria-hidden="true" />
        <span className={text.whenClosed}>
          {S.details}
          <span className="sr-only">{of}</span>
        </span>
        <span className={text.whenOpen}>
          {S.hideDetails}
          <span className="sr-only">{of}</span>
        </span>
      </summary>
      <div className={text.panel}>{children}</div>
    </details>
  );
}
