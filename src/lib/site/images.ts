import type { StaticImageData } from "next/image";
import type { HistoryImageKey } from "@/content/history/types";
import type { PlanetKey, SignKey } from "@/lib/astro/keys";
import aquarius from "@/assets/images/signes/verseau.jpg";
import aries from "@/assets/images/signes/belier.jpg";
import cancer from "@/assets/images/signes/cancer.jpg";
import capricorn from "@/assets/images/signes/capricorne.jpg";
import gemini from "@/assets/images/signes/gemeaux.jpg";
import leo from "@/assets/images/signes/lion.jpg";
import libra from "@/assets/images/signes/balance.jpg";
import pisces from "@/assets/images/signes/poissons.jpg";
import sagittarius from "@/assets/images/signes/sagittaire.jpg";
import scorpio from "@/assets/images/signes/scorpion.jpg";
import taurus from "@/assets/images/signes/taureau.jpg";
import virgo from "@/assets/images/signes/vierge.jpg";
import astrolabe from "@/assets/images/histoire/astrolabe.jpg";
import cellariusHemisphere from "@/assets/images/histoire/cellarius-hemisphere-celeste.jpg";
import cellariusPlanisphere from "@/assets/images/histoire/cellarius-planisphere-ptolemeen.jpg";
import cellariusSysteme from "@/assets/images/histoire/cellarius-systeme-ptolemeen.jpg";
import flammarion from "@/assets/images/histoire/gravure-flammarion.jpg";
import hommeZodiacal from "@/assets/images/histoire/homme-zodiacal.jpg";
import mulApin from "@/assets/images/histoire/mul-apin.jpg";
import denderah from "@/assets/images/histoire/zodiaque-denderah.jpg";
import zodiacalLight from "@/assets/images/ciel/lumiere-zodiacale.jpg";
import jupiterMap from "@/assets/images/textures/jupiter.jpg";
import moonMap from "@/assets/images/textures/lune.jpg";
import marsMap from "@/assets/images/textures/mars.jpg";
import mercuryMap from "@/assets/images/textures/mercure.jpg";
import neptuneMap from "@/assets/images/textures/neptune.jpg";
import paper from "@/assets/images/textures/papier.jpg";
import plutoMap from "@/assets/images/textures/pluton.jpg";
import saturnMap from "@/assets/images/textures/saturne.jpg";
import sunMap from "@/assets/images/textures/soleil.jpg";
import uranusMap from "@/assets/images/textures/uranus.jpg";
import venusMap from "@/assets/images/textures/venus.jpg";

/*
 * Images du site, importées statiquement : Next connaît leurs dimensions, leur donne une adresse versionnée (cache
 * d'un an) et un aperçu flou. Leurs crédits et licences sont dans `src/content/images/fr.ts`.
 */

/** Cartes d'Urania's Mirror (Sidney Hall, 1825), une par signe. */
export const SIGN_IMAGES: Readonly<Record<SignKey, StaticImageData>> = {
  aries,
  taurus,
  gemini,
  cancer,
  leo,
  virgo,
  libra,
  scorpio,
  sagittarius,
  capricorn,
  aquarius,
  pisces,
};

export const HISTORY_IMAGES: Readonly<Record<HistoryImageKey, StaticImageData>> = {
  mulApin,
  denderah,
  cellariusSysteme,
  astrolabe,
  hommeZodiacal,
  cellariusPlanisphere,
  cellariusHemisphere,
  flammarion,
};

/** Cartes équirectangulaires (2:1) des astres, pour les sphères des fiches. */
export const PLANET_MAPS: Readonly<Record<PlanetKey, StaticImageData>> = {
  sun: sunMap,
  moon: moonMap,
  mercury: mercuryMap,
  venus: venusMap,
  mars: marsMap,
  jupiter: jupiterMap,
  saturn: saturnMap,
  uranus: uranusMap,
  neptune: neptuneMap,
  pluto: plutoMap,
};

export const ZODIACAL_LIGHT = zodiacalLight;

/** Grain de papier (CC0), répété sous la page. */
export const PAPER_TEXTURE = paper;
