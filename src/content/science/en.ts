import type { ScienceContent } from "./types";

/** Science page texts: precession, Ophiuchus, tests, the Barnum effect, mechanism, then astrology as a cultural phenomenon. */
export const SCIENCE_EN: ScienceContent = {
  title: "What science says",
  lead: "What astronomers, psychologists and statisticians have measured about astrology, explained without contempt for a tradition that has shaped our culture.",
  intro: {
    summary:
      "Since the middle of the 20th century, astrology has been put to rigorous tests: none has shown that the positions of the heavenly bodies at birth describe a personality or foretell a destiny better than chance. This page presents that work, then what remains: a cultural phenomenon.",
    details: [
      {
        kind: "p",
        text: "Science does not judge the people who read their horoscope: it checks claims. When astrologers claim that a position of the planets indicates a character trait, it can be tested like a medicine, by comparing what they predict with what is observed, without anyone knowing the right answer in advance.",
      },
      {
        kind: "p",
        text: "Astronomical questions, such as precession or Ophiuchus, do not on their own say that astrology is wrong: they show that its zodiac is a convention, tied to the seasons and not to the stars. It is the double-blind prediction tests that have answered the question of whether it works.",
      },
    ],
  },
  topics: {
    precession: {
      heading: "The precession of the equinoxes",
      summary:
        "The Earth's axis turns slowly, like that of a spinning top, in about 25,800 years. The point of the March equinox therefore slides along the zodiac by about 1° every 72 years: the astrologers' signs no longer coincide with the constellations whose names they bear.",
      details: [
        {
          kind: "p",
          text: "Around 130 BC, Hipparchus compared the position of the star Spica with the one his predecessors had measured: it had shifted by about 2° relative to the equinox point. He deduced a motion of at least 1° per century. We now know that it amounts to about 50 seconds of arc per year, and that it comes from the pull of the Moon and the Sun on the Earth's bulge at the equator.",
        },
        {
          kind: "p",
          text: "Western astrologers use the tropical zodiac, which always starts from the March equinox: it follows the seasons, not the stars. Since Antiquity, it has shifted by about one constellation. The Sun at the March equinox, once in front of Aries, is now in front of Pisces, and will only enter the constellation of Aquarius, according to the official boundaries, in 2597.",
        },
        {
          kind: "p",
          text: "Indian astrology, by contrast, uses a sidereal zodiac, tied to the stars: its signs are now offset by about 24° from the tropical signs. A Sun at 10° of tropical Aries thus lies at 16° of sidereal Pisces.",
        },
      ],
      sources: [
        { label: "Axial precession, Wikipedia", href: "https://en.wikipedia.org/wiki/Axial_precession" },
        { label: "Zodiac, Wikipedia", href: "https://en.wikipedia.org/wiki/Zodiac" },
      ],
    },
    ophiuchus: {
      heading: "Ophiuchus, the thirteenth constellation",
      summary:
        "The Sun passes through thirteen constellations, not twelve: between Scorpius and Sagittarius, it crosses Ophiuchus, the Serpent Bearer, from late November to mid-December. Astrologers do not count it, because their signs are equal parts of 30°, not constellations.",
      details: [
        {
          kind: "p",
          text: "The constellations are regions of the sky of very unequal sizes. Their official boundaries were adopted by the International Astronomical Union in 1928 and published in 1930: the Sun spends about a week in Scorpius, but a month and a half in Virgo. It crosses Ophiuchus roughly from 29 November to 17 December.",
        },
        {
          kind: "p",
          text: "The Babylonians, who set twelve equal signs, left Ophiuchus out: twelve parts of 30° matched the twelve months of their calendar. In 2016, a NASA page for children pointed this out, and the press announced that NASA was changing the signs. The agency replied that it studies astronomy, not astrology, and that it had changed nothing: it had simply done the maths.",
        },
        {
          kind: "p",
          text: "For astrology, this changes nothing, since its tropical zodiac divides the seasons, not the stars. For astronomy, it is a reminder that signs and constellations are two different things, best not confused.",
        },
      ],
      sources: [
        { label: "Ophiuchus, Wikipedia", href: "https://en.wikipedia.org/wiki/Ophiuchus" },
        { label: "Constellation, Wikipedia", href: "https://en.wikipedia.org/wiki/Constellation" },
        { label: "The zodiac and the constellations, NASA Space Place", href: "https://spaceplace.nasa.gov/starfinder2/en/" },
      ],
    },
    "carlson-1985": {
      heading: "Shawn Carlson's double-blind test (1985)",
      summary:
        "In 1985, the journal Nature published a test designed with astrologers: working from birth charts, they had to recognise each person's psychological profile. They did no better than chance.",
      details: [
        {
          kind: "p",
          text: "The American physicist Shawn Carlson drew up the protocol with the National Council for Geocosmic Research, an association of astrologers, which put forward the participants, advised them and judged the test fair. Twenty-eight respected astrologers, from Europe and the United States, took part.",
        },
        {
          kind: "p",
          text: "The astrologers themselves chose the comparison tool, a recognised personality questionnaire, the California Psychological Inventory. For more than a hundred people, they received the birth chart and had to pick out, from several profiles, the one that matched it. The test was run double-blind: during the trial, nobody knew which answer was correct.",
        },
        {
          kind: "p",
          text: "The astrologers did no better than chance, and were no more successful when they said they were very confident. Carlson concluded that the test refuted the astrological hypothesis. This says nothing about the meaning astrology can have for those who practise it; it shows that, under these conditions, a chart did not make it possible to recognise a personality.",
        },
      ],
      sources: [
        {
          label: "Shawn Carlson, “A double-blind test of astrology”, Nature 318, 419–425, 1985",
          href: "https://doi.org/10.1038/318419a0",
        },
        { label: "Shawn Carlson, Wikipedia", href: "https://en.wikipedia.org/wiki/Shawn_Carlson" },
        { label: "Astrology and science, Wikipedia", href: "https://en.wikipedia.org/wiki/Astrology_and_science" },
      ],
    },
    "jumeaux-temporels": {
      heading: "Time twins",
      summary:
        "Two people born in the same place a few minutes apart have almost the same chart: if astrology were right, they ought to resemble each other. In 2003, Geoffrey Dean and Ivan Kelly compared more than 2,000 Londoners born in March 1958: no resemblance beyond chance.",
      details: [
        {
          kind: "p",
          text: "The argument is an old one: at the beginning of the 5th century, Saint Augustine was already objecting to the astrologers that twins, born at almost the same moment, like Esau and Jacob in the Bible, had led very different lives.",
        },
        {
          kind: "p",
          text: "The researchers drew on the data of a large British study unrelated to astrology: 2,101 people born in London from 3 to 9 March 1958, on average 4.8 minutes apart. They had been followed up at ages 11, 16 and 23, on 110 characteristics: intelligence, school results, behaviour rated by parents and teachers, physical measurements, aptitudes.",
        },
        {
          kind: "p",
          text: "People born one after the other were no more alike than strangers. Of the 110 characteristics, only five showed a link, as many as you would expect by pure chance. For the authors, this is the most direct test of astrology, since no interpretation of the chart comes into it.",
        },
      ],
      sources: [
        {
          label: "Geoffrey Dean and Ivan Kelly, Journal of Consciousness Studies, 2003, long version",
          href: "https://www.astrology-and-science.com/D-psia2.htm",
        },
        {
          label: "Saint Augustine, Confessions, Book VII, translated by Albert C. Outler, Wikisource",
          href: "https://en.wikisource.org/wiki/The_Confessions_of_Saint_Augustine_(Outler)/Book_VII",
        },
      ],
    },
    gauquelin: {
      heading: "Michel Gauquelin and the Mars effect",
      summary:
        "In 1955, the French psychologist Michel Gauquelin believed he had found that sports champions were more often born when Mars had just risen or culminated. This “Mars effect” fuelled decades of controversy; a large French test on 1,066 champions did not find it again.",
      details: [
        {
          kind: "p",
          text: "Gauquelin was not interested in the signs: he divided each planet's daily path across the sky into sectors, and looked at whether certain professions were more often born with a planet in a “key” sector, just after its rising or culmination. He counted about 22% of champions born with Mars in these sectors, against an expected 17%. His tests of the signs of the zodiac, for their part, yielded nothing.",
        },
        {
          kind: "p",
          text: "In 1967, the Comité Para, in Belgium, found the effect again, but on data largely gathered by Gauquelin himself. In the United States, a test carried out in 1979 and 1980 on American athletes was negative, and its method was hotly disputed.",
        },
        {
          kind: "p",
          text: "In France, the French Committee for the Study of Paranormal Phenomena gathered the birth dates of 1,066 champions, without telling the town halls what they would be used for: no Mars effect appeared. The committee attributed it to a bias in the choice of champions Gauquelin had selected. The German psychologist Suitbert Ertel disputed this conclusion, but no independent test has confirmed the effect.",
        },
      ],
      sources: [
        { label: "Michel Gauquelin, Wikipedia", href: "https://en.wikipedia.org/wiki/Michel_Gauquelin" },
        { label: "Mars effect, Wikipedia", href: "https://en.wikipedia.org/wiki/Mars_effect" },
        { label: "Effet Mars, Wikipédia (in French)", href: "https://fr.wikipedia.org/wiki/Effet_Mars" },
      ],
    },
    "effet-barnum": {
      heading: "The Barnum effect",
      summary:
        "A vague and flattering description always seems accurate: this is the Barnum effect, or Forer effect. In 1948, the psychologist Bertram Forer gave his students a supposedly personal portrait, in fact the same for everyone and taken from an astrology book: they judged it a very good likeness.",
      details: [
        {
          kind: "p",
          text: "Forer had 39 students fill in a questionnaire. A week later, each received their analysis, in reality an identical text, copied from an astrology book bought at a newsstand. On a scale of 0 to 5, they rated its accuracy at more than 4 on average, before learning the truth. The experiment was published in 1949.",
        },
        {
          kind: "p",
          text: "The psychologist Paul Meehl named the phenomenon in 1956, after Phineas Taylor Barnum, the American showman. It refers to portraits made up of traits that almost everyone recognises in themselves, such as the need to be liked or the tendency to be self-critical.",
        },
        {
          kind: "p",
          text: "The Barnum effect partly explains why horoscopes seem accurate: you remember what fits and forget the rest. That is why serious tests, like Carlson's, require a choice between several descriptions, without knowing which one is right.",
        },
      ],
      sources: [
        { label: "Barnum effect, Wikipedia", href: "https://en.wikipedia.org/wiki/Barnum_effect" },
        {
          label: "Bertram Forer, “The fallacy of personal validation”, Journal of Abnormal and Social Psychology, 1949",
          href: "https://doi.org/10.1037/h0059240",
        },
        { label: "Effet Barnum, Wikipédia (in French)", href: "https://fr.wikipedia.org/wiki/Effet_Barnum" },
      ],
    },
    mecanisme: {
      heading: "What force?",
      summary:
        "Physics knows four forces, and only gravitation and electromagnetism reach far. Neither could leave its mark on a personality at birth: at 50 centimetres, an adult holding the baby pulls on it more than Mars does, even at its closest to the Earth.",
      details: [
        {
          kind: "p",
          text: "The calculation is simple, using the masses and distances published by NASA. A 70-kilogram adult leaning 50 centimetres from a newborn pulls on it about 1.3 times more than Mars at its closest, 54.6 million kilometres away, and 70 times more than Mars at its farthest.",
        },
        {
          kind: "p",
          text: "Jupiter, Venus or the Moon pull far harder, but their attraction acts almost equally on the whole Earth and on everything on it: all that counts is the difference from one point to another, the tidal effect, which is minute on a body a few tens of centimetres long. As for Jupiter's magnetic field, measured from the Earth, it is far weaker than that of a household appliance.",
        },
        {
          kind: "p",
          text: "Many astrologers, in any case, do not speak of a force: they see the planets as symbols, not causes. And the lack of a mechanism is not enough, on its own, to reject an idea, as the astronomer Carl Sagan remarked: the mechanism of continental drift was unknown when Wegener proposed it. It is the prediction tests, more than physics, that have settled the matter.",
        },
      ],
      sources: [
        { label: "Planetary Fact Sheet, NASA", href: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/" },
        { label: "Mars Fact Sheet, NASA", href: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html" },
        {
          label: "Sven Ove Hansson, Science and Pseudo-Science, Stanford Encyclopedia of Philosophy",
          href: "https://plato.stanford.edu/entries/pseudo-science/",
        },
      ],
    },
  },
  culture: {
    heading: "A cultural phenomenon",
    summary:
      "Even without any proven power of prediction, astrology has shaped our culture: our calendars, our works of art and even our words still bear its trace. Speaking about it accurately does not mean looking down on those who find in it a language for talking about themselves.",
    details: [
      {
        kind: "p",
        text: "The days of the week come from Hellenistic astrology: each hour was ruled by a planet, and the planet of the first hour gave the day its name. In English, Sunday, Monday and Saturday still bear the names of the Sun, the Moon and Saturn, and Tuesday to Friday those of the Germanic gods matched with Mars, Mercury, Jupiter and Venus.",
      },
      {
        kind: "list",
        items: [
          "Disaster: from the Italian disastro, literally an “ill star”.",
          "Influence: in the 13th century, a flow coming from the stars and thought to act on humans.",
          "Lunatic: driven mad, it was believed, by the Moon.",
          "Jovial: born under Jupiter, a planet reputed to be beneficent, hence cheerful.",
          "Saturnine: gloomy, like those Saturn was thought to mark.",
          "Influenza: in Italian, the influence of the heavens, to which epidemics were attributed.",
          "To be born under a lucky star: to be protected by fate.",
        ],
      },
      {
        kind: "p",
        text: "Art is full of it, from the zodiacs carved on cathedral portals to the Très Riches Heures du duc de Berry; in 1914, Gustav Holst began The Planets, an orchestral suite inspired by the astrological meaning of the planets.",
      },
      {
        kind: "p",
        text: "In 1975, 186 scientists, including 18 Nobel laureates, signed a statement against astrology. Carl Sagan refused to join them: he did not believe in astrology, but found the tone authoritarian, and would have preferred its principles to be explained and refuted. That is a good way to talk about it: say what is known, understand what it represents for those who practise it, without mockery.",
      },
    ],
  },
};
