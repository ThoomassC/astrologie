import type { Metadata } from "next";
import { AspectsPage } from "@/components/aspects/AspectsPage";
import { getAspectsContent } from "@/content/aspects/content";
import { pageMetadata } from "@/i18n/metadata";
import { localeFrom } from "@/i18n/params";
import { sectionPath } from "@/lib/site/routes";

export async function generateMetadata({ params }: PageProps<"/[lang]/aspects">): Promise<Metadata> {
  const locale = await localeFrom(params);
  const { index } = getAspectsContent(locale);
  return pageMetadata({ locale, path: (l) => sectionPath("aspects", l), title: index.title, description: index.lead });
}

export default async function Page({ params }: PageProps<"/[lang]/aspects">) {
  return <AspectsPage locale={await localeFrom(params)} />;
}
