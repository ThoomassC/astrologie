import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlanetPage } from "@/components/planets/PlanetPage";
import { getPlanetsContent } from "@/content/planets/content";
import { pageMetadata } from "@/i18n/metadata";
import { POINT_NAMES } from "@/i18n/names";
import { localeFrom } from "@/i18n/params";
import { PLANET_KEYS } from "@/lib/astro/keys";
import { PLANET_SLUGS, planetFromSlug, planetPath } from "@/lib/site/routes";

/** Les dix fiches, produites au build dans chaque langue du layout ; un autre segment donne la 404. */
export function generateStaticParams(): { slug: string }[] {
  return PLANET_KEYS.map((key) => ({ slug: PLANET_SLUGS[key] }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/planetes/[slug]">): Promise<Metadata> {
  const locale = await localeFrom(params);
  const planet = planetFromSlug((await params).slug);
  if (!planet) notFound();
  return pageMetadata({
    locale,
    path: (l) => planetPath(planet, l),
    title: POINT_NAMES[locale][planet].name,
    description: getPlanetsContent(locale).planets[planet].tagline,
  });
}

export default async function Page({ params }: PageProps<"/[lang]/planetes/[slug]">) {
  const locale = await localeFrom(params);
  const planet = planetFromSlug((await params).slug);
  if (!planet) notFound();
  return <PlanetPage planet={planet} locale={locale} />;
}
