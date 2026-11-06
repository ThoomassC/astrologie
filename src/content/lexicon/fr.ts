import type { LexiconContent } from "./types";

/** Lexique : les mots de l'astrologie, dans l'ordre alphabétique français, chacun avec ses renvois. */
export const LEXICON_FR: LexiconContent = {
  title: "Lexique",
  lead: "Les mots de l'astrologie, de l'Ascendant au zodiaque, expliqués simplement, avec ce qu'en dit la tradition et, quand il le faut, l'astronomie.",
  entries: [
    {
      id: "angle",
      term: "Angle",
      text: {
        summary:
          "Les quatre angles d'un thème sont l'Ascendant, le Descendant, le Milieu du Ciel et le Fond du Ciel. Ils marquent les croisements de l'écliptique avec l'horizon et le méridien du lieu de naissance.",
        details: [
          {
            kind: "p",
            text: "Ce sont les points les plus sensibles du thème selon la tradition : un astre proche d'un angle est dit angulaire et passe pour puissant. Les angles dépendent de l'heure et du lieu ; sans heure de naissance, on ne peut pas les calculer.",
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
          "L'Ascendant est le degré du zodiaque qui se levait à l'horizon est au moment et au lieu de la naissance. Il ouvre la maison I.",
        details: [
          {
            kind: "p",
            text: "Le ciel tourne d'un degré en quatre minutes environ : l'Ascendant change donc de signe toutes les deux heures en moyenne, et c'est pourquoi l'heure de naissance compte tant. La tradition y voit la manière de se présenter au monde et le corps ; les Grecs l'appelaient horoskopos, d'où vient le mot horoscope.",
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
          "Un aspect est un angle remarquable entre deux astres, mesuré le long du zodiaque : 0° pour la conjonction, 60° pour le sextile, 90° pour le carré, 120° pour le trigone, 180° pour l'opposition.",
        details: [
          {
            kind: "p",
            text: "La tradition dit certains aspects harmonieux, comme le trigone et le sextile, et d'autres tendus, comme le carré et l'opposition. L'angle exact est rare : on admet un écart, l'orbe. Des aspects mineurs, comme le quinconce, complètent la liste.",
          },
        ],
      },
      see: ["orbe", "conjonction", "quinconce"],
    },
    {
      id: "astre",
      term: "Astre",
      text: {
        summary:
          "Sur ce site, les astres sont les dix corps qu'emploie l'astrologie occidentale : le Soleil, la Lune, Mercure, Vénus, Mars, Jupiter, Saturne, Uranus, Neptune et Pluton.",
        details: [
          {
            kind: "p",
            text: "Les astrologues les appellent souvent tous « planètes », même le Soleil et la Lune, selon l'usage antique : le mot grec planêtês signifie « errant », car ces astres se déplacent parmi les étoiles. Les sept premiers sont visibles à l'œil nu ; les trois derniers ont été découverts au télescope, en 1781, en 1846 et en 1930.",
          },
        ],
      },
      see: ["luminaires", "retrogradation"],
    },
    {
      id: "astrologie",
      term: "Astrologie",
      text: {
        summary:
          "L'astrologie est une tradition qui relie la position des astres à la vie humaine, au caractère et aux événements. Son nom vient du grec astron, l'astre, et logos, la parole ou l'étude.",
        details: [
          {
            kind: "p",
            text: "Née en Mésopotamie, elle a longtemps été confondue avec l'astronomie, la science qui étudie les astres pour eux-mêmes. Les deux se sont séparées au XVIIe siècle ; les tests menés depuis n'ont pas montré que l'astrologie décrive une personne ou prédise un événement mieux que le hasard.",
          },
        ],
      },
      see: ["horoscope", "zodiaque", "theme-natal"],
    },
    {
      id: "cardinal",
      term: "Cardinal",
      text: {
        summary:
          "Les signes cardinaux sont le Bélier, le Cancer, la Balance et le Capricorne : chacun commence à un équinoxe ou à un solstice et ouvre une saison.",
        details: [
          {
            kind: "p",
            text: "C'est l'une des trois modalités, avec les signes fixes et mutables. La tradition y voit l'initiative, l'élan et le goût de lancer les choses. Le mot vient du latin cardo, le gond : ces signes sont les charnières de l'année.",
          },
        ],
      },
      see: ["modalite", "fixe", "mutable"],
    },
    {
      id: "carre",
      term: "Carré",
      text: {
        summary: "Le carré est un aspect de 90° entre deux astres, soit un quart du cercle du zodiaque.",
        details: [
          {
            kind: "p",
            text: "La tradition le range parmi les aspects tendus : il figure une friction entre deux fonctions, un défi qui pousse à agir. Il relie le plus souvent deux signes de même modalité, comme le Bélier et le Cancer, tous deux cardinaux.",
          },
        ],
      },
      see: ["aspect", "opposition", "modalite"],
    },
    {
      id: "chute",
      term: "Chute",
      text: {
        summary:
          "Un astre est en chute dans le signe opposé à celui de son exaltation. Le Soleil, exalté dans le Bélier, est ainsi en chute dans la Balance.",
        details: [
          {
            kind: "p",
            text: "Avec l'exil, la chute fait partie des faiblesses que la tradition prête aux astres placés loin de leurs signes de prédilection : l'astre s'y exprimerait avec moins d'aisance.",
          },
        ],
      },
      see: ["exaltation", "exil", "dignite"],
    },
    {
      id: "conjonction",
      term: "Conjonction",
      text: {
        summary:
          "Il y a conjonction quand deux astres sont au même endroit du zodiaque, ou presque : l'angle entre eux est de 0°, à l'orbe près.",
        details: [
          {
            kind: "p",
            text: "La tradition y voit une fusion des deux fonctions, ni harmonieuse ni tendue par elle-même : tout dépend des astres en jeu. Les grandes conjonctions de Jupiter et de Saturne, qui reviennent environ tous les vingt ans, ont longtemps servi aux astrologues à découper l'histoire.",
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
          "Une constellation est une région du ciel nommée d'après une figure d'étoiles. L'Union astronomique internationale en reconnaît 88, dont les limites ont été publiées en 1930.",
        details: [
          {
            kind: "p",
            text: "Il ne faut pas les confondre avec les signes : le Soleil traverse treize constellations de tailles très inégales, alors que le zodiaque des astrologues compte douze signes de 30°. La précession a, de plus, décalé signes et constellations d'environ une case depuis l'Antiquité.",
          },
        ],
      },
      see: ["signe", "ophiuchus", "precession"],
    },
    {
      id: "cuspide",
      term: "Cuspide",
      text: {
        summary:
          "Une cuspide est le début d'une maison, ou plus largement la frontière entre deux maisons ou deux signes. Le mot vient du latin cuspis, la pointe.",
        details: [
          {
            kind: "p",
            text: "Dans la plupart des systèmes, la cuspide de la maison I est l'Ascendant, celle de la maison X le Milieu du Ciel. On dit d'une personne née quand le Soleil changeait de signe qu'elle est « née sur la cuspide », mais le calcul place toujours le Soleil dans l'un ou l'autre signe.",
          },
        ],
      },
      see: ["maison", "placidus", "signe"],
    },
    {
      id: "decan",
      term: "Décan",
      text: {
        summary: "Un décan est un tiers de signe, soit 10° du zodiaque : chaque signe en compte trois, et le zodiaque trente-six.",
        details: [
          {
            kind: "p",
            text: "Les décans viennent de l'Égypte ancienne, où trente-six groupes d'étoiles servaient à lire l'heure la nuit. La tradition gréco-romaine les a confiés à des astres, dans l'ordre chaldéen ; les auteurs modernes les rattachent plutôt aux signes de même élément.",
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
          "Le Descendant est le degré du zodiaque qui se couchait à l'horizon ouest au moment de la naissance, juste en face de l'Ascendant. Il ouvre la maison VII.",
        details: [
          {
            kind: "p",
            text: "La tradition y lit la relation à l'autre : le couple, les associations, les adversaires déclarés. Comme l'Ascendant, il ne se calcule qu'avec l'heure de naissance.",
          },
        ],
      },
      see: ["ascendant", "angle", "maison"],
    },
    {
      id: "dignite",
      term: "Dignité",
      text: {
        summary:
          "Les dignités mesurent, dans la tradition, la force d'un astre selon le signe où il se trouve. Dans son domicile ou son exaltation, l'astre est dit digne ; en exil ou en chute, il est dit débilité.",
        details: [
          {
            kind: "p",
            text: "L'astrologie ancienne ajoutait des dignités plus fines, comme la triplicité, les termes et les faces. Elle s'en servait pour juger quel astre domine un thème.",
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
          "Le domicile d'un astre est le signe qu'il gouverne : Mars est chez lui dans le Bélier, Vénus dans le Taureau et la Balance. On dit aussi que l'astre est le maître du signe.",
        details: [
          {
            kind: "p",
            text: "Dans la tradition, les sept astres visibles à l'œil nu se partagent les douze signes : le Soleil et la Lune en ont un chacun, les cinq planètes deux. Les modernes ont confié le Verseau à Uranus, les Poissons à Neptune et le Scorpion à Pluton.",
          },
        ],
      },
      see: ["maitre", "exil", "dignite"],
    },
    {
      id: "ecliptique",
      term: "Écliptique",
      text: {
        summary:
          "L'écliptique est le grand cercle que le Soleil semble parcourir dans le ciel en un an, vu de la Terre. C'est la ligne médiane du zodiaque.",
        details: [
          {
            kind: "p",
            text: "Son nom vient des éclipses, qui ne se produisent que lorsque la Lune passe près de ce cercle. Il est incliné d'environ 23,4° sur l'équateur céleste, et le croise en deux points : les équinoxes.",
          },
        ],
      },
      see: ["zodiaque", "equinoxe", "noeuds-lunaires"],
    },
    {
      id: "element",
      term: "Élément",
      text: {
        summary:
          "La tradition range les signes en quatre éléments, hérités de la philosophie grecque : le feu, la terre, l'air et l'eau. Chacun réunit trois signes, qui forment une triplicité.",
        details: [
          {
            kind: "list",
            items: [
              "Feu : le Bélier, le Lion, le Sagittaire.",
              "Terre : le Taureau, la Vierge, le Capricorne.",
              "Air : les Gémeaux, la Balance, le Verseau.",
              "Eau : le Cancer, le Scorpion, les Poissons.",
            ],
          },
        ],
      },
      see: ["triplicite", "modalite", "signe"],
    },
    {
      id: "ephemerides",
      term: "Éphémérides",
      text: {
        summary:
          "Les éphémérides sont des tables qui donnent, jour après jour, la position des astres. Les astrologues s'en servaient pour dresser un thème sans refaire tout le calcul.",
        details: [
          {
            kind: "p",
            text: "Longtemps imprimées en épais volumes, elles ont été remplacées par des programmes. Ce site calcule les positions à la demande avec la bibliothèque astronomy-engine, à mieux qu'une minute d'arc.",
          },
        ],
      },
      see: ["theme-natal", "temps-sideral"],
    },
    {
      id: "equinoxe",
      term: "Équinoxe",
      text: {
        summary:
          "Les équinoxes sont les deux moments de l'année, vers le 20 mars et le 22 septembre, où le Soleil franchit l'équateur céleste : le jour et la nuit y durent à peu près autant.",
        details: [
          {
            kind: "p",
            text: "L'équinoxe de mars marque 0° du Bélier dans le zodiaque tropical, celui de septembre 0° de la Balance. Sous l'effet de la précession, ces points glissent lentement parmi les étoiles.",
          },
        ],
      },
      see: ["point-vernal", "solstice", "precession"],
    },
    {
      id: "ere-du-verseau",
      term: "Ère du Verseau",
      text: {
        summary:
          "Selon certains astrologues, l'humanité entrera dans l'ère du Verseau quand le point de l'équinoxe de mars passera de la constellation des Poissons à celle du Verseau.",
        details: [
          {
            kind: "p",
            text: "Sa date est très discutée : faute de frontière commune entre les constellations, les astrologues proposent des années allant du XVe au XXXVIe siècle. Selon les limites officielles des constellations, le point vernal n'entrera dans le Verseau qu'en 2597.",
          },
        ],
      },
      see: ["precession", "point-vernal", "constellation"],
    },
    {
      id: "exaltation",
      term: "Exaltation",
      text: {
        summary:
          "L'exaltation est le signe où un astre est, selon la tradition, à son meilleur, presque comme chez lui : le Soleil dans le Bélier, la Lune dans le Taureau, Saturne dans la Balance.",
        details: [
          {
            kind: "p",
            text: "La tradition donne même un degré précis, comme 19° du Bélier pour le Soleil. Cinq signes n'ont aucun astre exalté. Le signe opposé à l'exaltation est celui de la chute.",
          },
        ],
      },
      see: ["chute", "domicile", "dignite"],
    },
    {
      id: "exil",
      term: "Exil",
      text: {
        summary: "Un astre est en exil dans le signe opposé à son domicile : Mars, maître du Bélier, est ainsi en exil dans la Balance.",
        details: [
          {
            kind: "p",
            text: "La tradition y voit un astre loin de chez lui, qui doit composer avec un milieu peu favorable. On parle aussi de détriment, du latin detrimentum, la perte ou le dommage.",
          },
        ],
      },
      see: ["domicile", "chute", "dignite"],
    },
    {
      id: "fixe",
      term: "Fixe",
      text: {
        summary: "Les signes fixes sont le Taureau, le Lion, le Scorpion et le Verseau : le Soleil les traverse au cœur des saisons.",
        details: [
          {
            kind: "p",
            text: "C'est l'une des trois modalités, avec les signes cardinaux et mutables. La tradition y associe la constance, la stabilité et la ténacité ; leur revers serait l'entêtement.",
          },
        ],
      },
      see: ["modalite", "cardinal", "mutable"],
    },
    {
      id: "fond-du-ciel",
      term: "Fond du Ciel",
      text: {
        summary:
          "Le Fond du Ciel est le point du zodiaque opposé au Milieu du Ciel : celui qui passe au méridien, sous l'horizon, à l'instant de la naissance. Il ouvre la maison IV dans la plupart des systèmes.",
        details: [
          {
            kind: "p",
            text: "La tradition y lit les racines, la famille et le foyer. On l'abrège FC ; son nom latin est imum coeli, le bas du ciel.",
          },
        ],
      },
      see: ["milieu-du-ciel", "angle", "maison"],
    },
    {
      id: "glyphe",
      term: "Glyphe",
      text: {
        summary:
          "Un glyphe est le petit dessin qui représente un signe, un astre ou un aspect : deux cornes pour le Bélier, un cercle marqué d'un point pour le Soleil.",
        details: [
          {
            kind: "p",
            text: "Les astrologues les emploient pour noter un thème d'un coup d'œil. Ce site les dessine lui-même, plutôt que d'utiliser les caractères des claviers, qui s'affichent parfois comme des émojis selon les appareils.",
          },
        ],
      },
      see: ["signe", "astre"],
    },
    {
      id: "horoscope",
      term: "Horoscope",
      text: {
        summary:
          "Le mot vient du grec horoskopos, « celui qui observe l'heure » : il désignait d'abord l'Ascendant, le degré qui se lève à la naissance, puis le thème tout entier.",
        details: [
          {
            kind: "p",
            text: "Aujourd'hui, il désigne surtout la rubrique des journaux qui donne des prévisions pour chacun des douze signes solaires, née en Angleterre au début des années 1930. Ces textes, écrits pour des millions de lecteurs à la fois, ne tiennent compte ni de l'heure ni du lieu de naissance.",
          },
        ],
      },
      see: ["ascendant", "signe-solaire", "theme-natal"],
    },
    {
      id: "luminaires",
      term: "Luminaires",
      text: {
        summary: "Les luminaires sont le Soleil et la Lune, les deux astres les plus brillants du ciel.",
        details: [
          {
            kind: "p",
            text: "La tradition leur donne une place à part : le Soleil y représente l'identité et l'élan vital, la Lune les émotions et les besoins intimes. Ils ne rétrogradent jamais, et les astrologues leur accordent un orbe plus large dans les aspects.",
          },
        ],
      },
      see: ["astre", "orbe", "retrogradation"],
    },
    {
      id: "maison",
      term: "Maison",
      text: {
        summary:
          "Les maisons sont les douze secteurs d'un thème, comptés à partir de l'Ascendant. Chacune correspond, selon la tradition, à un domaine de la vie, de la personnalité à la carrière.",
        details: [
          {
            kind: "p",
            text: "Elles découpent le ciel du lieu de naissance, et non le zodiaque : il faut l'heure exacte pour les calculer. Il existe plusieurs façons de les tracer, comme Placidus, les maisons égales, les signes entiers ou Porphyre.",
          },
        ],
      },
      see: ["cuspide", "placidus", "ascendant"],
    },
    {
      id: "maitre",
      term: "Maître",
      text: {
        summary:
          "Le maître d'un signe est l'astre qui le gouverne, celui dont c'est le domicile : Mars pour le Bélier, Vénus pour le Taureau.",
        details: [
          {
            kind: "p",
            text: "Par extension, le maître d'une maison est le maître du signe où tombe sa cuspide, et le maître du thème celui du signe de l'Ascendant. Les astrologues suivent ces liens d'un astre à l'autre pour lire un thème comme un réseau.",
          },
        ],
      },
      see: ["domicile", "maison", "ascendant"],
    },
    {
      id: "melothesie",
      term: "Mélothésie",
      text: {
        summary:
          "La mélothésie fait correspondre les signes du zodiaque aux parties du corps, du Bélier pour la tête aux Poissons pour les pieds.",
        details: [
          {
            kind: "p",
            text: "Déjà exposée par le poète Manilius vers l'an 10, elle a guidé la médecine médiévale : on évitait d'opérer ou de saigner un membre quand la Lune traversait le signe qui le gouverne. L'Homme anatomique des Très Riches Heures du duc de Berry en est une célèbre illustration.",
          },
        ],
      },
      see: ["signe", "zodiaque"],
    },
    {
      id: "milieu-du-ciel",
      term: "Milieu du Ciel",
      text: {
        summary:
          "Le Milieu du Ciel est le degré du zodiaque qui culminait au méridien du lieu, au sud pour l'hémisphère nord, à l'instant de la naissance. Il ouvre la maison X dans la plupart des systèmes.",
        details: [
          {
            kind: "p",
            text: "La tradition y lit la vocation, la carrière et la réputation. On l'abrège MC, de son nom latin medium coeli. Dans le système des maisons égales, il ne coïncide pas toujours avec la cuspide de la maison X.",
          },
        ],
      },
      see: ["fond-du-ciel", "angle", "maison"],
    },
    {
      id: "modalite",
      term: "Modalité",
      text: {
        summary:
          "La modalité range les signes selon leur place dans la saison : cardinaux au début, fixes au cœur, mutables à la fin.",
        details: [
          {
            kind: "p",
            text: "Chaque modalité réunit quatre signes, un par élément. Combinées aux quatre éléments, les trois modalités donnent à chacun des douze signes une identité unique : le Bélier est ainsi le seul signe de feu cardinal.",
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
          "Les signes mutables sont les Gémeaux, la Vierge, le Sagittaire et les Poissons : chacun termine une saison et prépare la suivante.",
        details: [
          {
            kind: "p",
            text: "C'est l'une des trois modalités. La tradition y voit l'adaptation, la souplesse et le mouvement ; Ptolémée les disait « à deux corps », et leurs figures sont souvent doubles, comme les deux jumeaux ou les deux poissons.",
          },
        ],
      },
      see: ["modalite", "cardinal", "fixe"],
    },
    {
      id: "noeuds-lunaires",
      term: "Nœuds lunaires",
      text: {
        summary:
          "Les nœuds lunaires sont les deux points où l'orbite de la Lune croise l'écliptique : le nœud nord, où elle monte, et le nœud sud, en face. Ce ne sont pas des astres, mais des points calculés.",
        details: [
          {
            kind: "p",
            text: "Ils reculent le long du zodiaque et en font le tour en 18,6 ans environ. Les éclipses ne se produisent que lorsque la Lune passe près d'un nœud. Ce site calcule le nœud moyen ; l'astrologie indienne nomme les deux nœuds Rahu et Ketu.",
          },
        ],
      },
      see: ["ecliptique", "retrogradation"],
    },
    {
      id: "ophiuchus",
      term: "Ophiuchus",
      text: {
        summary:
          "Ophiuchus, le Serpentaire, est une constellation que le Soleil traverse entre le Scorpion et le Sagittaire, de la fin novembre à la mi-décembre.",
        details: [
          {
            kind: "p",
            text: "Ce n'est pas un signe : le zodiaque des astrologues compte douze parts égales de 30°, et non les treize constellations de tailles inégales que traverse le Soleil. L'annonce d'un « treizième signe » revient pourtant régulièrement dans la presse.",
          },
        ],
      },
      see: ["constellation", "signe", "zodiaque"],
    },
    {
      id: "opposition",
      term: "Opposition",
      text: {
        summary: "L'opposition est un aspect de 180° : les deux astres se font face, de part et d'autre du zodiaque.",
        details: [
          {
            kind: "p",
            text: "La tradition la range parmi les aspects tendus : elle figure un face-à-face, une tension à équilibrer, parfois une complémentarité. La pleine lune est une opposition du Soleil et de la Lune.",
          },
        ],
      },
      see: ["aspect", "carre", "polarite"],
    },
    {
      id: "orbe",
      term: "Orbe",
      text: {
        summary:
          "L'orbe est l'écart toléré autour de l'angle exact d'un aspect : avec un orbe de 4°, un trigone à 116° ou à 124° compte encore.",
        details: [
          {
            kind: "p",
            text: "Il n'existe pas de norme, et chaque école a ses orbes. Ce site admet 8° pour la conjonction et l'opposition, 7° pour le carré et le trigone, 5° pour le sextile, un peu plus quand le Soleil ou la Lune y prend part.",
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
          "Placidus est le système de maisons le plus employé aujourd'hui. Il porte le nom de Placidus de Titis, un moine et mathématicien italien du XVIIe siècle.",
        details: [
          {
            kind: "p",
            text: "Il partage en trois parts égales le temps que met chaque degré du zodiaque à monter de l'horizon au méridien, puis à redescendre. Près des cercles polaires, certains degrés ne se lèvent ni ne se couchent : au-delà de 66° de latitude, le site passe au système de Porphyre.",
          },
        ],
      },
      see: ["maison", "cuspide", "temps-sideral"],
    },
    {
      id: "point-vernal",
      term: "Point vernal",
      text: {
        summary:
          "Le point vernal est la position du Soleil à l'équinoxe de mars, là où l'écliptique croise l'équateur céleste. Il marque 0° du Bélier dans le zodiaque tropical.",
        details: [
          {
            kind: "p",
            text: "Il recule lentement parmi les étoiles, d'environ 1° en 72 ans, à cause de la précession. Il se trouve aujourd'hui dans la constellation des Poissons.",
          },
        ],
      },
      see: ["equinoxe", "precession", "zodiaque"],
    },
    {
      id: "polarite",
      term: "Polarité",
      text: {
        summary:
          "La polarité partage les signes en deux groupes alternés : masculins et diurnes pour le feu et l'air, féminins et nocturnes pour la terre et l'eau.",
        details: [
          {
            kind: "p",
            text: "Ces mots désignent des qualités symboliques, tournées vers l'extérieur ou vers l'intérieur, et non le genre des personnes. Les astrologues d'aujourd'hui parlent aussi de signes actifs et réceptifs.",
          },
        ],
      },
      see: ["element", "signe"],
    },
    {
      id: "precession",
      term: "Précession",
      text: {
        summary:
          "La précession des équinoxes est le lent mouvement de l'axe de la Terre, qui décrit un cône en environ 25 800 ans. Elle fait reculer le point vernal d'environ 1° tous les 72 ans.",
        details: [
          {
            kind: "p",
            text: "Découverte par Hipparque vers 130 av. J.-C., elle explique pourquoi les signes du zodiaque tropical ne coïncident plus avec les constellations du même nom. L'astrologie indienne, qui suit les étoiles, emploie un zodiaque sidéral.",
          },
        ],
      },
      see: ["point-vernal", "zodiaque", "ere-du-verseau"],
    },
    {
      id: "quinconce",
      term: "Quinconce",
      text: {
        summary: "Le quinconce est un aspect mineur de 150°, entre deux signes qui n'ont ni élément ni modalité en commun.",
        details: [
          {
            kind: "p",
            text: "Les astrologues modernes y voient un malaise, un ajustement nécessaire entre deux fonctions qui s'ignorent. Son nom vient du latin quincunx, cinq douzièmes : 150° valent cinq douzièmes du cercle.",
          },
        ],
      },
      see: ["aspect", "orbe"],
    },
    {
      id: "retrogradation",
      term: "Rétrogradation",
      text: {
        summary:
          "Une planète est dite rétrograde quand elle semble reculer parmi les étoiles pendant quelques semaines ou quelques mois. Ce n'est qu'une apparence, due au mouvement de la Terre.",
        details: [
          {
            kind: "p",
            text: "La Terre double les planètes plus lointaines, ou se fait doubler par Mercure et Vénus, comme une voiture sur une autoroute : vue de la Terre, la planète paraît reculer. Le Soleil et la Lune ne rétrogradent jamais ; la tradition voit dans une planète rétrograde une énergie tournée vers l'intérieur.",
          },
        ],
      },
      see: ["astre", "transit"],
    },
    {
      id: "sextile",
      term: "Sextile",
      text: {
        summary:
          "Le sextile est un aspect de 60°, un sixième du cercle, le plus souvent entre deux signes d'éléments compatibles : le feu et l'air, ou la terre et l'eau.",
        details: [
          {
            kind: "p",
            text: "La tradition le range parmi les aspects harmonieux, plus discret que le trigone : il figurerait une occasion, une facilité qu'il reste à saisir.",
          },
        ],
      },
      see: ["aspect", "trigone"],
    },
    {
      id: "signe",
      term: "Signe",
      text: {
        summary:
          "Un signe du zodiaque est une portion de 30° de l'écliptique. Les douze signes, du Bélier aux Poissons, partent de l'équinoxe de mars dans le zodiaque tropical.",
        details: [
          {
            kind: "p",
            text: "Ils portent le nom de constellations voisines, mais ne se confondent pas avec elles. La tradition associe chacun à un élément, à une modalité, à une polarité et à un astre maître.",
          },
        ],
      },
      see: ["zodiaque", "constellation", "element"],
    },
    {
      id: "signe-solaire",
      term: "Signe solaire",
      text: {
        summary:
          "Le signe solaire est le signe où se trouvait le Soleil à la naissance, celui que l'on donne quand on dit « je suis Lion ».",
        details: [
          {
            kind: "p",
            text: "Il dépend presque seulement de la date, d'où son succès dans les horoscopes des journaux. Pour les astrologues, il n'est qu'une partie du thème, à côté de la Lune, de l'Ascendant et des autres astres.",
          },
        ],
      },
      see: ["horoscope", "ascendant", "theme-natal"],
    },
    {
      id: "solstice",
      term: "Solstice",
      text: {
        summary:
          "Les solstices sont les deux moments de l'année, vers le 21 juin et le 21 décembre, où le Soleil atteint son point le plus au nord ou le plus au sud de l'équateur céleste.",
        details: [
          {
            kind: "p",
            text: "Le solstice de juin marque 0° du Cancer dans le zodiaque tropical, celui de décembre 0° du Capricorne. Le mot vient du latin solstitium, l'arrêt du Soleil, qui semble alors suspendre sa course vers le nord ou vers le sud.",
          },
        ],
      },
      see: ["equinoxe", "cardinal"],
    },
    {
      id: "stellium",
      term: "Stellium",
      text: {
        summary:
          "Un stellium est un groupe d'astres réunis dans un même signe ou une même maison : au moins trois ou quatre, selon les écoles.",
        details: [
          {
            kind: "p",
            text: "La tradition y voit une concentration d'énergie, qui met en valeur ce signe ou ce domaine de la vie. Les astres d'un stellium sont souvent en conjonction les uns avec les autres.",
          },
        ],
      },
      see: ["conjonction", "maison"],
    },
    {
      id: "temps-sideral",
      term: "Temps sidéral",
      text: {
        summary:
          "Le temps sidéral mesure la rotation de la Terre par rapport aux étoiles, et non au Soleil : un jour sidéral dure 23 heures, 56 minutes et 4 secondes.",
        details: [
          {
            kind: "p",
            text: "Le temps sidéral local indique quel degré du ciel passe au méridien. C'est de lui que l'on déduit le Milieu du Ciel, puis l'Ascendant et les maisons d'un thème.",
          },
        ],
      },
      see: ["milieu-du-ciel", "ascendant", "placidus"],
    },
    {
      id: "theme-natal",
      term: "Thème natal",
      text: {
        summary:
          "Le thème natal, ou thème astral, est la carte du ciel à l'instant et au lieu d'une naissance : la position des astres dans les signes et les maisons, et les aspects qu'ils forment.",
        details: [
          {
            kind: "p",
            text: "Il se dessine comme une roue et se calcule à partir de la date, de l'heure et du lieu. Les astrologues le lisent comme un portrait symbolique ; aucune étude n'a montré qu'il décrive une personnalité mieux que le hasard.",
          },
        ],
      },
      see: ["ascendant", "maison", "aspect"],
    },
    {
      id: "transit",
      term: "Transit",
      text: {
        summary: "Un transit est le passage d'un astre du ciel actuel sur un point du thème natal, ou en aspect avec lui.",
        details: [
          {
            kind: "p",
            text: "Les astrologues s'en servent pour parler des périodes d'une vie. Le plus célèbre est le retour de Saturne à sa place natale, vers 29 ans, puisque la planète fait le tour du zodiaque en un peu moins de trente ans.",
          },
        ],
      },
      see: ["theme-natal", "aspect"],
    },
    {
      id: "trigone",
      term: "Trigone",
      text: {
        summary: "Le trigone est un aspect de 120°, un tiers du cercle, le plus souvent entre deux signes du même élément.",
        details: [
          {
            kind: "p",
            text: "La tradition y voit l'aspect le plus harmonieux : une circulation facile entre deux fonctions. Trois astres reliés deux à deux par des trigones forment un grand trigone.",
          },
        ],
      },
      see: ["aspect", "triplicite", "sextile"],
    },
    {
      id: "triplicite",
      term: "Triplicité",
      text: {
        summary:
          "Une triplicité est le groupe des trois signes d'un même élément, à 120° les uns des autres : le Bélier, le Lion et le Sagittaire forment la triplicité de feu.",
        details: [
          {
            kind: "p",
            text: "L'astrologie ancienne confiait chaque triplicité à des astres maîtres, de jour et de nuit, qui comptaient parmi les dignités d'un astre.",
          },
        ],
      },
      see: ["element", "trigone", "dignite"],
    },
    {
      id: "zodiaque",
      term: "Zodiaque",
      text: {
        summary:
          "Le zodiaque est la bande du ciel, de part et d'autre de l'écliptique, où l'on voit passer le Soleil, la Lune et les planètes. Son nom vient d'un mot grec qui évoque de petits animaux.",
        details: [
          {
            kind: "p",
            text: "Les astrologues occidentaux le divisent en douze signes de 30° à partir de l'équinoxe de mars : c'est le zodiaque tropical, calé sur les saisons. Le zodiaque sidéral de l'astrologie indienne part, lui, d'un repère pris dans les étoiles.",
          },
        ],
      },
      see: ["signe", "ecliptique", "precession"],
    },
  ],
};
