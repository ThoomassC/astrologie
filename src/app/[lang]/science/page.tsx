import type { Metadata } from "next";
import { SciencePage } from "@/components/science/SciencePage";
import { getScienceContent } from "@/content/science/content";
import { pageMetadata } from "@/i18n/metadata";
import { localeFrom } from "@/i18n/params";
import { sectionPath } from "@/lib/site/routes";

export async function generateMetadata({ params }: PageProps<"/[lang]/science">): Promise<Metadata> {
  const locale = await localeFrom(params);
  const { title, lead } = getScienceContent(locale);
  return pageMetadata({ locale, path: (l) => sectionPath("science", l), title, description: lead });
}

export default async function Page({ params }: PageProps<"/[lang]/science">) {
  return <SciencePage locale={await localeFrom(params)} />;
}
