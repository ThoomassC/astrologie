import type { Metadata } from "next";
import { LexiconPage } from "@/components/lexicon/LexiconPage";
import { getLexiconContent } from "@/content/lexicon/content";
import { pageMetadata } from "@/i18n/metadata";
import { localeFrom } from "@/i18n/params";
import { sectionPath } from "@/lib/site/routes";

export async function generateMetadata({ params }: PageProps<"/[lang]/lexique">): Promise<Metadata> {
  const locale = await localeFrom(params);
  const { title, lead } = getLexiconContent(locale);
  return pageMetadata({ locale, path: (l) => sectionPath("lexicon", l), title, description: lead });
}

export default async function Page({ params }: PageProps<"/[lang]/lexique">) {
  return <LexiconPage locale={await localeFrom(params)} />;
}
