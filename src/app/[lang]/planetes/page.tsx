import type { Metadata } from "next";
import { PlanetsIndexPage } from "@/components/planets/PlanetsIndexPage";
import { getPlanetsContent } from "@/content/planets/content";
import { pageMetadata } from "@/i18n/metadata";
import { localeFrom } from "@/i18n/params";
import { sectionPath } from "@/lib/site/routes";

export async function generateMetadata({ params }: PageProps<"/[lang]/planetes">): Promise<Metadata> {
  const locale = await localeFrom(params);
  const { index } = getPlanetsContent(locale);
  return pageMetadata({ locale, path: (l) => sectionPath("planets", l), title: index.title, description: index.lead });
}

export default async function Page({ params }: PageProps<"/[lang]/planetes">) {
  return <PlanetsIndexPage locale={await localeFrom(params)} />;
}
