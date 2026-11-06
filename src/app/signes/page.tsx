import type { Metadata } from "next";
import { SignsIndexPage } from "@/components/signs/SignsIndexPage";
import { getSignsContent } from "@/content/signs/content";
import { SECTION_PATHS } from "@/lib/site/routes";

export function generateMetadata(): Metadata {
  const { index } = getSignsContent();
  return { title: index.title, description: index.lead, alternates: { canonical: SECTION_PATHS.signs } };
}

export default function Page() {
  return <SignsIndexPage />;
}
