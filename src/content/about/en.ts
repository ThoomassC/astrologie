import type { AboutContent } from "./types";

/** About page texts: approach, calculation, sources, images (the page adds the credits), privacy. */
export const ABOUT_EN: AboutContent = {
  title: "About",
  lead: "Why this site exists, how it calculates, where its texts and images come from, and what it does with your data.",
  sections: {
    demarche: {
      heading: "The approach",
      summary:
        "This site is the sibling of Astronomie, by the same author: after the astronomers' sky, the astrologers'. It presents astrology as a symbolic and cultural tradition, with its history and its rules, without claiming that it describes people or predicts the future.",
      details: [
        {
          kind: "p",
          text: "Astrology is part of our culture: you come across it in newspapers, conversations, art and even in our words. This site aims to explain it clearly, as astrologers practise it, always distinguishing what tradition says from what astronomy and the studies show.",
        },
        {
          kind: "p",
          text: "Each notion begins with a simple summary, followed by details on request. The texts are written for everyone, from around the age of 12. To see the real sky, the real distances and the real sizes, the sister site Astronomie takes over.",
        },
        {
          kind: "p",
          text: "The site's code is public: anyone can check how it calculates and report an error.",
        },
      ],
      links: [
        { label: "Astronomie, the sister site (in French)", href: "https://astronomie.vercel.app" },
        { label: "The site's source code, on GitHub", href: "https://github.com/ThoomassC/astrologie" },
      ],
    },
    calcul: {
      heading: "How the site calculates",
      summary:
        "The positions of the bodies come from the open-source library astronomy-engine, to better than one minute of arc. The site refers them to the tropical zodiac, counted from the true equinox of the date, then calculates the angles, houses and aspects, entirely in your browser.",
      details: [
        {
          kind: "list",
          items: [
            "The positions: astronomy-engine, by Donald Cross, under the MIT licence, based on the VSOP87 and NOVAS models and checked by its author against the ephemerides of the JPL and the US Naval Observatory. They are geocentric and apparent, corrected for light travel time, aberration and nutation.",
            "The zodiac: tropical, referred to the true ecliptic and the true equinox of the date. The north node is the mean node of the Moon.",
            "The houses: Placidus, equal houses, whole signs or Porphyry, as you choose. Beyond 66° of latitude, Placidus can no longer be calculated: the site then switches to Porphyry and says so.",
            "The time: local time is converted to Universal Time using the time zones of the IANA database, which your browser provides. This database only guarantees time zone history since 1970.",
            "The aspects: major and minor, with orbs of 2° to 8°, slightly wider for the Sun and the Moon.",
          ],
        },
        {
          kind: "p",
          text: "The only positions calculated in advance are the Sun's passages through the constellations, shown on the sign pages, based on the official boundaries of the International Astronomical Union.",
        },
      ],
      links: [
        { label: "astronomy-engine, on GitHub", href: "https://github.com/cosinekitty/astronomy" },
        { label: "The time zone database, IANA", href: "https://www.iana.org/time-zones" },
        { label: "International Astronomical Union", href: "https://www.iau.org/" },
        { label: "Planetary Fact Sheet, NASA", href: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/" },
      ],
    },
    sources: {
      heading: "The sources",
      summary:
        "The texts draw on reference works and websites: ancient treatises, historians' research, museums, encyclopaedias and scientific publications. Each era of the history and each topic on the Science page gives its own sources.",
      details: [
        {
          kind: "p",
          text: "For the tradition, the site follows the classical authors, starting with Ptolemy's Tetrabiblos and Manilius's Astronomica, and the handbooks derived from them. For the history, it draws on the work of historians of science, on the museums that hold the objects and on encyclopaedias.",
        },
        {
          kind: "p",
          text: "For astronomy, it relies on NASA data, on the International Astronomical Union's constellation boundaries and on the worked examples in Jean Meeus's handbook, Astronomical Algorithms. For the scientific studies, it refers to the original articles, such as Shawn Carlson's, published in Nature in 1985.",
        },
      ],
      links: [
        {
          label: "Ptolemy, Tetrabiblos, translated by F. E. Robbins, LacusCurtius",
          href: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Ptolemy/Tetrabiblos/home.html",
        },
        { label: "History of astrology, Wikipedia", href: "https://en.wikipedia.org/wiki/History_of_astrology" },
        {
          label: "Science and Pseudo-Science, Stanford Encyclopedia of Philosophy",
          href: "https://plato.stanford.edu/entries/pseudo-science/",
        },
        { label: "Astrology and science, Wikipedia", href: "https://en.wikipedia.org/wiki/Astrology_and_science" },
      ],
    },
    images: {
      heading: "The images",
      summary:
        "The images come from public collections and free image libraries: old public-domain engravings, photographs of museum objects, maps of the planets and a photograph of the sky under a Creative Commons licence. The full list of credits follows, image by image.",
      details: [
        {
          kind: "p",
          text: "The twelve signs are illustrated by the cards of Urania's Mirror, engraved by Sidney Hall and published in London around 1825, from the Library of Congress copy restored by Adam Cuerden. The history plates, tablet, bas-relief, illumination, engravings and astrolabe, come from Wikimedia Commons, often photographed in the museums that hold them.",
        },
        {
          kind: "p",
          text: "The spheres of the bodies are wrapped in maps from Solar System Scope, based on NASA data, and in a map of Pluto taken by the New Horizons probe. The zodiacal light was photographed for ESO at the Paranal Observatory, and the paper grain comes from ambientCG.",
        },
        {
          kind: "p",
          text: "The public domain and the CC0 licence allow any reuse; the CC BY 4.0 licence requires the author to be credited, which the list below does.",
        },
      ],
      links: [
        { label: "Wikimedia Commons", href: "https://commons.wikimedia.org/wiki/Main_Page" },
        { label: "Solar System Scope, planet maps", href: "https://www.solarsystemscope.com/textures/" },
        { label: "ESO images", href: "https://www.eso.org/public/images/" },
        { label: "ambientCG", href: "https://ambientcg.com/" },
        { label: "Library of Congress", href: "https://www.loc.gov/" },
      ],
    },
    confidentialite: {
      heading: "Privacy",
      summary:
        "The site sets no cookies, does not measure its audience and asks for no account. The birth chart is calculated in your browser: the date, time and place of birth are neither sent nor kept.",
      details: [
        {
          kind: "p",
          text: "Birth data does not leave your device: it appears neither in the page address nor in the browser's storage, and disappears when you close or reload the page. The calculation engine is a simple file, downloaded from the site, which carries nothing away.",
        },
        {
          kind: "p",
          text: "As with any site, your browser requests the pages from the server that hosts them; these requests never contain birth data. The only thing kept, in your browser, is your choice of day or night theme, if you have changed it: switching back to the system theme erases it.",
        },
      ],
      links: [],
    },
  },
};
