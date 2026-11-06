import type { HistoryContent } from "./types";

/** Textes de la page Histoire : huit époques, de Babylone aux applications pour téléphone. */
export const HISTORY_FR: HistoryContent = {
  title: "Une histoire de l'astrologie",
  lead: "De Babylone aux applications pour téléphone, comment une tradition née de l'observation du ciel a traversé plus de trois mille ans, entre science, pouvoir et croyances.",
  intro: {
    summary:
      "L'astrologie est née en Mésopotamie, où l'on lisait le ciel comme un message des dieux. Elle a pris sa forme actuelle dans l'Égypte grecque, puis a été enseignée, discutée et transformée à Rome, dans le monde islamique et en Europe, jusqu'à ce que la science moderne s'en sépare.",
    details: [
      {
        kind: "p",
        text: "Pendant la plus grande partie de leur histoire, astronomie et astrologie n'étaient pas distinctes : les mêmes savants mesuraient le ciel et en tiraient des présages, et les deux mots ont longtemps été employés l'un pour l'autre. Calculer la position des astres servait d'abord à dresser des horoscopes.",
      },
      {
        kind: "p",
        text: "Cette frise suit huit époques, de Babylone à nos jours. Les dates sont approximatives et les époques se chevauchent ; chacune renvoie à des sources pour aller plus loin.",
      },
    ],
  },
  eras: {
    mesopotamie: {
      heading: "Babylone et l'Assyrie : le ciel des présages",
      period: "vers 1800 – 100 av. J.-C.",
      summary:
        "Les scribes de Babylone et d'Assyrie observaient le ciel nuit après nuit et y lisaient des présages pour le roi et le pays. C'est chez eux que naissent le zodiaque de douze signes égaux, vers la fin du Ve siècle av. J.-C., et les premiers horoscopes de naissance, en 410 av. J.-C.",
      details: [
        {
          kind: "p",
          text: "Pour les Mésopotamiens, le ciel était une écriture des dieux. Une éclipse, un halo autour de la Lune ou l'éclat de Vénus annonçaient un événement pour le royaume : guerre, épidémie, crue ou bonne récolte. Des milliers de ces présages ont été réunis dans une grande série de tablettes, Enuma Anu Enlil, et les scribes adressaient au roi des rapports sur le ciel.",
        },
        {
          kind: "p",
          text: "Le MUL.APIN, un recueil compilé vers 1000 av. J.-C. et connu par des copies du VIIe siècle av. J.-C., dresse la liste des étoiles et des constellations, de leurs levers au fil de l'année, et de celles que traverse la Lune sur son chemin : ce sont les ancêtres de nos signes.",
        },
        {
          kind: "p",
          text: "Peu à peu, les astronomes notent chaque nuit la position de la Lune et des planètes, et apprennent à prévoir le ciel par le calcul. Vers la fin du Ve siècle av. J.-C., ils découpent le chemin du Soleil en douze signes de 30°, qui portent les noms de constellations voisines.",
        },
        {
          kind: "p",
          text: "Les plus anciens horoscopes connus, des tablettes de Babylone et de Nippur, concernent des naissances de 410 av. J.-C. : ils donnent la position des astres ce jour-là, parfois avec une courte prédiction. Une trentaine nous est parvenue ; la plus récente date de 69 av. J.-C.",
        },
      ],
      image: {
        key: "mulApin",
        alt: "Tablette d'argile brune, recollée à partir de plusieurs fragments, couverte de lignes serrées de signes cunéiformes répartis en deux colonnes.",
        caption:
          "Une copie du MUL.APIN trouvée à Assur et écrite au VIIe siècle av. J.-C. : le grand catalogue babylonien des étoiles et du chemin de la Lune.",
      },
      sources: [
        { label: "MUL.APIN, Wikipédia", href: "https://fr.wikipedia.org/wiki/MUL.APIN" },
        { label: "Enuma Anu Enlil, Wikipédia", href: "https://fr.wikipedia.org/wiki/Enuma_Anu_Enlil" },
        { label: "Astronomie babylonienne, Wikipédia", href: "https://fr.wikipedia.org/wiki/Astronomie_babylonienne" },
        {
          label: "Eleanor Robson, compte rendu de The Heavenly Writing de Francesca Rochberg, Bryn Mawr Classical Review, 2005 (en anglais)",
          href: "https://bmcr.brynmawr.edu/2005/2005.06.29/",
        },
      ],
    },
    "egypte-hellenistique": {
      heading: "L'Égypte grecque : la naissance de l'horoscope",
      period: "vers 300 av. J.-C. – 100 apr. J.-C.",
      summary:
        "Après la conquête d'Alexandre, l'Égypte est gouvernée par des rois grecs et Alexandrie devient un foyer du savoir. Les présages babyloniens y rencontrent la géométrie grecque et les décans égyptiens : vers le IIe ou le Ier siècle av. J.-C. naît l'astrologie de l'Ascendant et des maisons.",
      details: [
        {
          kind: "p",
          text: "Les Égyptiens avaient leur propre ciel : trente-six groupes d'étoiles, les décans, qui se levaient l'un après l'autre et servaient à lire l'heure la nuit. On les voit sur des couvercles de cercueils dès la fin du IIIe millénaire av. J.-C. Dans l'astrologie grecque, ils deviennent des tranches de 10° du zodiaque, trois par signe.",
        },
        {
          kind: "p",
          text: "La grande nouveauté est l'horoskopos, « celui qui observe l'heure » : le degré du zodiaque qui se lève à l'est au moment d'une naissance, notre Ascendant. À partir de lui, le ciel se divise en douze lieux, nos maisons. Les textes fondateurs sont attribués à des figures légendaires : le pharaon Néchepso et le prêtre Pétosiris, ou le dieu Hermès Trismégiste.",
        },
        {
          kind: "p",
          text: "Le zodiaque de Dendérah, sculpté vers 50 av. J.-C. au plafond d'une chapelle d'Osiris, sur le toit du temple d'Hathor, montre ce mélange : les douze signes venus de Babylone y côtoient les constellations égyptiennes et les trente-six décans, et le disque du ciel est porté par quatre femmes et huit personnages à tête de faucon. Découpé en 1821 et rapporté en France, il est aujourd'hui au musée du Louvre.",
        },
      ],
      image: {
        key: "denderah",
        alt: "Grand bas-relief de grès gris : un disque couvert de figures d'animaux, de dieux et d'étoiles, porté par quatre femmes debout et par des personnages agenouillés à tête de faucon, entre des colonnes de hiéroglyphes.",
        caption:
          "Le zodiaque de Dendérah, vers 50 av. J.-C. : les douze signes venus de Babylone parmi les constellations et les décans égyptiens.",
      },
      sources: [
        { label: "Zodiaque de Dendéra, collections du musée du Louvre", href: "https://collections.louvre.fr/ark:/53355/cl010028871" },
        { label: "Zodiaque de Dendérah, Wikipédia", href: "https://fr.wikipedia.org/wiki/Zodiaque_de_Dend%C3%A9rah" },
        { label: "Hellenistic astrology, Wikipédia (en anglais)", href: "https://en.wikipedia.org/wiki/Hellenistic_astrology" },
      ],
    },
    "rome-et-ptolemee": {
      heading: "Rome et Ptolémée : l'astrologie savante",
      period: "vers 100 av. J.-C. – 400 apr. J.-C.",
      summary:
        "À Rome, l'astrologie devient une affaire d'empereurs et de lettrés : Auguste fait frapper le Capricorne sur une monnaie, le poète Manilius la met en vers. À Alexandrie, au IIe siècle, Ptolémée en fait une science de la nature dans la Tétrabible, la référence des astrologues pendant quinze siècles.",
      details: [
        {
          kind: "p",
          text: "Les astrologues, que les Romains appellent « Chaldéens » ou « mathématiciens », conseillent les puissants. Selon l'historien Suétone, Auguste rend public son thème et fait frapper sur une monnaie d'argent le Capricorne, qu'il tient pour son signe ; Tibère garde auprès de lui l'astrologue Thrasylle. Rome se méfie pourtant de ceux qui prédisent la mort des empereurs, et plusieurs décrets les chassent de la ville.",
        },
        {
          kind: "p",
          text: "Vers l'an 10, Manilius compose les Astronomiques, un long poème latin en cinq livres : on y trouve déjà les maisons et la correspondance entre les signes et les parties du corps, de la tête pour le Bélier aux pieds pour les Poissons.",
        },
        {
          kind: "p",
          text: "Claude Ptolémée, astronome d'Alexandrie, écrit vers 150 l'Almageste, somme de l'astronomie antique, puis la Tétrabible, « les quatre livres », où il présente l'astrologie comme l'étude des effets naturels du ciel, comparable à la prévision du temps. Il y fait partir les signes des équinoxes et des solstices : c'est le zodiaque tropical des astrologues occidentaux.",
        },
        {
          kind: "p",
          text: "Au même siècle, Vettius Valens réunit dans son Anthologie plus d'une centaine de thèmes de ses clients ; au IVe siècle, Firmicus Maternus écrit en latin la Mathesis. Les auteurs chrétiens, comme saint Augustin, combattent l'astrologie au nom de la liberté humaine ; elle s'efface en Occident avec la fin de l'Empire.",
        },
      ],
      image: {
        key: "cellariusSysteme",
        alt: "Gravure coloriée : au centre, le globe terrestre, entouré des orbites des planètes et d'une large bande inclinée ornée des figures des signes, comme le Taureau, le Cancer ou le Scorpion ; dans les coins, des anges, des angelots et des savants avec leurs instruments.",
        caption:
          "Le système du monde de Ptolémée en perspective : la Terre immobile au centre, les orbites des astres et la bande du zodiaque. Planche d'Andreas Cellarius, 1660.",
      },
      sources: [
        { label: "Tetrabiblos, Wikipédia", href: "https://fr.wikipedia.org/wiki/Tetrabiblos" },
        {
          label: "Ptolémée, Tetrabiblos, traduction de F. E. Robbins, LacusCurtius (en anglais)",
          href: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Ptolemy/Tetrabiblos/home.html",
        },
        { label: "Manilius, Wikipédia", href: "https://fr.wikipedia.org/wiki/Manilius" },
        {
          label: "Suétone, Vie d'Auguste, LacusCurtius (en anglais)",
          href: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Suetonius/12Caesars/Augustus*.html",
        },
      ],
    },
    "monde-islamique": {
      heading: "Bagdad et le monde islamique : traduire et calculer",
      period: "vers 750 – 1200",
      summary:
        "Au VIIIe siècle, les califes abbassides font traduire en arabe les traités grecs, persans et indiens. Astronomes et astrologues perfectionnent les instruments et les tables, et des auteurs comme Abu Ma'shar écrivent des manuels qui, traduits en latin au XIIe siècle, nourriront l'Europe.",
      details: [
        {
          kind: "p",
          text: "Selon les chroniqueurs, dont al-Biruni, ce sont des astrologues, Nawbakht et Masha'allah, qui choisirent le 30 juillet 762 pour commencer la construction de Bagdad, la nouvelle capitale du calife al-Mansur. L'astrologie y est un savoir de cour, comme la médecine.",
        },
        {
          kind: "p",
          text: "Abu Ma'shar (787-886), l'Albumasar des Latins, écrit à Bagdad une Grande Introduction à l'astrologie en huit livres et un traité des grandes conjonctions de Jupiter et de Saturne, censées rythmer l'histoire des religions et des empires. Au XIe siècle, le savant al-Biruni rédige un manuel par questions et réponses, en persan et en arabe, tout en critiquant les prédictions des astrologues.",
        },
        {
          kind: "p",
          text: "Les savants de l'Islam perfectionnent aussi l'astrolabe, hérité des Grecs : ce disque de laiton sert à lire l'heure, à mesurer la hauteur des astres et, pour les astrologues, à situer les planètes dans les maisons. Tous n'approuvent pas l'astrologie : au XIe siècle, Avicenne écrit un traité pour la réfuter.",
        },
        {
          kind: "p",
          text: "Au XIIe siècle, surtout en Espagne, des traducteurs mettent ces livres en latin : la Grande Introduction d'Abu Ma'shar est traduite par Jean de Séville en 1133, puis par Hermann de Carinthie en 1140. L'astrologie savante revient ainsi en Europe.",
        },
      ],
      image: {
        key: "astrolabe",
        alt: "Le dos d'un astrolabe en laiton doré, suspendu à un anneau : une règle de visée pivote au centre d'un disque gravé de graduations, de courbes, de tableaux de chiffres et d'inscriptions en écriture arabe.",
        caption:
          "Astrolabe persan de Muhammad Zaman, daté de 1654-1655. Hérité des Grecs et perfectionné par les savants de l'Islam, l'instrument servait à lire l'heure et, aux astrologues, à situer les astres dans les maisons.",
      },
      sources: [
        { label: "Abou Ma'shar al-Balkhî, Wikipédia", href: "https://fr.wikipedia.org/wiki/Abou_Ma%27shar_al-Balkh%C3%AE" },
        { label: "Al-Biruni, Wikipédia", href: "https://fr.wikipedia.org/wiki/Al-Biruni" },
        { label: "Maison de la sagesse, Wikipédia", href: "https://fr.wikipedia.org/wiki/Maison_de_la_sagesse" },
        { label: "Astrolabe, Wikipédia", href: "https://fr.wikipedia.org/wiki/Astrolabe" },
      ],
    },
    "europe-medievale": {
      heading: "L'Europe médiévale : universités et médecine",
      period: "vers 1100 – 1450",
      summary:
        "Au XIIe siècle, les traductions de l'arabe rendent l'astrologie à l'Europe latine. Elle entre dans les universités, surtout chez les médecins : chaque signe gouverne une partie du corps, du Bélier pour la tête aux Poissons pour les pieds, et l'on consulte la Lune avant de saigner un malade.",
      details: [
        {
          kind: "p",
          text: "L'astrologie s'enseigne avec l'astronomie dans les facultés des arts et de médecine. À Bologne, les statuts de 1405 prévoient quatre années d'études du ciel pour les étudiants en arts et en médecine, de la sphère céleste jusqu'aux traités d'astrologie médicale, dont la Tétrabible de Ptolémée.",
        },
        {
          kind: "p",
          text: "La médecine suit la mélothésie, héritée de l'Antiquité : chaque signe gouverne une partie du corps. Une règle répandue interdit d'inciser ou de saigner un membre quand la Lune traverse le signe qui le gouverne, et les almanachs donnent la place de la Lune jour après jour.",
        },
        {
          kind: "p",
          text: "En 1348, la peste noire ravage l'Europe. Interrogée par le roi Philippe VI, la faculté de médecine de Paris l'attribue notamment à une conjonction de Saturne, de Jupiter et de Mars dans le Verseau, le 20 mars 1345. Les rois ont leurs astrologues : Charles V fait venir de Bologne le médecin et astrologue Thomas de Pizan, père de l'écrivaine Christine de Pizan.",
        },
        {
          kind: "p",
          text: "L'Église admet que les astres agissent sur les corps, mais pas qu'ils commandent la volonté : pour Thomas d'Aquin, au XIIIe siècle, l'homme reste libre. Les livres d'heures, eux, font une large place au zodiaque, comme l'Homme anatomique des Très Riches Heures du duc de Berry.",
        },
      ],
      image: {
        key: "hommeZodiacal",
        alt: "Enluminure : un jeune homme nu, vu de face, adossé à son double vu de dos, dans une mandorle bleue ; les signes sont peints sur son corps, le Bélier sur la tête, les Poissons sous les pieds ; autour, les douze signes en médaillons sur fond bleu, deux écus à fleurs de lis et des inscriptions latines dans les coins.",
        caption:
          "L'Homme anatomique des Très Riches Heures du duc de Berry, vers 1411-1416 : chaque signe gouverne une partie du corps, et les inscriptions des coins rangent les signes selon les humeurs et les tempéraments.",
      },
      sources: [
        {
          label: "Les Très Riches Heures du duc de Berry, Wikipédia",
          href: "https://fr.wikipedia.org/wiki/Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry",
        },
        { label: "Homme zodiacal, Wikipédia", href: "https://fr.wikipedia.org/wiki/Homme_zodiacal" },
        {
          label: "La faculté de médecine de Paris et la peste de 1348, extraits traduits, Méditerranées",
          href: "https://www.mediterranees.net/moyen_age/peste/astrologie.html",
        },
        { label: "Thomas de Pisan, Wikipédia", href: "https://fr.wikipedia.org/wiki/Thomas_de_Pisan" },
      ],
    },
    renaissance: {
      heading: "La Renaissance : astrologues de cour et almanachs",
      period: "vers 1450 – 1630",
      summary:
        "Avec l'imprimerie, almanachs et prédictions se vendent partout. Les princes ont leurs astrologues, la cour de France reçoit Nostradamus, et les plus grands astronomes, Tycho Brahe et Kepler, dressent des horoscopes. En 1586, le pape condamne pourtant l'astrologie qui prétend prédire les actes humains.",
      details: [
        {
          kind: "p",
          text: "Les humanistes relisent les Anciens dans le texte : la Tétrabible est imprimée en grec à Nuremberg en 1535. L'astrologie a aussi ses critiques, comme Pic de la Mirandole, dont les Disputations contre l'astrologie paraissent en 1496, après sa mort.",
        },
        {
          kind: "p",
          text: "Michel de Nostredame, dit Nostradamus (1503-1566), apothicaire de Salon-de-Provence, publie des almanachs à partir de 1550 et ses Prophéties en 1555. Appelé à la cour la même année, il est nommé en 1564 médecin ordinaire et conseiller du roi Charles IX ; les historiens relèvent pourtant bien des erreurs dans ses horoscopes. À Paris, la colonne que Catherine de Médicis fait élever en 1574 aurait servi, selon une tradition jamais prouvée, à observer le ciel.",
        },
        {
          kind: "p",
          text: "Tycho Brahe dresse en 1577 l'horoscope du futur roi Christian IV de Danemark. Johannes Kepler publie chaque année, à partir de 1595, un calendrier de prévisions, et établit en 1608 le thème de Wallenstein, futur chef des armées impériales. Il veut réformer l'astrologie plutôt que l'abandonner : il rejette les maisons et garde les aspects, auxquels il en ajoute trois, dont le quintile.",
        },
        {
          kind: "p",
          text: "L'Église distingue l'astrologie naturelle, utile à la médecine, à l'agriculture ou à la navigation, de l'astrologie judiciaire, qui prétend juger des actes et du destin. Le pape Sixte Quint condamne cette dernière en 1586, et Urbain VIII de nouveau en 1631.",
        },
      ],
      image: {
        key: "cellariusPlanisphere",
        alt: "Gravure coloriée : des cercles concentriques autour de la Terre vue du pôle, entourée de nuages et d'une couronne de flammes ; sur les cercles, les dieux des planètes passent sur leurs chars ; un anneau extérieur porte les noms des signes du zodiaque ; deux savants sont assis dans les coins du bas.",
        caption:
          "Le monde que la Renaissance hérite de Ptolémée : la Terre au centre, les sphères des sept astres, chacun mené par son dieu, puis le cercle du zodiaque. Planche d'Andreas Cellarius, 1660.",
      },
      sources: [
        { label: "Nostradamus, Wikipédia", href: "https://fr.wikipedia.org/wiki/Nostradamus" },
        { label: "Colonne Médicis, Wikipédia", href: "https://fr.wikipedia.org/wiki/Colonne_M%C3%A9dicis" },
        {
          label: "Tycho Brahe et l'astrologie, The Starry Messenger, université de Cambridge (en anglais)",
          href: "https://www.sites.hps.cam.ac.uk/starry/tychoastrol.html",
        },
        { label: "Johannes Kepler, Wikipédia", href: "https://fr.wikipedia.org/wiki/Kepler" },
      ],
    },
    "rupture-scientifique": {
      heading: "La révolution scientifique : astronomie et astrologie se séparent",
      period: "vers 1543 – 1750",
      summary:
        "De Copernic à Newton, le ciel change de nature : la Terre tourne autour du Soleil, et les planètes deviennent des corps soumis aux mêmes lois que les pierres. L'astrologie perd sa place dans les universités et les académies, mais reste vivante dans les almanachs.",
      details: [
        {
          kind: "p",
          text: "En 1543, Copernic place le Soleil au centre du monde ; il avait pourtant été formé à Bologne, à la fin des années 1490, auprès de Domenico Maria Novara, astronome et astrologue. En 1572 et en 1577, une étoile nouvelle et une comète, mesurées par Tycho Brahe, montrent que le ciel au-delà de la Lune n'est pas immuable.",
        },
        {
          kind: "p",
          text: "En 1610, Galilée publie ce que montre sa lunette : des montagnes sur la Lune, quatre satellites autour de Jupiter. Il dressait lui aussi des horoscopes : en 1609, il promit une longue vie au grand-duc de Toscane, qui mourut peu après. En 1687, Newton explique le mouvement des planètes par la seule gravitation universelle.",
        },
        {
          kind: "p",
          text: "Dans ce monde nouveau, rien n'explique comment les astres agiraient sur les destinées. L'astrologie quitte peu à peu l'enseignement des universités ; en France, l'Académie royale des sciences, fondée en 1666, ne la compte pas parmi ses disciplines, et une ordonnance royale de 1682 vise ceux qui font métier de deviner. Les almanachs, eux, continuent de circuler dans les campagnes, avec leurs prévisions du temps et leurs conseils pour semer ou se soigner.",
        },
      ],
      image: {
        key: "cellariusHemisphere",
        alt: "Carte du ciel gravée et coloriée : dans un grand cercle gradué, des saints, des rois, des anges, une barque et l'arche de Noé remplacent les figures habituelles des constellations ; des angelots portent le titre latin, et deux petits planisphères occupent les coins du bas.",
        caption:
          "Le ciel chrétien de Julius Schiller (1627), où les douze apôtres prennent la place des signes du zodiaque. L'atlas de Cellarius qui le reproduit en 1660 présente aussi, côte à côte, les systèmes de Ptolémée, de Copernic et de Tycho Brahe.",
      },
      sources: [
        { label: "Révolution copernicienne, Wikipédia", href: "https://fr.wikipedia.org/wiki/R%C3%A9volution_copernicienne" },
        { label: "Harmonia Macrocosmica, Wikipédia", href: "https://fr.wikipedia.org/wiki/Harmonia_Macrocosmica" },
        {
          label: "L'astrologie au XVIIe siècle : déterminisme astral ou charlatanisme, Afis",
          href: "https://www.afis.org/L-astrologie-au-XVIIe-siecle-determinisme-astral-ou-charlatanisme",
        },
        {
          label: "Astrologie : marginalisation et objectivation, Encyclopædia Universalis",
          href: "https://www.universalis.fr/encyclopedie/astrologie/2-marginalisation-et-objectivation/",
        },
      ],
    },
    "xxe-siecle": {
      heading: "Le XXe siècle : psychologie, presse et applications",
      period: "vers 1890 – aujourd'hui",
      summary:
        "À la fin du XIXe siècle, l'astrologie renaît en Angleterre avec Alan Leo, qui en fait un outil de connaissance de soi plus que de prédiction. Au XXe siècle, elle devient psychologique avec Jung et Rudhyar, populaire avec l'horoscope des journaux, puis numérique avec les applications.",
      details: [
        {
          kind: "p",
          text: "Alan Leo (1860-1917), astrologue anglais et membre de la Société théosophique, simplifie la doctrine et met l'accent sur le caractère plutôt que sur les événements. Ses revues et ses livres se diffusent largement ; poursuivi en vertu d'une loi contre les diseurs de bonne aventure, il est relaxé en 1914, puis condamné à une amende en 1917.",
        },
        {
          kind: "p",
          text: "Le psychiatre suisse Carl Gustav Jung rapproche les symboles astrologiques de ceux de la psyché ; en 1952, son essai sur la synchronicité comprend une étude statistique de thèmes de couples mariés. En 1936, Dane Rudhyar publie à New York The Astrology of Personality : pour lui, les astres ne sont pas des causes, mais des symboles qui accompagnent la vie intérieure.",
        },
        {
          kind: "p",
          text: "Le 24 août 1930, trois jours après la naissance de la princesse Margaret, le Sunday Express publie ce que les astres lui réservent, sous la plume de R. H. Naylor. Le succès vaut à l'astrologue une chronique régulière, bientôt découpée en douze rubriques, une par signe solaire : l'horoscope de presse est né, et il gagne les journaux du monde entier.",
        },
        {
          kind: "p",
          text: "Aujourd'hui, des applications pour téléphone calculent un thème en quelques secondes et envoient chaque jour un message. Dans le même temps, aucun test n'a trouvé d'effet des astres qui résiste aux vérifications : la page Ce que dit la science les présente.",
        },
      ],
      image: {
        key: "flammarion",
        alt: "Gravure en noir et blanc dans un cadre orné : un voyageur à genoux, bâton à la main, passe la tête à travers la voûte étoilée du ciel, là où elle touche la terre, et découvre au-delà des nuées, des cercles et des roues ; à droite, un paysage avec un arbre, des villages et un Soleil à visage humain.",
        caption:
          "Gravure d'auteur inconnu parue en 1888 dans un livre de Camille Flammarion : prise à tort pour une image médiévale, elle a été reproduite tout au long du XXe siècle, jusque dans les livres d'astrologie.",
      },
      sources: [
        { label: "Alan Leo, Wikipédia", href: "https://fr.wikipedia.org/wiki/Alan_Leo" },
        { label: "Dane Rudhyar, Wikipédia", href: "https://fr.wikipedia.org/wiki/Dane_Rudhyar" },
        { label: "R. H. Naylor, Wikipédia (en anglais)", href: "https://en.wikipedia.org/wiki/R._H._Naylor" },
        { label: "Gravure sur bois de Flammarion, Wikipédia", href: "https://fr.wikipedia.org/wiki/Gravure_sur_bois_de_Flammarion" },
      ],
    },
  },
};
