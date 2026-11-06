import type { HousesContent } from "./types";

export const HOUSES_FR: HousesContent = {
  index: {
    title: "Les maisons",
    lead: "Les douze secteurs du ciel local au moment de la naissance : ce que chacun représente selon la tradition, et comment on les découpe.",
    intro: {
      summary:
        "Les maisons découpent le ciel du lieu de naissance en douze secteurs, à partir de l'horizon et du méridien. Elles dépendent de l'heure et du lieu, là où les signes ne dépendent que de la date ; chacune est associée à des domaines de la vie.",
      details: [
        {
          kind: "p",
          text: "Le zodiaque tourne avec le ciel : en une journée, chacun de ses degrés se lève à l'est, culmine, puis se couche à l'ouest. Les maisons, elles, restent fixes par rapport à l'horizon du lieu : à la naissance, chaque astre tombe dans l'une d'elles.",
        },
        {
          kind: "p",
          text: "C'est pourquoi l'heure de naissance compte tant : l'Ascendant, point de départ de la maison I, avance en moyenne d'un degré toutes les quatre minutes. Deux personnes nées le même jour à quelques heures d'écart ont, à peu de chose près, les mêmes astres dans les mêmes signes, mais pas dans les mêmes maisons.",
        },
        {
          kind: "p",
          text: "Les astrologues lisent la maison comme le terrain où s'exprime un astre : le signe dit comment, la maison dit où. Au Moyen Âge, un vers latin permettait de retenir leur ordre : Vita, lucrum, fratres, genitor, nati, valetudo, uxor, mors, pietas, regnum, benefactaque, carcer, soit la vie, le gain, les frères, le père, les enfants, la santé, l'épouse, la mort, la piété, le royaume, les bienfaits et la prison.",
        },
      ],
    },
  },
  angles: {
    heading: "Les quatre angles",
    summary:
      "Quatre points structurent le thème : l'Ascendant, qui se lève à l'est, le Descendant, qui se couche à l'ouest, le Milieu du Ciel, qui culmine, et le Fond du Ciel, à l'opposé. Dans la plupart des systèmes, ils ouvrent les maisons I, VII, X et IV.",
    details: [
      {
        kind: "p",
        text: "L'Ascendant est le degré du zodiaque qui se lève sur l'horizon est, à l'heure et au lieu de la naissance ; le Descendant lui fait face, sur l'horizon ouest. Le Milieu du Ciel est le degré qui passe au méridien, au plus haut de sa course, plein sud vu de l'hémisphère nord : ce n'est pas forcément le point situé juste au-dessus de nos têtes. Le Fond du Ciel lui est opposé, sous l'horizon.",
      },
      {
        kind: "p",
        text: "Les astrologues y voient quatre repères : l'Ascendant pour la manière de se présenter et l'élan de vie, le Descendant pour la relation à l'autre, le Milieu du Ciel pour la vocation et l'image publique, le Fond du Ciel pour les racines et le foyer. Les Grecs appelaient ces points des « pivots », kentra, et les Latins des « gonds », cardines.",
      },
      {
        kind: "p",
        text: "Ils tournent vite, et pas à la même vitesse pour tous les signes : à la latitude de Paris, le Bélier et les Poissons se lèvent en une heure environ, la Vierge et la Balance en près de trois heures.",
      },
    ],
  },
  quadrants: {
    heading: "Hémisphères, quadrants et familles de maisons",
    summary:
      "L'horizon et le méridien coupent le thème en deux moitiés, puis en quatre quadrants de trois maisons. Les maisons se rangent aussi en trois familles : angulaires, succédentes et cadentes.",
    details: [
      {
        kind: "p",
        text: "Au-dessus de l'horizon se trouvent les maisons VII à XII, la moitié du ciel visible ; au-dessous, les maisons I à VI. Du côté de l'Ascendant, à gauche dans un thème, s'étendent les maisons X à III ; du côté du Descendant, les maisons IV à IX. Les astrologues lisent souvent le haut comme la vie publique, le bas comme la vie privée, l'est comme ce qui part de soi, l'ouest comme ce qui vient des autres.",
      },
      {
        kind: "p",
        text: "Les quadrants vont d'un angle au suivant : maisons I à III de l'Ascendant au Fond du Ciel, IV à VI jusqu'au Descendant, VII à IX jusqu'au Milieu du Ciel, X à XII jusqu'au retour à l'Ascendant.",
      },
      {
        kind: "list",
        items: [
          "Maisons angulaires (I, IV, VII, X) : elles commencent aux angles ; la tradition les jugeait les plus puissantes.",
          "Maisons succédentes (II, V, VIII, XI) : elles suivent les angles, comme le dit leur nom grec, epanaphora, ce qui monte ensuite.",
          "Maisons cadentes (III, VI, IX, XII) : elles « tombent » des angles, du latin cadere ; les Grecs parlaient de déclin, apoklima. Les modernes rapprochent ces trois familles des signes cardinaux, fixes et mutables.",
        ],
      },
    ],
  },
  houses: {
    1: {
      heading: "Maison I : la personnalité",
      keywords: ["la personnalité", "le corps", "l'apparence", "le tempérament", "l'élan de vie"],
      summary:
        "La maison I commence à l'Ascendant, le degré qui se levait à l'est à la naissance. Les astrologues y lisent la manière de se présenter, le corps, le tempérament et l'élan avec lequel on aborde la vie.",
      details: [
        {
          kind: "p",
          text: "La tradition en faisait la maison de la vie elle-même : le vers latin médiéval la nomme Vita, « la vie ». Les Grecs l'appelaient hôroskopos, « ce qui observe l'heure » : c'est l'origine de notre mot horoscope, qui désignait d'abord le degré levant.",
        },
        {
          kind: "p",
          text: "Les modernes y voient la personnalité visible, la première impression, l'allure et la vitalité ; les astres qui s'y trouvent colorent fortement le caractère. Ils la rapprochent du Bélier, premier signe, et de son maître Mars. La tradition hellénistique disait que Mercure s'y réjouit.",
        },
      ],
    },
    2: {
      heading: "Maison II : les ressources",
      keywords: ["l'argent", "les biens", "les ressources", "les valeurs", "les talents"],
      summary:
        "La maison II suit la maison de l'Ascendant. Elle parle de ce que l'on possède et de ce que l'on gagne : l'argent, les biens, mais aussi les talents et les valeurs sur lesquels on s'appuie.",
      details: [
        {
          kind: "p",
          text: "Lucrum, « le gain », dit le vers latin. La tradition y lisait les moyens d'existence, la fortune, la façon de la gagner et de la dépenser. Pour les auteurs grecs, elle fait partie des maisons qui ne « voient » pas l'Ascendant, faute d'aspect avec lui.",
        },
        {
          kind: "p",
          text: "Les modernes y ajoutent l'estime de soi, les besoins matériels, le rapport au confort et ce que l'on considère comme précieux. Son signe d'affinité est le Taureau, signe de la stabilité gouverné par Vénus.",
        },
      ],
    },
    3: {
      heading: "Maison III : la communication",
      keywords: ["la communication", "les frères et sœurs", "l'apprentissage", "les petits trajets", "l'entourage proche"],
      summary:
        "La maison III concerne l'environnement immédiat : les frères et sœurs, les voisins, les petits déplacements, les premiers apprentissages et toutes les formes d'échange du quotidien.",
      details: [
        {
          kind: "p",
          text: "Son nom latin, Fratres, « les frères », résume la tradition : la fratrie, les proches parents, les voisins. Les Grecs l'appelaient la maison de la Déesse, car la Lune s'y réjouit ; on y lisait aussi les cultes et les petits voyages.",
        },
        {
          kind: "p",
          text: "On y range aujourd'hui la communication, la parole et l'écriture, la curiosité, l'école des premières années, les trajets courts et les réseaux de proximité. Dans le zodiaque naturel des modernes, elle répond aux Gémeaux et à Mercure, signe et planète des échanges.",
        },
      ],
    },
    4: {
      heading: "Maison IV : le foyer",
      keywords: ["le foyer", "la famille", "les racines", "le père", "la vie privée"],
      summary:
        "La maison IV commence au Fond du Ciel, le point le plus bas du thème. Elle parle des racines : la famille, le lieu où l'on vit, l'enfance, l'héritage et le sentiment d'appartenance.",
      details: [
        {
          kind: "p",
          text: "Genitor, « le père », la désigne dans le vers latin : on y lisait le père, les ancêtres, les terres et les biens immobiliers, mais aussi la fin des choses et la vieillesse. Les Grecs l'appelaient le « souterrain », car elle se trouve sous nos pieds, au plus profond du ciel invisible.",
        },
        {
          kind: "p",
          text: "La lecture moderne en fait le lieu du foyer, de la vie intime, de la mémoire familiale et des fondations intérieures sur lesquelles on se construit. Le Cancer et la Lune, signe et astre de la protection, lui correspondent. Certains y lisent la mère plutôt que le père : les écoles divergent.",
        },
      ],
    },
    5: {
      heading: "Maison V : la créativité",
      keywords: ["la créativité", "les enfants", "les amours", "les loisirs", "le jeu"],
      summary:
        "La maison V est celle du plaisir et de la création : les enfants, les amours, les jeux, les loisirs, les arts, tout ce que l'on fait par goût et qui nous ressemble.",
      details: [
        {
          kind: "p",
          text: "Son nom dans le vers latin est Nati, « les enfants ». Chez les Grecs, c'était la Bonne Fortune, et Vénus y était en joie : on y lisait les enfants, les fêtes, les plaisirs et les cadeaux de la vie.",
        },
        {
          kind: "p",
          text: "Les astrologues d'aujourd'hui y placent l'expression de soi, la créativité sous toutes ses formes, le sport et les jeux, le goût du risque et les histoires d'amour, avant l'engagement que décrit la maison VII. Son signe naturel est le Lion, gouverné par le Soleil, astre du rayonnement.",
        },
      ],
    },
    6: {
      heading: "Maison VI : le quotidien",
      keywords: ["le travail quotidien", "la santé", "les habitudes", "le service", "les animaux domestiques"],
      summary:
        "La maison VI concerne la vie de tous les jours : le travail régulier, les habitudes, la santé, l'hygiène de vie et le soin que l'on rend aux autres.",
      details: [
        {
          kind: "p",
          text: "Avec Valetudo, « l'état de santé », le vers latin rappelle que la tradition y lisait surtout les maladies, les serviteurs et le petit bétail. Les auteurs grecs parlaient de la Mauvaise Fortune, et Mars y était en joie : comme la maison XII, elle ne forme aucun aspect avec l'Ascendant, ce qui la rendait réputée difficile.",
        },
        {
          kind: "p",
          text: "Les modernes l'ont élargie au travail de tous les jours, aux collègues, à l'organisation, à la routine et à la prévention : tout ce qui s'entretient jour après jour. On l'associe à la Vierge et à Mercure, signe et planète de la méthode. Les animaux domestiques en relèvent encore dans beaucoup de manuels.",
        },
      ],
    },
    7: {
      heading: "Maison VII : les relations",
      keywords: ["le couple", "les associations", "les contrats", "l'autre", "les adversaires déclarés"],
      summary:
        "La maison VII commence au Descendant, face à l'Ascendant. Elle parle de l'autre : le couple, le mariage, les associations, les contrats, et même les adversaires que l'on affronte ouvertement.",
      details: [
        {
          kind: "p",
          text: "Uxor, « l'épouse », la résume dans le vers latin : la tradition y plaçait le mariage, les partenaires, les procès et les ennemis déclarés. Les Grecs l'appelaient le Couchant : c'est là que les astres disparaissent sous l'horizon ouest.",
        },
        {
          kind: "p",
          text: "Elle couvre aujourd'hui toutes les relations d'égal à égal, la manière de s'engager et ce que l'on cherche chez l'autre, parfois une part de soi que l'on projette sur lui. La Balance et Vénus, qui disent l'harmonie à deux, en sont le signe et l'astre naturels.",
        },
      ],
    },
    8: {
      heading: "Maison VIII : les transformations",
      keywords: ["les transformations", "les ressources partagées", "les héritages", "l'intimité", "les crises"],
      summary:
        "La maison VIII est celle des passages : les crises qui transforment, les ressources partagées avec d'autres, les héritages, l'intimité, et la façon de vivre les fins et les deuils.",
      details: [
        {
          kind: "p",
          text: "Le vers latin lui donne un nom sans détour, Mors, « la mort » : on y lisait la mort et ses circonstances, les héritages et les biens du conjoint. Les Grecs l'appelaient la maison « oisive », car elle ne regarde pas l'Ascendant : elle forme avec lui un angle de 150 degrés, que les Anciens ne comptaient pas parmi les aspects.",
        },
        {
          kind: "p",
          text: "Pour les modernes, elle concerne la transformation intérieure, les liens profonds, la sexualité, les dettes et les placements, les secrets et les tabous. Son signe naturel est le Scorpion, gouverné par Pluton pour les modernes et par Mars dans la tradition. Une planète en maison VIII n'annonce aucun deuil : elle décrit un rapport à ce qui est caché.",
        },
      ],
    },
    9: {
      heading: "Maison IX : les horizons",
      keywords: ["les voyages lointains", "les études supérieures", "les croyances", "la philosophie", "l'étranger"],
      summary:
        "La maison IX ouvre les horizons : les longs voyages, l'étranger, les études supérieures, la philosophie, les croyances et tout ce qui donne du sens à l'existence.",
      details: [
        {
          kind: "p",
          text: "Le vers latin la nomme Pietas, « la piété » ; certaines versions disent Iter, « le voyage ». La tradition y lisait la religion, les voyages lointains, les songes et la sagesse. Pour les Grecs, c'était la maison du Dieu, où le Soleil était en joie.",
        },
        {
          kind: "p",
          text: "On y lit aujourd'hui la quête de sens, l'enseignement, l'édition, le droit, les cultures étrangères et l'envie d'aller voir plus loin. Le Sagittaire et Jupiter, signe et planète de l'expansion, lui correspondent.",
        },
      ],
    },
    10: {
      heading: "Maison X : la vocation",
      keywords: ["la vocation", "la carrière", "la réputation", "les ambitions", "l'autorité"],
      summary:
        "Dans la plupart des systèmes, la maison X commence au Milieu du Ciel, le point le plus haut du thème. Elle parle de ce que l'on accomplit aux yeux du monde : la vocation, la carrière, la réputation et les ambitions.",
      details: [
        {
          kind: "p",
          text: "Regnum, « le royaume », dit le vers latin : la tradition y voyait le pouvoir, les honneurs, le métier et les actions d'une vie. Les Grecs parlaient du milieu du ciel, et aussi de praxis, l'action. Pour beaucoup d'auteurs anciens, c'était, avec la maison I, la plus puissante du thème.",
        },
        {
          kind: "p",
          text: "Les modernes y voient la place sociale, l'image publique, les responsabilités et les figures d'autorité ; certains y lisent la mère, en miroir de la maison IV. Elle a pour signe naturel le Capricorne, gouverné par Saturne, l'astre de l'ambition patiente.",
        },
      ],
    },
    11: {
      heading: "Maison XI : les amitiés",
      keywords: ["les amis", "les groupes", "les projets", "les espoirs", "la solidarité"],
      summary:
        "La maison XI est celle des amis et des projets partagés : les groupes, les réseaux, les soutiens, les espoirs et les idéaux que l'on porte avec d'autres.",
      details: [
        {
          kind: "p",
          text: "Son nom latin, Benefacta, « les bienfaits », vient de ce que la tradition y lisait les amis, les protecteurs et les faveurs reçues. Les Grecs la nommaient le Bon Génie, et Jupiter y était en joie : c'était l'une des maisons les plus favorables du thème.",
        },
        {
          kind: "p",
          text: "Les modernes y rangent la vie collective, les associations, les causes défendues, la solidarité et les rêves d'avenir. Le Verseau lui correspond, avec Uranus pour maître chez les modernes et Saturne dans la tradition.",
        },
      ],
    },
    12: {
      heading: "Maison XII : l'intériorité",
      keywords: ["l'intériorité", "la solitude", "l'inconscient", "les épreuves", "la spiritualité"],
      summary:
        "La maison XII précède l'Ascendant, juste au-dessus de l'horizon est. Elle concerne ce qui se vit en retrait : la solitude, la vie intérieure, l'inconscient, les épreuves et le dévouement discret.",
      details: [
        {
          kind: "p",
          text: "Le vers latin se clôt sur un mot sévère, Carcer, « la prison » : on y lisait l'enfermement, les ennemis cachés, les chagrins et l'exil. Les Grecs l'appelaient le Mauvais Génie, et Saturne y était en joie. Comme la maison VI, elle ne forme aucun aspect avec l'Ascendant.",
        },
        {
          kind: "p",
          text: "Les modernes en proposent une lecture plus douce : la retraite choisie, le rêve, la méditation, la compassion, les lieux de soin, tout ce qui se joue en coulisses. Les Poissons en sont le signe naturel, gouvernés par Neptune pour les modernes et par Jupiter dans la tradition.",
        },
      ],
    },
  },
  systems: {
    placidus: {
      heading: "Placidus : le partage du temps",
      summary:
        "Le système le plus répandu aujourd'hui en Occident. Il porte le nom de Placide de Titis, moine et mathématicien italien du XVIIe siècle, et découpe le ciel selon le temps que met chaque degré du zodiaque à monter de l'horizon au méridien.",
      details: [
        {
          kind: "p",
          text: "Ce temps s'appelle le demi-arc. Placidus le partage en trois parts égales : le degré qui s'est levé depuis un tiers de son demi-arc marque le début de la maison XII, celui qui en a parcouru les deux tiers, le début de la XI. Le même calcul, mené sous l'horizon, donne les maisons II et III ; les maisons I et X commencent à l'Ascendant et au Milieu du Ciel.",
        },
        {
          kind: "p",
          text: "Placide de Titis (1603-1668), professeur de mathématiques à Pavie, ne l'a pas inventé : il l'attribuait lui-même à Ptolémée. Mais il l'a fait connaître, et des tables de maisons toutes calculées l'ont rendu courant aux XIXe et XXe siècles. Son point faible : des maisons très inégales aux hautes latitudes, et plus de solution du tout au-delà des cercles polaires.",
        },
      ],
    },
    equal: {
      heading: "Maisons égales : douze parts de 30 degrés",
      summary:
        "Le système le plus simple : chaque maison mesure exactement 30 degrés, à partir du degré de l'Ascendant. La maison I va de l'Ascendant jusqu'à 30 degrés plus loin, la maison II commence là, et ainsi de suite.",
      details: [
        {
          kind: "p",
          text: "Ce découpage ne dépend que de l'Ascendant : il reste calculable sous presque toutes les latitudes, et ses maisons gardent la même taille. Le Milieu du Ciel, en revanche, ne coïncide pas forcément avec le début de la maison X : il tombe le plus souvent dans la maison IX ou X, et les astrologues le lisent alors comme un point à part.",
        },
        {
          kind: "p",
          text: "Son principe est ancien : certains historiens le lisent déjà chez Vettius Valens, au IIe siècle, d'autres en doutent. Il a gardé des partisans au XXe siècle, séduits par sa simplicité et par la régularité de ses maisons.",
        },
      ],
    },
    wholeSign: {
      heading: "Signes entiers : un signe, une maison",
      summary:
        "Le plus ancien des systèmes : le signe où se trouve l'Ascendant forme tout entier la maison I, le signe suivant la maison II, et ainsi de suite. Maisons et signes coïncident exactement.",
      details: [
        {
          kind: "p",
          text: "C'est le découpage des astrologues hellénistiques, aux premiers siècles de notre ère : le thème se lisait signe par signe, et l'Ascendant pouvait se trouver n'importe où dans la maison I. L'Occident l'a peu à peu abandonné au Moyen Âge, mais l'astrologie indienne ne l'a jamais quitté.",
        },
        {
          kind: "p",
          text: "Redécouvert en Occident dans les années 1980 et 1990, grâce aux traductions des textes grecs, il séduit par sa clarté. Comme avec les maisons égales, le Milieu du Ciel y flotte : il peut tomber dans la maison IX, X ou XI, voire ailleurs aux hautes latitudes.",
        },
      ],
    },
    porphyry: {
      heading: "Porphyre : chaque quadrant en trois",
      summary:
        "Un découpage géométrique : on part des quatre angles, puis on divise chaque quadrant en trois parts égales, mesurées le long du zodiaque. Les maisons I et X commencent à l'Ascendant et au Milieu du Ciel.",
      details: [
        {
          kind: "p",
          text: "Si 75 degrés séparent le Milieu du Ciel de l'Ascendant, par exemple, chacune des maisons X, XI et XII en reçoit 25 ; le quadrant suivant, plus large, donne des maisons plus grandes. Deux maisons opposées ont toujours la même taille.",
        },
        {
          kind: "p",
          text: "Il porte le nom de Porphyre de Tyr, philosophe néoplatonicien du IIIe siècle, qui l'expose dans son Introduction au Tétrabible de Ptolémée ; un procédé voisin figure déjà chez Vettius Valens, au IIe siècle. Simple à calculer, il sert souvent de solution de repli quand Placidus n'est pas défini : c'est le cas sur ce site.",
        },
      ],
    },
  },
  polar: {
    heading: "Au-delà des cercles polaires",
    summary:
      "Au-delà d'environ 66 degrés de latitude, nord ou sud, le système de Placidus n'est plus défini : certains degrés du zodiaque ne se lèvent ni ne se couchent jamais, et leur temps de passage au-dessus de l'horizon ne peut plus être partagé.",
    details: [
      {
        kind: "p",
        text: "Placidus repose sur le demi-arc, le temps que met un degré du zodiaque à aller de l'horizon au méridien. Or, à ces latitudes, une partie du zodiaque reste toute la journée au-dessus de l'horizon, et la partie opposée toute la journée au-dessous : comme le Soleil de minuit en été, ces degrés n'ont ni lever ni coucher. Leur demi-arc n'existe pas, et les maisons intermédiaires ne peuvent plus être calculées.",
      },
      {
        kind: "p",
        text: "La limite vient de l'inclinaison de l'axe de la Terre : 90 degrés moins 23,4 donnent environ 66,6 degrés, la latitude des cercles polaires. Tromsø, en Norvège, ou Mourmansk, en Russie, sont au-delà ; un peu en deçà déjà, les maisons de Placidus deviennent très inégales, certaines immenses, d'autres minuscules.",
      },
      {
        kind: "p",
        text: "Il faut alors un autre système : Porphyre, les maisons égales ou les signes entiers, qui ne dépendent que des angles, restent calculables. Ce site affiche Porphyre à la place de Placidus au-delà de 66 degrés.",
      },
    ],
  },
};
