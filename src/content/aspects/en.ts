import type { AspectsContent } from "./types";

export const ASPECTS_EN: AspectsContent = {
  index: {
    title: "The aspects",
    lead: "The angles two bodies form along the zodiac: conjunction, square, trine and the others, with what tradition says about them.",
    intro: {
      summary:
        "An aspect is an angle between two bodies, measured along the zodiac. Certain angles, derived from dividing the circle into equal parts, are considered significant: astrologers read in them a dialogue between two functions, easy or tense.",
      details: [
        {
          kind: "p",
          text: "The word comes from the Latin aspectus, “the gaze”: the Ancients said that the planets “look at” one another. The distance is measured in longitude, along the zodiac: a body at 10 degrees Aries and another at 10 degrees Cancer are 90 degrees apart, and form a square.",
        },
        {
          kind: "p",
          text: "The major aspects come from dividing the circle by 1, 2, 3, 4 and 6: conjunction, opposition, trine, square and sextile. The minor aspects arise from finer divisions, by 5, 8 or 12. Since two bodies are rarely at the exact angle, a margin is allowed: the orb.",
        },
        {
          kind: "p",
          text: "This site calculates the aspects between the ten bodies, the Ascendant and the Midheaven. Their colour on the wheel shows their nature according to tradition: harmonious, tense, or neutral for the conjunction.",
        },
      ],
    },
  },
  aspects: {
    conjunction: {
      heading: "Conjunction (0°)",
      keywords: ["fusion", "intensity", "union", "concentration"],
      summary:
        "Two bodies are in conjunction when they occupy the same degree of the zodiac, or nearly so. Their energies blend: tradition sees in it a union, whose colour depends on the bodies brought together.",
      details: [
        {
          kind: "p",
          text: "For most astrologers it is the most powerful aspect, and the only one this site counts as neutral, neither harmonious nor tense in itself. A conjunction of Venus and Jupiter, the two benefics, is held to be fortunate; a conjunction of Mars and Saturn, more demanding.",
        },
        {
          kind: "p",
          text: "Ptolemy does not include it among his four aspects: two bodies together do not “look at” each other, they are side by side. Yet it is one of the five major aspects, known as “Ptolemaic”, and modern tradition puts it first. The Sun and the Moon in conjunction make the new moon.",
        },
        {
          kind: "p",
          text: "On this site, the orb allowed is 8 degrees, or 10 if the Sun or the Moon is involved. Its glyph is a small circle with a line coming out of it.",
        },
      ],
    },
    sextile: {
      heading: "Sextile (60°)",
      keywords: ["opportunity", "exchange", "cooperation", "ease"],
      summary:
        "The sextile links two bodies 60 degrees apart, a sixth of the circle. Tradition counts it among the harmonious aspects: an easy understanding, an opportunity to seize rather than a ready-made gift.",
      details: [
        {
          kind: "p",
          text: "It most often links two signs of complementary elements, fire and air, or earth and water: Aries and Gemini, for example, or Taurus and Cancer. These signs share the same polarity, masculine or feminine.",
        },
        {
          kind: "p",
          text: "Ptolemy describes it in the 2nd century among his four aspects, with the trine, the square and the opposition: it is one of the so-called “Ptolemaic” aspects. The moderns consider it more discreet than the trine: it favours exchanges and talents, provided you make use of it.",
        },
        {
          kind: "p",
          text: "On this site, the orb is 5 degrees, or 6 with the Sun or the Moon. Its glyph, a six-pointed star, evokes the division of the circle into six.",
        },
      ],
    },
    square: {
      heading: "Square (90°)",
      keywords: ["tension", "challenge", "effort", "action"],
      summary:
        "The square links two bodies 90 degrees apart, a quarter of the circle. Tradition counts it among the tense aspects: two functions that thwart each other, and that force you to act to find an agreement.",
      details: [
        {
          kind: "p",
          text: "It generally brings together two signs of the same modality but of ill-matched elements, such as Aries and Cancer, fire and water, both cardinal. These signs have opposite polarities, one masculine, the other feminine.",
        },
        {
          kind: "p",
          text: "Ancient astrologers saw enmity in it; the moderns read it above all as a driving force. A square from Mars to Saturn would describe a restrained energy that learns to endure; a square between the Moon and Venus, a hesitation between the need for security and the wish to please. Tense does not mean unhappy: many successes are born of such friction.",
        },
        {
          kind: "p",
          text: "A Ptolemaic aspect, it has an orb of 7 degrees on this site, or 8 with the Sun or the Moon. Its glyph is a simple square.",
        },
      ],
    },
    trine: {
      heading: "Trine (120°)",
      keywords: ["harmony", "fluidity", "talent", "ease"],
      summary:
        "The trine links two bodies 120 degrees apart, a third of the circle. It is the most harmonious aspect in the tradition: two functions that agree effortlessly, like two musicians playing in the same key.",
      details: [
        {
          kind: "p",
          text: "It generally brings together two signs of the same element: Aries, Leo and Sagittarius for fire, for example. Three bodies in trine with one another draw an equilateral triangle, the grand trine.",
        },
        {
          kind: "p",
          text: "Astrologers read in it natural gifts, talents, a luck that seems to come as a matter of course, while noting the downside: what comes without effort may go unused. A trine between the Sun and Jupiter would suggest a calm confidence; between Mercury and Saturn, solid and methodical thinking.",
        },
        {
          kind: "p",
          text: "A Ptolemaic aspect, it has an orb of 7 degrees on this site, or 8 with the Sun or the Moon. Its glyph is a triangle.",
        },
      ],
    },
    opposition: {
      heading: "Opposition (180°)",
      keywords: ["polarity", "confrontation", "relationship", "balance to be found"],
      summary:
        "The opposition links two diametrically opposite bodies, 180 degrees apart. Tradition counts it among the tense aspects: two functions that face each other and need to be reconciled.",
      details: [
        {
          kind: "p",
          text: "It brings together two opposite signs, of the same modality and the same polarity, whose elements complement each other: Aries and Libra, fire and air, or Taurus and Scorpio, earth and water. Each sign sheds light on what the other lacks.",
        },
        {
          kind: "p",
          text: "Modern astrologers see in it a tension often experienced through other people: you attribute to someone else the half of yourself that you do not recognise. The challenge, they say, is to find a balance rather than to take sides. The opposition of the Sun and the Moon is the full moon.",
        },
        {
          kind: "p",
          text: "A Ptolemaic aspect, it has an orb of 8 degrees on this site, or 10 with the Sun or the Moon. Its glyph shows two small circles joined by a line.",
        },
      ],
    },
    semiSextile: {
      heading: "Semi-sextile (30°)",
      keywords: ["adjustment", "neighbourliness", "nuance"],
      summary:
        "The semi-sextile joins two bodies 30 degrees apart, the width of one sign. It is a minor, discreet aspect: two neighbouring signs, which have almost nothing in common, learn to live side by side.",
      details: [
        {
          kind: "p",
          text: "Two neighbouring signs, such as Aries and Taurus, share neither element, nor modality, nor polarity. Hellenistic astrologers said that they cannot see each other: they held them to be “in aversion”, with no aspect possible between them.",
        },
        {
          kind: "p",
          text: "Kepler nevertheless admits it among the aspects, as one of the weakest, in Harmonices Mundi (The Harmony of the World), in 1619. Some modern authors consider it slightly favourable, others neutral; this site classes it among the harmonious aspects and allows it an orb of 2 degrees.",
        },
      ],
    },
    semiSquare: {
      heading: "Semi-square (45°)",
      keywords: ["friction", "irritation", "stimulus"],
      summary:
        "At 45 degrees apart, half a square or an eighth of the circle, two bodies form a semi-square. It is a tense minor aspect: a slight discomfort, like a pebble in your shoe, that prompts a reaction.",
      details: [
        {
          kind: "p",
          text: "It arises from dividing the circle into eight, which also gives the sesquiquadrate. Since 45 degrees make a sign and a half, it does not link whole signs: it is read to the degree, not from one sign to another.",
        },
        {
          kind: "p",
          text: "Kepler counts it among the weak aspects in Harmonices Mundi (The Harmony of the World), in 1619. Modern astrologers see in it small tensions, which stimulate more than they block. This site counts it among the tense aspects, with an orb of 2 degrees.",
        },
      ],
    },
    quintile: {
      heading: "Quintile (72°)",
      keywords: ["talent", "creativity", "skill"],
      summary:
        "The quintile measures 72 degrees, a fifth of the circle. Introduced by Kepler, it is a harmonious minor aspect, which modern astrologers associate with talent and creativity.",
      details: [
        {
          kind: "p",
          text: "Kepler proposed it around 1600, together with the biquintile and the sesquiquadrate, drawing both on musical harmony and on his own observations of the weather. He linked it to the pentagon, the five-sided figure, and to a musical interval, the major third. Ancient tradition ignored it, because it does not fall on a multiple of 30 degrees.",
        },
        {
          kind: "p",
          text: "In the 20th century, the English astrologer John Addey, with his theory of harmonics, associated it with creation and personal style. On this site, it is a harmonious aspect, allowed to within 2 degrees.",
        },
      ],
    },
    sesquiquadrate: {
      heading: "Sesquiquadrate (135°)",
      keywords: ["tension", "restlessness", "readjustment"],
      summary:
        "The sesquiquadrate corresponds to 135 degrees apart, a square and a half, or three eighths of the circle. It is a tense minor aspect, close to the semi-square: a friction that calls for adjustments.",
      details: [
        {
          kind: "p",
          text: "Its name comes from the Latin sesqui, “one and a half times”: 135 is 90 plus 45. Kepler introduced it around 1600, at the same time as the quintile and the biquintile; he likened it to the minor sixth, a consonant but weak musical interval.",
        },
        {
          kind: "p",
          text: "Modern astrologers read it as restlessness, an impatience that eventually brings about a change. It is listed here among the tense aspects, with an orb of 2 degrees.",
        },
      ],
    },
    biquintile: {
      heading: "Biquintile (144°)",
      keywords: ["gift", "inspiration", "mastery"],
      summary:
        "Two bodies 144 degrees apart, two fifths of the circle, form a biquintile. Like the quintile, it was introduced by Kepler, and modern astrologers read in it a talent, an aptitude for creating.",
      details: [
        {
          kind: "p",
          text: "It belongs to the same family as the quintile, that of the divisions of the circle by five, which ancient tradition ignored. Kepler likened it to the major sixth, a musical interval, and said he had observed its effect in his meteorological observations.",
        },
        {
          kind: "p",
          text: "Modern astrologers consider it slightly more discreet than the quintile, but of the same nature: a fine skill, a know-how to be cultivated. This site classes it among the harmonious aspects, with an orb of 2 degrees.",
        },
      ],
    },
    quincunx: {
      heading: "Quincunx (150°)",
      keywords: ["adjustment", "mismatch", "adaptation", "unease"],
      summary:
        "The quincunx separates two bodies by 150 degrees, or five signs apart. The two signs concerned have nothing in common: astrologers see in it a mismatch, a discomfort that forces you to adapt constantly.",
      details: [
        {
          kind: "p",
          text: "Its name comes from the Latin quincunx, “five twelfths”: 150 degrees is five twelfths of the circle. Like the semi-sextile, it links signs that ancient tradition called “in aversion”, with no element, modality or polarity in common, such as Aries and Virgo. It is also called the inconjunct, “not joined”.",
        },
        {
          kind: "p",
          text: "Kepler counts it among the weak aspects in Harmonices Mundi (The Harmony of the World), in 1619. The moderns have given it more weight, particularly in the figure of the yod. This site counts it among the tense aspects, with an orb of 3 degrees, the widest of the minor aspects.",
        },
      ],
    },
  },
  orbs: {
    heading: "The orb: the margin allowed",
    summary:
      "Two bodies are rarely at the exact angle of an aspect. The orb is the margin allowed around that angle: beyond it, astrologers consider that the aspect no longer applies. There is no standard: each school has its own values.",
    details: [
      {
        kind: "p",
        text: "An example: the trine is 120 degrees. With an orb of 7 degrees, two bodies 113 to 127 degrees apart still form a trine, and the smaller the gap from the exact angle, the stronger the aspect is judged to be. The Ancients called an aspect exact to the degree “partile”, and one merely within its orb “platic”.",
      },
      {
        kind: "p",
        text: "Hellenistic astrologers reasoned mainly from one sign to another. Medieval authors assigned the orb to the bodies rather than to the aspects, the widest going to the Sun and the Moon. The moderns generally set one orb per aspect, wide for the major ones, narrow for the minor ones, widened when a luminary is involved. This site uses:",
      },
      {
        kind: "list",
        items: [
          "Conjunction and opposition: 8 degrees, 10 if the Sun or the Moon is involved",
          "Square and trine: 7 degrees, 8 with the Sun or the Moon",
          "Sextile: 5 degrees, 6 with the Sun or the Moon",
          "Quincunx: 3 degrees",
          "Semi-sextile, semi-square, sesquiquadrate, quintile and biquintile: 2 degrees",
        ],
      },
    ],
  },
  applying: {
    heading: "Applying aspect, separating aspect",
    summary:
      "An aspect is applying when the two bodies are moving towards the exact angle, separating when they are moving away from it. Tradition judged the first to be stronger, like a promise, and saw in the second a fading memory.",
    details: [
      {
        kind: "p",
        text: "It all depends on the faster body. If the Moon is at 10 degrees Aries and Venus at 15, the Moon, being faster, catches up with Venus: their conjunction is applying, with an orb of 5 degrees. Once the Moon has passed 15 degrees Aries, the aspect becomes separating. A retrograde motion can reverse the situation, when the faster body moves backwards again.",
      },
      {
        kind: "p",
        text: "In horary astrology, which studies the sky at the moment a question is asked, applying aspects, especially those of the Moon, describe what is going to happen; separating aspects tell of what has just happened. In the 17th century, the Englishman William Lilly made this one of the pillars of his method.",
      },
      {
        kind: "p",
        text: "In a birth chart, some astrologers read the applying aspect as a dynamic that develops over time, and the separating aspect as something already acquired that you can build on.",
      },
    ],
  },
  patterns: {
    heading: "The major configurations",
    summary:
      "When several aspects interlock, they draw figures that astrologers read as a whole: the grand trine, the T-square, the grand cross, the yod and the stellium are the best known.",
    details: [
      {
        kind: "list",
        items: [
          "Grand trine: three bodies each in trine with the other two, forming an equilateral triangle, often in the three signs of a single element. Astrologers read in it great ease, sometimes a comfort that lulls.",
          "T-square: two bodies in opposition, both square to a third, the apex body, on which the tension is concentrated.",
          "Grand cross: four bodies forming two oppositions that cross at right angles, each square to its two neighbours, often in signs of the same modality. A demanding figure, reputed to be highly energetic.",
          "Yod: two bodies in sextile, both quincunx to a third. This arrow-shaped figure bears the name of a Hebrew letter, and is nicknamed the “Finger of God”.",
          "Stellium: at least three bodies, four according to some authors, gathered in a single sign or a single house. It used to be called a satellitium, from the Latin satelles, an escort.",
        ],
      },
      {
        kind: "p",
        text: "None of these figures decides a life: in the symbolic reading, they show where the forces and tensions of the chart are concentrated.",
      },
    ],
  },
};
