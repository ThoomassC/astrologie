import type { Metadata } from "next";
import { LexiconPage } from "@/components/lexicon/LexiconPage";
import { getLexiconContent } from "@/content/lexicon/content";
import { SECTION_PATHS } from "@/lib/site/routes";

export function generateMetadata(): Metadata {
  const { title, lead } = getLexiconContent();
  return { title, description: lead, alternates: { canonical: SECTION_PATHS.lexicon } };
}

export default function Page() {
  return <LexiconPage />;
}
