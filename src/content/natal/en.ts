import type { NatalContent } from "./types";

/** Birth chart page texts: introduction, method, reading, accuracy, privacy. */
export const NATAL_EN: NatalContent = {
  title: "Your birth chart",
  lead: "The map of the sky at the moment and place of your birth, calculated in your browser and read with the keywords of the astrological tradition.",
  intro: {
    summary:
      "A birth chart shows the sky as it would have been seen from the place of birth, at the moment of birth: the positions of the Sun, the Moon and the planets in the signs, the twelve houses and the aspects. It is the basis of all individual astrology.",
    details: [
      {
        kind: "p",
        text: "Enter the date, time and place of birth: the calculator draws the chart wheel, gives the positions and offers a guided reading. If the time is unknown, the positions are calculated for noon, with no Ascendant or houses; the sign of the Moon, which changes roughly every two and a half days, may then remain uncertain.",
      },
      {
        kind: "p",
        text: "For astrologers, a chart is read as a whole, in which no element counts on its own. This site shows how it is built and what tradition reads in it; it does not claim that it describes a person or foretells their future.",
      },
    ],
  },
  method: {
    heading: "How a chart is built",
    summary:
      "Three pieces of data are enough: the date, time and place of birth. From them the calculation derives the exact moment in Universal Time, the positions of the bodies in the tropical zodiac, then the angles, the houses and the aspects.",
    details: [
      {
        kind: "list",
        items: [
          "The time: local time is converted to Universal Time using the time zones of the IANA database, which your browser knows, daylight saving time included. An hour skipped in spring or repeated in autumn is flagged.",
          "The bodies: their longitude on the ecliptic is calculated for that moment, as seen from the centre of the Earth, in the tropical zodiac, which starts from the vernal point of the date, the position of the Sun at the March equinox.",
          "The angles: the local sidereal time gives the Ascendant, the degree rising in the east, and the Midheaven, the degree culminating on the meridian; the Descendant and the Imum Coeli lie opposite them.",
          "The houses: their twelve cusps depend on the chosen system, Placidus, equal houses, whole signs or Porphyry. Beyond 66° of latitude, Placidus can no longer be calculated and the site switches to Porphyry.",
          "The aspects: the site measures the distance between each pair of bodies, Ascendant and Midheaven included, and keeps the notable angles to within a few degrees, a tolerated margin called the orb, wider for the Sun and the Moon.",
        ],
      },
      {
        kind: "p",
        text: "The calculation covers births from 1800 to 2100. It also gives the Moon's north node and the distribution of the bodies among the elements and modalities, which astrologers look at to bring out a dominant.",
      },
    ],
  },
  reading: {
    heading: "Reading a position",
    summary:
      "Tradition reads each position like a sentence: the planet says what it is about, the sign how, the house where, and the aspects with whom. The site's guided reading puts these keywords together, without interpreting them.",
    details: [
      {
        kind: "list",
        items: [
          "The planet answers “what?”: a function or a need. The Sun represents identity, the Moon the emotions, Mercury thought, Venus love and taste, Mars action.",
          "The sign answers “how?”: the colour that function takes on. According to tradition, Mars in Aries acts with drive and frankness, Mars in Libra with concern for others.",
          "The house answers “where?”: the area of life in which the function is expressed first, partnership for the 7th house, career for the 10th.",
          "The aspects answer “with whom?”: the links between two functions, harmonious for a trine or a sextile, tense for a square or an opposition.",
        ],
      },
      {
        kind: "p",
        text: "An astrologer does not stop there: they weigh up the whole chart, the rulers of the signs and houses, the dignities, the dominant bodies, and each school has its own rules. The site's sentences, for their part, string together the keywords of tradition, position by position. It is an exercise in vocabulary, not a description of the person.",
      },
    ],
  },
  accuracy: {
    heading: "Accuracy of the calculation and of the time",
    summary:
      "The calculation of the positions is far more precise than the time of birth. A four-minute error in the time shifts the Ascendant by about one degree, and the Moon moves about half a degree an hour.",
    details: [
      {
        kind: "p",
        text: "The positions come from astronomy-engine, an open-source library that its author checks against the reference ephemerides of NASA's JPL and of the US Naval Observatory: it guarantees better than one minute of arc. The site's tests compare it with the examples in Jean Meeus's handbook, to within ten seconds of arc or so at most.",
      },
      {
        kind: "p",
        text: "The time of birth is the fragile piece of data. The sky turns by one degree in about four minutes: a time rounded to the quarter hour can shift the Ascendant by several degrees, or make a cusp change sign. In France, the time appears on the birth certificate; you can find it on the full copy, which you request from the town hall of the place of birth.",
      },
      {
        kind: "p",
        text: "Old time zones call for caution. The IANA database only guarantees time zone history since 1970: before then, some cities follow the zone of another, Montreal that of Toronto. And before the law of 14 March 1891, every French town lived by its own local solar time, whereas the database applies Paris time to the whole country: in Brest, local time was 27 minutes behind. The form then lets you enter the offset by hand.",
      },
    ],
  },
  privacy: {
    heading: "Your data stays with you",
    summary:
      "The chart is calculated in your browser: the date, time and place of birth are not sent to any server and are not stored anywhere. The site sets no cookies and does not measure its audience.",
    details: [
      {
        kind: "p",
        text: "The form is not connected to any server: what you enter does not leave your device, and appears neither in the page address nor in the browser's storage. Closing or reloading the page erases everything.",
      },
      {
        kind: "p",
        text: "The calculation engine is a file that the browser downloads from the site at the first calculation, like an image: it carries no data away. As with any site, your browser requests the pages from the server that hosts them, but these requests never contain a date or place of birth.",
      },
      {
        kind: "p",
        text: "The only thing the site keeps, in your browser, is your choice of day or night theme, if you have changed it.",
      },
    ],
  },
};
