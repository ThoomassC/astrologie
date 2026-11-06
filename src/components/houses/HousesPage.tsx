import Link from "next/link";
import { ExplainedCard } from "@/components/text/ExplainedCard";
import { ExplainedSection, ExplainedText } from "@/components/text/ExplainedSection";
import layout from "@/components/text/layout.module.css";
import { PageHeader } from "@/components/text/PageHeader";
import { getHousesContent } from "@/content/houses/content";
import type { Locale } from "@/i18n/locales";
import { HOUSE_NUMBERS, HOUSE_SYSTEM_KEYS } from "@/lib/astro/keys";
import { MAIN_ID } from "@/lib/site/ids";
import { houseAnchor, housePath } from "@/lib/site/routes";
import { HouseSystemsDemo } from "./HouseSystemsDemo";
import styles from "./housesPage.module.css";

/** Page des maisons : angles, quadrants, démonstration des systèmes, les douze maisons, les systèmes, les pôles. */
export function HousesPage({ locale }: { locale: Locale }) {
  const content = getHousesContent(locale);
  return (
    <main id={MAIN_ID} tabIndex={-1} className={layout.page}>
      <PageHeader title={content.index.title} lead={content.index.lead} locale={locale} />
      <div className={layout.stack}>
        <ExplainedText text={content.index.intro} subject={content.index.title} locale={locale} />
        <ExplainedSection id="angles" text={content.angles} locale={locale} />
        <ExplainedSection id="quadrants" text={content.quadrants} locale={locale} />
        <HouseSystemsDemo />

        <nav aria-label={content.index.title} className={styles.toc}>
          <ol>
            {HOUSE_NUMBERS.map((n) => (
              <li key={n}>
                <Link href={housePath(n, locale)}>{content.houses[n].heading}</Link>
              </li>
            ))}
          </ol>
        </nav>

        <div className={styles.houses}>
          {HOUSE_NUMBERS.map((n) => (
            <ExplainedSection
              key={n}
              id={houseAnchor(n)}
              text={content.houses[n]}
              locale={locale}
              className={styles.house}
              lead={
                <ul className={styles.keywords}>
                  {content.houses[n].keywords.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>

        <div className={layout.cards}>
          {HOUSE_SYSTEM_KEYS.map((key) => (
            <ExplainedCard
              key={key}
              id={`systeme-${key}`}
              level={3}
              text={content.systems[key]}
              locale={locale}
            />
          ))}
          <ExplainedCard id="poles" level={3} text={content.polar} locale={locale} />
        </div>
      </div>
    </main>
  );
}
