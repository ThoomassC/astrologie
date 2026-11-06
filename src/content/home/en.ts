import type { HomeContent } from "./types";

/** Home page texts: astrology in brief, the doors to the sections, the science note, the frieze of signs. */
export const HOME_EN: HomeContent = {
  essentialsTitle: "Astrology in brief",
  essentials: [
    {
      heading: "A tradition from Babylon",
      summary:
        "Astrology is a tradition that links the positions of the heavenly bodies to human life. Born in Mesopotamia more than three thousand years ago, it was handed down by the Greeks, the Romans, the scholars of the Islamic world and then Europe, right up to the present day.",
      details: [
        {
          kind: "p",
          text: "The first astrologers were scribes in Babylon and Assyria. They read the sky as a message addressed to the king: an eclipse or the brightness of a planet foretold a war, an epidemic or a good harvest. The individual horoscope, calculated for a birth, only appears at the end of the 5th century BC.",
        },
        {
          kind: "p",
          text: "In Egypt under Greek kings, around the 2nd or 1st century BC, this heritage blended with Greek geometry and the Egyptian decans: this was the birth of horoscopic astrology, with the Ascendant and the houses. For centuries, astronomy and astrology advanced together; they parted ways in the 17th century, with modern science.",
        },
        {
          kind: "p",
          text: "This site presents astrology as a symbolic and cultural tradition. It explains what astrologers say, without claiming that the heavenly bodies describe a person or predict the future.",
        },
      ],
    },
    {
      heading: "The zodiac and the twelve signs",
      summary:
        "The zodiac is the band of sky through which the Sun, the Moon and the planets pass. Astrologers divide it into twelve signs of 30°, from Aries to Pisces, starting from the March equinox.",
      details: [
        {
          kind: "p",
          text: "Seen from the Earth, the Sun seems to travel round the sky in a year, in front of the stars: its path is called the ecliptic. The Moon and the planets always stay close to this great circle, in a band the Greeks named the zodiac, from a word evoking little animals, because most of its figures are animals.",
        },
        {
          kind: "p",
          text: "Tradition associates each sign with an element (fire, earth, air or water), a modality (cardinal, fixed or mutable) and a ruling planet. The zodiac of Western astrologers is tied to the seasons: because of the precession of the equinoxes, it no longer coincides with the constellations that bear the same names.",
        },
      ],
    },
    {
      heading: "Planets, houses and aspects",
      summary:
        "In a chart, each body stands for a function: identity for the Sun, emotions for the Moon, thought for Mercury. The houses divide the local sky into twelve areas of life, and the aspects measure the angles between the bodies.",
      details: [
        {
          kind: "list",
          items: [
            "The bodies: the Sun and the Moon, which tradition calls the luminaries; Mercury, Venus, Mars, Jupiter and Saturn, visible to the naked eye and known since Antiquity; Uranus, Neptune and Pluto, discovered by telescope in 1781, 1846 and 1930.",
            "The houses: twelve sectors counted from the Ascendant, the degree of the zodiac rising in the east at the moment of birth. Each corresponds to an area of life, from resources to partnership and career.",
            "The aspects: notable angles between two bodies, such as the conjunction (0°), the sextile (60°), the square (90°), the trine (120°) or the opposition (180°), which tradition calls harmonious or tense.",
          ],
        },
        {
          kind: "p",
          text: "Astrologers often sum up their method like this: the planet says what it is about, the sign says how, the house says where, and the aspects say which other bodies it is in dialogue with.",
        },
      ],
    },
    {
      heading: "The birth chart",
      summary:
        "The birth chart, or natal chart, is the map of the sky at the moment and place of a birth. This site calculates it in your browser, from the date, time and place, without sending or keeping anything.",
      details: [
        {
          kind: "p",
          text: "It is drawn as a wheel: the circle of the zodiac, the ten bodies in their places, the twelve houses and the lines of the aspects. The time of birth matters a great deal: the Ascendant changes sign every two hours on average, and the Moon moves about half a degree an hour.",
        },
        {
          kind: "p",
          text: "For astrologers, this drawing is a symbolic portrait. For science, no study has shown that it describes a personality better than chance. The birth chart page explains how it is calculated and how tradition reads it.",
        },
      ],
    },
  ],
  doors: {
    signs: {
      title: "The twelve signs",
      text: "From Aries to Pisces, what tradition associates with each sign, and what the real sky shows.",
    },
    planets: {
      title: "The planets",
      text: "From the Sun to Pluto, the role of each body in a chart, its myths and its astronomical reality.",
    },
    houses: {
      title: "The houses",
      text: "Twelve areas of life, counted from the Ascendant, and several ways of dividing them.",
    },
    aspects: {
      title: "The aspects",
      text: "Conjunction, square, trine: the angles between the bodies and what astrologers read in them.",
    },
    natal: {
      title: "Your birth chart",
      text: "The map of the sky at your birth, calculated in your browser, with a guided reading of the keywords of tradition.",
    },
    history: {
      title: "History",
      text: "From Babylon to phone apps, the history of a tradition that has passed through empires, religions and sciences.",
    },
    science: {
      title: "What science says",
      text: "Precession, Ophiuchus, double-blind tests: what the studies have measured, and why astrology remains a cultural phenomenon.",
    },
  },
  scienceNote: {
    title: "What the studies say",
    text: "Since the middle of the 20th century, dozens of studies have looked for a link between the positions of the heavenly bodies at birth and personality or destiny: none has withstood independent checks, and no known force could explain one. This site therefore presents astrology as a symbolic tradition, rich in history and culture, and not as a science.",
  },
  signsFrieze: {
    title: "The zodiac of Urania's Mirror",
    lead: "Each sign is illustrated by a card from Urania's Mirror, a boxed set of 32 star charts engraved by Sidney Hall and published in London around 1825, whose stars, pierced through the card, shone when held up to a lamp.",
  },
};
