import type { Locale } from "@/i18n/locales";
import type { SectionKey } from "@/lib/site/routes";

/** Textes de la barre, du menu, des bascules de thème et de langue, et du pied de page. */
export interface SiteStrings {
  /** Nom du site, le même dans les deux langues (comme « Astronomie », le site frère). */
  brand: string;
  brandHome: string;
  skipToContent: string;
  navLabel: string;
  nav: Readonly<Partial<Record<SectionKey, string>>>;
  menu: string;
  closeMenu: string;
  themeNight: string;
  /** Nom de cette version du site, dans sa langue : la bascule de l'autre langue l'affiche (« English version »). */
  languageVersion: string;
  /** Titre du groupe de la langue, dans le menu replié. */
  language: string;
  footerLabel: string;
  footerAbout: string;
  footerLexicon: string;
  footerSister: string;
  footerSisterNote: string;
  footerRepository: string;
  external: string;
  copyright: (year: number, name: string) => string;
}

export const SITE_STRINGS: Readonly<Record<Locale, SiteStrings>> = {
  fr: {
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
    languageVersion: "Version française",
    language: "Langue",
    footerLabel: "Pied de page",
    footerAbout: "À propos, sources et crédits",
    footerLexicon: "Lexique",
    footerSister: "Astronomie",
    footerSisterNote: "le site frère, sur le système solaire et au-delà",
    footerRepository: "Code source",
    external: "site externe",
    copyright: (year, name) => `© ${year} ${name}`,
  },
  en: {
    brand: "Astrologie",
    brandHome: "Astrologie, home",
    skipToContent: "Skip to content",
    navLabel: "Site sections",
    nav: {
      signs: "Signs",
      planets: "Planets",
      houses: "Houses",
      aspects: "Aspects",
      natal: "Your chart",
      history: "History",
      science: "Science",
      lexicon: "Glossary",
    },
    menu: "Menu",
    closeMenu: "Close the menu",
    themeNight: "Night theme",
    languageVersion: "English version",
    language: "Language",
    footerLabel: "Footer",
    footerAbout: "About, sources and credits",
    footerLexicon: "Glossary",
    footerSister: "Astronomie",
    footerSisterNote: "the sister site, on the solar system and beyond",
    footerRepository: "Source code",
    external: "external site",
    copyright: (year, name) => `© ${year} ${name}`,
  },
};
