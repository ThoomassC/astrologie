import type { ReactNode } from "react";
import { getCommonContent } from "@/content/common/content";
import type { Titled } from "@/content/explained";
import type { Locale } from "@/i18n/locales";
import { Blocks } from "./Blocks";
import { CardDialog } from "./CardDialog";

interface ExplainedCardProps {
  id?: string;
  level?: 2 | 3;
  text: Titled;
  locale: Locale;
  /** Contenu ajouté au détail (tableau, liste calculée), après les blocs de texte. */
  children?: ReactNode;
  /** Contenu toujours visible sur la carte, après le résumé. */
  lead?: ReactNode;
}

/** Carte d'une grille : titre et résumé ; le détail s'ouvre dans une fenêtre modale au clic sur la carte. */
export function ExplainedCard({ id, level = 3, text, locale, children, lead }: ExplainedCardProps) {
  return (
    <CardDialog
      id={id}
      level={level}
      heading={text.heading}
      summary={text.summary}
      closeLabel={getCommonContent(locale).close}
      lead={lead}
    >
      <Blocks blocks={text.details} />
      {children}
    </CardDialog>
  );
}
