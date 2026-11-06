import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible_Next, IM_Fell_English, IM_Fell_French_Canon } from "next/font/google";
import type { CSSProperties } from "react";
import { FocusOnNavigation } from "@/components/site/FocusOnNavigation";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SkipToContent } from "@/components/site/SkipToContent";
import { getCommonContent } from "@/content/common/content";
import { PAPER_TEXTURE } from "@/lib/site/images";
import { THEME_SCRIPT } from "@/lib/site/theme";
import { SITE_URL } from "@/lib/site/url";
import { SITE_VIEWPORT } from "@/lib/site/viewport";
import "./globals.css";

/** Titres : IM Fell French Canon (fontes de John Fell, Oxford, vers 1670), romain et italique ; préchargée. */
const canon = IM_Fell_French_Canon({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-canon",
});

/** Intertitres, accroches et légendes : IM Fell English, plus fine ; chargée sans préchargement. */
const fellEnglish = IM_Fell_English({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-fell-english",
});

/** Texte et interface : Atkinson Hyperlegible Next, comme Astronomie. Métriques inconnues de Next : pas de repli ajusté. */
const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-atkinson",
});

/** Toutes les pages sont produites au build : `next dev` et `next build` échouent si l'une lit la requête. */
export const ensureStatic = "navigation";

const common = getCommonContent();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: common.siteTitle, template: "%s – Astrologie" },
  description: common.siteDescription,
  openGraph: { type: "website", locale: "fr_FR", siteName: "Astrologie" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = SITE_VIEWPORT;

/**
 * Layout racine : langue, polices, thème posé avant la peinture (script en ligne, `suppressHydrationWarning` sur
 * <html> dont il change l'attribut), grain du papier, barre et pied de page communs. Chaque page rend son
 * `main#contenu`.
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${canon.variable} ${fellEnglish.variable} ${atkinson.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body style={{ "--texture-papier": `url(${PAPER_TEXTURE.src})` } as CSSProperties}>
        <SkipToContent />
        <SiteHeader />
        {children}
        <SiteFooter />
        <FocusOnNavigation />
      </body>
    </html>
  );
}
