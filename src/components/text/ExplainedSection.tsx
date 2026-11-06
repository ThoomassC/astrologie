import type { ReactNode } from "react";
import type { Explained, Titled } from "@/content/explained";
import { Blocks } from "./Blocks";
import { Details } from "./Details";
import styles from "./text.module.css";

/** Résumé simple, puis détails à la demande, sans titre (introduction d'une page ou d'une fiche). */
export function ExplainedText({ text, subject, children }: { text: Explained; subject: string; children?: ReactNode }) {
  return (
    <div className={styles.explained}>
      <p className={styles.resume}>{text.summary}</p>
      <Details subject={subject}>
        <Blocks blocks={text.details} />
        {children}
      </Details>
    </div>
  );
}

interface ExplainedSectionProps {
  id?: string;
  level?: 2 | 3;
  text: Titled;
  /** Contenu ajouté aux détails (tableau, liste calculée), après les blocs de texte. */
  children?: ReactNode;
  /** Contenu toujours visible entre le résumé et les détails (pastilles, fiche courte). */
  lead?: ReactNode;
  className?: string;
}

/** Section : titre, résumé toujours visible, puis « Détails ». Avec un `id`, cible d'ancre qui prend le focus (tabIndex −1). */
export function ExplainedSection({ id, level = 2, text, children, lead, className }: ExplainedSectionProps) {
  const Heading = level === 2 ? "h2" : "h3";
  return (
    <section id={id} tabIndex={id ? -1 : undefined} className={`${styles.section} ${className ?? ""}`}>
      <Heading className={styles.sectionTitle}>{text.heading}</Heading>
      <p className={styles.resume}>{text.summary}</p>
      {lead}
      <Details subject={text.heading}>
        <Blocks blocks={text.details} />
        {children}
      </Details>
    </section>
  );
}
