import type { Metadata } from "next";
import { SciencePage } from "@/components/science/SciencePage";
import { getScienceContent } from "@/content/science/content";
import { SECTION_PATHS } from "@/lib/site/routes";

export function generateMetadata(): Metadata {
  const { title, lead } = getScienceContent();
  return { title, description: lead, alternates: { canonical: SECTION_PATHS.science } };
}

export default function Page() {
  return <SciencePage />;
}
