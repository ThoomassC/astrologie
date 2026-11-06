import Link from "next/link";
import { ExplainedSection, ExplainedText } from "@/components/text/ExplainedSection";
import layout from "@/components/text/layout.module.css";
import { PageHeader } from "@/components/text/PageHeader";
import { getHousesContent } from "@/content/houses/content";
import { HOUSE_NUMBERS, HOUSE_SYSTEM_KEYS } from "@/lib/astro/keys";
import { MAIN_ID } from "@/lib/site/ids";
import { houseAnchor, SECTION_PATHS } from "@/lib/site/routes";
import { HouseSystemsDemo } from "./HouseSystemsDemo";
import styles from "./housesPage.module.css";

/** Page des maisons : angles, quadrants, démonstration des systèmes, les douze maisons, les systèmes, les pôles. */
export function HousesPage() {
  const content = getHousesContent();
  return (
    <main id={MAIN_ID} tabIndex={-1} className={layout.page}>
      <PageHeader title={content.index.title} lead={content.index.lead} />
      <div className={layout.stack}>
        <ExplainedText text={content.index.intro} subject={content.index.title} />
        <ExplainedSection id="angles" text={content.angles} />
        <ExplainedSection id="quadrants" text={content.quadrants} />
        <HouseSystemsDemo />

        <nav aria-label={content.index.title} className={styles.toc}>
          <ol>
            {HOUSE_NUMBERS.map((n) => (
              <li key={n}>
                <Link href={`${SECTION_PATHS.houses}#${houseAnchor(n)}`}>{content.houses[n].heading}</Link>
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
            <ExplainedSection key={key} id={`systeme-${key}`} level={3} text={content.systems[key]} className={layout.card} />
          ))}
          <ExplainedSection id="poles" level={3} text={content.polar} className={layout.card} />
        </div>
      </div>
    </main>
  );
}
