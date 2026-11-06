import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlanetPage } from "@/components/planets/PlanetPage";
import { getPlanetsContent } from "@/content/planets/content";
import { POINT_NAMES } from "@/i18n/names";
import { PLANET_KEYS } from "@/lib/astro/keys";
import { PLANET_SLUGS, planetFromSlug, planetPath } from "@/lib/site/routes";

/** Les dix fiches, produites au build ; un autre segment donne la 404. */
export function generateStaticParams(): { slug: string }[] {
  return PLANET_KEYS.map((key) => ({ slug: PLANET_SLUGS[key] }));
}

export async function generateMetadata({ params }: PageProps<"/planetes/[slug]">): Promise<Metadata> {
  const planet = planetFromSlug((await params).slug);
  if (!planet) notFound();
  return {
    title: POINT_NAMES[planet].name,
    description: getPlanetsContent().planets[planet].tagline,
    alternates: { canonical: planetPath(planet) },
  };
}

export default async function Page({ params }: PageProps<"/planetes/[slug]">) {
  const planet = planetFromSlug((await params).slug);
  if (!planet) notFound();
  return <PlanetPage planet={planet} />;
}
