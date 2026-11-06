import type { Metadata, Viewport } from "next";
import { SITE_STRINGS } from "@/components/site/site.strings";
import { getCommonContent } from "@/content/common/content";
import { DEFAULT_LOCALE, LOCALES } from "@/i18n/locales";
import { sectionPath } from "@/lib/site/routes";
import { THEME_SCRIPT } from "@/lib/site/theme";
import { SITE_VIEWPORT } from "@/lib/site/viewport";
import styles from "./global-not-found.module.css";
import "./globals.css";

/** Versions de la page : la langue du document d'abord, puis l'autre. */
const VERSIONS = [DEFAULT_LOCALE, ...LOCALES.filter((locale) => locale !== DEFAULT_LOCALE)];

export const metadata: Metadata = {
  title: `${getCommonContent(DEFAULT_LOCALE).notFound.title} – ${SITE_STRINGS[DEFAULT_LOCALE].brand}`,
};

export const viewport: Viewport = SITE_VIEWPORT;

/**
 * Page introuvable, pour toute adresse qu'aucune route ne sert (« /fr/inexistant », ou « /de/signes » une fois
 * préfixé par le proxy). Next la sert sans le layout `[lang]` : document complet, styles globaux, thème posé avant la
 * peinture comme ailleurs, polices de repli du système. La langue voulue est inconnue ici : la page est en français,
 * langue par défaut, et donne aussi la version anglaise, chacune déclarant sa langue et menant à l'accueil dans
 * cette langue.
 */
export default function GlobalNotFound() {
  return (
    <html lang={DEFAULT_LOCALE} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
        <main className={styles.page}>
          <p className={styles.code}>404</p>
          {VERSIONS.map((locale) => {
            const { title, text, back } = getCommonContent(locale).notFound;
            const titleId = `introuvable-${locale}`;
            const Heading = locale === DEFAULT_LOCALE ? "h1" : "h2";
            return (
              <section key={locale} className={styles.version} lang={locale} aria-labelledby={titleId}>
                <Heading className={styles.title} id={titleId}>
                  {title}
                </Heading>
                <p className={styles.text}>{text}</p>
                {/* Lien simple : l'accueil a un autre layout racine, le navigateur charge la page entière. */}
                <a className="bouton bouton-second" href={sectionPath("home", locale)} hrefLang={locale}>
                  {back}
                </a>
              </section>
            );
          })}
        </main>
      </body>
    </html>
  );
}
