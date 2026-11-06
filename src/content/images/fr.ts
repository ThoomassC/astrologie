import type { ImageCredit, ImagesContent } from "./types";

const PD = { license: "Domaine public", licenseHref: "https://creativecommons.org/publicdomain/mark/1.0/deed.fr" } as const;
const CC0 = { license: "CC0 1.0", licenseHref: "https://creativecommons.org/publicdomain/zero/1.0/deed.fr" } as const;
const CC_BY = { license: "CC BY 4.0", licenseHref: "https://creativecommons.org/licenses/by/4.0/deed.fr" } as const;

const URANIA = "Urania's Mirror, Londres, 1825, planche gravée et coloriée à la main ; exemplaire de la Library of Congress, restauration numérique d'Adam Cuerden";
const COMMONS = "https://commons.wikimedia.org/wiki/File:";

function urania(title: string, file: string): ImageCredit {
  return { title, author: "Sidney Hall", origin: URANIA, ...PD, pageHref: `${COMMONS}${file}` };
}

const SOLAR_SYSTEM_SCOPE: Omit<ImageCredit, "title"> = {
  author: "Solar System Scope",
  origin: "d'après des données de la NASA ; redimensionnée à 1 024 pixels de large",
  ...CC_BY,
  pageHref: "https://www.solarsystemscope.com/textures/",
};

export const IMAGES_FR: ImagesContent = {
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
      title: "Tablette MUL.APIN (VAT 9412)",
      author: "Photographie de Bautsch",
      origin: "Mésopotamie, Ier millénaire av. J.-C. ; Vorderasiatisches Museum, Berlin",
      ...CC0,
      pageHref: `${COMMONS}MUP.APIN.VAT09412.P1078712.jpg`,
    },
    denderah: {
      title: "Zodiaque de Dendérah",
      author: "Photographie de Shonagon (2022)",
      origin: "Égypte ptolémaïque, Ier siècle av. J.-C. ; musée du Louvre, D 38 (E 13482)",
      ...CC0,
      pageHref: `${COMMONS}Zodiaque_de_Dend%C3%A9ra_-_Mus%C3%A9e_du_Louvre_Antiquit%C3%A9s_Egyptiennes_D_38_;_E_13482.jpg`,
    },
    cellariusSysteme: {
      title: "Scenographia systematis mundani Ptolemaici",
      author: "Andreas Cellarius",
      origin: "Harmonia Macrocosmica, Amsterdam, 1660 (éd. de 1661)",
      ...PD,
      pageHref: `${COMMONS}Cellarius_Harmonia_Macrocosmica_-_Scenographia_Systematis_mundani_Ptolemaici.jpg`,
    },
    astrolabe: {
      title: "Astrolabe planisphérique",
      author: "Muhammad Zaman al-Munajjim al-Asturlabi",
      origin: "Iran, 1654-1655, laiton ; The Metropolitan Museum of Art, New York (Open Access)",
      ...CC0,
      pageHref: `${COMMONS}Planispheric_Astrolabe_MET_DP170382.jpg`,
    },
    hommeZodiacal: {
      title: "L'Homme anatomique",
      author: "Frères de Limbourg",
      origin: "Très Riches Heures du duc de Berry, vers 1411-1416 ; Chantilly, musée Condé, ms. 65, f. 14v",
      ...PD,
      pageHref: `${COMMONS}Anatomical_Man.jpg`,
    },
    cellariusPlanisphere: {
      title: "Planisphaerium Ptolemaicum",
      author: "Andreas Cellarius",
      origin: "Harmonia Macrocosmica, Amsterdam, 1660 (éd. de 1661)",
      ...PD,
      pageHref: `${COMMONS}Cellarius_Harmonia_Macrocosmica_-_Planisphaerium_Ptolemaicum.jpg`,
    },
    cellariusHemisphere: {
      title: "Coeli stellati christiani haemisphaerium prius",
      author: "Andreas Cellarius",
      origin: "Harmonia Macrocosmica, Amsterdam, 1660 (éd. de 1661)",
      ...PD,
      pageHref: `${COMMONS}Cellarius_Harmonia_Macrocosmica_-_Coeli_Stellati_Christiani_Haemisphaerium_Prius.jpg`,
    },
    flammarion: {
      title: "Gravure dite de Flammarion",
      author: "Graveur anonyme",
      origin: "Camille Flammarion, L'Atmosphère : météorologie populaire, Paris, 1888, p. 163",
      ...PD,
      pageHref: `${COMMONS}Flammarion.jpg`,
    },
  },
  planetMaps: {
    sun: { title: "Le Soleil (2k_sun)", ...SOLAR_SYSTEM_SCOPE },
    moon: { title: "La Lune", ...SOLAR_SYSTEM_SCOPE },
    mercury: { title: "Mercure", ...SOLAR_SYSTEM_SCOPE },
    venus: { title: "Vénus", ...SOLAR_SYSTEM_SCOPE },
    mars: { title: "Mars", ...SOLAR_SYSTEM_SCOPE },
    jupiter: { title: "Jupiter", ...SOLAR_SYSTEM_SCOPE },
    saturn: { title: "Saturne", ...SOLAR_SYSTEM_SCOPE },
    uranus: { title: "Uranus", ...SOLAR_SYSTEM_SCOPE },
    neptune: { title: "Neptune", ...SOLAR_SYSTEM_SCOPE },
    pluto: {
      title: "Carte globale en couleurs de Pluton",
      author: "NASA, Johns Hopkins University Applied Physics Laboratory, Southwest Research Institute",
      origin: "sonde New Horizons, 2017 ; la bande sud, jamais photographiée, reste noire",
      ...PD,
      pageHref: `${COMMONS}Pluto_color_mapmosaic.jpg`,
    },
  },
  zodiacalLight: {
    title: "Zodiacal light at Paranal",
    author: "A. Fitzsimmons / ESO",
    origin: "Observatoire du Paranal, Chili",
    ...CC_BY,
    pageHref: `${COMMONS}Zodiacal_light_at_Paranal_(img_3336-cc).jpg`,
    alt: "Ciel nocturne au-dessus de l'observatoire du Paranal : un cône de lumière pâle monte de l'horizon, le long du zodiaque.",
    caption: "La lumière zodiacale : la poussière du système solaire, éclairée par le Soleil, dessine dans le ciel la bande du zodiaque.",
  },
  paper: {
    title: "Paper003",
    author: "Lennart Demes, ambientCG",
    origin: "texture de papier, réduite à 1 024 pixels",
    ...CC0,
    pageHref: "https://ambientcg.com/view?id=Paper003",
  },
};

/** Ligne de crédit d'une image, prête à afficher : « Sidney Hall, « Taurus », Urania's Mirror… Domaine public. » */
export function creditLine(credit: ImageCredit): string {
  return `${credit.author}, « ${credit.title} », ${credit.origin}. ${credit.license}.`;
}
