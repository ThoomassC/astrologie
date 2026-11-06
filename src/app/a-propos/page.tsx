import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";
import { getAboutContent } from "@/content/about/content";
import { SECTION_PATHS } from "@/lib/site/routes";

export function generateMetadata(): Metadata {
  const { title, lead } = getAboutContent();
  return { title, description: lead, alternates: { canonical: SECTION_PATHS.about } };
}

export default function Page() {
  return <AboutPage />;
}
