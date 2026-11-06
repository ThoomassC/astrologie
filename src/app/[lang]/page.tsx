import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { getCommonContent } from "@/content/common/content";
import { pageMetadata } from "@/i18n/metadata";
import { localeFrom } from "@/i18n/params";
import { sectionPath } from "@/lib/site/routes";

/** Titre du site (absolu), description, adresse canonique, hreflang des deux langues et x-default « / ». */
export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const locale = await localeFrom(params);
  return pageMetadata({
    locale,
    path: (l) => sectionPath("home", l),
    description: getCommonContent(locale).siteDescription,
  });
}

/** Accueil, dans la langue de l'adresse (/fr, /en). Statique : la langue vient des paramètres du layout `[lang]`. */
export default async function Page({ params }: PageProps<"/[lang]">) {
  return <HomePage locale={await localeFrom(params)} />;
}
