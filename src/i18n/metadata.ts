import type { Metadata } from "next";
import { SITE_STRINGS } from "@/components/site/site.strings";
import { getCommonContent } from "@/content/common/content";
import { negotiatedPath, type SitePath } from "@/lib/site/routes";
import { SITE_URL } from "@/lib/site/url";
import { LOCALES, OG_LOCALE, type Locale } from "./locales";

/**
 * Métadonnées du layout racine `[lang]` : base des adresses relatives, gabarit des titres des pages
 * (« Bélier – Astrologie ») et titre et description du site dans la langue.
 */
export function rootMetadata(locale: Locale): Metadata {
  const common = getCommonContent(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: common.siteTitle, template: `%s – ${SITE_STRINGS[locale].brand}` },
    description: common.siteDescription,
  };
}

interface PageMetadataInput {
  locale: Locale;
  /** Chemin de la page dans une langue : `(l) => signPath("aries", l)`. */
  path: (locale: Locale) => SitePath;
  /** Titre de la page, que le gabarit du layout suffixe ; absent pour l'accueil, qui prend le titre du site. */
  title?: string;
  description: string;
}

/**
 * Métadonnées d'une page dans une langue, adresses relatives (composées avec `metadataBase`) :
 * - titre de la page (le gabarit y ajoute « – Astrologie ») ; l'accueil prend le titre du site, absolu ;
 * - adresse canonique, hreflang des deux langues, et x-default vers le chemin sans langue, que le proxy négocie
 *   (« /signes/belier ») ;
 * - Open Graph : langue de la page (« en_GB »), l'autre en variante, titre sans le nom du site, que porte
 *   `og:site_name`.
 */
export function pageMetadata({ locale, path, title, description }: PageMetadataInput): Metadata {
  const canonical = path(locale);
  const ogTitle = title ?? getCommonContent(locale).siteTitle;
  return {
    title: title ?? { absolute: ogTitle },
    description,
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(LOCALES.map((other) => [other, path(other)])),
        "x-default": negotiatedPath(canonical),
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE_STRINGS[locale].brand,
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((other) => other !== locale).map((other) => OG_LOCALE[other]),
      url: canonical,
      title: ogTitle,
      description,
    },
  };
}
