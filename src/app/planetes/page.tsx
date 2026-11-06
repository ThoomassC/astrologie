import type { Metadata } from "next";
import { PlanetsIndexPage } from "@/components/planets/PlanetsIndexPage";
import { getPlanetsContent } from "@/content/planets/content";
import { SECTION_PATHS } from "@/lib/site/routes";

export function generateMetadata(): Metadata {
  const { index } = getPlanetsContent();
  return { title: index.title, description: index.lead, alternates: { canonical: SECTION_PATHS.planets } };
}

export default function Page() {
  return <PlanetsIndexPage />;
}
