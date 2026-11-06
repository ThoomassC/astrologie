import { AstronomerNote } from "@/components/text/AstronomerNote";
import { Estampe } from "@/components/text/Estampe";
import { ExplainedSection, ExplainedText } from "@/components/text/ExplainedSection";
import layout from "@/components/text/layout.module.css";
import { PageHeader } from "@/components/text/PageHeader";
import { SISTER_SITE } from "@/components/site/author";
import { getImagesContent } from "@/content/images/content";
import { getScienceContent } from "@/content/science/content";
import { SCIENCE_TOPIC_IDS } from "@/content/science/types";
import { getUiContent } from "@/content/ui/content";
import type { Locale } from "@/i18n/locales";
import { MAIN_ID } from "@/lib/site/ids";
import { ZODIACAL_LIGHT } from "@/lib/site/images";
import styles from "@/components/history/history.module.css";

/** Ce que dit la science : précession, Ophiuchus, tests, effet Barnum, absence de mécanisme ; puis la culture. */
export function SciencePage({ locale }: { locale: Locale }) {
  const content = getScienceContent(locale);
  const ui = getUiContent(locale).science;
  const light = getImagesContent(locale).zodiacalLight;
  return (
    <main id={MAIN_ID} tabIndex={-1} className={layout.page}>
      <PageHeader title={content.title} lead={content.lead} locale={locale} />
      <div className={layout.withAside}>
        <aside className={layout.aside} aria-label={ui.asideLabel}>
          <Estampe
            image={ZODIACAL_LIGHT}
            alt={light.alt}
            caption={light.caption}
            credit={light}
            locale={locale}
            sizes="(min-width: 1100px) 16rem, 92vw"
          />
          <AstronomerNote title={ui.sisterSite} as="div">
            <p>
              {ui.sisterSiteText}{" "}
              <a href={`${SISTER_SITE}/${locale}`} hrefLang={locale} rel="noopener">
                {ui.sisterSite}
              </a>
              .
            </p>
          </AstronomerNote>
        </aside>
        <div className={layout.stack}>
          <ExplainedText text={content.intro} subject={content.title} locale={locale} />
          {SCIENCE_TOPIC_IDS.map((id) => {
            const topic = content.topics[id];
            return (
              <ExplainedSection key={id} id={id} text={topic} locale={locale}>
                {topic.sources.length > 0 ? (
                  <div className={styles.sources}>
                    <p className={styles.sourcesTitle}>{ui.sources}</p>
                    <ul>
                      {topic.sources.map((source) => (
                        <li key={source.href}>
                          <a href={source.href} rel="noopener">
                            {source.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </ExplainedSection>
            );
          })}
          <ExplainedSection id="culture" text={content.culture} locale={locale} />
        </div>
      </div>
    </main>
  );
}
