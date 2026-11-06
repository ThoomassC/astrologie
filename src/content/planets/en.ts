import type { PlanetsContent } from "./types";

export const PLANETS_EN: PlanetsContent = {
  index: {
    title: "The planets",
    lead: "Ten wandering bodies, from the Sun to Pluto: what astrological tradition entrusts to them, and what astronomers have to say about them.",
    intro: {
      summary:
        "In astrology, the Sun and the Moon count among the “planets”: the Greek word planētēs means “wanderer” and refers to any body that moves among the fixed stars. Tradition knows seven, visible to the naked eye; modern astrologers add three more, discovered by telescope.",
      details: [
        {
          kind: "p",
          text: "To astronomers, the Sun is a star and the Moon a satellite of the Earth. But seen from here, both travel across the backdrop of the constellations, just like Mercury, Venus, Mars, Jupiter and Saturn. The ancients therefore grouped them together: seven wandering bodies, which gave their names to the days of the week, from Monday (the Moon) to Saturday (Saturn).",
        },
        {
          kind: "p",
          text: "The telescope brought three planets that are invisible, or nearly so, to the naked eye: Uranus in 1781, Neptune in 1846 and Pluto in 1930. Astrologers gradually took them in, giving them new domains and signs to rule.",
        },
        {
          kind: "p",
          text: "Each page looks at the body from six angles: its symbolism, how it is read in a chart, its myth, its astronomy, its retrograde motion and its rulerships. This is a symbolic tradition: astrologers read images in it, not laws that would decide your life.",
        },
      ],
    },
  },
  groups: {
    luminary: {
      heading: "The luminaries: the Sun and the Moon",
      summary:
        "The two “lights” of the sky, one for the day, the other for the night. Astrologers see them as the two pillars of the chart: the Sun for identity and will, the Moon for sensitivity and needs.",
      details: [
        {
          kind: "p",
          text: "Their brightness sets them apart: no other body lights up the landscape. Hellenistic tradition spoke of “sect”: the Sun led the team of the day, the Moon the team of the night. A chart cast for a daytime birth therefore gave more weight to the former, a night-time chart to the latter.",
        },
        {
          kind: "p",
          text: "They also stand apart in their motion: neither of them ever goes retrograde. The Sun travels round the zodiac in a year, the Moon in just over 27 days. Together with the Ascendant, their signs form the trio that many astrologers look at first.",
        },
      ],
    },
    personal: {
      heading: "The personal planets: Mercury, Venus, Mars",
      summary:
        "The three fast-moving planets closest to us. They change sign within a few weeks, so their positions vary from one person to the next: astrologers read in them the way you think, love and act.",
      details: [
        {
          kind: "p",
          text: "Mercury and Venus orbit closer to the Sun than the Earth does: seen from here, they never stray far from it, about 28 degrees at most for Mercury and 47 for Venus. That is why you only see them at dawn or dusk. Mars, the first planet beyond the Earth, can by contrast stand opposite the Sun and shine all night long.",
        },
        {
          kind: "p",
          text: "In a chart, this trio describes everyday personality: Mercury ideas and exchanges, Venus tastes and bonds, Mars energy and desire. Their signs and houses are read closely, because they tell apart two people born only a few weeks apart.",
        },
      ],
    },
    social: {
      heading: "The social planets: Jupiter and Saturn",
      summary:
        "The two giants known since antiquity, which move more slowly: Jupiter stays about a year in a sign, Saturn two and a half years. Astrologers see in them the link between the person and society, between the drive to grow and a sense of limits.",
      details: [
        {
          kind: "p",
          text: "They are called “social” because they connect the individual to the surrounding world: Jupiter through trust, law, teaching and luck; Saturn through rules, long-term work and maturity. Tradition liked to set them against each other, Jupiter being the “greater benefic” and Saturn the “greater malefic”.",
        },
        {
          kind: "p",
          text: "Their meeting in the sky, the conjunction of Jupiter and Saturn, comes round roughly every twenty years. Medieval astrologers, following scholars of the Arabic-speaking world, used it to divide history into great periods. Their slowness also means that all children born in the same year, or nearly, share them in the same sign.",
        },
      ],
    },
    transpersonal: {
      heading: "The transpersonal planets: Uranus, Neptune, Pluto",
      summary:
        "The three bodies discovered by telescope, in 1781, 1846 and 1930. They stay from seven to more than thirty years in the same sign: astrologers read them mainly by house and aspect, and their sign as the mark of a generation.",
      details: [
        {
          kind: "p",
          text: "“Transpersonal” means going beyond the person. Twentieth-century astrologers associated these distant planets with great collective movements: Uranus with revolutions and inventions, Neptune with shared ideals and dreams, Pluto with crises and deep transformations. They are also called the “generational planets” or the “outer planets”.",
        },
        {
          kind: "p",
          text: "Neither the Greek nor the medieval astrologers knew them. They were integrated over the 19th and 20th centuries: each was given a sign to rule, Aquarius, Pisces or Scorpio, which tradition had until then entrusted to Saturn, Jupiter or Mars. Some traditional astrologers still prefer to do without them.",
        },
      ],
    },
  },
  northNode: {
    heading: "The nodes of the Moon",
    summary:
      "The nodes are not bodies: they are the two points where the Moon's orbit crosses the ecliptic, the Sun's apparent path. The north node and the south node always face each other; astrologers read in them an axis between what you have acquired and the path left to explore.",
    details: [
      {
        kind: "p",
        text: "Tilted by about 5 degrees to the Earth's orbit, the Moon's orbit crosses the ecliptic twice a month: heading north at the north, or ascending, node, and heading south at the south node. An eclipse only happens when a new or full moon falls near a node: hence the name ecliptic.",
      },
      {
        kind: "p",
        text: "The nodes move slowly backwards through the zodiac and complete a full circuit in 18.6 years, about eighteen months per sign. The mean node smooths this backward motion into a regular movement; the true node follows the actual position, which wobbles. This site places the mean north node in its charts.",
      },
      {
        kind: "p",
        text: "Medieval astrologers spoke of the Dragon's Head and the Dragon's Tail, Indian astrology of Rahu and Ketu; the head was considered favourable, the tail more difficult. In the 20th century, many came to see them as a path of growth: the south node for what you have acquired, the north node for the direction to take.",
      },
    ],
  },
  planets: {
    sun: {
      tagline: "The heart of the chart: identity, vitality and will, which tradition reads in the body that lights and warms everything else.",
      intro: {
        summary:
          "The Sun is the body everyone knows in their chart: it gives the “sign” people talk about in everyday life. Tradition sees in it the centre of the person, their vitality and what they seek to radiate.",
        details: [
          {
            kind: "p",
            text: "The only body to shine with its own light, it governs the day and the year. Its yearly journey along the zodiac sets the dates of the signs: it enters Aries around 21 March and Libra around 23 September.",
          },
          {
            kind: "p",
            text: "Ptolemy, in the 2nd century, describes it as hot and somewhat dry, masculine and diurnal in nature: it leads the team of the day. He counts it neither among the benefics nor among the malefics: in his view, the Sun acts one way or the other depending on the bodies that accompany it.",
          },
          {
            kind: "p",
            text: "In the modern reading, it represents self-awareness, the life force and the direction you give your life. It is often said to show who you are trying to become, more than who you already are.",
          },
        ],
      },
      keywords: ["identity", "vitality", "will", "creativity", "the father", "authority", "recognition"],
      sections: {
        symbolique: {
          heading: "The symbol of the Sun",
          summary:
            "In a chart, the Sun stands for the centre: identity, will, vitality, whatever gives the rest its coherence. Its glyph, a circle with a dot, expresses this idea of a centre.",
          details: [
            {
              kind: "p",
              text: "Astrologers like to compare the chart to a miniature solar system: the other bodies describe facets of the person, the Sun what binds them together. Tradition also associates it with the father, figures of authority, honour and public recognition, and, in the body, with the heart.",
            },
            {
              kind: "p",
              text: "Modern astrologers read in its glyph the spirit, shown by the circle with neither beginning nor end, and the individual concentrated within it, shown by the dot. The history is simpler: in late Greek manuscripts, the Sun was a small disc with a single ray, and the dotted circle only took hold in the Renaissance. In alchemy, the same sign stands for gold.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "The Sun in a chart",
          summary:
            "The Sun's sign tells how you assert your identity, its house the area where you seek to shine, and its aspects the other functions it is in dialogue with.",
          details: [
            {
              kind: "p",
              text: "The Sun sign depends only on the date of birth. According to the usual descriptions of the signs, a Sun in Aries would assert itself through drive and initiative, a Sun in Virgo through care and precision.",
            },
            {
              kind: "p",
              text: "The house, on the other hand, depends on the time. Someone born around noon has the Sun near the Midheaven, in the 10th or 9th house: astrologers see in this a need to fulfil yourself in broad daylight, through your vocation. Born at dawn, you have it near the Ascendant, in the 12th or 1st house; around midnight, near the Imum Coeli, in the 4th or 3rd house.",
            },
            {
              kind: "p",
              text: "The aspects show how identity comes to terms with the rest. A Sun square Saturn, for example, is often read as a self-assertion that is built slowly, through effort, rather than as a final obstacle.",
            },
          ],
        },
        mythe: {
          heading: "Helios, Sol and Apollo",
          summary:
            "For the Greeks, the Sun was Helios, who drove his chariot of fire across the sky from east to west every day. The Romans called him Sol; he was later merged with Apollo, god of light and the arts.",
          details: [
            {
              kind: "p",
              text: "Helios is the son of the Titans Hyperion and Theia, and the brother of Selene, the Moon, and Eos, the Dawn. According to some poets, a vast golden cup carried him back to the east each night. One day his son Phaethon wanted to drive the chariot: unable to hold the horses, he set the Earth ablaze, and Zeus had to strike him down with a thunderbolt.",
            },
            {
              kind: "p",
              text: "The Babylonians honoured him as Shamash, god of justice. In Rome, the cult of Sol grew until it became that of Sol Invictus, the Unconquered Sun, promoted by the emperor Aurelian in 274. The French word soleil comes from the popular Latin soliculus, “little sun”, a diminutive of sol; English and German have kept the day of the Sun, Sunday and Sonntag.",
            },
          ],
        },
        astronomie: {
          heading: "One star among many",
          summary:
            "The Sun is not a planet but a star, a yellow dwarf about 4.5 billion years old. It holds more than 99% of the mass of the solar system and lies on average 150 million kilometres from us.",
          details: [
            {
              kind: "p",
              text: "Its diameter, about 1.4 million kilometres, is 109 times that of the Earth. Its visible surface is around 5,500 °C, and its core 15 million degrees: it is there that the fusion of hydrogen into helium produces its energy. Its light takes just over 8 minutes to reach us.",
            },
            {
              kind: "p",
              text: "Its course through the zodiac is a reflection: it is the Earth that goes round it, so we see it pass in front of different constellations over the year. It completes the zodiac in about 365 and a quarter days and stays on average 30.4 days in each sign, between 29 and 32 depending on the season: a little less in December and January, when the Earth, at its closest, races faster along its orbit.",
            },
          ],
        },
        retrogradation: {
          heading: "Why the Sun is never retrograde",
          summary:
            "The planets sometimes seem to move backwards through the zodiac. The Sun never does: its apparent motion is simply the reflection of the Earth's journey round it, which always goes in the same direction.",
          details: [
            {
              kind: "p",
              text: "Retrograde motion is an effect of perspective: seen from a moving Earth, a planet that is also orbiting the Sun seems at times to retrace its steps against the distant stars. Nothing of the sort happens with the Sun: the Earth never turns back on its orbit, and the Sun always moves forward, by about one degree a day.",
            },
            {
              kind: "p",
              text: "Its speed does vary a little, from 0.95 degrees a day in early July to almost 1.02 in early January, without ever coming to a halt. For astrologers, it thus sets the steady rhythm of the year: its return to the exact degree it held at birth, around your birthday, is called the “solar return”, a chart some astrologers cast every year.",
            },
          ],
        },
        maitrises: {
          heading: "The rulerships of the Sun",
          summary:
            "The Sun has its domicile in Leo and its exaltation in Aries, at 19 degrees. Opposite, it is in detriment in Aquarius and in fall in Libra, two signs where tradition judges it less at ease.",
          details: [
            {
              kind: "p",
              text: "In the ancient scheme, the Sun and the Moon receive the two signs of high summer, Cancer and Leo, where their light and warmth peak in the northern hemisphere; Leo, a masculine sign, goes to the Sun. The other five bodies then share out the following signs, two each, in order of their distance.",
            },
            {
              kind: "p",
              text: "Its exaltation in Aries comes from spring: Ptolemy explains that as it enters this sign, the Sun climbs northwards, the days lengthen and its warmth grows. In Libra, by contrast, it passes into the southern half of the sky and the days grow shorter: this is its fall. In detriment in Aquarius, opposite Leo, it would, according to astrologers, be turned less towards itself than towards the group.",
            },
          ],
        },
      },
      imageAlt: "Orange sphere of the Sun, textured from a map of its surface: a seething mass of golden granules, brighter in places.",
    },
    moon: {
      tagline: "The body of emotions, needs and memory, according to tradition: the Moon changes face every evening, just like our moods.",
      intro: {
        summary:
          "The fastest body in the sky, the Moon crosses a sign in just over two days. Tradition sees in it sensitivity, needs, habits and the bond with the mother: the part of us that reacts before it thinks.",
        details: [
          {
            kind: "p",
            text: "For the ancients, it was the closest of the seven wandering bodies, the boundary between the changing world here below and the unchanging heavens. It governs the months and the tides, and its phases served many peoples as their first calendar.",
          },
          {
            kind: "p",
            text: "Ptolemy describes it as moist and slightly warm, feminine and nocturnal in nature: it leads the team of the night. He counts it among the benefics, alongside Jupiter and Venus, and entrusts it with the first years of life, up to about the age of 4.",
          },
          {
            kind: "p",
            text: "The modern reading sees in it the inner world: what reassures you, what you learnt very early on, the way you care for others and like to be cared for. Together with the Sun and the Ascendant, its sign is one of the first three you look at in a chart.",
          },
        ],
      },
      keywords: ["emotions", "sensitivity", "needs", "the mother", "home", "memory", "habits"],
      sections: {
        symbolique: {
          heading: "The symbol of the Moon",
          summary:
            "The Moon stands for the receptive, changing side of the person: emotions, instinct, the needs of the body and the heart. Its glyph, a simple crescent, has represented it since antiquity.",
          details: [
            {
              kind: "p",
              text: "Where the Sun radiates, the Moon reflects: it shines only with the light it receives. Astrologers have made it the image of receptivity, imagination and memory, of everything that nourishes and protects. Tradition also gives it the mother, childhood, the home, the common people and travel, and in the body, the stomach and bodily fluids.",
            },
            {
              kind: "p",
              text: "The crescent is one of the oldest symbols of the sky: it already appears on monuments in Mesopotamia, as the emblem of the moon god Sin. For modern astrologers, it stands for the soul, open and available, in contrast to the solar circle. In alchemy, it stands for silver, the pale metal of the Moon.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "The Moon in a chart",
          summary:
            "Its sign describes your emotional style, the way you react and reassure yourself; its house, the area where you look for security; its aspects, the links between sensitivity and the other functions.",
          details: [
            {
              kind: "p",
              text: "Because it changes sign roughly every two days, you need the time of birth to place it with certainty on a day when it moves from one sign to the next. A Moon in Aries is described as lively and quick to flare up, a Moon in Taurus as calm, attached to comfort and to stable landmarks.",
            },
            {
              kind: "p",
              text: "In the 4th house, the Moon is considered very much at ease, at the heart of home and family; in the 10th house, it would expose your sensitivity to the public gaze. Hellenistic tradition said it rejoiced in the 3rd house, that of the Goddess. The phase matters too: someone born at full moon has the Moon opposite the Sun, a tension that astrologers read between needs and will.",
            },
            {
              kind: "p",
              text: "Being fast, the Moon forms aspects with every body within a month. In horary astrology, which studies the sky at the moment a question is asked, it is the Moon's next aspects that describe how events will unfold.",
            },
          ],
        },
        mythe: {
          heading: "Selene, Luna and Artemis",
          summary:
            "The Greeks called her Selene, sister of Helios, who drove her silver chariot through the night. The Romans called her Luna; she was later identified with Artemis, the Romans' Diana, goddess of the hunt.",
          details: [
            {
              kind: "p",
              text: "Selene is the daughter of the Titans Hyperion and Theia. The best-known myth shows her in love with Endymion, a young shepherd sunk in endless sleep, whom she came to gaze upon every night. The Babylonians, for their part, honoured a moon god, Sin, guardian of the months.",
            },
            {
              kind: "p",
              text: "The Latin word luna belongs to the same family as lux, light. Monday is her day, lunae dies in Latin, lundi in French. Latin poets imagined her as a goddess with three faces: Luna in the sky, Diana on earth, Hecate or Proserpina in the Underworld.",
            },
          ],
        },
        astronomie: {
          heading: "Our satellite",
          summary:
            "The Moon is the Earth's natural satellite, 384,400 km away on average. It goes round the Earth in 27.3 days, but it takes 29.5 days to see the same phase again, because in the meantime the Earth has moved on round the Sun.",
          details: [
            {
              kind: "p",
              text: "With a diameter of 3,475 km, it is just over a quarter the size of the Earth. It turns on its axis in exactly the time it takes to complete an orbit: that is why it always shows us the same face. It is moving away from us by about 3.8 cm a year.",
            },
            {
              kind: "p",
              text: "Its glow comes from the Sun: depending on the angle from which we see its lit half, it goes from new moon to first quarter, to full moon, then to last quarter. Its orbit is tilted by about 5 degrees to the ecliptic, which explains why there is not an eclipse every month.",
            },
            {
              kind: "p",
              text: "In the zodiac, it moves about 13 degrees a day and stays on average 2.28 days in a sign, from two to two and a half days depending on its distance from the Earth.",
            },
          ],
        },
        retrogradation: {
          heading: "Why the Moon is never retrograde",
          summary:
            "The Moon never moves backwards through the zodiac. It orbits the Earth itself: we are at the centre of its orbit, and no effect of perspective can reverse its apparent motion.",
          details: [
            {
              kind: "p",
              text: "A planet appears to go retrograde because it and the Earth both orbit the Sun, at different speeds: one catches up with the other and, seen from here, the slower one seems to move backwards. The Moon, by contrast, travels with us: it always moves forward in the order of the signs, from Aries to Taurus, then on to Gemini.",
            },
            {
              kind: "p",
              text: "Its speed nonetheless varies a great deal, from about 12 to more than 15 degrees a day depending on whether it is far from us or close. Astrologers thus distinguish a “fast” Moon from a “slow” Moon, with no halt and no backward motion. It is the lunar nodes, two points on its orbit, that move backwards through the zodiac.",
            },
            {
              kind: "p",
              text: "Tradition paid more attention to its phases: waxing, it was thought to favour what begins and grows; waning, what comes to an end and settles.",
            },
          ],
        },
        maitrises: {
          heading: "The rulerships of the Moon",
          summary:
            "The Moon has its domicile in Cancer and its exaltation in Taurus, at 3 degrees. It is in detriment in Capricorn, the sign opposite Cancer, and in fall in Scorpio, opposite Taurus.",
          details: [
            {
              kind: "p",
              text: "Cancer, the feminine sign at the start of summer, goes to it in the ancient scheme, next to the solar Leo: the two luminaries share the signs where light peaks in the northern hemisphere. Astrologers describe it as a protective water sign, in tune with lunar sensitivity.",
            },
            {
              kind: "p",
              text: "For the exaltation, Ptolemy reasons from the sky: after meeting the Sun in Aries, the Moon reappears as a thin crescent in Taurus, where its light begins to grow. In Capricorn, the sign of effort and structures, and in Scorpio, the sign of the depths, tradition judges it less free to offer its gentleness.",
            },
          ],
        },
      },
      imageAlt: "Grey sphere of the Moon, textured from a photographic map: large dark seas and bright craters.",
    },
    mercury: {
      tagline: "The messenger of the zodiac: thought, speech and exchange, which tradition entrusts to the fastest planet.",
      intro: {
        summary:
          "Mercury, the planet closest to the Sun, never strays far from it in the sky. Astrologers entrust it with practical intelligence, language, learning and every form of exchange, from trade to everyday journeys.",
        details: [
          {
            kind: "p",
            text: "Quick and hard to observe, Mercury appears low on the horizon, just before sunrise or just after sunset. The Greeks called it Stilbon, “the twinkling one”, before dedicating it to Hermes, the messenger god.",
          },
          {
            kind: "p",
            text: "Ptolemy gives it a changeable nature, sometimes dry, sometimes moist, and calls it “common”: neither benefic nor malefic in itself, it takes on the colour of the bodies it connects with. It is diurnal when it rises before the Sun, nocturnal when it follows it in the evening. Ptolemy also entrusts it with the school years, from 4 to 14.",
          },
          {
            kind: "p",
            text: "In a modern chart, it shows how you think, speak, learn and connect pieces of information: it is the body of questions and answers.",
          },
        ],
      },
      keywords: ["intelligence", "communication", "learning", "exchange", "trade", "travel", "childhood"],
      sections: {
        symbolique: {
          heading: "The symbol of Mercury",
          summary:
            "Mercury stands for the mind that connects: thought, speech, writing, calculation and trade. Its glyph derives from the caduceus, the staff of the messenger god.",
          details: [
            {
              kind: "p",
              text: "Tradition makes it the body of go-betweens: messengers, merchants, scribes, teachers, orators and travellers. It governs skill and quickness of mind, and in the body, the brain, the tongue and the hands.",
            },
            {
              kind: "p",
              text: "Its glyph stacks a crescent, a circle and a cross. One modern reading finds in it the receptive soul, spirit and matter brought together, the image of an intelligence that makes connections. Historians mostly recognise in it the caduceus of Hermes, as it was drawn in late Greek papyri; the cross at the bottom was added later. In alchemy, the same sign stands for quicksilver, our mercury.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Mercury in a chart",
          summary:
            "Its sign describes your style of thinking and speaking; its house, the subjects that occupy your mind; its aspects, how reflection fits in with feelings, action or memory.",
          details: [
            {
              kind: "p",
              text: "Since Mercury never strays more than 28 degrees from the Sun, it is always in the same sign as the Sun, or in one of the two neighbouring signs. A Mercury in Taurus is described as slow but tenacious, thinking in concrete terms; in Sagittarius, as broad and enthusiastic, more at ease with general ideas than with details.",
            },
            {
              kind: "p",
              text: "In the 3rd house, its “natural” house for modern astrologers, it would emphasise curiosity, exchange and learning; in the 6th house, an intelligence turned towards method and a job well done. Hellenistic tradition, for its part, said it rejoiced in the 1st house. An aspect with the Moon would tie thought to emotions, an aspect with Saturn would lend it seriousness and concentration.",
            },
          ],
        },
        mythe: {
          heading: "Hermes, the messenger",
          summary:
            "The Greek god Hermes, whom the Romans called Mercury, carried the messages of Olympus, protected travellers and merchants, and guided souls to the Underworld. His agility suited the fastest planet.",
          details: [
            {
              kind: "p",
              text: "Son of Zeus and the nymph Maia, Hermes was famously precocious: on the very day he was born, he made the first lyre from a tortoise shell and stole the herd of his half-brother Apollo. God of roads and crossroads, he also protected merchants, orators, and even thieves.",
            },
            {
              kind: "p",
              text: "The Babylonians already associated this body with Nabu, god of scribes and writing. The Latin name Mercurius is often linked to merx, merchandise, which gave us “merchant” and “commerce”. Wednesday is his day, Mercurii dies in Latin, mercredi in French, and the liquid metal we call mercury also bears his name.",
            },
          ],
        },
        astronomie: {
          heading: "The smallest of the planets",
          summary:
            "Mercury goes round the Sun in 88 days, 58 million kilometres from it on average: no planet is faster. It is also the smallest in the solar system, barely larger than the Moon.",
          details: [
            {
              kind: "p",
              text: "This small rocky world, 4,879 km across, has almost no atmosphere to hold in heat: it reaches about 430 °C by day and 180 °C below zero at night. Its crater-pocked surface looks like the Moon's. A solar day there lasts 176 Earth days, which is two of its years.",
            },
            {
              kind: "p",
              text: "Seen from the Earth, Mercury never strays more than about 28 degrees from the Sun. On average, then, it moves through the zodiac at the same pace as the Sun and stays 30.4 days in a sign, but its accelerations and backward loops make that stay vary from two weeks to more than two months.",
            },
          ],
        },
        retrogradation: {
          heading: "Mercury retrograde",
          summary:
            "Three times a year, sometimes four, Mercury seems to move backwards through the zodiac for about three weeks. It is the best-known retrograde period, and the most frequent of all.",
          details: [
            {
              kind: "p",
              text: "The effect comes from perspective. Mercury goes round the Sun much faster than the Earth; when it passes between us and the Sun, it overtakes us on the inside, and its apparent motion against the stars is reversed. It moves back a dozen degrees or so, then sets off forwards again. The full cycle, from one passage between the Earth and the Sun to the next, lasts 116 days.",
            },
            {
              kind: "p",
              text: "Popular culture has turned it into a time of misunderstandings, delays and temperamental gadgets. Astrologers see it rather as an invitation to review, reread and check, to pick up a question left hanging. Nothing obliges you to put your life on hold: in the symbolic reading, it is a time for revision.",
            },
            {
              kind: "p",
              text: "Nearly one person in five is born during a Mercury retrograde. Some astrologers credit them with a more inward-looking mind, one that likes to return to its ideas.",
            },
          ],
        },
        maitrises: {
          heading: "The rulerships of Mercury",
          summary:
            "Mercury rules two signs, Gemini and Virgo, and it is also exalted in Virgo, at 15 degrees. It is in detriment in Sagittarius and Pisces, and in fall in Pisces.",
          details: [
            {
              kind: "p",
              text: "In the ancient scheme, Mercury, which never strays more than about one sign from the Sun, receives the two signs next to those of the luminaries: Gemini, just before the Moon's Cancer, and Virgo, just after the Sun's Leo.",
            },
            {
              kind: "p",
              text: "It is the only body to be both in domicile and in exaltation in the same sign, Virgo, and therefore in detriment and in fall in the same opposite sign, Pisces. Ptolemy explains this exaltation by the season: Virgo heralds the dry autumn, in tune with its rather dry nature; Pisces, the moist sign of late winter, suits it poorly.",
            },
          ],
        },
      },
      imageAlt: "Grey sphere of Mercury, wrapped in a photographic map of its surface: a crater-pocked surface, some craters ringed with bright streaks.",
    },
    venus: {
      tagline: "The Morning and Evening Star of astrologers: love, attraction, a taste for beauty and the art of living together, according to tradition.",
      intro: {
        summary:
          "Venus is the brightest body after the Sun and the Moon; it is also known as the Shepherd's Star. Tradition entrusts it with love, pleasure, beauty, harmony and whatever you place value on.",
        details: [
          {
            kind: "p",
            text: "It shines at dawn or dusk, never in the middle of the night. The Greeks gave it two names, Phosphoros, “bringer of light”, when it rises before the Sun, and Hesperos when it shines in the evening, before it was recognised as one and the same body.",
          },
          {
            kind: "p",
            text: "Ptolemy describes it as temperate, rather moist and mild, feminine and nocturnal in nature. It is the “lesser benefic” of tradition, after Jupiter: a body that softens, draws together and beautifies. Ptolemy entrusts it with the age of youth and first loves, from 14 to 22.",
          },
          {
            kind: "p",
            text: "In a modern chart, Venus describes the way you love and are loved, what attracts you, your tastes, and your relationship with pleasure as well as with money.",
          },
        ],
      },
      keywords: ["love", "beauty", "pleasure", "harmony", "the arts", "values", "money"],
      sections: {
        symbolique: {
          heading: "The symbol of Venus",
          summary:
            "Venus stands for the principle of attraction: what pleases, draws together and harmonises. Its glyph, a circle set on a cross, is often described as the goddess's mirror.",
          details: [
            {
              kind: "p",
              text: "Tradition associates it with love and friendship, festivities, adornment, music, the arts, and everything that makes life sweeter. Modern astrologers add values in the broad sense: what you appreciate, what seems precious to you, right down to your relationship with money and comfort.",
            },
            {
              kind: "p",
              text: "The hand mirror is only an old hypothesis, but it caught on. In the oldest astronomical papyri, the cross at the bottom is in fact missing: it was added later. Modern astrologers read in this glyph the spirit, the circle, ruling over matter, the cross. In alchemy, the same sign stands for copper, the metal of Cyprus, Aphrodite's island; biologists use it for the female sex.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Venus in a chart",
          summary:
            "The sign of Venus colours the way you love and your aesthetic taste; its house shows where you look for harmony and pleasure; its aspects, how affection fits in with the rest of your character.",
          details: [
            {
              kind: "p",
              text: "Venus never strays more than 47 degrees from the Sun: it is therefore in the Sun's sign or at most two signs away. A Venus in Libra is described as refined, seeking balance and elegance; a Venus in Scorpio, as passionate and exclusive, deep rather than light-hearted.",
            },
            {
              kind: "p",
              text: "In the 7th house, that of unions, Venus would emphasise the importance of couples and partnerships; in the 2nd house, a taste for beautiful things and a certain talent for making your resources grow. Hellenistic tradition said it rejoiced in the 5th house, that of Good Fortune. An aspect between Venus and Mars, two complementary bodies, is traditionally read as an alliance of tenderness and desire.",
            },
          ],
        },
        mythe: {
          heading: "Aphrodite and Venus",
          summary:
            "The planet bears the name of the Roman goddess of love, Venus, whom the Greeks called Aphrodite. Before them, the Babylonians saw in this body Ishtar, goddess of love and war.",
          details: [
            {
              kind: "p",
              text: "According to Hesiod, Aphrodite was born from the foam of the sea, near the island of Cythera, then carried to Cyprus; Homer calls her the daughter of Zeus and Dione. Married to Hephaestus, the smith god, she loved Ares, the god of war: a couple that astrologers find again in the sky with Venus and Mars.",
            },
            {
              kind: "p",
              text: "In Rome, Venus was honoured as the mother of Aeneas, the legendary ancestor of the Romans; Julius Caesar claimed descent from her. Friday is her day, Veneris dies in Latin, vendredi in French. As for the name Shepherd's Star, it is said to come from the shepherds who saw it shining as they took their flocks out or brought them home.",
            },
          ],
        },
        astronomie: {
          heading: "The Earth's scorching twin",
          summary:
            "Venus is almost the size of the Earth, but it is the hottest planet in the solar system: more than 460 °C at ground level, beneath a thick atmosphere of carbon dioxide and clouds of sulphuric acid.",
          details: [
            {
              kind: "p",
              text: "It goes round the Sun in 225 days, 108 million kilometres from it. Its rotation is very slow and runs the opposite way to that of most planets: one turn on its axis takes 243 days, longer than its year. Its clouds reflect light so well that, after the Moon, it is the brightest body in the night sky.",
            },
            {
              kind: "p",
              text: "Because it orbits closer to the Sun than we do, it never strays more than about 47 degrees from it. On average, then, it spends as long as the Sun in each sign, 30.4 days; but when it goes retrograde, it can linger for nearly four months in the same sign.",
            },
          ],
        },
        retrogradation: {
          heading: "Venus retrograde",
          summary:
            "About every nineteen months, Venus seems to move backwards through the zodiac for some forty days. These retrograde periods are rare: it spends only 7% of its time moving backwards.",
          details: [
            {
              kind: "p",
              text: "As with Mercury, the effect comes from perspective: faster than the Earth on a smaller orbit, Venus overtakes us on the inside when it passes between us and the Sun. It then disappears into the Sun's glare, and turns from evening star into morning star. Its apparent backward motion is about 16 degrees.",
            },
            {
              kind: "p",
              text: "Five of these cycles make almost exactly eight years: the retrograde periods therefore return to roughly the same places in the zodiac every eight years, and when joined together, these five positions trace a five-pointed star in the zodiac. Babylonian astronomers already made use of this eight-year cycle.",
            },
            {
              kind: "p",
              text: "Astrologers see it as a time to revisit your relationships and your tastes: to reconnect, reassess, ask yourself what you really love. Nothing to worry about: tradition speaks of a body turning inwards, not of a body doing harm.",
            },
          ],
        },
        maitrises: {
          heading: "The rulerships of Venus",
          summary:
            "Venus has two domiciles, Taurus and Libra, and its exaltation in Pisces, at 27 degrees. It is in detriment in Scorpio and Aries, the signs opposite its domiciles, and in fall in Virgo.",
          details: [
            {
              kind: "p",
              text: "In Ptolemy's scheme, Venus receives the signs that form a sextile, at 60 degrees, with those of the luminaries: Libra, two signs after Leo, and Taurus, two signs before Cancer. The sextile, a gentle and harmonious aspect, suited a temperate body that never strays more than two signs from the Sun.",
            },
            {
              kind: "p",
              text: "Its exaltation in Pisces comes, according to Ptolemy, from the moisture of this late-winter sign, which heralds spring and suits its nature. In Virgo, dry and meticulous, as in Aries and Scorpio, the two signs of Mars, tradition judges it less free to express its gentleness.",
            },
          ],
        },
      },
      imageAlt: "Pale yellow sphere of Venus, textured from a map of its thick cloud cover, which completely hides the ground.",
    },
    mars: {
      tagline: "The red body of energy, courage and desire, according to tradition: the force that drives you to act, to decide and to defend yourself.",
      intro: {
        summary:
          "Mars is the first planet beyond the Earth, recognisable by its reddish glow. Tradition entrusts it with energy, action, courage, anger and desire: the part of us that moves forward, takes the initiative and fights.",
        details: [
          {
            kind: "p",
            text: "Its colour has struck every people: the Greeks called it Pyroeis, “the fiery one”, and the Babylonians associated it with Nergal, god of war and plagues. Roughly every two years, when it passes opposite the Sun, it becomes one of the brightest bodies in the night sky.",
          },
          {
            kind: "p",
            text: "Ptolemy describes it as hot and above all drying, masculine in nature, and makes it the “lesser malefic”, after Saturn. Yet he places it among the bodies of the night, whose coolness tempers its fire. He entrusts it with the age of full maturity, from 41 to 56.",
          },
          {
            kind: "p",
            text: "In a modern chart, Mars describes the way you act and react, your sporting drive, the way you assert your desires and go through conflicts.",
          },
        ],
      },
      keywords: ["energy", "action", "courage", "desire", "fighting spirit", "initiative", "sport"],
      sections: {
        symbolique: {
          heading: "The symbol of Mars",
          summary:
            "Mars stands for the force of self-assertion: drive, the will to act, the ability to defend what matters. Its glyph, a circle with an arrow springing from it, evokes the shield and spear of the warrior god.",
          details: [
            {
              kind: "p",
              text: "Tradition associates it with soldiers, craftsmen of iron and fire, surgeons, athletes, and every situation where a decision must be made. In the body, it governs the blood, the muscles and the head. Today's astrologers also entrust it with desire, sexuality and anger, an energy that can build as much as destroy.",
            },
            {
              kind: "p",
              text: "The circle with a slanting arrow is attested since at least the 11th century; older papyri show a different form, perhaps a simple spear. Astrologers see in it the spirit straining towards a goal. In alchemy, this sign stands for iron, whose rust is precisely what colours the planet; in biology, for the male sex.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Mars in a chart",
          summary:
            "The sign of Mars describes the way you act and defend yourself; its house, the ground where you spend your energy; its aspects, how your drive fits in, or clashes, with your other needs.",
          details: [
            {
              kind: "p",
              text: "In Aries, its domicile, Mars would be direct, quick and frank; in Cancer, where tradition judges it in fall, it would rather act indirectly, to protect its own. In the 10th house, it would push towards ambition and professional competition; in the 6th house, where Hellenistic tradition said it rejoiced, it would put its ardour at the service of daily work.",
            },
            {
              kind: "p",
              text: "Its aspects are read as alliances or frictions: with Jupiter, the enthusiasm that undertakes things on a grand scale; with Saturn, an energy held back but enduring, which learns patience. Astrologers insist on one point: a Mars in tense aspect does not foretell any conflict, it describes an energy to be channelled.",
            },
          ],
        },
        mythe: {
          heading: "Ares and Mars",
          summary:
            "The planet bears the name of Mars, the Roman god of war, whom the Greeks called Ares. Little loved in Greece, in Rome he was a major god, father of Romulus and Remus, the city's legendary founders.",
          details: [
            {
              kind: "p",
              text: "Ares, son of Zeus and Hera, embodied the fury of battle; Athena, goddess of strategy, often got the better of him. The lover of Aphrodite, he had two sons, Phobos and Deimos, Fear and Terror, who went with him onto the battlefield: their names were given to the two small moons of Mars, discovered in 1877.",
            },
            {
              kind: "p",
              text: "In Rome, Mars also watched over fields and harvests before becoming the god of the legions. He gave his name to the month of March, with which the oldest Roman year began, to the Campus Martius, the Field of Mars, and to Tuesday in Latin, Martis dies, mardi in French.",
            },
          ],
        },
        astronomie: {
          heading: "The red planet",
          summary:
            "A rocky world half the size of the Earth, Mars orbits 228 million kilometres from the Sun, going round it in 687 days, nearly two of our years. Its colour comes from iron oxide, rust, which tints its dust.",
          details: [
            {
              kind: "p",
              text: "The planet measures 6,792 km across. It is home to the largest volcano in the solar system, Olympus Mons, about three times as high as Everest, polar ice caps and two small moons, Phobos and Deimos. Its day lasts barely longer than ours: just over 24 and a half hours.",
            },
            {
              kind: "p",
              text: "In the zodiac, Mars moves about half a degree a day and stays on average 57 days in a sign. Outside its retrograde periods, it crosses a sign in about six weeks; when it goes retrograde there, it can stay for more than seven months.",
            },
          ],
        },
        retrogradation: {
          heading: "Mars retrograde",
          summary:
            "About every two years and two months, Mars seems to move backwards through the zodiac for around ten weeks. This happens when the Earth overtakes it, at the moment it is closest to us and brightest.",
          details: [
            {
              kind: "p",
              text: "On its inner orbit, the Earth moves faster than Mars. About every 780 days, it catches up with Mars and passes it, like a car overtaking a slower one on the motorway: for a while, the car being overtaken seems to move backwards against the distant landscape. Mars is then opposite the Sun, visible all night long.",
            },
            {
              kind: "p",
              text: "Its retrograde loop, from 10 to 20 degrees depending on the occasion, long puzzled astronomers. It was by studying the motion of Mars, using Tycho Brahe's observations, that Kepler established in 1609 that the planets travel in ellipses.",
            },
            {
              kind: "p",
              text: "Astrologers describe these periods as favourable for taking up an action again, for reconsidering a plan or an anger, rather than charging ahead. Tradition saw in them a weakened Mars, less free in its movements, without attaching any misfortune to it.",
            },
          ],
        },
        maitrises: {
          heading: "The rulerships of Mars",
          summary:
            "Mars rules Aries and, in tradition, Scorpio. It is exalted in Capricorn, at 28 degrees. Opposite, it is in detriment in Libra and Taurus, and in fall in Cancer.",
          details: [
            {
              kind: "p",
              text: "Ptolemy assigns it the signs that are square to those of the luminaries: Aries, square to Cancer, and Scorpio, square to Leo. The square, the aspect of tension, suited the body of combat. Since the discovery of Pluto, many astrologers have entrusted Scorpio to that planet, keeping Mars as the sign's traditional ruler.",
            },
            {
              kind: "p",
              text: "The exaltation in Capricorn is explained, according to Ptolemy, by the position of this sign, the most southerly in the zodiac: Mars, burning by nature, would gain still more ardour there. In Cancer, the water sign opposite Capricorn, and in the signs of Venus, Libra and Taurus, tradition judges it less at ease to act openly.",
            },
          ],
        },
      },
      imageAlt: "Rust-coloured sphere of Mars, covered with a photographic map of the planet: orange deserts, dark regions and white polar caps.",
    },
    jupiter: {
      tagline: "The largest of the planets, and the greater benefic of tradition: growth, confidence, wisdom and generosity.",
      intro: {
        summary:
          "Jupiter is the biggest planet in the solar system, and one of the brightest in the night sky. Astrologers entrust it with growth, optimism, generosity, law and the search for meaning: everything that broadens the horizon.",
        details: [
          {
            kind: "p",
            text: "It takes nearly twelve years to go round the zodiac, so it spends about a year in each sign. The Greeks called it Phaethon, “the shining one”, and the Babylonians saw in it Marduk, king of the gods of Babylon.",
          },
          {
            kind: "p",
            text: "Ptolemy calls it temperate, both warm and moist, favourable to life and fertility. Masculine and diurnal, it is the “greater benefic” of tradition, the body that protects and brings prosperity. Ptolemy entrusts it with the age of wisdom, from 56 to 68.",
          },
          {
            kind: "p",
            text: "In a modern chart, Jupiter shows what gives you confidence, what drives you to learn, to travel, to pass things on, and the way you look for your place in a wider order.",
          },
        ],
      },
      keywords: ["expansion", "confidence", "generosity", "wisdom", "the law", "long journeys", "luck"],
      sections: {
        symbolique: {
          heading: "The symbol of Jupiter",
          summary:
            "Jupiter stands for the principle of expansion: confidence, faith, generosity, the desire to grow and to understand. Its glyph comes from an old abbreviation of the name of Zeus.",
          details: [
            {
              kind: "p",
              text: "Tradition associates it with judges, priests, teachers, long-distance travellers and all those who pass on knowledge or a law. It governs prosperity, well-earned honours, kindness, and in the body, the liver. Astrologers also point out its downside: excess, extravagance, blind confidence.",
            },
            {
              kind: "p",
              text: "Its glyph looks like the figure 4 drawn with a loose hand. It derives from the Greek letter zeta, the initial of Zeus, crossed by an abbreviation stroke. Modern symbolism sees in it a crescent, the soul, rising above the cross of matter, the image of a mind opening up. In alchemy, this sign stands for tin.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Jupiter in a chart",
          summary:
            "Its sign tells in what style you seek to grow and to find meaning; its house, the area where confidence comes most easily; its aspects, what optimism encourages or amplifies.",
          details: [
            {
              kind: "p",
              text: "Because Jupiter stays about a year in a sign, children born in the same year nearly all share it: its house and aspects make the reading more personal. In the 9th house, which corresponds to Sagittarius, its sign, it would emphasise a love of study, travel and big questions; in the 11th house, where Hellenistic tradition said it rejoiced, the warmth of friendships and shared projects.",
            },
            {
              kind: "p",
              text: "A Jupiter in Cancer, its exaltation, would be generous and protective; in Capricorn, where it is in fall, its confidence would come through caution and patient building. An aspect to the Sun is read as a surge of self-confidence, sometimes to the point of excess.",
            },
          ],
        },
        mythe: {
          heading: "Zeus and Jupiter",
          summary:
            "The planet bears the name of Jupiter, king of the Roman gods, the Greeks' Zeus: master of the sky, of thunder and of justice, he reigned over Olympus after overthrowing his father Cronus.",
          details: [
            {
              kind: "p",
              text: "Zeus is the son of Cronus and Rhea. To save him from his father, who swallowed his children as soon as they were born, his mother hid him on Crete and had Cronus swallow a stone wrapped in swaddling clothes. Once grown, Zeus freed his brothers and sisters and took the lead of the gods.",
            },
            {
              kind: "p",
              text: "The Latin name Iuppiter goes back to a very ancient Indo-European formula meaning roughly “Sky father”. Thursday is his day in Latin, Jovis dies, jeudi in French. In 1610, Galileo discovered the planet's four large moons; they were given the names of figures loved by Zeus: Io, Europa, Ganymede and Callisto.",
            },
          ],
        },
        astronomie: {
          heading: "The giant of the solar system",
          summary:
            "A gas giant made mostly of hydrogen and helium, Jupiter orbits 778 million kilometres from the Sun, going round it in nearly twelve years. It is more than twice as massive as all the other planets put together.",
          details: [
            {
              kind: "p",
              text: "Its diameter, about 143,000 km, is eleven times that of the Earth. The planet turns on its axis in under ten hours, the shortest day in the solar system, which stretches its clouds into parallel bands. The Great Red Spot, a storm larger than the Earth, has been observed there since at least the 19th century.",
            },
            {
              kind: "p",
              text: "Jupiter has dozens of moons, including Ganymede, the largest in the solar system, wider even than the planet Mercury. In the zodiac, it moves about a twelfth of a degree a day and spends on average 361 days in a sign, roughly a year.",
            },
          ],
        },
        retrogradation: {
          heading: "Jupiter retrograde",
          summary:
            "Every year, for about four months, Jupiter seems to move backwards through the zodiac. The phenomenon comes round every thirteen months and takes up nearly a third of its time.",
          details: [
            {
              kind: "p",
              text: "The Earth, much faster, catches up with Jupiter about every 399 days. While the Earth overtakes it, the planet appears to reverse against the stars, by around ten degrees, before resuming its course. The middle of the retrograde period coincides with its opposition to the Sun: Jupiter then rises at sunset and shines all night.",
            },
            {
              kind: "p",
              text: "Since nearly one person in three is born with Jupiter retrograde, astrologers do not treat it as a rare mark. Some read in it a more inward confidence, a wisdom sought through personal reflection rather than in institutions; ancient tradition simply saw in it a benefic that was a little less effective.",
            },
          ],
        },
        maitrises: {
          heading: "The rulerships of Jupiter",
          summary:
            "Jupiter rules Sagittarius and, in tradition, Pisces. It is exalted in Cancer, at 15 degrees. It is in detriment in Gemini and Virgo, and in fall in Capricorn.",
          details: [
            {
              kind: "p",
              text: "In Ptolemy's scheme, Jupiter receives the signs that are trine to those of the luminaries: Sagittarius, trine to Leo, and Pisces, trine to Cancer. The trine, the most harmonious aspect, suited the greater benefic. Since the late 19th century, many astrologers have entrusted Pisces to Neptune, with Jupiter remaining its traditional ruler.",
            },
            {
              kind: "p",
              text: "Its exaltation in Cancer is explained, according to Ptolemy, by the fertile north winds that Jupiter was believed to bring: it is in this sign that it reaches the most northerly point of its course. In Capricorn, a sign of rigour, and in the signs of Mercury, more concerned with details than with wide horizons, tradition judges it less at ease.",
            },
          ],
        },
      },
      imageAlt: "Sphere of Jupiter, textured from a photographic map: bands of cream and ochre cloud, and the Great Red Spot.",
    },
    saturn: {
      tagline: "The body of time and limits: structure, effort, patience and maturity, which tradition attributes to the slowest of the visible planets.",
      intro: {
        summary:
          "For the ancients, Saturn was the most distant and slowest of the wandering bodies: it takes nearly thirty years to go round the zodiac. Tradition sees in it time, discipline, limits and the maturity that comes with age.",
        details: [
          {
            kind: "p",
            text: "The Greeks called it Phainon, “the luminous one”, and the Babylonians linked it to the god Ninurta. With its pale light and slow pace, it marked the edge of the known world: beyond it began the sphere of the fixed stars.",
          },
          {
            kind: "p",
            text: "Ptolemy calls it cold and dry, masculine and diurnal in nature: the warmth of the day, it was thought, tempers its coldness. It is the “greater malefic” of tradition, the body of trials, delays and old age; Ptolemy entrusts it with the last stage of life, after 68.",
          },
          {
            kind: "p",
            text: "Modern astrologers view it with more nuance: it shows where you have to build step by step, what you learn through effort and what eventually becomes a strength.",
          },
        ],
      },
      keywords: ["time", "structure", "responsibility", "discipline", "limits", "maturity", "perseverance"],
      sections: {
        symbolique: {
          heading: "The symbol of Saturn",
          summary:
            "Saturn stands for the principle of limitation: rules, duration, concentration, whatever gives shape and stands firm. Its glyph, a cross set on a crescent, evokes the scythe of the god of harvests.",
          details: [
            {
              kind: "p",
              text: "Tradition associates it with the elderly, builders, farmers, solitary scholars, mines and stones, and everything that requires patience. In the body, it governs the bones, the teeth and the skin, what gives structure and protection. Modern astrologers add fear, doubt, a sense of duty and an inner authority forged over time.",
            },
            {
              kind: "p",
              text: "Its glyph comes from the Greek letters kappa and rho, the first two of Kronos, joined by an abbreviation stroke. The final design, a cross above a crescent, reverses that of Jupiter: some see in it matter weighing on the soul, or the reaper's scythe. In alchemy, it stands for lead, a heavy, dull metal.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Saturn in a chart",
          summary:
            "Its sign describes how you build and set yourself rules; its house, the area where you learn slowly, sometimes through obstacles; its aspects, what calls for rigour and patience.",
          details: [
            {
              kind: "p",
              text: "Saturn stays about two and a half years in a sign, which gives more weight to its house. In the 10th house, of which it is the natural ruler for modern astrologers, it would describe a career built step by step; in the 7th house, a commitment taken seriously, often long considered. Hellenistic tradition said it rejoiced in the 12th house, that of trials.",
            },
            {
              kind: "p",
              text: "Astrologers give great importance to the “Saturn return”, at around 29 and a half and again at around 59, when the planet comes back to its birth position: they see it as a time for taking stock and making adult choices. It is not a foretold ordeal, but a symbolic landmark in the cycle of a life.",
            },
          ],
        },
        mythe: {
          heading: "Cronus and Saturn",
          summary:
            "The planet bears the name of Saturn, an old Roman god of sowing, identified with the Greek Titan Cronus, father of Zeus. He was often confused with Chronos, Time, hence his image as an old man armed with a scythe.",
          details: [
            {
              kind: "p",
              text: "Son of Uranus, the Sky, and Gaia, the Earth, Cronus overthrew his father with a sickle. Warned that one of his own children would dethrone him in turn, he swallowed them all at birth, until Rhea saved Zeus. Defeated, Cronus was banished far from Olympus.",
            },
            {
              kind: "p",
              text: "The Romans told how, once driven out, Saturn took refuge in Latium, where he taught agriculture and brought about a golden age. His December festival, the Saturnalia, turned the social order upside down for a few days: masters waited on their slaves at table. English owes him Saturday.",
            },
          ],
        },
        astronomie: {
          heading: "The ringed planet",
          summary:
            "The second giant of the solar system, Saturn orbits 1.4 billion kilometres from the Sun, going round it in 29 and a half years. Its rings, made of chunks of ice and rock, are the most spectacular of all.",
          details: [
            {
              kind: "p",
              text: "Its diameter reaches 120,500 km, nearly ten times that of the Earth. Made mostly of hydrogen and helium, the planet is so low in density that it would float in a large enough bath: it is the only one less dense than water. Among its very many moons, Titan, wider than Mercury, is wrapped in a thick atmosphere.",
            },
            {
              kind: "p",
              text: "Galileo glimpsed the rings in 1610 without understanding their shape; it was Christiaan Huygens who, in the 1650s, recognised them as a ring detached from the planet. In the zodiac, Saturn moves about two minutes of arc a day and stays on average 897 days in a sign, roughly two and a half years.",
            },
          ],
        },
        retrogradation: {
          heading: "Saturn retrograde",
          summary:
            "Every year, Saturn seems to move backwards for about four and a half months: more than a third of its time is spent retrograde. The phenomenon comes round every 378 days, each time the Earth overtakes it.",
          details: [
            {
              kind: "p",
              text: "Saturn is so slow that the Earth catches up with it barely more than once a year. Its apparent backward motion is modest, about 7 degrees, but it lasts a long time: some 138 days between two “stations”, the moments when the planet seems to stand still before changing direction.",
            },
            {
              kind: "p",
              text: "For tradition, a retrograde Saturn kept its gravity but exerted it less directly. Modern interpreters often read in it an inner demand: rules you impose on yourself rather than those of the outside world. Since more than a third of births take place during these periods, it is a nuance, not a rare mark.",
            },
          ],
        },
        maitrises: {
          heading: "The rulerships of Saturn",
          summary:
            "Saturn rules Capricorn and, in tradition, Aquarius. It is exalted in Libra, at 21 degrees. Opposite, it is in detriment in Cancer and Leo, the signs of the luminaries, and in fall in Aries.",
          details: [
            {
              kind: "p",
              text: "Ptolemy's scheme places Saturn exactly opposite the luminaries: Capricorn faces Cancer, Aquarius faces Leo. Cold and distant, it receives the signs of midwinter, the reverse of those of summer light and warmth. Since the late 19th century, many astrologers have entrusted Aquarius to Uranus, with Saturn remaining its traditional ruler.",
            },
            {
              kind: "p",
              text: "Its exaltation in Libra mirrors that of the Sun in Aries: where the light declines and the nights win out, Saturn gains strength, Ptolemy explains. For the same reason, it falls in Aries, where the Sun is exalted. Astrologers describe a fair and measured Saturn in Libra, a more impatient and less self-assured one in Aries.",
            },
          ],
        },
      },
      imageAlt: "Sphere of Saturn, draped in a photographic map of its clouds: bands of beige and golden cloud, pale and regular.",
    },
    uranus: {
      tagline: "The first planet discovered by telescope, and for modern astrologers the planet of freedom, invention and upheaval.",
      intro: {
        summary:
          "Uranus, discovered in 1781, is the first planet the ancients did not know. Modern astrologers see in it originality, independence, innovation and sudden change: whatever shakes up habits.",
        details: [
          {
            kind: "p",
            text: "Barely visible to the naked eye, Uranus takes 84 years to go round the zodiac, about seven years per sign. Its discovery broke the old framework of the seven bodies: for the first time since antiquity, the sky had one more wandering body.",
          },
          {
            kind: "p",
            text: "Since no ancient author could describe it, its symbolism was built after the fact, from its name, its myth and the spirit of its age, that of the American and French revolutions and the beginnings of industry. Astrologers gradually linked it to Aquarius, the sign it rules for them.",
          },
          {
            kind: "p",
            text: "In a chart, it shows where you need air and freedom, where you refuse routine, where you can innovate. As with the other two distant planets, its sign speaks first and foremost of a generation.",
          },
        ],
      },
      keywords: ["freedom", "originality", "innovation", "upheaval", "independence", "discoveries", "the unexpected"],
      sections: {
        symbolique: {
          heading: "The symbol of Uranus",
          summary:
            "Uranus stands for awakening and breaking away: the mind that invents, frees itself and rejects frameworks that are too narrow. Its astrological glyph is a monogram, the letter H of its discoverer, Herschel, set on a globe.",
          details: [
            {
              kind: "p",
              text: "Modern astrologers entrust it with the unexpected, electricity, technology, avant-garde ideas, chosen friendships and collective causes. They see in it the flash of insight that makes you see things differently, but also instability, nervousness and a taste for provocation.",
            },
            {
              kind: "p",
              text: "In 1784, the astronomer Jérôme de Lalande proposed this sign in a letter to Herschel: “a globe surmounted by the first letter of your name”. The design can still be read that way: two uprights joined by a bar, a central stroke, and a small circle below. Astronomers have also used another symbol, a circle topped by an arrow.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Uranus in a chart",
          summary:
            "Its sign, shared by a generation for about seven years, tells the style of the changes it carries. Its house shows where you thirst for independence and innovation; its aspects, which bodies it electrifies.",
          details: [
            {
              kind: "p",
              text: "Astrologers mainly read the house: in the 1st house, Uranus would emphasise a personality that holds on to its uniqueness; in the 4th house, an unconventional home or frequent moves; in the 11th house, the house of Aquarius in the natural zodiac, a wide-ranging circle of friends and involvement in collective projects.",
            },
            {
              kind: "p",
              text: "Its aspects to the personal planets are considered telling: with the Moon, a need for freedom in emotional life; with Mercury, a quick and intuitive mind. At around 42, Uranus opposes its birth position: astrologers readily see this as a midlife turning point.",
            },
          ],
        },
        mythe: {
          heading: "Ouranos, the Sky",
          summary:
            "Uranus is the Latin form of Ouranos, the Greeks' Sky, husband of Gaia, the Earth, and father of the Titans. It is the only planet named after a Greek god rather than a Roman one.",
          details: [
            {
              kind: "p",
              text: "In Hesiod's Theogony, Ouranos gives Gaia many children, the Titans, the Cyclopes and hundred-armed giants, but keeps them shut away in the depths of the Earth. Gaia then arms her son Cronus with a sickle, and he overthrows his father: the Sky is separated from the Earth.",
            },
            {
              kind: "p",
              text: "William Herschel wanted to call his discovery Georgium Sidus, “George's star”, in honour of King George III. The German astronomer Johann Elert Bode proposed Uranus in 1782: the father of Saturn, just as Saturn is the father of Jupiter. The name was not adopted everywhere until 1850. In the meantime, in 1789, the chemist Martin Klaproth had named uranium in its honour.",
            },
          ],
        },
        astronomie: {
          heading: "The planet on its side",
          summary:
            "An ice giant four times as wide as the Earth, Uranus orbits 2.9 billion kilometres from the Sun, going round it in 84 years, lying on its side: its axis is tilted by about 98 degrees.",
          details: [
            {
              kind: "p",
              text: "William Herschel discovered it on 13 March 1781, from the garden of his house in Bath, England, with a telescope he had built himself; at first he thought it was a comet. Yet the planet is visible to the naked eye on a very dark night, as a very faint point: the ancients had not told it apart from the stars.",
            },
            {
              kind: "p",
              text: "Its tilt gives it extreme seasons: each pole has about 42 years of continuous daylight, then 42 years of night. Its blue-green tint comes from the methane in its atmosphere. In the zodiac, Uranus stays on average 2,557 days in a sign, about seven years.",
            },
          ],
        },
        retrogradation: {
          heading: "Uranus retrograde",
          summary:
            "Every year, Uranus seems to move backwards for about five months, more than 40% of its time. The phenomenon comes round every 370 days: barely more than a year, so slowly does the planet move.",
          details: [
            {
              kind: "p",
              text: "As with the other outer planets, it is the Earth, overtaking it on its inner orbit, that creates the illusion of backward motion. Uranus then moves back about 4 degrees before setting off again. It thus crosses certain degrees of the zodiac three times: forwards, backwards, then forwards again.",
            },
            {
              kind: "p",
              text: "More than two births in five take place during a Uranus retrograde: astrologers therefore see it only as a nuance. Some read in it a more inward originality, a freedom lived in the mind before it shows itself in broad daylight.",
            },
          ],
        },
        maitrises: {
          heading: "The rulerships of Uranus",
          summary:
            "For modern astrologers, Uranus rules Aquarius, and so it is in detriment in Leo, the opposite sign. Tradition grants it neither exaltation nor fall: it did not know it existed.",
          details: [
            {
              kind: "p",
              text: "The attribution of Aquarius took hold over the 19th and 20th centuries: astrologers found in this air sign, turned towards the future, the group and ideas, an echo of the planet of revolutions and discoveries. Aquarius nonetheless keeps its traditional ruler, Saturn, which many still look at.",
            },
            {
              kind: "p",
              text: "The detriment in Leo is read as a tension between the need to assert yourself and the need to serve a common cause. A few modern authors have proposed an exaltation for Uranus, but none commands a consensus; this site does not use one.",
            },
          ],
        },
      },
      imageAlt: "Sphere of Uranus, from a photographic map of the planet: a pale blue-green globe, almost featureless, veiled by its upper atmosphere.",
    },
    neptune: {
      tagline: "The planet found by calculation before it was seen, and for astrologers the planet of dreams, imagination and compassion.",
      intro: {
        summary:
          "Neptune, invisible to the naked eye, was found in 1846 at the spot that calculation had predicted. Astrologers entrust it with dreams, inspiration, spirituality and compassion, but also with vagueness and illusions.",
        details: [
          {
            kind: "p",
            text: "Neptune takes nearly 165 years to go round the zodiac, nearly fourteen years per sign. Discovered sixty-five years after Uranus, it brought astrologers a new image: that of the ocean, without limits or outlines.",
          },
          {
            kind: "p",
            text: "Its era was that of Romanticism, the dawn of photography, the first anaesthetics and the rise of spiritualism: astrologers saw in it correspondences with the imagination, images, self-forgetting and the beyond. They associated it with Pisces, the water sign it rules for them.",
          },
          {
            kind: "p",
            text: "In a chart, it shows where you dream, where you devote yourself, where you seek to go beyond the boundaries of the self, and also where you risk losing yourself or being deceived.",
          },
        ],
      },
      keywords: ["dreams", "inspiration", "spirituality", "compassion", "imagination", "illusions", "the arts"],
      sections: {
        symbolique: {
          heading: "The symbol of Neptune",
          summary:
            "Neptune stands for the dissolving of boundaries: the ideal, faith, intuition, the yearning for what lies beyond the person. Its glyph is the trident of the god of the seas.",
          details: [
            {
              kind: "p",
              text: "Modern astrologers entrust it with music, cinema, poetry, the sea, sleep, mysticism and care for the most vulnerable. They see in it the ability to feel what others are going through, but also the temptation to escape reality, confusion and mirages.",
            },
            {
              kind: "p",
              text: "The trident has accompanied the planet since its discovery: Le Verrier proposed the name and the symbol at the same time. Astrologers break it down as they do the ancient glyphs: a crescent open upwards, the receptive soul, carried by a cross, matter. The most common design today crosses the shaft with a small stroke near the bottom.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Neptune in a chart",
          summary:
            "Its sign, shared for nearly fourteen years, colours the ideals of a generation. Its house shows where you dream and devote yourself; its aspects, which bodies it inspires or blurs.",
          details: [
            {
              kind: "p",
              text: "In the 12th house, that of Pisces in the natural zodiac, Neptune would emphasise a need for withdrawal, meditation or quiet service; in the 5th house, a creativity fed by the imagination; in the 7th house, a tendency to idealise your partner. Astrologers advise reading it with nuance: it inspires as much as it unsettles.",
            },
            {
              kind: "p",
              text: "Its aspects to the fast-moving planets are the most telling: with Venus, an idealistic or artistic love; with Mercury, an intuitive mind, working in images rather than arguments; with Mars, an energy placed at the service of a cause or a dream.",
            },
          ],
        },
        mythe: {
          heading: "Poseidon and Neptune",
          summary:
            "The planet bears the name of Neptune, the Roman god of the waters, identified with the Greeks' Poseidon, master of the seas, of earthquakes and of horses, who is shown armed with a trident.",
          details: [
            {
              kind: "p",
              text: "Poseidon is the brother of Zeus and Hades. After the victory over the Titans, the three brothers drew lots to share out the world: the sky to Zeus, the underworld to Hades, the sea to Poseidon. He reigned from a palace beneath the waves and, with a blow of his trident, could make springs gush forth or the earth shake.",
            },
            {
              kind: "p",
              text: "The planet's name was debated. Galle proposed Janus, the Englishman James Challis Oceanus; Le Verrier first suggested Neptune, then wanted it to be called Le Verrier, with the backing of François Arago. Neptune, championed notably by the astronomer Friedrich von Struve, eventually won general agreement. Neptunium, discovered in 1940, took its name in the wake of uranium.",
            },
          ],
        },
        astronomie: {
          heading: "The planet found by calculation",
          summary:
            "Neptune, the most distant of the planets, orbits 4.5 billion kilometres from the Sun and goes round it in nearly 165 years. It is the first planet discovered through mathematics, before being seen through a telescope.",
          details: [
            {
              kind: "p",
              text: "Irregularities in the motion of Uranus suggested that an unknown planet was disturbing it. Urbain Le Verrier calculated its position and sent it to Johann Galle, at the Berlin observatory: on the night of 23 to 24 September 1846, Galle found the planet less than a degree from the predicted spot. The Englishman John Couch Adams had carried out similar calculations.",
            },
            {
              kind: "p",
              text: "An ice giant slightly narrower than Uranus, Neptune is swept by the fastest winds in the solar system, at more than 2,000 km/h. In 1989, the Voyager 2 probe photographed a huge storm there, the Great Dark Spot, which has since disappeared. In the zodiac, Neptune stays on average 5,016 days in a sign, nearly fourteen years.",
            },
          ],
        },
        retrogradation: {
          heading: "Neptune retrograde",
          summary:
            "Every year, Neptune seems to move backwards for just over five months, about 158 days. The planet is retrograde 43% of the time: that is almost one birth in two.",
          details: [
            {
              kind: "p",
              text: "The principle does not change: the Earth, as it overtakes Neptune, creates the illusion of backward motion. But Neptune is so slow that this backward motion is no more than about 3 degrees, and the planet returns to the same position relative to the Sun every 367 days, barely two days more than a year.",
            },
            {
              kind: "p",
              text: "For astrologers, a retrograde Neptune would turn the imagination inwards: a sensitivity cultivated in silence, ideals examined rather than followed blindly. So many births are concerned that no general rule can be drawn from it.",
            },
          ],
        },
        maitrises: {
          heading: "The rulerships of Neptune",
          summary:
            "For modern astrologers, Neptune rules Pisces; it is therefore in detriment in Virgo, the opposite sign. Tradition, which did not know it, grants it no exaltation.",
          details: [
            {
              kind: "p",
              text: "Pisces, the last sign of the zodiac, a water sign and a sign of endings, seemed in tune with the planet of the ocean and the infinite; the attribution took hold between the late 19th and early 20th centuries. The traditional ruler of Pisces remains Jupiter, which many astrologers still look at first.",
            },
            {
              kind: "p",
              text: "The detriment in Virgo sets dreams against precision, boundless yearning against a taste for detail and order. Some modern authors have proposed an exaltation for Neptune, without agreeing among themselves; this site does not give one.",
            },
          ],
        },
      },
      imageAlt: "Deep blue sphere of Neptune, textured from a photographic map: cloud bands and a dark spot edged with white clouds.",
    },
    pluto: {
      tagline: "The small icy world at the edge, now a dwarf planet, and for astrologers the body of the depths, of crises and of rebirth.",
      intro: {
        summary:
          "Pluto, discovered in 1930, has been classed as a dwarf planet since 2006, but astrologers still count it among their ten bodies. They see in it transformation, power, intensity and everything that dies in order to be reborn.",
        details: [
          {
            kind: "p",
            text: "Pluto takes 248 years to go round the zodiac. Since its discovery, it has covered just over half of it, from Cancer to Aquarius: astrologers have therefore observed it over only part of its cycle, and its symbolism draws as much on myth as on experience.",
          },
          {
            kind: "p",
            text: "The years of its discovery, marked by economic crisis, the rise of totalitarianism and then the mastery of the atom, fed this symbolism: astrologers associated it with underground forces, both individual and collective, and gave it Scorpio.",
          },
          {
            kind: "p",
            text: "In a chart, it shows where you go through the deepest transformations, where you face your fears, where you can find an unsuspected strength.",
          },
        ],
      },
      keywords: ["transformation", "the depths", "power", "crises", "rebirth", "intensity", "secrets"],
      sections: {
        symbolique: {
          heading: "The symbol of Pluto",
          summary:
            "Pluto stands for radical transformation: symbolic death and rebirth, hidden power, whatever works away in the depths. Its astrological glyph shows a globe above a crescent set on a cross.",
          details: [
            {
              kind: "p",
              text: "Modern astrologers entrust it with the crises that force you to change, depth psychology, secrets, shared money, inheritances and questions of power. They see in it a force of regeneration, like the phoenix rising from its ashes, but also a taste for control and extreme passions.",
            },
            {
              kind: "p",
              text: "This glyph dates from the early 1930s: it is often read as the bident, the two-pronged fork of the god of the Underworld, topped by a globe. Astronomers had adopted another sign, a monogram of the letters P and L, the initials of Pluto and of Percival Lowell, the astronomer who had launched the search for a planet beyond Neptune; some astrologers still use it.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Pluto in a chart",
          summary:
            "Its sign, shared by a generation for twelve to more than thirty years, tells the ground of its great changes. Its house shows where you transform yourself deeply; its aspects, which bodies it intensifies.",
          details: [
            {
              kind: "p",
              text: "In the 8th house, which corresponds to Scorpio, its sign, Pluto would emphasise an interest in what is hidden, crises lived through and shared resources; in the 10th house, an intense ambition and a strong relationship with power; in the 4th house, a dense family history, with its secrets.",
            },
            {
              kind: "p",
              text: "An aspect from Pluto to the Sun or the Moon is read as an intense personality, able to reinvent itself after hardship. Astrologers insist on the symbolic reading: Pluto predicts no tragedy, it describes transformations, often slow and deep.",
            },
          ],
        },
        mythe: {
          heading: "Hades and Pluto",
          summary:
            "Pluto is the Roman name of the god of the Underworld, Hades to the Greeks. He was also called Plouton, “the rich one”, because the riches beneath the ground, metals and harvests, came from his realm.",
          details: [
            {
              kind: "p",
              text: "Brother of Zeus and Poseidon, Hades received as his share the underworld, where he reigned over the dead. He carried off Persephone, daughter of Demeter, the goddess of harvests; to soothe her mother's anger, the young woman henceforth spent part of the year below ground, and in her absence, nature knows winter.",
            },
            {
              kind: "p",
              text: "The planet's name was suggested by Venetia Burney, an 11-year-old Oxford schoolgirl with a passion for mythology. Her grandfather passed it on to an English astronomer, who telegraphed it to the Lowell Observatory; it was chosen there unanimously, then published on 1 May 1930. Its moons bear names linked to the Underworld: Charon, the ferryman of souls, Styx, Nix, Kerberos and Hydra.",
            },
          ],
        },
        astronomie: {
          heading: "A dwarf planet at the edge",
          summary:
            "Pluto orbits on average 5.9 billion kilometres from the Sun and goes round it in 248 years. Smaller than our Moon, it was reclassified as a dwarf planet by the International Astronomical Union on 24 August 2006.",
          details: [
            {
              kind: "p",
              text: "Clyde Tombaugh discovered it on 18 February 1930 at the Lowell Observatory in Flagstaff, Arizona, by comparing photographs of the sky taken a few days apart; the news was announced on 13 March. Pluto measures 2,376 km across. Its orbit is so elongated that between 1979 and 1999 it was closer to the Sun than Neptune.",
            },
            {
              kind: "p",
              text: "In 2006, the IAU defined what a planet is: a body that has cleared the neighbourhood around its orbit. That is not the case for Pluto, which travels among countless small icy bodies, the Kuiper belt. In July 2015, the New Horizons probe flew past it and revealed its plains of ice, including the famous heart-shaped region.",
            },
            {
              kind: "p",
              text: "In the zodiac, Pluto stays on average 7,547 days in a sign, about twenty and a half years, but anywhere from twelve years, in Scorpio, to more than thirty, in Taurus, depending on the part of its orbit.",
            },
          ],
        },
        retrogradation: {
          heading: "Pluto retrograde",
          summary:
            "Every year, Pluto seems to move backwards for about 160 days, more than five months. It is the longest retrograde period of the ten bodies: more than four births in ten take place during one of them.",
          details: [
            {
              kind: "p",
              text: "Pluto's apparent backward motion is tiny, about 2 to 3 degrees, but it lasts a long time, because the dwarf planet barely moves: the Earth overtakes it about every 367 days. The illusion is the same as for the other outer planets, produced by our own motion round the Sun.",
            },
            {
              kind: "p",
              text: "Astrologers describe these periods as a time for inner work: going back over your fears, a power struggle, what needs to end. Ancient tradition says nothing about it, and with good reason: it did not know Pluto.",
            },
          ],
        },
        maitrises: {
          heading: "The rulerships of Pluto",
          summary:
            "For modern astrologers, Pluto rules Scorpio; it is therefore in detriment in Taurus, the opposite sign. Tradition grants it no exaltation, and Scorpio keeps its ancient ruler, Mars.",
          details: [
            {
              kind: "p",
              text: "The attribution of Scorpio came about in the years following the discovery: astrologers saw an echo between this fixed water sign, known for its intensity and its love of secrecy, and the body of the depths.",
            },
            {
              kind: "p",
              text: "The detriment in Taurus sets transformation against stability, the need to put everything back into play against the wish to preserve. A few modern authors have put forward an exaltation for Pluto, without consensus; this site does not use any.",
            },
          ],
        },
      },
      imageAlt: "Sphere of Pluto, from the New Horizons probe's map: a large bright heart-shaped plain, reddish-brown terrain, and a south left black for lack of images.",
    },
  },
};
