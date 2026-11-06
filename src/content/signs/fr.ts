import type { SignsContent } from "./types";

/** Textes des douze signes, de leur page d'index et des notions communes (éléments, modalités, polarité, cuspides). */
export const SIGNS_FR: SignsContent = {
  index: {
    title: "Les douze signes",
    lead: "Du Bélier aux Poissons, douze signes de 30° se partagent le cercle du zodiaque : voici ce que la tradition astrologique leur associe, et ce que montre le ciel réel.",
    intro: {
      summary:
        "Un signe du zodiaque est une portion de 30° de l'écliptique, le chemin que le Soleil semble parcourir dans le ciel en un an. Le zodiaque des astrologues occidentaux, dit tropical, part de l'équinoxe de mars ; il ne coïncide plus avec les constellations qui portent les mêmes noms.",
      details: [
        {
          kind: "p",
          text: "Vu de la Terre, le Soleil paraît faire le tour du ciel en un an, devant un fond d'étoiles. Les astronomes de Babylone, puis les Grecs, ont découpé ce grand cercle en douze parts égales et leur ont donné le nom des constellations voisines : le Soleil passe ainsi environ un mois dans chaque signe.",
        },
        {
          kind: "p",
          text: "Le zodiaque tropical est calé sur les saisons. Son point de départ, 0° du Bélier, est la position du Soleil à l'équinoxe de mars, appelée point vernal. Le Cancer commence au solstice de juin, la Balance à l'équinoxe de septembre et le Capricorne au solstice de décembre.",
        },
        {
          kind: "p",
          text: "Les constellations, elles, sont des dessins d'étoiles de tailles très inégales, dont l'Union astronomique internationale a fixé les limites en 1930. Le Soleil en traverse treize, dont Ophiuchus. Surtout, la précession des équinoxes, un lent mouvement de l'axe de la Terre, a décalé les signes d'environ une constellation depuis l'Antiquité. L'astrologie indienne, elle, emploie un zodiaque sidéral, calé sur les étoiles.",
        },
      ],
    },
  },

  elements: {
    fire: {
      heading: "Le feu",
      summary:
        "Le Bélier, le Lion et le Sagittaire forment la triplicité de feu. La tradition associe à cet élément l'élan, l'enthousiasme, le courage et le besoin d'agir.",
      details: [
        {
          kind: "p",
          text: "Les quatre éléments viennent de la philosophie grecque : Empédocle voyait dans le feu, l'air, l'eau et la terre les racines de toute chose, et Aristote leur attribua des qualités. Le feu est chaud et sec, comme une flamme qui s'élève et consume.",
        },
        {
          kind: "p",
          text: "Les astrologues lisent dans les signes de feu une énergie tournée vers l'avant : spontanéité, confiance, goût de l'aventure et de la création. Le Bélier en serait l'étincelle, le Lion le foyer qui rayonne, le Sagittaire l'incendie qui se propage. Leurs excès supposés : l'impatience et l'emportement.",
        },
      ],
      keywords: ["l'élan", "l'enthousiasme", "le courage", "la spontanéité", "l'inspiration"],
    },
    earth: {
      heading: "La terre",
      summary:
        "Le Taureau, la Vierge et le Capricorne forment la triplicité de terre. La tradition y associe le sens du concret, la patience et le goût de bâtir sur du solide.",
      details: [
        {
          kind: "p",
          text: "Pour la physique antique, la terre est froide et sèche : c'est l'élément le plus dense, celui qui donne forme et stabilité. Les signes de terre sont, pour les astrologues, ceux de la matière, du corps, du travail et des réalités pratiques.",
        },
        {
          kind: "p",
          text: "Le Taureau en serait la terre fertile, la Vierge la terre cultivée et moissonnée, le Capricorne la montagne et la roche. On leur prête prudence, persévérance et fiabilité ; leur revers serait une certaine lenteur, voire la crainte du changement.",
        },
      ],
      keywords: ["le sens du concret", "la patience", "la stabilité", "le sens pratique", "la persévérance"],
    },
    air: {
      heading: "L'air",
      summary:
        "Les Gémeaux, la Balance et le Verseau forment la triplicité d'air. La tradition associe à cet élément les idées, la parole, l'échange et les relations.",
      details: [
        {
          kind: "p",
          text: "Dans la physique d'Aristote, l'air est chaud et humide : il circule, relie et emplit l'espace. Les signes d'air sont ceux de la pensée et de la communication, de tout ce qui passe d'une personne à l'autre.",
        },
        {
          kind: "p",
          text: "Les Gémeaux en seraient la brise vive des conversations, la Balance l'air partagé de la relation, le Verseau le grand vent des idées collectives. Les astrologues leur prêtent curiosité, sociabilité et ouverture d'esprit ; leur travers serait de vivre dans les idées plus que dans les émotions.",
        },
      ],
      keywords: ["la curiosité", "l'échange", "la sociabilité", "la réflexion", "la légèreté"],
    },
    water: {
      heading: "L'eau",
      summary:
        "Le Cancer, le Scorpion et les Poissons forment la triplicité d'eau. La tradition associe à cet élément la sensibilité, l'émotion, l'intuition et l'imagination.",
      details: [
        {
          kind: "p",
          text: "Pour les Anciens, l'eau est froide et humide : elle épouse les formes, s'infiltre partout et relie ce qu'elle touche. Les signes d'eau sont ceux de la vie émotionnelle, de la mémoire et des liens profonds.",
        },
        {
          kind: "p",
          text: "Le Cancer en serait la source et le foyer, le Scorpion l'eau profonde et secrète, les Poissons l'océan sans rivage. Les astrologues leur prêtent empathie, intuition et créativité ; leur revers serait une grande perméabilité aux humeurs et une difficulté à se protéger.",
        },
      ],
      keywords: ["la sensibilité", "l'émotion", "l'intuition", "l'empathie", "l'imagination"],
    },
  },

  modalities: {
    cardinal: {
      heading: "Les signes cardinaux",
      summary:
        "Le Bélier, le Cancer, la Balance et le Capricorne ouvrent chacun une saison. La tradition y voit l'initiative, l'impulsion et l'art de lancer les choses.",
      details: [
        {
          kind: "p",
          text: "Ils commencent aux équinoxes et aux solstices : le printemps avec le Bélier, l'été avec le Cancer, l'automne avec la Balance, l'hiver avec le Capricorne, dans l'hémisphère nord. Au sud de l'équateur, les saisons sont inversées, mais les signes gardent leur nom et leur symbolique.",
        },
        {
          kind: "p",
          text: "Ptolémée, au IIe siècle, appelait le Cancer et le Capricorne signes « tropiques », parce que le Soleil y rebrousse chemin, et le Bélier et la Balance signes « équinoxiaux ». Les astrologues modernes leur associent le goût de l'action et du commencement ; leur travers serait de lancer plus qu'ils n'achèvent.",
        },
      ],
      keywords: ["l'initiative", "l'impulsion", "le sens de l'action", "l'esprit d'entreprise"],
    },
    fixed: {
      heading: "Les signes fixes",
      summary:
        "Le Taureau, le Lion, le Scorpion et le Verseau occupent le cœur des saisons. La tradition y associe la constance, la stabilité et la ténacité.",
      details: [
        {
          kind: "p",
          text: "Quand le Soleil les traverse, la saison est bien installée : le printemps fleurit, l'été brûle, l'automne dépouille les arbres, l'hiver gèle, du moins dans l'hémisphère nord. Ptolémée les qualifiait de « solides », parce que la saison y est alors la plus affirmée.",
        },
        {
          kind: "p",
          text: "Les astrologues voient dans les signes fixes une énergie qui dure et qui protège ce qui a été commencé : loyauté, persévérance, capacité de concentration. Leur revers supposé : l'entêtement et la résistance au changement.",
        },
      ],
      keywords: ["la constance", "la stabilité", "la ténacité", "la loyauté", "la concentration"],
    },
    mutable: {
      heading: "Les signes mutables",
      summary:
        "Les Gémeaux, la Vierge, le Sagittaire et les Poissons terminent chacun une saison et préparent la suivante. La tradition y voit l'adaptation, la souplesse et le mouvement.",
      details: [
        {
          kind: "p",
          text: "Ils accompagnent les transitions : fin du printemps, de l'été, de l'automne et de l'hiver dans l'hémisphère nord. Ptolémée les appelait « bicorporels », signes à deux corps, parce qu'ils participent de deux saisons ; leurs figures sont d'ailleurs souvent doubles, comme les deux jumeaux, les deux poissons ou le centaure mi-homme mi-cheval.",
        },
        {
          kind: "p",
          text: "Les astrologues leur prêtent polyvalence, curiosité et sens du changement ; leur revers serait l'éparpillement ou l'indécision. On les nomme aussi signes « doubles » ou « communs ».",
        },
      ],
      keywords: ["l'adaptabilité", "la souplesse", "la polyvalence", "l'ouverture au changement"],
    },
  },

  polarity: {
    heading: "Masculin et féminin, jour et nuit",
    summary:
      "La tradition alterne les signes : un masculin, un féminin, en partant du Bélier. Les signes de feu et d'air sont dits masculins et diurnes, ceux de terre et d'eau féminins et nocturnes. Ces mots désignent des qualités symboliques, pas le genre des personnes.",
    details: [
      {
        kind: "p",
        text: "Cette répartition remonte à l'astrologie hellénistique ; Ptolémée l'expose au IIe siècle dans la Tétrabible. Les signes masculins, associés au jour et au Soleil, figurent une énergie tournée vers l'extérieur ; les signes féminins, associés à la nuit et à la Lune, une énergie tournée vers l'intérieur.",
      },
      {
        kind: "p",
        text: "Les astrologues d'aujourd'hui parlent plus volontiers de signes actifs et réceptifs, de yang et de yin, ou encore de signes positifs et négatifs, sans jugement de valeur. Tous ces mots cherchent à dire la même chose : deux façons complémentaires d'entrer en relation avec le monde.",
      },
      {
        kind: "list",
        items: [
          "Masculins et diurnes : Bélier, Gémeaux, Lion, Balance, Sagittaire, Verseau.",
          "Féminins et nocturnes : Taureau, Cancer, Vierge, Scorpion, Capricorne, Poissons.",
        ],
      },
    ],
  },

  cusps: {
    heading: "Né sur la cuspide ?",
    summary:
      "Le Soleil ne change pas de signe exactement à la même date chaque année : l'écart peut atteindre un jour. Pour une naissance proche d'un changement de signe, seule la position exacte du Soleil, calculée d'après la date, l'heure et le lieu, permet de trancher.",
    details: [
      {
        kind: "p",
        text: "L'année du calendrier ne correspond pas exactement à l'année des saisons, qui dure environ 365 jours, 5 heures et 49 minutes. L'entrée du Soleil dans un signe survient donc chaque année environ six heures plus tard que la précédente, jusqu'à ce qu'une année bissextile la ramène en arrière. S'y ajoutent les fuseaux horaires : un même instant peut tomber le 20 mars à Paris et le 21 à Tokyo.",
      },
      {
        kind: "p",
        text: "On dit d'une personne née à cette frontière qu'elle est « née sur la cuspide ». Pour l'astrologie, le Soleil se trouve pourtant toujours dans un signe ou dans l'autre, à un degré précis. Certains astrologues estiment que les tout derniers et les tout premiers degrés mêlent les deux tonalités, mais le signe solaire reste celui qu'indique le calcul.",
      },
      {
        kind: "p",
        text: "Le mot « cuspide » vient du latin cuspis, la pointe. Il désigne aussi le début de chacune des douze maisons d'un thème.",
      },
    ],
  },

  signs: {
    aries: {
      tagline:
        "Premier signe du zodiaque, le Bélier ouvre le printemps : la tradition y voit l'élan du départ, le courage et le goût de l'initiative.",
      intro: {
        summary:
          "Le Bélier est le premier signe du zodiaque : il commence à l'équinoxe de mars, quand le Soleil franchit l'équateur céleste vers le nord. Signe de feu et cardinal, gouverné par Mars, il symbolise selon la tradition l'élan, l'initiative et la force du commencement.",
        details: [
          {
            kind: "p",
            text: "Ses 30° couvrent le premier douzième de l'écliptique, à partir du point vernal. Les astrologues y lisent l'énergie du printemps qui revient : la graine qui perce, le premier pas, l'action qui précède la réflexion. Ces images relèvent d'une tradition symbolique transmise depuis l'Antiquité : elles décrivent un langage, pas un destin.",
          },
        ],
      },
      keywords: ["l'élan", "le courage", "l'initiative", "la franchise", "l'enthousiasme", "l'indépendance"],
      shadowKeywords: ["l'impatience", "l'impulsivité", "l'emportement", "l'esprit de rivalité"],
      bodyPart: "la tête",
      brightestStarName: "Hamal",
      imageAlt:
        "Carte gravée et coloriée d'Urania's Mirror : un bélier couché, à la toison bouclée et aux cornes dorées enroulées, surmonté d'une mouche, l'ancienne constellation de la Mouche boréale ; les étoiles, percées dans le carton, portent leur nom.",
      sections: {
        caractere: {
          heading: "Caractère selon la tradition",
          summary:
            "La tradition fait du Bélier le signe du premier pas : il agit vite, parle franchement et aime ouvrir la voie. Ses travers sont le revers de cet élan : impatience, emportement, difficulté à finir ce qu'il commence.",
          details: [
            {
              kind: "p",
              text: "Les manuels d'astrologie décrivent un tempérament direct, qui préfère l'action aux longues discussions. On lui prête du courage devant l'obstacle, un goût sincère pour les défis et une forme d'innocence : le Bélier dirait ce qu'il pense, sans calcul, et oublierait vite les querelles.",
            },
            {
              kind: "p",
              text: "Le même feu peut tourner à la brusquerie. Les astrologues évoquent une colère prompte mais brève, une impatience devant la lenteur des autres et une tendance à lancer dix projets sans en mener aucun à terme. L'esprit de compétition, stimulant, glisse parfois vers la rivalité.",
            },
            {
              kind: "p",
              text: "Ces portraits restent des archétypes. Dans un thème réel, le Bélier se mêle à d'autres signes et à d'autres astres qui tempèrent ou renforcent ses traits ; aucune de ces tendances n'est présentée comme une fatalité.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Le Bélier dans un thème",
          summary:
            "Un même signe ne joue pas le même rôle selon l'astre ou le point qui l'occupe. Les astrologues distinguent surtout trois positions : le Soleil, la Lune et l'Ascendant.",
          details: [
            {
              kind: "list",
              items: [
                "Le Soleil dans le Bélier : c'est le signe solaire, celui des horoscopes. Le Soleil y est exalté, et la tradition y voit une identité qui se construit dans l'action et le défi, avec le besoin de se sentir à l'origine des choses.",
                "La Lune dans le Bélier : la Lune parle des émotions et des besoins intimes. Ici, les réactions seraient vives et immédiates, les humeurs franches, la colère aussi rapide à monter qu'à retomber.",
                "L'Ascendant dans le Bélier : c'est le signe qui se levait à l'horizon est à l'heure de la naissance. On lui associe une allure décidée, une impression d'énergie et une manière d'aborder la vie de front.",
              ],
            },
            {
              kind: "p",
              text: "Le Soleil change de signe environ une fois par mois, la Lune tous les deux jours et demi, l'Ascendant en moyenne toutes les deux heures : d'où l'importance de l'heure de naissance.",
            },
          ],
        },
        symbolique: {
          heading: "Des cornes et un printemps",
          summary:
            "Le glyphe du Bélier dessine deux cornes recourbées qui jaillissent d'une même tige. Signe cardinal, il ouvre le printemps dans l'hémisphère nord et l'automne dans l'hémisphère sud.",
          details: [
            {
              kind: "p",
              text: "Ce trait en forme de V aux extrémités enroulées évoque la tête du bélier vue de face. On y voit aussi une pousse qui sort de terre, ou un jet d'eau : l'image d'une force qui surgit d'un point unique et se déploie.",
            },
            {
              kind: "p",
              text: "Le Soleil entre dans le Bélier à l'équinoxe de mars, quand le jour et la nuit sont à peu près égaux, avant que les jours l'emportent. Au sud de l'équateur, ce même moment marque le début de l'automne : la symbolique des saisons, née autour de la Méditerranée, s'y trouve inversée.",
            },
            {
              kind: "p",
              text: "Feu et cardinal, le Bélier unit l'ardeur à l'élan du commencement ; il est masculin et diurne, comme tous les signes de feu. Dans la mélothésie, qui répartit le corps entre les signes de la tête aux pieds, il gouverne la tête : le poète latin Manilius le notait déjà au Ier siècle.",
            },
          ],
        },
        mythe: {
          heading: "Le mythe de la toison d'or",
          summary:
            "La constellation représente le bélier à la toison d'or qui sauva Phrixos et Hellé, menacés par leur belle-mère Ino. C'est cette toison que Jason et les Argonautes iront plus tard chercher en Colchide.",
          details: [
            {
              kind: "p",
              text: "Le roi Athamas avait deux enfants de Néphélé, la Nuée. Sa seconde épouse, Ino, fit griller les semences pour provoquer une famine, puis soudoya les messagers envoyés à Delphes : l'oracle exigerait le sacrifice de Phrixos. Au moment où l'enfant allait être immolé, Néphélé envoya un bélier à la toison d'or.",
            },
            {
              kind: "p",
              text: "Phrixos et sa sœur Hellé s'envolèrent sur son dos vers l'est. Hellé lâcha prise au-dessus du détroit qui sépare l'Europe de l'Asie et s'y noya : les Grecs l'appelèrent Hellespont, la « mer d'Hellé », aujourd'hui les Dardanelles. Phrixos atteignit la Colchide, au bord de la mer Noire, sacrifia le bélier à Zeus et remit la toison au roi Éétès.",
            },
            {
              kind: "p",
              text: "Selon Hygin, c'est Néphélé qui plaça l'animal parmi les étoiles ; Ératosthène raconte qu'il y monta de lui-même après avoir laissé sa toison sur terre, ce qui expliquerait la faible lueur de la constellation. Ovide évoque aussi l'épisode dans les Fastes.",
            },
          ],
        },
        maitrises: {
          heading: "Le domaine de Mars",
          summary:
            "Mars, l'astre de l'action et du combat, est le maître du Bélier pour les anciens comme pour les modernes. Le Soleil y est exalté, Vénus y est en exil et Saturne en chute.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile : Mars gouverne le Bélier, comme il gouverne le Scorpion dans la tradition. Les astrologues y voient un astre « chez lui », qui agit sans entrave.",
                "Exaltation : le Soleil, exalté à 19° du Bélier. Au printemps, la lumière gagne sur la nuit, et la tradition y voit l'astre du jour à son meilleur.",
                "Exil : Vénus, maîtresse de la Balance, le signe opposé. L'astre de l'accord et de la douceur s'y trouverait loin de sa nature.",
                "Chute : Saturne, exalté dans la Balance, est en chute dans le Bélier : la prudence et la lenteur saturniennes s'accordent mal avec la hâte du signe.",
              ],
            },
            {
              kind: "p",
              text: "Ces dignités forment un système cohérent : l'exil est toujours le signe opposé au domicile, la chute le signe opposé à l'exaltation.",
            },
          ],
        },
        decans: {
          heading: "Les trois décans du Bélier",
          summary:
            "Chaque signe se divise en trois décans de 10°. Deux systèmes les colorent : la face, confiée à un astre selon l'ordre chaldéen, et le signe de triplicité, emprunté aux trois signes de feu.",
          details: [
            {
              kind: "list",
              items: [
                "De 0° à 10° : face de Mars, triplicité du Bélier. Mars y règne deux fois : c'est le décan le plus « pur », où le signe ne rencontre que lui-même.",
                "De 10° à 20° : face du Soleil, triplicité du Lion, domicile du Soleil. La tradition y place plus d'éclat et de fierté.",
                "De 20° à 30° : face de Vénus, triplicité du Sagittaire, signe de Jupiter. L'élan s'y ferait plus aimable et plus aventureux.",
              ],
            },
            {
              kind: "p",
              text: "Les décans viennent de l'Égypte ancienne, où 36 groupes d'étoiles, levés à dix jours d'intervalle, servaient à mesurer les heures de la nuit. Les astrologues grecs en firent des tranches de signe. La face suit l'ordre chaldéen des sept astres, de Saturne à la Lune, en commençant par Mars au début du Bélier.",
            },
            {
              kind: "p",
              text: "Le système par triplicité, plus récent et proche de celui de l'astrologie indienne, attribue le premier décan au signe lui-même, puis les deux suivants aux autres signes du même élément.",
            },
          ],
        },
        constellation: {
          heading: "La constellation du Bélier",
          summary:
            "La constellation du Bélier couvre 441,4 degrés carrés, au 39e rang des 88 constellations. Son étoile la plus brillante, Hamal (α Arietis), atteint la magnitude 2 : plus ce nombre est petit, plus l'étoile est brillante.",
          details: [
            {
              kind: "p",
              text: "Discrète, la figure se repère surtout à trois étoiles en ligne brisée qui dessinent la tête de l'animal ; Hamal tient son nom de l'arabe al-hamal, « l'agneau ». On l'observe le mieux en soirée, de l'automne au début de l'hiver, juste au sud de la petite constellation du Triangle, à l'ouest des Pléiades.",
            },
            {
              kind: "p",
              text: "Vers 130 avant notre ère, à l'époque de l'astronome grec Hipparque, le point vernal se trouvait dans le Bélier : on l'appelle encore « point gamma », parce que le glyphe du signe ressemble à la lettre grecque γ. Depuis, la précession des équinoxes, un lent pivotement de l'axe de la Terre d'environ un degré tous les 72 ans, l'a déplacé de près de 30° : il se trouve aujourd'hui dans les Poissons.",
            },
            {
              kind: "p",
              text: "Conséquence : le Soleil traverse aujourd'hui la constellation du Bélier environ un mois après les dates du signe. Le signe est une tranche de 30° calée sur les saisons, la constellation un dessin d'étoiles aux limites officielles.",
            },
          ],
        },
      },
    },

    taurus: {
      tagline:
        "Deuxième signe, le Taureau installe le printemps : la tradition l'associe à la stabilité, à la patience et au goût des plaisirs simples.",
      intro: {
        summary:
          "Deuxième signe du zodiaque, le Taureau occupe le cœur du printemps boréal. Signe de terre et fixe, gouverné par Vénus, il évoque selon la tradition la constance, le sens du concret et l'attachement aux choses qui durent.",
        details: [
          {
            kind: "p",
            text: "Après l'élan du Bélier vient le temps de l'enracinement : les champs verdissent, la terre nourrit. Les astrologues associent au Taureau la jouissance des sens, la patience du jardinier et une force tranquille, lente à s'émouvoir mais difficile à déplacer. Ce portrait appartient à une tradition symbolique et ne prétend pas décrire une personne réelle.",
          },
        ],
      },
      keywords: ["la stabilité", "la patience", "la persévérance", "la sensualité", "le sens du concret", "la fidélité", "le calme"],
      shadowKeywords: ["l'entêtement", "la possessivité", "la résistance au changement", "l'inertie"],
      bodyPart: "la gorge et le cou",
      brightestStarName: "Aldébaran",
      imageAlt:
        "Carte gravée et coloriée d'Urania's Mirror : l'avant d'un taureau gris sombre, tête baissée, longues cornes pointées et pattes repliées ; l'amas des Pléiades est posé sur son épaule et Aldébaran brille près de son œil, parmi des étoiles percées.",
      sections: {
        caractere: {
          heading: "Caractère selon la tradition",
          summary:
            "Le Taureau est décrit comme un signe calme et endurant, qui avance à son rythme et bâtit pour longtemps. La même solidité peut virer à l'obstination ou à la possessivité.",
          details: [
            {
              kind: "p",
              text: "La tradition lui prête un rapport sensuel au monde : goût de la bonne table, de la musique, des belles matières et des paysages. On le dit fidèle en amitié comme en amour, prudent avec l'argent, attaché à la sécurité matérielle et peu enclin aux changements brusques.",
            },
            {
              kind: "p",
              text: "Revers de ces qualités : une lenteur qui exaspère les impatients, un entêtement légendaire une fois la décision prise, et l'envie de garder pour soi ce que l'on aime, objets ou personnes. Les astrologues ajoutent que sa colère, rare, n'en serait que plus impressionnante.",
            },
            {
              kind: "p",
              text: "Ces traits composent un archétype, celui de la terre fertile et stable. Ils prennent une autre couleur selon les autres positions du thème, qui peuvent les accélérer, les alléger ou les approfondir.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Le Taureau dans un thème",
          summary:
            "Le signe se lit différemment selon qu'il accueille le Soleil, la Lune ou l'Ascendant. Dans les trois cas, la tradition retient le besoin de durée et de concret.",
          details: [
            {
              kind: "p",
              text: "Avec le Soleil dans le Taureau, les astrologues décrivent une volonté patiente, qui s'affirme en construisant : la personnalité se forgerait dans ce qui se touche, se cultive et se garde.",
            },
            {
              kind: "p",
              text: "La Lune y est exaltée, ce qui en fait, selon la tradition, l'une de ses meilleures positions : le monde affectif chercherait la paix, le confort et la tendresse, avec un grand besoin de stabilité. Les émotions y seraient profondes mais rarement orageuses.",
            },
            {
              kind: "p",
              text: "L'Ascendant, signe qui se levait à l'est au moment de la naissance, colore la manière d'aborder les autres. En Taureau, il évoquerait une présence calme, une allure posée et un abord rassurant, parfois réservé au premier contact.",
            },
          ],
        },
        symbolique: {
          heading: "La tête du taureau",
          summary:
            "Le glyphe du Taureau associe un cercle et un arc posé dessus : la tête de l'animal et ses cornes. Signe fixe, il correspond au milieu du printemps dans l'hémisphère nord.",
          details: [
            {
              kind: "p",
              text: "Le cercle figure la tête, l'arc les cornes en forme de lyre. Certains y voient aussi un soleil surmonté d'un croissant de lune, image de fertilité que rend parlante l'exaltation de la Lune dans ce signe.",
            },
            {
              kind: "p",
              text: "Le Soleil traverse le Taureau quand le printemps boréal s'installe pour de bon : la végétation s'épanouit, les jours s'allongent nettement. Dans l'hémisphère sud, la même période correspond au milieu de l'automne.",
            },
            {
              kind: "p",
              text: "Terre et fixe, il réunit la matière et la constance : c'est, pour la tradition, le plus stable des signes. Féminin et nocturne, comme tous les signes de terre, il gouverne la gorge et le cou dans la mélothésie, ce qui le rattache aussi à la voix et au chant.",
            },
          ],
        },
        mythe: {
          heading: "L'enlèvement d'Europe",
          summary:
            "Le Taureau céleste est le plus souvent identifié à Zeus métamorphosé en taureau blanc pour enlever Europe, une princesse phénicienne. Seul l'avant de l'animal est dessiné dans le ciel.",
          details: [
            {
              kind: "p",
              text: "Europe, fille d'Agénor, roi de Tyr, jouait sur le rivage avec ses compagnes. Zeus prit l'apparence d'un taureau d'une blancheur éclatante et se mêla au troupeau du roi. Séduite par sa douceur, la jeune fille orna ses cornes de fleurs et monta sur son dos : l'animal s'élança alors dans les flots et la porta jusqu'en Crète.",
            },
            {
              kind: "p",
              text: "Là, Zeus reprit sa forme divine ; Europe devint la mère de Minos, futur roi de Crète. Ovide raconte la scène à la fin du deuxième livre des Métamorphoses, et Hygin écrit que le taureau fut placé parmi les étoiles pour avoir mené Europe saine et sauve en Crète.",
            },
            {
              kind: "p",
              text: "Hygin signale une autre lecture : la constellation rappellerait Io, aimée de Zeus et changée en génisse. Quant à l'arrière du taureau, absent de la figure, on l'imagine plongé dans les vagues.",
            },
          ],
        },
        maitrises: {
          heading: "Vénus chez elle",
          summary:
            "Vénus, l'astre de l'harmonie et des plaisirs, gouverne le Taureau. La Lune y trouve son exaltation, Mars y est en exil ; aucun astre n'y tombe en chute.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile : Vénus, qui gouverne aussi la Balance. Dans le Taureau, elle prendrait son visage le plus terrestre : goût du beau, du confort et des sens.",
                "Exaltation : la Lune, exaltée à 3° du Taureau. La tradition y voit l'astre des émotions apaisé par la stabilité du signe.",
                "Exil : Mars, maître traditionnel du Scorpion, le signe opposé, et Pluton pour les astrologues modernes. L'énergie combative s'y trouverait freinée.",
                "Chute : aucune. La chute est le signe opposé à une exaltation ; or la tradition ne place aucune exaltation dans le Scorpion.",
              ],
            },
            {
              kind: "p",
              text: "Domicile et exaltation sont les deux grandes « dignités », exil et chute leurs contraires : un astre y serait plus ou moins à l'aise pour exprimer sa nature.",
            },
          ],
        },
        decans: {
          heading: "Les trois décans du Taureau",
          summary:
            "Les trois tranches de 10° du Taureau reçoivent chacune un astre, selon l'ordre chaldéen, et un signe de terre, selon le système par triplicité.",
          details: [
            {
              kind: "list",
              items: [
                "De 0° à 10° : face de Mercure, triplicité du Taureau, sous Vénus. Le décan le plus typique du signe.",
                "De 10° à 20° : face de la Lune, triplicité de la Vierge, sous Mercure. La constance s'y ferait plus méthodique.",
                "De 20° à 30° : face de Saturne, triplicité du Capricorne, sous Saturne. Saturne y tient les deux rôles, et la tradition y lit plus d'ambition et de sérieux.",
              ],
            },
            {
              kind: "p",
              text: "Les faces prolongent la séquence entamée au Bélier : après Mars, le Soleil et Vénus viennent Mercure, la Lune et Saturne. Pour les astrologues hellénistiques puis médiévaux, la face était une dignité mineure : un astre placé dans sa face y gardait un peu d'appui.",
            },
            {
              kind: "p",
              text: "Le système par triplicité, répandu chez les astrologues modernes, nuance le signe par les deux autres signes de terre, sans changer sa nature profonde.",
            },
          ],
        },
        constellation: {
          heading: "La constellation du Taureau",
          summary:
            "Vaste de 797,2 degrés carrés, le Taureau est l'une des constellations les plus riches du ciel d'hiver. Son étoile la plus brillante, Aldébaran (α Tauri), atteint la magnitude 0,86 et marque l'œil orangé de l'animal.",
          details: [
            {
              kind: "p",
              text: "Aldébaran, « celle qui suit » en arabe, semble poursuivre les Pléiades dans leur course. Elle paraît appartenir au V des Hyades, l'amas qui dessine la face du taureau, mais elle est deux fois plus proche de nous que lui. Les Pléiades, les « Sept Sœurs », brillent sur son épaule ; près de la pointe d'une corne se cache la nébuleuse du Crabe, reste d'une étoile dont l'explosion fut observée en 1054.",
            },
            {
              kind: "p",
              text: "La constellation se voit en soirée tout l'hiver, au-dessus et à droite d'Orion. La précession des équinoxes a décalé le ciel : le Soleil traverse aujourd'hui les étoiles du Taureau environ un mois après les dates du signe. Il s'y trouve même au solstice de juin, qui tombait autrefois dans le Cancer.",
            },
          ],
        },
      },
    },

    gemini: {
      tagline:
        "Troisième signe, les Gémeaux ferment le printemps : la tradition y voit la curiosité, l'échange et un esprit vif, toujours en mouvement.",
      intro: {
        summary:
          "Les Gémeaux sont le troisième signe du zodiaque, celui qui conduit le printemps vers l'été. Signe d'air et mutable, gouverné par Mercure, il symbolise pour les astrologues la parole, la curiosité et le goût des liens.",
        details: [
          {
            kind: "p",
            text: "Deux jumeaux lui donnent son nom, et la dualité traverse toute sa symbolique : deux points de vue, deux envies, deux conversations à la fois. La tradition y associe l'apprentissage, les courts voyages, les frères et sœurs et tout ce qui circule, des nouvelles aux idées. Ces correspondances forment un vocabulaire symbolique, pas un diagnostic.",
          },
        ],
      },
      keywords: ["la curiosité", "la vivacité d'esprit", "le sens de la communication", "l'adaptabilité", "l'humour", "la sociabilité"],
      shadowKeywords: ["la dispersion", "l'inconstance", "la superficialité", "la nervosité"],
      bodyPart: "les épaules, les bras et les poumons",
      brightestStarName: "Pollux",
      imageAlt:
        "Carte gravée et coloriée d'Urania's Mirror : deux jeunes garçons enlacés, l'un levant un arc et une flèche, l'autre tenant une massue, une lyre entre eux ; les étoiles Castor et Pollux, percées comme les autres, marquent leurs têtes.",
      sections: {
        caractere: {
          heading: "Caractère selon la tradition",
          summary:
            "Les Gémeaux passent, dans la tradition, pour le signe le plus curieux du zodiaque : vif, bavard, inventif, à l'aise partout. Leurs travers sont ceux d'un esprit qui butine : dispersion, inconstance, nervosité.",
          details: [
            {
              kind: "p",
              text: "On leur prête une intelligence rapide, qui saisit les idées au vol et les relie entre elles, un humour pétillant et un vrai talent pour la conversation. Les astrologues décrivent un signe jeune d'esprit, qui aime apprendre, comparer, essayer, et qui se lasse vite de la routine.",
            },
            {
              kind: "p",
              text: "Cette mobilité a son revers : l'attention se disperse, les projets s'enchaînent sans aboutir, l'avis change d'un jour à l'autre. La tradition évoque aussi une nervosité, une difficulté à s'engager dans la durée et, parfois, une légèreté qui peut blesser sans le vouloir.",
            },
            {
              kind: "p",
              text: "Aucune de ces tendances n'existe à l'état pur : selon les autres placements du thème, la curiosité des Gémeaux peut se faire studieuse, profonde ou très concrète.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Les Gémeaux dans un thème",
          summary:
            "Soleil, Lune ou Ascendant : chacun de ces trois repères donne aux Gémeaux une place différente dans la lecture d'un thème.",
          details: [
            {
              kind: "list",
              items: [
                "Le Soleil, cœur de la personnalité, y décrirait une identité qui se construit dans l'échange : parler, écrire, questionner, multiplier les rencontres.",
                "La Lune, miroir des émotions, y exprimerait le besoin de mettre des mots sur ce que l'on ressent ; l'humeur serait changeante, apaisée par la conversation et la nouveauté.",
                "L'Ascendant, signe de l'horizon est à la naissance, donnerait une allure juvénile, un regard mobile et un premier contact facile, souvent plein d'esprit.",
              ],
            },
            {
              kind: "p",
              text: "Mercure, maître des Gémeaux, prend alors une importance particulière : les astrologues regardent où il se trouve pour affiner l'interprétation. Un thème réunit toujours plusieurs signes, et ces descriptions s'y combinent.",
            },
          ],
        },
        symbolique: {
          heading: "Le chiffre deux",
          summary:
            "Le glyphe des Gémeaux ressemble au chiffre romain II : deux piliers reliés en haut et en bas. Signe mutable, il clôt le printemps dans l'hémisphère nord.",
          details: [
            {
              kind: "p",
              text: "Les deux traits verticaux figurent les jumeaux, les deux barres qui les unissent le lien qui les tient ensemble. On y lit la dualité, mais aussi le dialogue : deux pôles distincts qui communiquent sans se confondre.",
            },
            {
              kind: "p",
              text: "Le Soleil traverse les Gémeaux à la fin du printemps boréal, quand les jours s'allongent jusqu'au solstice. C'est un temps de transition, propre aux signes mutables, qui préparent le passage d'une saison à l'autre ; dans l'hémisphère sud, il correspond à la fin de l'automne.",
            },
            {
              kind: "p",
              text: "Air et mutable, les Gémeaux unissent la circulation des idées à la souplesse du changement. Masculins et diurnes, comme tous les signes d'air, ils gouvernent dans la mélothésie les épaules, les bras et les poumons : les membres qui saisissent et le souffle qui porte la parole.",
            },
          ],
        },
        mythe: {
          heading: "Castor et Pollux",
          summary:
            "Les Gémeaux célestes sont Castor et Pollux, les Dioscures, frères inséparables nés de Léda. L'un était mortel, l'autre immortel : leur histoire est celle d'une fraternité plus forte que la mort.",
          details: [
            {
              kind: "p",
              text: "Selon la version la plus répandue, Léda, reine de Sparte, conçut Pollux de Zeus et Castor de son époux Tyndare. Castor excellait à dompter les chevaux, Pollux au pugilat. Tous deux prirent part à l'expédition des Argonautes, et les marins les invoquaient contre les tempêtes.",
            },
            {
              kind: "p",
              text: "Un jour, ils affrontèrent deux autres frères, Idas et Lyncée, et Castor fut tué. Pollux, inconsolable, demanda à Zeus de partager son immortalité avec lui : les jumeaux furent placés ensemble parmi les étoiles. Ovide raconte ce combat dans les Fastes.",
            },
            {
              kind: "p",
              text: "Aratos parle seulement des « Jumeaux » ; Ératosthène y reconnaît les Dioscures. Hygin rapporte d'autres lectures, dont Héraclès et Apollon : c'est pourquoi certaines cartes, comme celle de cette page, donnent une lyre, un arc et une massue aux deux figures.",
            },
          ],
        },
        maitrises: {
          heading: "La maison de Mercure",
          summary:
            "Mercure, messager des dieux et astre de l'intelligence, gouverne les Gémeaux. Aucun astre n'y est exalté ni en chute ; Jupiter, maître du signe opposé, y est en exil.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile : Mercure, qui gouverne aussi la Vierge. Dans les Gémeaux, il serait tourné vers l'échange, la curiosité et la parole, plutôt que vers l'analyse.",
                "Exaltation : aucune dans la liste traditionnelle des sept astres. Cinq signes sont dans ce cas.",
                "Exil : Jupiter, maître du Sagittaire, le signe opposé. L'astre des grandes synthèses se sentirait à l'étroit dans un signe qui aime le détail et la variété.",
                "Chute : aucune, puisque le Sagittaire n'accueille lui-même aucune exaltation.",
              ],
            },
            {
              kind: "p",
              text: "Les astrologues lisent l'axe Gémeaux-Sagittaire comme celui du savoir : d'un côté l'information qui circule, de l'autre la recherche du sens.",
            },
          ],
        },
        decans: {
          heading: "Les trois décans des Gémeaux",
          summary:
            "Le signe se partage en trois décans de 10°, chacun doté d'une face planétaire et d'un signe d'air qui le colore.",
          details: [
            {
              kind: "list",
              items: [
                "De 0° à 10° : face de Jupiter, triplicité des Gémeaux, sous Mercure. L'esprit du signe y serait le plus concentré.",
                "De 10° à 20° : face de Mars, triplicité de la Balance, sous Vénus. La curiosité s'y teinterait de sens de l'harmonie.",
                "De 20° à 30° : face du Soleil, triplicité du Verseau, sous Saturne pour la tradition et Uranus pour les modernes. On y place plus d'originalité.",
              ],
            },
            {
              kind: "p",
              text: "Les faces suivent sans interruption l'ordre chaldéen (Saturne, Jupiter, Mars, le Soleil, Vénus, Mercure, la Lune), déroulé depuis le premier degré du Bélier. Elles sont héritées de l'astrologie hellénistique, qui avait repris les 36 décans égyptiens.",
            },
            {
              kind: "p",
              text: "La lecture par triplicité, plus moderne, ne remplace pas la première : elle ajoute à chaque tranche la nuance d'un autre signe d'air.",
            },
          ],
        },
        constellation: {
          heading: "La constellation des Gémeaux",
          summary:
            "La constellation des Gémeaux s'étend sur 513,8 degrés carrés. Son étoile la plus brillante est Pollux (β Geminorum), de magnitude 1,14, un peu plus éclatante que sa voisine Castor, pourtant notée α.",
          details: [
            {
              kind: "p",
              text: "Les deux étoiles marquent les têtes des jumeaux, mais elles ne sont pas liées : Pollux, une géante orangée, se trouve à environ 34 années-lumière, Castor à environ 51. Castor est en réalité un système de six étoiles. Johann Bayer, qui attribua les lettres grecques en 1603, ne les classa pas ici par éclat : d'où une étoile α moins brillante que la β.",
            },
            {
              kind: "p",
              text: "Les Gémeaux se repèrent en soirée de l'hiver au début du printemps, en haut à gauche d'Orion. En décembre, les étoiles filantes des Géminides semblent jaillir de cette région.",
            },
            {
              kind: "p",
              text: "La précession des équinoxes a décalé les signes par rapport aux étoiles : le Soleil passe aujourd'hui devant les Gémeaux environ un mois après les dates du signe, au début de l'été.",
            },
          ],
        },
      },
    },

    cancer: {
      tagline:
        "Quatrième signe, le Cancer ouvre l'été : la tradition y voit la sensibilité, la mémoire et le besoin de protéger ceux qu'on aime.",
      intro: {
        summary:
          "Le Cancer, quatrième signe du zodiaque, commence au solstice de juin, le jour le plus long de l'année dans l'hémisphère nord. Signe d'eau et cardinal, gouverné par la Lune, il symbolise selon la tradition le foyer, les racines et la vie émotionnelle.",
        details: [
          {
            kind: "p",
            text: "Le crabe qui lui donne son nom porte sa maison sur le dos et protège sous sa carapace un intérieur tendre : l'image résume ce que les astrologues lui associent. Famille, souvenirs, besoin d'un lieu à soi, attention aux autres : le Cancer est le signe de l'intime, présenté ici comme un symbole et non comme un trait de caractère imposé.",
          },
        ],
      },
      keywords: ["la sensibilité", "le sens de la protection", "la tendresse", "la mémoire", "l'intuition", "l'attachement au foyer"],
      shadowKeywords: ["la susceptibilité", "le repli sur soi", "les sautes d'humeur", "la dépendance affective"],
      bodyPart: "la poitrine et l'estomac",
      brightestStarName: "Tarf",
      imageAlt:
        "Carte gravée et coloriée d'Urania's Mirror : un grand crabe orangé vu de dessus, pinces ouvertes et pattes déployées ; sur sa carapace, parmi les étoiles percées, sont nommés l'amas de la Crèche et les deux étoiles des Ânons.",
      sections: {
        caractere: {
          heading: "Caractère selon la tradition",
          summary:
            "La tradition voit dans le Cancer un signe tendre et protecteur, guidé par ses émotions et très attaché aux siens. Sous la carapace, la sensibilité peut aussi se faire susceptible ou ombrageuse.",
          details: [
            {
              kind: "p",
              text: "Les astrologues lui prêtent une mémoire affective remarquable, le goût des traditions familiales et un instinct de soin qui pousse à nourrir, consoler, accueillir. On le dit intuitif, capable de sentir l'atmosphère d'une pièce avant qu'un mot soit prononcé, et fidèle à ceux qui ont gagné sa confiance.",
            },
            {
              kind: "p",
              text: "Le revers de cette sensibilité : une humeur changeante comme la Lune qui le gouverne, une tendance à se replier quand il se sent blessé, et parfois un besoin d'être rassuré qui pèse sur l'entourage. Comme le crabe, il avancerait volontiers de biais plutôt que d'affronter un conflit.",
            },
            {
              kind: "p",
              text: "Ce portrait reste symbolique : chaque thème mélange plusieurs signes, et la douceur du Cancer peut y côtoyer beaucoup d'audace.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Le Cancer dans un thème",
          summary:
            "Selon qu'il accueille le Soleil, la Lune ou l'Ascendant, le Cancer colore différemment le thème. La Lune, maîtresse du signe, y est particulièrement à l'aise.",
          details: [
            {
              kind: "p",
              text: "Le Soleil dans le Cancer décrirait une personnalité qui se construit autour des liens : la famille, réelle ou choisie, et le besoin de se sentir chez soi quelque part. L'affirmation de soi passerait par la protection des autres.",
            },
            {
              kind: "p",
              text: "La Lune y est en domicile, ce qui donne, selon la tradition, une vie émotionnelle riche et nuancée : forte empathie, grande sensibilité aux ambiances, besoin de sécurité affective.",
            },
            {
              kind: "p",
              text: "Avec l'Ascendant dans le Cancer, c'est la manière d'entrer en contact qui prendrait cette couleur : un abord doux, prudent au début, puis chaleureux une fois la confiance installée. Le visage montré aux autres resterait souvent plus réservé que le cœur.",
            },
          ],
        },
        symbolique: {
          heading: "Deux spirales au solstice",
          summary:
            "Le glyphe du Cancer réunit deux courbes tête-bêche, terminées chacune par un petit cercle, comme les pinces d'un crabe. Signe cardinal, il marque le début de l'été dans l'hémisphère nord et celui de l'hiver au sud.",
          details: [
            {
              kind: "p",
              text: "On y reconnaît les pinces repliées de l'animal ; d'autres y voient deux seins, ou deux graines enroulées, images de la nourriture et de la protection.",
            },
            {
              kind: "p",
              text: "Le Soleil entre dans le Cancer au solstice de juin : il atteint alors sa plus grande hauteur dans le ciel de l'hémisphère nord, puis les jours commencent à raccourcir. Le tropique du Cancer doit son nom à ce moment, car le Soleil se trouvait alors devant les étoiles du Cancer il y a deux mille ans. Dans l'hémisphère sud, c'est le solstice d'hiver.",
            },
            {
              kind: "p",
              text: "Eau et cardinal, le Cancer unit l'émotion à l'élan qui ouvre une saison. Féminin et nocturne, il gouverne dans la mélothésie la poitrine et l'estomac : le corps qui abrite et qui nourrit.",
            },
          ],
        },
        mythe: {
          heading: "Le crabe de Lerne",
          summary:
            "Le Cancer représente le crabe qui attaqua Héraclès pendant son combat contre l'Hydre de Lerne. Écrasé par le héros, il fut placé dans le ciel par Héra, son ennemie.",
          details: [
            {
              kind: "p",
              text: "Héraclès affrontait l'Hydre, un serpent aux têtes multiples qui hantait les marais de Lerne, dans le Péloponnèse. Un crabe surgit alors de la vase et le pinça au pied ; le héros l'écrasa d'un coup de talon. Pour récompenser ce modeste allié, Héra, qui poursuivait Héraclès de sa haine, mit le crabe parmi les constellations : c'est ce que rapportent Ératosthène et Hygin.",
            },
            {
              kind: "p",
              text: "Ératosthène raconte aussi l'histoire des deux étoiles appelées les Ânons, de part et d'autre d'une petite tache pâle, la Crèche. Pendant la guerre des dieux contre les Géants, Dionysos et Héphaïstos arrivèrent montés sur des ânes ; les Géants, qui n'avaient jamais entendu braire, s'enfuirent épouvantés. Dionysos plaça les ânes dans le ciel, près de la mangeoire où ils semblent se nourrir.",
            },
          ],
        },
        maitrises: {
          heading: "La Lune chez elle",
          summary:
            "La Lune, l'astre des cycles et des émotions, gouverne le Cancer. Jupiter y est exalté, Saturne en exil et Mars en chute.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile : la Lune, seule maîtresse du Cancer pour les anciens comme pour les modernes. C'est l'unique signe qu'elle gouverne.",
                "Exaltation : Jupiter, exalté à 15° du Cancer. La générosité jupitérienne s'épanouirait dans un signe qui protège et qui nourrit.",
                "Exil : Saturne, maître du Capricorne, le signe opposé. L'astre de la rigueur et de la distance serait mal à l'aise dans le signe de la tendresse.",
                "Chute : Mars, exalté dans le Capricorne, est en chute dans le Cancer : l'énergie combative y deviendrait plus défensive et plus émotive.",
              ],
            },
            {
              kind: "p",
              text: "L'axe Cancer-Capricorne est celui des solstices : d'un côté le foyer et l'intime, de l'autre la vie publique et les responsabilités. Chacun des deux signes accueille l'exil de l'astre qui gouverne l'autre.",
            },
          ],
        },
        decans: {
          heading: "Les trois décans du Cancer",
          summary:
            "Le Cancer se divise en trois décans de 10°. Chacun reçoit un astre gardien, sa face, et un signe d'eau qui lui donne sa nuance.",
          details: [
            {
              kind: "list",
              items: [
                "De 0° à 10° : face de Vénus, triplicité du Cancer, sous la Lune. La tendresse du signe y serait la plus visible.",
                "De 10° à 20° : face de Mercure, triplicité du Scorpion, sous Mars pour la tradition et Pluton pour les modernes. La sensibilité y gagnerait en intensité.",
                "De 20° à 30° : face de la Lune, triplicité des Poissons, sous Jupiter pour la tradition et Neptune pour les modernes. On y lit plus de rêverie.",
              ],
            },
            {
              kind: "p",
              text: "Le système des faces, hérité de l'Antiquité, applique l'ordre chaldéen des sept astres à la suite des 36 décans : ici Vénus, Mercure, puis la Lune, qui retrouve ainsi une place dans son propre signe.",
            },
            {
              kind: "p",
              text: "La lecture par triplicité, plus moderne, mêle au Cancer les deux autres signes d'eau : trois visages d'un même élément, de la source au grand large.",
            },
          ],
        },
        constellation: {
          heading: "La constellation du Cancer",
          summary:
            "Avec 505,9 degrés carrés, le Cancer est une constellation discrète, sans étoile très brillante. La plus lumineuse, Tarf (β Cancri), n'atteint que la magnitude 3,5 : il faut un ciel sombre pour la distinguer.",
          details: [
            {
              kind: "p",
              text: "Le joyau de la constellation est l'amas de la Crèche, ou Praesepe (M44), une tache laiteuse visible à l'œil nu loin des lumières des villes ; on l'appelle aussi la Ruche. Galilée fut l'un des premiers, au début du XVIIe siècle, à y voir une foule d'étoiles avec sa lunette. Le Cancer se cherche entre les Gémeaux et le Lion, en soirée, de la fin de l'hiver au printemps.",
            },
            {
              kind: "p",
              text: "Il y a deux mille ans, le Soleil se trouvait dans le Cancer au solstice de juin. Depuis, la précession des équinoxes, ce lent mouvement de toupie de l'axe terrestre, a fait glisser ce solstice dans les Gémeaux puis dans le Taureau. Le Soleil ne traverse plus le Cancer qu'environ un mois après les dates du signe.",
            },
          ],
        },
      },
    },

    leo: {
      tagline:
        "Cinquième signe, le Lion règne au cœur de l'été : la tradition y voit la générosité, la confiance en soi et le goût de briller.",
      intro: {
        summary:
          "Le Lion est le cinquième signe du zodiaque, celui des grandes chaleurs de l'été boréal. Signe de feu et fixe, gouverné par le Soleil, il évoque selon la tradition le rayonnement, la créativité et une noblesse de cœur.",
        details: [
          {
            kind: "p",
            text: "Le roi des animaux et l'astre du jour se partagent sa symbolique : le Lion est le seul signe gouverné par le Soleil. Les astrologues y associent la joie de créer, le jeu, les enfants, l'amour et tout ce qui demande de se montrer. Cette lecture appartient à une tradition symbolique ; elle ne décrit pas un caractère fixé d'avance.",
          },
        ],
      },
      keywords: ["la générosité", "la confiance en soi", "la créativité", "la chaleur humaine", "la loyauté", "le rayonnement"],
      shadowKeywords: ["l'orgueil", "l'autoritarisme", "le besoin d'admiration", "la théâtralité"],
      bodyPart: "le cœur et le dos",
      brightestStarName: "Régulus",
      imageAlt:
        "Carte gravée et coloriée d'Urania's Mirror : un grand lion à la crinière fournie, en marche, la queue relevée en boucle, et au-dessus de lui un lion plus petit, le Petit Lion ; Régulus est marquée sur son poitrail parmi les étoiles percées.",
      sections: {
        caractere: {
          heading: "Caractère selon la tradition",
          summary:
            "La tradition peint le Lion en souverain généreux : chaleureux, fier, créatif, il aime donner et être reconnu. Le même éclat peut se faire orgueil, ou besoin constant d'admiration.",
          details: [
            {
              kind: "p",
              text: "On lui prête un grand cœur, une loyauté sans faille envers ceux qu'il aime et une joie de vivre communicative. Les astrologues le décrivent à l'aise sur scène, au sens propre ou figuré, doté d'un sens du jeu et de la fête, et capable d'entraîner les autres par son enthousiasme.",
            },
            {
              kind: "p",
              text: "Ses travers sont ceux d'un roi : l'autorité qui devient autoritarisme, la fierté qui supporte mal la critique, le goût du spectacle qui vire à la théâtralité. La tradition relève aussi une vulnérabilité cachée : le Lion aurait besoin d'être admiré pour se sentir aimé.",
            },
            {
              kind: "p",
              text: "Comme pour tous les signes, ces traits ne valent que mêlés au reste du thème, où d'autres astres peuvent adoucir ou intensifier la crinière.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Le Lion dans un thème",
          summary:
            "Le Soleil, maître du Lion, y est chez lui ; la Lune et l'Ascendant en reçoivent d'autres nuances. Les astrologues lisent ces trois positions de façon complémentaire.",
          details: [
            {
              kind: "list",
              items: [
                "Soleil dans le Lion : l'astre est en domicile, ce que la tradition juge très favorable. L'identité se nourrirait de création et de reconnaissance, avec le besoin d'exprimer pleinement qui l'on est.",
                "Lune dans le Lion : la sensibilité serait chaleureuse et démonstrative, avec le besoin de se sentir apprécié et une affection qui se dit volontiers avec panache.",
                "Ascendant dans le Lion : le signe levant à l'est donnerait une prestance remarquée, une manière d'entrer dans une pièce qui attire les regards.",
              ],
            },
            {
              kind: "p",
              text: "Les astrologues rappellent qu'un Lion très présent dans un thème n'empêche pas la timidité : d'autres placements peuvent la renforcer, et le besoin de briller se vit alors plus discrètement.",
            },
          ],
        },
        symbolique: {
          heading: "Une crinière au cœur de l'été",
          summary:
            "Le glyphe du Lion part d'un petit cercle et se prolonge en une grande boucle ondulante, comme une crinière ou une queue de lion. Signe fixe, il correspond au cœur de l'été dans l'hémisphère nord.",
          details: [
            {
              kind: "p",
              text: "Le cercle évoque la tête ou le cœur, la courbe la crinière qui flamboie ou la queue qui fouette l'air. D'autres y lisent une vague de chaleur : le trait suggère toujours une énergie qui se déploie avec assurance.",
            },
            {
              kind: "p",
              text: "Quand le Soleil traverse le Lion, l'été boréal bat son plein : c'est le temps des moissons et des grandes chaleurs. Dans l'hémisphère sud, la même période tombe au milieu de l'hiver.",
            },
            {
              kind: "p",
              text: "Feu et fixe, le Lion associe l'ardeur à la constance : sa flamme brûle longtemps plutôt que vite. Masculin et diurne, il est le domicile du Soleil. Dans la mélothésie, il gouverne le cœur et le dos, siège du courage et colonne qui tient le corps droit.",
            },
          ],
        },
        mythe: {
          heading: "Le lion de Némée",
          summary:
            "La constellation est identifiée au lion de Némée, un fauve invulnérable qu'Héraclès étouffa de ses mains lors du premier de ses douze travaux.",
          details: [
            {
              kind: "p",
              text: "Le monstre terrorisait la région de Némée, au sud-ouest de Corinthe, et sa peau résistait à toutes les armes : les flèches d'Héraclès rebondirent sur lui. Le héros l'accula dans sa caverne à deux entrées, en boucha une et l'étrangla à mains nues. Il se servit ensuite des griffes du fauve pour le dépecer et porta désormais sa peau comme une armure, la gueule posée sur sa tête.",
            },
            {
              kind: "p",
              text: "Ératosthène et Hygin expliquent d'abord la place du lion dans le ciel par son rang : il est le roi des animaux. Hygin ajoute que certains auteurs le rattachent au premier travail d'Héraclès.",
            },
            {
              kind: "p",
              text: "Bien avant les Grecs, les Babyloniens voyaient déjà un lion dans ces étoiles, et appelaient Régulus « le roi ».",
            },
          ],
        },
        maitrises: {
          heading: "Le domicile du Soleil",
          summary:
            "Le Soleil gouverne le Lion, et c'est le seul signe qu'il gouverne. Aucun astre n'y est exalté ni en chute ; Saturne, et Uranus pour les modernes, y sont en exil.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile : le Soleil, maître du Lion pour la tradition comme pour les astrologues modernes. Le signe en reçoit sa chaleur et sa place centrale.",
                "Exaltation : aucune. Le Soleil a la sienne ailleurs, à 19° du Bélier.",
                "Exil : Saturne, maître traditionnel du Verseau, le signe opposé, et Uranus pour les modernes. La froideur et la rigueur saturniennes, ou l'esprit de rupture uranien, s'accordent mal avec le cœur du Lion.",
                "Chute : aucune, puisque le Verseau n'abrite lui-même aucune exaltation.",
              ],
            },
            {
              kind: "p",
              text: "Dans le schéma ancien des domiciles, le Soleil et la Lune se partagent le Lion et le Cancer, deux signes voisins au cœur de l'été ; les cinq autres astres reçoivent chacun deux signes, placés symétriquement de part et d'autre.",
            },
          ],
        },
        decans: {
          heading: "Les trois décans du Lion",
          summary:
            "Chaque tiers du Lion reçoit une face planétaire, dans l'ordre chaldéen, et l'empreinte d'un signe de feu, selon le système par triplicité.",
          details: [
            {
              kind: "list",
              items: [
                "De 0° à 10° : face de Saturne, triplicité du Lion, sous le Soleil. La fierté du signe y serait la plus nette.",
                "De 10° à 20° : face de Jupiter, triplicité du Sagittaire, sous Jupiter également. On y place plus de largesse et d'idéal.",
                "De 20° à 30° : face de Mars, triplicité du Bélier, sous Mars également. La tradition y voit plus de fougue.",
              ],
            },
            {
              kind: "p",
              text: "Les deux derniers décans offrent une coïncidence : le même astre y est à la fois la face et le maître du signe de triplicité, Jupiter dans le deuxième, Mars dans le troisième.",
            },
            {
              kind: "p",
              text: "La face, la plus ancienne des deux méthodes, vient de l'astrologie hellénistique et suit l'enchaînement des sept astres, de Saturne à la Lune. Le système par triplicité, adopté par beaucoup d'astrologues modernes, nuance le signe par les deux autres signes de feu.",
            },
          ],
        },
        constellation: {
          heading: "La constellation du Lion",
          summary:
            "Le Lion est l'une des rares constellations zodiacales qui ressemblent vraiment à leur nom. La constellation couvre 947,0 degrés carrés et son étoile la plus brillante, Régulus (α Leonis), atteint la magnitude 1,4.",
          details: [
            {
              kind: "p",
              text: "Une faucille d'étoiles, comme un point d'interrogation à l'envers, dessine la tête et la crinière ; Régulus brille à sa base, au cœur du fauve, et son nom latin signifie « petit roi ». L'étoile se trouve presque exactement sur l'écliptique, si bien que la Lune, et plus rarement une planète, passe parfois devant elle. La queue est marquée par Dénébola, « la queue du lion » en arabe.",
            },
            {
              kind: "p",
              text: "Le Lion domine le ciel des soirées de printemps. Chaque année, vers la mi-novembre, les étoiles filantes des Léonides semblent jaillir de sa crinière.",
            },
            {
              kind: "p",
              text: "Avec la précession des équinoxes, le Soleil ne traverse plus le Lion aux dates du signe, mais environ un mois plus tard. Le signe reste attaché à la saison, la constellation aux étoiles.",
            },
          ],
        },
      },
    },

    virgo: {
      tagline:
        "Sixième signe, la Vierge accompagne la fin de l'été et les moissons : la tradition y voit le soin, la méthode et le sens du détail.",
      intro: {
        summary:
          "La Vierge, sixième signe du zodiaque, couvre la fin de l'été boréal, le temps des moissons. Signe de terre et mutable, gouverné par Mercure, elle évoque selon la tradition l'esprit d'analyse, le soin et le goût du travail bien fait.",
        details: [
          {
            kind: "p",
            text: "Sa figure tient un épi de blé : la récolte qu'on trie, qu'on range et qu'on prépare pour l'hiver. Les astrologues lui associent le service rendu, la santé, les habitudes du quotidien et le discernement, cette capacité à séparer l'utile du superflu. Ce sont des associations symboliques, transmises par la tradition, et non des vérités sur les personnes.",
          },
        ],
      },
      keywords: ["le sens du détail", "la rigueur", "la serviabilité", "le discernement", "la modestie", "l'esprit d'analyse"],
      shadowKeywords: ["le perfectionnisme", "l'esprit trop critique", "l'inquiétude", "la rigidité"],
      bodyPart: "les intestins",
      brightestStarName: "Spica",
      imageAlt:
        "Carte gravée et coloriée d'Urania's Mirror : une jeune femme ailée en robe rose et verte, étendue en travers de la carte, tient un rameau d'une main et des épis de blé de l'autre ; l'étoile Spica, percée comme les autres, brille dans les épis.",
      sections: {
        caractere: {
          heading: "Caractère selon la tradition",
          summary:
            "La tradition décrit la Vierge comme un signe attentif et méthodique, qui aime comprendre, améliorer et rendre service. Son exigence peut tourner au perfectionnisme ou à l'inquiétude.",
          details: [
            {
              kind: "p",
              text: "On lui prête une intelligence pratique, qui observe, classe et corrige, ainsi qu'une modestie sincère : la Vierge préférerait être utile plutôt que briller. Les astrologues soulignent son sens des responsabilités, sa fiabilité et une générosité discrète, faite de petits gestes plus que de grands discours.",
            },
            {
              kind: "p",
              text: "Le même regard précis peut se retourner contre elle ou contre les autres : critique facile, difficulté à se satisfaire d'un résultat imparfait, tendance à s'inquiéter de tout. La tradition évoque aussi une certaine raideur devant l'imprévu, et une pudeur qui cache les émotions.",
            },
            {
              kind: "p",
              text: "Ces traits composent un archétype, celui de la moisson que l'on trie avec soin. Dans un thème, ils se combinent avec bien d'autres influences.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "La Vierge dans un thème",
          summary:
            "Les astrologues lisent la Vierge à travers trois repères principaux, le Soleil, la Lune et l'Ascendant, qui en révèlent chacun une facette.",
          details: [
            {
              kind: "p",
              text: "Le Soleil dans la Vierge suggérerait une identité qui se construit par la compétence : apprendre un savoir-faire, le perfectionner, se rendre utile. La satisfaction viendrait du travail accompli plus que des applaudissements.",
            },
            {
              kind: "p",
              text: "Avec la Lune dans ce signe, les émotions passeraient volontiers par l'action : on prend soin des autres en rendant service, on se rassure en mettant de l'ordre. La tradition y voit aussi une sensibilité inquiète, qui a besoin de routines apaisantes.",
            },
            {
              kind: "p",
              text: "L'Ascendant dans la Vierge donnerait une présence soignée, un abord réservé et attentif, un regard qui remarque les détails. Mercure, maître du signe, devient alors un astre clé du thème.",
            },
          ],
        },
        symbolique: {
          heading: "L'épi des moissons",
          summary:
            "Le glyphe de la Vierge ressemble à un M dont la dernière jambe se replie en boucle vers l'intérieur. Signe mutable, elle clôt l'été dans l'hémisphère nord, quand les récoltes s'achèvent.",
          details: [
            {
              kind: "p",
              text: "Les interprétations varient : certains y voient l'épi que tient la Vierge céleste, d'autres une silhouette repliée sur elle-même, symbole de réserve. Le dessin est proche de celui du Scorpion, dont la dernière jambe se termine au contraire par une flèche.",
            },
            {
              kind: "p",
              text: "Le Soleil traverse la Vierge à la fin de l'été boréal, jusqu'à l'équinoxe de septembre. Signe de transition, elle prépare l'automne : on engrange, on trie, on fait des réserves. Dans l'hémisphère sud, la même période annonce la fin de l'hiver.",
            },
            {
              kind: "p",
              text: "Terre et mutable, la Vierge allie le sens du concret à la souplesse d'adaptation. Féminine et nocturne, elle gouverne les intestins dans la mélothésie : l'organe qui trie ce qui nourrit et ce qui doit être rejeté, image parlante de son discernement.",
            },
          ],
        },
        mythe: {
          heading: "Astrée, la justice partie au ciel",
          summary:
            "La Vierge est le plus souvent identifiée à Dikè, la Justice, appelée aussi Astrée, qui quitta la Terre quand les humains devinrent violents. D'autres auteurs y voient Déméter, Perséphone ou Érigone.",
          details: [
            {
              kind: "p",
              text: "Le poète grec Aratos raconte qu'à l'âge d'or la Justice vivait parmi les hommes, qui ignoraient la guerre. À l'âge d'argent, déçue, elle se retira dans les montagnes ; à l'âge de bronze, quand les hommes forgèrent les premières épées, elle s'envola vers le ciel. Ovide, dans les Métamorphoses, la nomme Astrée et en fait la dernière des immortelles à quitter la Terre.",
            },
            {
              kind: "p",
              text: "Parce qu'elle tient un épi, d'autres l'associent à Déméter, déesse des moissons, que les Romains appelaient Cérès, ou à sa fille Perséphone, surnommée Coré, la « Jeune Fille ». Hygin rapporte aussi l'histoire d'Érigone, qui se pendit de chagrin après la mort de son père Icarios : le père, la fille et leur chienne furent placés dans le ciel.",
            },
            {
              kind: "p",
              text: "Ératosthène et Hygin citent encore Tyché, la Fortune. Cette abondance de versions montre que la figure, très ancienne, a été lue de bien des façons.",
            },
          ],
        },
        maitrises: {
          heading: "Mercure, deux fois chez lui",
          summary:
            "Mercure gouverne la Vierge et y trouve aussi son exaltation : un cas unique dans le zodiaque. Jupiter y est en exil, avec Neptune pour les modernes, et Vénus en chute.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile : Mercure, qui gouverne aussi les Gémeaux. Dans la Vierge, son intelligence se ferait plus pratique : observer, analyser, organiser.",
                "Exaltation : Mercure encore, exalté à 15° de la Vierge. Dans la liste traditionnelle, aucun autre astre n'a son domicile et son exaltation dans le même signe.",
                "Exil : Jupiter, maître traditionnel des Poissons, le signe opposé, et Neptune pour les modernes. Le goût jupitérien des grands ensembles et la rêverie neptunienne se heurteraient à la précision du signe.",
                "Chute : Vénus, exaltée dans les Poissons, est en chute dans la Vierge : l'amour inconditionnel y ferait place à l'exigence.",
              ],
            },
            {
              kind: "p",
              text: "Pour la tradition, cette double dignité fait de la Vierge le signe où l'intelligence de Mercure est la plus sûre d'elle-même.",
            },
          ],
        },
        decans: {
          heading: "Les trois décans de la Vierge",
          summary:
            "La Vierge compte trois décans de 10°, associés chacun à un astre par l'ordre chaldéen et à un signe de terre par la méthode des triplicités.",
          details: [
            {
              kind: "list",
              items: [
                "De 0° à 10° : face du Soleil, triplicité de la Vierge, sous Mercure. Le décan le plus fidèle au signe.",
                "De 10° à 20° : face de Vénus, triplicité du Capricorne, sous Saturne. La méthode s'y ferait plus ambitieuse.",
                "De 20° à 30° : face de Mercure, triplicité du Taureau, sous Vénus. On y lit un sens pratique plus tranquille et plus sensuel.",
              ],
            },
            {
              kind: "p",
              text: "Les faces déroulent l'ordre chaldéen d'un signe à l'autre ; elles comptaient pour les astrologues anciens comme une dignité secondaire. Les traités médiévaux associaient aussi à chaque décan une figure symbolique, peinte par exemple au XVe siècle sur les fresques du palais Schifanoia, à Ferrare.",
            },
            {
              kind: "p",
              text: "Le système par triplicité, plus récent, nuance le signe par les deux autres signes de terre, du plus laborieux au plus paisible.",
            },
          ],
        },
        constellation: {
          heading: "La constellation de la Vierge",
          summary:
            "La Vierge est la plus grande constellation du zodiaque et la deuxième du ciel entier, avec 1 294,4 degrés carrés. Son étoile la plus brillante, Spica (α Virginis), atteint la magnitude 0,97.",
          details: [
            {
              kind: "p",
              text: "Spica, « l'épi » en latin, marque la gerbe que tient la jeune femme. C'est en réalité un couple de deux étoiles chaudes et bleutées, si proches qu'on ne peut les séparer à l'œil. Dans la même région, les astronomes observent l'amas de galaxies de la Vierge, qui en compte plus d'un millier. La constellation se voit en soirée au printemps et au début de l'été.",
            },
            {
              kind: "p",
              text: "Spica tient une place à part dans l'histoire de l'astronomie : c'est en comparant sa position à des mesures plus anciennes que l'astronome grec Hipparque découvrit, au IIe siècle avant notre ère, la précession des équinoxes. Ce lent déplacement explique que le Soleil traverse aujourd'hui la Vierge environ un mois après les dates du signe ; vu la taille de la constellation, il y reste d'ailleurs environ un mois et demi.",
            },
          ],
        },
      },
    },

    libra: {
      tagline:
        "Septième signe, la Balance ouvre l'automne : la tradition y voit le goût de l'harmonie, le sens de la justice et l'art de la relation.",
      intro: {
        summary:
          "La Balance, septième signe du zodiaque, commence à l'équinoxe de septembre, quand le jour et la nuit sont presque égaux. Signe d'air et cardinal, gouverné par Vénus, elle symbolise selon la tradition l'équilibre, la relation et le sens de l'équité.",
        details: [
          {
            kind: "p",
            text: "Elle ouvre la seconde moitié du zodiaque, que les astrologues disent tournée vers les autres : après six signes consacrés à la construction de soi viendrait le temps des partenariats, des alliances et du dialogue. On lui associe la diplomatie, le goût du beau et l'art de peser le pour et le contre. Il s'agit, ici encore, d'un langage symbolique.",
          },
        ],
      },
      keywords: ["le sens de l'harmonie", "la diplomatie", "le sens de la justice", "le goût du beau", "la courtoisie", "l'esprit de coopération"],
      shadowKeywords: ["l'indécision", "la peur du conflit", "la dépendance au regard des autres", "la complaisance"],
      bodyPart: "les reins",
      brightestStarName: "Zubeneschamali",
      imageAlt:
        "Carte gravée et coloriée d'Urania's Mirror : une balance dorée à deux plateaux, vue en biais, avec son fléau, son anneau de suspension et ses cordons ; les étoiles percées des anciennes pinces du Scorpion sont réparties sur les plateaux.",
      sections: {
        caractere: {
          heading: "Caractère selon la tradition",
          summary:
            "La tradition prête à la Balance un esprit conciliant, élégant et soucieux d'équité, qui cherche l'accord plutôt que l'affrontement. Ce besoin d'harmonie peut aussi rendre les choix difficiles.",
          details: [
            {
              kind: "p",
              text: "Les astrologues la décrivent sociable, attentive aux autres et habile à apaiser les tensions. On lui attribue un sens aigu de la justice, une courtoisie naturelle et un goût marqué pour l'art, la beauté des formes et des manières. La relation, amicale, amoureuse ou professionnelle, serait son terrain d'expression privilégié.",
            },
            {
              kind: "p",
              text: "À force de peser chaque option, la Balance hésiterait longtemps avant de trancher. La tradition évoque aussi la peur de déplaire, qui pousse à éviter des conflits pourtant nécessaires, et une sensibilité au regard d'autrui qui peut faire oublier ses propres désirs.",
            },
            {
              kind: "p",
              text: "Une balance n'est jamais immobile : ses plateaux oscillent. L'image rappelle que l'équilibre se cherche sans cesse, et que ce portrait se nuance selon le reste du thème.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "La Balance dans un thème",
          summary:
            "Le Soleil, la Lune et l'Ascendant donnent chacun un visage à la Balance. Pour le Soleil, la tradition parle d'une position délicate : il y est en chute.",
          details: [
            {
              kind: "list",
              items: [
                "Le Soleil en chute dans la Balance : l'affirmation de soi passerait par l'autre, le couple ou le groupe, plutôt que par la conquête solitaire. Les astrologues y lisent une identité qui se construit dans la relation.",
                "La Lune dans la Balance traduirait un besoin d'harmonie affective : les disputes pèseraient lourd, la paix du foyer et la douceur des échanges compteraient beaucoup.",
                "L'Ascendant dans la Balance donnerait une allure gracieuse, un sourire facile et une politesse instinctive dans les premiers contacts.",
              ],
            },
            {
              kind: "p",
              text: "Vénus, maîtresse du signe, mérite alors une attention particulière : sa position précise la façon dont s'exprime ce besoin d'équilibre.",
            },
          ],
        },
        symbolique: {
          heading: "Le fléau de l'équinoxe",
          summary:
            "Le glyphe de la Balance superpose deux traits horizontaux, celui du haut se soulevant en arc en son milieu : le fléau d'une balance, ou le Soleil à demi couché sur l'horizon. Signe cardinal, elle ouvre l'automne dans l'hémisphère nord et le printemps au sud.",
          details: [
            {
              kind: "p",
              text: "On y voit l'instrument de la pesée et de la justice, mais aussi un soleil couchant à moitié caché par l'horizon : image de l'équinoxe d'automne, quand la lumière et l'obscurité se partagent la journée à parts presque égales.",
            },
            {
              kind: "p",
              text: "Le Soleil entre dans la Balance à l'équinoxe de septembre. Les jours deviennent ensuite plus courts que les nuits dans l'hémisphère nord ; dans l'hémisphère sud, c'est l'inverse, et la Balance y marque le retour du printemps.",
            },
            {
              kind: "p",
              text: "Air et cardinal, la Balance réunit l'échange des idées et l'esprit d'initiative, tourné vers la relation. Masculine et diurne, elle gouverne les reins dans la mélothésie : des organes qui filtrent et régulent, comme un équilibre intérieur.",
            },
          ],
        },
        mythe: {
          heading: "Des pinces à la Balance",
          summary:
            "Pour les Grecs, ces étoiles formaient les pinces du Scorpion, les Chelae. Les Romains en firent une balance au Ier siècle avant notre ère : c'est la seule figure du zodiaque qui représente un objet.",
          details: [
            {
              kind: "p",
              text: "Aratos et Ératosthène parlent des « Pinces » du Scorpion, et l'astronome Ptolémée garde encore ce nom au IIe siècle de notre ère. Les noms arabes des deux étoiles principales en gardent la trace : Zubeneschamali signifie « la pince du nord », Zubenelgenubi « la pince du sud ».",
            },
            {
              kind: "p",
              text: "L'idée d'une balance est pourtant plus ancienne que Rome : les Babyloniens voyaient déjà dans cette région la « balance du ciel ». Les Romains la remirent à l'honneur, et le poète Manilius, au Ier siècle, y voyait le signe où le jour et la nuit s'égalent.",
            },
            {
              kind: "p",
              text: "Placée aux pieds de la Vierge, identifiée à la Justice, la Balance devint naturellement l'instrument de la déesse : les plateaux qui pèsent les actes humains avec impartialité.",
            },
          ],
        },
        maitrises: {
          heading: "Vénus et Saturne",
          summary:
            "Vénus gouverne la Balance, et Saturne y est exalté. Mars, maître du signe opposé, y est en exil, et le Soleil, exalté dans le Bélier, en chute.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile : Vénus, qui règne aussi sur le Taureau. Dans la Balance, elle serait l'astre de la relation, de l'accord et de l'élégance, plus que des plaisirs des sens.",
                "Exaltation : Saturne, exalté à 21° de la Balance. Pour la tradition, l'astre de la loi et de la mesure s'épanouit dans le signe de la justice.",
                "Exil : Mars, maître du Bélier, le signe opposé. L'énergie du combat y perdrait de sa franchise, contrainte de négocier.",
                "Chute : le Soleil, exalté dans le Bélier. La volonté individuelle doit ici composer avec celle des autres.",
              ],
            },
            {
              kind: "p",
              text: "Vénus et Saturne réunis dans un même signe : la tradition y lit l'alliance de l'harmonie et de la règle, de l'amour et de l'engagement.",
            },
          ],
        },
        decans: {
          heading: "Les trois décans de la Balance",
          summary:
            "Trois décans de 10° se partagent la Balance. Chacun a sa face planétaire, dans l'ordre chaldéen, et son signe d'air, dans le système par triplicité.",
          details: [
            {
              kind: "list",
              items: [
                "De 0° à 10° : face de la Lune, triplicité de la Balance, sous Vénus. Le goût de l'harmonie y serait le plus net.",
                "De 10° à 20° : face de Saturne, triplicité du Verseau, sous Saturne ou Uranus pour les modernes. Saturne y tient les deux rôles, et l'on y place plus d'indépendance.",
                "De 20° à 30° : face de Jupiter, triplicité des Gémeaux, sous Mercure. La tradition y lit plus de vivacité intellectuelle.",
              ],
            },
            {
              kind: "p",
              text: "La Balance reçoit la Lune, dernière de l'ordre chaldéen, puis Saturne et Jupiter, qui le recommencent ; Mars suivra au début du Scorpion. Ce cycle de sept astres réparti sur 36 décans remonte aux astrologues de l'époque hellénistique.",
            },
            {
              kind: "p",
              text: "Les deux systèmes ne disent pas la même chose : la face rattache chaque tranche à un astre, la triplicité à une nuance d'élément. Les astrologues qui utilisent les décans privilégient souvent l'un ou l'autre.",
            },
          ],
        },
        constellation: {
          heading: "La constellation de la Balance",
          summary:
            "La Balance couvre 538,1 degrés carrés, un peu plus que le Scorpion voisin, mais elle est bien moins visible. Son étoile la plus brillante, Zubeneschamali (β Librae), a une magnitude de 2,61.",
          details: [
            {
              kind: "p",
              text: "Zubeneschamali devance de peu Zubenelgenubi, l'étoile α. Leurs noms arabes rappellent le temps où ces étoiles formaient les pinces du Scorpion. La constellation se repère entre l'éclatante Spica et l'étoile rouge Antarès, en soirée, à la fin du printemps et au début de l'été, assez bas vers le sud.",
            },
            {
              kind: "p",
              text: "Il y a environ trois mille ans, quand les Babyloniens nommèrent la « balance du ciel », le Soleil se trouvait devant ces étoiles à l'équinoxe d'automne. La précession des équinoxes a depuis déplacé ce point dans la Vierge, même si l'on parle encore parfois du « point de la Balance ». Aujourd'hui, le Soleil traverse la constellation environ un mois après les dates du signe.",
            },
          ],
        },
      },
    },

    scorpio: {
      tagline:
        "Huitième signe, le Scorpion règne au cœur de l'automne : la tradition y voit l'intensité, la profondeur et le pouvoir de transformation.",
      intro: {
        summary:
          "Le Scorpion, huitième signe du zodiaque, occupe le milieu de l'automne boréal, quand la nature se dépouille. Signe d'eau et fixe, gouverné par Mars pour la tradition et par Pluton pour les modernes, il symbolise l'intensité, les passions et les métamorphoses.",
        details: [
          {
            kind: "p",
            text: "La saison des feuilles mortes lui donne une symbolique de fin et de renouveau : ce qui meurt prépare ce qui renaîtra. Les astrologues associent au Scorpion les émotions profondes, les secrets, la loyauté sans partage et la capacité de se relever des épreuves. Ces images, parfois inquiétantes, relèvent d'une tradition symbolique et non d'un jugement sur les personnes.",
          },
        ],
      },
      keywords: ["l'intensité", "la profondeur", "la ténacité", "la loyauté", "la perspicacité", "la passion", "la résilience"],
      shadowKeywords: ["la jalousie", "la rancune", "la méfiance", "l'esprit de contrôle"],
      bodyPart: "les organes génitaux",
      brightestStarName: "Antarès",
      imageAlt:
        "Carte gravée et coloriée d'Urania's Mirror : un scorpion vert-de-gris dressé sur toute la hauteur de la carte, pinces ouvertes vers le haut, la queue recourbée vers le bas jusqu'au dard ; parmi les étoiles percées, Antarès est marquée au milieu de son corps.",
      sections: {
        caractere: {
          heading: "Caractère selon la tradition",
          summary:
            "La tradition fait du Scorpion le signe des passions profondes : intense, déterminé, loyal, il ne fait rien à moitié. Sa face sombre parle de jalousie, de rancune et de goût du contrôle.",
          details: [
            {
              kind: "p",
              text: "Les astrologues lui prêtent un regard pénétrant, qui devine les motivations cachées, une volonté qui ne lâche rien et une grande force face aux crises. Son attachement serait total, sa fidélité entière, et sa capacité à se transformer après une épreuve, remarquable.",
            },
            {
              kind: "p",
              text: "Revers de cette intensité : une méfiance qui tient les autres à distance, une rancune tenace envers ceux qui l'ont blessé, une jalousie possible et le besoin de garder la maîtrise des situations. La tradition le dit secret, peu enclin à se livrer.",
            },
            {
              kind: "p",
              text: "Longtemps présenté comme un signe redoutable, le Scorpion est aujourd'hui décrit avec plus de nuances : sa profondeur ferait aussi de lui un confident précieux, capable d'accompagner les autres dans les moments difficiles.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Le Scorpion dans un thème",
          summary:
            "Le Scorpion prend un sens différent selon qu'il héberge le Soleil, la Lune ou l'Ascendant. La Lune, notamment, y est en chute selon la tradition.",
          details: [
            {
              kind: "p",
              text: "Avec le Soleil dans le Scorpion, les astrologues décrivent une personnalité qui se construit dans l'intensité : besoin de comprendre ce qui se cache sous la surface, de vivre les choses pleinement, de traverser les crises pour en sortir changé.",
            },
            {
              kind: "p",
              text: "La Lune étant en chute dans ce signe, la vie affective serait plus orageuse : émotions puissantes mais gardées pour soi, attachements profonds, peur de la trahison. La tradition y voit aussi une grande capacité d'empathie, nourrie par l'expérience.",
            },
            {
              kind: "p",
              text: "L'Ascendant dans le Scorpion donnerait un regard intense, une présence magnétique et une réserve initiale : on observe longtemps avant de se livrer.",
            },
          ],
        },
        symbolique: {
          heading: "Le dard et la saison sombre",
          summary:
            "Le glyphe du Scorpion ressemble à un M dont la dernière jambe se termine par une flèche : le dard de l'animal, prêt à piquer. Signe fixe, il correspond au cœur de l'automne dans l'hémisphère nord.",
          details: [
            {
              kind: "p",
              text: "Le dessin est presque celui de la Vierge, dont la dernière jambe se replie en boucle ; chez le Scorpion, elle se redresse en pointe. On y lit la force concentrée et la défense, une énergie tout entière tournée vers un but.",
            },
            {
              kind: "p",
              text: "Quand le Soleil traverse le Scorpion, l'automne boréal est installé : les feuilles tombent, les jours raccourcissent vite, et plusieurs cultures célèbrent alors leurs morts. Dans l'hémisphère sud, la même période tombe au milieu du printemps.",
            },
            {
              kind: "p",
              text: "Eau et fixe, il unit la profondeur des émotions à une constance à toute épreuve. Féminin et nocturne, il gouverne les organes génitaux dans la mélothésie, ce qui l'a associé à la sexualité, à la naissance et à la transmission de la vie.",
            },
          ],
        },
        mythe: {
          heading: "Le scorpion et Orion",
          summary:
            "Le Scorpion céleste est celui qui piqua mortellement Orion, le géant chasseur. Les deux figures sont placées aux deux bouts du ciel : quand le Scorpion se lève, Orion disparaît à l'horizon.",
          details: [
            {
              kind: "p",
              text: "Les récits varient sur la raison de cette punition. Selon Aratos, Orion avait offensé Artémis, la déesse chasseresse, qui envoya un scorpion pour le tuer. Une autre version, que rapportent aussi Ératosthène et Hygin, accuse son orgueil : Orion se vantait de pouvoir abattre n'importe quelle bête, et la Terre, irritée, lui envoya le scorpion.",
            },
            {
              kind: "p",
              text: "Dans les deux cas, le géant paie sa démesure. Le scorpion fut placé parmi les étoiles à l'opposé d'Orion : l'un se lève quand l'autre se couche, si bien qu'on ne peut guère les voir ensemble, comme si le chasseur fuyait encore son vainqueur.",
            },
            {
              kind: "p",
              text: "La figure est bien plus ancienne que les Grecs : en Mésopotamie, ces étoiles formaient déjà un scorpion. Pour les Grecs, l'animal était d'ailleurs plus long : ses pinces occupaient la place de l'actuelle Balance.",
            },
          ],
        },
        maitrises: {
          heading: "Mars, puis Pluton",
          summary:
            "Le Scorpion a deux maîtres : Mars pour la tradition, Pluton pour les astrologues modernes. Aucun astre n'y est exalté ; Vénus y est en exil et la Lune en chute.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile : Mars, maître traditionnel, comme pour le Bélier ; Pluton, découvert en 1930, lui a été attribué par les modernes. Mars y prendrait une forme plus stratégique, Pluton y ajoute la symbolique des profondeurs et des renaissances.",
                "Exaltation : aucune dans la liste traditionnelle des sept astres.",
                "Exil : Vénus, maîtresse du Taureau, le signe opposé. L'astre de la douceur et des plaisirs simples se trouverait plongé dans un climat de passions extrêmes.",
                "Chute : la Lune, exaltée dans le Taureau. Le besoin de calme et de sécurité y serait mis à l'épreuve par l'intensité du signe.",
              ],
            },
            {
              kind: "p",
              text: "L'axe Taureau-Scorpion oppose ainsi ce que l'on possède et ce que l'on partage, la stabilité et la transformation.",
            },
          ],
        },
        decans: {
          heading: "Les trois décans du Scorpion",
          summary:
            "Le Scorpion se partage en trois tranches de 10°. L'ordre chaldéen y fait revenir Mars, le Soleil et Vénus, comme dans le Bélier ; les triplicités y mêlent les autres signes d'eau.",
          details: [
            {
              kind: "list",
              items: [
                "De 0° à 10° : face de Mars, triplicité du Scorpion, sous Mars ou Pluton. Pour la tradition, Mars y règne deux fois.",
                "De 10° à 20° : face du Soleil, triplicité des Poissons, sous Jupiter ou Neptune. L'intensité s'y teinterait de compassion.",
                "De 20° à 30° : face de Vénus, triplicité du Cancer, sous la Lune. On y place plus de tendresse et de sens de la protection.",
              ],
            },
            {
              kind: "p",
              text: "La séquence des faces est la même que celle du Bélier : en sept signes, soit 21 décans, l'ordre chaldéen a fait exactement trois tours. Ce système, venu de l'astrologie hellénistique, faisait de la face une petite dignité pour l'astre qui s'y trouvait.",
            },
            {
              kind: "p",
              text: "La méthode par triplicité, plus moderne, présente les trois décans comme trois visages de l'eau : profonde, puis rêveuse, puis protectrice.",
            },
          ],
        },
        constellation: {
          heading: "Le Scorpion et Ophiuchus",
          summary:
            "La constellation du Scorpion couvre 496,8 degrés carrés. Son étoile la plus brillante, Antarès (α Scorpii), est une supergéante rouge de magnitude moyenne 1,06, légèrement variable.",
          details: [
            {
              kind: "p",
              text: "Antarès, dont le nom grec signifie « semblable à Mars » ou « rivale de Mars », doit sa teinte orangée à une surface relativement froide ; elle est des centaines de fois plus large que le Soleil. La longue queue recourbée, terminée par Shaula, « le dard » en arabe, se voit les soirs d'été, très bas sur l'horizon sud depuis la France.",
            },
            {
              kind: "p",
              text: "Le Soleil ne passe qu'environ une semaine devant les étoiles du Scorpion. Il traverse ensuite, pendant plus de deux semaines, Ophiuchus, le Serpentaire, une grande constellation figurant un homme qui tient un serpent, souvent identifié au guérisseur Asclépios. Ophiuchus n'est pas un signe : le zodiaque des astrologues compte douze parts égales, alors que l'écliptique traverse treize constellations de tailles inégales.",
            },
            {
              kind: "p",
              text: "Avec la précession des équinoxes, le passage du Soleil dans le Scorpion céleste survient environ un mois après les dates du signe.",
            },
          ],
        },
      },
    },

    sagittarius: {
      tagline:
        "Neuvième signe, le Sagittaire achève l'automne : la tradition y voit l'enthousiasme, la soif d'horizons nouveaux et la quête de sens.",
      intro: {
        summary:
          "Le Sagittaire est le neuvième signe du zodiaque, celui qui mène l'automne boréal vers l'hiver. Signe de feu et mutable, gouverné par Jupiter, il évoque selon la tradition l'aventure, la connaissance et un optimisme communicatif.",
        details: [
          {
            kind: "p",
            text: "Son archer, mi-homme mi-cheval, vise au loin : le signe parle des voyages, des études, des croyances et de tout ce qui élargit l'horizon. Les astrologues lui associent la franchise, l'humour, l'amour de la liberté et le besoin de croire en quelque chose de plus grand que soi. Ce sont des correspondances symboliques, non des certitudes sur les caractères.",
          },
        ],
      },
      keywords: ["l'enthousiasme", "l'optimisme", "la soif de connaissance", "l'esprit d'aventure", "la franchise", "la générosité", "le goût de la liberté"],
      shadowKeywords: ["la démesure", "le manque de tact", "l'impatience face aux contraintes", "le dogmatisme"],
      bodyPart: "les cuisses et les hanches",
      brightestStarName: "Kaus Australis",
      imageAlt:
        "Carte gravée et coloriée d'Urania's Mirror : un centaure barbu au manteau jaune flottant bande son arc ; à ses pieds, une couronne de feuillage, la Couronne australe, ainsi qu'un télescope et un microscope, petites constellations modernes, au milieu des étoiles percées.",
      sections: {
        caractere: {
          heading: "Caractère selon la tradition",
          summary:
            "La tradition voit dans le Sagittaire un signe enthousiaste et franc, avide de découvertes et de sens. Son élan peut aussi le rendre excessif, maladroit dans ses paroles ou rétif à toute contrainte.",
          details: [
            {
              kind: "p",
              text: "Les astrologues le décrivent ouvert, joyeux, curieux des cultures et des idées, prompt à partir à l'aventure, au sens propre comme au figuré. On lui prête une générosité spontanée, un humour bon enfant et un idéalisme sincère : il aurait besoin de croire, d'apprendre et de transmettre.",
            },
            {
              kind: "p",
              text: "Cet appétit a ses excès : promesses trop grandes, impatience devant les détails, franchise qui manque parfois de tact. La tradition évoque aussi une tendance à prêcher, à vouloir convertir les autres à ses convictions, et une difficulté à rester en place.",
            },
            {
              kind: "p",
              text: "Comme toujours, le portrait se nuance : un Sagittaire très présent dans un thème peut se tourner vers l'étude silencieuse plutôt que vers les grands voyages.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Le Sagittaire dans un thème",
          summary:
            "Le Soleil, la Lune et l'Ascendant expriment chacun à leur manière l'élan du Sagittaire. Jupiter, son maître, mérite alors d'être regardé de près.",
          details: [
            {
              kind: "list",
              items: [
                "Soleil dans le Sagittaire : une identité qui se construirait dans l'exploration, physique ou intellectuelle, avec le besoin de donner un sens à sa vie et de le partager.",
                "Lune dans le Sagittaire : des émotions franches et optimistes, un besoin d'espace et de liberté pour se sentir bien, une tendance à fuir les situations qui enferment.",
                "Ascendant dans le Sagittaire : une allure ouverte et cordiale, un abord chaleureux, une énergie qui donne envie de suivre.",
              ],
            },
            {
              kind: "p",
              text: "Les astrologues soulignent qu'un thème se lit comme un ensemble : un Ascendant dans le Sagittaire peut très bien côtoyer un Soleil casanier. C'est ce dialogue entre les signes qui fait la singularité d'un thème.",
            },
          ],
        },
        symbolique: {
          heading: "Une flèche vers l'horizon",
          summary:
            "Le glyphe du Sagittaire est une flèche pointée vers le haut, barrée d'un petit trait : celle de l'archer céleste. Signe mutable, il clôt l'automne dans l'hémisphère nord.",
          details: [
            {
              kind: "p",
              text: "La flèche dirigée vers le ciel évoque le but lointain, l'idéal, le désir de dépasser les limites. Le trait qui la traverse rappelle l'arc ou la main qui la tient : l'élan est décidé, mais il a une direction.",
            },
            {
              kind: "p",
              text: "Le Soleil traverse le Sagittaire à la fin de l'automne boréal, quand les nuits approchent de leur plus grande longueur, jusqu'au solstice de décembre. Signe de transition, il prépare l'hiver ; dans l'hémisphère sud, la même période annonce l'été.",
            },
            {
              kind: "p",
              text: "Feu et mutable, il unit l'enthousiasme à la mobilité : un feu qui se propage plutôt qu'il ne s'installe. Masculin et diurne, il gouverne dans la mélothésie les cuisses et les hanches, muscles de la marche et du galop, bien utiles à un centaure voyageur.",
            },
          ],
        },
        mythe: {
          heading: "Le centaure archer",
          summary:
            "La constellation représente un archer à corps de cheval, le plus souvent décrit comme un centaure. Ératosthène y voyait plutôt Crotos, un compagnon des Muses ; on la confond souvent avec Chiron.",
          details: [
            {
              kind: "p",
              text: "Ératosthène doute qu'il s'agisse d'un centaure, car aucun centaure ne se sert d'un arc. Il y reconnaît Crotos, fils d'Euphémé, la nourrice des Muses, qui vivait avec elles sur le mont Hélicon. Inventeur du tir à l'arc, il chassait à cheval et applaudissait les chants des Muses ; celles-ci demandèrent à Zeus de le placer parmi les étoiles. Hygin reprend ce récit et, dans ses Fables, donne Pan pour père à Crotos.",
            },
            {
              kind: "p",
              text: "Aratos et Ptolémée décrivent pourtant une créature à quatre pattes, et c'est ainsi que les cartes l'ont dessinée. Le sage Chiron, précepteur d'Achille, a souvent été associé au Sagittaire, mais il a sa propre constellation, le Centaure.",
            },
            {
              kind: "p",
              text: "L'image vient de Mésopotamie : les Babyloniens y représentaient déjà un dieu archer au corps d'animal, muni d'ailes.",
            },
          ],
        },
        maitrises: {
          heading: "Le domicile de Jupiter",
          summary:
            "Jupiter, l'astre de l'expansion et de la confiance, gouverne le Sagittaire. Aucun astre n'y est exalté ni en chute ; Mercure, maître des Gémeaux, y est en exil.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile : Jupiter, qui gouverne aussi les Poissons dans la tradition. Dans le Sagittaire, il prendrait son visage le plus conquérant : voyages, savoir, foi en l'avenir.",
                "Exaltation : aucune parmi les sept astres traditionnels. Jupiter a la sienne dans le Cancer.",
                "Exil : Mercure, maître des Gémeaux, le signe opposé. L'astre du détail et de l'argumentation serait à l'étroit dans un signe qui préfère les grandes visions.",
                "Chute : aucune, puisque les Gémeaux n'accueillent eux-mêmes aucune exaltation.",
              ],
            },
            {
              kind: "p",
              text: "Pour les astrologues, Jupiter est chez lui dans le Sagittaire comme un professeur dans une bibliothèque : libre d'élargir, de comprendre et de transmettre.",
            },
          ],
        },
        decans: {
          heading: "Les trois décans du Sagittaire",
          summary:
            "Le Sagittaire compte trois décans de 10°. Les faces y suivent l'ordre chaldéen, les triplicités y font défiler les trois signes de feu.",
          details: [
            {
              kind: "list",
              items: [
                "De 0° à 10° : face de Mercure, triplicité du Sagittaire, sous Jupiter. Le décan le plus jupitérien.",
                "De 10° à 20° : face de la Lune, triplicité du Bélier, sous Mars. L'élan s'y ferait plus combatif.",
                "De 20° à 30° : face de Saturne, triplicité du Lion, sous le Soleil. La tradition y place plus de rayonnement.",
              ],
            },
            {
              kind: "p",
              text: "La séquence des faces, Mercure, Lune, Saturne, est la même que dans le Taureau. Elle continue l'ordre chaldéen sans interruption depuis le début du Bélier et forme, avec les autres signes, une boucle de 36 décans.",
            },
            {
              kind: "p",
              text: "Dans le système par triplicité, chaque tranche emprunte donc la couleur d'un signe de feu différent, dans l'ordre du zodiaque : Sagittaire, Bélier, Lion.",
            },
          ],
        },
        constellation: {
          heading: "Le Sagittaire et le centre de la Galaxie",
          summary:
            "La constellation du Sagittaire couvre 867,4 degrés carrés. Son étoile la plus brillante, Kaus Australis (ε Sagittarii), atteint la magnitude 1,85 ; son nom signifie « la partie sud de l'arc ».",
          details: [
            {
              kind: "p",
              text: "Ses étoiles principales dessinent une silhouette que les astronomes amateurs surnomment la Théière. Tout près se trouve la direction du centre de notre galaxie, la Voie lactée, où se cache un trou noir géant, Sagittarius A*. La région, très riche en nébuleuses et en amas, se voit les soirs d'été, au ras de l'horizon sud depuis la France.",
            },
            {
              kind: "p",
              text: "Avant d'atteindre le Sagittaire, le Soleil traverse Ophiuchus, le Serpentaire, constellation qui n'a jamais été un signe. Le zodiaque astrologique découpe l'écliptique en douze parts égales de 30°, alors que les constellations, aux limites fixées en 1930, sont de tailles très inégales.",
            },
            {
              kind: "p",
              text: "Avec la précession des équinoxes, le Soleil traverse aujourd'hui les étoiles du Sagittaire environ un mois après les dates du signe : il s'y trouve même au solstice de décembre, qui tombait autrefois dans le Capricorne.",
            },
          ],
        },
      },
    },

    capricorn: {
      tagline:
        "Dixième signe, le Capricorne ouvre l'hiver : la tradition y voit l'ambition patiente, le sens des responsabilités et la persévérance.",
      intro: {
        summary:
          "Le Capricorne, dixième signe du zodiaque, commence au solstice de décembre, la nuit la plus longue de l'année dans l'hémisphère nord. Signe de terre et cardinal, gouverné par Saturne, il symbolise selon la tradition l'effort, la structure et les ambitions à long terme.",
        details: [
          {
            kind: "p",
            text: "Au plus noir de l'hiver, la lumière commence pourtant à revenir : le Capricorne est le signe de la montée lente, celle de la chèvre qui gravit la montagne pas à pas. Les astrologues lui associent la carrière, les responsabilités, le respect du temps et des règles. Ces correspondances relèvent d'une tradition symbolique et non d'une fatalité.",
          },
        ],
      },
      keywords: ["l'ambition", "la persévérance", "le sens des responsabilités", "la patience", "le pragmatisme", "la discipline", "la fiabilité"],
      shadowKeywords: ["la rigidité", "le pessimisme", "la froideur apparente", "l'excès de sérieux"],
      bodyPart: "les genoux",
      brightestStarName: "Deneb Algedi",
      imageAlt:
        "Carte gravée et coloriée d'Urania's Mirror : une chèvre couchée, à l'épaisse toison et aux longues cornes annelées, dont l'arrière du corps se termine en une queue de poisson verte enroulée ; les étoiles sont percées dans la figure.",
      sections: {
        caractere: {
          heading: "Caractère selon la tradition",
          summary:
            "La tradition décrit le Capricorne comme un signe sérieux, patient et ambitieux, qui avance pas à pas vers ses objectifs. Sa réserve peut passer pour de la froideur, et sa prudence tourner au pessimisme.",
          details: [
            {
              kind: "p",
              text: "Les astrologues lui prêtent une grande endurance, un sens aigu du devoir et la capacité de construire dans la durée : une carrière, une famille, une œuvre. On le dit fiable, discret, doté d'un humour pince-sans-rire, et souvent plus sensible qu'il ne le montre.",
            },
            {
              kind: "p",
              text: "La même gravité a ses pièges : une rigidité devant ce qui sort des règles, une tendance à voir le verre à moitié vide, un excès de travail qui laisse peu de place aux plaisirs. La tradition évoque aussi une ambition qui peut faire passer la réussite avant les liens.",
            },
            {
              kind: "p",
              text: "Certains astrologues aiment dire que le Capricorne rajeunit avec l'âge, comme s'il avait été sérieux trop tôt. Comme tout portrait de signe, celui-ci se nuance au contact du reste du thème.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Le Capricorne dans un thème",
          summary:
            "Le Capricorne n'a pas le même rôle selon qu'il accueille le Soleil, la Lune ou l'Ascendant. Pour la Lune, la tradition parle même d'exil.",
          details: [
            {
              kind: "p",
              text: "Le Soleil dans le Capricorne évoquerait une identité qui se forge dans l'effort et la maîtrise de soi : se fixer un but, s'y tenir, gagner le respect par ses actes. La réussite y compterait moins comme un éclat que comme une construction.",
            },
            {
              kind: "p",
              text: "La Lune est en exil dans ce signe : selon la tradition, les émotions s'y exprimeraient avec retenue, comme si la sécurité passait d'abord par le contrôle et la responsabilité. Les sentiments, profonds, se montreraient plutôt par des actes que par des mots.",
            },
            {
              kind: "p",
              text: "L'Ascendant dans le Capricorne donnerait une allure sobre et posée, un abord réservé qui inspire confiance, et une maturité précoce dans la façon de se présenter.",
            },
          ],
        },
        symbolique: {
          heading: "Des cornes et une queue de poisson",
          summary:
            "Le glyphe du Capricorne enchaîne un trait anguleux et une boucle : la tête cornue de la chèvre et la queue enroulée du poisson. Signe cardinal, il marque le début de l'hiver dans l'hémisphère nord et celui de l'été au sud.",
          details: [
            {
              kind: "p",
              text: "Le dessin résume la créature hybride de la constellation, mi-chèvre, mi-poisson. On y lit l'union de la montagne et des profondeurs : l'ambition qui grimpe vers les sommets, et une vie intérieure plus secrète, enroulée sur elle-même.",
            },
            {
              kind: "p",
              text: "Le Soleil entre dans le Capricorne au solstice de décembre, au plus bas de sa course dans le ciel de l'hémisphère nord ; ensuite, les jours rallongent. Le tropique du Capricorne doit son nom à ce moment, car le Soleil se trouvait alors devant les étoiles du Capricorne il y a deux mille ans. Au sud de l'équateur, c'est le solstice d'été.",
            },
            {
              kind: "p",
              text: "Terre et cardinal, il réunit le concret et l'initiative : l'élan d'un projet que l'on bâtit. Féminin et nocturne, il gouverne les genoux dans la mélothésie, articulations qui permettent de gravir, de s'agenouiller et de porter.",
            },
          ],
        },
        mythe: {
          heading: "La chèvre-poisson",
          summary:
            "La chèvre à queue de poisson vient de Mésopotamie, où elle était l'emblème du dieu Ea, ou Enki, maître des eaux douces et de la sagesse. Les Grecs y virent Pan ou Égipan, des divinités à cornes de chèvre.",
          details: [
            {
              kind: "p",
              text: "Les Babyloniens nommaient cette constellation le « poisson-chèvre » et en faisaient le symbole d'Ea, que l'on retrouve sculpté sur des bornes de pierre. Les Grecs l'appelèrent Aigokéros, « aux cornes de chèvre », et lui cherchèrent une histoire dans leur propre mythologie.",
            },
            {
              kind: "p",
              text: "Selon Hygin, il s'agit d'Égipan, élevé avec Zeus, qui voulut pour cette raison le placer dans le ciel. Pendant la guerre contre les Titans, Égipan sema chez l'ennemi la peur qu'on appelle « panique » ; Ératosthène explique sa queue de poisson par la conque marine dans laquelle il soufflait, Hygin par les coquillages qu'il lançait.",
            },
            {
              kind: "p",
              text: "Hygin raconte aussi une autre histoire : quand le monstre Typhon surgit au milieu des dieux, Pan se jeta dans un fleuve et changea en poisson la partie immergée de son corps. Admirant sa ruse, Zeus plaça son image parmi les étoiles.",
            },
          ],
        },
        maitrises: {
          heading: "Saturne et Mars",
          summary:
            "Saturne, l'astre du temps et de la discipline, gouverne le Capricorne, où Mars trouve son exaltation. La Lune y est en exil et Jupiter en chute.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile : Saturne, qui gouverne aussi le Verseau dans la tradition. Dans le Capricorne, il serait l'astre de la structure, de la patience et des fondations solides.",
                "Exaltation : Mars, exalté à 28° du Capricorne. L'énergie martienne, canalisée par la discipline, deviendrait efficace et endurante.",
                "Exil : la Lune, maîtresse du Cancer, le signe opposé. L'astre des émotions et du réconfort se trouverait dans un signe de retenue.",
                "Chute : Jupiter, exalté dans le Cancer, est en chute dans le Capricorne : la confiance et la largesse jupitériennes s'y heurteraient à la prudence.",
              ],
            },
            {
              kind: "p",
              text: "Saturne et Mars réunis : la tradition y voit l'image de l'effort organisé, de l'ambition qui se donne les moyens d'aboutir.",
            },
          ],
        },
        decans: {
          heading: "Les trois décans du Capricorne",
          summary:
            "Trois décans de 10° composent le Capricorne, chacun avec sa face, dans l'ordre chaldéen, et son signe de terre, dans la méthode par triplicité.",
          details: [
            {
              kind: "list",
              items: [
                "De 0° à 10° : face de Jupiter, triplicité du Capricorne, sous Saturne. Le sérieux du signe y serait le plus marqué.",
                "De 10° à 20° : face de Mars, triplicité du Taureau, sous Vénus. On y place une ambition plus stable et plus sensuelle.",
                "De 20° à 30° : face du Soleil, triplicité de la Vierge, sous Mercure. La tradition y lit plus de minutie.",
              ],
            },
            {
              kind: "p",
              text: "Mars a sa face dans le deuxième décan, et son degré d'exaltation, 28°, tombe dans le troisième, qui est la face du Soleil. Les astrologues anciens superposaient ainsi plusieurs couches de dignités pour juger la force d'un astre à un degré précis.",
            },
            {
              kind: "p",
              text: "La lecture par triplicité, plus moderne, nuance le signe par les deux autres signes de terre sans changer sa nature : la chèvre reste montagnarde.",
            },
          ],
        },
        constellation: {
          heading: "La constellation du Capricorne",
          summary:
            "Avec 413,9 degrés carrés, le Capricorne est la plus petite constellation du zodiaque. Son étoile la plus brillante, Deneb Algedi (δ Capricorni), atteint la magnitude 2,85 ; son nom arabe signifie « la queue du chevreau ».",
          details: [
            {
              kind: "p",
              text: "Peu lumineuse, la constellation dessine un grand triangle aux côtés incurvés, que l'on cherche en soirée à la fin de l'été et au début de l'automne, bas vers le sud. Deneb Algedi marque la base de la queue de l'animal ; Algedi, l'étoile α, est une double que l'on sépare à l'œil nu sous un ciel sombre.",
            },
            {
              kind: "p",
              text: "Il y a deux mille ans, le Soleil se trouvait dans le Capricorne au solstice de décembre, d'où le nom du tropique du Capricorne. La précession des équinoxes a fait glisser ce solstice dans le Sagittaire. Le Soleil ne parcourt plus les étoiles du Capricorne qu'environ un mois après les dates du signe.",
            },
          ],
        },
      },
    },

    aquarius: {
      tagline:
        "Onzième signe, le Verseau règne au cœur de l'hiver : la tradition y voit l'indépendance d'esprit, l'amitié et le goût de l'avenir.",
      intro: {
        summary:
          "Le Verseau, onzième signe du zodiaque, couvre le milieu de l'hiver boréal. Signe d'air et fixe, gouverné par Saturne pour la tradition et par Uranus pour les modernes, il évoque l'originalité, l'idéal collectif et l'amitié.",
        details: [
          {
            kind: "p",
            text: "Son porteur d'eau verse sur le monde un flot que chacun peut recueillir : une image de partage et de savoir mis en commun. Les astrologues associent au Verseau les groupes, les amitiés, les projets d'avenir, l'invention et l'esprit de liberté.",
          },
          {
            kind: "p",
            text: "L'« ère du Verseau », popularisée dans les années 1960, désigne la période où le point vernal entrera dans la constellation du Verseau : sa date fait débat, car elle dépend des limites que l'on donne aux constellations.",
          },
        ],
      },
      keywords: ["l'originalité", "l'indépendance", "le sens du collectif", "l'amitié", "l'inventivité", "l'ouverture d'esprit", "l'idéalisme"],
      shadowKeywords: ["le détachement", "l'esprit de contradiction", "l'entêtement", "l'imprévisibilité"],
      bodyPart: "les mollets et les chevilles",
      brightestStarName: "Sadalsuud",
      imageAlt:
        "Carte gravée et coloriée d'Urania's Mirror : un homme barbu couronné de feuillage verse l'eau d'une grande urne ; le flot descend jusqu'au Poisson austral, en bas de la carte, près d'un ballon à air chaud, constellation abandonnée ; les étoiles sont percées.",
      sections: {
        caractere: {
          heading: "Caractère selon la tradition",
          summary:
            "La tradition prête au Verseau un esprit libre, inventif et tourné vers les autres, plus attaché aux idées et aux causes qu'aux conventions. Son indépendance peut le rendre distant, ou têtu dans ses convictions.",
          details: [
            {
              kind: "p",
              text: "Les astrologues le décrivent original, curieux de nouveautés, attiré par la science, la technique ou les utopies. On lui attribue un grand sens de l'amitié, de la tolérance envers les différences et le désir de rendre le monde plus juste. Il aimerait penser par lui-même, quitte à surprendre.",
            },
            {
              kind: "p",
              text: "Revers de ce tempérament : un détachement affectif qui déroute les proches, un goût de la contradiction et, signe fixe oblige, un entêtement inattendu chez un esprit qui se veut si ouvert. La tradition évoque aussi des réactions imprévisibles et une difficulté à se plier aux règles.",
            },
            {
              kind: "p",
              text: "Ce portrait mêle deux héritages, la rigueur de Saturne et l'esprit de rupture d'Uranus : selon les astrologues, l'un ou l'autre domine d'un thème à l'autre.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Le Verseau dans un thème",
          summary:
            "Soleil, Lune ou Ascendant dans le Verseau : chaque position donne au signe une place différente. Le Soleil, d'ailleurs, y est en exil selon la tradition.",
          details: [
            {
              kind: "list",
              items: [
                "Le Soleil en exil dans le Verseau évoquerait une identité qui se construit moins dans l'affirmation personnelle que dans le groupe, les idées et les causes partagées.",
                "La Lune dans le Verseau suggérerait un besoin d'espace dans la vie affective, une façon de prendre du recul sur ses émotions, et des amitiés aussi importantes que les amours.",
                "L'Ascendant dans le Verseau donnerait une allure singulière, un abord amical mais un peu distant, et une manière de se présenter qui ne suit pas les modes.",
              ],
            },
            {
              kind: "p",
              text: "Les astrologues regardent aussi Saturne et Uranus, ses deux maîtres, pour savoir quel visage du signe l'emporte.",
            },
          ],
        },
        symbolique: {
          heading: "Les ondes du porteur d'eau",
          summary:
            "Le glyphe du Verseau trace deux lignes brisées parallèles, comme des vagues ou des ondes. Signe fixe, il correspond au cœur de l'hiver dans l'hémisphère nord.",
          details: [
            {
              kind: "p",
              text: "Ces zigzags évoquent l'eau qui coule de l'urne ; un signe voisin désignait déjà l'eau dans l'écriture hiéroglyphique égyptienne. Les astrologues modernes y voient aussi des ondes, de l'électricité ou des courants d'idées : malgré son nom, le Verseau est un signe d'air.",
            },
            {
              kind: "p",
              text: "Quand le Soleil traverse le Verseau, l'hiver boréal est bien installé, mais les jours rallongent nettement. Dans l'hémisphère sud, la même période correspond au plein été.",
            },
            {
              kind: "p",
              text: "Air et fixe, il unit les idées à la constance : des convictions qui ne changent pas au gré du vent. Masculin et diurne, il gouverne les mollets et les chevilles dans la mélothésie, la partie du corps qui porte la marche vers l'avant.",
            },
          ],
        },
        mythe: {
          heading: "Ganymède, l'échanson des dieux",
          summary:
            "Le Verseau est le plus souvent identifié à Ganymède, un prince troyen enlevé par Zeus pour servir à boire aux dieux de l'Olympe. D'autres auteurs y voient Deucalion, rescapé du déluge.",
          details: [
            {
              kind: "p",
              text: "Ganymède, fils du roi Tros, passait pour le plus beau des mortels. Un jour qu'il gardait les troupeaux de son père, Zeus, changé en aigle, ou selon d'autres récits par l'intermédiaire d'un aigle, l'emporta sur l'Olympe. Le jeune homme devint l'échanson des dieux, celui qui verse le nectar ; l'oiseau a sa propre constellation, l'Aigle. Ovide raconte l'enlèvement dans les Métamorphoses.",
            },
            {
              kind: "p",
              text: "Dans les Fastes, Ovide précise que l'eau du Verseau est mêlée de nectar. Hygin rapporte d'autres identifications : Deucalion, qui survécut au déluge, ou Cécrops, un ancien roi d'Athènes. Le personnage qui verse l'eau a d'ailleurs pris des noms différents selon les époques et les peuples.",
            },
          ],
        },
        maitrises: {
          heading: "Saturne, puis Uranus",
          summary:
            "Le Verseau a deux maîtres : Saturne pour la tradition, Uranus pour les modernes. Aucun astre n'y est exalté ni en chute ; le Soleil, maître du Lion, y est en exil.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile : Saturne, maître traditionnel, qui gouverne aussi le Capricorne ; Uranus, découvert en 1781, lui a été attribué par les astrologues modernes. Saturne apporte la structure et la constance, Uranus l'innovation et l'esprit de rupture.",
                "Exaltation : aucune dans la liste traditionnelle des sept astres.",
                "Exil : le Soleil, maître du Lion, le signe opposé. L'astre de l'affirmation individuelle se trouverait dans le signe du collectif.",
                "Chute : aucune, puisque le Lion n'abrite lui-même aucune exaltation.",
              ],
            },
            {
              kind: "p",
              text: "L'axe Lion-Verseau oppose ainsi le cœur et la tête, l'individu qui rayonne et le groupe qui partage ; la tradition y voit deux façons complémentaires de vivre la liberté.",
            },
          ],
        },
        decans: {
          heading: "Les trois décans du Verseau",
          summary:
            "Le Verseau se divise en trois décans de 10°, marqués chacun par une face planétaire et par l'un des trois signes d'air.",
          details: [
            {
              kind: "list",
              items: [
                "De 0° à 10° : face de Vénus, triplicité du Verseau, sous Saturne ou Uranus. L'esprit du signe y serait le plus affirmé.",
                "De 10° à 20° : face de Mercure, triplicité des Gémeaux, sous Mercure également. On y place plus de curiosité et d'esprit.",
                "De 20° à 30° : face de la Lune, triplicité de la Balance, sous Vénus. La tradition y lit plus de sens de la relation.",
              ],
            },
            {
              kind: "p",
              text: "Les faces Vénus, Mercure et Lune reprennent celles du Cancer : appliqué en continu depuis le Bélier, l'ordre chaldéen retombe sur la même séquence tous les sept signes. Au deuxième décan, Mercure est à la fois l'astre de la face et le maître du signe de triplicité.",
            },
            {
              kind: "p",
              text: "La face est l'héritage de l'astrologie hellénistique, la triplicité une lecture plus moderne ; les deux peuvent se superposer dans l'interprétation d'un degré.",
            },
          ],
        },
        constellation: {
          heading: "La constellation du Verseau",
          summary:
            "Le Verseau couvre 979,9 degrés carrés, ce qui en fait l'une des plus vastes constellations, mais aussi l'une des plus pâles. Son étoile la plus brillante, Sadalsuud (β Aquarii), n'atteint que la magnitude 2,87.",
          details: [
            {
              kind: "p",
              text: "Sadalsuud vient de l'arabe et se traduit souvent par « la chance des chances » ; sa voisine Sadalmelik, l'étoile α, est presque aussi brillante. Un petit Y de quatre étoiles dessine l'urne, d'où le flot descend vers Fomalhaut, dans le Poisson austral. La constellation se voit en soirée en automne, dans une région du ciel riche en figures aquatiques : les Poissons, la Baleine, le Capricorne.",
            },
            {
              kind: "p",
              text: "Le Verseau abrite aussi la nébuleuse de l'Hélice, l'une des nébuleuses planétaires les plus proches de nous. Chaque printemps, les étoiles filantes des Êta Aquarides, poussières laissées par la comète de Halley, semblent en jaillir.",
            },
            {
              kind: "p",
              text: "La précession des équinoxes décale le zodiaque par rapport aux étoiles : le Soleil traverse aujourd'hui le Verseau environ un mois après les dates du signe. Le point vernal, lui, y entrera vers l'an 2600.",
            },
          ],
        },
      },
    },

    pisces: {
      tagline:
        "Douzième et dernier signe, les Poissons referment l'hiver et le cycle du zodiaque : la tradition y voit l'empathie, l'imagination et la sensibilité.",
      intro: {
        summary:
          "Les Poissons sont le douzième et dernier signe du zodiaque, juste avant l'équinoxe de mars. Signe d'eau et mutable, gouverné par Jupiter pour la tradition et par Neptune pour les modernes, il symbolise la compassion, le rêve et le sentiment d'unité.",
        details: [
          {
            kind: "p",
            text: "Dernier de la ronde, le signe rassemble symboliquement tout ce qui précède, avant que le cycle ne recommence au Bélier. Les astrologues lui associent l'intuition, l'art, la spiritualité, le dévouement, et une frontière poreuse entre soi et les autres. Ce sont des images d'une tradition symbolique, pas des vérités sur les personnes nées à cette période.",
          },
        ],
      },
      keywords: ["l'empathie", "l'imagination", "la sensibilité", "la compassion", "l'intuition", "la générosité", "la créativité"],
      shadowKeywords: ["la confusion", "la fuite devant le réel", "l'influençabilité", "le manque de limites"],
      bodyPart: "les pieds",
      brightestStarName: "Alpherg",
      imageAlt:
        "Carte gravée et coloriée d'Urania's Mirror : deux poissons verts aux nageoires rosées, l'un nageant vers le haut, l'autre à l'horizontale, reliés par un long ruban rouge noué en un point, près de l'étoile Alrescha ; les étoiles sont percées.",
      sections: {
        caractere: {
          heading: "Caractère selon la tradition",
          summary:
            "La tradition fait des Poissons un signe sensible, intuitif et compatissant, ouvert au rêve comme à la souffrance des autres. Cette porosité peut aussi brouiller les repères et pousser à fuir le réel.",
          details: [
            {
              kind: "p",
              text: "Les astrologues leur prêtent une imagination foisonnante, souvent tournée vers l'art, la musique ou la spiritualité, et une empathie remarquable : les Poissons ressentiraient ce que vivent les autres comme s'ils le vivaient eux-mêmes. On les dit dévoués, tolérants, capables de beaucoup pardonner.",
            },
            {
              kind: "p",
              text: "Ce même don a ses risques : difficulté à poser des limites, tendance à se laisser influencer, à se perdre dans la rêverie ou à repousser les décisions. La tradition évoque aussi une fragilité devant la dureté du monde, et le besoin de refuges.",
            },
            {
              kind: "p",
              text: "Ces traits forment un archétype, celui de l'océan où tout se mêle. Dans un thème réel, ils dialoguent avec d'autres placements, parfois très terre à terre.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Les Poissons dans un thème",
          summary:
            "Le signe des Poissons ne s'exprime pas de la même façon par le Soleil, la Lune ou l'Ascendant. Vénus, exaltée dans ce signe, y joue aussi un rôle à part.",
          details: [
            {
              kind: "p",
              text: "Avec le Soleil dans les Poissons, la personnalité se construirait dans la sensibilité et l'imagination : besoin de donner du sens, de créer, d'aider, parfois de s'effacer derrière une cause ou une œuvre.",
            },
            {
              kind: "p",
              text: "La Lune dans les Poissons décrirait une vie émotionnelle très perméable aux ambiances, une grande tendresse, et un besoin de calme, de musique ou de solitude pour se ressourcer.",
            },
            {
              kind: "p",
              text: "L'Ascendant dans les Poissons donnerait un regard rêveur, une douceur dans les premiers contacts et une faculté de s'accorder à son interlocuteur. Les astrologues observent alors avec attention Jupiter et Neptune, maîtres du signe.",
            },
          ],
        },
        symbolique: {
          heading: "Deux poissons liés",
          summary:
            "Le glyphe des Poissons montre deux arcs adossés reliés par un trait horizontal : deux poissons qui nagent en sens contraire, attachés l'un à l'autre. Signe mutable, il clôt l'hiver dans l'hémisphère nord.",
          details: [
            {
              kind: "p",
              text: "Le trait qui les unit rappelle le cordon de la constellation, qui relie les deux poissons par la queue. On y lit la dualité entre le monde visible et le monde intérieur, ou entre deux élans opposés que le signe tente de concilier.",
            },
            {
              kind: "p",
              text: "Le Soleil traverse les Poissons à la fin de l'hiver boréal, jusqu'à l'équinoxe de mars, qui ouvre un nouveau cycle. Dans l'hémisphère sud, la même période marque la fin de l'été.",
            },
            {
              kind: "p",
              text: "Eau et mutable, les Poissons unissent la sensibilité à la capacité de changer de forme, comme l'eau qui épouse tous les contenants. Féminins et nocturnes, ils gouvernent les pieds dans la mélothésie : la liste qui commence par la tête du Bélier s'achève ainsi au bas du corps.",
            },
          ],
        },
        mythe: {
          heading: "Aphrodite et Éros face à Typhon",
          summary:
            "Les Poissons rappellent la fuite d'Aphrodite et de son fils Éros devant le monstre Typhon. Au bord de l'Euphrate, ils se jetèrent dans l'eau et furent sauvés par deux poissons, ou changés eux-mêmes en poissons.",
          details: [
            {
              kind: "p",
              text: "Typhon, géant aux cent têtes de serpent, avait été lancé contre les dieux de l'Olympe. Aphrodite, que les Romains appelaient Vénus, et Éros, leur Cupidon, s'étaient réfugiés près de l'Euphrate, en Syrie. Quand le monstre surgit, ils plongèrent dans le fleuve.",
            },
            {
              kind: "p",
              text: "Ovide raconte dans les Fastes que deux poissons les prirent sur leur dos et les mirent à l'abri ; en récompense, ils reçurent une place parmi les étoiles, et c'est pourquoi, ajoute-t-il, les Syriens se refusaient à manger du poisson. Hygin rapporte une autre version : la déesse et son fils se changèrent eux-mêmes en poissons.",
            },
            {
              kind: "p",
              text: "Ératosthène, enfin, voit dans les deux Poissons les petits du grand poisson que figure le Poisson austral, sauveur d'une déesse syrienne, Dercéto. Le cordon qui relie les deux poissons semble, lui, hérité des Babyloniens.",
            },
          ],
        },
        maitrises: {
          heading: "Jupiter, Neptune et Vénus",
          summary:
            "Les Poissons ont deux maîtres, Jupiter pour la tradition et Neptune pour les modernes, et accueillent l'exaltation de Vénus. Mercure y est à la fois en exil et en chute.",
          details: [
            {
              kind: "list",
              items: [
                "Domicile : Jupiter, qui gouverne aussi le Sagittaire ; Neptune, découvert en 1846, a été attribué au signe par les astrologues modernes. Jupiter y apporte la bienveillance, Neptune le rêve et l'effacement des frontières.",
                "Exaltation : Vénus, exaltée à 27° des Poissons. Selon la tradition, l'amour y deviendrait le plus généreux et le plus inconditionnel.",
                "Exil : Mercure, maître de la Vierge, le signe opposé.",
                "Chute : Mercure encore, exalté dans la Vierge. L'astre de l'analyse et de la logique se trouve ainsi doublement mal à l'aise dans un signe d'intuition et de brume.",
              ],
            },
            {
              kind: "p",
              text: "Cette situation fait écho à celle de la Vierge, où Mercure est à la fois maître et exalté : sur l'axe Vierge-Poissons, la raison qui trie s'oppose à la sensibilité qui unit.",
            },
          ],
        },
        decans: {
          heading: "Les trois décans des Poissons",
          summary:
            "Les Poissons se partagent en trois décans de 10°. Leur dernier décan clôt la ronde des 36 faces, qui revient à Mars, comme au premier degré du Bélier.",
          details: [
            {
              kind: "list",
              items: [
                "De 0° à 10° : face de Saturne, triplicité des Poissons, sous Jupiter ou Neptune. La rêverie du signe y serait la plus pure.",
                "De 10° à 20° : face de Jupiter, triplicité du Cancer, sous la Lune. On y place plus de tendresse protectrice.",
                "De 20° à 30° : face de Mars, triplicité du Scorpion, sous Mars ou Pluton. La tradition y lit plus d'intensité.",
              ],
            },
            {
              kind: "p",
              text: "Trente-six décans pour sept astres : la division ne tombe pas juste, et Mars, qui ouvre le premier décan du Bélier, gouverne aussi le dernier des Poissons. La boucle se referme ainsi : la fin du zodiaque rejoint son commencement.",
            },
            {
              kind: "p",
              text: "Au troisième décan, Mars est d'ailleurs à la fois la face et le maître traditionnel du signe de triplicité. Le système par triplicité, plus moderne, colore les trois tranches par les trois signes d'eau, dans l'ordre du zodiaque.",
            },
          ],
        },
        constellation: {
          heading: "La constellation des Poissons",
          summary:
            "Les Poissons couvrent 889,4 degrés carrés mais restent très discrets. Leur étoile la plus brillante, Alpherg (η Piscium), n'atteint que la magnitude 3,62 et se trouve sur le cordon, près de la queue du poisson du nord.",
          details: [
            {
              kind: "p",
              text: "Il faut un ciel sombre pour suivre la figure, en soirée, en automne, au sud du grand carré de Pégase. Le poisson de l'ouest se repère à un petit anneau d'étoiles ; le nœud qui unit les deux cordons est marqué par Alrescha, « la corde » en arabe.",
            },
            {
              kind: "p",
              text: "C'est dans cette constellation que se trouve aujourd'hui le point vernal, la position du Soleil à l'équinoxe de mars, origine du zodiaque tropical. Il était dans le Bélier à l'époque d'Hipparque ; la précession des équinoxes l'a déplacé dans les Poissons, et il gagnera le Verseau vers l'an 2600. Le Soleil traverse ainsi les étoiles des Poissons environ un mois après les dates du signe.",
            },
          ],
        },
      },
    },
  },
};
