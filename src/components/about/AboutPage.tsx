import { ExplainedSection } from "@/components/text/ExplainedSection";
import layout from "@/components/text/layout.module.css";
import { PageHeader } from "@/components/text/PageHeader";
import { getAboutContent } from "@/content/about/content";
import { ABOUT_SECTION_IDS } from "@/content/about/types";
import { creditLine, getImagesContent } from "@/content/images/content";
import type { ImageCredit } from "@/content/images/types";
import { getUiContent } from "@/content/ui/content";
import type { Locale } from "@/i18n/locales";
import { HISTORY_IMAGE_ORDER } from "@/lib/site/imageOrder";
import { PLANET_KEYS, SIGN_KEYS } from "@/lib/astro/keys";
import { MAIN_ID } from "@/lib/site/ids";
import styles from "@/components/history/history.module.css";

function CreditList({ credits, locale }: { credits: readonly ImageCredit[]; locale: Locale }) {
  return (
    <ul>
      {credits.map((credit) => (
        <li key={credit.pageHref + credit.title}>
          {creditLine(credit, locale)}{" "}
          <a href={credit.pageHref} rel="noopener">
            {credit.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** À propos : démarche, méthode du calcul, sources, images (crédits complets), confidentialité. */
export function AboutPage({ locale }: { locale: Locale }) {
  const content = getAboutContent(locale);
  const images = getImagesContent(locale);
  const ui = getUiContent(locale).about;
  return (
    <main id={MAIN_ID} tabIndex={-1} className={layout.page}>
      <PageHeader title={content.title} lead={content.lead} locale={locale} />
      <div className={layout.stack}>
        {ABOUT_SECTION_IDS.map((id) => {
          const section = content.sections[id];
          return (
            <ExplainedSection key={id} id={id} text={section} locale={locale}>
              {section.links.length > 0 ? (
                <ul>
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} rel="noopener">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
              {id === "images" ? (
                <div className={styles.sources}>
                  <p className={styles.sourcesTitle}>{ui.creditsTitle}</p>
                  <p>{ui.creditsSigns}</p>
                  <CreditList credits={SIGN_KEYS.map((key) => images.signs[key])} locale={locale} />
                  <p>{ui.creditsHistory}</p>
                  <CreditList credits={HISTORY_IMAGE_ORDER.map((key) => images.history[key])} locale={locale} />
                  <p>{ui.creditsMaps}</p>
                  <CreditList credits={PLANET_KEYS.map((key) => images.planetMaps[key])} locale={locale} />
                  <p>{ui.creditsOther}</p>
                  <CreditList credits={[images.zodiacalLight, images.paper]} locale={locale} />
                </div>
              ) : null}
            </ExplainedSection>
          );
        })}
      </div>
    </main>
  );
}
