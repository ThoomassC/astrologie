"use client";

import { type CSSProperties, type ReactNode, useId } from "react";
import { INFO_STRINGS } from "./info.strings";
import styles from "./text.module.css";

/**
 * Bulle « i » : les précisions en petit texte restent à portée sans charger la page. Bouton natif qui ouvre un
 * popover (Échap ou un clic dehors le ferment, sans JavaScript de notre part) ; le panneau se pose sous le bouton là
 * où le navigateur connaît l'ancrage CSS, au centre de l'écran sinon. `id` facultatif : pour `aria-describedby`.
 */
export function InfoTip({ subject, children, id }: { subject: string; children: ReactNode; id?: string }) {
  const own = useId();
  const panelId = id ?? `${own}-info`;
  const anchor = `--info-${own.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  return (
    <>
      <button
        type="button"
        className={styles.info}
        popoverTarget={panelId}
        aria-label={INFO_STRINGS.label(subject)}
        style={{ anchorName: anchor } as CSSProperties}
      >
        i
      </button>
      <div id={panelId} popover="auto" role="note" className={styles.infoPanel} style={{ positionAnchor: anchor } as CSSProperties}>
        {children}
      </div>
    </>
  );
}
