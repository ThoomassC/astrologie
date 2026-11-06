import type { Metadata } from "next";
import { NatalPage } from "@/components/natal/NatalPage";
import { getNatalContent } from "@/content/natal/content";
import { SECTION_PATHS } from "@/lib/site/routes";

export function generateMetadata(): Metadata {
  const { title, lead } = getNatalContent();
  return { title, description: lead, alternates: { canonical: SECTION_PATHS.natal } };
}

export default function Page() {
  return <NatalPage />;
}
