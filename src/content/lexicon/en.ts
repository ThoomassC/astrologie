import type { LexiconContent } from "./types";

/** Glossary: the words of astrology, in English alphabetical order, each with its cross-references. */
export const LEXICON_EN: LexiconContent = {
  title: "Glossary",
  lead: "The words of astrology, from Ascendant to zodiac, explained simply, with what tradition says about them and, where needed, what astronomy says.",
  entries: [
    {
      id: "ere-du-verseau",
      term: "Age of Aquarius",
      text: {
        summary:
          "According to some astrologers, humanity will enter the Age of Aquarius when the point of the March equinox passes from the constellation of Pisces to that of Aquarius.",
        details: [
          {
            kind: "p",
            text: "Its date is hotly debated: since the constellations have no agreed boundary, astrologers suggest years ranging from the 15th to the 36th century. According to the official constellation boundaries, the vernal point will not enter Aquarius until 2597.",
          },
        ],
      },
      see: ["precession", "point-vernal", "constellation"],
    },
    {
      id: "angle",
      term: "Angle",
      text: {
        summary:
          "The four angles of a chart are the Ascendant, the Descendant, the Midheaven and the Imum Coeli. They mark where the ecliptic crosses the horizon and the meridian of the place of birth.",
        details: [
          {
            kind: "p",
            text: "According to tradition, these are the most sensitive points in the chart: a body close to an angle is called angular and is held to be powerful. The angles depend on the time and place; without a time of birth, they cannot be calculated.",
          },
        ],
      },
      see: ["ascendant", "milieu-du-ciel", "maison"],
    },
    {
      id: "ascendant",
      term: "Ascendant",
      text: {
        summary:
          "The Ascendant is the degree of the zodiac that was rising on the eastern horizon at the moment and place of birth. It opens the 1st house.",
        details: [
          {
            kind: "p",
            text: "The sky turns by one degree in about four minutes: the Ascendant therefore changes sign every two hours on average, which is why the time of birth matters so much. Tradition sees in it the way you present yourself to the world, and the body; the Greeks called it hōroskopos, from which the word horoscope comes.",
          },
        ],
      },
      see: ["angle", "descendant", "horoscope"],
    },
    {
      id: "aspect",
      term: "Aspect",
      text: {
        summary:
          "An aspect is a notable angle between two bodies, measured along the zodiac: 0° for the conjunction, 60° for the sextile, 90° for the square, 120° for the trine, 180° for the opposition.",
        details: [
          {
            kind: "p",
            text: "Tradition calls some aspects harmonious, such as the trine and the sextile, and others tense, such as the square and the opposition. The exact angle is rare: a margin is allowed, the orb. Minor aspects, such as the quincunx, complete the list.",
          },
        ],
      },
      see: ["orbe", "conjonction", "quinconce"],
    },
    {
      id: "astrologie",
      term: "Astrology",
      text: {
        summary:
          "Astrology is a tradition that links the positions of the heavenly bodies to human life, character and events. Its name comes from the Greek astron, star, and logos, word or study.",
        details: [
          {
            kind: "p",
            text: "Born in Mesopotamia, it was long confused with astronomy, the science that studies the heavenly bodies for their own sake. The two parted ways in the 17th century; the tests carried out since have not shown that astrology describes a person or predicts an event better than chance.",
          },
        ],
      },
      see: ["horoscope", "zodiaque", "theme-natal"],
    },
    {
      id: "theme-natal",
      term: "Birth chart",
      text: {
        summary:
          "The birth chart, or natal chart, is the map of the sky at the moment and place of a birth: the positions of the bodies in the signs and houses, and the aspects they form.",
        details: [
          {
            kind: "p",
            text: "It is drawn as a wheel and calculated from the date, time and place. Astrologers read it as a symbolic portrait; no study has shown that it describes a personality better than chance.",
          },
        ],
      },
      see: ["ascendant", "maison", "aspect"],
    },
    {
      id: "cardinal",
      term: "Cardinal",
      text: {
        summary:
          "The cardinal signs are Aries, Cancer, Libra and Capricorn: each begins at an equinox or a solstice and opens a season.",
        details: [
          {
            kind: "p",
            text: "This is one of the three modalities, with the fixed and mutable signs. Tradition sees in it initiative, drive and a taste for getting things started. The word comes from the Latin cardo, hinge: these signs are the hinges of the year.",
          },
        ],
      },
      see: ["modalite", "fixe", "mutable"],
    },
    {
      id: "conjonction",
      term: "Conjunction",
      text: {
        summary:
          "There is a conjunction when two bodies are at the same place in the zodiac, or nearly so: the angle between them is 0°, within the orb.",
        details: [
          {
            kind: "p",
            text: "Tradition sees in it a fusion of the two functions, neither harmonious nor tense in itself: everything depends on the bodies involved. The great conjunctions of Jupiter and Saturn, which recur about every twenty years, were long used by astrologers to divide history into periods.",
          },
        ],
      },
      see: ["aspect", "orbe", "stellium"],
    },
    {
      id: "constellation",
      term: "Constellation",
      text: {
        summary:
          "A constellation is a region of the sky named after a figure made by stars. The International Astronomical Union recognises 88, whose boundaries were published in 1930.",
        details: [
          {
            kind: "p",
            text: "They should not be confused with the signs: the Sun passes through thirteen constellations of very unequal sizes, whereas the astrologers' zodiac has twelve signs of 30°. Precession has, moreover, shifted signs and constellations by about one place since Antiquity.",
          },
        ],
      },
      see: ["signe", "ophiuchus", "precession"],
    },
    {
      id: "cuspide",
      term: "Cusp",
      text: {
        summary:
          "A cusp is the beginning of a house, or more broadly the boundary between two houses or two signs. The word comes from the Latin cuspis, point.",
        details: [
          {
            kind: "p",
            text: "In most systems, the cusp of the 1st house is the Ascendant, and that of the 10th house the Midheaven. A person born as the Sun was changing sign is said to be “born on the cusp”, but the calculation always places the Sun in one sign or the other.",
          },
        ],
      },
      see: ["maison", "placidus", "signe"],
    },
    {
      id: "decan",
      term: "Decan",
      text: {
        summary: "A decan is a third of a sign, or 10° of the zodiac: each sign has three, and the zodiac thirty-six.",
        details: [
          {
            kind: "p",
            text: "The decans come from ancient Egypt, where thirty-six groups of stars were used to tell the time at night. Graeco-Roman tradition assigned them to planets, in the Chaldean order; modern authors tend instead to link them to the signs of the same element.",
          },
        ],
      },
      see: ["signe", "element"],
    },
    {
      id: "descendant",
      term: "Descendant",
      text: {
        summary:
          "The Descendant is the degree of the zodiac that was setting on the western horizon at the moment of birth, directly opposite the Ascendant. It opens the 7th house.",
        details: [
          {
            kind: "p",
            text: "Tradition reads in it the relationship with others: partnership, associations, open enemies. Like the Ascendant, it can only be calculated with the time of birth.",
          },
        ],
      },
      see: ["ascendant", "angle", "maison"],
    },
    {
      id: "exil",
      term: "Detriment",
      text: {
        summary: "A planet is in detriment in the sign opposite its domicile: Mars, ruler of Aries, is thus in detriment in Libra.",
        details: [
          {
            kind: "p",
            text: "Tradition sees in it a planet far from home, which has to make do with unfavourable surroundings. It is also called exile; the word detriment comes from the Latin detrimentum, loss or damage.",
          },
        ],
      },
      see: ["domicile", "chute", "dignite"],
    },
    {
      id: "dignite",
      term: "Dignity",
      text: {
        summary:
          "In tradition, the dignities measure the strength of a planet according to the sign it is in. In its domicile or exaltation, the planet is said to be dignified; in detriment or fall, it is said to be debilitated.",
        details: [
          {
            kind: "p",
            text: "Ancient astrology added finer dignities, such as triplicity, terms and faces. It used them to judge which planet dominates a chart.",
          },
        ],
      },
      see: ["domicile", "exaltation", "exil"],
    },
    {
      id: "domicile",
      term: "Domicile",
      text: {
        summary:
          "A planet's domicile is the sign it rules: Mars is at home in Aries, Venus in Taurus and Libra. The planet is also said to be the ruler of the sign.",
        details: [
          {
            kind: "p",
            text: "In the tradition, the seven bodies visible to the naked eye share out the twelve signs: the Sun and the Moon have one each, the five planets two. The moderns assigned Aquarius to Uranus, Pisces to Neptune and Scorpio to Pluto.",
          },
        ],
      },
      see: ["maitre", "exil", "dignite"],
    },
    {
      id: "ecliptique",
      term: "Ecliptic",
      text: {
        summary:
          "The ecliptic is the great circle that the Sun appears to travel round the sky in a year, as seen from the Earth. It is the centre line of the zodiac.",
        details: [
          {
            kind: "p",
            text: "Its name comes from eclipses, which only happen when the Moon passes close to this circle. It is tilted by about 23.4° to the celestial equator, and crosses it at two points: the equinoxes.",
          },
        ],
      },
      see: ["zodiaque", "equinoxe", "noeuds-lunaires"],
    },
    {
      id: "element",
      term: "Element",
      text: {
        summary:
          "Tradition arranges the signs into four elements, inherited from Greek philosophy: fire, earth, air and water. Each brings together three signs, which form a triplicity.",
        details: [
          {
            kind: "list",
            items: [
              "Fire: Aries, Leo, Sagittarius.",
              "Earth: Taurus, Virgo, Capricorn.",
              "Air: Gemini, Libra, Aquarius.",
              "Water: Cancer, Scorpio, Pisces.",
            ],
          },
        ],
      },
      see: ["triplicite", "modalite", "signe"],
    },
    {
      id: "ephemerides",
      term: "Ephemeris",
      text: {
        summary:
          "An ephemeris, plural ephemerides, is a table giving the positions of the heavenly bodies day by day. Astrologers used them to draw up a chart without redoing the whole calculation.",
        details: [
          {
            kind: "p",
            text: "Long printed in thick volumes, they have been replaced by software. This site calculates the positions on demand with the astronomy-engine library, to better than one minute of arc.",
          },
        ],
      },
      see: ["theme-natal", "temps-sideral"],
    },
    {
      id: "equinoxe",
      term: "Equinox",
      text: {
        summary:
          "The equinoxes are the two moments of the year, around 20 March and 22 September, when the Sun crosses the celestial equator: day and night then last roughly as long as each other.",
        details: [
          {
            kind: "p",
            text: "The March equinox marks 0° Aries in the tropical zodiac, the September equinox 0° Libra. Because of precession, these points slide slowly among the stars.",
          },
        ],
      },
      see: ["point-vernal", "solstice", "precession"],
    },
    {
      id: "exaltation",
      term: "Exaltation",
      text: {
        summary:
          "The exaltation is the sign in which a planet is, according to tradition, at its best, almost as if at home: the Sun in Aries, the Moon in Taurus, Saturn in Libra.",
        details: [
          {
            kind: "p",
            text: "Tradition even gives a precise degree, such as 19° Aries for the Sun. Five signs have no exalted planet. The sign opposite the exaltation is that of the fall.",
          },
        ],
      },
      see: ["chute", "domicile", "dignite"],
    },
    {
      id: "chute",
      term: "Fall",
      text: {
        summary:
          "A planet is in its fall in the sign opposite that of its exaltation. The Sun, exalted in Aries, is thus in its fall in Libra.",
        details: [
          {
            kind: "p",
            text: "Along with detriment, the fall is one of the weaknesses that tradition attributes to planets placed far from their favourite signs: the planet would express itself there less easily.",
          },
        ],
      },
      see: ["exaltation", "exil", "dignite"],
    },
    {
      id: "fixe",
      term: "Fixed",
      text: {
        summary: "The fixed signs are Taurus, Leo, Scorpio and Aquarius: the Sun passes through them in the heart of the seasons.",
        details: [
          {
            kind: "p",
            text: "This is one of the three modalities, with the cardinal and mutable signs. Tradition associates them with constancy, stability and tenacity; their downside would be stubbornness.",
          },
        ],
      },
      see: ["modalite", "cardinal", "mutable"],
    },
    {
      id: "glyphe",
      term: "Glyph",
      text: {
        summary:
          "A glyph is the small drawing that represents a sign, a planet or an aspect: two horns for Aries, a circle with a dot in it for the Sun.",
        details: [
          {
            kind: "p",
            text: "Astrologers use them to note down a chart at a glance. This site draws them itself, rather than using keyboard characters, which on some devices are displayed as emojis.",
          },
        ],
      },
      see: ["signe", "astre"],
    },
    {
      id: "astre",
      term: "Heavenly body",
      text: {
        summary:
          "On this site, the heavenly bodies are the ten bodies used by Western astrology: the Sun, the Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune and Pluto.",
        details: [
          {
            kind: "p",
            text: "Astrologers often call them all “planets”, even the Sun and the Moon, following ancient usage: the Greek word planētēs means “wanderer”, because these bodies move among the stars. The first seven are visible to the naked eye; the last three were discovered by telescope, in 1781, 1846 and 1930.",
          },
        ],
      },
      see: ["luminaires", "retrogradation"],
    },
    {
      id: "horoscope",
      term: "Horoscope",
      text: {
        summary:
          "The word comes from the Greek hōroskopos, “the one who watches the hour”: it first referred to the Ascendant, the degree rising at birth, then to the whole chart.",
        details: [
          {
            kind: "p",
            text: "Today, it mainly refers to the newspaper column giving forecasts for each of the twelve Sun signs, born in England in the early 1930s. These texts, written for millions of readers at once, take account of neither the time nor the place of birth.",
          },
        ],
      },
      see: ["ascendant", "signe-solaire", "theme-natal"],
    },
    {
      id: "maison",
      term: "House",
      text: {
        summary:
          "The houses are the twelve sectors of a chart, counted from the Ascendant. According to tradition, each corresponds to an area of life, from personality to career.",
        details: [
          {
            kind: "p",
            text: "They divide the sky of the place of birth, not the zodiac: the exact time is needed to calculate them. There are several ways of drawing them, such as Placidus, equal houses, whole signs or Porphyry.",
          },
        ],
      },
      see: ["cuspide", "placidus", "ascendant"],
    },
    {
      id: "fond-du-ciel",
      term: "Imum Coeli",
      text: {
        summary:
          "The Imum Coeli is the point of the zodiac opposite the Midheaven: the one crossing the meridian, below the horizon, at the moment of birth. It opens the 4th house in most systems.",
        details: [
          {
            kind: "p",
            text: "Tradition reads in it roots, family and home. It is abbreviated IC; its Latin name, imum coeli, means the bottom of the sky.",
          },
        ],
      },
      see: ["milieu-du-ciel", "angle", "maison"],
    },
    {
      id: "luminaires",
      term: "Luminaries",
      text: {
        summary: "The luminaries are the Sun and the Moon, the two brightest bodies in the sky.",
        details: [
          {
            kind: "p",
            text: "Tradition gives them a special place: the Sun represents identity and vital drive, the Moon the emotions and intimate needs. They are never retrograde, and astrologers allow them a wider orb in aspects.",
          },
        ],
      },
      see: ["astre", "orbe", "retrogradation"],
    },
    {
      id: "noeuds-lunaires",
      term: "Lunar nodes",
      text: {
        summary:
          "The lunar nodes are the two points where the Moon's orbit crosses the ecliptic: the north node, where it rises, and the south node, opposite. They are not bodies, but calculated points.",
        details: [
          {
            kind: "p",
            text: "They move backwards along the zodiac and go round it in about 18.6 years. Eclipses only happen when the Moon passes close to a node. This site calculates the mean node; Indian astrology calls the two nodes Rahu and Ketu.",
          },
        ],
      },
      see: ["ecliptique", "retrogradation"],
    },
    {
      id: "melothesie",
      term: "Melothesia",
      text: {
        summary:
          "Melothesia matches the signs of the zodiac to the parts of the body, from Aries for the head to Pisces for the feet.",
        details: [
          {
            kind: "p",
            text: "Already set out by the poet Manilius around AD 10, it guided medieval medicine: people avoided operating on or bleeding a limb while the Moon was passing through the sign that rules it. The Anatomical Man of the Très Riches Heures du duc de Berry is a famous illustration of it.",
          },
        ],
      },
      see: ["signe", "zodiaque"],
    },
    {
      id: "milieu-du-ciel",
      term: "Midheaven",
      text: {
        summary:
          "The Midheaven is the degree of the zodiac that was culminating on the local meridian, to the south for the northern hemisphere, at the moment of birth. It opens the 10th house in most systems.",
        details: [
          {
            kind: "p",
            text: "Tradition reads in it vocation, career and reputation. It is abbreviated MC, from its Latin name medium coeli. In the equal house system, it does not always coincide with the cusp of the 10th house.",
          },
        ],
      },
      see: ["fond-du-ciel", "angle", "maison"],
    },
    {
      id: "modalite",
      term: "Modality",
      text: {
        summary:
          "Modality arranges the signs according to their place in the season: cardinal at the beginning, fixed in the heart, mutable at the end.",
        details: [
          {
            kind: "p",
            text: "Each modality brings together four signs, one per element. Combined with the four elements, the three modalities give each of the twelve signs a unique identity: Aries is thus the only cardinal fire sign.",
          },
        ],
      },
      see: ["cardinal", "fixe", "mutable"],
    },
    {
      id: "mutable",
      term: "Mutable",
      text: {
        summary:
          "The mutable signs are Gemini, Virgo, Sagittarius and Pisces: each ends a season and prepares the next.",
        details: [
          {
            kind: "p",
            text: "This is one of the three modalities. Tradition sees in it adaptation, flexibility and movement; Ptolemy called them “bicorporeal”, and their figures are often double, like the two twins or the two fish.",
          },
        ],
      },
      see: ["modalite", "cardinal", "fixe"],
    },
    {
      id: "ophiuchus",
      term: "Ophiuchus",
      text: {
        summary:
          "Ophiuchus, the Serpent Bearer, is a constellation the Sun passes through between Scorpius and Sagittarius, from late November to mid-December.",
        details: [
          {
            kind: "p",
            text: "It is not a sign: the astrologers' zodiac has twelve equal parts of 30°, not the thirteen constellations of unequal sizes that the Sun passes through. Yet the announcement of a “thirteenth sign” regularly resurfaces in the press.",
          },
        ],
      },
      see: ["constellation", "signe", "zodiaque"],
    },
    {
      id: "opposition",
      term: "Opposition",
      text: {
        summary: "The opposition is an aspect of 180°: the two bodies face each other, on either side of the zodiac.",
        details: [
          {
            kind: "p",
            text: "Tradition counts it among the tense aspects: it represents a confrontation, a tension to be balanced, sometimes a complementarity. The full moon is an opposition of the Sun and the Moon.",
          },
        ],
      },
      see: ["aspect", "carre", "polarite"],
    },
    {
      id: "orbe",
      term: "Orb",
      text: {
        summary:
          "The orb is the margin allowed around the exact angle of an aspect: with an orb of 4°, a trine at 116° or at 124° still counts.",
        details: [
          {
            kind: "p",
            text: "There is no standard, and each school has its own orbs. This site allows 8° for the conjunction and the opposition, 7° for the square and the trine, 5° for the sextile, a little more when the Sun or the Moon is involved.",
          },
        ],
      },
      see: ["aspect", "luminaires"],
    },
    {
      id: "placidus",
      term: "Placidus",
      text: {
        summary:
          "Placidus is the most widely used house system today. It is named after Placidus de Titis, a 17th-century Italian monk and mathematician.",
        details: [
          {
            kind: "p",
            text: "It divides into three equal parts the time each degree of the zodiac takes to rise from the horizon to the meridian, then to come back down. Near the polar circles, some degrees neither rise nor set: beyond 66° of latitude, the site switches to the Porphyry system.",
          },
        ],
      },
      see: ["maison", "cuspide", "temps-sideral"],
    },
    {
      id: "polarite",
      term: "Polarity",
      text: {
        summary:
          "Polarity divides the signs into two alternating groups: masculine and diurnal for fire and air, feminine and nocturnal for earth and water.",
        details: [
          {
            kind: "p",
            text: "These words refer to symbolic qualities, turned outwards or inwards, not to people's gender. Astrologers today also speak of active and receptive signs.",
          },
        ],
      },
      see: ["element", "signe"],
    },
    {
      id: "precession",
      term: "Precession",
      text: {
        summary:
          "The precession of the equinoxes is the slow motion of the Earth's axis, which traces out a cone in about 25,800 years. It moves the vernal point backwards by about 1° every 72 years.",
        details: [
          {
            kind: "p",
            text: "Discovered by Hipparchus around 130 BC, it explains why the signs of the tropical zodiac no longer coincide with the constellations of the same name. Indian astrology, which follows the stars, uses a sidereal zodiac.",
          },
        ],
      },
      see: ["point-vernal", "zodiaque", "ere-du-verseau"],
    },
    {
      id: "quinconce",
      term: "Quincunx",
      text: {
        summary: "The quincunx is a minor aspect of 150°, between two signs that have neither element nor modality in common.",
        details: [
          {
            kind: "p",
            text: "Modern astrologers see in it an unease, a necessary adjustment between two functions that ignore each other. Its name comes from the Latin quincunx, five twelfths: 150° is five twelfths of the circle.",
          },
        ],
      },
      see: ["aspect", "orbe"],
    },
    {
      id: "retrogradation",
      term: "Retrograde motion",
      text: {
        summary:
          "A planet is said to be retrograde when it seems to move backwards among the stars for a few weeks or months. This is only an appearance, due to the Earth's motion.",
        details: [
          {
            kind: "p",
            text: "The Earth overtakes the more distant planets, or is overtaken by Mercury and Venus, like a car on a motorway: seen from the Earth, the planet appears to go backwards. The Sun and the Moon are never retrograde; tradition sees in a retrograde planet an energy turned inwards.",
          },
        ],
      },
      see: ["astre", "transit"],
    },
    {
      id: "maitre",
      term: "Ruler",
      text: {
        summary:
          "The ruler of a sign is the planet that governs it, the one whose domicile it is: Mars for Aries, Venus for Taurus.",
        details: [
          {
            kind: "p",
            text: "By extension, the ruler of a house is the ruler of the sign on its cusp, and the chart ruler is the ruler of the Ascendant's sign. Astrologers follow these links from one planet to another to read a chart as a network.",
          },
        ],
      },
      see: ["domicile", "maison", "ascendant"],
    },
    {
      id: "sextile",
      term: "Sextile",
      text: {
        summary:
          "The sextile is an aspect of 60°, a sixth of the circle, most often between two signs of compatible elements: fire and air, or earth and water.",
        details: [
          {
            kind: "p",
            text: "Tradition counts it among the harmonious aspects, more discreet than the trine: it would represent an opportunity, an ease that has yet to be seized.",
          },
        ],
      },
      see: ["aspect", "trigone"],
    },
    {
      id: "temps-sideral",
      term: "Sidereal time",
      text: {
        summary:
          "Sidereal time measures the Earth's rotation relative to the stars, not to the Sun: a sidereal day lasts 23 hours, 56 minutes and 4 seconds.",
        details: [
          {
            kind: "p",
            text: "Local sidereal time shows which degree of the sky is crossing the meridian. From it are derived the Midheaven, then the Ascendant and the houses of a chart.",
          },
        ],
      },
      see: ["milieu-du-ciel", "ascendant", "placidus"],
    },
    {
      id: "signe",
      term: "Sign",
      text: {
        summary:
          "A sign of the zodiac is a 30° portion of the ecliptic. The twelve signs, from Aries to Pisces, start from the March equinox in the tropical zodiac.",
        details: [
          {
            kind: "p",
            text: "They bear the names of neighbouring constellations, but are not the same as them. Tradition associates each with an element, a modality, a polarity and a ruling planet.",
          },
        ],
      },
      see: ["zodiaque", "constellation", "element"],
    },
    {
      id: "solstice",
      term: "Solstice",
      text: {
        summary:
          "The solstices are the two moments of the year, around 21 June and 21 December, when the Sun reaches its point furthest north or furthest south of the celestial equator.",
        details: [
          {
            kind: "p",
            text: "The June solstice marks 0° Cancer in the tropical zodiac, the December solstice 0° Capricorn. The word comes from the Latin solstitium, the standstill of the Sun, which then seems to halt its course northwards or southwards.",
          },
        ],
      },
      see: ["equinoxe", "cardinal"],
    },
    {
      id: "carre",
      term: "Square",
      text: {
        summary: "The square is an aspect of 90° between two bodies, a quarter of the circle of the zodiac.",
        details: [
          {
            kind: "p",
            text: "Tradition counts it among the tense aspects: it represents friction between two functions, a challenge that prompts action. It most often links two signs of the same modality, such as Aries and Cancer, both cardinal.",
          },
        ],
      },
      see: ["aspect", "opposition", "modalite"],
    },
    {
      id: "stellium",
      term: "Stellium",
      text: {
        summary:
          "A stellium is a group of bodies gathered in a single sign or a single house: at least three or four, depending on the school.",
        details: [
          {
            kind: "p",
            text: "Tradition sees in it a concentration of energy, which highlights that sign or that area of life. The bodies in a stellium are often in conjunction with one another.",
          },
        ],
      },
      see: ["conjonction", "maison"],
    },
    {
      id: "signe-solaire",
      term: "Sun sign",
      text: {
        summary:
          "The Sun sign is the sign the Sun was in at birth, the one you give when you say “I'm a Leo”.",
        details: [
          {
            kind: "p",
            text: "It depends almost entirely on the date, hence its success in newspaper horoscopes. For astrologers, it is only one part of the chart, alongside the Moon, the Ascendant and the other bodies.",
          },
        ],
      },
      see: ["horoscope", "ascendant", "theme-natal"],
    },
    {
      id: "transit",
      term: "Transit",
      text: {
        summary: "A transit is the passage of a body in the current sky over a point of the birth chart, or in aspect with it.",
        details: [
          {
            kind: "p",
            text: "Astrologers use transits to talk about the periods of a life. The most famous is the Saturn return to its natal position, at around the age of 29, since the planet goes round the zodiac in a little under thirty years.",
          },
        ],
      },
      see: ["theme-natal", "aspect"],
    },
    {
      id: "trigone",
      term: "Trine",
      text: {
        summary: "The trine is an aspect of 120°, a third of the circle, most often between two signs of the same element.",
        details: [
          {
            kind: "p",
            text: "Tradition sees in it the most harmonious aspect: an easy flow between two functions. Three bodies linked in pairs by trines form a grand trine.",
          },
        ],
      },
      see: ["aspect", "triplicite", "sextile"],
    },
    {
      id: "triplicite",
      term: "Triplicity",
      text: {
        summary:
          "A triplicity is the group of the three signs of a single element, 120° apart from one another: Aries, Leo and Sagittarius form the fire triplicity.",
        details: [
          {
            kind: "p",
            text: "Ancient astrology assigned each triplicity to ruling planets, by day and by night, which counted among a planet's dignities.",
          },
        ],
      },
      see: ["element", "trigone", "dignite"],
    },
    {
      id: "point-vernal",
      term: "Vernal point",
      text: {
        summary:
          "The vernal point is the position of the Sun at the March equinox, where the ecliptic crosses the celestial equator. It marks 0° Aries in the tropical zodiac.",
        details: [
          {
            kind: "p",
            text: "It moves slowly backwards among the stars, by about 1° in 72 years, because of precession. It currently lies in the constellation of Pisces.",
          },
        ],
      },
      see: ["equinoxe", "precession", "zodiaque"],
    },
    {
      id: "zodiaque",
      term: "Zodiac",
      text: {
        summary:
          "The zodiac is the band of sky, on either side of the ecliptic, through which the Sun, the Moon and the planets can be seen to pass. Its name comes from a Greek word evoking little animals.",
        details: [
          {
            kind: "p",
            text: "Western astrologers divide it into twelve signs of 30° starting from the March equinox: this is the tropical zodiac, tied to the seasons. The sidereal zodiac of Indian astrology, for its part, starts from a reference point taken among the stars.",
          },
        ],
      },
      see: ["signe", "ecliptique", "precession"],
    },
  ],
};
