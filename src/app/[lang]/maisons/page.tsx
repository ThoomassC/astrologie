import type { Metadata } from "next";
import { HousesPage } from "@/components/houses/HousesPage";
import { getHousesContent } from "@/content/houses/content";
import { pageMetadata } from "@/i18n/metadata";
import { localeFrom } from "@/i18n/params";
import { sectionPath } from "@/lib/site/routes";

export async function generateMetadata({ params }: PageProps<"/[lang]/maisons">): Promise<Metadata> {
  const locale = await localeFrom(params);
  const { index } = getHousesContent(locale);
  return pageMetadata({ locale, path: (l) => sectionPath("houses", l), title: index.title, description: index.lead });
}

export default async function Page({ params }: PageProps<"/[lang]/maisons">) {
  return <HousesPage locale={await localeFrom(params)} />;
}
