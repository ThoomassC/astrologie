import type { MetadataRoute } from "next";
import { LOCALES, type Locale } from "@/i18n/locales";
import { PLANET_KEYS, SIGN_KEYS } from "@/lib/astro/keys";
import { planetPath, SECTION_KEYS, sectionPath, signPath, type SitePath } from "@/lib/site/routes";
import { SITE_URL } from "@/lib/site/url";

/** Chemins de chaque page, dans une langue : les pages de section, les douze signes, les dix astres. */
const PAGES: readonly ((locale: Locale) => SitePath)[] = [
  ...SECTION_KEYS.map((section) => (locale: Locale) => sectionPath(section, locale)),
  ...SIGN_KEYS.map((sign) => (locale: Locale) => signPath(sign, locale)),
  ...PLANET_KEYS.map((planet) => (locale: Locale) => planetPath(planet, locale)),
];

const absolute = (path: string) => new URL(path, SITE_URL).toString();

/** Plan du site : chaque page dans chaque langue, avec ses versions dans les deux langues (hreflang). */
export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: absolute(path(locale)),
      alternates: { languages: Object.fromEntries(LOCALES.map((other) => [other, absolute(path(other))])) },
    })),
  );
}
