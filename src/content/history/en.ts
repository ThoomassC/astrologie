import type { HistoryContent } from "./types";

/** History page texts: eight eras, from Babylon to phone apps. */
export const HISTORY_EN: HistoryContent = {
  title: "A history of astrology",
  lead: "From Babylon to phone apps, how a tradition born of watching the sky has come down through more than three thousand years, between science, power and belief.",
  intro: {
    summary:
      "Astrology was born in Mesopotamia, where the sky was read as a message from the gods. It took its present form in Greek Egypt, then was taught, debated and transformed in Rome, in the Islamic world and in Europe, until modern science parted company with it.",
    details: [
      {
        kind: "p",
        text: "For most of their history, astronomy and astrology were not distinct: the same scholars measured the sky and drew omens from it, and the two words were long used interchangeably. Calculating the positions of the heavenly bodies served first of all to cast horoscopes.",
      },
      {
        kind: "p",
        text: "This timeline follows eight eras, from Babylon to the present day. The dates are approximate and the eras overlap; each one points to sources for further reading.",
      },
    ],
  },
  eras: {
    mesopotamie: {
      heading: "Babylon and Assyria: the sky of omens",
      period: "c. 1800 – 100 BC",
      summary:
        "The scribes of Babylon and Assyria watched the sky night after night and read omens in it for the king and the land. It was among them that the zodiac of twelve equal signs was born, towards the end of the 5th century BC, along with the first birth horoscopes, in 410 BC.",
      details: [
        {
          kind: "p",
          text: "For the Mesopotamians, the sky was a writing of the gods. An eclipse, a halo around the Moon or the brightness of Venus announced an event for the kingdom: war, epidemic, flood or a good harvest. Thousands of these omens were gathered in a great series of tablets, Enuma Anu Enlil, and the scribes sent the king reports on the sky.",
        },
        {
          kind: "p",
          text: "The MUL.APIN, a compendium compiled around 1000 BC and known from copies of the 7th century BC, lists the stars and constellations, their risings through the year, and those the Moon passes through on its path: these are the ancestors of our signs.",
        },
        {
          kind: "p",
          text: "Little by little, astronomers recorded the position of the Moon and the planets every night, and learnt to predict the sky by calculation. Towards the end of the 5th century BC, they divided the Sun's path into twelve signs of 30°, named after neighbouring constellations.",
        },
        {
          kind: "p",
          text: "The oldest known horoscopes, tablets from Babylon and Nippur, concern births in 410 BC: they give the positions of the bodies on that day, sometimes with a short prediction. Around thirty have come down to us; the most recent dates from 69 BC.",
        },
      ],
      image: {
        key: "mulApin",
        alt: "A brown clay tablet, pieced together from several fragments, covered with tightly packed lines of cuneiform signs arranged in two columns.",
        caption:
          "A copy of the MUL.APIN found at Assur and written in the 7th century BC: the great Babylonian catalogue of the stars and of the Moon's path.",
      },
      sources: [
        { label: "MUL.APIN, Wikipedia", href: "https://en.wikipedia.org/wiki/MUL.APIN" },
        { label: "Enuma Anu Enlil, Wikipedia", href: "https://en.wikipedia.org/wiki/Enuma_Anu_Enlil" },
        { label: "Babylonian astronomy, Wikipedia", href: "https://en.wikipedia.org/wiki/Babylonian_astronomy" },
        {
          label: "Eleanor Robson, review of Francesca Rochberg's The Heavenly Writing, Bryn Mawr Classical Review, 2005",
          href: "https://bmcr.brynmawr.edu/2005/2005.06.29/",
        },
      ],
    },
    "egypte-hellenistique": {
      heading: "Greek Egypt: the birth of the horoscope",
      period: "c. 300 BC – AD 100",
      summary:
        "After Alexander's conquest, Egypt was ruled by Greek kings and Alexandria became a centre of learning. There, Babylonian omens met Greek geometry and the Egyptian decans: around the 2nd or 1st century BC, the astrology of the Ascendant and the houses was born.",
      details: [
        {
          kind: "p",
          text: "The Egyptians had their own sky: thirty-six groups of stars, the decans, which rose one after another and were used to tell the time at night. They appear on coffin lids from the end of the 3rd millennium BC. In Greek astrology, they became 10° slices of the zodiac, three per sign.",
        },
        {
          kind: "p",
          text: "The great innovation was the hōroskopos, “the one who watches the hour”: the degree of the zodiac rising in the east at the moment of a birth, our Ascendant. From it, the sky was divided into twelve places, our houses. The founding texts are attributed to legendary figures: the pharaoh Nechepso and the priest Petosiris, or the god Hermes Trismegistus.",
        },
        {
          kind: "p",
          text: "The Dendera zodiac, carved around 50 BC on the ceiling of a chapel of Osiris, on the roof of the temple of Hathor, shows this blend: the twelve signs from Babylon sit alongside the Egyptian constellations and the thirty-six decans, and the disc of the sky is held up by four women and eight falcon-headed figures. Cut out in 1821 and taken to France, it is now in the Louvre.",
        },
      ],
      image: {
        key: "denderah",
        alt: "A large grey sandstone bas-relief: a disc covered with figures of animals, gods and stars, held up by four standing women and by kneeling falcon-headed figures, between columns of hieroglyphs.",
        caption:
          "The Dendera zodiac, c. 50 BC: the twelve signs from Babylon among the Egyptian constellations and decans.",
      },
      sources: [
        { label: "Dendera zodiac, Louvre collections", href: "https://collections.louvre.fr/ark:/53355/cl010028871" },
        { label: "Dendera zodiac, Wikipedia", href: "https://en.wikipedia.org/wiki/Dendera_zodiac" },
        { label: "Hellenistic astrology, Wikipedia", href: "https://en.wikipedia.org/wiki/Hellenistic_astrology" },
      ],
    },
    "rome-et-ptolemee": {
      heading: "Rome and Ptolemy: learned astrology",
      period: "c. 100 BC – AD 400",
      summary:
        "In Rome, astrology became a matter for emperors and men of letters: Augustus had Capricorn struck on a coin, the poet Manilius put it into verse. In Alexandria, in the 2nd century, Ptolemy made it a natural science in the Tetrabiblos, the astrologers' reference work for fifteen centuries.",
      details: [
        {
          kind: "p",
          text: "Astrologers, whom the Romans called “Chaldeans” or “mathematicians”, advised the powerful. According to the historian Suetonius, Augustus made his chart public and had Capricorn, which he regarded as his sign, struck on a silver coin; Tiberius kept the astrologer Thrasyllus at his side. Yet Rome distrusted those who predicted the deaths of emperors, and several decrees expelled them from the city.",
        },
        {
          kind: "p",
          text: "Around AD 10, Manilius composed the Astronomica, a long Latin poem in five books: it already contains the houses and the correspondence between the signs and the parts of the body, from the head for Aries to the feet for Pisces.",
        },
        {
          kind: "p",
          text: "Claudius Ptolemy, an astronomer in Alexandria, wrote the Almagest around 150, a summa of ancient astronomy, then the Tetrabiblos, “the four books”, in which he presents astrology as the study of the natural effects of the sky, comparable to weather forecasting. In it he starts the signs from the equinoxes and solstices: this is the tropical zodiac of Western astrologers.",
        },
        {
          kind: "p",
          text: "In the same century, Vettius Valens gathered more than a hundred of his clients' charts in his Anthology; in the 4th century, Firmicus Maternus wrote the Mathesis in Latin. Christian authors, such as Saint Augustine, fought astrology in the name of human freedom; it faded in the West with the end of the Empire.",
        },
      ],
      image: {
        key: "cellariusSysteme",
        alt: "A coloured engraving: in the centre, the terrestrial globe, surrounded by the orbits of the planets and a broad tilted band decorated with the figures of the signs, such as Taurus, Cancer or Scorpio; in the corners, angels, cherubs and scholars with their instruments.",
        caption:
          "Ptolemy's system of the world in perspective: the motionless Earth in the centre, the orbits of the bodies and the band of the zodiac. Plate by Andreas Cellarius, 1660.",
      },
      sources: [
        { label: "Tetrabiblos, Wikipedia", href: "https://en.wikipedia.org/wiki/Tetrabiblos" },
        {
          label: "Ptolemy, Tetrabiblos, translated by F. E. Robbins, LacusCurtius",
          href: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Ptolemy/Tetrabiblos/home.html",
        },
        { label: "Marcus Manilius, Wikipedia", href: "https://en.wikipedia.org/wiki/Marcus_Manilius" },
        {
          label: "Suetonius, Life of Augustus, LacusCurtius",
          href: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Suetonius/12Caesars/Augustus*.html",
        },
      ],
    },
    "monde-islamique": {
      heading: "Baghdad and the Islamic world: translating and calculating",
      period: "c. 750 – 1200",
      summary:
        "In the 8th century, the Abbasid caliphs had Greek, Persian and Indian treatises translated into Arabic. Astronomers and astrologers improved instruments and tables, and authors such as Abu Ma'shar wrote handbooks which, translated into Latin in the 12th century, would nourish Europe.",
      details: [
        {
          kind: "p",
          text: "According to the chroniclers, al-Biruni among them, it was astrologers, Nawbakht and Masha'allah, who chose 30 July 762 to begin building Baghdad, the new capital of the caliph al-Mansur. Astrology there was a court science, like medicine.",
        },
        {
          kind: "p",
          text: "Abu Ma'shar (787–886), the Albumasar of the Latins, wrote in Baghdad a Great Introduction to astrology in eight books and a treatise on the great conjunctions of Jupiter and Saturn, which were supposed to set the rhythm of the history of religions and empires. In the 11th century, the scholar al-Biruni wrote a handbook in questions and answers, in Persian and Arabic, while criticising the astrologers' predictions.",
        },
        {
          kind: "p",
          text: "The scholars of Islam also perfected the astrolabe, inherited from the Greeks: this brass disc was used to tell the time, to measure the altitude of the stars and, for astrologers, to place the planets in the houses. Not everyone approved of astrology: in the 11th century, Avicenna wrote a treatise to refute it.",
        },
        {
          kind: "p",
          text: "In the 12th century, mainly in Spain, translators put these books into Latin: Abu Ma'shar's Great Introduction was translated by John of Seville in 1133, then by Hermann of Carinthia in 1140. Learned astrology thus returned to Europe.",
        },
      ],
      image: {
        key: "astrolabe",
        alt: "The back of a gilded brass astrolabe, hanging from a ring: a sighting rule pivots at the centre of a disc engraved with scales, curves, tables of figures and inscriptions in Arabic script.",
        caption:
          "Persian astrolabe by Muhammad Zaman, dated 1654–1655. Inherited from the Greeks and perfected by the scholars of Islam, the instrument was used to tell the time and, by astrologers, to place the bodies in the houses.",
      },
      sources: [
        { label: "Abu Ma'shar al-Balkhi, Wikipedia", href: "https://en.wikipedia.org/wiki/Abu_Ma%27shar_al-Balkhi" },
        { label: "Al-Biruni, Wikipedia", href: "https://en.wikipedia.org/wiki/Al-Biruni" },
        { label: "House of Wisdom, Wikipedia", href: "https://en.wikipedia.org/wiki/House_of_Wisdom" },
        { label: "Astrolabe, Wikipedia", href: "https://en.wikipedia.org/wiki/Astrolabe" },
      ],
    },
    "europe-medievale": {
      heading: "Medieval Europe: universities and medicine",
      period: "c. 1100 – 1450",
      summary:
        "In the 12th century, translations from Arabic gave astrology back to Latin Europe. It entered the universities, above all among physicians: each sign rules a part of the body, from Aries for the head to Pisces for the feet, and the Moon was consulted before bleeding a patient.",
      details: [
        {
          kind: "p",
          text: "Astrology was taught alongside astronomy in the faculties of arts and medicine. In Bologna, the statutes of 1405 provided for four years of study of the heavens for students of arts and medicine, from the celestial sphere to the treatises of medical astrology, including Ptolemy's Tetrabiblos.",
        },
        {
          kind: "p",
          text: "Medicine followed melothesia, inherited from Antiquity: each sign rules a part of the body. A widespread rule forbade cutting or bleeding a limb while the Moon was passing through the sign that rules it, and almanacs gave the Moon's position day by day.",
        },
        {
          kind: "p",
          text: "In 1348, the Black Death ravaged Europe. Questioned by King Philip VI, the Paris faculty of medicine attributed it in particular to a conjunction of Saturn, Jupiter and Mars in Aquarius, on 20 March 1345. Kings had their astrologers: Charles V brought the physician and astrologer Thomas de Pizan from Bologna, father of the writer Christine de Pizan.",
        },
        {
          kind: "p",
          text: "The Church accepted that the heavenly bodies act on bodies, but not that they command the will: for Thomas Aquinas, in the 13th century, humans remain free. Books of hours, for their part, gave the zodiac a large place, like the Anatomical Man of the Très Riches Heures du duc de Berry.",
        },
      ],
      image: {
        key: "hommeZodiacal",
        alt: "An illumination: a naked young man, seen from the front, back to back with his double seen from behind, in a blue mandorla; the signs are painted on his body, Aries on the head, Pisces beneath the feet; around them, the twelve signs in medallions on a blue background, two shields with fleurs-de-lis and Latin inscriptions in the corners.",
        caption:
          "The Anatomical Man from the Très Riches Heures du duc de Berry, c. 1411–1416: each sign rules a part of the body, and the inscriptions in the corners arrange the signs according to the humours and temperaments.",
      },
      sources: [
        {
          label: "Très Riches Heures du Duc de Berry, Wikipedia",
          href: "https://en.wikipedia.org/wiki/Tr%C3%A8s_Riches_Heures_du_Duc_de_Berry",
        },
        { label: "Zodiac Man, Wikipedia", href: "https://en.wikipedia.org/wiki/Zodiac_Man" },
        {
          label: "The Paris faculty of medicine and the plague of 1348, translated extracts, Méditerranées (in French)",
          href: "https://www.mediterranees.net/moyen_age/peste/astrologie.html",
        },
        { label: "Thomas de Pizan, Wikipédia (in French)", href: "https://fr.wikipedia.org/wiki/Thomas_de_Pisan" },
      ],
    },
    renaissance: {
      heading: "The Renaissance: court astrologers and almanacs",
      period: "c. 1450 – 1630",
      summary:
        "With printing, almanacs and predictions sold everywhere. Princes had their astrologers, the French court received Nostradamus, and the greatest astronomers, Tycho Brahe and Kepler, cast horoscopes. Yet in 1586 the Pope condemned the astrology that claims to predict human actions.",
      details: [
        {
          kind: "p",
          text: "Humanists reread the Ancients in the original: the Tetrabiblos was printed in Greek in Nuremberg in 1535. Astrology also had its critics, such as Pico della Mirandola, whose Disputations against Astrology appeared in 1496, after his death.",
        },
        {
          kind: "p",
          text: "Michel de Nostredame, known as Nostradamus (1503–1566), an apothecary from Salon-de-Provence, published almanacs from 1550 and his Prophecies in 1555. Summoned to court the same year, he was appointed physician-in-ordinary and counsellor to King Charles IX in 1564; historians nevertheless point out many errors in his horoscopes. In Paris, the column that Catherine de' Medici had erected in 1574 is said, according to a tradition never proven, to have been used to observe the sky.",
        },
        {
          kind: "p",
          text: "In 1577 Tycho Brahe cast the horoscope of the future King Christian IV of Denmark. Johannes Kepler published a calendar of forecasts every year from 1595, and in 1608 drew up the chart of Wallenstein, the future commander of the imperial armies. He wanted to reform astrology rather than abandon it: he rejected the houses and kept the aspects, adding three of his own, including the quintile.",
        },
        {
          kind: "p",
          text: "The Church distinguished natural astrology, useful to medicine, agriculture or navigation, from judicial astrology, which claims to judge actions and destiny. Pope Sixtus V condemned the latter in 1586, and Urban VIII did so again in 1631.",
        },
      ],
      image: {
        key: "cellariusPlanisphere",
        alt: "A coloured engraving: concentric circles around the Earth seen from the pole, surrounded by clouds and a ring of flames; on the circles, the gods of the planets ride past in their chariots; an outer ring bears the names of the signs of the zodiac; two scholars sit in the bottom corners.",
        caption:
          "The world the Renaissance inherited from Ptolemy: the Earth in the centre, the spheres of the seven bodies, each driven by its god, then the circle of the zodiac. Plate by Andreas Cellarius, 1660.",
      },
      sources: [
        { label: "Nostradamus, Wikipedia", href: "https://en.wikipedia.org/wiki/Nostradamus" },
        { label: "Medici column, Wikipedia", href: "https://en.wikipedia.org/wiki/Medici_column" },
        {
          label: "Tycho Brahe and astrology, The Starry Messenger, University of Cambridge",
          href: "https://www.sites.hps.cam.ac.uk/starry/tychoastrol.html",
        },
        { label: "Johannes Kepler, Wikipedia", href: "https://en.wikipedia.org/wiki/Johannes_Kepler" },
      ],
    },
    "rupture-scientifique": {
      heading: "The Scientific Revolution: astronomy and astrology part ways",
      period: "c. 1543 – 1750",
      summary:
        "From Copernicus to Newton, the sky changed its nature: the Earth revolves around the Sun, and the planets became bodies subject to the same laws as stones. Astrology lost its place in the universities and academies, but lived on in the almanacs.",
      details: [
        {
          kind: "p",
          text: "In 1543, Copernicus placed the Sun at the centre of the world; yet he had been trained in Bologna, at the end of the 1490s, under Domenico Maria Novara, an astronomer and astrologer. In 1572 and 1577, a new star and a comet, measured by Tycho Brahe, showed that the sky beyond the Moon was not unchanging.",
        },
        {
          kind: "p",
          text: "In 1610, Galileo published what his telescope revealed: mountains on the Moon, four satellites around Jupiter. He too cast horoscopes: in 1609, he promised a long life to the Grand Duke of Tuscany, who died shortly afterwards. In 1687, Newton explained the motion of the planets by universal gravitation alone.",
        },
        {
          kind: "p",
          text: "In this new world, nothing explained how the heavenly bodies could act on destinies. Astrology gradually left university teaching; in France, the Royal Academy of Sciences, founded in 1666, did not count it among its disciplines, and a royal ordinance of 1682 targeted those who made a trade of divination. The almanacs, meanwhile, went on circulating in the countryside, with their weather forecasts and their advice on sowing or treating ailments.",
        },
      ],
      image: {
        key: "cellariusHemisphere",
        alt: "An engraved and coloured star chart: within a large graduated circle, saints, kings, angels, a boat and Noah's ark replace the usual figures of the constellations; cherubs carry the Latin title, and two small planispheres fill the bottom corners.",
        caption:
          "The Christian sky of Julius Schiller (1627), in which the twelve apostles take the place of the signs of the zodiac. The Cellarius atlas that reproduces it in 1660 also presents, side by side, the systems of Ptolemy, Copernicus and Tycho Brahe.",
      },
      sources: [
        { label: "Copernican Revolution, Wikipedia", href: "https://en.wikipedia.org/wiki/Copernican_Revolution" },
        { label: "Harmonia Macrocosmica, Wikipedia", href: "https://en.wikipedia.org/wiki/Harmonia_Macrocosmica" },
        {
          label: "Astrology in the 17th century: astral determinism or charlatanism, Afis (in French)",
          href: "https://www.afis.org/L-astrologie-au-XVIIe-siecle-determinisme-astral-ou-charlatanisme",
        },
        {
          label: "Astrology: marginalisation and objectification, Encyclopædia Universalis (in French)",
          href: "https://www.universalis.fr/encyclopedie/astrologie/2-marginalisation-et-objectivation/",
        },
      ],
    },
    "xxe-siecle": {
      heading: "The 20th century: psychology, the press and apps",
      period: "c. 1890 – today",
      summary:
        "At the end of the 19th century, astrology was reborn in England with Alan Leo, who made it a tool for self-knowledge more than for prediction. In the 20th century, it became psychological with Jung and Rudhyar, popular with newspaper horoscopes, then digital with apps.",
      details: [
        {
          kind: "p",
          text: "Alan Leo (1860–1917), an English astrologer and member of the Theosophical Society, simplified the doctrine and put the emphasis on character rather than on events. His magazines and books circulated widely; prosecuted under a law against fortune-tellers, he was acquitted in 1914, then fined in 1917.",
        },
        {
          kind: "p",
          text: "The Swiss psychiatrist Carl Gustav Jung likened astrological symbols to those of the psyche; in 1952, his essay on synchronicity included a statistical study of the charts of married couples. In 1936, Dane Rudhyar published The Astrology of Personality in New York: for him, the planets are not causes, but symbols that accompany the inner life.",
        },
        {
          kind: "p",
          text: "On 24 August 1930, three days after the birth of Princess Margaret, the Sunday Express published what the stars held in store for her, written by R. H. Naylor. Its success earned the astrologer a regular column, soon divided into twelve sections, one for each Sun sign: the newspaper horoscope was born, and it spread to newspapers all over the world.",
        },
        {
          kind: "p",
          text: "Today, phone apps calculate a chart in a few seconds and send a message every day. Meanwhile, no test has found an effect of the heavenly bodies that withstands scrutiny: the What science says page presents them.",
        },
      ],
      image: {
        key: "flammarion",
        alt: "A black-and-white engraving in an ornate frame: a kneeling traveller, staff in hand, pushes his head through the starry vault of the sky, where it meets the earth, and discovers beyond it clouds, circles and wheels; on the right, a landscape with a tree, villages and a Sun with a human face.",
        caption:
          "An engraving by an unknown artist published in 1888 in a book by Camille Flammarion: wrongly taken for a medieval image, it was reproduced throughout the 20th century, even in astrology books.",
      },
      sources: [
        { label: "Alan Leo, Wikipedia", href: "https://en.wikipedia.org/wiki/Alan_Leo" },
        { label: "Dane Rudhyar, Wikipedia", href: "https://en.wikipedia.org/wiki/Dane_Rudhyar" },
        { label: "R. H. Naylor, Wikipedia", href: "https://en.wikipedia.org/wiki/R._H._Naylor" },
        { label: "Flammarion engraving, Wikipedia", href: "https://en.wikipedia.org/wiki/Flammarion_engraving" },
      ],
    },
  },
};
