import { Blocks } from "@/components/text/Blocks";
import { Details } from "@/components/text/Details";
import { Estampe } from "@/components/text/Estampe";
import { ExplainedText } from "@/components/text/ExplainedSection";
import layout from "@/components/text/layout.module.css";
import { PageHeader } from "@/components/text/PageHeader";
import { getHistoryContent } from "@/content/history/content";
import { HISTORY_ERA_IDS } from "@/content/history/types";
import { getImagesContent } from "@/content/images/content";
import { getUiContent } from "@/content/ui/content";
import { MAIN_ID } from "@/lib/site/ids";
import { HISTORY_IMAGES } from "@/lib/site/images";
import styles from "./history.module.css";

/** Histoire : une frise de huit époques, de Babylone aux applications ; chacune un résumé, une estampe, des détails. */
export function HistoryPage() {
  const content = getHistoryContent();
  const credits = getImagesContent().history;
  const ui = getUiContent();
  return (
    <main id={MAIN_ID} tabIndex={-1} className={layout.page}>
      <PageHeader title={content.title} lead={content.lead} />
      <div className={layout.stack}>
        <ExplainedText text={content.intro} subject={content.title} />
        <ol className={styles.timeline}>
          {HISTORY_ERA_IDS.map((id) => {
            const era = content.eras[id];
            return (
              <li key={id} id={id} tabIndex={-1} className={styles.era}>
                <p className={styles.period}>{era.period}</p>
                <div className={styles.eraBody}>
                  <h2 className={styles.eraTitle}>{era.heading}</h2>
                  <p className={styles.resume}>{era.summary}</p>
                  {era.image ? (
                    <Estampe
                      image={HISTORY_IMAGES[era.image.key]}
                      alt={era.image.alt}
                      caption={era.image.caption}
                      credit={credits[era.image.key]}
                      sizes="(min-width: 960px) 40rem, 92vw"
                      className={styles.eraImage}
                    />
                  ) : null}
                  <Details subject={era.heading}>
                    <Blocks blocks={era.details} />
                    {era.sources.length > 0 ? (
                      <div className={styles.sources}>
                        <p className={styles.sourcesTitle}>{ui.history.sources}</p>
                        <ul>
                          {era.sources.map((source) => (
                            <li key={source.href}>
                              <a href={source.href} rel="noopener">
                                {source.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </Details>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </main>
  );
}
