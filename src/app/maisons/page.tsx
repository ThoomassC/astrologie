import type { Metadata } from "next";
import { HousesPage } from "@/components/houses/HousesPage";
import { getHousesContent } from "@/content/houses/content";
import { SECTION_PATHS } from "@/lib/site/routes";

export function generateMetadata(): Metadata {
  const { index } = getHousesContent();
  return { title: index.title, description: index.lead, alternates: { canonical: SECTION_PATHS.houses } };
}

export default function Page() {
  return <HousesPage />;
}
