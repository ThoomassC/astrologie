import { ExplainedSection } from "@/components/text/ExplainedSection";
import layout from "@/components/text/layout.module.css";
import { PageHeader } from "@/components/text/PageHeader";
import { getAboutContent } from "@/content/about/content";
import { ABOUT_SECTION_IDS } from "@/content/about/types";
import { getImagesContent } from "@/content/images/content";
import { creditLine } from "@/content/images/fr";
import type { ImageCredit } from "@/content/images/types";
import { getUiContent } from "@/content/ui/content";
import { HISTORY_IMAGE_ORDER } from "@/lib/site/imageOrder";
import { PLANET_KEYS, SIGN_KEYS } from "@/lib/astro/keys";
import { MAIN_ID } from "@/lib/site/ids";
import styles from "@/components/history/history.module.css";

function CreditList({ credits }: { credits: readonly ImageCredit[] }) {
  return (
    <ul>
      {credits.map((credit) => (
        <li key={credit.pageHref + credit.title}>
          {creditLine(credit)}{" "}
          <a href={credit.pageHref} rel="noopener">
            {credit.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** À propos : démarche, méthode du calcul, sources, images (crédits complets), confidentialité. */
export function AboutPage() {
  const content = getAboutContent();
  const images = getImagesContent();
  const ui = getUiContent().about;
  return (
    <main id={MAIN_ID} tabIndex={-1} className={layout.page}>
      <PageHeader title={content.title} lead={content.lead} />
      <div className={layout.stack}>
        {ABOUT_SECTION_IDS.map((id) => {
          const section = content.sections[id];
          return (
            <ExplainedSection key={id} id={id} text={section}>
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
                  <CreditList credits={SIGN_KEYS.map((key) => images.signs[key])} />
                  <p>{ui.creditsHistory}</p>
                  <CreditList credits={HISTORY_IMAGE_ORDER.map((key) => images.history[key])} />
                  <p>{ui.creditsMaps}</p>
                  <CreditList credits={PLANET_KEYS.map((key) => images.planetMaps[key])} />
                  <p>{ui.creditsOther}</p>
                  <CreditList credits={[images.zodiacalLight, images.paper]} />
                </div>
              ) : null}
            </ExplainedSection>
          );
        })}
      </div>
    </main>
  );
}
