import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SignPage } from "@/components/signs/SignPage";
import { getSignsContent } from "@/content/signs/content";
import { pageMetadata } from "@/i18n/metadata";
import { SIGN_NAMES } from "@/i18n/names";
import { localeFrom } from "@/i18n/params";
import { SIGN_KEYS } from "@/lib/astro/keys";
import { SIGN_SLUGS, signFromSlug, signPath } from "@/lib/site/routes";

/** Les douze fiches, produites au build dans chaque langue du layout ; un autre segment donne la 404. */
export function generateStaticParams(): { slug: string }[] {
  return SIGN_KEYS.map((key) => ({ slug: SIGN_SLUGS[key] }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/signes/[slug]">): Promise<Metadata> {
  const locale = await localeFrom(params);
  const sign = signFromSlug((await params).slug);
  if (!sign) notFound();
  return pageMetadata({
    locale,
    path: (l) => signPath(sign, l),
    title: SIGN_NAMES[locale][sign].name,
    description: getSignsContent(locale).signs[sign].tagline,
  });
}

export default async function Page({ params }: PageProps<"/[lang]/signes/[slug]">) {
  const locale = await localeFrom(params);
  const sign = signFromSlug((await params).slug);
  if (!sign) notFound();
  return <SignPage sign={sign} locale={locale} />;
}
