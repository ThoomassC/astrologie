import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible_Next, IM_Fell_English, IM_Fell_French_Canon } from "next/font/google";
import type { CSSProperties } from "react";
import { FocusOnNavigation } from "@/components/site/FocusOnNavigation";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SkipToContent } from "@/components/site/SkipToContent";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { LOCALES, type Locale } from "@/i18n/locales";
import { rootMetadata } from "@/i18n/metadata";
import { localeFrom } from "@/i18n/params";
import { PAPER_TEXTURE } from "@/lib/site/images";
import { THEME_SCRIPT } from "@/lib/site/theme";
import { SITE_VIEWPORT } from "@/lib/site/viewport";
import "../globals.css";

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

/**
 * Toutes les pages, dans les deux langues, sont produites au build : `next dev` et `next build` échouent si l'une
 * d'elles lit la requête (`cookies()`, `headers()`). C'est le proxy, en amont, qui négocie la langue.
 */
export const ensureStatic = "navigation";

/** Les deux langues du site, produites au build ; toute autre valeur du segment donne la 404. */
export function generateStaticParams(): { lang: Locale }[] {
  return LOCALES.map((lang) => ({ lang }));
}

/** Base des adresses, gabarit des titres des pages, titre et description du site, dans la langue de l'adresse. */
export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  return rootMetadata(await localeFrom(params));
}

export const viewport: Viewport = SITE_VIEWPORT;

/**
 * Layout racine, sous le segment de la langue (/fr, /en) : langue du document et celle que lisent les composants
 * client (`useLocale`), polices, thème posé avant la peinture (script en ligne, `suppressHydrationWarning` sur <html>
 * dont il change l'attribut), grain du papier, barre et pied de page communs. Chaque page rend son `main#contenu` et
 * reçoit la langue en prop.
 */
export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const locale = await localeFrom(params);
  return (
    <html
      lang={locale}
      className={`${canon.variable} ${fellEnglish.variable} ${atkinson.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body style={{ "--texture-papier": `url(${PAPER_TEXTURE.src})` } as CSSProperties}>
        <LocaleProvider locale={locale}>
          <SkipToContent locale={locale} />
          <SiteHeader locale={locale} />
          {children}
          <SiteFooter locale={locale} />
          <FocusOnNavigation />
        </LocaleProvider>
      </body>
    </html>
  );
}
