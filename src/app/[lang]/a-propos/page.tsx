import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";
import { getAboutContent } from "@/content/about/content";
import { pageMetadata } from "@/i18n/metadata";
import { localeFrom } from "@/i18n/params";
import { sectionPath } from "@/lib/site/routes";

export async function generateMetadata({ params }: PageProps<"/[lang]/a-propos">): Promise<Metadata> {
  const locale = await localeFrom(params);
  const { title, lead } = getAboutContent(locale);
  return pageMetadata({ locale, path: (l) => sectionPath("about", l), title, description: lead });
}

export default async function Page({ params }: PageProps<"/[lang]/a-propos">) {
  return <AboutPage locale={await localeFrom(params)} />;
}
