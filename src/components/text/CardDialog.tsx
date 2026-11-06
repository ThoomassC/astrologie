"use client";

import { type ReactNode, useId, useRef } from "react";
import styles from "./card.module.css";

interface CardDialogProps {
  id?: string;
  level: 2 | 3;
  heading: string;
  summary: string;
  closeLabel: string;
  /** Contenu toujours visible sur la carte, après le résumé. */
  lead?: ReactNode;
  /** Le détail, rendu côté serveur : il est dans le HTML même fenêtre fermée. */
  children: ReactNode;
}

/** Attributs des commandes natives (`commandfor`, `command`, `closedby`) : la fenêtre s'ouvre même sans JavaScript. */
const invoke = (target: string, command: "show-modal" | "close") => ({ commandfor: target, command });

/**
 * Carte cliquable : titre et résumé ; un clic n'importe où sur la carte (le titre est le bouton, étiré sur toute la
 * carte) ouvre une fenêtre modale native (`<dialog>`) avec le détail, sur un fond assombri. Échap, le bouton
 * « Fermer » ou un clic sur le fond la ferment ; le focus revient alors au titre de la carte.
 */
export function CardDialog({ id, level, heading, summary, closeLabel, lead, children }: CardDialogProps) {
  const own = useId();
  const dialogId = `${id ?? own}-detail`;
  const titleId = `${dialogId}-titre`;
  const dialog = useRef<HTMLDialogElement>(null);
  const Heading = level === 2 ? "h2" : "h3";

  const open = () => {
    const element = dialog.current;
    if (!element || element.open) return;
    if (typeof element.showModal === "function") element.showModal();
    else element.setAttribute("open", "");
  };
  const close = () => {
    const element = dialog.current;
    if (!element?.open) return;
    if (typeof element.close === "function") element.close();
    else element.removeAttribute("open");
  };

  return (
    <section id={id} tabIndex={id ? -1 : undefined} className={styles.card}>
      <Heading className={styles.title}>
        <button
          type="button"
          className={styles.opener}
          aria-haspopup="dialog"
          {...invoke(dialogId, "show-modal")}
          onClick={open}
        >
          {heading}
        </button>
      </Heading>
      <p className={styles.summary}>{summary}</p>
      {lead}

      <dialog
        ref={dialog}
        id={dialogId}
        aria-labelledby={titleId}
        className={styles.dialog}
        {...{ closedby: "any" }}
        onClick={(event) => {
          // Un clic sur le fond (hors du contenu) tombe sur le <dialog> lui-même.
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className={styles.sheet}>
          <div className={styles.sheetHead}>
            <h2 id={titleId} className={styles.sheetTitle}>
              {heading}
            </h2>
            <button
              type="button"
              className={styles.closeButton}
              aria-label={closeLabel}
              {...invoke(dialogId, "close")}
              onClick={close}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <p className={styles.sheetSummary}>{summary}</p>
          <div className={styles.sheetBody}>{children}</div>
        </div>
      </dialog>
    </section>
  );
}
