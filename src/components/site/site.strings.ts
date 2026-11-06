import type { SectionKey } from "@/lib/site/routes";

/** Textes de la barre, du menu, de la bascule de thème et du pied de page (lus par des composants client). */
export interface SiteStrings {
  brand: string;
  brandHome: string;
  skipToContent: string;
  navLabel: string;
  nav: Readonly<Partial<Record<SectionKey, string>>>;
  menu: string;
  closeMenu: string;
  themeNight: string;
  footerLabel: string;
  footerAbout: string;
  footerLexicon: string;
  footerSister: string;
  footerSisterNote: string;
  footerRepository: string;
  external: string;
  copyright: (year: number, name: string) => string;
}

export const SITE_STRINGS: SiteStrings = {
  brand: "Astrologie",
  brandHome: "Astrologie, accueil",
  skipToContent: "Aller au contenu",
  navLabel: "Sections du site",
  nav: {
    signs: "Signes",
    planets: "Planètes",
    houses: "Maisons",
    aspects: "Aspects",
    natal: "Votre thème",
    history: "Histoire",
    science: "Science",
    lexicon: "Lexique",
  },
  menu: "Menu",
  closeMenu: "Fermer le menu",
  themeNight: "Thème nuit",
  footerLabel: "Pied de page",
  footerAbout: "À propos, sources et crédits",
  footerLexicon: "Lexique",
  footerSister: "Astronomie",
  footerSisterNote: "le site frère, sur le système solaire et au-delà",
  footerRepository: "Code source",
  external: "site externe",
  copyright: (year, name) => `© ${year} ${name}`,
};
