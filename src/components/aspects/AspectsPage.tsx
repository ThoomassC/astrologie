import { ExplainedSection, ExplainedText } from "@/components/text/ExplainedSection";
import layout from "@/components/text/layout.module.css";
import { PageHeader } from "@/components/text/PageHeader";
import { Glyph, hasGlyph } from "@/components/glyphs/Glyph";
import { getAspectsContent } from "@/content/aspects/content";
import { ASPECTS } from "@/lib/astro/aspectData";
import { MAJOR_ASPECT_KEYS, MINOR_ASPECT_KEYS } from "@/lib/astro/keys";
import { MAIN_ID } from "@/lib/site/ids";
import { ASPECT_ANCHORS } from "@/lib/site/routes";
import styles from "@/components/houses/housesPage.module.css";
import { AspectExplorer } from "./AspectExplorer";

/** Page des aspects : l'explorateur, les cinq majeurs, les mineurs, orbes, aspects appliquants, configurations. */
export function AspectsPage() {
  const content = getAspectsContent();
  const section = (key: (typeof MAJOR_ASPECT_KEYS)[number] | (typeof MINOR_ASPECT_KEYS)[number]) => (
    <ExplainedSection
      key={key}
      id={ASPECT_ANCHORS[key]}
      text={content.aspects[key]}
      className={styles.house}
      lead={
        <div className={styles.aspectLead}>
          {hasGlyph(key) ? <Glyph name={key} size={24} className={styles.aspectGlyph} /> : null}
          <ul className={styles.keywords}>
            <li>{ASPECTS[key].angle}°</li>
            {content.aspects[key].keywords.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </div>
      }
    />
  );
  return (
    <main id={MAIN_ID} tabIndex={-1} className={layout.page}>
      <PageHeader title={content.index.title} lead={content.index.lead} />
      <div className={layout.stack}>
        <ExplainedText text={content.index.intro} subject={content.index.title} />
        <AspectExplorer />
        <div className={styles.houses}>{MAJOR_ASPECT_KEYS.map(section)}</div>
        <div className={styles.houses}>{MINOR_ASPECT_KEYS.map(section)}</div>
        <div className={layout.cards}>
          <ExplainedSection id="orbes" level={3} text={content.orbs} className={layout.card} />
          <ExplainedSection id="appliquant-separant" level={3} text={content.applying} className={layout.card} />
          <ExplainedSection id="configurations" level={3} text={content.patterns} className={layout.card} />
        </div>
      </div>
    </main>
  );
}
