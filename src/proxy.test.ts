// @vitest-environment node
import { unstable_doesMiddlewareMatch } from "next/experimental/testing/server";
import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";
import { LOCALES } from "@/i18n/locales";
import { config, proxy } from "@/proxy";
import nextConfig from "../next.config";

/** Origine des requêtes simulées : la redirection doit rester sur ce site. */
const ORIGIN = "https://astro.example";

function request(path: string, headers: Record<string, string> = {}): NextRequest {
  return new NextRequest(`${ORIGIN}${path}`, { headers });
}

/**
 * Vrai si le proxy s'exécute pour ce chemin : le matcher est compilé comme au build et appliqué comme par le serveur.
 * La version installée (16.4.3) n'exporte l'utilitaire que sous son ancien nom (`unstable_doesMiddlewareMatch`).
 */
function runsOn(url: string): boolean {
  return unstable_doesMiddlewareMatch({ config, nextConfig, url });
}

describe("proxy", () => {
  it("devrait rediriger la racine vers la langue de l'en-tête Accept-Language, en 307", () => {
    const response = proxy(request("/", { "accept-language": "en-GB,en;q=0.9,fr;q=0.8" }));
    expect(response?.status).toBe(307);
    expect(response?.headers.get("location")).toBe(`${ORIGIN}/en`);
  });

  it("devrait préférer la langue du cookie à celle de l'en-tête", () => {
    const response = proxy(request("/", { cookie: "lang=fr", "accept-language": "en" }));
    expect(response?.headers.get("location")).toBe(`${ORIGIN}/fr`);
  });

  it("devrait garder le chemin et la requête derrière la langue, en français quand rien n'en indique une", () => {
    const response = proxy(request("/signes/belier?x=1"));
    expect(response?.headers.get("location")).toBe(`${ORIGIN}/fr/signes/belier?x=1`);
  });

  it("devrait parler français quand l'en-tête ne propose aucune langue du site", () => {
    const response = proxy(request("/theme-natal", { "accept-language": "de-DE,de;q=0.9" }));
    expect(response?.headers.get("location")).toBe(`${ORIGIN}/fr/theme-natal`);
  });

  it("devrait dire aux caches que la redirection dépend de la langue de l'en-tête et du cookie (Vary)", () => {
    const vary = proxy(request("/"))?.headers.get("vary") ?? "";
    expect(vary.split(",").map((name) => name.trim())).toEqual(expect.arrayContaining(["Accept-Language", "Cookie"]));
  });

  it("ne devrait jamais poser de cookie : seule la bascule de langue le fait, sur action de la personne", () => {
    expect(proxy(request("/maisons", { cookie: "lang=en" }))?.headers.get("set-cookie")).toBeNull();
  });

  it("devrait laisser passer un chemin qui commence par une langue, sans réponse propre", () => {
    expect(proxy(request("/fr/signes", { cookie: "lang=en", "accept-language": "en" }))).toBeUndefined();
  });
});

describe("matcher du proxy", () => {
  it.each(["/", "/signes", "/signes/belier", "/theme-natal", "/franc", "/english", "/de/signes"])(
    "devrait faire passer « %s » par le proxy : aucune langue en tête",
    (path) => {
      expect(runsOn(path)).toBe(true);
    },
  );

  it.each(["/icon.svg", "/sitemap.xml", "/robots.txt", "/_next/static/chunks/a.js"])(
    "ne devrait pas faire passer « %s » par le proxy : fichier ou ressource interne",
    (path) => {
      expect(runsOn(path)).toBe(false);
    },
  );

  it.each(LOCALES)("ne devrait pas faire passer les pages en « %s » par le proxy : elles restent statiques", (locale) => {
    expect(runsOn(`/${locale}`)).toBe(false);
    expect(runsOn(`/${locale}/signes/belier`)).toBe(false);
  });
});
