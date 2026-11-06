import { type ReactNode, useId } from "react";
import styles from "./text.module.css";

/** Petite lunette gravée. */
function TelescopeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 14.5l17-7 2.4 5.8-17 7z" />
      <path d="M23.9 13.3l3.4-1.4-2.4-5.8-3.4 1.4" />
      <path d="M13 17.5l-3.5 10M15 16.7l4 10.8M9 22.5h11" />
    </svg>
  );
}

interface AstronomerNoteProps {
  title: string;
  children: ReactNode;
  /** Niveau du titre, selon la place de la note dans la page. */
  level?: 2 | 3;
  /** `aside` (encart nommé par son titre) ; `div` quand la note est déjà dans une manchette, pour ne pas imbriquer. */
  as?: "aside" | "div";
}

/** Note de l'astronome : ce que la science dit d'un point du texte, dans un encart fileté d'outremer. */
export function AstronomerNote({ title, children, level = 2, as: Tag = "aside" }: AstronomerNoteProps) {
  const id = useId();
  const Heading = level === 2 ? "h2" : "h3";
  return (
    <Tag className={styles.note} aria-labelledby={Tag === "aside" ? id : undefined}>
      <span className={styles.noteIcon}>
        <TelescopeIcon />
      </span>
      <div>
        <Heading id={id} className={styles.noteTitle}>
          {title}
        </Heading>
        <div>{children}</div>
      </div>
    </Tag>
  );
}
