import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SignPage } from "@/components/signs/SignPage";
import { getSignsContent } from "@/content/signs/content";
import { SIGN_NAMES } from "@/i18n/names";
import { SIGN_KEYS } from "@/lib/astro/keys";
import { SIGN_SLUGS, signFromSlug, signPath } from "@/lib/site/routes";

/** Les douze fiches, produites au build ; un autre segment donne la 404. */
export function generateStaticParams(): { slug: string }[] {
  return SIGN_KEYS.map((key) => ({ slug: SIGN_SLUGS[key] }));
}

export async function generateMetadata({ params }: PageProps<"/signes/[slug]">): Promise<Metadata> {
  const sign = signFromSlug((await params).slug);
  if (!sign) notFound();
  return {
    title: SIGN_NAMES[sign].name,
    description: getSignsContent().signs[sign].tagline,
    alternates: { canonical: signPath(sign) },
  };
}

export default async function Page({ params }: PageProps<"/signes/[slug]">) {
  const sign = signFromSlug((await params).slug);
  if (!sign) notFound();
  return <SignPage sign={sign} />;
}
