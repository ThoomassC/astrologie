import type { ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import RootLayout, { generateMetadata, generateStaticParams } from "@/app/[lang]/layout";
import { useLocale } from "@/i18n/LocaleProvider";
import { rootMetadata } from "@/i18n/metadata";

/** Hors du compilateur de Next, `next/font` ne charge rien : chaque police ne rend que le nom de sa variable CSS. */
vi.mock("next/font/google", () => {
  const font = ({ variable }: { variable: string }) => ({ variable });
  return { IM_Fell_French_Canon: font, IM_Fell_English: font, Atkinson_Hyperlegible_Next: font };
});

vi.mock("next/navigation", async (importOriginal) => ({
  ...(await importOriginal<typeof import("next/navigation")>()),
  usePathname: () => "/en/signes",
}));

/** Ce que Next passe au layout `/[lang]` et à ses métadonnées. */
const props = (lang: string, children: ReactNode = null) => ({ params: Promise.resolve({ lang }), children });

/** Erreur que lève `notFound()` : Next la traduit en page 404. */
const NOT_FOUND = { digest: "NEXT_HTTP_ERROR_FALLBACK;404" };

/** Composant client témoin : affiche la langue que lui donne le fournisseur. */
function LocaleProbe() {
  return <span data-probe="">{useLocale()}</span>;
}

describe("layout racine /[lang]", () => {
  it("devrait produire au build les pages des deux langues, et elles seules", () => {
    expect(generateStaticParams()).toEqual([{ lang: "fr" }, { lang: "en" }]);
  });

  it("devrait déclarer la langue de l'adresse comme langue du document", async () => {
    expect(renderToStaticMarkup(await RootLayout(props("en")))).toContain('<html lang="en"');
  });

  it("devrait donner la langue de l'adresse aux composants client", async () => {
    expect(renderToStaticMarkup(await RootLayout(props("en", <LocaleProbe />)))).toContain("<span data-probe=\"\">en</span>");
  });

  it("devrait écrire la barre et le pied de page dans la langue de l'adresse, bascule de langue comprise", async () => {
    const markup = renderToStaticMarkup(await RootLayout(props("en")));
    expect(markup).toContain("Skip to content");
    expect(markup).toContain('aria-label="Version française"');
    expect(markup).toContain('href="/fr/signes"');
    expect(markup).toContain('href="/en/lexique"');
  });

  it("devrait décrire le site dans la langue de l'adresse", async () => {
    await expect(generateMetadata(props("en"))).resolves.toEqual(rootMetadata("en"));
  });

  it("devrait répondre par une 404 à une langue que le site ne parle pas", async () => {
    await expect(RootLayout(props("de"))).rejects.toMatchObject(NOT_FOUND);
    await expect(generateMetadata(props("de"))).rejects.toMatchObject(NOT_FOUND);
  });
});
