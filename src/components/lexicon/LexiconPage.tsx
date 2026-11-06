import Link from "next/link";
import { ExplainedText } from "@/components/text/ExplainedSection";
import layout from "@/components/text/layout.module.css";
import { PageHeader } from "@/components/text/PageHeader";
import { getLexiconContent } from "@/content/lexicon/content";
import type { LexiconEntry } from "@/content/lexicon/types";
import { getUiContent } from "@/content/ui/content";
import { INTL_LOCALE, type Locale } from "@/i18n/locales";
import { MAIN_ID } from "@/lib/site/ids";
import { lexiconPath } from "@/lib/site/routes";
import styles from "./lexicon.module.css";

/** Initiale d'un terme, sans accent ni article : « Élément » → E, « L'Ascendant » reste rangé à son mot. */
function initial(term: string): string {
  return term
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .charAt(0)
    .toUpperCase();
}

/**
 * Lexique : les entrées par lettre, dans l'ordre alphabétique de la langue (les termes anglais ne suivent pas l'ordre
 * des termes français) ; chacune un résumé, des détails, et ses renvois. Les ancres des entrées sont les mêmes dans
 * les deux langues.
 */
export function LexiconPage({ locale }: { locale: Locale }) {
  const content = getLexiconContent(locale);
  const ui = getUiContent(locale).lexicon;
  const byId = new Map(content.entries.map((entry) => [entry.id, entry]));
  const sorted = [...content.entries].sort((a, b) => a.term.localeCompare(b.term, INTL_LOCALE[locale]));
  const letters = new Map<string, LexiconEntry[]>();
  for (const entry of sorted) {
    const letter = initial(entry.term);
    letters.set(letter, [...(letters.get(letter) ?? []), entry]);
  }
  return (
    <main id={MAIN_ID} tabIndex={-1} className={layout.page}>
      <PageHeader title={content.title} lead={content.lead} locale={locale} />
      <nav aria-label={ui.lettersLabel} className={styles.letters}>
        <ul>
          {[...letters.keys()].map((letter) => (
            <li key={letter}>
              <a href={`#lettre-${letter}`}>{letter}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={layout.stack}>
        {[...letters.entries()].map(([letter, entries]) => (
          <section key={letter} id={`lettre-${letter}`} tabIndex={-1} className={styles.letter} aria-labelledby={`lettre-${letter}-titre`}>
            <h2 id={`lettre-${letter}-titre`} className={styles.letterTitle}>
              {letter}
            </h2>
            <div className={styles.entries}>
              {entries.map((entry) => (
                <article key={entry.id} id={entry.id} tabIndex={-1} className={styles.entry}>
                  <h3 className={styles.term}>{entry.term}</h3>
                  <ExplainedText text={entry.text} subject={entry.term} locale={locale} />
                  {entry.see.length > 0 ? (
                    <p className={styles.see}>
                      {ui.seeAlso}{" "}
                      {entry.see
                        .filter((id) => byId.has(id))
                        .map((id, i) => (
                          <span key={id}>
                            {i > 0 ? ", " : null}
                            <Link href={lexiconPath(id, locale)}>{byId.get(id)?.term}</Link>
                          </span>
                        ))}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
