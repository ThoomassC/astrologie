import type { Metadata } from "next";
import { SignsIndexPage } from "@/components/signs/SignsIndexPage";
import { getSignsContent } from "@/content/signs/content";
import { pageMetadata } from "@/i18n/metadata";
import { localeFrom } from "@/i18n/params";
import { sectionPath } from "@/lib/site/routes";

export async function generateMetadata({ params }: PageProps<"/[lang]/signes">): Promise<Metadata> {
  const locale = await localeFrom(params);
  const { index } = getSignsContent(locale);
  return pageMetadata({ locale, path: (l) => sectionPath("signs", l), title: index.title, description: index.lead });
}

export default async function Page({ params }: PageProps<"/[lang]/signes">) {
  return <SignsIndexPage locale={await localeFrom(params)} />;
}
