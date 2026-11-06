import Link from "next/link";
import type { CSSProperties } from "react";
import { ExplainedSection, ExplainedText } from "@/components/text/ExplainedSection";
import layout from "@/components/text/layout.module.css";
import { PageHeader } from "@/components/text/PageHeader";
import { getSignsContent } from "@/content/signs/content";
import { getUiContent } from "@/content/ui/content";
import { ELEMENT_NAMES, MODALITY_NAMES, SIGN_NAMES } from "@/i18n/names";
import { ELEMENT_KEYS, MODALITY_KEYS, SIGN_KEYS } from "@/lib/astro/keys";
import { SIGNS, signsOfElement, signsOfModality } from "@/lib/astro/signs";
import { MAIN_ID } from "@/lib/site/ids";
import { signPath } from "@/lib/site/routes";
import { ELEMENT_COLORS } from "./elementColors";
import { SignCard } from "./SignCard";
import styles from "./signs.module.css";

/** Première lettre en capitale : « Signes de feu ». */
function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function SignLinks({ signs }: { signs: readonly (typeof SIGN_KEYS)[number][] }) {
  return (
    <ul className={styles.signLinks}>
      {signs.map((sign) => (
        <li key={sign}>
          <Link href={signPath(sign)}>{SIGN_NAMES[sign].name}</Link>
        </li>
      ))}
    </ul>
  );
}

/** Page des signes : galerie des douze cartels, puis éléments, modalités, tableau croisé, polarité, cuspides. */
export function SignsIndexPage() {
  const content = getSignsContent();
  const ui = getUiContent().signs;
  return (
    <main id={MAIN_ID} tabIndex={-1} className={layout.page}>
      <PageHeader title={content.index.title} lead={content.index.lead} />
      <div className={layout.stack}>
        <ExplainedText text={content.index.intro} subject={content.index.title} />

        <section aria-labelledby="galerie">
          <h2 id="galerie" className="sr-only">
            {ui.galleryTitle}
          </h2>
          <ul className={styles.gallery}>
            {SIGN_KEYS.map((sign) => (
              <SignCard key={sign} sign={sign} keywords={content.signs[sign].keywords} />
            ))}
          </ul>
        </section>

        <section className={layout.stack} aria-labelledby="elements">
          <h2 id="elements" className={layout.groupTitle}>
            {ui.elementsTitle}
          </h2>
          <div className={styles.quartet}>
            {ELEMENT_KEYS.map((element) => (
              <ExplainedSection
                key={element}
                id={`element-${element}`}
                level={3}
                text={content.elements[element]}
                className={styles.elementBlock}
                lead={
                  <div style={{ "--pastille": ELEMENT_COLORS[element] } as CSSProperties} className={styles.elementLead}>
                    <span className={styles.pastille}>{capitalize(ELEMENT_NAMES[element].signs)}</span>
                    <SignLinks signs={signsOfElement(element)} />
                  </div>
                }
              />
            ))}
          </div>
        </section>

        <section className={layout.stack} aria-labelledby="modalites">
          <h2 id="modalites" className={layout.groupTitle}>
            {ui.modalitiesTitle}
          </h2>
          <div className={styles.trio}>
            {MODALITY_KEYS.map((modality) => (
              <ExplainedSection
                key={modality}
                id={`modalite-${modality}`}
                level={3}
                text={content.modalities[modality]}
                lead={<SignLinks signs={signsOfModality(modality)} />}
              />
            ))}
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.matrix}>
              <caption>{ui.matrixCaption}</caption>
              <thead>
                <tr>
                  <th scope="col">{ui.matrixCorner}</th>
                  {ELEMENT_KEYS.map((element) => (
                    <th key={element} scope="col">
                      <span className={styles.pastille} style={{ "--pastille": ELEMENT_COLORS[element] } as CSSProperties}>
                        {ELEMENT_NAMES[element].name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MODALITY_KEYS.map((modality) => (
                  <tr key={modality}>
                    <th scope="row">{MODALITY_NAMES[modality].name}</th>
                    {ELEMENT_KEYS.map((element) => {
                      const sign = SIGN_KEYS.find((s) => SIGNS[s].element === element && SIGNS[s].modality === modality);
                      return <td key={element}>{sign ? <Link href={signPath(sign)}>{SIGN_NAMES[sign].name}</Link> : null}</td>;
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className={layout.cards}>
          <ExplainedSection id="polarite" level={3} text={content.polarity} className={layout.card} />
          <ExplainedSection id="cuspides" level={3} text={content.cusps} className={layout.card} />
        </div>
      </div>
    </main>
  );
}
