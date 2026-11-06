import type { Metadata } from "next";
import { HistoryPage } from "@/components/history/HistoryPage";
import { getHistoryContent } from "@/content/history/content";
import { pageMetadata } from "@/i18n/metadata";
import { localeFrom } from "@/i18n/params";
import { sectionPath } from "@/lib/site/routes";

export async function generateMetadata({ params }: PageProps<"/[lang]/histoire">): Promise<Metadata> {
  const locale = await localeFrom(params);
  const { title, lead } = getHistoryContent(locale);
  return pageMetadata({ locale, path: (l) => sectionPath("history", l), title, description: lead });
}

export default async function Page({ params }: PageProps<"/[lang]/histoire">) {
  return <HistoryPage locale={await localeFrom(params)} />;
}
