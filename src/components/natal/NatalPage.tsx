import { ExplainedCard } from "@/components/text/ExplainedCard";
import { ExplainedText } from "@/components/text/ExplainedSection";
import layout from "@/components/text/layout.module.css";
import { PageHeader } from "@/components/text/PageHeader";
import { getNatalContent } from "@/content/natal/content";
import type { Locale } from "@/i18n/locales";
import { MAIN_ID } from "@/lib/site/ids";
import { NatalCalculator } from "./NatalCalculator";

/** Thème natal : le calculateur (client, données gardées dans le navigateur), puis la méthode, la lecture, la précision. */
export function NatalPage({ locale }: { locale: Locale }) {
  const content = getNatalContent(locale);
  return (
    <main id={MAIN_ID} tabIndex={-1} className={layout.page}>
      <PageHeader title={content.title} lead={content.lead} locale={locale} />
      <div className={layout.stack}>
        <ExplainedText text={content.intro} subject={content.title} locale={locale} />
        <NatalCalculator />
        <div className={layout.cards}>
          <ExplainedCard id="methode" level={3} text={content.method} locale={locale} />
          <ExplainedCard id="lecture" level={3} text={content.reading} locale={locale} />
          <ExplainedCard id="precision" level={3} text={content.accuracy} locale={locale} />
          <ExplainedCard id="confidentialite" level={3} text={content.privacy} locale={locale} />
        </div>
      </div>
    </main>
  );
}
