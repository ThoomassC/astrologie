import type { ScienceContent } from "./types";

/** Textes de la page Science : précession, Ophiuchus, tests, effet Barnum, mécanisme, puis l'astrologie comme fait culturel. */
export const SCIENCE_FR: ScienceContent = {
  title: "Ce que dit la science",
  lead: "Ce que les astronomes, les psychologues et les statisticiens ont mesuré à propos de l'astrologie, expliqué sans mépris pour une tradition qui a façonné notre culture.",
  intro: {
    summary:
      "Depuis le milieu du XXe siècle, l'astrologie a été soumise à des tests rigoureux : aucun n'a montré que la position des astres à la naissance décrive une personnalité ou annonce un destin mieux que le hasard. Cette page présente ces travaux, puis ce qui demeure : un fait culturel.",
    details: [
      {
        kind: "p",
        text: "La science ne juge pas les personnes qui lisent leur horoscope : elle vérifie des affirmations. Quand des astrologues affirment qu'une position des astres annonce un trait de caractère, on peut le tester comme un médicament, en comparant ce qu'ils prédisent à ce qu'on observe, sans que personne ne connaisse d'avance la bonne réponse.",
      },
      {
        kind: "p",
        text: "Les questions d'astronomie, comme la précession ou Ophiuchus, ne disent pas à elles seules que l'astrologie se trompe : elles montrent que son zodiaque est une convention, calée sur les saisons et non sur les étoiles. Ce sont les tests de prédiction, en double aveugle, qui ont répondu à la question de son efficacité.",
      },
    ],
  },
  topics: {
    precession: {
      heading: "La précession des équinoxes",
      summary:
        "L'axe de la Terre tourne lentement, comme celui d'une toupie, en environ 25 800 ans. Le point de l'équinoxe de mars glisse donc le long du zodiaque d'environ 1° tous les 72 ans : les signes des astrologues ne coïncident plus avec les constellations dont ils portent le nom.",
      details: [
        {
          kind: "p",
          text: "Vers 130 av. J.-C., Hipparque compare la position de l'étoile Spica à celle qu'avaient mesurée ses prédécesseurs : elle s'est déplacée d'environ 2° par rapport au point de l'équinoxe. Il en déduit un mouvement d'au moins 1° par siècle. On sait aujourd'hui qu'il vaut environ 50 secondes d'arc par an, et qu'il vient de l'attraction de la Lune et du Soleil sur le renflement de la Terre à l'équateur.",
        },
        {
          kind: "p",
          text: "Les astrologues occidentaux emploient le zodiaque tropical, qui part toujours de l'équinoxe de mars : il suit les saisons, pas les étoiles. Depuis l'Antiquité, il s'est décalé d'environ une constellation. Le Soleil de l'équinoxe de mars, autrefois devant le Bélier, est aujourd'hui devant les Poissons, et n'entrera dans la constellation du Verseau, selon les limites officielles, qu'en 2597.",
        },
        {
          kind: "p",
          text: "L'astrologie indienne emploie au contraire un zodiaque sidéral, calé sur les étoiles : ses signes sont aujourd'hui décalés d'environ 24° par rapport aux signes tropicaux. Un Soleil à 10° du Bélier tropical se trouve ainsi à 16° des Poissons sidéraux.",
        },
      ],
      sources: [
        { label: "Précession des équinoxes, Wikipédia", href: "https://fr.wikipedia.org/wiki/Pr%C3%A9cession_des_%C3%A9quinoxes" },
        { label: "Zodiaque, Wikipédia", href: "https://fr.wikipedia.org/wiki/Zodiaque" },
      ],
    },
    ophiuchus: {
      heading: "Ophiuchus, la treizième constellation",
      summary:
        "Le Soleil traverse treize constellations, et non douze : entre le Scorpion et le Sagittaire, il passe par Ophiuchus, le Serpentaire, de la fin novembre à la mi-décembre. Les astrologues ne la comptent pas, car leurs signes sont des parts égales de 30°, et non des constellations.",
      details: [
        {
          kind: "p",
          text: "Les constellations sont des régions du ciel de tailles très inégales. Leurs limites officielles ont été adoptées par l'Union astronomique internationale en 1928 et publiées en 1930 : le Soleil y passe environ une semaine dans le Scorpion, mais un mois et demi dans la Vierge. Il traverse Ophiuchus à peu près du 29 novembre au 17 décembre.",
        },
        {
          kind: "p",
          text: "Les Babyloniens, qui ont fixé douze signes égaux, ont laissé Ophiuchus de côté : douze parts de 30° s'accordaient avec les douze mois de leur calendrier. En 2016, une page pour enfants de la NASA l'a rappelé, et la presse a annoncé que la NASA changeait les signes. L'agence a répondu qu'elle étudiait l'astronomie, pas l'astrologie, et qu'elle n'avait rien changé : elle avait seulement fait le calcul.",
        },
        {
          kind: "p",
          text: "Pour l'astrologie, cela ne change rien, puisque son zodiaque tropical découpe les saisons et non les étoiles. Pour l'astronomie, cela rappelle que signes et constellations sont deux choses différentes, qu'il vaut mieux ne pas confondre.",
        },
      ],
      sources: [
        { label: "Ophiuchus, Wikipédia", href: "https://fr.wikipedia.org/wiki/Ophiuchus" },
        { label: "Constellation, Wikipédia", href: "https://fr.wikipedia.org/wiki/Constellation" },
        { label: "Le zodiaque et les constellations, NASA Space Place (en anglais)", href: "https://spaceplace.nasa.gov/starfinder2/en/" },
      ],
    },
    "carlson-1985": {
      heading: "Le test en double aveugle de Shawn Carlson (1985)",
      summary:
        "En 1985, la revue Nature publie un test conçu avec des astrologues : à partir de thèmes natals, ils devaient reconnaître le profil psychologique de chaque personne. Ils n'ont pas fait mieux que le hasard.",
      details: [
        {
          kind: "p",
          text: "Le physicien américain Shawn Carlson prépare le protocole avec le National Council for Geocosmic Research, une association d'astrologues, qui propose les participants, les conseille et juge le test équitable. Vingt-huit astrologues réputés, d'Europe et des États-Unis, y prennent part.",
        },
        {
          kind: "p",
          text: "Les astrologues choisissent eux-mêmes l'outil de comparaison, un questionnaire de personnalité reconnu, le California Psychological Inventory. Pour plus d'une centaine de personnes, ils reçoivent le thème natal et doivent retrouver, parmi plusieurs profils, celui qui lui correspond. Le test est mené en double aveugle : personne ne sait, pendant l'épreuve, quelle réponse est la bonne.",
        },
        {
          kind: "p",
          text: "Les astrologues n'ont pas fait mieux que le hasard, et ne réussissaient pas davantage quand ils se disaient très sûrs d'eux. Carlson conclut que le test réfute l'hypothèse astrologique. Cela ne dit rien du sens que l'astrologie peut avoir pour ceux qui la pratiquent ; cela montre que, dans ces conditions, un thème ne permettait pas de reconnaître une personnalité.",
        },
      ],
      sources: [
        {
          label: "Shawn Carlson, « A double-blind test of astrology », Nature 318, 419-425, 1985 (en anglais)",
          href: "https://doi.org/10.1038/318419a0",
        },
        { label: "Shawn Carlson, Wikipédia (en anglais)", href: "https://en.wikipedia.org/wiki/Shawn_Carlson" },
        { label: "Astrology and science, Wikipédia (en anglais)", href: "https://en.wikipedia.org/wiki/Astrology_and_science" },
      ],
    },
    "jumeaux-temporels": {
      heading: "Les jumeaux du temps",
      summary:
        "Deux personnes nées au même endroit à quelques minutes d'écart ont presque le même thème : si l'astrologie disait vrai, elles devraient se ressembler. En 2003, Geoffrey Dean et Ivan Kelly ont comparé plus de 2 000 Londoniens nés en mars 1958 : aucune ressemblance au-delà du hasard.",
      details: [
        {
          kind: "p",
          text: "L'argument est ancien : au début du Ve siècle, saint Augustin objectait déjà aux astrologues que des jumeaux, nés presque au même instant, comme Ésaü et Jacob dans la Bible, avaient eu des vies très différentes.",
        },
        {
          kind: "p",
          text: "Les chercheurs ont repris les données d'une grande étude britannique sans rapport avec l'astrologie : 2 101 personnes nées à Londres du 3 au 9 mars 1958, à 4,8 minutes d'intervalle en moyenne. Elles avaient été suivies à 11, 16 et 23 ans, sur 110 caractéristiques : intelligence, résultats scolaires, comportement noté par les parents et les enseignants, mesures physiques, aptitudes.",
        },
        {
          kind: "p",
          text: "Les personnes nées l'une après l'autre ne se ressemblaient pas plus que des inconnus. Sur les 110 caractéristiques, cinq seulement montraient un lien, autant qu'on en attend par simple hasard. Pour les auteurs, c'est le test le plus direct de l'astrologie, puisque aucune interprétation du thème ne s'y interpose.",
        },
      ],
      sources: [
        {
          label: "Geoffrey Dean et Ivan Kelly, Journal of Consciousness Studies, 2003, version longue (en anglais)",
          href: "https://www.astrology-and-science.com/D-psia2.htm",
        },
        {
          label: "Saint Augustin, Les Confessions, livre VII, Wikisource",
          href: "https://fr.wikisource.org/wiki/Les_Confessions_(Augustin)/Livre_septi%C3%A8me",
        },
      ],
    },
    gauquelin: {
      heading: "Michel Gauquelin et l'effet Mars",
      summary:
        "Le psychologue français Michel Gauquelin a cru trouver, en 1955, que les champions sportifs naissaient plus souvent quand Mars venait de se lever ou de culminer. Cet « effet Mars » a nourri des décennies de controverses ; un grand test français sur 1 066 champions ne l'a pas retrouvé.",
      details: [
        {
          kind: "p",
          text: "Gauquelin ne s'intéressait pas aux signes : il découpait en secteurs le trajet quotidien de chaque planète dans le ciel, et cherchait si certaines professions naissaient plus souvent avec une planète dans un secteur « clé », juste après son lever ou sa culmination. Il comptait environ 22 % de champions nés avec Mars dans ces secteurs, contre 17 % attendus. Ses tests des signes du zodiaque, eux, ne donnaient rien.",
        },
        {
          kind: "p",
          text: "En 1967, le Comité Para, en Belgique, retrouve l'effet, mais sur des données en grande partie réunies par Gauquelin lui-même. Aux États-Unis, un test mené en 1979 et 1980 sur des athlètes américains est négatif, et sa méthode est vivement discutée.",
        },
        {
          kind: "p",
          text: "En France, le Comité français pour l'étude des phénomènes paranormaux réunit les dates de naissance de 1 066 champions, sans dire aux mairies à quoi elles serviraient : aucun effet Mars n'apparaît. Le comité l'attribue à un biais dans le choix des champions retenus par Gauquelin. Le psychologue allemand Suitbert Ertel a contesté cette conclusion, mais aucun test indépendant n'a confirmé l'effet.",
        },
      ],
      sources: [
        { label: "Michel Gauquelin, Wikipédia", href: "https://fr.wikipedia.org/wiki/Michel_Gauquelin" },
        { label: "Effet Mars, Wikipédia", href: "https://fr.wikipedia.org/wiki/Effet_Mars" },
        { label: "Mars effect, Wikipédia (en anglais)", href: "https://en.wikipedia.org/wiki/Mars_effect" },
      ],
    },
    "effet-barnum": {
      heading: "L'effet Barnum",
      summary:
        "Une description vague et flatteuse paraît toujours juste : c'est l'effet Barnum, ou effet Forer. En 1948, le psychologue Bertram Forer remet à ses étudiants un portrait prétendument personnel, en fait le même pour tous et tiré d'un livre d'astrologie : ils le jugent très ressemblant.",
      details: [
        {
          kind: "p",
          text: "Forer avait fait remplir un questionnaire à 39 étudiants. Une semaine plus tard, chacun reçoit son analyse, en réalité un texte identique, copié dans un livre d'astrologie acheté en kiosque. Sur une échelle de 0 à 5, ils notent sa justesse à plus de 4 en moyenne, avant d'apprendre la vérité. L'expérience est publiée en 1949.",
        },
        {
          kind: "p",
          text: "Le psychologue Paul Meehl a nommé le phénomène en 1956, d'après Phineas Taylor Barnum, l'homme de spectacle américain. Il désigne ces portraits faits de traits que presque tout le monde se reconnaît, comme le besoin d'être apprécié ou la tendance à se critiquer soi-même.",
        },
        {
          kind: "p",
          text: "L'effet Barnum explique en partie pourquoi les horoscopes semblent justes : on retient ce qui correspond et on oublie le reste. C'est pourquoi les tests sérieux, comme celui de Carlson, demandent de choisir entre plusieurs descriptions, sans savoir laquelle est la bonne.",
        },
      ],
      sources: [
        { label: "Effet Barnum, Wikipédia", href: "https://fr.wikipedia.org/wiki/Effet_Barnum" },
        {
          label: "Bertram Forer, « The fallacy of personal validation », Journal of Abnormal and Social Psychology, 1949 (en anglais)",
          href: "https://doi.org/10.1037/h0059240",
        },
        { label: "Barnum effect, Wikipédia (en anglais)", href: "https://en.wikipedia.org/wiki/Barnum_effect" },
      ],
    },
    mecanisme: {
      heading: "Quelle force ?",
      summary:
        "La physique connaît quatre forces, et seules la gravitation et l'électromagnétisme portent loin. Aucune des deux ne pourrait marquer une personnalité à la naissance : à 50 centimètres, un adulte qui accueille le bébé l'attire davantage que Mars, même au plus près de la Terre.",
      details: [
        {
          kind: "p",
          text: "Le calcul est simple, avec les masses et les distances publiées par la NASA. Un adulte de 70 kilos penché à 50 centimètres d'un nouveau-né l'attire environ 1,3 fois plus que Mars à son plus près, à 54,6 millions de kilomètres, et 70 fois plus que Mars à son plus loin.",
        },
        {
          kind: "p",
          text: "Jupiter, Vénus ou la Lune attirent bien davantage, mais leur attraction s'exerce presque également sur toute la Terre et sur tout ce qu'elle porte : seule compte la différence d'un point à l'autre, l'effet de marée, infime sur un corps de quelques dizaines de centimètres. Quant au champ magnétique de Jupiter, mesuré depuis la Terre, il est bien plus faible que celui d'un appareil ménager.",
        },
        {
          kind: "p",
          text: "Beaucoup d'astrologues ne parlent d'ailleurs pas de force : ils voient dans les astres des symboles, et non des causes. Et l'absence de mécanisme ne suffit pas, seule, à rejeter une idée, remarquait l'astronome Carl Sagan : on ignorait celui de la dérive des continents quand Wegener l'a proposée. Ce sont les tests de prédiction, plus que la physique, qui ont tranché.",
        },
      ],
      sources: [
        { label: "Planetary Fact Sheet, NASA (en anglais)", href: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/" },
        { label: "Mars Fact Sheet, NASA (en anglais)", href: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html" },
        {
          label: "Sven Ove Hansson, Science and Pseudo-Science, Stanford Encyclopedia of Philosophy (en anglais)",
          href: "https://plato.stanford.edu/entries/pseudo-science/",
        },
      ],
    },
  },
  culture: {
    heading: "Un fait culturel",
    summary:
      "Même sans pouvoir de prédiction démontré, l'astrologie a façonné notre culture : nos calendriers, nos œuvres d'art et jusqu'à nos mots en gardent la trace. En parler avec exactitude n'oblige pas à mépriser ceux qui y trouvent un langage pour parler d'eux-mêmes.",
    details: [
      {
        kind: "p",
        text: "Les jours de la semaine viennent de l'astrologie hellénistique : chaque heure y était gouvernée par un astre, et l'astre de la première heure donnait son nom au jour. Lundi, mardi, mercredi, jeudi et vendredi portent encore ceux de la Lune, de Mars, de Mercure, de Jupiter et de Vénus.",
      },
      {
        kind: "list",
        items: [
          "Désastre : de l'italien disastro, littéralement « mauvais astre ».",
          "Influence : au XIIIe siècle, un flux venu des astres et censé agir sur les hommes.",
          "Lunatique : rendu fou, croyait-on, par la Lune.",
          "Jovial : né sous Jupiter, astre réputé bienfaisant, d'où joyeux.",
          "Saturnien : triste, comme ceux que Saturne était censé marquer.",
          "Influenza : en italien, l'influence du ciel, à laquelle on attribuait les épidémies.",
          "Avoir une bonne étoile : être protégé par le sort.",
        ],
      },
      {
        kind: "p",
        text: "L'art en est plein, des zodiaques sculptés aux portails des cathédrales aux Très Riches Heures du duc de Berry ; en 1914, Gustav Holst commence Les Planètes, une suite pour orchestre inspirée par la signification astrologique des astres.",
      },
      {
        kind: "p",
        text: "En 1975, 186 scientifiques, dont 18 prix Nobel, signent une déclaration contre l'astrologie. Carl Sagan refuse de s'y joindre : il ne croit pas à l'astrologie, mais trouve le ton autoritaire, et aurait préféré qu'on en explique et réfute les principes. C'est une bonne façon d'en parler : dire ce que l'on sait, comprendre ce qu'elle représente pour ceux qui la pratiquent, sans moquerie.",
      },
    ],
  },
};
