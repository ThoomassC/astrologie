// @vitest-environment node
import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { SITE_URL } from "@/lib/site/url";

describe("plan du site", () => {
  const entries = sitemap();
  const urls = entries.map((entry) => entry.url);

  it("devrait lister chaque page dans les deux langues : dix sections, douze signes, dix astres", () => {
    expect(entries).toHaveLength(2 * (10 + 12 + 10));
    expect(new Set(urls).size).toBe(urls.length);
  });

  it.each([
    `${SITE_URL}/fr`,
    `${SITE_URL}/en`,
    `${SITE_URL}/en/signes/belier`,
    `${SITE_URL}/fr/planetes/saturne`,
    `${SITE_URL}/en/theme-natal`,
  ])("devrait contenir « %s »", (url) => {
    expect(urls).toContain(url);
  });

  it("devrait donner à chaque page ses versions dans les deux langues", () => {
    const aries = entries.find((entry) => entry.url === `${SITE_URL}/en/signes/belier`);
    expect(aries?.alternates?.languages).toEqual({
      fr: `${SITE_URL}/fr/signes/belier`,
      en: `${SITE_URL}/en/signes/belier`,
    });
  });
});
