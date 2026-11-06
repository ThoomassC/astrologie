import type { SignsContent } from "./types";

/** Texts for the twelve signs, their index page and the shared notions (elements, modalities, polarity, cusps). */
export const SIGNS_EN: SignsContent = {
  index: {
    title: "The twelve signs",
    lead: "From Aries to Pisces, twelve signs of 30° share the circle of the zodiac: here is what astrological tradition associates with them, and what the real sky shows.",
    intro: {
      summary:
        "A zodiac sign is a 30° portion of the ecliptic, the path the Sun seems to travel across the sky in a year. The zodiac used by Western astrologers, known as tropical, starts from the March equinox; it no longer matches the constellations that bear the same names.",
      details: [
        {
          kind: "p",
          text: "Seen from the Earth, the Sun appears to go round the sky in a year, against a backdrop of stars. The astronomers of Babylon, then the Greeks, divided this great circle into twelve equal parts and named them after the neighbouring constellations: the Sun thus spends about a month in each sign.",
        },
        {
          kind: "p",
          text: "The tropical zodiac is set by the seasons. Its starting point, 0° Aries, is the Sun's position at the March equinox, called the vernal point. Cancer begins at the June solstice, Libra at the September equinox and Capricorn at the December solstice.",
        },
        {
          kind: "p",
          text: "The constellations, on the other hand, are star patterns of very unequal sizes, whose boundaries were fixed by the International Astronomical Union in 1930. The Sun passes through thirteen of them, including Ophiuchus. Above all, the precession of the equinoxes, a slow movement of the Earth's axis, has shifted the signs by about one constellation since antiquity. Indian astrology, for its part, uses a sidereal zodiac, aligned with the stars.",
        },
      ],
    },
  },

  elements: {
    fire: {
      heading: "Fire",
      summary:
        "Aries, Leo and Sagittarius make up the fire triplicity. Tradition associates this element with drive, enthusiasm, courage and the need to act.",
      details: [
        {
          kind: "p",
          text: "The four elements come from Greek philosophy: Empedocles saw fire, air, water and earth as the roots of all things, and Aristotle gave them qualities. Fire is hot and dry, like a flame that rises and consumes.",
        },
        {
          kind: "p",
          text: "Astrologers read in the fire signs an energy that faces forward: spontaneity, confidence, a taste for adventure and creation. Aries would be the spark, Leo the glowing hearth, Sagittarius the spreading blaze. Their supposed excesses: impatience and a quick temper.",
        },
      ],
      keywords: ["drive", "enthusiasm", "courage", "spontaneity", "inspiration"],
    },
    earth: {
      heading: "Earth",
      summary:
        "Taurus, Virgo and Capricorn make up the earth triplicity. Tradition associates it with a sense of the concrete, patience and a taste for building on solid ground.",
      details: [
        {
          kind: "p",
          text: "In ancient physics, earth is cold and dry: it is the densest element, the one that gives form and stability. For astrologers, the earth signs are those of matter, the body, work and practical realities.",
        },
        {
          kind: "p",
          text: "Taurus would be the fertile soil, Virgo the tilled and harvested field, Capricorn the mountain and the rock. They are credited with caution, perseverance and reliability; their downside would be a certain slowness, even a fear of change.",
        },
      ],
      keywords: ["a sense of the concrete", "patience", "stability", "practicality", "perseverance"],
    },
    air: {
      heading: "Air",
      summary:
        "Gemini, Libra and Aquarius make up the air triplicity. Tradition associates this element with ideas, speech, exchange and relationships.",
      details: [
        {
          kind: "p",
          text: "In Aristotle's physics, air is hot and moist: it circulates, connects and fills space. The air signs are those of thought and communication, of everything that passes from one person to another.",
        },
        {
          kind: "p",
          text: "Gemini would be the lively breeze of conversation, Libra the shared air of relationships, Aquarius the strong wind of collective ideas. Astrologers credit them with curiosity, sociability and open-mindedness; their failing would be to live in ideas more than in emotions.",
        },
      ],
      keywords: ["curiosity", "exchange", "sociability", "reflection", "lightness"],
    },
    water: {
      heading: "Water",
      summary:
        "Cancer, Scorpio and Pisces make up the water triplicity. Tradition associates this element with sensitivity, emotion, intuition and imagination.",
      details: [
        {
          kind: "p",
          text: "For the ancients, water is cold and moist: it takes the shape of its container, seeps in everywhere and connects whatever it touches. The water signs are those of emotional life, memory and deep bonds.",
        },
        {
          kind: "p",
          text: "Cancer would be the spring and the home, Scorpio the deep and secret water, Pisces the shoreless ocean. Astrologers credit them with empathy, intuition and creativity; their downside would be a great openness to other people's moods and difficulty in protecting themselves.",
        },
      ],
      keywords: ["sensitivity", "emotion", "intuition", "empathy", "imagination"],
    },
  },

  modalities: {
    cardinal: {
      heading: "The cardinal signs",
      summary:
        "Aries, Cancer, Libra and Capricorn each open a season. Tradition sees in them initiative, impetus and the art of getting things started.",
      details: [
        {
          kind: "p",
          text: "They begin at the equinoxes and solstices: spring with Aries, summer with Cancer, autumn with Libra, winter with Capricorn, in the northern hemisphere. South of the equator, the seasons are reversed, but the signs keep their names and their symbolism.",
        },
        {
          kind: "p",
          text: "Ptolemy, in the 2nd century, called Cancer and Capricorn “tropical” signs, because the Sun turns back there, and Aries and Libra “equinoctial” signs. Modern astrologers associate them with a taste for action and beginnings; their failing would be to start more than they finish.",
        },
      ],
      keywords: ["initiative", "impetus", "a sense of action", "enterprise"],
    },
    fixed: {
      heading: "The fixed signs",
      summary:
        "Taurus, Leo, Scorpio and Aquarius sit at the heart of the seasons. Tradition associates them with constancy, stability and tenacity.",
      details: [
        {
          kind: "p",
          text: "When the Sun passes through them, the season is well established: spring is in bloom, summer blazes, autumn strips the trees, winter freezes, at least in the northern hemisphere. Ptolemy called them “solid”, because the season is then at its most pronounced.",
        },
        {
          kind: "p",
          text: "Astrologers see in the fixed signs an energy that lasts and protects what has been started: loyalty, perseverance, the ability to concentrate. Their supposed downside: stubbornness and resistance to change.",
        },
      ],
      keywords: ["constancy", "stability", "tenacity", "loyalty", "concentration"],
    },
    mutable: {
      heading: "The mutable signs",
      summary:
        "Gemini, Virgo, Sagittarius and Pisces each close a season and prepare the next. Tradition sees in them adaptation, flexibility and movement.",
      details: [
        {
          kind: "p",
          text: "They accompany the transitions: the end of spring, summer, autumn and winter in the northern hemisphere. Ptolemy called them “bicorporeal”, two-bodied signs, because they share in two seasons; their figures are indeed often double, like the two twins, the two fish or the centaur, half man and half horse.",
        },
        {
          kind: "p",
          text: "Astrologers credit them with versatility, curiosity and a feel for change; their downside would be scattering their energy or indecision. They are also called “double” or “common” signs.",
        },
      ],
      keywords: ["adaptability", "flexibility", "versatility", "openness to change"],
    },
  },

  polarity: {
    heading: "Masculine and feminine, day and night",
    summary:
      "Tradition alternates the signs: one masculine, one feminine, starting from Aries. The fire and air signs are called masculine and diurnal, the earth and water signs feminine and nocturnal. These words describe symbolic qualities, not people's gender.",
    details: [
      {
        kind: "p",
        text: "This division goes back to Hellenistic astrology; Ptolemy sets it out in the 2nd century in the Tetrabiblos. The masculine signs, associated with the day and the Sun, stand for an energy turned outwards; the feminine signs, associated with the night and the Moon, an energy turned inwards.",
      },
      {
        kind: "p",
        text: "Today's astrologers more readily speak of active and receptive signs, of yang and yin, or of positive and negative signs, with no value judgement. All these words try to say the same thing: two complementary ways of relating to the world.",
      },
      {
        kind: "list",
        items: [
          "Masculine and diurnal: Aries, Gemini, Leo, Libra, Sagittarius, Aquarius.",
          "Feminine and nocturnal: Taurus, Cancer, Virgo, Scorpio, Capricorn, Pisces.",
        ],
      },
    ],
  },

  cusps: {
    heading: "Born on the cusp?",
    summary:
      "The Sun does not change sign on exactly the same date every year: the difference can be as much as a day. For a birth close to a change of sign, only the Sun's exact position, calculated from the date, time and place, can settle the question.",
    details: [
      {
        kind: "p",
        text: "The calendar year does not exactly match the year of the seasons, which lasts about 365 days, 5 hours and 49 minutes. The Sun's entry into a sign therefore happens about six hours later each year than the year before, until a leap year brings it back. Time zones add to this: the same instant can fall on 20 March in Paris and on the 21st in Tokyo.",
      },
      {
        kind: "p",
        text: "A person born on this boundary is said to be “born on the cusp”. In astrology, however, the Sun is always in one sign or the other, at a precise degree. Some astrologers believe that the very last and very first degrees blend the two tones, but the Sun sign remains the one the calculation gives.",
      },
      {
        kind: "p",
        text: "The word “cusp” comes from the Latin cuspis, a point. It also refers to the start of each of the twelve houses of a chart.",
      },
    ],
  },

  signs: {
    aries: {
      tagline:
        "The first sign of the zodiac, Aries opens the spring: tradition sees in it the drive of a fresh start, courage and a taste for initiative.",
      intro: {
        summary:
          "Aries is the first sign of the zodiac: it begins at the March equinox, when the Sun crosses the celestial equator heading north. A cardinal fire sign ruled by Mars, it symbolises, according to tradition, drive, initiative and the force of beginnings.",
        details: [
          {
            kind: "p",
            text: "Its 30° cover the first twelfth of the ecliptic, starting from the vernal point. Astrologers read in it the energy of returning spring: the seed breaking through, the first step, action that comes before reflection. These images belong to a symbolic tradition handed down since antiquity: they describe a language, not a destiny.",
          },
        ],
      },
      keywords: ["drive", "courage", "initiative", "frankness", "enthusiasm", "independence"],
      shadowKeywords: ["impatience", "impulsiveness", "a quick temper", "a spirit of rivalry"],
      bodyPart: "the head",
      brightestStarName: "Hamal",
      imageAlt:
        "Engraved and hand-coloured card from Urania's Mirror: a reclining ram with a curly fleece and coiled golden horns, beneath a fly, the old constellation of Musca Borealis, the Northern Fly; the stars, pierced through the card, bear their names.",
      sections: {
        caractere: {
          heading: "Character according to tradition",
          summary:
            "Tradition makes Aries the sign of the first step: it acts fast, speaks frankly and likes to lead the way. Its failings are the flip side of this drive: impatience, a quick temper, difficulty finishing what it starts.",
          details: [
            {
              kind: "p",
              text: "Astrology handbooks describe a direct temperament that prefers action to long discussions. It is credited with courage in the face of obstacles, a genuine taste for challenges and a kind of innocence: Aries would say what it thinks, without calculation, and would quickly forget quarrels.",
            },
            {
              kind: "p",
              text: "The same fire can turn into abruptness. Astrologers mention an anger that flares quickly but is short-lived, impatience with other people's slowness and a tendency to launch ten projects without seeing any of them through. The competitive spirit, stimulating as it is, sometimes slides into rivalry.",
            },
            {
              kind: "p",
              text: "These portraits remain archetypes. In a real chart, Aries mixes with other signs and other bodies that temper or strengthen its traits; none of these tendencies is presented as inevitable.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Aries in a chart",
          summary:
            "The same sign does not play the same role depending on the body or point that occupies it. Astrologers mainly distinguish three positions: the Sun, the Moon and the Ascendant.",
          details: [
            {
              kind: "list",
              items: [
                "The Sun in Aries: this is the Sun sign, the one used in horoscopes. The Sun is exalted here, and tradition sees in it an identity built through action and challenge, with a need to feel at the origin of things.",
                "The Moon in Aries: the Moon speaks of emotions and intimate needs. Here, reactions would be lively and immediate, moods frank, and anger as quick to rise as to subside.",
                "The Ascendant in Aries: this is the sign that was rising on the eastern horizon at the time of birth. It is associated with a determined bearing, an impression of energy and a way of tackling life head-on.",
              ],
            },
            {
              kind: "p",
              text: "The Sun changes sign about once a month, the Moon every two and a half days, the Ascendant on average every two hours: hence the importance of the time of birth.",
            },
          ],
        },
        symbolique: {
          heading: "Horns and a spring",
          summary:
            "The glyph of Aries draws two curved horns springing from a single stem. A cardinal sign, it opens spring in the northern hemisphere and autumn in the southern hemisphere.",
          details: [
            {
              kind: "p",
              text: "This V-shaped stroke with curled ends evokes the ram's head seen from the front. Some also see in it a shoot coming out of the ground, or a fountain: the image of a force that springs from a single point and unfolds.",
            },
            {
              kind: "p",
              text: "The Sun enters Aries at the March equinox, when day and night are roughly equal, before the days win out. South of the equator, the same moment marks the start of autumn: the symbolism of the seasons, born around the Mediterranean, is reversed there.",
            },
            {
              kind: "p",
              text: "Fire and cardinal, Aries combines ardour with the drive of beginnings; it is masculine and diurnal, like all the fire signs. In melothesia, which shares out the body among the signs from head to foot, it rules the head: the Latin poet Manilius already noted this in the 1st century.",
            },
          ],
        },
        mythe: {
          heading: "The myth of the Golden Fleece",
          summary:
            "The constellation represents the ram with the golden fleece that rescued Phrixus and Helle, threatened by their stepmother Ino. It is this fleece that Jason and the Argonauts would later go in search of in Colchis.",
          details: [
            {
              kind: "p",
              text: "King Athamas had two children by Nephele, the Cloud. His second wife, Ino, had the seed grain parched to cause a famine, then bribed the messengers sent to Delphi: the oracle would demand the sacrifice of Phrixus. Just as the boy was about to be sacrificed, Nephele sent a ram with a golden fleece.",
            },
            {
              kind: "p",
              text: "Phrixus and his sister Helle flew east on its back. Helle lost her grip above the strait that separates Europe from Asia and drowned there: the Greeks called it the Hellespont, the “sea of Helle”, today the Dardanelles. Phrixus reached Colchis, on the shores of the Black Sea, sacrificed the ram to Zeus and gave the fleece to King Aeetes.",
            },
            {
              kind: "p",
              text: "According to Hyginus, it was Nephele who placed the animal among the stars; Eratosthenes says it rose there of its own accord after leaving its fleece on earth, which would explain the constellation's faint glow. Ovid also mentions the episode in the Fasti.",
            },
          ],
        },
        maitrises: {
          heading: "The domain of Mars",
          summary:
            "Mars, the body of action and combat, is the ruler of Aries for ancient and modern astrologers alike. The Sun is exalted here, Venus is in detriment and Saturn in fall.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile: Mars rules Aries, just as it rules Scorpio in tradition. Astrologers see it as a body “at home”, acting without hindrance.",
                "Exaltation: the Sun, exalted at 19° Aries. In spring, light gains on the night, and tradition sees the day star at its best.",
                "Detriment: Venus, ruler of Libra, the opposite sign. The body of harmony and gentleness would find itself far from its nature here.",
                "Fall: Saturn, exalted in Libra, is in fall in Aries: Saturnine caution and slowness sit ill with the haste of the sign.",
              ],
            },
            {
              kind: "p",
              text: "These dignities form a coherent system: the detriment is always the sign opposite the domicile, the fall the sign opposite the exaltation.",
            },
          ],
        },
        decans: {
          heading: "The three decans of Aries",
          summary:
            "Each sign is divided into three decans of 10°. Two systems colour them: the face, given to a body according to the Chaldean order, and the triplicity sign, borrowed from the three fire signs.",
          details: [
            {
              kind: "list",
              items: [
                "From 0° to 10°: face of Mars, triplicity of Aries. Mars rules twice here: this is the “purest” decan, where the sign meets only itself.",
                "From 10° to 20°: face of the Sun, triplicity of Leo, the Sun's domicile. Tradition places more brilliance and pride here.",
                "From 20° to 30°: face of Venus, triplicity of Sagittarius, the sign of Jupiter. The drive would become more amiable and more adventurous here.",
              ],
            },
            {
              kind: "p",
              text: "The decans come from ancient Egypt, where 36 groups of stars, rising ten days apart, were used to measure the hours of the night. Greek astrologers turned them into slices of a sign. The face follows the Chaldean order of the seven bodies, from Saturn to the Moon, starting with Mars at the beginning of Aries.",
            },
            {
              kind: "p",
              text: "The triplicity system, more recent and close to that of Indian astrology, gives the first decan to the sign itself, then the next two to the other signs of the same element.",
            },
          ],
        },
        constellation: {
          heading: "The constellation of Aries",
          summary:
            "The constellation of Aries covers 441.4 square degrees, ranking 39th of the 88 constellations. Its brightest star, Hamal (α Arietis), reaches magnitude 2: the smaller this number, the brighter the star.",
          details: [
            {
              kind: "p",
              text: "An unobtrusive figure, it is best spotted by three stars in a broken line that trace the animal's head; Hamal takes its name from the Arabic al-hamal, “the lamb”. It is best observed in the evening, from autumn to early winter, just south of the small constellation of Triangulum, to the west of the Pleiades.",
            },
            {
              kind: "p",
              text: "Around 130 BCE, in the time of the Greek astronomer Hipparchus, the vernal point lay in Aries: it is still called the “first point of Aries”, or “gamma point”, because the sign's glyph looks like the Greek letter γ. Since then, the precession of the equinoxes, a slow swivelling of the Earth's axis by about one degree every 72 years, has moved it by nearly 30°: today it lies in Pisces.",
            },
            {
              kind: "p",
              text: "As a result, the Sun now passes through the constellation of Aries about a month after the dates of the sign. The sign is a 30° slice set by the seasons, the constellation a star pattern with official boundaries.",
            },
          ],
        },
      },
    },

    taurus: {
      tagline:
        "The second sign, Taurus settles the spring in: tradition associates it with stability, patience and a taste for simple pleasures.",
      intro: {
        summary:
          "The second sign of the zodiac, Taurus occupies the heart of the northern spring. A fixed earth sign ruled by Venus, it evokes, according to tradition, constancy, a sense of the concrete and an attachment to things that last.",
        details: [
          {
            kind: "p",
            text: "After the drive of Aries comes the time to put down roots: the fields turn green, the earth gives nourishment. Astrologers associate Taurus with the enjoyment of the senses, the gardener's patience and a quiet strength, slow to be stirred but hard to shift. This portrait belongs to a symbolic tradition and does not claim to describe a real person.",
          },
        ],
      },
      keywords: ["stability", "patience", "perseverance", "sensuality", "a sense of the concrete", "faithfulness", "calm"],
      shadowKeywords: ["stubbornness", "possessiveness", "resistance to change", "inertia"],
      bodyPart: "the throat and neck",
      brightestStarName: "Aldebaran",
      imageAlt:
        "Engraved and hand-coloured card from Urania's Mirror: the front half of a dark grey bull, head lowered, long horns pointed and legs folded; the Pleiades cluster sits on its shoulder and Aldebaran shines near its eye, among pierced stars.",
      sections: {
        caractere: {
          heading: "Character according to tradition",
          summary:
            "Taurus is described as a calm, enduring sign that moves at its own pace and builds for the long term. The same solidity can turn into obstinacy or possessiveness.",
          details: [
            {
              kind: "p",
              text: "Tradition credits it with a sensual relationship with the world: a taste for good food, music, fine materials and landscapes. It is said to be faithful in friendship as in love, careful with money, attached to material security and not inclined to sudden change.",
            },
            {
              kind: "p",
              text: "The flip side of these qualities: a slowness that exasperates the impatient, a legendary stubbornness once a decision is made, and the urge to keep what it loves to itself, whether objects or people. Astrologers add that its anger, though rare, would be all the more impressive for it.",
            },
            {
              kind: "p",
              text: "These traits make up an archetype, that of fertile, stable ground. They take on a different colour depending on the other positions in the chart, which can speed them up, lighten them or deepen them.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Taurus in a chart",
          summary:
            "The sign is read differently depending on whether it hosts the Sun, the Moon or the Ascendant. In all three cases, tradition stresses the need for permanence and the concrete.",
          details: [
            {
              kind: "p",
              text: "With the Sun in Taurus, astrologers describe a patient will that asserts itself by building: the personality would be forged in what can be touched, cultivated and kept.",
            },
            {
              kind: "p",
              text: "The Moon is exalted here, which makes it, according to tradition, one of its best positions: the emotional world would seek peace, comfort and tenderness, with a great need for stability. Emotions here would be deep but rarely stormy.",
            },
            {
              kind: "p",
              text: "The Ascendant, the sign that was rising in the east at the moment of birth, colours the way you approach others. In Taurus, it would suggest a calm presence, a composed bearing and a reassuring manner, sometimes reserved at first meeting.",
            },
          ],
        },
        symbolique: {
          heading: "The bull's head",
          summary:
            "The glyph of Taurus combines a circle with an arc set on top of it: the animal's head and its horns. A fixed sign, it corresponds to mid-spring in the northern hemisphere.",
          details: [
            {
              kind: "p",
              text: "The circle stands for the head, the arc for the lyre-shaped horns. Some also see in it a sun topped by a crescent moon, an image of fertility made all the more telling by the Moon's exaltation in this sign.",
            },
            {
              kind: "p",
              text: "The Sun passes through Taurus when the northern spring settles in for good: vegetation flourishes, the days grow noticeably longer. In the southern hemisphere, the same period corresponds to mid-autumn.",
            },
            {
              kind: "p",
              text: "Earth and fixed, it brings together matter and constancy: for tradition, it is the most stable of the signs. Feminine and nocturnal, like all the earth signs, it rules the throat and neck in melothesia, which also links it to the voice and to singing.",
            },
          ],
        },
        mythe: {
          heading: "The abduction of Europa",
          summary:
            "The celestial Bull is most often identified with Zeus, transformed into a white bull to carry off Europa, a Phoenician princess. Only the front half of the animal is drawn in the sky.",
          details: [
            {
              kind: "p",
              text: "Europa, daughter of Agenor, king of Tyre, was playing on the shore with her companions. Zeus took the form of a dazzling white bull and mingled with the king's herd. Charmed by its gentleness, the girl decked its horns with flowers and climbed onto its back: the animal then plunged into the waves and carried her all the way to Crete.",
            },
            {
              kind: "p",
              text: "There, Zeus took back his divine form; Europa became the mother of Minos, the future king of Crete. Ovid tells the scene at the end of the second book of the Metamorphoses, and Hyginus writes that the bull was placed among the stars for having carried Europa safely to Crete.",
            },
            {
              kind: "p",
              text: "Hyginus mentions another reading: the constellation would recall Io, loved by Zeus and turned into a heifer. As for the bull's hindquarters, missing from the figure, they are imagined as plunged beneath the waves.",
            },
          ],
        },
        maitrises: {
          heading: "Venus at home",
          summary:
            "Venus, the body of harmony and pleasure, rules Taurus. The Moon finds its exaltation here, Mars is in detriment; no body falls here.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile: Venus, which also rules Libra. In Taurus, it would show its most earthly face: a taste for beauty, comfort and the senses.",
                "Exaltation: the Moon, exalted at 3° Taurus. Tradition sees in this the body of emotions soothed by the stability of the sign.",
                "Detriment: Mars, traditional ruler of Scorpio, the opposite sign, and Pluto for modern astrologers. Combative energy would be held back here.",
                "Fall: none. The fall is the sign opposite an exaltation; yet tradition places no exaltation in Scorpio.",
              ],
            },
            {
              kind: "p",
              text: "Domicile and exaltation are the two major “dignities”, detriment and fall their opposites: a body would be more or less at ease there to express its nature.",
            },
          ],
        },
        decans: {
          heading: "The three decans of Taurus",
          summary:
            "The three 10° slices of Taurus each receive a body, according to the Chaldean order, and an earth sign, according to the triplicity system.",
          details: [
            {
              kind: "list",
              items: [
                "From 0° to 10°: face of Mercury, triplicity of Taurus, under Venus. The most typical decan of the sign.",
                "From 10° to 20°: face of the Moon, triplicity of Virgo, under Mercury. Constancy would become more methodical here.",
                "From 20° to 30°: face of Saturn, triplicity of Capricorn, under Saturn. Saturn plays both roles here, and tradition reads in it more ambition and seriousness.",
              ],
            },
            {
              kind: "p",
              text: "The faces continue the sequence begun in Aries: after Mars, the Sun and Venus come Mercury, the Moon and Saturn. For Hellenistic and later medieval astrologers, the face was a minor dignity: a body placed in its own face kept a little support there.",
            },
            {
              kind: "p",
              text: "The triplicity system, widespread among modern astrologers, shades the sign with the two other earth signs, without changing its fundamental nature.",
            },
          ],
        },
        constellation: {
          heading: "The constellation of Taurus",
          summary:
            "Covering 797.2 square degrees, Taurus is one of the richest constellations of the winter sky. Its brightest star, Aldebaran (α Tauri), reaches magnitude 0.86 and marks the animal's orange eye.",
          details: [
            {
              kind: "p",
              text: "Aldebaran, “the follower” in Arabic, seems to chase the Pleiades across the sky. It appears to belong to the V of the Hyades, the cluster that outlines the bull's face, but it is twice as close to us. The Pleiades, the “Seven Sisters”, shine on its shoulder; near the tip of one horn lies the Crab Nebula, the remnant of a star whose explosion was observed in 1054.",
            },
            {
              kind: "p",
              text: "The constellation can be seen in the evening all winter, above and to the right of Orion. The precession of the equinoxes has shifted the sky: the Sun now passes through the stars of Taurus about a month after the dates of the sign. It is even there at the June solstice, which used to fall in Cancer.",
            },
          ],
        },
      },
    },

    gemini: {
      tagline:
        "The third sign, Gemini closes the spring: tradition sees in it curiosity, exchange and a quick mind, always on the move.",
      intro: {
        summary:
          "Gemini is the third sign of the zodiac, the one that leads spring into summer. A mutable air sign ruled by Mercury, it symbolises, for astrologers, speech, curiosity and a taste for connections.",
        details: [
          {
            kind: "p",
            text: "Two twins give it its name, and duality runs through all its symbolism: two points of view, two desires, two conversations at once. Tradition associates it with learning, short journeys, brothers and sisters and everything that circulates, from news to ideas. These correspondences form a symbolic vocabulary, not a diagnosis.",
          },
        ],
      },
      keywords: ["curiosity", "quick-wittedness", "a gift for communication", "adaptability", "humour", "sociability"],
      shadowKeywords: ["scattered attention", "inconstancy", "superficiality", "nervousness"],
      bodyPart: "the shoulders, arms and lungs",
      brightestStarName: "Pollux",
      imageAlt:
        "Engraved and hand-coloured card from Urania's Mirror: two young boys with their arms around each other, one raising a bow and arrow, the other holding a club, with a lyre between them; the stars Castor and Pollux, pierced like the others, mark their heads.",
      sections: {
        caractere: {
          heading: "Character according to tradition",
          summary:
            "In tradition, Gemini passes for the most curious sign of the zodiac: lively, talkative, inventive, at ease anywhere. Its failings are those of a mind that flits from flower to flower: scattered attention, inconstancy, nervousness.",
          details: [
            {
              kind: "p",
              text: "It is credited with a quick intelligence that catches ideas on the wing and links them together, a sparkling sense of humour and a real talent for conversation. Astrologers describe a sign that is young at heart, that loves to learn, compare and try things out, and that quickly tires of routine.",
            },
            {
              kind: "p",
              text: "This mobility has its downside: attention wanders, projects follow one another without coming to anything, opinions change from one day to the next. Tradition also mentions a nervousness, a difficulty committing for the long term and, at times, a lightness that can hurt without meaning to.",
            },
            {
              kind: "p",
              text: "None of these tendencies exists in its pure state: depending on the other placements in the chart, Gemini's curiosity can become studious, deep or very practical.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Gemini in a chart",
          summary:
            "Sun, Moon or Ascendant: each of these three markers gives Gemini a different place in the reading of a chart.",
          details: [
            {
              kind: "list",
              items: [
                "The Sun, the core of the personality, would describe here an identity built through exchange: talking, writing, asking questions, meeting more and more people.",
                "The Moon, the mirror of the emotions, would express here the need to put words to what you feel; mood would be changeable, soothed by conversation and novelty.",
                "The Ascendant, the sign on the eastern horizon at birth, would give a youthful air, a restless gaze and an easy first contact, often full of wit.",
              ],
            },
            {
              kind: "p",
              text: "Mercury, the ruler of Gemini, then takes on particular importance: astrologers look at where it sits to refine the interpretation. A chart always brings several signs together, and these descriptions combine within it.",
            },
          ],
        },
        symbolique: {
          heading: "The number two",
          summary:
            "The glyph of Gemini looks like the Roman numeral II: two pillars joined at the top and bottom. A mutable sign, it closes spring in the northern hemisphere.",
          details: [
            {
              kind: "p",
              text: "The two vertical strokes stand for the twins, the two bars joining them for the bond that holds them together. It can be read as duality, but also as dialogue: two distinct poles that communicate without merging.",
            },
            {
              kind: "p",
              text: "The Sun passes through Gemini at the end of the northern spring, as the days lengthen up to the solstice. It is a time of transition, typical of the mutable signs, which prepare the passage from one season to the next; in the southern hemisphere, it corresponds to the end of autumn.",
            },
            {
              kind: "p",
              text: "Air and mutable, Gemini combines the flow of ideas with the flexibility of change. Masculine and diurnal, like all the air signs, it rules the shoulders, arms and lungs in melothesia: the limbs that grasp and the breath that carries speech.",
            },
          ],
        },
        mythe: {
          heading: "Castor and Pollux",
          summary:
            "The celestial Twins are Castor and Pollux, the Dioscuri, inseparable brothers born of Leda. One was mortal, the other immortal: theirs is the story of a brotherhood stronger than death.",
          details: [
            {
              kind: "p",
              text: "According to the most widespread version, Leda, queen of Sparta, conceived Pollux by Zeus and Castor by her husband Tyndareus. Castor excelled at taming horses, Pollux at boxing. Both took part in the expedition of the Argonauts, and sailors called on them against storms.",
            },
            {
              kind: "p",
              text: "One day, they fought two other brothers, Idas and Lynceus, and Castor was killed. Pollux, inconsolable, asked Zeus to let him share his immortality with his brother: the twins were placed together among the stars. Ovid tells of this fight in the Fasti.",
            },
            {
              kind: "p",
              text: "Aratus speaks only of the “Twins”; Eratosthenes recognises the Dioscuri in them. Hyginus reports other readings, including Heracles and Apollo: that is why some maps, like the one on this page, give the two figures a lyre, a bow and a club.",
            },
          ],
        },
        maitrises: {
          heading: "The house of Mercury",
          summary:
            "Mercury, messenger of the gods and body of the intellect, rules Gemini. No body is exalted or in fall here; Jupiter, ruler of the opposite sign, is in detriment.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile: Mercury, which also rules Virgo. In Gemini, it would be turned towards exchange, curiosity and speech rather than analysis.",
                "Exaltation: none in the traditional list of the seven bodies. Five signs are in this position.",
                "Detriment: Jupiter, ruler of Sagittarius, the opposite sign. The body of grand syntheses would feel cramped in a sign that loves detail and variety.",
                "Fall: none, since Sagittarius itself hosts no exaltation.",
              ],
            },
            {
              kind: "p",
              text: "Astrologers read the Gemini-Sagittarius axis as that of knowledge: on one side, information that circulates; on the other, the search for meaning.",
            },
          ],
        },
        decans: {
          heading: "The three decans of Gemini",
          summary:
            "The sign is divided into three decans of 10°, each with a planetary face and an air sign that colours it.",
          details: [
            {
              kind: "list",
              items: [
                "From 0° to 10°: face of Jupiter, triplicity of Gemini, under Mercury. The spirit of the sign would be at its most concentrated here.",
                "From 10° to 20°: face of Mars, triplicity of Libra, under Venus. Curiosity would take on a sense of harmony here.",
                "From 20° to 30°: face of the Sun, triplicity of Aquarius, under Saturn for tradition and Uranus for modern astrologers. More originality is placed here.",
              ],
            },
            {
              kind: "p",
              text: "The faces follow the Chaldean order without a break (Saturn, Jupiter, Mars, the Sun, Venus, Mercury, the Moon), unrolled from the first degree of Aries. They are inherited from Hellenistic astrology, which had taken over the 36 Egyptian decans.",
            },
            {
              kind: "p",
              text: "The triplicity reading, more modern, does not replace the first: it adds to each slice the shade of another air sign.",
            },
          ],
        },
        constellation: {
          heading: "The constellation of Gemini",
          summary:
            "The constellation of Gemini spans 513.8 square degrees. Its brightest star is Pollux (β Geminorum), of magnitude 1.14, slightly more brilliant than its neighbour Castor, which is nonetheless labelled α.",
          details: [
            {
              kind: "p",
              text: "The two stars mark the twins' heads, but they are not linked: Pollux, an orange giant, lies about 34 light years away, Castor about 51. Castor is in fact a system of six stars. Johann Bayer, who assigned the Greek letters in 1603, did not rank them here by brightness: hence an α star dimmer than the β.",
            },
            {
              kind: "p",
              text: "Gemini can be spotted in the evening from winter to early spring, above and to the left of Orion. In December, the shooting stars of the Geminids seem to burst from this region.",
            },
            {
              kind: "p",
              text: "The precession of the equinoxes has shifted the signs relative to the stars: the Sun now passes in front of Gemini about a month after the dates of the sign, at the start of summer.",
            },
          ],
        },
      },
    },

    cancer: {
      tagline:
        "The fourth sign, Cancer opens the summer: tradition sees in it sensitivity, memory and the need to protect the people you love.",
      intro: {
        summary:
          "Cancer, the fourth sign of the zodiac, begins at the June solstice, the longest day of the year in the northern hemisphere. A cardinal water sign ruled by the Moon, it symbolises, according to tradition, the home, roots and emotional life.",
        details: [
          {
            kind: "p",
            text: "The crab that gives it its name carries its house on its back and protects a soft interior beneath its shell: the image sums up what astrologers associate with it. Family, memories, the need for a place of your own, attention to others: Cancer is the sign of the intimate, presented here as a symbol and not as an imposed character trait.",
          },
        ],
      },
      keywords: ["sensitivity", "protectiveness", "tenderness", "memory", "intuition", "attachment to home"],
      shadowKeywords: ["touchiness", "withdrawal", "mood swings", "emotional dependence"],
      bodyPart: "the chest and stomach",
      brightestStarName: "Tarf",
      imageAlt:
        "Engraved and hand-coloured card from Urania's Mirror: a large orange crab seen from above, claws open and legs spread; on its shell, among the pierced stars, the Beehive cluster and the two stars of the Donkeys are named.",
      sections: {
        caractere: {
          heading: "Character according to tradition",
          summary:
            "Tradition sees Cancer as a tender, protective sign, guided by its emotions and deeply attached to its own. Beneath the shell, sensitivity can also turn touchy or moody.",
          details: [
            {
              kind: "p",
              text: "Astrologers credit it with a remarkable emotional memory, a fondness for family traditions and a caring instinct that drives it to feed, comfort and welcome. It is said to be intuitive, able to sense the atmosphere of a room before a word is spoken, and faithful to those who have earned its trust.",
            },
            {
              kind: "p",
              text: "The flip side of this sensitivity: a mood as changeable as the Moon that rules it, a tendency to withdraw when it feels hurt, and at times a need for reassurance that weighs on those around it. Like the crab, it would readily move sideways rather than face a conflict.",
            },
            {
              kind: "p",
              text: "This portrait remains symbolic: every chart mixes several signs, and Cancer's gentleness can sit there alongside a great deal of daring.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Cancer in a chart",
          summary:
            "Depending on whether it hosts the Sun, the Moon or the Ascendant, Cancer colours the chart differently. The Moon, ruler of the sign, is particularly at ease here.",
          details: [
            {
              kind: "p",
              text: "The Sun in Cancer would describe a personality built around bonds: family, whether by birth or by choice, and the need to feel at home somewhere. Self-assertion would come through protecting others.",
            },
            {
              kind: "p",
              text: "The Moon is in its domicile here, which, according to tradition, gives a rich and nuanced emotional life: strong empathy, great sensitivity to atmospheres, a need for emotional security.",
            },
            {
              kind: "p",
              text: "With the Ascendant in Cancer, it is the way you make contact that would take on this colour: a gentle manner, cautious at first, then warm once trust is established. The face shown to others would often remain more reserved than the heart.",
            },
          ],
        },
        symbolique: {
          heading: "Two spirals at the solstice",
          summary:
            "The glyph of Cancer brings together two curves set head to tail, each ending in a small circle, like a crab's claws. A cardinal sign, it marks the start of summer in the northern hemisphere and of winter in the south.",
          details: [
            {
              kind: "p",
              text: "Some recognise in it the animal's folded claws; others see two breasts, or two curled seeds, images of nourishment and protection.",
            },
            {
              kind: "p",
              text: "The Sun enters Cancer at the June solstice: it then reaches its greatest height in the sky of the northern hemisphere, after which the days begin to shorten. The Tropic of Cancer owes its name to this moment, because two thousand years ago the Sun stood in front of the stars of Cancer at that time. In the southern hemisphere, it is the winter solstice.",
            },
            {
              kind: "p",
              text: "Water and cardinal, Cancer combines emotion with the drive that opens a season. Feminine and nocturnal, it rules the chest and stomach in melothesia: the body that shelters and nourishes.",
            },
          ],
        },
        mythe: {
          heading: "The crab of Lerna",
          summary:
            "Cancer represents the crab that attacked Heracles during his fight against the Lernaean Hydra. Crushed by the hero, it was placed in the sky by Hera, his enemy.",
          details: [
            {
              kind: "p",
              text: "Heracles was fighting the Hydra, a many-headed serpent that haunted the marshes of Lerna, in the Peloponnese. A crab then emerged from the mud and nipped his foot; the hero crushed it under his heel. To reward this humble ally, Hera, who pursued Heracles with her hatred, set the crab among the constellations: so say Eratosthenes and Hyginus.",
            },
            {
              kind: "p",
              text: "Eratosthenes also tells the story of the two stars called the Donkeys, on either side of a small pale patch, the Manger. During the war of the gods against the Giants, Dionysus and Hephaestus arrived riding on donkeys; the Giants, who had never heard braying, fled in terror. Dionysus placed the donkeys in the sky, near the manger from which they seem to feed.",
            },
          ],
        },
        maitrises: {
          heading: "The Moon at home",
          summary:
            "The Moon, the body of cycles and emotions, rules Cancer. Jupiter is exalted here, Saturn in detriment and Mars in fall.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile: the Moon, sole ruler of Cancer for ancient and modern astrologers alike. It is the only sign it rules.",
                "Exaltation: Jupiter, exalted at 15° Cancer. Jupiterian generosity would flourish in a sign that protects and nourishes.",
                "Detriment: Saturn, ruler of Capricorn, the opposite sign. The body of rigour and distance would be ill at ease in the sign of tenderness.",
                "Fall: Mars, exalted in Capricorn, is in fall in Cancer: combative energy would become more defensive and more emotional here.",
              ],
            },
            {
              kind: "p",
              text: "The Cancer-Capricorn axis is that of the solstices: on one side, home and private life; on the other, public life and responsibilities. Each of the two signs hosts the detriment of the body that rules the other.",
            },
          ],
        },
        decans: {
          heading: "The three decans of Cancer",
          summary:
            "Cancer is divided into three decans of 10°. Each receives a guardian body, its face, and a water sign that gives it its shade.",
          details: [
            {
              kind: "list",
              items: [
                "From 0° to 10°: face of Venus, triplicity of Cancer, under the Moon. The tenderness of the sign would be most visible here.",
                "From 10° to 20°: face of Mercury, triplicity of Scorpio, under Mars for tradition and Pluto for modern astrologers. Sensitivity would gain in intensity here.",
                "From 20° to 30°: face of the Moon, triplicity of Pisces, under Jupiter for tradition and Neptune for modern astrologers. More dreaminess is read here.",
              ],
            },
            {
              kind: "p",
              text: "The system of faces, inherited from antiquity, applies the Chaldean order of the seven bodies along the 36 decans: here Venus, Mercury, then the Moon, which thus finds a place in its own sign.",
            },
            {
              kind: "p",
              text: "The triplicity reading, more modern, blends Cancer with the two other water signs: three faces of the same element, from the spring to the open sea.",
            },
          ],
        },
        constellation: {
          heading: "The constellation of Cancer",
          summary:
            "Covering 505.9 square degrees, Cancer is an unobtrusive constellation with no very bright star. The brightest, Tarf (β Cancri), reaches only magnitude 3.5: you need a dark sky to make it out.",
          details: [
            {
              kind: "p",
              text: "The jewel of the constellation is the Manger cluster, or Praesepe (M44), a milky patch visible to the naked eye far from city lights; it is also called the Beehive. Galileo was one of the first, in the early 17th century, to see a crowd of stars in it through his telescope. Look for Cancer between Gemini and Leo, in the evening, from late winter into spring.",
            },
            {
              kind: "p",
              text: "Two thousand years ago, the Sun was in Cancer at the June solstice. Since then, the precession of the equinoxes, the slow spinning-top motion of the Earth's axis, has made this solstice slide into Gemini and then into Taurus. The Sun now passes through Cancer only about a month after the dates of the sign.",
            },
          ],
        },
      },
    },

    leo: {
      tagline:
        "The fifth sign, Leo reigns at the height of summer: tradition sees in it generosity, self-confidence and a taste for shining.",
      intro: {
        summary:
          "Leo is the fifth sign of the zodiac, the sign of the great heat of the northern summer. A fixed fire sign ruled by the Sun, it evokes, according to tradition, radiance, creativity and nobility of heart.",
        details: [
          {
            kind: "p",
            text: "The king of beasts and the day star share its symbolism: Leo is the only sign ruled by the Sun. Astrologers associate it with the joy of creating, play, children, love and everything that calls for showing yourself. This reading belongs to a symbolic tradition; it does not describe a character fixed in advance.",
          },
        ],
      },
      keywords: ["generosity", "self-confidence", "creativity", "human warmth", "loyalty", "radiance"],
      shadowKeywords: ["pride", "bossiness", "a need for admiration", "theatricality"],
      bodyPart: "the heart and back",
      brightestStarName: "Regulus",
      imageAlt:
        "Engraved and hand-coloured card from Urania's Mirror: a great lion with a thick mane, striding, its tail raised in a loop, and above it a smaller lion, Leo Minor; Regulus is marked on its chest among the pierced stars.",
      sections: {
        caractere: {
          heading: "Character according to tradition",
          summary:
            "Tradition paints Leo as a generous sovereign: warm, proud and creative, it loves to give and to be recognised. The same brilliance can turn into pride, or a constant need for admiration.",
          details: [
            {
              kind: "p",
              text: "It is credited with a big heart, unfailing loyalty to those it loves and an infectious zest for life. Astrologers describe it as at ease on stage, literally or figuratively, with a sense of play and celebration, and able to carry others along with its enthusiasm.",
            },
            {
              kind: "p",
              text: "Its failings are those of a king: authority that turns into bossiness, pride that takes criticism badly, a taste for spectacle that tips into theatricality. Tradition also notes a hidden vulnerability: Leo would need to be admired in order to feel loved.",
            },
            {
              kind: "p",
              text: "As with every sign, these traits only count when blended with the rest of the chart, where other bodies can soften or intensify the mane.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Leo in a chart",
          summary:
            "The Sun, ruler of Leo, is at home here; the Moon and the Ascendant receive other shades from it. Astrologers read these three positions as complementary.",
          details: [
            {
              kind: "list",
              items: [
                "Sun in Leo: the body is in its domicile, which tradition considers very favourable. Identity would be fed by creation and recognition, with a need to express fully who you are.",
                "Moon in Leo: sensitivity would be warm and demonstrative, with a need to feel appreciated and an affection readily expressed with panache.",
                "Ascendant in Leo: the sign rising in the east would give a striking presence, a way of entering a room that draws all eyes.",
              ],
            },
            {
              kind: "p",
              text: "Astrologers point out that a strong Leo in a chart does not rule out shyness: other placements can reinforce it, and the need to shine is then lived more discreetly.",
            },
          ],
        },
        symbolique: {
          heading: "A mane at the height of summer",
          summary:
            "The glyph of Leo starts from a small circle and extends into a large wavy loop, like a lion's mane or tail. A fixed sign, it corresponds to high summer in the northern hemisphere.",
          details: [
            {
              kind: "p",
              text: "The circle evokes the head or the heart, the curve the blazing mane or the tail lashing the air. Others read in it a heatwave: the stroke always suggests an energy unfolding with self-assurance.",
            },
            {
              kind: "p",
              text: "When the Sun passes through Leo, the northern summer is in full swing: it is the time of harvests and great heat. In the southern hemisphere, the same period falls in midwinter.",
            },
            {
              kind: "p",
              text: "Fire and fixed, Leo combines ardour with constancy: its flame burns long rather than fast. Masculine and diurnal, it is the domicile of the Sun. In melothesia, it rules the heart and back, the seat of courage and the column that keeps the body upright.",
            },
          ],
        },
        mythe: {
          heading: "The Nemean lion",
          summary:
            "The constellation is identified with the Nemean lion, an invulnerable beast that Heracles strangled with his bare hands in the first of his twelve labours.",
          details: [
            {
              kind: "p",
              text: "The monster terrorised the region of Nemea, south-west of Corinth, and its hide withstood every weapon: Heracles' arrows bounced off it. The hero cornered it in its cave with two entrances, blocked one of them and strangled it with his bare hands. He then used the beast's own claws to skin it and from then on wore its hide as armour, with its jaws resting on his head.",
            },
            {
              kind: "p",
              text: "Eratosthenes and Hyginus first explain the lion's place in the sky by its rank: it is the king of beasts. Hyginus adds that some authors link it to the first labour of Heracles.",
            },
            {
              kind: "p",
              text: "Long before the Greeks, the Babylonians already saw a lion in these stars, and called Regulus “the king”.",
            },
          ],
        },
        maitrises: {
          heading: "The domicile of the Sun",
          summary:
            "The Sun rules Leo, and it is the only sign it rules. No body is exalted or in fall here; Saturn, and Uranus for modern astrologers, are in detriment.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile: the Sun, ruler of Leo for tradition and for modern astrologers alike. The sign receives from it its warmth and its central place.",
                "Exaltation: none. The Sun has its own elsewhere, at 19° Aries.",
                "Detriment: Saturn, traditional ruler of Aquarius, the opposite sign, and Uranus for modern astrologers. Saturnine coldness and rigour, or the Uranian spirit of rupture, sit ill with the heart of Leo.",
                "Fall: none, since Aquarius itself hosts no exaltation.",
              ],
            },
            {
              kind: "p",
              text: "In the ancient scheme of domiciles, the Sun and the Moon share Leo and Cancer, two neighbouring signs at the height of summer; the other five bodies each receive two signs, placed symmetrically on either side.",
            },
          ],
        },
        decans: {
          heading: "The three decans of Leo",
          summary:
            "Each third of Leo receives a planetary face, in the Chaldean order, and the imprint of a fire sign, according to the triplicity system.",
          details: [
            {
              kind: "list",
              items: [
                "From 0° to 10°: face of Saturn, triplicity of Leo, under the Sun. The pride of the sign would be clearest here.",
                "From 10° to 20°: face of Jupiter, triplicity of Sagittarius, also under Jupiter. More largesse and idealism are placed here.",
                "From 20° to 30°: face of Mars, triplicity of Aries, also under Mars. Tradition sees more fire and dash here.",
              ],
            },
            {
              kind: "p",
              text: "The last two decans offer a coincidence: the same body is both the face and the ruler of the triplicity sign, Jupiter in the second, Mars in the third.",
            },
            {
              kind: "p",
              text: "The face, the older of the two methods, comes from Hellenistic astrology and follows the sequence of the seven bodies, from Saturn to the Moon. The triplicity system, adopted by many modern astrologers, shades the sign with the two other fire signs.",
            },
          ],
        },
        constellation: {
          heading: "The constellation of Leo",
          summary:
            "Leo is one of the few zodiacal constellations that really look like their name. The constellation covers 947.0 square degrees and its brightest star, Regulus (α Leonis), reaches magnitude 1.4.",
          details: [
            {
              kind: "p",
              text: "A sickle of stars, like a backwards question mark, outlines the head and mane; Regulus shines at its base, in the beast's heart, and its Latin name means “little king”. The star lies almost exactly on the ecliptic, so the Moon, and more rarely a planet, sometimes passes in front of it. The tail is marked by Denebola, “the lion's tail” in Arabic.",
            },
            {
              kind: "p",
              text: "Leo dominates the sky on spring evenings. Every year, around mid-November, the shooting stars of the Leonids seem to burst from its mane.",
            },
            {
              kind: "p",
              text: "With the precession of the equinoxes, the Sun no longer passes through Leo on the dates of the sign, but about a month later. The sign remains tied to the season, the constellation to the stars.",
            },
          ],
        },
      },
    },

    virgo: {
      tagline:
        "The sixth sign, Virgo accompanies the end of summer and the harvest: tradition sees in it care, method and an eye for detail.",
      intro: {
        summary:
          "Virgo, the sixth sign of the zodiac, covers the end of the northern summer, the time of harvest. A mutable earth sign ruled by Mercury, it evokes, according to tradition, an analytical mind, care and a taste for a job well done.",
        details: [
          {
            kind: "p",
            text: "Its figure holds an ear of wheat: the harvest that is sorted, stored and prepared for winter. Astrologers associate it with service rendered, health, daily habits and discernment, the ability to separate the useful from the superfluous. These are symbolic associations handed down by tradition, not truths about people.",
          },
        ],
      },
      keywords: ["an eye for detail", "rigour", "helpfulness", "discernment", "modesty", "an analytical mind"],
      shadowKeywords: ["perfectionism", "an overly critical mind", "anxiety", "rigidity"],
      bodyPart: "the intestines",
      brightestStarName: "Spica",
      imageAlt:
        "Engraved and hand-coloured card from Urania's Mirror: a winged young woman in a pink and green gown, stretched across the card, holds a sprig in one hand and ears of wheat in the other; the star Spica, pierced like the others, shines among the ears.",
      sections: {
        caractere: {
          heading: "Character according to tradition",
          summary:
            "Tradition describes Virgo as an attentive, methodical sign that likes to understand, improve and be of service. Its high standards can turn into perfectionism or anxiety.",
          details: [
            {
              kind: "p",
              text: "It is credited with a practical intelligence that observes, sorts and corrects, and with a genuine modesty: Virgo would rather be useful than shine. Astrologers stress its sense of responsibility, its reliability and a quiet generosity, made of small gestures more than grand speeches.",
            },
            {
              kind: "p",
              text: "The same precise gaze can turn against itself or against others: quick criticism, difficulty being satisfied with an imperfect result, a tendency to worry about everything. Tradition also mentions a certain stiffness in the face of the unexpected, and a reserve that hides the emotions.",
            },
            {
              kind: "p",
              text: "These traits make up an archetype, that of the harvest carefully sorted. In a chart, they combine with many other influences.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Virgo in a chart",
          summary:
            "Astrologers read Virgo through three main markers, the Sun, the Moon and the Ascendant, each of which reveals one of its facets.",
          details: [
            {
              kind: "p",
              text: "The Sun in Virgo would suggest an identity built through competence: learning a skill, perfecting it, making yourself useful. Satisfaction would come from work accomplished more than from applause.",
            },
            {
              kind: "p",
              text: "With the Moon in this sign, emotions would readily find their way through action: you care for others by helping out, you reassure yourself by putting things in order. Tradition also sees here an anxious sensitivity that needs soothing routines.",
            },
            {
              kind: "p",
              text: "The Ascendant in Virgo would give a neat presence, a reserved and attentive manner, a gaze that notices details. Mercury, the ruler of the sign, then becomes a key body in the chart.",
            },
          ],
        },
        symbolique: {
          heading: "The ear of the harvest",
          summary:
            "The glyph of Virgo looks like an M whose last leg curls back in a loop towards the inside. A mutable sign, it closes summer in the northern hemisphere, as the harvests come to an end.",
          details: [
            {
              kind: "p",
              text: "Interpretations vary: some see in it the ear of wheat held by the celestial Virgin, others a figure folded in on itself, a symbol of reserve. The design is close to that of Scorpio, whose last leg ends instead in an arrow.",
            },
            {
              kind: "p",
              text: "The Sun passes through Virgo at the end of the northern summer, up to the September equinox. A sign of transition, it prepares for autumn: crops are gathered in, sorted and stored. In the southern hemisphere, the same period heralds the end of winter.",
            },
            {
              kind: "p",
              text: "Earth and mutable, Virgo combines a sense of the concrete with adaptable flexibility. Feminine and nocturnal, it rules the intestines in melothesia: the organ that sorts what nourishes from what must be discarded, a telling image of its discernment.",
            },
          ],
        },
        mythe: {
          heading: "Astraea, justice gone to the sky",
          summary:
            "Virgo is most often identified with Dike, Justice, also called Astraea, who left the Earth when humans became violent. Other authors see in her Demeter, Persephone or Erigone.",
          details: [
            {
              kind: "p",
              text: "The Greek poet Aratus tells how, in the Golden Age, Justice lived among humans, who knew nothing of war. In the Silver Age, disappointed, she withdrew to the mountains; in the Bronze Age, when men forged the first swords, she flew up to the sky. Ovid, in the Metamorphoses, names her Astraea and makes her the last of the immortals to leave the Earth.",
            },
            {
              kind: "p",
              text: "Because she holds an ear of wheat, others associate her with Demeter, goddess of the harvest, whom the Romans called Ceres, or with her daughter Persephone, known as Kore, the “Maiden”. Hyginus also reports the story of Erigone, who hanged herself in grief after the death of her father Icarius: father, daughter and their dog were placed in the sky.",
            },
            {
              kind: "p",
              text: "Eratosthenes and Hyginus also cite Tyche, Fortune. This wealth of versions shows that the figure, a very ancient one, has been read in many ways.",
            },
          ],
        },
        maitrises: {
          heading: "Mercury, twice at home",
          summary:
            "Mercury rules Virgo and also finds its exaltation here: a unique case in the zodiac. Jupiter is in detriment, along with Neptune for modern astrologers, and Venus in fall.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile: Mercury, which also rules Gemini. In Virgo, its intelligence would become more practical: observing, analysing, organising.",
                "Exaltation: Mercury again, exalted at 15° Virgo. In the traditional list, no other body has its domicile and its exaltation in the same sign.",
                "Detriment: Jupiter, traditional ruler of Pisces, the opposite sign, and Neptune for modern astrologers. Jupiter's taste for the big picture and Neptunian dreaminess would clash with the precision of the sign.",
                "Fall: Venus, exalted in Pisces, is in fall in Virgo: unconditional love would give way to exacting standards here.",
              ],
            },
            {
              kind: "p",
              text: "For tradition, this double dignity makes Virgo the sign where Mercury's intelligence is most sure of itself.",
            },
          ],
        },
        decans: {
          heading: "The three decans of Virgo",
          summary:
            "Virgo has three decans of 10°, each associated with a body through the Chaldean order and with an earth sign through the triplicity method.",
          details: [
            {
              kind: "list",
              items: [
                "From 0° to 10°: face of the Sun, triplicity of Virgo, under Mercury. The decan most faithful to the sign.",
                "From 10° to 20°: face of Venus, triplicity of Capricorn, under Saturn. Method would become more ambitious here.",
                "From 20° to 30°: face of Mercury, triplicity of Taurus, under Venus. A calmer and more sensual practicality is read here.",
              ],
            },
            {
              kind: "p",
              text: "The faces unroll the Chaldean order from one sign to the next; for ancient astrologers they counted as a secondary dignity. Medieval treatises also associated a symbolic figure with each decan, painted for example in the 15th century in the frescoes of the Palazzo Schifanoia, in Ferrara.",
            },
            {
              kind: "p",
              text: "The triplicity system, more recent, shades the sign with the two other earth signs, from the most hard-working to the most peaceful.",
            },
          ],
        },
        constellation: {
          heading: "The constellation of Virgo",
          summary:
            "Virgo is the largest constellation of the zodiac and the second largest in the whole sky, with 1,294.4 square degrees. Its brightest star, Spica (α Virginis), reaches magnitude 0.97.",
          details: [
            {
              kind: "p",
              text: "Spica, “the ear of grain” in Latin, marks the sheaf the young woman is holding. It is in fact a pair of hot, bluish stars, so close together that they cannot be separated by eye. In the same region, astronomers observe the Virgo Cluster of galaxies, which numbers more than a thousand. The constellation can be seen in the evening in spring and early summer.",
            },
            {
              kind: "p",
              text: "Spica holds a special place in the history of astronomy: it was by comparing its position with older measurements that the Greek astronomer Hipparchus discovered the precession of the equinoxes, in the 2nd century BCE. This slow shift explains why the Sun now passes through Virgo about a month after the dates of the sign; given the size of the constellation, it stays there for about a month and a half.",
            },
          ],
        },
      },
    },

    libra: {
      tagline:
        "The seventh sign, Libra opens the autumn: tradition sees in it a love of harmony, a sense of justice and the art of relationships.",
      intro: {
        summary:
          "Libra, the seventh sign of the zodiac, begins at the September equinox, when day and night are almost equal. A cardinal air sign ruled by Venus, it symbolises, according to tradition, balance, relationships and a sense of fairness.",
        details: [
          {
            kind: "p",
            text: "It opens the second half of the zodiac, which astrologers say is turned towards others: after six signs devoted to building the self would come the time of partnerships, alliances and dialogue. It is associated with diplomacy, a taste for beauty and the art of weighing up the pros and cons. Here again, this is a symbolic language.",
          },
        ],
      },
      keywords: ["a sense of harmony", "diplomacy", "a sense of justice", "a taste for beauty", "courtesy", "a cooperative spirit"],
      shadowKeywords: ["indecision", "fear of conflict", "dependence on other people's opinions", "people-pleasing"],
      bodyPart: "the kidneys",
      brightestStarName: "Zubeneschamali",
      imageAlt:
        "Engraved and hand-coloured card from Urania's Mirror: a golden pair of scales with two pans, seen at an angle, with its beam, suspension ring and cords; the pierced stars of the Scorpion's former claws are spread across the pans.",
      sections: {
        caractere: {
          heading: "Character according to tradition",
          summary:
            "Tradition credits Libra with a conciliatory, elegant mind, concerned with fairness, that seeks agreement rather than confrontation. This need for harmony can also make choices difficult.",
          details: [
            {
              kind: "p",
              text: "Astrologers describe it as sociable, attentive to others and skilled at easing tensions. It is credited with a keen sense of justice, natural courtesy and a marked taste for art, for beauty of form and of manners. Relationships, whether friendly, romantic or professional, would be its favoured ground for self-expression.",
            },
            {
              kind: "p",
              text: "By weighing up every option, Libra would hesitate for a long time before deciding. Tradition also mentions a fear of displeasing, which leads it to avoid conflicts that are nonetheless necessary, and a sensitivity to the way others see it that can make it forget its own desires.",
            },
            {
              kind: "p",
              text: "A pair of scales is never still: its pans swing. The image is a reminder that balance is something you keep looking for, and that this portrait is shaded by the rest of the chart.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Libra in a chart",
          summary:
            "The Sun, the Moon and the Ascendant each give Libra a face. For the Sun, tradition speaks of a delicate position: it is in fall here.",
          details: [
            {
              kind: "list",
              items: [
                "The Sun in fall in Libra: self-assertion would come through the other person, the couple or the group, rather than through solitary conquest. Astrologers read in it an identity built through relationships.",
                "The Moon in Libra would reflect a need for emotional harmony: arguments would weigh heavily, while peace at home and gentle exchanges would count for a great deal.",
                "The Ascendant in Libra would give a graceful bearing, a ready smile and instinctive politeness in first contacts.",
              ],
            },
            {
              kind: "p",
              text: "Venus, the ruler of the sign, then deserves particular attention: its position shows how this need for balance is expressed.",
            },
          ],
        },
        symbolique: {
          heading: "The beam of the equinox",
          summary:
            "The glyph of Libra stacks two horizontal strokes, the upper one rising in an arc at its centre: the beam of a pair of scales, or the Sun half set on the horizon. A cardinal sign, it opens autumn in the northern hemisphere and spring in the south.",
          details: [
            {
              kind: "p",
              text: "Some see in it the instrument of weighing and of justice, but also a setting sun half hidden by the horizon: an image of the autumn equinox, when light and darkness share the day in almost equal parts.",
            },
            {
              kind: "p",
              text: "The Sun enters Libra at the September equinox. The days then become shorter than the nights in the northern hemisphere; in the southern hemisphere, it is the other way round, and Libra marks the return of spring.",
            },
            {
              kind: "p",
              text: "Air and cardinal, Libra brings together the exchange of ideas and a spirit of initiative, turned towards relationships. Masculine and diurnal, it rules the kidneys in melothesia: organs that filter and regulate, like an inner balance.",
            },
          ],
        },
        mythe: {
          heading: "From claws to Scales",
          summary:
            "For the Greeks, these stars formed the Scorpion's claws, the Chelae. The Romans turned them into a pair of scales in the 1st century BCE: it is the only figure of the zodiac that represents an object.",
          details: [
            {
              kind: "p",
              text: "Aratus and Eratosthenes speak of the Scorpion's “Claws”, and the astronomer Ptolemy still keeps this name in the 2nd century CE. The Arabic names of the two main stars preserve the trace: Zubeneschamali means “the northern claw”, Zubenelgenubi “the southern claw”.",
            },
            {
              kind: "p",
              text: "The idea of scales is, however, older than Rome: the Babylonians already saw in this region the “balance of heaven”. The Romans brought it back into favour, and the poet Manilius, in the 1st century, saw in it the sign where day and night are equal.",
            },
            {
              kind: "p",
              text: "Placed at the feet of Virgo, identified with Justice, Libra naturally became the goddess's instrument: the pans that weigh human deeds impartially.",
            },
          ],
        },
        maitrises: {
          heading: "Venus and Saturn",
          summary:
            "Venus rules Libra, and Saturn is exalted here. Mars, ruler of the opposite sign, is in detriment, and the Sun, exalted in Aries, is in fall.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile: Venus, which also reigns over Taurus. In Libra, it would be the body of relationships, harmony and elegance, more than of sensual pleasures.",
                "Exaltation: Saturn, exalted at 21° Libra. For tradition, the body of law and measure flourishes in the sign of justice.",
                "Detriment: Mars, ruler of Aries, the opposite sign. The energy of combat would lose its directness here, forced to negotiate.",
                "Fall: the Sun, exalted in Aries. Individual will must here come to terms with that of others.",
              ],
            },
            {
              kind: "p",
              text: "Venus and Saturn together in the same sign: tradition reads in this the alliance of harmony and rules, of love and commitment.",
            },
          ],
        },
        decans: {
          heading: "The three decans of Libra",
          summary:
            "Three decans of 10° share out Libra. Each has its planetary face, in the Chaldean order, and its air sign, in the triplicity system.",
          details: [
            {
              kind: "list",
              items: [
                "From 0° to 10°: face of the Moon, triplicity of Libra, under Venus. The love of harmony would be clearest here.",
                "From 10° to 20°: face of Saturn, triplicity of Aquarius, under Saturn, or Uranus for modern astrologers. Saturn plays both roles here, and more independence is placed here.",
                "From 20° to 30°: face of Jupiter, triplicity of Gemini, under Mercury. Tradition reads more intellectual liveliness here.",
              ],
            },
            {
              kind: "p",
              text: "Libra receives the Moon, the last in the Chaldean order, then Saturn and Jupiter, which start it again; Mars will follow at the beginning of Scorpio. This cycle of seven bodies spread over 36 decans goes back to the astrologers of the Hellenistic period.",
            },
            {
              kind: "p",
              text: "The two systems do not say the same thing: the face links each slice to a body, the triplicity to a shade of element. Astrologers who use the decans often favour one or the other.",
            },
          ],
        },
        constellation: {
          heading: "The constellation of Libra",
          summary:
            "Libra covers 538.1 square degrees, slightly more than neighbouring Scorpius, but it is far less conspicuous. Its brightest star, Zubeneschamali (β Librae), has a magnitude of 2.61.",
          details: [
            {
              kind: "p",
              text: "Zubeneschamali just outshines Zubenelgenubi, the α star. Their Arabic names recall the time when these stars formed the Scorpion's claws. The constellation can be found between brilliant Spica and the red star Antares, in the evening, in late spring and early summer, fairly low in the south.",
            },
            {
              kind: "p",
              text: "About three thousand years ago, when the Babylonians named the “balance of heaven”, the Sun stood in front of these stars at the autumn equinox. The precession of the equinoxes has since moved this point into Virgo, even though people still sometimes speak of the “first point of Libra”. Today, the Sun passes through the constellation about a month after the dates of the sign.",
            },
          ],
        },
      },
    },

    scorpio: {
      tagline:
        "The eighth sign, Scorpio reigns at the heart of autumn: tradition sees in it intensity, depth and the power of transformation.",
      intro: {
        summary:
          "Scorpio, the eighth sign of the zodiac, occupies the middle of the northern autumn, when nature is stripped bare. A fixed water sign, ruled by Mars for tradition and by Pluto for modern astrologers, it symbolises intensity, passions and metamorphoses.",
        details: [
          {
            kind: "p",
            text: "The season of dead leaves gives it a symbolism of endings and renewal: what dies prepares what will be reborn. Astrologers associate Scorpio with deep emotions, secrets, undivided loyalty and the ability to rise again after hardship. These images, sometimes unsettling, belong to a symbolic tradition and are not a judgement on people.",
          },
        ],
      },
      keywords: ["intensity", "depth", "tenacity", "loyalty", "perceptiveness", "passion", "resilience"],
      shadowKeywords: ["jealousy", "resentment", "mistrust", "a need for control"],
      bodyPart: "the genitals",
      brightestStarName: "Antares",
      imageAlt:
        "Engraved and hand-coloured card from Urania's Mirror: a verdigris scorpion rearing up the full height of the card, claws open upwards, its tail curving down to the sting; among the pierced stars, Antares is marked in the middle of its body.",
      sections: {
        caractere: {
          heading: "Character according to tradition",
          summary:
            "Tradition makes Scorpio the sign of deep passions: intense, determined and loyal, it does nothing by halves. Its dark side speaks of jealousy, resentment and a taste for control.",
          details: [
            {
              kind: "p",
              text: "Astrologers credit it with a penetrating gaze that sees through hidden motives, a will that never lets go and great strength in times of crisis. Its attachment would be total, its loyalty complete, and its ability to transform itself after an ordeal remarkable.",
            },
            {
              kind: "p",
              text: "The flip side of this intensity: a mistrust that keeps others at a distance, a stubborn resentment towards those who have hurt it, possible jealousy and a need to stay in control of situations. Tradition calls it secretive, not inclined to open up.",
            },
            {
              kind: "p",
              text: "Long presented as a fearsome sign, Scorpio is now described with more nuance: its depth would also make it a precious confidant, able to stand by others in difficult times.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Scorpio in a chart",
          summary:
            "Scorpio takes on a different meaning depending on whether it hosts the Sun, the Moon or the Ascendant. The Moon, in particular, is in fall here according to tradition.",
          details: [
            {
              kind: "p",
              text: "With the Sun in Scorpio, astrologers describe a personality built through intensity: a need to understand what lies beneath the surface, to live things to the full, to go through crises and come out changed.",
            },
            {
              kind: "p",
              text: "With the Moon in fall in this sign, emotional life would be stormier: powerful emotions kept to oneself, deep attachments, fear of betrayal. Tradition also sees here a great capacity for empathy, fed by experience.",
            },
            {
              kind: "p",
              text: "The Ascendant in Scorpio would give an intense gaze, a magnetic presence and an initial reserve: you observe for a long time before opening up.",
            },
          ],
        },
        symbolique: {
          heading: "The sting and the dark season",
          summary:
            "The glyph of Scorpio looks like an M whose last leg ends in an arrow: the animal's sting, ready to strike. A fixed sign, it corresponds to the heart of autumn in the northern hemisphere.",
          details: [
            {
              kind: "p",
              text: "The design is almost that of Virgo, whose last leg curls back in a loop; in Scorpio, it rises into a point. It can be read as concentrated force and defence, an energy wholly turned towards a goal.",
            },
            {
              kind: "p",
              text: "When the Sun passes through Scorpio, the northern autumn has set in: the leaves fall, the days shorten quickly, and several cultures then honour their dead. In the southern hemisphere, the same period falls in mid-spring.",
            },
            {
              kind: "p",
              text: "Water and fixed, it combines depth of emotion with unshakeable constancy. Feminine and nocturnal, it rules the genitals in melothesia, which has linked it to sexuality, birth and the passing on of life.",
            },
          ],
        },
        mythe: {
          heading: "The scorpion and Orion",
          summary:
            "The celestial Scorpion is the one that fatally stung Orion, the giant hunter. The two figures are placed at opposite ends of the sky: when the Scorpion rises, Orion disappears below the horizon.",
          details: [
            {
              kind: "p",
              text: "Accounts vary as to the reason for this punishment. According to Aratus, Orion had offended Artemis, the huntress goddess, who sent a scorpion to kill him. Another version, also reported by Eratosthenes and Hyginus, blames his pride: Orion boasted that he could slay any beast, and the Earth, angered, sent him the scorpion.",
            },
            {
              kind: "p",
              text: "Either way, the giant pays for his arrogance. The scorpion was placed among the stars opposite Orion: one rises as the other sets, so that they can hardly be seen together, as if the hunter were still fleeing his vanquisher.",
            },
            {
              kind: "p",
              text: "The figure is much older than the Greeks: in Mesopotamia, these stars already formed a scorpion. For the Greeks, the animal was in fact longer: its claws took up the place of today's Libra.",
            },
          ],
        },
        maitrises: {
          heading: "Mars, then Pluto",
          summary:
            "Scorpio has two rulers: Mars for tradition, Pluto for modern astrologers. No body is exalted here; Venus is in detriment and the Moon in fall.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile: Mars, the traditional ruler, as for Aries; Pluto, discovered in 1930, was assigned to it by modern astrologers. Mars would take on a more strategic form here, while Pluto adds the symbolism of the depths and of rebirth.",
                "Exaltation: none in the traditional list of the seven bodies.",
                "Detriment: Venus, ruler of Taurus, the opposite sign. The body of gentleness and simple pleasures would find itself plunged into a climate of extreme passions.",
                "Fall: the Moon, exalted in Taurus. The need for calm and security would be put to the test here by the intensity of the sign.",
              ],
            },
            {
              kind: "p",
              text: "The Taurus-Scorpio axis thus sets what you own against what you share, stability against transformation.",
            },
          ],
        },
        decans: {
          heading: "The three decans of Scorpio",
          summary:
            "Scorpio is divided into three slices of 10°. The Chaldean order brings back Mars, the Sun and Venus here, as in Aries; the triplicities blend in the other water signs.",
          details: [
            {
              kind: "list",
              items: [
                "From 0° to 10°: face of Mars, triplicity of Scorpio, under Mars or Pluto. For tradition, Mars rules twice here.",
                "From 10° to 20°: face of the Sun, triplicity of Pisces, under Jupiter or Neptune. Intensity would take on a tinge of compassion here.",
                "From 20° to 30°: face of Venus, triplicity of Cancer, under the Moon. More tenderness and protectiveness are placed here.",
              ],
            },
            {
              kind: "p",
              text: "The sequence of faces is the same as in Aries: in seven signs, or 21 decans, the Chaldean order has gone round exactly three times. This system, from Hellenistic astrology, made the face a small dignity for the body placed in it.",
            },
            {
              kind: "p",
              text: "The triplicity method, more modern, presents the three decans as three faces of water: deep, then dreamy, then protective.",
            },
          ],
        },
        constellation: {
          heading: "Scorpius and Ophiuchus",
          summary:
            "The constellation of Scorpius covers 496.8 square degrees. Its brightest star, Antares (α Scorpii), is a red supergiant of average magnitude 1.06, slightly variable.",
          details: [
            {
              kind: "p",
              text: "Antares, whose Greek name means “like Mars” or “rival of Mars”, owes its orange tint to a relatively cool surface; it is hundreds of times wider than the Sun. The long curved tail, ending in Shaula, “the sting” in Arabic, can be seen on summer evenings, very low on the southern horizon as seen from France.",
            },
            {
              kind: "p",
              text: "The Sun spends only about a week in front of the stars of Scorpius. It then crosses, for more than two weeks, Ophiuchus, the Serpent Bearer, a large constellation depicting a man holding a snake, often identified with the healer Asclepius. Ophiuchus is not a sign: the astrologers' zodiac has twelve equal parts, whereas the ecliptic passes through thirteen constellations of unequal sizes.",
            },
            {
              kind: "p",
              text: "With the precession of the equinoxes, the Sun's passage through the celestial Scorpion comes about a month after the dates of the sign.",
            },
          ],
        },
      },
    },

    sagittarius: {
      tagline:
        "The ninth sign, Sagittarius completes the autumn: tradition sees in it enthusiasm, a thirst for new horizons and the search for meaning.",
      intro: {
        summary:
          "Sagittarius is the ninth sign of the zodiac, the one that leads the northern autumn into winter. A mutable fire sign ruled by Jupiter, it evokes, according to tradition, adventure, knowledge and an infectious optimism.",
        details: [
          {
            kind: "p",
            text: "Its archer, half man and half horse, aims far ahead: the sign speaks of travel, study, beliefs and everything that broadens the horizon. Astrologers associate it with frankness, humour, a love of freedom and the need to believe in something greater than oneself. These are symbolic correspondences, not certainties about character.",
          },
        ],
      },
      keywords: ["enthusiasm", "optimism", "a thirst for knowledge", "a spirit of adventure", "frankness", "generosity", "a love of freedom"],
      shadowKeywords: ["excess", "a lack of tact", "impatience with constraints", "dogmatism"],
      bodyPart: "the thighs and hips",
      brightestStarName: "Kaus Australis",
      imageAlt:
        "Engraved and hand-coloured card from Urania's Mirror: a bearded centaur in a flowing yellow cloak draws his bow; at his feet, a wreath of leaves, Corona Australis, the Southern Crown, along with a telescope and a microscope, small modern constellations, amid the pierced stars.",
      sections: {
        caractere: {
          heading: "Character according to tradition",
          summary:
            "Tradition sees Sagittarius as an enthusiastic, frank sign, hungry for discoveries and meaning. Its drive can also make it excessive, clumsy in its words or resistant to any constraint.",
          details: [
            {
              kind: "p",
              text: "Astrologers describe it as open, cheerful, curious about cultures and ideas, quick to set off on adventures, literally and figuratively. It is credited with spontaneous generosity, good-natured humour and sincere idealism: it would need to believe, to learn and to pass on.",
            },
            {
              kind: "p",
              text: "This appetite has its excesses: promises that are too big, impatience with details, a frankness that sometimes lacks tact. Tradition also mentions a tendency to preach, to want to convert others to its convictions, and a difficulty staying put.",
            },
            {
              kind: "p",
              text: "As always, the portrait is nuanced: a strong Sagittarius in a chart may turn towards quiet study rather than great journeys.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Sagittarius in a chart",
          summary:
            "The Sun, the Moon and the Ascendant each express the drive of Sagittarius in their own way. Jupiter, its ruler, then deserves a close look.",
          details: [
            {
              kind: "list",
              items: [
                "Sun in Sagittarius: an identity built through exploration, physical or intellectual, with a need to give meaning to your life and to share it.",
                "Moon in Sagittarius: frank, optimistic emotions, a need for space and freedom to feel good, a tendency to run from situations that hem you in.",
                "Ascendant in Sagittarius: an open, cordial bearing, a warm manner, an energy that makes people want to follow.",
              ],
            },
            {
              kind: "p",
              text: "Astrologers stress that a chart is read as a whole: an Ascendant in Sagittarius may very well sit alongside a home-loving Sun. It is this dialogue between the signs that makes a chart unique.",
            },
          ],
        },
        symbolique: {
          heading: "An arrow towards the horizon",
          summary:
            "The glyph of Sagittarius is an arrow pointing upwards, crossed by a small stroke: that of the celestial archer. A mutable sign, it closes autumn in the northern hemisphere.",
          details: [
            {
              kind: "p",
              text: "The arrow aimed at the sky evokes the distant goal, the ideal, the desire to go beyond limits. The stroke across it recalls the bow or the hand that holds it: the drive is resolute, but it has a direction.",
            },
            {
              kind: "p",
              text: "The Sun passes through Sagittarius at the end of the northern autumn, as the nights approach their greatest length, up to the December solstice. A sign of transition, it prepares for winter; in the southern hemisphere, the same period heralds summer.",
            },
            {
              kind: "p",
              text: "Fire and mutable, it combines enthusiasm with mobility: a fire that spreads rather than settles. Masculine and diurnal, it rules the thighs and hips in melothesia, the muscles of walking and galloping, very useful to a travelling centaur.",
            },
          ],
        },
        mythe: {
          heading: "The centaur archer",
          summary:
            "The constellation represents an archer with a horse's body, most often described as a centaur. Eratosthenes saw in it rather Crotus, a companion of the Muses; it is often confused with Chiron.",
          details: [
            {
              kind: "p",
              text: "Eratosthenes doubts that it is a centaur, since no centaur uses a bow. He recognises in it Crotus, son of Eupheme, the Muses' nurse, who lived with them on Mount Helicon. The inventor of archery, he hunted on horseback and applauded the Muses' songs; they asked Zeus to place him among the stars. Hyginus takes up this story and, in his Fabulae, names Pan as the father of Crotus.",
            },
            {
              kind: "p",
              text: "Aratus and Ptolemy, however, describe a four-legged creature, and that is how the maps have drawn it. The wise Chiron, tutor of Achilles, has often been associated with Sagittarius, but he has his own constellation, Centaurus.",
            },
            {
              kind: "p",
              text: "The image comes from Mesopotamia: the Babylonians already depicted here a winged archer god with an animal's body.",
            },
          ],
        },
        maitrises: {
          heading: "The domicile of Jupiter",
          summary:
            "Jupiter, the body of expansion and confidence, rules Sagittarius. No body is exalted or in fall here; Mercury, ruler of Gemini, is in detriment.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile: Jupiter, which also rules Pisces in tradition. In Sagittarius, it would show its most conquering face: travel, knowledge, faith in the future.",
                "Exaltation: none among the seven traditional bodies. Jupiter has its own in Cancer.",
                "Detriment: Mercury, ruler of Gemini, the opposite sign. The body of detail and argument would feel cramped in a sign that prefers grand visions.",
                "Fall: none, since Gemini itself hosts no exaltation.",
              ],
            },
            {
              kind: "p",
              text: "For astrologers, Jupiter is at home in Sagittarius like a professor in a library: free to broaden, to understand and to pass on.",
            },
          ],
        },
        decans: {
          heading: "The three decans of Sagittarius",
          summary:
            "Sagittarius has three decans of 10°. The faces follow the Chaldean order, and the triplicities run through the three fire signs.",
          details: [
            {
              kind: "list",
              items: [
                "From 0° to 10°: face of Mercury, triplicity of Sagittarius, under Jupiter. The most Jupiterian decan.",
                "From 10° to 20°: face of the Moon, triplicity of Aries, under Mars. The drive would become more combative here.",
                "From 20° to 30°: face of Saturn, triplicity of Leo, under the Sun. Tradition places more radiance here.",
              ],
            },
            {
              kind: "p",
              text: "The sequence of faces, Mercury, Moon, Saturn, is the same as in Taurus. It continues the Chaldean order without a break from the beginning of Aries and forms, with the other signs, a loop of 36 decans.",
            },
            {
              kind: "p",
              text: "In the triplicity system, each slice thus borrows the colour of a different fire sign, in zodiacal order: Sagittarius, Aries, Leo.",
            },
          ],
        },
        constellation: {
          heading: "Sagittarius and the centre of the Galaxy",
          summary:
            "The constellation of Sagittarius covers 867.4 square degrees. Its brightest star, Kaus Australis (ε Sagittarii), reaches magnitude 1.85; its name means “the southern part of the bow”.",
          details: [
            {
              kind: "p",
              text: "Its main stars trace a shape that amateur astronomers nickname the Teapot. Close by lies the direction of the centre of our galaxy, the Milky Way, where a giant black hole, Sagittarius A*, is hidden. The region, very rich in nebulae and clusters, can be seen on summer evenings, skimming the southern horizon as seen from France.",
            },
            {
              kind: "p",
              text: "Before reaching Sagittarius, the Sun passes through Ophiuchus, the Serpent Bearer, a constellation that has never been a sign. The astrological zodiac divides the ecliptic into twelve equal parts of 30°, whereas the constellations, whose boundaries were fixed in 1930, are of very unequal sizes.",
            },
            {
              kind: "p",
              text: "With the precession of the equinoxes, the Sun now passes through the stars of Sagittarius about a month after the dates of the sign: it is even there at the December solstice, which used to fall in Capricorn.",
            },
          ],
        },
      },
    },

    capricorn: {
      tagline:
        "The tenth sign, Capricorn opens the winter: tradition sees in it patient ambition, a sense of responsibility and perseverance.",
      intro: {
        summary:
          "Capricorn, the tenth sign of the zodiac, begins at the December solstice, the longest night of the year in the northern hemisphere. A cardinal earth sign ruled by Saturn, it symbolises, according to tradition, effort, structure and long-term ambitions.",
        details: [
          {
            kind: "p",
            text: "In the depths of winter, the light nonetheless begins to return: Capricorn is the sign of the slow climb, that of the goat scaling the mountain step by step. Astrologers associate it with career, responsibilities, respect for time and for rules. These correspondences belong to a symbolic tradition and are not a fate.",
          },
        ],
      },
      keywords: ["ambition", "perseverance", "a sense of responsibility", "patience", "pragmatism", "discipline", "reliability"],
      shadowKeywords: ["rigidity", "pessimism", "apparent coldness", "excessive seriousness"],
      bodyPart: "the knees",
      brightestStarName: "Deneb Algedi",
      imageAlt:
        "Engraved and hand-coloured card from Urania's Mirror: a reclining goat with a thick coat and long ringed horns, the rear of its body ending in a coiled green fish's tail; the stars are pierced through the figure.",
      sections: {
        caractere: {
          heading: "Character according to tradition",
          summary:
            "Tradition describes Capricorn as a serious, patient and ambitious sign that moves step by step towards its goals. Its reserve can pass for coldness, and its caution can turn into pessimism.",
          details: [
            {
              kind: "p",
              text: "Astrologers credit it with great endurance, a keen sense of duty and the ability to build for the long term: a career, a family, a body of work. It is said to be reliable and discreet, with a deadpan sense of humour, and often more sensitive than it lets on.",
            },
            {
              kind: "p",
              text: "The same gravity has its pitfalls: rigidity in the face of whatever breaks the rules, a tendency to see the glass half empty, overwork that leaves little room for pleasure. Tradition also mentions an ambition that can put success before relationships.",
            },
            {
              kind: "p",
              text: "Some astrologers like to say that Capricorn grows younger with age, as if it had been serious too early. Like every portrait of a sign, this one is shaded by contact with the rest of the chart.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Capricorn in a chart",
          summary:
            "Capricorn does not play the same role depending on whether it hosts the Sun, the Moon or the Ascendant. For the Moon, tradition even speaks of detriment.",
          details: [
            {
              kind: "p",
              text: "The Sun in Capricorn would suggest an identity forged through effort and self-control: setting yourself a goal, sticking to it, earning respect through your actions. Success would count less as a moment of glory than as something built.",
            },
            {
              kind: "p",
              text: "The Moon is in detriment in this sign: according to tradition, emotions would be expressed with restraint, as if security came first through control and responsibility. Deep feelings would be shown through actions rather than words.",
            },
            {
              kind: "p",
              text: "The Ascendant in Capricorn would give a sober, composed bearing, a reserved manner that inspires trust, and an early maturity in the way you present yourself.",
            },
          ],
        },
        symbolique: {
          heading: "Horns and a fish's tail",
          summary:
            "The glyph of Capricorn links an angular stroke to a loop: the horned head of the goat and the coiled tail of the fish. A cardinal sign, it marks the start of winter in the northern hemisphere and of summer in the south.",
          details: [
            {
              kind: "p",
              text: "The design sums up the hybrid creature of the constellation, half goat, half fish. It can be read as the union of the mountain and the depths: ambition climbing towards the summits, and a more secret inner life, coiled in on itself.",
            },
            {
              kind: "p",
              text: "The Sun enters Capricorn at the December solstice, at the lowest point of its course in the sky of the northern hemisphere; after that, the days grow longer. The Tropic of Capricorn owes its name to this moment, because two thousand years ago the Sun stood in front of the stars of Capricorn at that time. South of the equator, it is the summer solstice.",
            },
            {
              kind: "p",
              text: "Earth and cardinal, it brings together the concrete and initiative: the drive of a project being built. Feminine and nocturnal, it rules the knees in melothesia, the joints that let you climb, kneel and carry.",
            },
          ],
        },
        mythe: {
          heading: "The goat-fish",
          summary:
            "The goat with a fish's tail comes from Mesopotamia, where it was the emblem of the god Ea, or Enki, lord of fresh water and wisdom. The Greeks saw in it Pan or Aegipan, gods with goat's horns.",
          details: [
            {
              kind: "p",
              text: "The Babylonians called this constellation the “goat-fish” and made it the symbol of Ea, which can be found carved on boundary stones. The Greeks called it Aigokeros, “goat-horned”, and looked for a story for it in their own mythology.",
            },
            {
              kind: "p",
              text: "According to Hyginus, it is Aegipan, raised alongside Zeus, who for that reason wished to place him in the sky. During the war against the Titans, Aegipan spread among the enemy the fear we call “panic”; Eratosthenes explains his fish's tail by the seashell he blew into, Hyginus by the shells he hurled.",
            },
            {
              kind: "p",
              text: "Hyginus also tells another story: when the monster Typhon burst in among the gods, Pan threw himself into a river and turned the submerged part of his body into a fish. Admiring his cunning, Zeus placed his image among the stars.",
            },
          ],
        },
        maitrises: {
          heading: "Saturn and Mars",
          summary:
            "Saturn, the body of time and discipline, rules Capricorn, where Mars finds its exaltation. The Moon is in detriment here and Jupiter in fall.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile: Saturn, which also rules Aquarius in tradition. In Capricorn, it would be the body of structure, patience and solid foundations.",
                "Exaltation: Mars, exalted at 28° Capricorn. Martian energy, channelled by discipline, would become effective and enduring.",
                "Detriment: the Moon, ruler of Cancer, the opposite sign. The body of emotions and comfort would find itself in a sign of restraint.",
                "Fall: Jupiter, exalted in Cancer, is in fall in Capricorn: Jupiterian confidence and largesse would run up against caution here.",
              ],
            },
            {
              kind: "p",
              text: "Saturn and Mars together: tradition sees in this the image of organised effort, of an ambition that gives itself the means to succeed.",
            },
          ],
        },
        decans: {
          heading: "The three decans of Capricorn",
          summary:
            "Three decans of 10° make up Capricorn, each with its face, in the Chaldean order, and its earth sign, in the triplicity method.",
          details: [
            {
              kind: "list",
              items: [
                "From 0° to 10°: face of Jupiter, triplicity of Capricorn, under Saturn. The seriousness of the sign would be most marked here.",
                "From 10° to 20°: face of Mars, triplicity of Taurus, under Venus. A steadier and more sensual ambition is placed here.",
                "From 20° to 30°: face of the Sun, triplicity of Virgo, under Mercury. Tradition reads more meticulousness here.",
              ],
            },
            {
              kind: "p",
              text: "Mars has its face in the second decan, and its degree of exaltation, 28°, falls in the third, which is the face of the Sun. Ancient astrologers thus layered several kinds of dignity to judge the strength of a body at a precise degree.",
            },
            {
              kind: "p",
              text: "The triplicity reading, more modern, shades the sign with the two other earth signs without changing its nature: the goat remains a mountain creature.",
            },
          ],
        },
        constellation: {
          heading: "The constellation of Capricorn",
          summary:
            "Covering 413.9 square degrees, Capricornus is the smallest constellation of the zodiac. Its brightest star, Deneb Algedi (δ Capricorni), reaches magnitude 2.85; its Arabic name means “the tail of the kid”.",
          details: [
            {
              kind: "p",
              text: "Faint as it is, the constellation traces a large triangle with curved sides, to be looked for in the evening in late summer and early autumn, low in the south. Deneb Algedi marks the base of the animal's tail; Algedi, the α star, is a double that can be split with the naked eye under a dark sky.",
            },
            {
              kind: "p",
              text: "Two thousand years ago, the Sun was in Capricorn at the December solstice, hence the name of the Tropic of Capricorn. The precession of the equinoxes has made this solstice slide into Sagittarius. The Sun now passes through the stars of Capricorn only about a month after the dates of the sign.",
            },
          ],
        },
      },
    },

    aquarius: {
      tagline:
        "The eleventh sign, Aquarius reigns in the heart of winter: tradition sees in it independence of mind, friendship and a taste for the future.",
      intro: {
        summary:
          "Aquarius, the eleventh sign of the zodiac, covers the middle of the northern winter. A fixed air sign, ruled by Saturn for tradition and by Uranus for modern astrologers, it evokes originality, collective ideals and friendship.",
        details: [
          {
            kind: "p",
            text: "Its water bearer pours over the world a stream that anyone can gather: an image of sharing and of knowledge held in common. Astrologers associate Aquarius with groups, friendships, plans for the future, invention and a spirit of freedom.",
          },
          {
            kind: "p",
            text: "The “Age of Aquarius”, popularised in the 1960s, refers to the period when the vernal point will enter the constellation of Aquarius: its date is debated, because it depends on the boundaries given to the constellations.",
          },
        ],
      },
      keywords: ["originality", "independence", "a sense of community", "friendship", "inventiveness", "open-mindedness", "idealism"],
      shadowKeywords: ["detachment", "contrariness", "stubbornness", "unpredictability"],
      bodyPart: "the calves and ankles",
      brightestStarName: "Sadalsuud",
      imageAlt:
        "Engraved and hand-coloured card from Urania's Mirror: a bearded man crowned with leaves pours water from a large urn; the stream flows down to the Southern Fish, at the bottom of the card, near a hot-air balloon, an abandoned constellation; the stars are pierced.",
      sections: {
        caractere: {
          heading: "Character according to tradition",
          summary:
            "Tradition credits Aquarius with a free, inventive mind turned towards others, more attached to ideas and causes than to conventions. Its independence can make it distant, or stubborn in its convictions.",
          details: [
            {
              kind: "p",
              text: "Astrologers describe it as original, eager for novelty, drawn to science, technology or utopias. It is credited with a strong sense of friendship, tolerance of differences and a desire to make the world fairer. It would like to think for itself, even at the risk of surprising others.",
            },
            {
              kind: "p",
              text: "The flip side of this temperament: an emotional detachment that bewilders those close to it, a taste for contradiction and, as befits a fixed sign, an unexpected stubbornness in a mind that prides itself on being so open. Tradition also mentions unpredictable reactions and difficulty bending to rules.",
            },
            {
              kind: "p",
              text: "This portrait blends two legacies, the rigour of Saturn and the Uranian spirit of rupture: according to astrologers, one or the other dominates from one chart to the next.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Aquarius in a chart",
          summary:
            "Sun, Moon or Ascendant in Aquarius: each position gives the sign a different place. The Sun, moreover, is in detriment here according to tradition.",
          details: [
            {
              kind: "list",
              items: [
                "The Sun in detriment in Aquarius would suggest an identity built less through personal assertion than through the group, ideas and shared causes.",
                "The Moon in Aquarius would suggest a need for space in emotional life, a way of stepping back from your emotions, and friendships as important as love affairs.",
                "The Ascendant in Aquarius would give a distinctive bearing, a friendly but somewhat distant manner, and a way of presenting yourself that does not follow fashion.",
              ],
            },
            {
              kind: "p",
              text: "Astrologers also look at Saturn and Uranus, its two rulers, to see which face of the sign wins out.",
            },
          ],
        },
        symbolique: {
          heading: "The water bearer's waves",
          summary:
            "The glyph of Aquarius draws two parallel zigzag lines, like waves or ripples. A fixed sign, it corresponds to the heart of winter in the northern hemisphere.",
          details: [
            {
              kind: "p",
              text: "These zigzags evoke the water flowing from the urn; a similar sign already stood for water in Egyptian hieroglyphic writing. Modern astrologers also see in them waves, electricity or currents of ideas: despite its name, Aquarius is an air sign.",
            },
            {
              kind: "p",
              text: "When the Sun passes through Aquarius, the northern winter is well established, but the days are getting noticeably longer. In the southern hemisphere, the same period corresponds to high summer.",
            },
            {
              kind: "p",
              text: "Air and fixed, it combines ideas with constancy: convictions that do not change with the wind. Masculine and diurnal, it rules the calves and ankles in melothesia, the part of the body that carries you forward as you walk.",
            },
          ],
        },
        mythe: {
          heading: "Ganymede, cupbearer of the gods",
          summary:
            "Aquarius is most often identified with Ganymede, a Trojan prince carried off by Zeus to serve drink to the gods of Olympus. Other authors see in it Deucalion, the survivor of the flood.",
          details: [
            {
              kind: "p",
              text: "Ganymede, son of King Tros, was held to be the most beautiful of mortals. One day as he was tending his father's flocks, Zeus, in the form of an eagle, or according to other accounts by means of an eagle, carried him off to Olympus. The young man became the cupbearer of the gods, the one who pours the nectar; the bird has its own constellation, Aquila, the Eagle. Ovid tells of the abduction in the Metamorphoses.",
            },
            {
              kind: "p",
              text: "In the Fasti, Ovid specifies that the water of Aquarius is mixed with nectar. Hyginus reports other identifications: Deucalion, who survived the flood, or Cecrops, an ancient king of Athens. The figure pouring the water has indeed taken different names according to the period and the people.",
            },
          ],
        },
        maitrises: {
          heading: "Saturn, then Uranus",
          summary:
            "Aquarius has two rulers: Saturn for tradition, Uranus for modern astrologers. No body is exalted or in fall here; the Sun, ruler of Leo, is in detriment.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile: Saturn, the traditional ruler, which also rules Capricorn; Uranus, discovered in 1781, was assigned to it by modern astrologers. Saturn brings structure and constancy, Uranus innovation and the spirit of rupture.",
                "Exaltation: none in the traditional list of the seven bodies.",
                "Detriment: the Sun, ruler of Leo, the opposite sign. The body of individual self-assertion would find itself in the sign of the collective.",
                "Fall: none, since Leo itself hosts no exaltation.",
              ],
            },
            {
              kind: "p",
              text: "The Leo-Aquarius axis thus sets the heart against the head, the individual who shines against the group that shares; tradition sees in them two complementary ways of living freedom.",
            },
          ],
        },
        decans: {
          heading: "The three decans of Aquarius",
          summary:
            "Aquarius is divided into three decans of 10°, each marked by a planetary face and by one of the three air signs.",
          details: [
            {
              kind: "list",
              items: [
                "From 0° to 10°: face of Venus, triplicity of Aquarius, under Saturn or Uranus. The spirit of the sign would be most pronounced here.",
                "From 10° to 20°: face of Mercury, triplicity of Gemini, also under Mercury. More curiosity and wit are placed here.",
                "From 20° to 30°: face of the Moon, triplicity of Libra, under Venus. Tradition reads a greater feel for relationships here.",
              ],
            },
            {
              kind: "p",
              text: "The faces Venus, Mercury and Moon repeat those of Cancer: applied continuously from Aries, the Chaldean order lands on the same sequence every seven signs. In the second decan, Mercury is both the body of the face and the ruler of the triplicity sign.",
            },
            {
              kind: "p",
              text: "The face is the legacy of Hellenistic astrology, the triplicity a more modern reading; the two can be layered in the interpretation of a degree.",
            },
          ],
        },
        constellation: {
          heading: "The constellation of Aquarius",
          summary:
            "Aquarius covers 979.9 square degrees, making it one of the largest constellations, but also one of the faintest. Its brightest star, Sadalsuud (β Aquarii), reaches only magnitude 2.87.",
          details: [
            {
              kind: "p",
              text: "Sadalsuud comes from Arabic and is often translated as “luck of lucks”; its neighbour Sadalmelik, the α star, is almost as bright. A small Y of four stars outlines the urn, from which the stream flows down towards Fomalhaut, in the Southern Fish. The constellation can be seen in the evening in autumn, in a region of the sky rich in watery figures: Pisces, Cetus the Whale, Capricornus.",
            },
            {
              kind: "p",
              text: "Aquarius is also home to the Helix Nebula, one of the planetary nebulae closest to us. Every spring, the shooting stars of the Eta Aquariids, dust left behind by Halley's Comet, seem to burst from it.",
            },
            {
              kind: "p",
              text: "The precession of the equinoxes shifts the zodiac relative to the stars: the Sun now passes through Aquarius about a month after the dates of the sign. The vernal point, for its part, will enter it around the year 2600.",
            },
          ],
        },
      },
    },

    pisces: {
      tagline:
        "The twelfth and last sign, Pisces closes the winter and the cycle of the zodiac: tradition sees in it empathy, imagination and sensitivity.",
      intro: {
        summary:
          "Pisces is the twelfth and last sign of the zodiac, just before the March equinox. A mutable water sign, ruled by Jupiter for tradition and by Neptune for modern astrologers, it symbolises compassion, dreams and a sense of oneness.",
        details: [
          {
            kind: "p",
            text: "The last in the round, the sign symbolically gathers up everything that came before, before the cycle starts again with Aries. Astrologers associate it with intuition, art, spirituality, devotion, and a porous boundary between oneself and others. These are images from a symbolic tradition, not truths about people born at this time of year.",
          },
        ],
      },
      keywords: ["empathy", "imagination", "sensitivity", "compassion", "intuition", "generosity", "creativity"],
      shadowKeywords: ["confusion", "escapism", "suggestibility", "a lack of boundaries"],
      bodyPart: "the feet",
      brightestStarName: "Alpherg",
      imageAlt:
        "Engraved and hand-coloured card from Urania's Mirror: two green fish with pinkish fins, one swimming upwards, the other horizontally, joined by a long red ribbon knotted at one point, near the star Alrescha; the stars are pierced.",
      sections: {
        caractere: {
          heading: "Character according to tradition",
          summary:
            "Tradition makes Pisces a sensitive, intuitive and compassionate sign, open to dreams as well as to the suffering of others. This porousness can also blur its bearings and push it to escape reality.",
          details: [
            {
              kind: "p",
              text: "Astrologers credit it with a teeming imagination, often turned towards art, music or spirituality, and a remarkable empathy: Pisces would feel what others are going through as if living it itself. It is said to be devoted, tolerant and capable of forgiving a great deal.",
            },
            {
              kind: "p",
              text: "The same gift has its risks: difficulty setting boundaries, a tendency to be easily swayed, to lose itself in daydreams or to put off decisions. Tradition also mentions a fragility in the face of the world's harshness, and a need for places of refuge.",
            },
            {
              kind: "p",
              text: "These traits form an archetype, that of the ocean where everything mingles. In a real chart, they are in dialogue with other placements, sometimes very down to earth.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Pisces in a chart",
          summary:
            "The sign of Pisces is not expressed in the same way through the Sun, the Moon or the Ascendant. Venus, exalted in this sign, also plays a special role here.",
          details: [
            {
              kind: "p",
              text: "With the Sun in Pisces, the personality would be built through sensitivity and imagination: a need to find meaning, to create, to help, sometimes to step back behind a cause or a work.",
            },
            {
              kind: "p",
              text: "The Moon in Pisces would describe an emotional life very open to atmospheres, great tenderness, and a need for calm, music or solitude to recharge.",
            },
            {
              kind: "p",
              text: "The Ascendant in Pisces would give a dreamy gaze, a gentleness in first contacts and a gift for attuning to the person you are talking to. Astrologers then look closely at Jupiter and Neptune, the rulers of the sign.",
            },
          ],
        },
        symbolique: {
          heading: "Two fish bound together",
          summary:
            "The glyph of Pisces shows two back-to-back arcs joined by a horizontal stroke: two fish swimming in opposite directions, tied to each other. A mutable sign, it closes winter in the northern hemisphere.",
          details: [
            {
              kind: "p",
              text: "The stroke that joins them recalls the cord of the constellation, which links the two fish by their tails. It can be read as the duality between the visible world and the inner world, or between two opposing impulses that the sign tries to reconcile.",
            },
            {
              kind: "p",
              text: "The Sun passes through Pisces at the end of the northern winter, up to the March equinox, which opens a new cycle. In the southern hemisphere, the same period marks the end of summer.",
            },
            {
              kind: "p",
              text: "Water and mutable, Pisces combines sensitivity with the ability to change shape, like water taking the form of any container. Feminine and nocturnal, it rules the feet in melothesia: the list that begins with the head in Aries thus ends at the bottom of the body.",
            },
          ],
        },
        mythe: {
          heading: "Aphrodite and Eros against Typhon",
          summary:
            "Pisces recalls the flight of Aphrodite and her son Eros from the monster Typhon. On the banks of the Euphrates, they threw themselves into the water and were rescued by two fish, or were themselves turned into fish.",
          details: [
            {
              kind: "p",
              text: "Typhon, a giant with a hundred serpent heads, had been unleashed against the gods of Olympus. Aphrodite, whom the Romans called Venus, and Eros, their Cupid, had taken refuge near the Euphrates, in Syria. When the monster appeared, they plunged into the river.",
            },
            {
              kind: "p",
              text: "Ovid tells in the Fasti how two fish took them on their backs and carried them to safety; as a reward, they were given a place among the stars, and that, he adds, is why the Syrians refused to eat fish. Hyginus reports another version: the goddess and her son turned themselves into fish.",
            },
            {
              kind: "p",
              text: "Eratosthenes, finally, sees in the two Fishes the offspring of the great fish represented by the Southern Fish, saviour of a Syrian goddess, Derceto. The cord linking the two fish, for its part, seems to have been inherited from the Babylonians.",
            },
          ],
        },
        maitrises: {
          heading: "Jupiter, Neptune and Venus",
          summary:
            "Pisces has two rulers, Jupiter for tradition and Neptune for modern astrologers, and hosts the exaltation of Venus. Mercury is both in detriment and in fall here.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile: Jupiter, which also rules Sagittarius; Neptune, discovered in 1846, was assigned to the sign by modern astrologers. Jupiter brings kindness to it, Neptune dreams and the dissolving of boundaries.",
                "Exaltation: Venus, exalted at 27° Pisces. According to tradition, love would become its most generous and unconditional here.",
                "Detriment: Mercury, ruler of Virgo, the opposite sign.",
                "Fall: Mercury again, exalted in Virgo. The body of analysis and logic is thus doubly ill at ease in a sign of intuition and mist.",
              ],
            },
            {
              kind: "p",
              text: "This situation echoes that of Virgo, where Mercury is both ruler and exalted: on the Virgo-Pisces axis, the reason that sorts stands against the sensitivity that unites.",
            },
          ],
        },
        decans: {
          heading: "The three decans of Pisces",
          summary:
            "Pisces is divided into three decans of 10°. Its last decan closes the round of the 36 faces, which returns to Mars, as at the first degree of Aries.",
          details: [
            {
              kind: "list",
              items: [
                "From 0° to 10°: face of Saturn, triplicity of Pisces, under Jupiter or Neptune. The dreaminess of the sign would be at its purest here.",
                "From 10° to 20°: face of Jupiter, triplicity of Cancer, under the Moon. More protective tenderness is placed here.",
                "From 20° to 30°: face of Mars, triplicity of Scorpio, under Mars or Pluto. Tradition reads more intensity here.",
              ],
            },
            {
              kind: "p",
              text: "Thirty-six decans for seven bodies: the division does not come out even, and Mars, which opens the first decan of Aries, also rules the last one of Pisces. The loop thus closes: the end of the zodiac meets its beginning.",
            },
            {
              kind: "p",
              text: "In the third decan, Mars is moreover both the face and the traditional ruler of the triplicity sign. The triplicity system, more modern, colours the three slices with the three water signs, in zodiacal order.",
            },
          ],
        },
        constellation: {
          heading: "The constellation of Pisces",
          summary:
            "Pisces covers 889.4 square degrees but remains very faint. Its brightest star, Alpherg (η Piscium), reaches only magnitude 3.62 and lies on the cord, near the tail of the northern fish.",
          details: [
            {
              kind: "p",
              text: "You need a dark sky to follow the figure, in the evening, in autumn, south of the Great Square of Pegasus. The western fish can be spotted by a small ring of stars; the knot joining the two cords is marked by Alrescha, “the cord” in Arabic.",
            },
            {
              kind: "p",
              text: "It is in this constellation that the vernal point lies today, the Sun's position at the March equinox and the origin of the tropical zodiac. It was in Aries in Hipparchus's time; the precession of the equinoxes has moved it into Pisces, and it will reach Aquarius around the year 2600. The Sun thus passes through the stars of Pisces about a month after the dates of the sign.",
            },
          ],
        },
      },
    },
  },
};
