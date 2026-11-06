import type { MetadataRoute } from "next";
import { PLANET_KEYS, SIGN_KEYS } from "@/lib/astro/keys";
import { planetPath, SECTION_PATHS, signPath } from "@/lib/site/routes";
import { SITE_URL } from "@/lib/site/url";

/** Plan du site : les pages de section, les douze signes, les dix astres. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...Object.values(SECTION_PATHS), ...SIGN_KEYS.map(signPath), ...PLANET_KEYS.map(planetPath)];
  return paths.map((path) => ({ url: new URL(path, SITE_URL).toString() }));
}
