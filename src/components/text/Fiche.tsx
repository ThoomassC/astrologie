import type { ReactNode } from "react";
import styles from "./text.module.css";

export interface FicheRow {
  readonly label: string;
  readonly value: ReactNode;
}

/** Fiche : liste de définitions en deux colonnes (élément, maître, dates…) ; la manchette qui la porte la nomme. */
export function Fiche({ rows }: { rows: readonly FicheRow[] }) {
  return (
    <dl className={styles.fiche}>
      {rows.map(({ label: term, value }) => (
        <div key={term} style={{ display: "contents" }}>
          <dt>{term}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
