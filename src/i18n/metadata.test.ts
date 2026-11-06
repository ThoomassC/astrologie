// @vitest-environment node
import { describe, expect, it } from "vitest";
import { getCommonContent } from "@/content/common/content";
import { LOCALES } from "@/i18n/locales";
import { pageMetadata, rootMetadata } from "@/i18n/metadata";
import { sectionPath, signPath } from "@/lib/site/routes";
import { SITE_URL } from "@/lib/site/url";

describe("rootMetadata", () => {
  it("devrait composer les adresses relatives des pages avec l'adresse du site", () => {
    expect(String(rootMetadata("fr").metadataBase)).toBe(`${SITE_URL}/`);
  });

  it.each(LOCALES)("devrait suffixer le titre des pages par le nom du site et décrire le site dans la langue (%s)", (locale) => {
    const common = getCommonContent(locale);
    expect(rootMetadata(locale)).toMatchObject({
      title: { template: "%s – Astrologie", default: common.siteTitle },
      description: common.siteDescription,
    });
  });
});

describe("pageMetadata", () => {
  const aries = pageMetadata({ locale: "en", path: (l) => signPath("aries", l), title: "Aries", description: "Fire." });

  it("devrait donner à la fiche du Bélier en anglais son adresse canonique, ses deux langues et l'adresse négociée", () => {
    expect(aries.alternates).toEqual({
      canonical: "/en/signes/belier",
      languages: { fr: "/fr/signes/belier", en: "/en/signes/belier", "x-default": "/signes/belier" },
    });
  });

  it("devrait faire pointer x-default de l'accueil vers la racine, que le proxy négocie", () => {
    const home = pageMetadata({ locale: "fr", path: (l) => sectionPath("home", l), description: "…" });
    expect(home.alternates).toEqual({ canonical: "/fr", languages: { fr: "/fr", en: "/en", "x-default": "/" } });
  });

  it("devrait annoncer à Open Graph la langue de la page, l'autre en variante, le nom du site et l'adresse", () => {
    expect(aries.openGraph).toMatchObject({
      type: "website",
      siteName: "Astrologie",
      locale: "en_GB",
      alternateLocale: ["fr_FR"],
      url: "/en/signes/belier",
      title: "Aries",
      description: "Fire.",
    });
  });

  it("devrait laisser le gabarit suffixer le titre d'une page, et poser sur l'accueil le titre du site, absolu", () => {
    expect(aries.title).toBe("Aries");
    const home = pageMetadata({ locale: "en", path: (l) => sectionPath("home", l), description: "…" });
    expect(home.title).toEqual({ absolute: getCommonContent("en").siteTitle });
  });
});
