import type { Metadata } from "next";
import { AspectsPage } from "@/components/aspects/AspectsPage";
import { getAspectsContent } from "@/content/aspects/content";
import { SECTION_PATHS } from "@/lib/site/routes";

export function generateMetadata(): Metadata {
  const { index } = getAspectsContent();
  return { title: index.title, description: index.lead, alternates: { canonical: SECTION_PATHS.aspects } };
}

export default function Page() {
  return <AspectsPage />;
}
