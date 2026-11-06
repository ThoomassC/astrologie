import type { Metadata } from "next";
import { HistoryPage } from "@/components/history/HistoryPage";
import { getHistoryContent } from "@/content/history/content";
import { SECTION_PATHS } from "@/lib/site/routes";

export function generateMetadata(): Metadata {
  const { title, lead } = getHistoryContent();
  return { title, description: lead, alternates: { canonical: SECTION_PATHS.history } };
}

export default function Page() {
  return <HistoryPage />;
}
