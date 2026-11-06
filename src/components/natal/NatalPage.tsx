import { ExplainedSection, ExplainedText } from "@/components/text/ExplainedSection";
import layout from "@/components/text/layout.module.css";
import { PageHeader } from "@/components/text/PageHeader";
import { getNatalContent } from "@/content/natal/content";
import { MAIN_ID } from "@/lib/site/ids";
import { NatalCalculator } from "./NatalCalculator";

/** Thème natal : le calculateur (client, données gardées dans le navigateur), puis la méthode, la lecture, la précision. */
export function NatalPage() {
  const content = getNatalContent();
  return (
    <main id={MAIN_ID} tabIndex={-1} className={layout.page}>
      <PageHeader title={content.title} lead={content.lead} />
      <div className={layout.stack}>
        <ExplainedText text={content.intro} subject={content.title} />
        <NatalCalculator />
        <ExplainedSection id="methode" text={content.method} />
        <ExplainedSection id="lecture" text={content.reading} />
        <ExplainedSection id="precision" text={content.accuracy} />
        <ExplainedSection id="confidentialite" text={content.privacy} />
      </div>
    </main>
  );
}
