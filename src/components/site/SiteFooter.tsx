import Link from "next/link";
import type { Locale } from "@/i18n/locales";
import { sectionPath } from "@/lib/site/routes";
import { AUTHOR, COPYRIGHT_YEAR, REPOSITORY, SISTER_SITE } from "./author";
import { BrandMark } from "./BrandMark";
import styles from "./SiteFooter.module.css";
import { SITE_STRINGS } from "./site.strings";

/** Pied de page commun : renvois (lexique, à propos, site frère, code), contacts de l'auteur, droit d'auteur. */
export function SiteFooter({ locale }: { locale: Locale }) {
  const s = SITE_STRINGS[locale];
  return (
    <footer className={styles.footer} aria-label={s.footerLabel}>
      <div className={styles.inner}>
        <div className={styles.mark}>
          <BrandMark size={40} />
        </div>
        <ul className={styles.links}>
          <li>
            <Link href={sectionPath("lexicon", locale)}>{s.footerLexicon}</Link>
          </li>
          <li>
            <Link href={sectionPath("about", locale)}>{s.footerAbout}</Link>
          </li>
          <li>
            <a href={`${SISTER_SITE}/${locale}`} hrefLang={locale} rel="noopener">
              {s.footerSister}
            </a>
            <span className={styles.note}>, {s.footerSisterNote}</span>
          </li>
          <li>
            <a href={REPOSITORY} rel="noopener">
              {s.footerRepository}
              <span className="sr-only"> ({s.external})</span>
            </a>
          </li>
        </ul>
        <ul className={styles.contacts}>
          <li>
            <a href={AUTHOR.github} rel="noopener me">
              GitHub<span className="sr-only"> ({s.external})</span>
            </a>
          </li>
          <li>
            <a href={AUTHOR.linkedin} rel="noopener me">
              LinkedIn<span className="sr-only"> ({s.external})</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${AUTHOR.email}`}>{AUTHOR.email}</a>
          </li>
        </ul>
        <p className={styles.copyright}>{s.copyright(COPYRIGHT_YEAR, AUTHOR.name)}</p>
      </div>
    </footer>
  );
}
