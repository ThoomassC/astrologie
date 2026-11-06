import type { AspectsContent } from "./types";

export const ASPECTS_FR: AspectsContent = {
  index: {
    title: "Les aspects",
    lead: "Les angles que forment deux astres le long du zodiaque : conjonction, carré, trigone et les autres, avec ce qu'en dit la tradition.",
    intro: {
      summary:
        "Un aspect est un angle entre deux astres, mesuré le long du zodiaque. Certains angles, issus de la division du cercle en parts égales, sont jugés significatifs : les astrologues y lisent un dialogue entre deux fonctions, facile ou tendu.",
      details: [
        {
          kind: "p",
          text: "Le mot vient du latin aspectus, « le regard » : les Anciens disaient que les astres se « regardent ». On mesure l'écart en longitude, le long du zodiaque : un astre à 10 degrés du Bélier et un autre à 10 degrés du Cancer sont séparés de 90 degrés, et forment un carré.",
        },
        {
          kind: "p",
          text: "Les aspects majeurs viennent de la division du cercle par 1, 2, 3, 4 et 6 : conjonction, opposition, trigone, carré et sextile. Les aspects mineurs naissent de divisions plus fines, par 5, 8 ou 12. Comme deux astres sont rarement à l'angle exact, on tolère un écart, l'orbe.",
        },
        {
          kind: "p",
          text: "Ce site calcule les aspects entre les dix astres, l'Ascendant et le Milieu du Ciel. Leur couleur dans la roue dit leur nature selon la tradition : harmonieux, tendu, ou neutre pour la conjonction.",
        },
      ],
    },
  },
  aspects: {
    conjunction: {
      heading: "Conjonction (0°)",
      keywords: ["la fusion", "l'intensité", "l'union", "la concentration"],
      summary:
        "Deux astres sont en conjonction quand ils occupent le même degré du zodiaque, ou presque. Leurs énergies se mêlent : la tradition y voit une union, dont la couleur dépend des astres réunis.",
      details: [
        {
          kind: "p",
          text: "C'est l'aspect le plus puissant pour la plupart des astrologues, et le seul que ce site range parmi les aspects neutres, ni harmonieux ni tendus par eux-mêmes. Une conjonction de Vénus et de Jupiter, les deux bénéfiques, passe pour heureuse ; une conjonction de Mars et de Saturne, pour plus exigeante.",
        },
        {
          kind: "p",
          text: "Ptolémée ne la range pas parmi ses quatre aspects : deux astres réunis ne se « regardent » pas, ils sont ensemble. Elle fait pourtant partie des cinq aspects majeurs, dits « ptoléméens », et la tradition moderne la place en tête. Le Soleil et la Lune en conjonction, c'est la nouvelle lune.",
        },
        {
          kind: "p",
          text: "Sur ce site, l'orbe toléré est de 8 degrés, ou de 10 si le Soleil ou la Lune y prend part. Son glyphe est un petit cercle d'où part un trait.",
        },
      ],
    },
    sextile: {
      heading: "Sextile (60°)",
      keywords: ["l'opportunité", "l'échange", "la coopération", "la facilité"],
      summary:
        "Le sextile relie deux astres séparés de 60 degrés, un sixième du cercle. La tradition le compte parmi les aspects harmonieux : une entente facile, une occasion à saisir plutôt qu'un cadeau tout fait.",
      details: [
        {
          kind: "p",
          text: "Il relie le plus souvent deux signes d'éléments complémentaires, le feu et l'air, ou la terre et l'eau : le Bélier et les Gémeaux, par exemple, ou le Taureau et le Cancer. Ces signes partagent la même polarité, masculine ou féminine.",
        },
        {
          kind: "p",
          text: "Ptolémée le décrit au IIe siècle parmi ses quatre aspects, avec le trigone, le carré et l'opposition : c'est l'un des aspects dits « ptoléméens ». Les modernes le jugent plus discret que le trigone : il favorise les échanges et les talents, à condition qu'on s'en serve.",
        },
        {
          kind: "p",
          text: "Sur ce site, l'orbe est de 5 degrés, ou de 6 avec le Soleil ou la Lune. Son glyphe, une étoile à six branches, évoque la division du cercle en six.",
        },
      ],
    },
    square: {
      heading: "Carré (90°)",
      keywords: ["la tension", "le défi", "l'effort", "l'action"],
      summary:
        "Le carré relie deux astres séparés de 90 degrés, un quart du cercle. La tradition le range parmi les aspects tendus : deux fonctions qui se contrarient, et qui obligent à agir pour trouver un accord.",
      details: [
        {
          kind: "p",
          text: "Il réunit en général deux signes de même modalité mais d'éléments mal accordés, comme le Bélier et le Cancer, le feu et l'eau, tous deux cardinaux. Ces signes ont des polarités opposées, l'un masculin, l'autre féminin.",
        },
        {
          kind: "p",
          text: "Les astrologues anciens y voyaient une inimitié ; les modernes y lisent surtout un moteur. Un carré de Mars à Saturne décrirait une énergie freinée qui apprend à durer ; un carré entre la Lune et Vénus, une hésitation entre le besoin de sécurité et le désir de plaire. Tendu ne veut pas dire malheureux : bien des réussites naissent de ces frictions.",
        },
        {
          kind: "p",
          text: "Aspect ptoléméen, il a sur ce site un orbe de 7 degrés, ou de 8 avec le Soleil ou la Lune. Son glyphe est un simple carré.",
        },
      ],
    },
    trine: {
      heading: "Trigone (120°)",
      keywords: ["l'harmonie", "la fluidité", "le talent", "l'aisance"],
      summary:
        "Le trigone relie deux astres séparés de 120 degrés, un tiers du cercle. C'est l'aspect le plus harmonieux de la tradition : deux fonctions qui s'accordent sans effort, comme deux musiciens qui jouent dans la même tonalité.",
      details: [
        {
          kind: "p",
          text: "Il réunit en général deux signes du même élément : le Bélier, le Lion et le Sagittaire pour le feu, par exemple. Trois astres en trigone les uns avec les autres dessinent un triangle équilatéral, le grand trigone.",
        },
        {
          kind: "p",
          text: "Les astrologues y lisent des facilités naturelles, des talents, une chance qui semble aller de soi, tout en notant le revers : ce qui vient sans effort peut rester inexploité. Un trigone entre le Soleil et Jupiter évoquerait une confiance tranquille ; entre Mercure et Saturne, une pensée solide et méthodique.",
        },
        {
          kind: "p",
          text: "Aspect ptoléméen, il a sur ce site un orbe de 7 degrés, ou de 8 avec le Soleil ou la Lune. Son glyphe est un triangle.",
        },
      ],
    },
    opposition: {
      heading: "Opposition (180°)",
      keywords: ["la polarité", "le face-à-face", "la relation", "l'équilibre à trouver"],
      summary:
        "L'opposition relie deux astres diamétralement opposés, séparés de 180 degrés. La tradition la range parmi les aspects tendus : deux fonctions qui se font face et demandent à être conciliées.",
      details: [
        {
          kind: "p",
          text: "Elle réunit deux signes opposés, de même modalité et de même polarité, dont les éléments se complètent : le Bélier et la Balance, le feu et l'air, ou le Taureau et le Scorpion, la terre et l'eau. Chaque signe éclaire ce qui manque à l'autre.",
        },
        {
          kind: "p",
          text: "Les astrologues modernes y voient une tension souvent vécue à travers les autres : on prête à quelqu'un la moitié de soi que l'on ne reconnaît pas. L'enjeu, disent-ils, est de trouver un équilibre plutôt que de choisir un camp. L'opposition du Soleil et de la Lune, c'est la pleine lune.",
        },
        {
          kind: "p",
          text: "Aspect ptoléméen, elle a sur ce site un orbe de 8 degrés, ou de 10 avec le Soleil ou la Lune. Son glyphe montre deux petits cercles reliés par un trait.",
        },
      ],
    },
    semiSextile: {
      heading: "Semi-sextile (30°)",
      keywords: ["l'ajustement", "le voisinage", "la nuance"],
      summary:
        "Le semi-sextile réunit deux astres distants de 30 degrés, la largeur d'un signe. C'est un aspect mineur, discret : deux signes voisins, qui n'ont presque rien en commun, apprennent à cohabiter.",
      details: [
        {
          kind: "p",
          text: "Deux signes voisins, comme le Bélier et le Taureau, n'ont ni le même élément, ni la même modalité, ni la même polarité. Les astrologues hellénistiques disaient qu'ils ne se voient pas : ils les tenaient pour « en aversion », sans aspect possible entre eux.",
        },
        {
          kind: "p",
          text: "Kepler l'admet pourtant parmi les aspects, au rang des plus faibles, dans L'Harmonie du monde, en 1619. Certains auteurs modernes le jugent légèrement favorable, d'autres neutre ; ce site le classe parmi les aspects harmonieux et lui accorde 2 degrés d'orbe.",
        },
      ],
    },
    semiSquare: {
      heading: "Semi-carré (45°)",
      keywords: ["la friction", "l'irritation", "le stimulant"],
      summary:
        "Avec 45 degrés d'écart, la moitié d'un carré ou un huitième du cercle, deux astres forment un semi-carré. C'est un aspect mineur tendu : une gêne légère, comme un caillou dans la chaussure, qui pousse à réagir.",
      details: [
        {
          kind: "p",
          text: "Il naît de la division du cercle en huit, qui donne aussi le sesqui-carré. Comme 45 degrés font un signe et demi, il ne relie pas des signes entiers : il se lit au degré près, et non d'un signe à l'autre.",
        },
        {
          kind: "p",
          text: "Kepler le compte parmi les aspects faibles dans L'Harmonie du monde, en 1619. Les astrologues modernes y voient de petites tensions, qui stimulent plus qu'elles ne bloquent. Ce site le range parmi les aspects tendus, avec 2 degrés d'orbe.",
        },
      ],
    },
    quintile: {
      heading: "Quintile (72°)",
      keywords: ["le talent", "la créativité", "le savoir-faire"],
      summary:
        "Le quintile mesure 72 degrés, un cinquième du cercle. Introduit par Kepler, c'est un aspect mineur harmonieux, que les astrologues modernes associent au talent et à la créativité.",
      details: [
        {
          kind: "p",
          text: "Kepler l'a proposé vers 1600, avec le biquintile et le sesqui-carré, en s'appuyant à la fois sur l'harmonie musicale et sur ses propres observations du temps qu'il fait. Il le rattachait au pentagone, la figure à cinq côtés, et à un intervalle musical, la tierce majeure. La tradition antique l'ignorait, car il ne tombe pas sur un multiple de 30 degrés.",
        },
        {
          kind: "p",
          text: "Au XXe siècle, l'astrologue anglais John Addey, avec sa théorie des harmoniques, l'a associé à la création et au style personnel. Sur ce site, c'est un aspect harmonieux, toléré à 2 degrés près.",
        },
      ],
    },
    sesquiquadrate: {
      heading: "Sesqui-carré (135°)",
      keywords: ["la tension", "l'agitation", "le réajustement"],
      summary:
        "Le sesqui-carré correspond à 135 degrés d'écart, un carré et demi, soit trois huitièmes du cercle. C'est un aspect mineur tendu, proche du semi-carré : une friction qui demande des ajustements.",
      details: [
        {
          kind: "p",
          text: "Son nom vient du latin sesqui, « une fois et demie » : 135, c'est 90 plus 45. Kepler l'a introduit vers 1600, en même temps que le quintile et le biquintile ; il le rapprochait de la sixte mineure, un intervalle musical consonant mais faible.",
        },
        {
          kind: "p",
          text: "Les astrologues modernes le lisent comme une agitation, une impatience qui finit par provoquer un changement. Il figure ici parmi les aspects tendus, avec un orbe de 2 degrés.",
        },
      ],
    },
    biquintile: {
      heading: "Biquintile (144°)",
      keywords: ["le don", "l'inspiration", "la maîtrise"],
      summary:
        "Deux astres distants de 144 degrés, deux cinquièmes du cercle, forment un biquintile. Comme le quintile, il a été introduit par Kepler, et les astrologues modernes y lisent un talent, une aptitude à créer.",
      details: [
        {
          kind: "p",
          text: "Il appartient à la même famille que le quintile, celle des divisions du cercle par cinq, que la tradition antique ignorait. Kepler le rapprochait de la sixte majeure, un intervalle musical, et disait en avoir constaté l'effet dans ses observations météorologiques.",
        },
        {
          kind: "p",
          text: "Les astrologues modernes le jugent un peu plus discret que le quintile, mais de même nature : une compétence fine, un savoir-faire qui se cultive. Ce site le classe parmi les aspects harmonieux, avec un orbe de 2 degrés.",
        },
      ],
    },
    quincunx: {
      heading: "Quinconce (150°)",
      keywords: ["l'ajustement", "le décalage", "l'adaptation", "le malaise"],
      summary:
        "Le quinconce sépare deux astres de 150 degrés, soit cinq signes d'écart. Les deux signes concernés n'ont rien en commun : les astrologues y voient un décalage, une gêne qui oblige à s'adapter sans cesse.",
      details: [
        {
          kind: "p",
          text: "Son nom vient du latin quincunx, « cinq douzièmes » : 150 degrés, ce sont cinq douzièmes du cercle. Comme le semi-sextile, il relie des signes que la tradition antique disait « en aversion », sans élément, modalité ni polarité communs, comme le Bélier et la Vierge. En anglais, on l'appelle aussi inconjunct, « non relié ».",
        },
        {
          kind: "p",
          text: "Kepler le compte parmi les aspects faibles dans L'Harmonie du monde, en 1619. Les modernes lui ont donné plus de poids, notamment dans la figure du yod. Ce site le range parmi les aspects tendus, avec un orbe de 3 degrés, le plus large des aspects mineurs.",
        },
      ],
    },
  },
  orbs: {
    heading: "L'orbe : la marge tolérée",
    summary:
      "Deux astres sont rarement à l'angle exact d'un aspect. L'orbe est l'écart toléré autour de cet angle : au-delà, les astrologues considèrent que l'aspect ne joue plus. Il n'existe aucune norme : chaque école a ses valeurs.",
    details: [
      {
        kind: "p",
        text: "Un exemple : le trigone vaut 120 degrés. Avec un orbe de 7 degrés, deux astres séparés de 113 à 127 degrés forment encore un trigone, et plus l'écart à l'angle exact est petit, plus l'aspect est jugé fort. Les Anciens disaient « partile » un aspect exact au degré près, et « platique » un aspect simplement compris dans son orbe.",
      },
      {
        kind: "p",
        text: "Les astrologues hellénistiques raisonnaient surtout d'un signe à l'autre. Les auteurs médiévaux attribuaient l'orbe aux astres plutôt qu'aux aspects, le plus large revenant au Soleil et à la Lune. Les modernes fixent en général un orbe par aspect, large pour les majeurs, étroit pour les mineurs, élargi quand un luminaire y prend part. Ce site retient :",
      },
      {
        kind: "list",
        items: [
          "Conjonction et opposition : 8 degrés, 10 si le Soleil ou la Lune y prend part",
          "Carré et trigone : 7 degrés, 8 avec le Soleil ou la Lune",
          "Sextile : 5 degrés, 6 avec le Soleil ou la Lune",
          "Quinconce : 3 degrés",
          "Semi-sextile, semi-carré, sesqui-carré, quintile et biquintile : 2 degrés",
        ],
      },
    ],
  },
  applying: {
    heading: "Aspect appliquant, aspect séparant",
    summary:
      "Un aspect est appliquant quand les deux astres se rapprochent de l'angle exact, séparant quand ils s'en éloignent. La tradition jugeait le premier plus fort, comme une promesse, et voyait dans le second un souvenir qui s'estompe.",
    details: [
      {
        kind: "p",
        text: "Tout dépend de l'astre le plus rapide. Si la Lune est à 10 degrés du Bélier et Vénus à 15, la Lune, plus rapide, rattrape Vénus : leur conjonction est appliquante, avec un orbe de 5 degrés. Une fois la Lune passée au-delà de 15 degrés du Bélier, l'aspect devient séparant. Une rétrogradation peut renverser la situation, quand l'astre rapide repart en arrière.",
      },
      {
        kind: "p",
        text: "En astrologie horaire, qui étudie le ciel du moment où une question est posée, les aspects appliquants, surtout ceux de la Lune, décrivent ce qui va arriver ; les aspects séparants racontent ce qui vient de se passer. Au XVIIe siècle, l'Anglais William Lilly en a fait l'un des piliers de sa méthode.",
      },
      {
        kind: "p",
        text: "Dans un thème de naissance, certains astrologues lisent l'aspect appliquant comme une dynamique qui se développe avec le temps, et l'aspect séparant comme un acquis sur lequel on s'appuie.",
      },
    ],
  },
  patterns: {
    heading: "Les grandes configurations",
    summary:
      "Quand plusieurs aspects s'emboîtent, ils dessinent des figures que les astrologues lisent comme un tout : le grand trigone, le carré en T, la grande croix, le yod et le stellium sont les plus connues.",
    details: [
      {
        kind: "list",
        items: [
          "Grand trigone : trois astres en trigone deux à deux, formant un triangle équilatéral, souvent dans les trois signes d'un même élément. Les astrologues y lisent une grande aisance, parfois un confort qui endort.",
          "Carré en T : deux astres en opposition, tous deux en carré avec un troisième, l'astre au sommet, sur lequel se concentre la tension.",
          "Grande croix : quatre astres formant deux oppositions qui se croisent à angle droit, chacun en carré avec ses deux voisins, souvent dans des signes de même modalité. Une figure exigeante, réputée très énergique.",
          "Yod : deux astres en sextile, tous deux en quinconce avec un troisième. Cette figure en forme de flèche porte le nom d'une lettre hébraïque, et on la surnomme le « doigt de Dieu ».",
          "Stellium : au moins trois astres, quatre selon certains auteurs, réunis dans un même signe ou une même maison. On disait autrefois satellitium, du latin satelles, l'escorte.",
        ],
      },
      {
        kind: "p",
        text: "Aucune de ces figures ne décide d'une vie : dans la lecture symbolique, elles montrent où se concentrent les forces et les tensions du thème.",
      },
    ],
  },
};
