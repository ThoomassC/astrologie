import type { ImageCredit, ImagesContent } from "./types";

const PD = { license: "Public domain", licenseHref: "https://creativecommons.org/publicdomain/mark/1.0/deed.en" } as const;
const CC0 = { license: "CC0 1.0", licenseHref: "https://creativecommons.org/publicdomain/zero/1.0/deed.en" } as const;
const CC_BY = { license: "CC BY 4.0", licenseHref: "https://creativecommons.org/licenses/by/4.0/deed.en" } as const;

const URANIA = "Urania's Mirror, London, 1825, engraved and hand-coloured plate; Library of Congress copy, digital restoration by Adam Cuerden";
const COMMONS = "https://commons.wikimedia.org/wiki/File:";

function urania(title: string, file: string): ImageCredit {
  return { title, author: "Sidney Hall", origin: URANIA, ...PD, pageHref: `${COMMONS}${file}` };
}

const SOLAR_SYSTEM_SCOPE: Omit<ImageCredit, "title"> = {
  author: "Solar System Scope",
  origin: "based on NASA data; resized to 1,024 pixels wide",
  ...CC_BY,
  pageHref: "https://www.solarsystemscope.com/textures/",
};

export const IMAGES_EN: ImagesContent = {
  signs: {
    aries: urania("Aries and Musca Borealis", "Sidney_Hall_-_Urania%27s_Mirror_-_Aries_and_Musca_Borealis.jpg"),
    taurus: urania("Taurus", "Sidney_Hall_-_Urania%27s_Mirror_-_Taurus.jpg"),
    gemini: urania("Gemini", "Sidney_Hall_-_Urania%27s_Mirror_-_Gemini.jpg"),
    cancer: urania("Cancer", "Sidney_Hall_-_Urania%27s_Mirror_-_Cancer.jpg"),
    leo: urania("Leo Major and Leo Minor", "Sidney_Hall_-_Urania%27s_Mirror_-_Leo_Major_and_Leo_Minor.jpg"),
    virgo: urania("Virgo", "Sidney_Hall_-_Urania%27s_Mirror_-_Virgo.jpg"),
    libra: urania("Libra", "Sidney_Hall_-_Urania%27s_Mirror_-_Libra.jpg"),
    scorpio: urania("Scorpio", "Sidney_Hall_-_Urania%27s_Mirror_-_Scorpio.jpg"),
    sagittarius: urania(
      "Sagittarius and Corona Australis, Microscopium, and Telescopium",
      "Sidney_Hall_-_Urania%27s_Mirror_-_Sagittarius_and_Corona_Australis,_Microscopium,_and_Telescopium.png",
    ),
    capricorn: urania("Capricornus", "Sidney_Hall_-_Urania%27s_Mirror_-_Capricornus.jpg"),
    aquarius: urania(
      "Aquarius, Piscis Australis & Ballon Aerostatique",
      "Sidney_Hall_-_Urania%27s_Mirror_-_Aquarius,_Piscis_Australis_%26_Ballon_Aerostatique.jpg",
    ),
    pisces: urania("Pisces", "Sidney_Hall_-_Urania%27s_Mirror_-_Pisces.jpg"),
  },
  history: {
    mulApin: {
      title: "MUL.APIN tablet (VAT 9412)",
      author: "Photograph by Bautsch",
      origin: "Mesopotamia, 1st millennium BC; Vorderasiatisches Museum, Berlin",
      ...CC0,
      pageHref: `${COMMONS}MUP.APIN.VAT09412.P1078712.jpg`,
    },
    denderah: {
      title: "Dendera zodiac",
      author: "Photograph by Shonagon (2022)",
      origin: "Ptolemaic Egypt, 1st century BC; Louvre Museum, D 38 (E 13482)",
      ...CC0,
      pageHref: `${COMMONS}Zodiaque_de_Dend%C3%A9ra_-_Mus%C3%A9e_du_Louvre_Antiquit%C3%A9s_Egyptiennes_D_38_;_E_13482.jpg`,
    },
    cellariusSysteme: {
      title: "Scenographia systematis mundani Ptolemaici",
      author: "Andreas Cellarius",
      origin: "Harmonia Macrocosmica, Amsterdam, 1660 (1661 edition)",
      ...PD,
      pageHref: `${COMMONS}Cellarius_Harmonia_Macrocosmica_-_Scenographia_Systematis_mundani_Ptolemaici.jpg`,
    },
    astrolabe: {
      title: "Planispheric astrolabe",
      author: "Muhammad Zaman al-Munajjim al-Asturlabi",
      origin: "Iran, 1654–1655, brass; The Metropolitan Museum of Art, New York (Open Access)",
      ...CC0,
      pageHref: `${COMMONS}Planispheric_Astrolabe_MET_DP170382.jpg`,
    },
    hommeZodiacal: {
      title: "The Anatomical Man",
      author: "The Limbourg brothers",
      origin: "Très Riches Heures du duc de Berry, c. 1411–1416; Chantilly, Musée Condé, MS 65, fol. 14v",
      ...PD,
      pageHref: `${COMMONS}Anatomical_Man.jpg`,
    },
    cellariusPlanisphere: {
      title: "Planisphaerium Ptolemaicum",
      author: "Andreas Cellarius",
      origin: "Harmonia Macrocosmica, Amsterdam, 1660 (1661 edition)",
      ...PD,
      pageHref: `${COMMONS}Cellarius_Harmonia_Macrocosmica_-_Planisphaerium_Ptolemaicum.jpg`,
    },
    cellariusHemisphere: {
      title: "Coeli stellati christiani haemisphaerium prius",
      author: "Andreas Cellarius",
      origin: "Harmonia Macrocosmica, Amsterdam, 1660 (1661 edition)",
      ...PD,
      pageHref: `${COMMONS}Cellarius_Harmonia_Macrocosmica_-_Coeli_Stellati_Christiani_Haemisphaerium_Prius.jpg`,
    },
    flammarion: {
      title: "The so-called Flammarion engraving",
      author: "Anonymous engraver",
      origin: "Camille Flammarion, L'Atmosphère: météorologie populaire, Paris, 1888, p. 163",
      ...PD,
      pageHref: `${COMMONS}Flammarion.jpg`,
    },
  },
  planetMaps: {
    sun: { title: "The Sun (2k_sun)", ...SOLAR_SYSTEM_SCOPE },
    moon: { title: "The Moon", ...SOLAR_SYSTEM_SCOPE },
    mercury: { title: "Mercury", ...SOLAR_SYSTEM_SCOPE },
    venus: { title: "Venus", ...SOLAR_SYSTEM_SCOPE },
    mars: { title: "Mars", ...SOLAR_SYSTEM_SCOPE },
    jupiter: { title: "Jupiter", ...SOLAR_SYSTEM_SCOPE },
    saturn: { title: "Saturn", ...SOLAR_SYSTEM_SCOPE },
    uranus: { title: "Uranus", ...SOLAR_SYSTEM_SCOPE },
    neptune: { title: "Neptune", ...SOLAR_SYSTEM_SCOPE },
    pluto: {
      title: "Global colour map of Pluto",
      author: "NASA, Johns Hopkins University Applied Physics Laboratory, Southwest Research Institute",
      origin: "New Horizons probe, 2017; the southern band, never photographed, remains black",
      ...PD,
      pageHref: `${COMMONS}Pluto_color_mapmosaic.jpg`,
    },
  },
  zodiacalLight: {
    title: "Zodiacal light at Paranal",
    author: "A. Fitzsimmons / ESO",
    origin: "Paranal Observatory, Chile",
    ...CC_BY,
    pageHref: `${COMMONS}Zodiacal_light_at_Paranal_(img_3336-cc).jpg`,
    alt: "Night sky above the Paranal Observatory: a cone of pale light rises from the horizon, along the zodiac.",
    caption: "Zodiacal light: dust in the Solar System, lit by the Sun, traces the band of the zodiac across the sky.",
  },
  paper: {
    title: "Paper003",
    author: "Lennart Demes, ambientCG",
    origin: "paper texture, reduced to 1,024 pixels",
    ...CC0,
    pageHref: "https://ambientcg.com/view?id=Paper003",
  },
};

/** Image credit line, ready to display: “Sidney Hall, “Taurus”, Urania's Mirror… Public domain.” */
export function creditLineEn(credit: ImageCredit): string {
  return `${credit.author}, “${credit.title}”, ${credit.origin}. ${credit.license}.`;
}
