import type { Metadata } from "next";
import { NatalPage } from "@/components/natal/NatalPage";
import { getNatalContent } from "@/content/natal/content";
import { pageMetadata } from "@/i18n/metadata";
import { localeFrom } from "@/i18n/params";
import { sectionPath } from "@/lib/site/routes";

export async function generateMetadata({ params }: PageProps<"/[lang]/theme-natal">): Promise<Metadata> {
  const locale = await localeFrom(params);
  const { title, lead } = getNatalContent(locale);
  return pageMetadata({ locale, path: (l) => sectionPath("natal", l), title, description: lead });
}

export default async function Page({ params }: PageProps<"/[lang]/theme-natal">) {
  return <NatalPage locale={await localeFrom(params)} />;
}
