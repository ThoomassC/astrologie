import type { HousesContent } from "./types";

export const HOUSES_EN: HousesContent = {
  index: {
    title: "The houses",
    lead: "The twelve sectors of the local sky at the moment of birth: what each one represents according to tradition, and how they are divided.",
    intro: {
      summary:
        "The houses divide the sky of the birthplace into twelve sectors, starting from the horizon and the meridian. They depend on the time and place, whereas the signs depend only on the date; each is associated with areas of life.",
      details: [
        {
          kind: "p",
          text: "The zodiac turns with the sky: in the course of a day, each of its degrees rises in the east, culminates, then sets in the west. The houses, for their part, stay fixed in relation to the local horizon: at birth, each body falls into one of them.",
        },
        {
          kind: "p",
          text: "That is why the time of birth matters so much: the Ascendant, the starting point of the 1st house, moves on average one degree every four minutes. Two people born on the same day a few hours apart have, give or take, the same bodies in the same signs, but not in the same houses.",
        },
        {
          kind: "p",
          text: "Astrologers read the house as the ground on which a planet expresses itself: the sign says how, the house says where. In the Middle Ages, a Latin verse helped people remember their order: Vita, lucrum, fratres, genitor, nati, valetudo, uxor, mors, pietas, regnum, benefactaque, carcer, that is, life, gain, brothers, father, children, health, wife, death, piety, kingdom, benefits and prison.",
        },
      ],
    },
  },
  angles: {
    heading: "The four angles",
    summary:
      "Four points structure the chart: the Ascendant, rising in the east, the Descendant, setting in the west, the Midheaven, which culminates, and the Imum Coeli, opposite it. In most systems, they open the 1st, 7th, 10th and 4th houses.",
    details: [
      {
        kind: "p",
        text: "The Ascendant is the degree of the zodiac rising over the eastern horizon at the time and place of birth; the Descendant faces it, on the western horizon. The Midheaven is the degree crossing the meridian, at the highest point of its course, due south as seen from the northern hemisphere: it is not necessarily the point directly overhead. The Imum Coeli is opposite it, below the horizon.",
      },
      {
        kind: "p",
        text: "Astrologers see them as four landmarks: the Ascendant for the way you present yourself and your drive in life, the Descendant for your relationship with others, the Midheaven for vocation and public image, the Imum Coeli for roots and home. The Greeks called these points “pivots”, kentra, and the Romans “hinges”, cardines.",
      },
      {
        kind: "p",
        text: "They turn quickly, and not at the same speed for every sign: at the latitude of Paris, Aries and Pisces rise in about an hour, Virgo and Libra in nearly three hours.",
      },
    ],
  },
  quadrants: {
    heading: "Hemispheres, quadrants and families of houses",
    summary:
      "The horizon and the meridian cut the chart into two halves, then into four quadrants of three houses. The houses also fall into three families: angular, succedent and cadent.",
    details: [
      {
        kind: "p",
        text: "Above the horizon lie the 7th to 12th houses, the half of the sky that is visible; below it, the 1st to 6th houses. On the Ascendant side, on the left in a chart, stretch the 10th to 3rd houses; on the Descendant side, the 4th to 9th. Astrologers often read the top as public life, the bottom as private life, the east as what starts from oneself, the west as what comes from others.",
      },
      {
        kind: "p",
        text: "The quadrants run from one angle to the next: houses 1 to 3 from the Ascendant to the Imum Coeli, 4 to 6 up to the Descendant, 7 to 9 up to the Midheaven, 10 to 12 back to the Ascendant.",
      },
      {
        kind: "list",
        items: [
          "Angular houses (1st, 4th, 7th, 10th): they begin at the angles; tradition judged them the most powerful.",
          "Succedent houses (2nd, 5th, 8th, 11th): they follow the angles, as their Greek name says, epanaphora, what rises next.",
          "Cadent houses (3rd, 6th, 9th, 12th): they “fall” from the angles, from the Latin cadere; the Greeks spoke of decline, apoklima. The moderns liken these three families to the cardinal, fixed and mutable signs.",
        ],
      },
    ],
  },
  houses: {
    1: {
      heading: "1st house: personality",
      keywords: ["personality", "the body", "appearance", "temperament", "drive in life"],
      summary:
        "The 1st house begins at the Ascendant, the degree rising in the east at birth. Astrologers read in it the way you present yourself, the body, temperament and the drive with which you approach life.",
      details: [
        {
          kind: "p",
          text: "Tradition made it the house of life itself: the medieval Latin verse names it Vita, “life”. The Greeks called it hōroskopos, “what watches the hour”: this is the origin of our word horoscope, which first referred to the rising degree.",
        },
        {
          kind: "p",
          text: "The moderns see in it the visible personality, the first impression, bearing and vitality; the planets placed in it strongly colour the character. They liken it to Aries, the first sign, and to its ruler Mars. Hellenistic tradition said that Mercury rejoices there.",
        },
      ],
    },
    2: {
      heading: "2nd house: resources",
      keywords: ["money", "possessions", "resources", "values", "talents"],
      summary:
        "The 2nd house follows the house of the Ascendant. It speaks of what you own and what you earn: money, possessions, but also the talents and values you rely on.",
      details: [
        {
          kind: "p",
          text: "Lucrum, “gain”, says the Latin verse. Tradition read in it the means of livelihood, wealth, the way it is earned and spent. For the Greek authors, it is one of the houses that do not “see” the Ascendant, having no aspect with it.",
        },
        {
          kind: "p",
          text: "The moderns add self-esteem, material needs, your relationship with comfort and what you consider precious. Its sign of affinity is Taurus, the sign of stability ruled by Venus.",
        },
      ],
    },
    3: {
      heading: "3rd house: communication",
      keywords: ["communication", "siblings", "learning", "short journeys", "the immediate circle"],
      summary:
        "The 3rd house concerns your immediate surroundings: brothers and sisters, neighbours, short journeys, early learning and every form of everyday exchange.",
      details: [
        {
          kind: "p",
          text: "Its Latin name, Fratres, “brothers”, sums up the tradition: siblings, close relatives, neighbours. The Greeks called it the house of the Goddess, because the Moon rejoices there; it was also read for religious rites and short journeys.",
        },
        {
          kind: "p",
          text: "Today it covers communication, speech and writing, curiosity, schooling in the early years, short trips and local networks. In the moderns' natural zodiac, it corresponds to Gemini and Mercury, the sign and planet of exchange.",
        },
      ],
    },
    4: {
      heading: "4th house: home",
      keywords: ["home", "family", "roots", "the father", "private life"],
      summary:
        "The 4th house begins at the Imum Coeli, the lowest point of the chart. It speaks of roots: family, the place where you live, childhood, heritage and the sense of belonging.",
      details: [
        {
          kind: "p",
          text: "Genitor, “the father”, names it in the Latin verse: it was read for the father, the ancestors, land and property, but also for the end of things and old age. The Greeks called it the “underground”, because it lies beneath our feet, in the depths of the invisible sky.",
        },
        {
          kind: "p",
          text: "The modern reading makes it the place of the home, of intimate life, of family memory and of the inner foundations on which you build yourself. Cancer and the Moon, the sign and body of protection, correspond to it. Some read the mother rather than the father in it: the schools differ.",
        },
      ],
    },
    5: {
      heading: "5th house: creativity",
      keywords: ["creativity", "children", "love affairs", "leisure", "play"],
      summary:
        "The 5th house is the house of pleasure and creation: children, love affairs, games, leisure, the arts, everything you do for enjoyment and that reflects who you are.",
      details: [
        {
          kind: "p",
          text: "Its name in the Latin verse is Nati, “children”. For the Greeks it was Good Fortune, and Venus rejoiced there: it was read for children, celebrations, pleasures and the gifts of life.",
        },
        {
          kind: "p",
          text: "Astrologers today place in it self-expression, creativity in all its forms, sport and games, a taste for risk and love affairs, before the commitment described by the 7th house. Its natural sign is Leo, ruled by the Sun, the body of radiance.",
        },
      ],
    },
    6: {
      heading: "6th house: daily life",
      keywords: ["daily work", "health", "habits", "service", "pets"],
      summary:
        "The 6th house concerns everyday life: regular work, habits, health, lifestyle and the care you give to others.",
      details: [
        {
          kind: "p",
          text: "With Valetudo, “state of health”, the Latin verse recalls that tradition read in it above all illnesses, servants and small livestock. The Greek authors spoke of Bad Fortune, and Mars rejoiced there: like the 12th house, it forms no aspect with the Ascendant, which gave it a reputation for being difficult.",
        },
        {
          kind: "p",
          text: "The moderns have broadened it to everyday work, colleagues, organisation, routine and prevention: everything that is maintained day after day. It is associated with Virgo and Mercury, the sign and planet of method. Many handbooks still assign pets to it.",
        },
      ],
    },
    7: {
      heading: "7th house: relationships",
      keywords: ["partnership", "associations", "contracts", "the other", "open enemies"],
      summary:
        "The 7th house begins at the Descendant, opposite the Ascendant. It speaks of the other: partnership, marriage, associations, contracts, and even the adversaries you face openly.",
      details: [
        {
          kind: "p",
          text: "Uxor, “the wife”, sums it up in the Latin verse: tradition placed in it marriage, partners, lawsuits and open enemies. The Greeks called it the Setting: it is where the bodies disappear below the western horizon.",
        },
        {
          kind: "p",
          text: "Today it covers all relationships between equals, the way you commit and what you look for in another person, sometimes a part of yourself that you project onto them. Libra and Venus, which speak of harmony between two, are its natural sign and planet.",
        },
      ],
    },
    8: {
      heading: "8th house: transformations",
      keywords: ["transformations", "shared resources", "inheritances", "intimacy", "crises"],
      summary:
        "The 8th house is the house of transitions: the crises that transform, resources shared with others, inheritances, intimacy, and the way you live through endings and bereavements.",
      details: [
        {
          kind: "p",
          text: "The Latin verse gives it a blunt name, Mors, “death”: it was read for death and its circumstances, inheritances and the spouse's possessions. The Greeks called it the “idle” house, because it does not look at the Ascendant: it forms with it an angle of 150 degrees, which the Ancients did not count among the aspects.",
        },
        {
          kind: "p",
          text: "For the moderns, it concerns inner transformation, deep bonds, sexuality, debts and investments, secrets and taboos. Its natural sign is Scorpio, ruled by Pluto for the moderns and by Mars in the tradition. A planet in the 8th house announces no bereavement: it describes a relationship with what is hidden.",
        },
      ],
    },
    9: {
      heading: "9th house: horizons",
      keywords: ["long journeys", "higher education", "beliefs", "philosophy", "foreign lands"],
      summary:
        "The 9th house opens up horizons: long journeys, foreign lands, higher education, philosophy, beliefs and everything that gives meaning to existence.",
      details: [
        {
          kind: "p",
          text: "The Latin verse names it Pietas, “piety”; some versions say Iter, “the journey”. Tradition read in it religion, distant travels, dreams and wisdom. For the Greeks, it was the house of the God, where the Sun rejoiced.",
        },
        {
          kind: "p",
          text: "Today it is read for the search for meaning, teaching, publishing, law, foreign cultures and the urge to see further afield. Sagittarius and Jupiter, the sign and planet of expansion, correspond to it.",
        },
      ],
    },
    10: {
      heading: "10th house: vocation",
      keywords: ["vocation", "career", "reputation", "ambitions", "authority"],
      summary:
        "In most systems, the 10th house begins at the Midheaven, the highest point of the chart. It speaks of what you achieve in the eyes of the world: vocation, career, reputation and ambitions.",
      details: [
        {
          kind: "p",
          text: "Regnum, “the kingdom”, says the Latin verse: tradition saw in it power, honours, profession and the deeds of a lifetime. The Greeks spoke of the midheaven, and also of praxis, action. For many ancient authors, it was, with the 1st house, the most powerful in the chart.",
        },
        {
          kind: "p",
          text: "The moderns see in it social standing, public image, responsibilities and figures of authority; some read the mother in it, mirroring the 4th house. Its natural sign is Capricorn, ruled by Saturn, the planet of patient ambition.",
        },
      ],
    },
    11: {
      heading: "11th house: friendships",
      keywords: ["friends", "groups", "projects", "hopes", "solidarity"],
      summary:
        "The 11th house is the house of friends and shared projects: groups, networks, support, and the hopes and ideals you carry with others.",
      details: [
        {
          kind: "p",
          text: "Its Latin name, Benefacta, “benefits”, comes from the fact that tradition read in it friends, patrons and favours received. The Greeks named it the Good Spirit, and Jupiter rejoiced there: it was one of the most favourable houses in the chart.",
        },
        {
          kind: "p",
          text: "The moderns place in it collective life, associations, the causes you champion, solidarity and dreams for the future. Aquarius corresponds to it, with Uranus as ruler for the moderns and Saturn in the tradition.",
        },
      ],
    },
    12: {
      heading: "12th house: the inner life",
      keywords: ["the inner life", "solitude", "the unconscious", "trials", "spirituality"],
      summary:
        "The 12th house comes just before the Ascendant, immediately above the eastern horizon. It concerns what is lived in withdrawal: solitude, the inner life, the unconscious, trials and quiet devotion.",
      details: [
        {
          kind: "p",
          text: "The Latin verse ends on a stern word, Carcer, “prison”: it was read for confinement, hidden enemies, sorrows and exile. The Greeks called it the Bad Spirit, and Saturn rejoiced there. Like the 6th house, it forms no aspect with the Ascendant.",
        },
        {
          kind: "p",
          text: "The moderns offer a gentler reading: chosen retreat, dreams, meditation, compassion, places of care, everything that plays out behind the scenes. Pisces is its natural sign, ruled by Neptune for the moderns and by Jupiter in the tradition.",
        },
      ],
    },
  },
  systems: {
    placidus: {
      heading: "Placidus: dividing time",
      summary:
        "The most widely used system in the West today. It is named after Placidus de Titis, a 17th-century Italian monk and mathematician, and divides the sky according to the time each degree of the zodiac takes to rise from the horizon to the meridian.",
      details: [
        {
          kind: "p",
          text: "This time is called the semi-arc. Placidus divides it into three equal parts: the degree that has risen for a third of its semi-arc marks the start of the 12th house, the one that has covered two thirds of it, the start of the 11th. The same calculation, carried out below the horizon, gives the 2nd and 3rd houses; the 1st and 10th houses begin at the Ascendant and the Midheaven.",
        },
        {
          kind: "p",
          text: "Placidus de Titis (1603–1668), professor of mathematics at Pavia, did not invent it: he himself attributed it to Ptolemy. But he made it known, and ready-calculated tables of houses made it common in the 19th and 20th centuries. Its weakness: very unequal houses at high latitudes, and no solution at all beyond the polar circles.",
        },
      ],
    },
    equal: {
      heading: "Equal houses: twelve parts of 30 degrees",
      summary:
        "The simplest system: each house measures exactly 30 degrees, starting from the degree of the Ascendant. The 1st house runs from the Ascendant to 30 degrees further on, the 2nd house begins there, and so on.",
      details: [
        {
          kind: "p",
          text: "This division depends only on the Ascendant: it can be calculated at almost every latitude, and its houses keep the same size. The Midheaven, on the other hand, does not necessarily coincide with the start of the 10th house: it most often falls in the 9th or 10th house, and astrologers then read it as a separate point.",
        },
        {
          kind: "p",
          text: "Its principle is old: some historians already find it in Vettius Valens, in the 2nd century, others doubt it. It kept its supporters in the 20th century, drawn by its simplicity and by the regularity of its houses.",
        },
      ],
    },
    wholeSign: {
      heading: "Whole signs: one sign, one house",
      summary:
        "The oldest of the systems: the sign containing the Ascendant forms the whole of the 1st house, the next sign the 2nd house, and so on. Houses and signs coincide exactly.",
      details: [
        {
          kind: "p",
          text: "This was the division used by the Hellenistic astrologers, in the first centuries of our era: the chart was read sign by sign, and the Ascendant could lie anywhere in the 1st house. The West gradually abandoned it in the Middle Ages, but Indian astrology never gave it up.",
        },
        {
          kind: "p",
          text: "Rediscovered in the West in the 1980s and 1990s, thanks to translations of the Greek texts, it appeals through its clarity. As with equal houses, the Midheaven floats: it can fall in the 9th, 10th or 11th house, or even elsewhere at high latitudes.",
        },
      ],
    },
    porphyry: {
      heading: "Porphyry: each quadrant in three",
      summary:
        "A geometric division: you start from the four angles, then divide each quadrant into three equal parts, measured along the zodiac. The 1st and 10th houses begin at the Ascendant and the Midheaven.",
      details: [
        {
          kind: "p",
          text: "If 75 degrees separate the Midheaven from the Ascendant, for example, each of the 10th, 11th and 12th houses receives 25; the next quadrant, being wider, gives larger houses. Two opposite houses always have the same size.",
        },
        {
          kind: "p",
          text: "It is named after Porphyry of Tyre, a 3rd-century Neoplatonist philosopher, who sets it out in his Introduction to Ptolemy's Tetrabiblos; a similar method already appears in Vettius Valens, in the 2nd century. Simple to calculate, it often serves as a fallback when Placidus is undefined: that is the case on this site.",
        },
      ],
    },
  },
  polar: {
    heading: "Beyond the polar circles",
    summary:
      "Beyond about 66 degrees of latitude, north or south, the Placidus system is no longer defined: some degrees of the zodiac never rise or set, and their time above the horizon can no longer be divided.",
    details: [
      {
        kind: "p",
        text: "Placidus relies on the semi-arc, the time a degree of the zodiac takes to travel from the horizon to the meridian. Yet at these latitudes, part of the zodiac stays above the horizon all day, and the opposite part below it all day: like the midnight sun in summer, these degrees have neither rising nor setting. Their semi-arc does not exist, and the intermediate houses can no longer be calculated.",
      },
      {
        kind: "p",
        text: "The limit comes from the tilt of the Earth's axis: 90 degrees minus 23.4 gives about 66.6 degrees, the latitude of the polar circles. Tromsø, in Norway, or Murmansk, in Russia, lie beyond it; even a little short of it, the Placidus houses become very unequal, some huge, others tiny.",
      },
      {
        kind: "p",
        text: "Another system is then needed: Porphyry, equal houses or whole signs, which depend only on the angles, can still be calculated. This site shows Porphyry instead of Placidus beyond 66 degrees.",
      },
    ],
  },
};
