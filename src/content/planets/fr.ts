import type { PlanetsContent } from "./types";

export const PLANETS_FR: PlanetsContent = {
  index: {
    title: "Les planètes",
    lead: "Dix astres errants, du Soleil à Pluton : ce que la tradition astrologique leur confie, et ce qu'en disent les astronomes.",
    intro: {
      summary:
        "En astrologie, le Soleil et la Lune comptent parmi les « planètes » : le mot grec planêtês veut dire « errant », et désigne tout astre qui se déplace parmi les étoiles fixes. La tradition en connaît sept, visibles à l'œil nu ; les modernes en ajoutent trois, découvertes au télescope.",
      details: [
        {
          kind: "p",
          text: "Pour les astronomes, le Soleil est une étoile et la Lune un satellite de la Terre. Mais vus d'ici, tous deux avancent sur le fond des constellations, comme Mercure, Vénus, Mars, Jupiter et Saturne. Les Anciens les rangeaient donc ensemble : sept astres errants, qui ont donné leur nom aux jours de la semaine, du lundi (la Lune) au vendredi (Vénus).",
        },
        {
          kind: "p",
          text: "Avec le télescope sont venues trois planètes invisibles, ou presque, à l'œil nu : Uranus en 1781, Neptune en 1846, Pluton en 1930. Les astrologues les ont intégrées peu à peu, en leur confiant des domaines nouveaux et des signes à gouverner.",
        },
        {
          kind: "p",
          text: "Chaque fiche présente l'astre sous six angles : sa symbolique, sa lecture dans un thème, son mythe, l'astronomie, la rétrogradation et ses maîtrises. Il s'agit d'une tradition symbolique : les astrologues y lisent des images, non des lois qui décideraient de votre vie.",
        },
      ],
    },
  },
  groups: {
    luminary: {
      heading: "Les luminaires : le Soleil et la Lune",
      summary:
        "Les deux « lumières » du ciel, l'une pour le jour, l'autre pour la nuit. Les astrologues y voient les deux piliers du thème : le Soleil pour l'identité et la volonté, la Lune pour la sensibilité et les besoins.",
      details: [
        {
          kind: "p",
          text: "Leur éclat les met à part : aucun autre astre n'éclaire le paysage. La tradition hellénistique parlait de « secte » : le Soleil menait le camp des astres du jour, la Lune celui de la nuit. Un thème né de jour donnait donc plus de poids au premier, un thème né de nuit à la seconde.",
        },
        {
          kind: "p",
          text: "Ils se distinguent aussi par leur mouvement : ni l'un ni l'autre ne rétrograde jamais. Le Soleil parcourt le zodiaque en un an, la Lune en un peu plus de 27 jours. Avec l'Ascendant, leurs signes forment le trio que beaucoup d'astrologues regardent en premier.",
        },
      ],
    },
    personal: {
      heading: "Les planètes personnelles : Mercure, Vénus, Mars",
      summary:
        "Les trois planètes rapides les plus proches de nous. Elles changent de signe en quelques semaines, si bien que leur position varie d'une personne à l'autre : les astrologues y lisent la façon de penser, d'aimer et d'agir.",
      details: [
        {
          kind: "p",
          text: "Mercure et Vénus tournent plus près du Soleil que la Terre : vues d'ici, elles ne s'en écartent jamais beaucoup, environ 28 degrés au plus pour Mercure et 47 pour Vénus. C'est pourquoi on ne les voit qu'à l'aube ou au crépuscule. Mars, première planète au-delà de la Terre, peut au contraire se trouver à l'opposé du Soleil et briller toute la nuit.",
        },
        {
          kind: "p",
          text: "Dans un thème, ce trio décrit la personnalité au quotidien : Mercure les idées et les échanges, Vénus les goûts et les liens, Mars l'énergie et le désir. Leur signe et leur maison se lisent de près, car ils distinguent deux personnes nées à quelques semaines d'écart.",
        },
      ],
    },
    social: {
      heading: "Les planètes sociales : Jupiter et Saturne",
      summary:
        "Les deux géantes connues depuis l'Antiquité, plus lentes : Jupiter reste environ un an dans un signe, Saturne deux ans et demi. Les astrologues y voient le lien entre la personne et la société, entre l'élan de croissance et le sens des limites.",
      details: [
        {
          kind: "p",
          text: "On les dit « sociales » parce qu'elles relient l'individu au monde qui l'entoure : Jupiter par la confiance, la loi, l'enseignement et la chance ; Saturne par les règles, le travail dans la durée et la maturité. La tradition les opposait volontiers, Jupiter étant le « grand bénéfique » et Saturne le « grand maléfique ».",
        },
        {
          kind: "p",
          text: "Leur rencontre dans le ciel, la conjonction de Jupiter et de Saturne, revient tous les vingt ans environ. Les astrologues médiévaux, à la suite des savants du monde arabe, s'en servaient pour découper l'histoire en grandes périodes. Leur lenteur fait aussi que tous les enfants nés la même année, ou presque, les partagent dans le même signe.",
        },
      ],
    },
    transpersonal: {
      heading: "Les planètes transpersonnelles : Uranus, Neptune, Pluton",
      summary:
        "Les trois astres découverts au télescope, en 1781, 1846 et 1930. Ils restent de sept à plus de trente ans dans un même signe : les astrologues les lisent surtout par leur maison et leurs aspects, et leur signe comme la marque d'une génération.",
      details: [
        {
          kind: "p",
          text: "« Transpersonnel » signifie qui dépasse la personne. Les astrologues du XXe siècle ont associé ces planètes lointaines aux grands mouvements collectifs : Uranus aux révolutions et aux inventions, Neptune aux idéaux et aux rêves partagés, Pluton aux crises et aux transformations profondes. On les appelle aussi « planètes générationnelles » ou « transsaturniennes ».",
        },
        {
          kind: "p",
          text: "Ni les astrologues grecs, ni ceux du Moyen Âge ne les connaissaient. Leur intégration s'est faite au fil des XIXe et XXe siècles : chacune a reçu un signe à gouverner, le Verseau, les Poissons ou le Scorpion, que la tradition confiait jusque-là à Saturne, à Jupiter ou à Mars. Certains astrologues traditionnels préfèrent encore s'en passer.",
        },
      ],
    },
  },
  northNode: {
    heading: "Les nœuds de la Lune",
    summary:
      "Les nœuds ne sont pas des astres : ce sont les deux points où l'orbite de la Lune croise l'écliptique, la route apparente du Soleil. Le nœud nord et le nœud sud se font toujours face ; les astrologues y lisent un axe entre l'acquis et le chemin à explorer.",
    details: [
      {
        kind: "p",
        text: "Inclinée d'environ 5 degrés sur celle de la Terre, l'orbite de la Lune traverse l'écliptique deux fois par mois : en montant vers le nord au nœud nord, ou ascendant, en descendant vers le sud au nœud sud. Une éclipse n'a lieu que si une nouvelle ou une pleine lune tombe près d'un nœud : d'où le nom d'écliptique.",
      },
      {
        kind: "p",
        text: "Les nœuds reculent lentement dans le zodiaque et en font le tour en 18,6 ans, soit environ dix-huit mois par signe. Le nœud moyen lisse ce recul en un mouvement régulier ; le nœud vrai suit la position réelle, qui oscille. Ce site place dans les thèmes le nœud nord moyen.",
      },
      {
        kind: "p",
        text: "Les astrologues médiévaux parlaient de la Tête et de la Queue du Dragon, l'astrologie indienne de Rahu et Ketu ; la tête passait pour favorable, la queue pour plus difficile. Au XXe siècle, beaucoup y ont vu un chemin d'évolution : le nœud sud pour les acquis, le nœud nord pour la direction à prendre.",
      },
    ],
  },
  planets: {
    sun: {
      tagline: "Le cœur du thème : l'identité, la vitalité et la volonté, que la tradition lit dans l'astre qui éclaire et réchauffe tout le reste.",
      intro: {
        summary:
          "Le Soleil est l'astre que chacun connaît dans son thème : c'est lui qui donne le « signe » dont on parle couramment. La tradition y voit le centre de la personne, sa vitalité et ce qu'elle cherche à faire rayonner.",
        details: [
          {
            kind: "p",
            text: "Seul astre à briller de sa propre lumière, il règle le jour et l'année. Son parcours annuel le long du zodiaque fixe les dates des signes : il entre dans le Bélier vers le 21 mars, dans la Balance vers le 23 septembre.",
          },
          {
            kind: "p",
            text: "Ptolémée, au IIe siècle, le décrit chaud et un peu sec, de nature masculine et diurne : il mène le camp des astres du jour. Il ne le range ni parmi les bienfaisants ni parmi les malfaisants : selon lui, le Soleil agit dans un sens ou dans l'autre, suivant les astres qui l'accompagnent.",
          },
          {
            kind: "p",
            text: "Dans la lecture moderne, il représente la conscience de soi, l'élan vital et la direction que l'on donne à sa vie. On dit souvent qu'il montre qui l'on cherche à devenir, plus que ce que l'on est déjà.",
          },
        ],
      },
      keywords: ["l'identité", "la vitalité", "la volonté", "la créativité", "le père", "l'autorité", "la reconnaissance"],
      sections: {
        symbolique: {
          heading: "Le symbole du Soleil",
          summary:
            "Dans un thème, le Soleil figure le centre : l'identité, la volonté, la vitalité, ce qui donne sa cohérence au reste. Son glyphe, un cercle marqué d'un point, exprime cette idée de centre.",
          details: [
            {
              kind: "p",
              text: "Les astrologues comparent volontiers le thème à un système solaire en miniature : les autres astres décrivent des facettes de la personne, le Soleil ce qui les relie. La tradition lui associe aussi le père, les figures d'autorité, l'honneur et la reconnaissance publique, et, dans le corps, le cœur.",
            },
            {
              kind: "p",
              text: "Les astrologues modernes lisent dans son glyphe l'esprit, figuré par le cercle sans début ni fin, et l'individu qui s'y concentre, figuré par le point. L'histoire est plus simple : dans les manuscrits grecs tardifs, le Soleil était un petit disque muni d'un rayon, et le cercle pointé ne s'est imposé qu'à la Renaissance. En alchimie, le même signe désigne l'or.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Le Soleil dans un thème",
          summary:
            "Le signe du Soleil dit la manière dont on affirme son identité, la maison le domaine où l'on cherche à rayonner, et les aspects les autres fonctions avec lesquelles il dialogue.",
          details: [
            {
              kind: "p",
              text: "Le signe solaire ne dépend que de la date de naissance. Selon les descriptions habituelles des signes, un Soleil au Bélier s'affirmerait par l'élan et l'initiative, un Soleil en Vierge par le soin et la précision.",
            },
            {
              kind: "p",
              text: "La maison, elle, dépend de l'heure. Une personne née vers midi a le Soleil près du Milieu du Ciel, en maison X ou IX : les astrologues y voient un besoin de se réaliser au grand jour, dans sa vocation. Née à l'aube, elle l'a près de l'Ascendant, en maison XII ou I ; vers minuit, près du Fond du Ciel, en maison IV ou III.",
            },
            {
              kind: "p",
              text: "Les aspects montrent comment l'identité compose avec le reste. Un Soleil en carré à Saturne, par exemple, est souvent lu comme une affirmation qui se construit lentement, à force d'efforts, plutôt que comme un obstacle définitif.",
            },
          ],
        },
        mythe: {
          heading: "Hélios, Sol et Apollon",
          summary:
            "Pour les Grecs, le Soleil était Hélios, qui conduisait chaque jour son char de feu d'est en ouest. Les Romains l'appelaient Sol ; on l'a plus tard confondu avec Apollon, dieu de la lumière et des arts.",
          details: [
            {
              kind: "p",
              text: "Hélios est le fils des Titans Hypérion et Théia, et le frère de Séléné, la Lune, et d'Éos, l'Aurore. Selon certains poètes, une immense coupe d'or le ramenait chaque nuit vers l'orient. Son fils Phaéton voulut un jour conduire le char : incapable de tenir les chevaux, il embrasa la Terre, et Zeus dut le foudroyer.",
            },
            {
              kind: "p",
              text: "Les Babyloniens honoraient en lui Shamash, dieu de la justice. À Rome, le culte de Sol grandit jusqu'à celui de Sol Invictus, le Soleil invaincu, promu par l'empereur Aurélien en 274. Le mot français vient du latin populaire soliculus, « petit soleil », diminutif de sol ; l'anglais et l'allemand ont gardé le jour du Soleil, Sunday et Sonntag.",
            },
          ],
        },
        astronomie: {
          heading: "Une étoile parmi d'autres",
          summary:
            "Le Soleil n'est pas une planète mais une étoile, une naine jaune âgée d'environ 4,5 milliards d'années. Il concentre plus de 99 % de la masse du système solaire et se trouve en moyenne à 150 millions de kilomètres de nous.",
          details: [
            {
              kind: "p",
              text: "Son diamètre, environ 1,4 million de kilomètres, vaut 109 fois celui de la Terre. Sa surface visible avoisine 5 500 °C, et son cœur 15 millions de degrés : c'est là que la fusion de l'hydrogène en hélium produit son énergie. Sa lumière met un peu plus de 8 minutes à nous parvenir.",
            },
            {
              kind: "p",
              text: "Sa course dans le zodiaque est un reflet : c'est la Terre qui tourne autour de lui, si bien que nous le voyons passer devant des constellations différentes au fil de l'année. Il fait le tour du zodiaque en 365 jours un quart environ et reste en moyenne 30,4 jours dans chaque signe, entre 29 et 32 selon la saison : un peu moins en décembre et en janvier, quand la Terre, au plus près de lui, file plus vite sur son orbite.",
            },
          ],
        },
        retrogradation: {
          heading: "Pourquoi le Soleil ne rétrograde jamais",
          summary:
            "Les planètes semblent parfois reculer dans le zodiaque. Le Soleil, jamais : son mouvement apparent n'est que le reflet du tour de la Terre autour de lui, qui se fait toujours dans le même sens.",
          details: [
            {
              kind: "p",
              text: "La rétrogradation est un effet de perspective : vue d'une Terre en mouvement, une planète qui tourne elle aussi autour du Soleil semble par moments revenir sur ses pas devant les étoiles lointaines. Pour le Soleil, rien de tel : la Terre ne fait jamais demi-tour sur son orbite, et le Soleil avance toujours, d'environ un degré par jour.",
            },
            {
              kind: "p",
              text: "Sa vitesse change pourtant un peu, de 0,95 degré par jour début juillet à près de 1,02 début janvier, sans jamais aller jusqu'à l'arrêt. Pour les astrologues, il donne ainsi le rythme sûr de l'année : son retour au degré exact de la naissance, autour de l'anniversaire, s'appelle la « révolution solaire », un thème que certains dressent chaque année.",
            },
          ],
        },
        maitrises: {
          heading: "Les maîtrises du Soleil",
          summary:
            "Le Soleil a son domicile dans le Lion et son exaltation dans le Bélier, à 19 degrés. À l'opposé, il est en exil dans le Verseau et en chute dans la Balance, deux signes où la tradition le juge moins à son aise.",
          details: [
            {
              kind: "p",
              text: "Dans le schéma ancien, le Soleil et la Lune reçoivent les deux signes du cœur de l'été, le Cancer et le Lion, ceux où leur lumière et leur chaleur culminent dans l'hémisphère nord ; le Lion, signe masculin, revient au Soleil. Les cinq autres astres se partagent ensuite les signes suivants, deux chacun, dans l'ordre de leur distance.",
            },
            {
              kind: "p",
              text: "Son exaltation au Bélier tient au printemps : Ptolémée explique qu'en y entrant, le Soleil remonte vers le nord, que les jours s'allongent et que sa chaleur grandit. Dans la Balance, il passe au contraire dans la moitié sud du ciel et les jours raccourcissent : c'est sa chute. En exil dans le Verseau, face au Lion, il serait, pour les astrologues, moins tourné vers lui-même que vers le groupe.",
            },
          ],
        },
      },
      imageAlt: "Sphère orangée du Soleil, texturée d'après une carte de sa surface : un bouillonnement de granules dorés, plus clairs par endroits.",
    },
    moon: {
      tagline: "L'astre des émotions, des besoins et de la mémoire, selon la tradition : la Lune change de visage chaque soir, comme nos humeurs.",
      intro: {
        summary:
          "Astre le plus rapide du ciel, la Lune traverse un signe en un peu plus de deux jours. La tradition y voit la sensibilité, les besoins, les habitudes et le lien à la mère : ce qui, en nous, réagit avant de réfléchir.",
        details: [
          {
            kind: "p",
            text: "Pour les Anciens, elle était la plus proche des sept astres errants, la frontière entre le monde changeant d'ici-bas et le ciel immuable. Elle règle les mois et les marées, et ses phases ont servi de premier calendrier à bien des peuples.",
          },
          {
            kind: "p",
            text: "Ptolémée la dit humide et légèrement chaude, de nature féminine et nocturne : elle mène le camp des astres de la nuit. Il la range parmi les astres bienfaisants, aux côtés de Jupiter et de Vénus, et lui confie les premières années de la vie, jusqu'à 4 ans environ.",
          },
          {
            kind: "p",
            text: "La lecture moderne y voit le monde intérieur : ce qui rassure, ce que l'on a appris très tôt, la façon dont on prend soin des autres et dont on aime être soigné. Avec le Soleil et l'Ascendant, son signe est l'un des trois premiers que l'on regarde dans un thème.",
          },
        ],
      },
      keywords: ["les émotions", "la sensibilité", "les besoins", "la mère", "le foyer", "la mémoire", "les habitudes"],
      sections: {
        symbolique: {
          heading: "Le symbole de la Lune",
          summary:
            "La Lune figure la part réceptive et changeante de la personne : les émotions, l'instinct, les besoins du corps et du cœur. Son glyphe, un simple croissant, la représente depuis l'Antiquité.",
          details: [
            {
              kind: "p",
              text: "Là où le Soleil rayonne, la Lune reflète : elle ne brille que de la lumière qu'elle reçoit. Les astrologues en ont fait l'image de la réceptivité, de l'imagination et de la mémoire, de tout ce qui se nourrit et se protège. La tradition lui confie aussi la mère, l'enfance, le foyer, le peuple et les voyages, et dans le corps, l'estomac et les liquides.",
            },
            {
              kind: "p",
              text: "Le croissant est l'un des plus anciens symboles du ciel : on le voit déjà sur les monuments de Mésopotamie, emblème du dieu lunaire Sîn. Pour les astrologues modernes, il figure l'âme, ouverte et disponible, par contraste avec le cercle solaire. En alchimie, il désigne l'argent, le métal pâle de la Lune.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "La Lune dans un thème",
          summary:
            "Son signe décrit le style émotionnel, la manière de réagir et de se rassurer ; sa maison, le domaine où l'on cherche la sécurité ; ses aspects, les liens entre la sensibilité et les autres fonctions.",
          details: [
            {
              kind: "p",
              text: "Comme elle change de signe tous les deux jours environ, il faut l'heure de naissance pour la placer avec certitude le jour où elle passe d'un signe à l'autre. Une Lune au Bélier est décrite comme vive et prompte à s'enflammer, une Lune au Taureau comme calme, attachée au confort et aux repères stables.",
            },
            {
              kind: "p",
              text: "En maison IV, la Lune est jugée très à l'aise, au cœur du foyer et de la famille ; en maison X, elle exposerait la sensibilité au regard public. La tradition hellénistique la disait en joie en maison III, celle de la Déesse. La phase compte aussi : née à la pleine lune, une personne a la Lune face au Soleil, une tension que les astrologues lisent entre besoins et volonté.",
            },
            {
              kind: "p",
              text: "Rapide, la Lune forme en un mois des aspects avec tous les astres. En astrologie horaire, qui étudie le ciel du moment où une question est posée, ce sont ses prochains aspects qui décrivent la suite des événements.",
            },
          ],
        },
        mythe: {
          heading: "Séléné, Luna et Artémis",
          summary:
            "Les Grecs la nommaient Séléné, sœur d'Hélios, qui menait son char d'argent à travers la nuit. Les Romains l'appelaient Luna ; on l'a ensuite assimilée à Artémis, la Diane des Romains, déesse de la chasse.",
          details: [
            {
              kind: "p",
              text: "Séléné est la fille des Titans Hypérion et Théia. Le mythe le plus connu la montre éprise d'Endymion, un jeune berger plongé dans un sommeil sans fin, qu'elle venait contempler chaque nuit. Les Babyloniens, eux, honoraient un dieu lunaire, Sîn, gardien des mois.",
            },
            {
              kind: "p",
              text: "Le mot « lune » vient du latin luna, de la même famille que lux, la lumière. Le lundi est son jour, lunae dies. Les poètes latins l'imaginaient en déesse à trois visages : Luna dans le ciel, Diane sur la terre, Hécate ou Proserpine aux Enfers.",
            },
          ],
        },
        astronomie: {
          heading: "Notre satellite",
          summary:
            "La Lune est le satellite naturel de la Terre, à 384 400 km en moyenne. Elle en fait le tour en 27,3 jours, mais il faut 29,5 jours pour revoir la même phase, car la Terre a entre-temps avancé autour du Soleil.",
          details: [
            {
              kind: "p",
              text: "Avec ses 3 475 km de diamètre, elle mesure un peu plus du quart de la Terre. Elle tourne sur elle-même dans le temps exact de sa révolution : c'est pourquoi elle nous montre toujours la même face. Elle s'éloigne de nous d'environ 3,8 cm par an.",
            },
            {
              kind: "p",
              text: "Son éclat vient du Soleil : selon l'angle sous lequel nous voyons sa moitié éclairée, elle passe de la nouvelle lune au premier quartier, à la pleine lune, puis au dernier quartier. Son orbite est inclinée d'environ 5 degrés sur l'écliptique, ce qui explique qu'il n'y ait pas d'éclipse chaque mois.",
            },
            {
              kind: "p",
              text: "Dans le zodiaque, elle avance d'environ 13 degrés par jour et reste en moyenne 2,28 jours dans un signe, de deux jours à deux jours et demi selon sa distance à la Terre.",
            },
          ],
        },
        retrogradation: {
          heading: "Pourquoi la Lune ne rétrograde jamais",
          summary:
            "La Lune ne recule jamais dans le zodiaque. Elle tourne autour de la Terre elle-même : nous sommes au centre de son orbite, et aucun effet de perspective ne peut inverser son mouvement apparent.",
          details: [
            {
              kind: "p",
              text: "Une planète paraît rétrograder parce que la Terre et elle tournent toutes deux autour du Soleil, à des vitesses différentes : l'une rattrape l'autre et, vue d'ici, la plus lente semble reculer. La Lune, elle, nous accompagne : elle progresse toujours dans l'ordre des signes, du Bélier vers le Taureau, puis vers les Gémeaux.",
            },
            {
              kind: "p",
              text: "Sa vitesse varie pourtant beaucoup, d'environ 12 à plus de 15 degrés par jour selon qu'elle est loin ou près de nous. Les astrologues distinguent ainsi une Lune « rapide » d'une Lune « lente », sans arrêt ni recul. Ce sont les nœuds lunaires, deux points de son orbite, qui reculent dans le zodiaque.",
            },
            {
              kind: "p",
              text: "La tradition regardait plutôt ses phases : croissante, elle passait pour favoriser ce qui commence et grandit ; décroissante, ce qui s'achève et se dépose.",
            },
          ],
        },
        maitrises: {
          heading: "Les maîtrises de la Lune",
          summary:
            "La Lune a son domicile dans le Cancer et son exaltation dans le Taureau, à 3 degrés. Elle est en exil dans le Capricorne, signe opposé au Cancer, et en chute dans le Scorpion, opposé au Taureau.",
          details: [
            {
              kind: "p",
              text: "Le Cancer, signe féminin du début de l'été, lui revient dans le schéma ancien, à côté du Lion solaire : les deux luminaires se partagent les signes où la lumière culmine dans l'hémisphère nord. Les astrologues le décrivent comme un signe d'eau protecteur, accordé à la sensibilité lunaire.",
            },
            {
              kind: "p",
              text: "Pour l'exaltation, Ptolémée raisonne avec le ciel : après sa rencontre avec le Soleil dans le Bélier, la Lune réapparaît en fin croissant dans le Taureau, où sa lumière commence à grandir. Dans le Capricorne, signe de l'effort et des structures, et dans le Scorpion, signe des profondeurs, la tradition la juge moins libre d'offrir sa douceur.",
            },
          ],
        },
      },
      imageAlt: "Sphère grise de la Lune, texturée d'après une carte photographique : de grandes mers sombres et des cratères clairs.",
    },
    mercury: {
      tagline: "Le messager du zodiaque : la pensée, la parole et les échanges, que la tradition confie à la planète la plus rapide.",
      intro: {
        summary:
          "Mercure, la plus proche du Soleil, ne s'en éloigne jamais beaucoup dans le ciel. Les astrologues lui confient l'intelligence pratique, le langage, l'apprentissage et toutes les formes d'échange, du commerce aux trajets du quotidien.",
        details: [
          {
            kind: "p",
            text: "Vif et difficile à observer, Mercure se montre bas sur l'horizon, juste avant le lever ou juste après le coucher du Soleil. Les Grecs l'appelaient Stilbôn, « le scintillant », avant de le confier à Hermès, le dieu messager.",
          },
          {
            kind: "p",
            text: "Ptolémée lui prête une nature changeante, tantôt sèche, tantôt humide, et le dit « commun » : ni bienfaisant ni malfaisant par lui-même, il prend la couleur des astres auxquels il se lie. Il est diurne quand il se lève avant le Soleil, nocturne quand il le suit le soir. Ptolémée lui confie aussi l'âge de l'école, de 4 à 14 ans.",
          },
          {
            kind: "p",
            text: "Dans un thème moderne, il montre comment on pense, on parle, on apprend et l'on relie les informations entre elles : c'est l'astre des questions et des réponses.",
          },
        ],
      },
      keywords: ["l'intelligence", "la communication", "l'apprentissage", "les échanges", "le commerce", "les déplacements", "l'enfance"],
      sections: {
        symbolique: {
          heading: "Le symbole de Mercure",
          summary:
            "Mercure figure l'esprit qui relie : la pensée, la parole, l'écriture, le calcul et le commerce. Son glyphe dérive du caducée, le bâton du dieu messager.",
          details: [
            {
              kind: "p",
              text: "La tradition fait de lui l'astre des intermédiaires : messagers, marchands, scribes, enseignants, orateurs et voyageurs. Il gouverne l'adresse et la vivacité d'esprit, et dans le corps, le cerveau, la langue et les mains.",
            },
            {
              kind: "p",
              text: "Son glyphe superpose un croissant, un cercle et une croix. Une lecture moderne y trouve l'âme réceptive, l'esprit et la matière réunis, image d'une intelligence qui fait le lien. Les historiens y reconnaissent surtout le caducée d'Hermès, tel qu'on le dessinait dans les papyrus grecs tardifs ; la croix du bas a été ajoutée plus tard. Le même signe désigne en alchimie le vif-argent, notre mercure.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Mercure dans un thème",
          summary:
            "Son signe décrit le style de pensée et de parole ; sa maison, les sujets qui occupent l'esprit ; ses aspects, la façon dont la réflexion s'accorde avec l'affectivité, l'action ou la mémoire.",
          details: [
            {
              kind: "p",
              text: "Comme Mercure ne s'écarte jamais de plus de 28 degrés du Soleil, il se trouve toujours dans le même signe que lui, ou dans l'un des deux signes voisins. Un Mercure au Taureau est décrit comme lent mais tenace, pensant en concret ; au Sagittaire, comme ample et enthousiaste, plus à l'aise avec les idées générales qu'avec les détails.",
            },
            {
              kind: "p",
              text: "En maison III, sa maison « naturelle » pour les modernes, il soulignerait la curiosité, les échanges et l'apprentissage ; en maison VI, une intelligence tournée vers la méthode et le travail bien fait. La tradition hellénistique, elle, le disait en joie en maison I. Un aspect avec la Lune lierait la pensée aux émotions, un aspect avec Saturne lui donnerait sérieux et concentration.",
            },
          ],
        },
        mythe: {
          heading: "Hermès, le messager",
          summary:
            "Le dieu grec Hermès, que les Romains nommaient Mercure, portait les messages de l'Olympe, protégeait les voyageurs et les marchands, et guidait les âmes vers les Enfers. Son agilité convenait à la planète la plus rapide.",
          details: [
            {
              kind: "p",
              text: "Fils de Zeus et de la nymphe Maïa, Hermès fut d'une précocité célèbre : le jour même de sa naissance, il fabriqua la première lyre avec une carapace de tortue et déroba le troupeau de son demi-frère Apollon. Dieu des routes et des carrefours, il protégeait aussi les marchands, les orateurs, et même les voleurs.",
            },
            {
              kind: "p",
              text: "Les Babyloniens associaient déjà cet astre à Nabû, dieu des scribes et de l'écriture. Le nom latin Mercurius est souvent rapproché de merx, la marchandise, qui a donné « mercier » et « commerce ». Le mercredi lui doit son nom, Mercurii dies, tout comme le métal liquide que l'on appelle mercure.",
            },
          ],
        },
        astronomie: {
          heading: "La plus petite des planètes",
          summary:
            "Mercure fait le tour du Soleil en 88 jours, à 58 millions de kilomètres de lui en moyenne : aucune planète n'est plus rapide. C'est aussi la plus petite du système solaire, à peine plus grande que la Lune.",
          details: [
            {
              kind: "p",
              text: "Ce petit monde rocheux de 4 879 km de diamètre n'a presque pas d'atmosphère pour garder la chaleur : il fait environ 430 °C le jour et 180 °C sous zéro la nuit. Sa surface criblée de cratères ressemble à celle de la Lune. Un jour solaire y dure 176 jours terrestres, soit deux de ses années.",
            },
            {
              kind: "p",
              text: "Vu de la Terre, Mercure ne s'écarte jamais de plus de 28 degrés environ du Soleil. En moyenne, il avance donc dans le zodiaque au même pas que lui et reste 30,4 jours dans un signe, mais ses accélérations et ses reculs font varier ce séjour de deux semaines à plus de deux mois.",
            },
          ],
        },
        retrogradation: {
          heading: "Mercure rétrograde",
          summary:
            "Trois fois par an, parfois quatre, Mercure semble reculer dans le zodiaque pendant environ trois semaines. C'est la rétrogradation la plus connue, et la plus fréquente de toutes.",
          details: [
            {
              kind: "p",
              text: "L'effet vient de la perspective. Mercure tourne autour du Soleil bien plus vite que la Terre ; quand il passe entre nous et le Soleil, il nous double par l'intérieur, et son mouvement apparent s'inverse sur le fond des étoiles. Il revient en arrière d'une douzaine de degrés, puis repart. Le cycle complet, d'un passage entre la Terre et le Soleil au suivant, dure 116 jours.",
            },
            {
              kind: "p",
              text: "La culture populaire en a fait une période de malentendus, de retards et d'appareils capricieux. Les astrologues y voient plutôt une invitation à revoir, relire, vérifier, à reprendre une question laissée en suspens. Rien n'oblige à mettre sa vie entre parenthèses : dans la lecture symbolique, c'est un temps de révision.",
            },
            {
              kind: "p",
              text: "Près d'une personne sur cinq naît pendant une rétrogradation de Mercure. Certains astrologues lui prêtent une pensée plus intérieure, qui aime revenir sur ses idées.",
            },
          ],
        },
        maitrises: {
          heading: "Les maîtrises de Mercure",
          summary:
            "Mercure gouverne deux signes, les Gémeaux et la Vierge, et il est aussi exalté dans la Vierge, à 15 degrés. Il est en exil dans le Sagittaire et les Poissons, et en chute dans les Poissons.",
          details: [
            {
              kind: "p",
              text: "Dans le schéma ancien, Mercure, qui ne s'éloigne jamais du Soleil de plus d'un signe environ, reçoit les deux signes voisins de ceux des luminaires : les Gémeaux, juste avant le Cancer de la Lune, et la Vierge, juste après le Lion du Soleil.",
            },
            {
              kind: "p",
              text: "Il est le seul astre à être à la fois en domicile et en exaltation dans le même signe, la Vierge, et donc en exil et en chute dans le même signe opposé, les Poissons. Ptolémée explique cette exaltation par la saison : la Vierge annonce l'automne sec, accordé à sa nature plutôt sèche ; les Poissons, signe humide de la fin de l'hiver, lui conviennent mal.",
            },
          ],
        },
      },
      imageAlt: "Sphère grise de Mercure, habillée d'une carte photographique de sa surface : une surface criblée de cratères, certains entourés de traînées claires.",
    },
    venus: {
      tagline: "L'étoile du Berger des astrologues : l'amour, l'attirance, le goût du beau et l'art de vivre ensemble, selon la tradition.",
      intro: {
        summary:
          "Vénus est l'astre le plus brillant après le Soleil et la Lune ; on l'appelle aussi l'étoile du Berger. La tradition lui confie l'amour, le plaisir, la beauté, l'harmonie et ce à quoi l'on attache de la valeur.",
        details: [
          {
            kind: "p",
            text: "Elle brille à l'aube ou au crépuscule, jamais au cœur de la nuit. Les Grecs lui donnaient deux noms, Phosphoros, « porteuse de lumière », quand elle se lève avant le Soleil, et Hespéros quand elle brille le soir, avant que l'on reconnaisse un seul et même astre.",
          },
          {
            kind: "p",
            text: "Ptolémée la décrit tempérée, plutôt humide et tiède, de nature féminine et nocturne. C'est le « petit bénéfique » de la tradition, après Jupiter : un astre qui adoucit, rapproche et embellit. Ptolémée lui confie l'âge de la jeunesse et des premières amours, de 14 à 22 ans.",
          },
          {
            kind: "p",
            text: "Dans un thème moderne, Vénus décrit la façon d'aimer et d'être aimé, ce qui nous attire, nos goûts, et notre rapport au plaisir comme à l'argent.",
          },
        ],
      },
      keywords: ["l'amour", "la beauté", "le plaisir", "l'harmonie", "les arts", "les valeurs", "l'argent"],
      sections: {
        symbolique: {
          heading: "Le symbole de Vénus",
          summary:
            "Vénus figure le principe d'attraction : ce qui plaît, rapproche et harmonise. Son glyphe, un cercle posé sur une croix, est souvent décrit comme le miroir de la déesse.",
          details: [
            {
              kind: "p",
              text: "La tradition lui associe l'amour et l'amitié, les fêtes, la parure, la musique, les arts, et tout ce qui rend la vie plus douce. Les astrologues modernes y ajoutent les valeurs au sens large : ce que l'on apprécie, ce qui nous semble précieux, jusqu'à notre rapport à l'argent et au confort.",
            },
            {
              kind: "p",
              text: "Le miroir à main n'est qu'une hypothèse ancienne, mais elle a fait fortune. Dans les plus vieux papyrus astronomiques, la croix du bas manque d'ailleurs : elle a été ajoutée plus tard. Les astrologues modernes lisent dans ce glyphe l'esprit, le cercle, qui domine la matière, la croix. En alchimie, le même signe désigne le cuivre, métal de Chypre, l'île d'Aphrodite ; les biologistes l'emploient pour le sexe féminin.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Vénus dans un thème",
          summary:
            "Le signe de Vénus colore la façon d'aimer et le goût esthétique ; sa maison montre où l'on cherche l'harmonie et le plaisir ; ses aspects, comment l'affection compose avec le reste du caractère.",
          details: [
            {
              kind: "p",
              text: "Vénus ne s'écarte jamais de plus de 47 degrés du Soleil : elle se trouve donc dans son signe ou au plus à deux signes de lui. Une Vénus en Balance est décrite comme raffinée, en quête d'équilibre et d'élégance ; une Vénus au Scorpion, comme passionnée et exclusive, plus profonde que légère.",
            },
            {
              kind: "p",
              text: "En maison VII, celle des unions, Vénus soulignerait l'importance du couple et des partenariats ; en maison II, le goût des belles choses et un certain talent pour faire fructifier ses ressources. La tradition hellénistique la disait en joie en maison V, celle de la Bonne Fortune. Un aspect entre Vénus et Mars, deux astres complémentaires, est traditionnellement lu comme une alliance de la douceur et du désir.",
            },
          ],
        },
        mythe: {
          heading: "Aphrodite et Vénus",
          summary:
            "La planète porte le nom de la déesse romaine de l'amour, Vénus, que les Grecs appelaient Aphrodite. Avant eux, les Babyloniens voyaient dans cet astre Ishtar, déesse de l'amour et de la guerre.",
          details: [
            {
              kind: "p",
              text: "Selon Hésiode, Aphrodite est née de l'écume de la mer, près de l'île de Cythère, puis portée jusqu'à Chypre ; Homère la dit fille de Zeus et de Dioné. Mariée à Héphaïstos, le dieu forgeron, elle aima Arès, le dieu de la guerre : un couple que les astrologues retrouvent dans le ciel avec Vénus et Mars.",
            },
            {
              kind: "p",
              text: "À Rome, Vénus était honorée comme la mère d'Énée, l'ancêtre légendaire des Romains ; Jules César se disait de sa lignée. Le vendredi est son jour, Veneris dies. Quant au nom d'étoile du Berger, on raconte qu'il vient des bergers qui la voyaient briller quand ils sortaient ou rentraient leurs troupeaux.",
            },
          ],
        },
        astronomie: {
          heading: "La jumelle brûlante de la Terre",
          summary:
            "Vénus a presque la taille de la Terre, mais c'est la planète la plus chaude du système solaire : plus de 460 °C au sol, sous une épaisse atmosphère de gaz carbonique et des nuages d'acide sulfurique.",
          details: [
            {
              kind: "p",
              text: "Elle tourne autour du Soleil en 225 jours, à 108 millions de kilomètres de lui. Sa rotation est très lente et se fait à l'envers de celle de la plupart des planètes : un tour sur elle-même lui prend 243 jours, plus que son année. Ses nuages renvoient si bien la lumière qu'elle est, après la Lune, l'astre le plus brillant de la nuit.",
            },
            {
              kind: "p",
              text: "Comme elle tourne plus près du Soleil que nous, elle ne s'en écarte jamais de plus de 47 degrés environ. Elle passe donc en moyenne autant de temps que lui dans chaque signe, 30,4 jours ; mais quand elle rétrograde, elle peut s'attarder près de quatre mois dans le même signe.",
            },
          ],
        },
        retrogradation: {
          heading: "Vénus rétrograde",
          summary:
            "Tous les dix-neuf mois environ, Vénus semble reculer dans le zodiaque pendant une quarantaine de jours. Ces rétrogradations sont rares : elle ne passe que 7 % de son temps à reculer.",
          details: [
            {
              kind: "p",
              text: "Comme pour Mercure, l'effet vient de la perspective : plus rapide que la Terre sur une orbite plus petite, Vénus nous double par l'intérieur quand elle passe entre nous et le Soleil. Elle disparaît alors dans sa lumière, et d'étoile du soir devient étoile du matin. Son recul apparent est d'environ 16 degrés.",
            },
            {
              kind: "p",
              text: "Cinq de ces cycles font presque exactement huit ans : les rétrogradations reviennent donc à peu près aux mêmes endroits du zodiaque tous les huit ans : reliées entre elles, ces cinq positions dessinent dans le zodiaque une étoile à cinq branches. Les astronomes babyloniens se servaient déjà de ce cycle de huit ans.",
            },
            {
              kind: "p",
              text: "Les astrologues y voient un temps pour revisiter ses liens et ses goûts : renouer, réévaluer, se demander ce que l'on aime vraiment. Rien d'inquiétant : la tradition parle d'un astre qui se tourne vers l'intérieur, non d'un astre qui nuit.",
            },
          ],
        },
        maitrises: {
          heading: "Les maîtrises de Vénus",
          summary:
            "Vénus a deux domiciles, le Taureau et la Balance, et son exaltation dans les Poissons, à 27 degrés. Elle est en exil dans le Scorpion et le Bélier, signes opposés à ses domiciles, et en chute dans la Vierge.",
          details: [
            {
              kind: "p",
              text: "Dans le schéma de Ptolémée, Vénus reçoit les signes qui forment un sextile, à 60 degrés, avec ceux des luminaires : la Balance, deux signes après le Lion, et le Taureau, deux signes avant le Cancer. Le sextile, aspect harmonieux et doux, convenait à un astre tempéré qui ne s'éloigne jamais du Soleil de plus de deux signes.",
            },
            {
              kind: "p",
              text: "Son exaltation dans les Poissons tient, selon Ptolémée, à l'humidité de ce signe de fin d'hiver, qui annonce le printemps et convient à sa nature. Dans la Vierge, sèche et méticuleuse, comme dans le Bélier et le Scorpion, les deux signes de Mars, la tradition la juge moins libre d'exprimer sa douceur.",
            },
          ],
        },
      },
      imageAlt: "Sphère jaune pâle de Vénus, texturée d'après une carte de son épaisse couverture nuageuse, qui cache entièrement le sol.",
    },
    mars: {
      tagline: "L'astre rouge de l'énergie, du courage et du désir, selon la tradition : la force qui pousse à agir, à trancher et à se défendre.",
      intro: {
        summary:
          "Mars est la première planète au-delà de la Terre, reconnaissable à son éclat rougeâtre. La tradition lui confie l'énergie, l'action, le courage, la colère et le désir : la part de nous qui avance, entreprend et se bat.",
        details: [
          {
            kind: "p",
            text: "Sa couleur a frappé tous les peuples : les Grecs l'appelaient Pyroeis, « le flamboyant », et les Babyloniens l'associaient à Nergal, dieu de la guerre et des épidémies. Tous les deux ans environ, quand il passe à l'opposé du Soleil, il devient l'un des astres les plus brillants de la nuit.",
          },
          {
            kind: "p",
            text: "Ptolémée le décrit chaud et surtout desséchant, de nature masculine, et en fait le « petit maléfique », après Saturne. Il le range pourtant parmi les astres de la nuit, dont la fraîcheur tempère son feu. Il lui confie l'âge de la pleine maturité, de 41 à 56 ans.",
          },
          {
            kind: "p",
            text: "Dans un thème moderne, Mars décrit la façon d'agir et de réagir, l'élan sportif, la manière d'affirmer ses désirs et de traverser les conflits.",
          },
        ],
      },
      keywords: ["l'énergie", "l'action", "le courage", "le désir", "la combativité", "l'initiative", "le sport"],
      sections: {
        symbolique: {
          heading: "Le symbole de Mars",
          summary:
            "Mars figure la force d'affirmation : l'élan, la volonté d'agir, la capacité à défendre ce qui compte. Son glyphe, un cercle d'où part une flèche, évoque le bouclier et la lance du dieu guerrier.",
          details: [
            {
              kind: "p",
              text: "La tradition lui associe les soldats, les artisans du fer et du feu, les chirurgiens, les athlètes, et toutes les situations où il faut trancher. Dans le corps, il gouverne le sang, les muscles et la tête. Les astrologues d'aujourd'hui lui confient aussi le désir, la sexualité et la colère, une énergie qui peut construire autant que détruire.",
            },
            {
              kind: "p",
              text: "Le cercle muni d'une flèche oblique est attesté au moins depuis le XIe siècle ; les papyrus plus anciens montrent une autre forme, peut-être une simple lance. Les astrologues y devinent l'esprit tendu vers un but. En alchimie, ce signe désigne le fer, dont la rouille colore justement la planète ; en biologie, le sexe masculin.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Mars dans un thème",
          summary:
            "Le signe de Mars décrit la manière d'agir et de se défendre ; sa maison, le terrain où l'on dépense son énergie ; ses aspects, la façon dont l'élan s'accorde, ou se heurte, aux autres besoins.",
          details: [
            {
              kind: "p",
              text: "Au Bélier, son domicile, Mars serait direct, rapide et franc ; au Cancer, où la tradition le juge en chute, il agirait plutôt de façon indirecte, pour protéger les siens. En maison X, il pousserait à l'ambition et à la compétition professionnelle ; en maison VI, où la tradition hellénistique le disait en joie, il mettrait son ardeur au service du travail quotidien.",
            },
            {
              kind: "p",
              text: "Ses aspects se lisent comme des alliances ou des frictions : avec Jupiter, l'enthousiasme qui entreprend en grand ; avec Saturne, une énergie freinée mais endurante, qui apprend la patience. Les astrologues insistent sur un point : un Mars en aspect tendu n'annonce aucun conflit, il décrit une énergie à canaliser.",
            },
          ],
        },
        mythe: {
          heading: "Arès et Mars",
          summary:
            "La planète porte le nom de Mars, dieu romain de la guerre, que les Grecs appelaient Arès. Peu aimé en Grèce, il était à Rome un dieu majeur, père de Romulus et Rémus, les fondateurs légendaires de la ville.",
          details: [
            {
              kind: "p",
              text: "Arès, fils de Zeus et d'Héra, incarnait la fureur des combats ; Athéna, déesse de la stratégie, l'emportait souvent sur lui. Amant d'Aphrodite, il avait deux fils, Phobos et Déimos, la Peur et la Terreur, qui l'accompagnaient sur les champs de bataille : leurs noms ont été donnés aux deux petites lunes de Mars, découvertes en 1877.",
            },
            {
              kind: "p",
              text: "À Rome, Mars veillait aussi sur les champs et les récoltes avant d'être le dieu des légions. Il a donné son nom au mois de mars, par lequel commençait l'année romaine la plus ancienne, au Champ de Mars, et au mardi, Martis dies.",
            },
          ],
        },
        astronomie: {
          heading: "La planète rouge",
          summary:
            "Monde rocheux deux fois plus petit que la Terre, Mars tourne à 228 millions de kilomètres du Soleil, dont il fait le tour en 687 jours, près de deux de nos années. Sa couleur vient de l'oxyde de fer, la rouille, qui teinte ses poussières.",
          details: [
            {
              kind: "p",
              text: "La planète mesure 6 792 km de diamètre. On y trouve le plus grand volcan du système solaire, Olympus Mons, environ trois fois plus haut que l'Everest, des calottes polaires de glace et deux petites lunes, Phobos et Déimos. Son jour dure à peine plus que le nôtre : un peu plus de 24 heures et demie.",
            },
            {
              kind: "p",
              text: "Dans le zodiaque, Mars avance d'environ un demi-degré par jour et reste en moyenne 57 jours dans un signe. Hors rétrogradation, il en traverse un en six semaines environ ; quand il y rétrograde, il peut y séjourner plus de sept mois.",
            },
          ],
        },
        retrogradation: {
          heading: "Mars rétrograde",
          summary:
            "Tous les deux ans et deux mois environ, Mars semble reculer dans le zodiaque pendant une dizaine de semaines. Cela se produit quand la Terre le double, au moment où il est le plus proche de nous et le plus brillant.",
          details: [
            {
              kind: "p",
              text: "Sur son orbite intérieure, la Terre va plus vite que Mars. Tous les 780 jours environ, elle le rattrape et le dépasse, comme une voiture en double une plus lente sur l'autoroute : pendant quelque temps, la voiture doublée semble reculer devant le paysage lointain. Mars se trouve alors à l'opposé du Soleil, visible toute la nuit.",
            },
            {
              kind: "p",
              text: "Sa boucle rétrograde, de 10 à 20 degrés selon les fois, a longtemps intrigué les astronomes. C'est en étudiant le mouvement de Mars, à partir des observations de Tycho Brahe, que Kepler a établi en 1609 que les planètes décrivent des ellipses.",
            },
            {
              kind: "p",
              text: "Les astrologues décrivent ces périodes comme propices à reprendre une action, à reconsidérer un projet ou une colère, plutôt qu'à foncer. La tradition y voyait un Mars affaibli, moins libre de ses mouvements, sans y attacher de malheur.",
            },
          ],
        },
        maitrises: {
          heading: "Les maîtrises de Mars",
          summary:
            "Mars gouverne le Bélier et, dans la tradition, le Scorpion. Il est exalté dans le Capricorne, à 28 degrés. En face, il est en exil dans la Balance et le Taureau, et en chute dans le Cancer.",
          details: [
            {
              kind: "p",
              text: "Ptolémée lui attribue les signes en carré avec ceux des luminaires : le Bélier, en carré avec le Cancer, et le Scorpion, en carré avec le Lion. Le carré, aspect de la tension, convenait à l'astre du combat. Depuis la découverte de Pluton, beaucoup d'astrologues confient le Scorpion à cette planète, en gardant Mars comme maître traditionnel du signe.",
            },
            {
              kind: "p",
              text: "L'exaltation au Capricorne s'explique, selon Ptolémée, par la position de ce signe, le plus méridional du zodiaque : Mars, brûlant par nature, y gagnerait encore en ardeur. Dans le Cancer, signe d'eau opposé au Capricorne, et dans les signes de Vénus, la Balance et le Taureau, la tradition le juge moins à l'aise pour agir franchement.",
            },
          ],
        },
      },
      imageAlt: "Sphère rouille de Mars, recouverte d'une carte photographique de la planète : déserts orangés, régions sombres et calottes polaires blanches.",
    },
    jupiter: {
      tagline: "La plus grande des planètes, et le grand bénéfique de la tradition : la croissance, la confiance, la sagesse et la générosité.",
      intro: {
        summary:
          "Jupiter est la plus grosse planète du système solaire, et l'une des plus brillantes de la nuit. Les astrologues lui confient la croissance, l'optimisme, la générosité, la loi et la quête de sens : tout ce qui élargit l'horizon.",
        details: [
          {
            kind: "p",
            text: "Il met près de douze ans à faire le tour du zodiaque, si bien qu'il passe environ un an dans chaque signe. Les Grecs l'appelaient Phaéthon, « le brillant », et les Babyloniens y voyaient Marduk, le roi des dieux de Babylone.",
          },
          {
            kind: "p",
            text: "Ptolémée le dit tempéré, à la fois chaud et humide, propice à la vie et à la fécondité. Masculin et diurne, il est le « grand bénéfique » de la tradition, l'astre qui protège et fait prospérer. Ptolémée lui confie l'âge de la sagesse, de 56 à 68 ans.",
          },
          {
            kind: "p",
            text: "Dans un thème moderne, Jupiter montre ce qui donne confiance, ce qui pousse à apprendre, à voyager, à transmettre, et la façon de chercher sa place dans un ordre plus vaste.",
          },
        ],
      },
      keywords: ["l'expansion", "la confiance", "la générosité", "la sagesse", "la loi", "les voyages lointains", "la chance"],
      sections: {
        symbolique: {
          heading: "Le symbole de Jupiter",
          summary:
            "Jupiter figure le principe d'expansion : la confiance, la foi, la générosité, le désir de grandir et de comprendre. Son glyphe vient d'une ancienne abréviation du nom de Zeus.",
          details: [
            {
              kind: "p",
              text: "La tradition lui associe les juges, les prêtres, les professeurs, les voyageurs au long cours et tous ceux qui transmettent un savoir ou une loi. Il gouverne la prospérité, les honneurs mérités, la bienveillance, et dans le corps, le foie. Les astrologues rappellent aussi son revers : l'excès, la démesure, la confiance aveugle.",
            },
            {
              kind: "p",
              text: "Son glyphe ressemble à un chiffre 4 tracé d'une main souple. Il dérive de la lettre grecque zêta, initiale de Zeus, barrée d'un trait d'abréviation. La symbolique moderne y distingue un croissant, l'âme, qui s'élève au-dessus de la croix de la matière, image d'un esprit qui s'ouvre. En alchimie, ce signe désigne l'étain.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Jupiter dans un thème",
          summary:
            "Son signe dit dans quel style on cherche à grandir et à donner du sens ; sa maison, le domaine où la confiance vient le plus facilement ; ses aspects, ce que l'optimisme encourage ou amplifie.",
          details: [
            {
              kind: "p",
              text: "Comme Jupiter reste environ un an dans un signe, les enfants nés la même année le partagent presque tous : sa maison et ses aspects personnalisent davantage la lecture. En maison IX, qui correspond au Sagittaire, son signe, il soulignerait le goût des études, des voyages et des grandes questions ; en maison XI, où la tradition hellénistique le disait en joie, la chaleur des amitiés et des projets partagés.",
            },
            {
              kind: "p",
              text: "Un Jupiter au Cancer, son exaltation, serait généreux et protecteur ; au Capricorne, où il est en chute, sa confiance passerait par la prudence et la construction patiente. Un aspect au Soleil est lu comme un élan de confiance en soi, parfois jusqu'à la démesure.",
            },
          ],
        },
        mythe: {
          heading: "Zeus et Jupiter",
          summary:
            "La planète porte le nom de Jupiter, roi des dieux romains, le Zeus des Grecs : maître du ciel, de la foudre et de la justice, il régnait sur l'Olympe après avoir renversé son père Cronos.",
          details: [
            {
              kind: "p",
              text: "Zeus est le fils de Cronos et de Rhéa. Pour le sauver de son père, qui avalait ses enfants dès leur naissance, sa mère le cacha en Crète et fit avaler à Cronos une pierre emmaillotée. Devenu adulte, Zeus délivra ses frères et sœurs et prit la tête des dieux.",
            },
            {
              kind: "p",
              text: "Le nom latin Iuppiter remonte à une très ancienne formule indo-européenne qui signifie à peu près « Ciel père ». Le jeudi lui doit son nom, Jovis dies. En 1610, Galilée découvrit les quatre grandes lunes de la planète ; on leur a donné les noms de personnages aimés de Zeus : Io, Europe, Ganymède et Callisto.",
            },
          ],
        },
        astronomie: {
          heading: "La géante du système solaire",
          summary:
            "Géante gazeuse faite surtout d'hydrogène et d'hélium, Jupiter tourne à 778 millions de kilomètres du Soleil, dont il fait le tour en près de douze ans. Il est plus de deux fois plus massif que toutes les autres planètes réunies.",
          details: [
            {
              kind: "p",
              text: "Son diamètre, environ 143 000 km, vaut onze fois celui de la Terre. La planète tourne sur elle-même en moins de dix heures, la journée la plus courte du système solaire, ce qui étire ses nuages en bandes parallèles. La Grande Tache rouge, une tempête plus vaste que la Terre, y est observée depuis le XIXe siècle au moins.",
            },
            {
              kind: "p",
              text: "Jupiter possède des dizaines de lunes, dont Ganymède, la plus grande du système solaire, plus large même que la planète Mercure. Dans le zodiaque, il avance d'environ un douzième de degré par jour et passe en moyenne 361 jours dans un signe, à peu près un an.",
            },
          ],
        },
        retrogradation: {
          heading: "Jupiter rétrograde",
          summary:
            "Chaque année, pendant environ quatre mois, Jupiter semble reculer dans le zodiaque. Le phénomène revient tous les treize mois et occupe près d'un tiers de son temps.",
          details: [
            {
              kind: "p",
              text: "La Terre, bien plus rapide, rattrape Jupiter environ tous les 399 jours. Pendant qu'elle le dépasse, la planète paraît faire marche arrière sur le fond des étoiles, d'une dizaine de degrés, avant de reprendre sa route. Le milieu de la rétrogradation coïncide avec l'opposition au Soleil : Jupiter se lève alors au coucher du Soleil et brille toute la nuit.",
            },
            {
              kind: "p",
              text: "Comme près d'une personne sur trois naît avec Jupiter rétrograde, les astrologues n'en font pas une marque rare. Certains y lisent une confiance plus intérieure, une sagesse qui se cherche par la réflexion personnelle plutôt que dans les institutions ; la tradition ancienne y voyait simplement un bénéfique un peu moins efficace.",
            },
          ],
        },
        maitrises: {
          heading: "Les maîtrises de Jupiter",
          summary:
            "Jupiter gouverne le Sagittaire et, dans la tradition, les Poissons. Il est exalté dans le Cancer, à 15 degrés. Il est en exil dans les Gémeaux et la Vierge, et en chute dans le Capricorne.",
          details: [
            {
              kind: "p",
              text: "Dans le schéma de Ptolémée, Jupiter reçoit les signes en trigone avec ceux des luminaires : le Sagittaire, en trigone avec le Lion, et les Poissons, en trigone avec le Cancer. Le trigone, l'aspect le plus harmonieux, convenait au grand bénéfique. Depuis la fin du XIXe siècle, de nombreux astrologues confient les Poissons à Neptune, Jupiter en restant le maître traditionnel.",
            },
            {
              kind: "p",
              text: "Son exaltation dans le Cancer s'explique, selon Ptolémée, par les vents du nord, féconds, que Jupiter était censé apporter : c'est dans ce signe qu'il atteint le point le plus septentrional de sa course. Dans le Capricorne, signe de rigueur, et dans les signes de Mercure, plus occupés de détails que de vastes horizons, la tradition le juge moins à son aise.",
            },
          ],
        },
      },
      imageAlt: "Sphère de Jupiter, texturée d'après une carte photographique : bandes de nuages crème et ocre, et la Grande Tache rouge.",
    },
    saturn: {
      tagline: "L'astre du temps et des limites : la structure, l'effort, la patience et la maturité, que la tradition prête à la plus lente des planètes visibles.",
      intro: {
        summary:
          "Saturne était, pour les Anciens, l'astre errant le plus lointain et le plus lent : il met près de trente ans à faire le tour du zodiaque. La tradition y voit le temps, la discipline, les limites et la maturité qui s'acquiert avec l'âge.",
        details: [
          {
            kind: "p",
            text: "Les Grecs le nommaient Phaïnon, « le lumineux », et les Babyloniens le rattachaient au dieu Ninurta. Avec sa lumière pâle et sa marche lente, il marquait la limite du monde connu : au-delà commençait la sphère des étoiles fixes.",
          },
          {
            kind: "p",
            text: "Ptolémée le dit froid et sec, de nature masculine et diurne : la chaleur du jour, pensait-on, tempère sa froideur. C'est le « grand maléfique » de la tradition, l'astre des épreuves, des retards et de la vieillesse ; Ptolémée lui confie le grand âge, après 68 ans.",
          },
          {
            kind: "p",
            text: "Les astrologues modernes le regardent avec plus de nuances : il montre où l'on doit construire pas à pas, ce que l'on apprend par l'effort et qui finit par devenir une force.",
          },
        ],
      },
      keywords: ["le temps", "la structure", "la responsabilité", "la discipline", "les limites", "la maturité", "la persévérance"],
      sections: {
        symbolique: {
          heading: "Le symbole de Saturne",
          summary:
            "Saturne figure le principe de limite : la règle, la durée, la concentration, ce qui donne forme et tient debout. Son glyphe, une croix posée sur un croissant, évoque la faux du dieu des moissons.",
          details: [
            {
              kind: "p",
              text: "La tradition lui associe les vieillards, les bâtisseurs, les paysans, les savants solitaires, les mines et les pierres, et tout ce qui demande de la patience. Dans le corps, il gouverne les os, les dents et la peau, ce qui structure et protège. Les modernes y ajoutent la peur, le doute, le sens du devoir et une autorité intérieure qui se forge avec le temps.",
            },
            {
              kind: "p",
              text: "Son glyphe vient des lettres grecques kappa et rhô, les deux premières de Kronos, réunies par un trait d'abréviation. Le dessin final, une croix au-dessus d'un croissant, renverse celui de Jupiter : on y voit la matière qui pèse sur l'âme, ou la faux du moissonneur. En alchimie, il désigne le plomb, métal lourd et terne.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Saturne dans un thème",
          summary:
            "Son signe décrit la manière de construire et de se fixer des règles ; sa maison, le domaine où l'on apprend lentement, parfois à force d'obstacles ; ses aspects, ce qui demande rigueur et patience.",
          details: [
            {
              kind: "p",
              text: "Saturne reste environ deux ans et demi dans un signe, ce qui donne plus de poids à sa maison. En maison X, dont il est le maître naturel pour les modernes, il décrirait une carrière bâtie pas à pas ; en maison VII, un engagement pris au sérieux, souvent mûri longtemps. La tradition hellénistique le disait en joie en maison XII, celle des épreuves.",
            },
            {
              kind: "p",
              text: "Les astrologues accordent une grande place au « retour de Saturne », vers 29 ans et demi puis vers 59 ans, quand la planète revient à sa position de naissance : ils y voient un âge de bilans et de choix d'adulte. Ce n'est pas une épreuve annoncée, mais un repère symbolique dans le cycle d'une vie.",
            },
          ],
        },
        mythe: {
          heading: "Cronos et Saturne",
          summary:
            "La planète porte le nom de Saturne, vieux dieu romain des semailles, identifié au Titan grec Cronos, père de Zeus. On l'a souvent confondu avec Chronos, le Temps, d'où son image de vieillard armé d'une faux.",
          details: [
            {
              kind: "p",
              text: "Fils d'Ouranos, le Ciel, et de Gaïa, la Terre, Cronos renversa son père à l'aide d'une faucille. Averti qu'un de ses enfants le détrônerait à son tour, il les avala tous à la naissance, jusqu'à ce que Rhéa sauve Zeus. Vaincu, Cronos fut relégué loin de l'Olympe.",
            },
            {
              kind: "p",
              text: "Les Romains racontaient qu'une fois chassé, Saturne s'était réfugié dans le Latium, où il avait enseigné l'agriculture et fait régner un âge d'or. Ses fêtes de décembre, les Saturnales, renversaient pour quelques jours l'ordre social : les maîtres servaient leurs esclaves à table. L'anglais lui doit Saturday, le samedi.",
            },
          ],
        },
        astronomie: {
          heading: "La planète aux anneaux",
          summary:
            "Deuxième géante du système solaire, Saturne tourne à 1,4 milliard de kilomètres du Soleil, dont il fait le tour en 29 ans et demi. Ses anneaux, faits de morceaux de glace et de roche, sont les plus spectaculaires de tous.",
          details: [
            {
              kind: "p",
              text: "Son diamètre atteint 120 500 km, près de dix fois celui de la Terre. Faite surtout d'hydrogène et d'hélium, la planète est si peu dense qu'elle flotterait dans une baignoire assez grande : c'est la seule moins dense que l'eau. Parmi ses très nombreuses lunes, Titan, plus large que Mercure, est enveloppée d'une épaisse atmosphère.",
            },
            {
              kind: "p",
              text: "Galilée aperçut les anneaux en 1610 sans comprendre leur forme ; c'est Christiaan Huygens qui, dans les années 1650, y reconnut un anneau détaché de la planète. Dans le zodiaque, Saturne avance d'environ deux minutes d'arc par jour et reste en moyenne 897 jours dans un signe, soit à peu près deux ans et demi.",
            },
          ],
        },
        retrogradation: {
          heading: "Saturne rétrograde",
          summary:
            "Chaque année, Saturne semble reculer pendant quatre mois et demi environ : plus d'un tiers de son temps se passe en rétrogradation. Le phénomène revient tous les 378 jours, chaque fois que la Terre le double.",
          details: [
            {
              kind: "p",
              text: "Saturne est si lent que la Terre le rattrape à peine plus d'une fois par an. Son recul apparent est modeste, environ 7 degrés, mais il dure longtemps : quelque 138 jours entre deux « stations », ces moments où la planète semble immobile avant de changer de sens.",
            },
            {
              kind: "p",
              text: "Pour la tradition, un Saturne rétrograde gardait sa gravité mais l'exerçait moins directement. Les interprètes modernes y lisent souvent une exigence intérieure : des règles que l'on s'impose soi-même plutôt que celles du monde extérieur. Comme plus d'un tiers des naissances ont lieu pendant ces périodes, il s'agit d'une nuance, non d'une marque rare.",
            },
          ],
        },
        maitrises: {
          heading: "Les maîtrises de Saturne",
          summary:
            "Saturne gouverne le Capricorne et, dans la tradition, le Verseau. Il est exalté dans la Balance, à 21 degrés. En face, il est en exil dans le Cancer et le Lion, les signes des luminaires, et en chute dans le Bélier.",
          details: [
            {
              kind: "p",
              text: "Le schéma de Ptolémée place Saturne exactement à l'opposé des luminaires : le Capricorne fait face au Cancer, le Verseau au Lion. Froid et lointain, il reçoit les signes du cœur de l'hiver, à l'inverse de ceux de la lumière et de la chaleur estivales. Depuis la fin du XIXe siècle, beaucoup d'astrologues confient le Verseau à Uranus, Saturne en restant le maître traditionnel.",
            },
            {
              kind: "p",
              text: "Son exaltation dans la Balance répond à celle du Soleil dans le Bélier : là où la lumière décline et où les nuits l'emportent, Saturne prend de la force, explique Ptolémée. Pour la même raison, il chute dans le Bélier, où le Soleil s'exalte. Les astrologues décrivent un Saturne juste et mesuré dans la Balance, plus impatient et moins sûr de lui dans le Bélier.",
            },
          ],
        },
      },
      imageAlt: "Sphère de Saturne, drapée d'une carte photographique de ses nuages : des bandes de nuages beiges et dorées, pâles et régulières.",
    },
    uranus: {
      tagline: "La première planète découverte au télescope, et pour les astrologues modernes celle de la liberté, de l'invention et des ruptures.",
      intro: {
        summary:
          "Uranus, découvert en 1781, est la première planète que les Anciens ne connaissaient pas. Les astrologues modernes y voient l'originalité, l'indépendance, l'innovation et les changements soudains : ce qui bouscule les habitudes.",
        details: [
          {
            kind: "p",
            text: "À peine visible à l'œil nu, Uranus met 84 ans à faire le tour du zodiaque, soit environ sept ans par signe. Sa découverte a fait craquer le vieux cadre des sept astres : pour la première fois depuis l'Antiquité, le ciel comptait un astre errant de plus.",
          },
          {
            kind: "p",
            text: "Aucun auteur ancien n'ayant pu le décrire, sa symbolique s'est construite après coup, à partir de son nom, de son mythe et de l'esprit de son époque, celle des révolutions américaine et française et des débuts de l'industrie. Les astrologues l'ont relié peu à peu au Verseau, signe qu'il gouverne pour eux.",
          },
          {
            kind: "p",
            text: "Dans un thème, il montre où l'on a besoin d'air et de liberté, où l'on refuse la routine, où l'on peut innover. Comme pour les deux autres planètes lointaines, son signe parle d'abord d'une génération.",
          },
        ],
      },
      keywords: ["la liberté", "l'originalité", "l'innovation", "les ruptures", "l'indépendance", "les découvertes", "l'imprévu"],
      sections: {
        symbolique: {
          heading: "Le symbole d'Uranus",
          summary:
            "Uranus figure l'éveil et la rupture : l'esprit qui invente, se libère et refuse les cadres trop étroits. Son glyphe astrologique est un monogramme, la lettre H de son découvreur, Herschel, posée sur un globe.",
          details: [
            {
              kind: "p",
              text: "Les astrologues modernes lui confient l'imprévu, l'électricité, les technologies, les idées d'avant-garde, les amitiés choisies et les causes collectives. Ils y voient l'éclair qui fait voir les choses autrement, mais aussi l'instabilité, la nervosité et le goût de la provocation.",
            },
            {
              kind: "p",
              text: "En 1784, l'astronome Jérôme de Lalande proposa ce signe dans une lettre à Herschel : « un globe surmonté par la première lettre de votre nom ». Le dessin se lit encore ainsi : deux montants reliés par une barre, un trait central, et un petit cercle en dessous. Les astronomes ont aussi employé un autre symbole, un cercle surmonté d'une flèche.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Uranus dans un thème",
          summary:
            "Son signe, partagé par une génération pendant sept ans environ, dit le style des changements qu'elle porte. Sa maison montre où l'on a soif d'indépendance et d'innovation ; ses aspects, quels astres il électrise.",
          details: [
            {
              kind: "p",
              text: "Les astrologues lisent surtout la maison : en maison I, Uranus soulignerait une personnalité qui tient à sa singularité ; en maison IV, un foyer peu conventionnel ou des déménagements ; en maison XI, la maison du Verseau dans le zodiaque naturel, un réseau d'amis variés et l'engagement dans des projets collectifs.",
            },
            {
              kind: "p",
              text: "Ses aspects aux planètes personnelles sont jugés parlants : avec la Lune, un besoin de liberté dans la vie affective ; avec Mercure, une pensée rapide et intuitive. Vers 42 ans, Uranus s'oppose à sa position de naissance : les astrologues y voient volontiers un tournant du milieu de la vie.",
            },
          ],
        },
        mythe: {
          heading: "Ouranos, le Ciel",
          summary:
            "Uranus est la forme latine d'Ouranos, le Ciel des Grecs, époux de Gaïa, la Terre, et père des Titans. C'est la seule planète qui porte le nom d'un dieu grec plutôt que celui d'un dieu romain.",
          details: [
            {
              kind: "p",
              text: "Dans la Théogonie d'Hésiode, Ouranos donne à Gaïa de nombreux enfants, les Titans, les Cyclopes et des géants aux cent bras, mais les tient enfermés dans les profondeurs de la Terre. Gaïa arme alors son fils Cronos d'une faucille, et celui-ci renverse son père : le Ciel est séparé de la Terre.",
            },
            {
              kind: "p",
              text: "William Herschel voulait appeler sa découverte Georgium Sidus, « l'astre de George », en hommage au roi George III. L'astronome allemand Johann Elert Bode proposa Uranus en 1782 : le père de Saturne, comme Saturne est le père de Jupiter. Le nom ne s'imposa partout qu'en 1850. Entre-temps, en 1789, le chimiste Martin Klaproth avait baptisé l'uranium en son honneur.",
            },
          ],
        },
        astronomie: {
          heading: "La planète couchée",
          summary:
            "Géante de glace quatre fois plus large que la Terre, Uranus tourne à 2,9 milliards de kilomètres du Soleil, dont il fait le tour en 84 ans, couché sur le côté : son axe est incliné d'environ 98 degrés.",
          details: [
            {
              kind: "p",
              text: "William Herschel l'a découvert le 13 mars 1781, depuis le jardin de sa maison de Bath, en Angleterre, avec un télescope qu'il avait construit lui-même ; il crut d'abord à une comète. La planète est pourtant visible à l'œil nu par une nuit très noire, sous la forme d'un point très faible : les Anciens ne l'avaient pas distinguée des étoiles.",
            },
            {
              kind: "p",
              text: "Son inclinaison donne des saisons extrêmes : chaque pôle connaît environ 42 ans de jour continu, puis 42 ans de nuit. Sa teinte bleu-vert vient du méthane de son atmosphère. Dans le zodiaque, Uranus reste en moyenne 2 557 jours dans un signe, soit environ sept ans.",
            },
          ],
        },
        retrogradation: {
          heading: "Uranus rétrograde",
          summary:
            "Chaque année, Uranus semble reculer pendant environ cinq mois, soit plus de 40 % de son temps. Le phénomène revient tous les 370 jours : à peine plus d'un an, tant la planète avance lentement.",
          details: [
            {
              kind: "p",
              text: "Comme pour les autres planètes extérieures, c'est la Terre qui, en le dépassant sur son orbite intérieure, donne l'illusion d'un recul. Uranus revient alors en arrière d'environ 4 degrés, avant de repartir. Il franchit ainsi certains degrés du zodiaque trois fois : en avant, en arrière, puis de nouveau en avant.",
            },
            {
              kind: "p",
              text: "Plus de deux naissances sur cinq ont lieu pendant une rétrogradation d'Uranus : les astrologues n'y voient donc qu'une nuance. Certains y lisent une originalité plus intérieure, une liberté qui se vit dans la pensée avant de se montrer au grand jour.",
            },
          ],
        },
        maitrises: {
          heading: "Les maîtrises d'Uranus",
          summary:
            "Pour les astrologues modernes, Uranus gouverne le Verseau, et il est donc en exil dans le Lion, le signe opposé. La tradition ne lui reconnaît ni exaltation ni chute : elle ignorait son existence.",
          details: [
            {
              kind: "p",
              text: "L'attribution du Verseau s'est imposée au fil des XIXe et XXe siècles : les astrologues trouvaient dans ce signe d'air, tourné vers l'avenir, le groupe et les idées, un écho à la planète des révolutions et des découvertes. Le Verseau garde pourtant son maître traditionnel, Saturne, que beaucoup continuent de regarder.",
            },
            {
              kind: "p",
              text: "L'exil au Lion se lit comme une tension entre le besoin d'affirmer sa personne et celui de servir une cause commune. Quelques auteurs modernes ont proposé une exaltation pour Uranus, mais aucune ne fait consensus ; ce site n'en retient pas.",
            },
          ],
        },
      },
      imageAlt: "Sphère d'Uranus, d'après une carte photographique de la planète : un globe bleu-vert pâle, presque sans relief, voilé par sa haute atmosphère.",
    },
    neptune: {
      tagline: "La planète trouvée par le calcul avant d'être vue, et pour les astrologues celle du rêve, de l'imagination et de la compassion.",
      intro: {
        summary:
          "Neptune, invisible à l'œil nu, a été trouvé en 1846 à l'endroit que le calcul avait annoncé. Les astrologues lui confient le rêve, l'inspiration, la spiritualité et la compassion, mais aussi le flou et les illusions.",
        details: [
          {
            kind: "p",
            text: "Neptune met près de 165 ans à faire le tour du zodiaque, soit près de quatorze ans par signe. Découvert soixante-cinq ans après Uranus, il a apporté aux astrologues une image nouvelle : celle de l'océan, sans limites ni contours.",
          },
          {
            kind: "p",
            text: "Son époque était celle du romantisme, de la photographie naissante, des premières anesthésies et de l'essor du spiritisme : les astrologues y ont vu des correspondances avec l'imaginaire, les images, l'oubli de soi et l'au-delà. Ils l'ont associé aux Poissons, signe d'eau qu'il gouverne pour eux.",
          },
          {
            kind: "p",
            text: "Dans un thème, il montre où l'on rêve, où l'on se dévoue, où l'on cherche à dépasser les frontières du moi, et aussi où l'on risque de se perdre ou de se laisser abuser.",
          },
        ],
      },
      keywords: ["le rêve", "l'inspiration", "la spiritualité", "la compassion", "l'imagination", "les illusions", "les arts"],
      sections: {
        symbolique: {
          heading: "Le symbole de Neptune",
          summary:
            "Neptune figure la dissolution des frontières : l'idéal, la foi, l'intuition, l'élan vers ce qui dépasse la personne. Son glyphe est le trident du dieu des mers.",
          details: [
            {
              kind: "p",
              text: "Les astrologues modernes lui confient la musique, le cinéma, la poésie, la mer, le sommeil, la mystique et le soin des plus fragiles. Ils y voient la capacité à ressentir ce que vivent les autres, mais aussi la tentation de fuir le réel, la confusion et les mirages.",
            },
            {
              kind: "p",
              text: "Le trident accompagne la planète depuis sa découverte : Le Verrier en proposa le nom et le symbole en même temps. Les astrologues le décomposent comme les glyphes anciens : un croissant ouvert vers le haut, l'âme réceptive, porté par une croix, la matière. Le dessin le plus courant aujourd'hui barre le manche d'un petit trait, près du bas.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Neptune dans un thème",
          summary:
            "Son signe, partagé pendant près de quatorze ans, colore les idéaux d'une génération. Sa maison montre où l'on rêve et où l'on se dévoue ; ses aspects, quels astres il inspire ou brouille.",
          details: [
            {
              kind: "p",
              text: "En maison XII, celle des Poissons dans le zodiaque naturel, Neptune soulignerait le besoin de retrait, de méditation ou de service discret ; en maison V, une créativité nourrie d'imaginaire ; en maison VII, une tendance à idéaliser le partenaire. Les astrologues conseillent de le lire avec nuance : il inspire autant qu'il trouble.",
            },
            {
              kind: "p",
              text: "Ses aspects aux planètes rapides sont les plus parlants : avec Vénus, un amour idéaliste ou artiste ; avec Mercure, une pensée intuitive, faite d'images plutôt que de raisonnements ; avec Mars, une énergie qui se met au service d'une cause ou d'un rêve.",
            },
          ],
        },
        mythe: {
          heading: "Poséidon et Neptune",
          summary:
            "La planète porte le nom de Neptune, dieu romain des eaux, identifié au Poséidon des Grecs, maître des mers, des tremblements de terre et des chevaux, que l'on représente armé d'un trident.",
          details: [
            {
              kind: "p",
              text: "Poséidon est le frère de Zeus et d'Hadès. Après la victoire sur les Titans, les trois frères tirèrent au sort le partage du monde : à Zeus le ciel, à Hadès le monde souterrain, à Poséidon la mer. Il régnait depuis un palais sous les flots et, d'un coup de trident, faisait jaillir les sources ou trembler la terre.",
            },
            {
              kind: "p",
              text: "Le nom de la planète fit débat. Galle proposa Janus, l'Anglais James Challis Océanus ; Le Verrier suggéra d'abord Neptune, puis voulut qu'on l'appelle Le Verrier, avec l'appui de François Arago. Neptune, défendu notamment par l'astronome Friedrich von Struve, finit par faire consensus. Le neptunium, découvert en 1940, a pris son nom à la suite de l'uranium.",
            },
          ],
        },
        astronomie: {
          heading: "La planète trouvée par le calcul",
          summary:
            "Neptune, la plus éloignée des planètes, tourne à 4,5 milliards de kilomètres du Soleil et en fait le tour en près de 165 ans. C'est la première planète découverte grâce aux mathématiques, avant d'être vue au télescope.",
          details: [
            {
              kind: "p",
              text: "Les irrégularités du mouvement d'Uranus laissaient penser qu'une planète inconnue le perturbait. Urbain Le Verrier calcula sa position et l'envoya à Johann Galle, à l'observatoire de Berlin : dans la nuit du 23 au 24 septembre 1846, Galle trouva la planète à moins d'un degré de l'endroit prévu. L'Anglais John Couch Adams avait mené des calculs comparables.",
            },
            {
              kind: "p",
              text: "Géante de glace un peu moins large qu'Uranus, Neptune est balayé par les vents les plus rapides du système solaire, à plus de 2 000 km/h. En 1989, la sonde Voyager 2 y photographia une immense tempête, la Grande Tache sombre, disparue depuis. Dans le zodiaque, Neptune reste en moyenne 5 016 jours dans un signe, près de quatorze ans.",
            },
          ],
        },
        retrogradation: {
          heading: "Neptune rétrograde",
          summary:
            "Chaque année, Neptune semble reculer pendant un peu plus de cinq mois, environ 158 jours. La planète est rétrograde 43 % du temps : c'est presque une naissance sur deux.",
          details: [
            {
              kind: "p",
              text: "Le principe ne change pas : la Terre, en dépassant Neptune, crée l'illusion d'un recul. Mais Neptune est si lent que ce recul ne dépasse pas 3 degrés environ, et que la planète retrouve tous les 367 jours la même position par rapport au Soleil, à peine deux jours de plus qu'une année.",
            },
            {
              kind: "p",
              text: "Pour les astrologues, un Neptune rétrograde tournerait l'imaginaire vers l'intérieur : une sensibilité qui se cultive en silence, des idéaux examinés plutôt que suivis à l'aveugle. Tant de naissances sont concernées qu'aucune règle générale ne peut en être tirée.",
            },
          ],
        },
        maitrises: {
          heading: "Les maîtrises de Neptune",
          summary:
            "Pour les astrologues modernes, Neptune gouverne les Poissons ; il est donc en exil dans la Vierge, le signe opposé. Aucune exaltation ne lui est reconnue par la tradition, qui ne le connaissait pas.",
          details: [
            {
              kind: "p",
              text: "Les Poissons, dernier signe du zodiaque, signe d'eau et de fin de cycle, ont paru accordés à la planète de l'océan et de l'infini ; l'attribution s'est imposée entre la fin du XIXe siècle et le début du XXe. Le maître traditionnel des Poissons reste Jupiter, que beaucoup d'astrologues regardent encore en premier.",
            },
            {
              kind: "p",
              text: "L'exil en Vierge oppose le rêve à la précision, l'élan sans limites au goût du détail et de l'ordre. Certains auteurs modernes ont proposé une exaltation pour Neptune, sans accord entre eux ; ce site n'en indique pas.",
            },
          ],
        },
      },
      imageAlt: "Sphère bleu profond de Neptune, texturée d'après une carte photographique : des bandes nuageuses et une tache sombre bordée de nuages blancs.",
    },
    pluto: {
      tagline: "Le petit monde glacé des confins, devenu planète naine, et pour les astrologues l'astre des profondeurs, des crises et des renaissances.",
      intro: {
        summary:
          "Pluton, découvert en 1930, est classé planète naine depuis 2006, mais les astrologues continuent de le compter parmi leurs dix astres. Ils y voient la transformation, le pouvoir, l'intensité et tout ce qui meurt pour renaître.",
        details: [
          {
            kind: "p",
            text: "Pluton met 248 ans à faire le tour du zodiaque. Depuis sa découverte, il en a parcouru un peu plus de la moitié, du Cancer au Verseau : les astrologues ne l'ont donc observé que sur une partie de son cycle, et sa symbolique s'appuie autant sur le mythe que sur l'expérience.",
          },
          {
            kind: "p",
            text: "Les années de sa découverte, marquées par la crise économique, la montée des totalitarismes puis la maîtrise de l'atome, ont nourri cette symbolique : les astrologues l'ont associé aux forces souterraines, individuelles et collectives, et lui ont confié le Scorpion.",
          },
          {
            kind: "p",
            text: "Dans un thème, il montre où l'on vit les transformations les plus profondes, où l'on affronte ses peurs, où l'on peut trouver une force insoupçonnée.",
          },
        ],
      },
      keywords: ["la transformation", "les profondeurs", "le pouvoir", "les crises", "la renaissance", "l'intensité", "les secrets"],
      sections: {
        symbolique: {
          heading: "Le symbole de Pluton",
          summary:
            "Pluton figure la transformation radicale : la mort symbolique et la renaissance, la puissance cachée, ce qui travaille en profondeur. Son glyphe astrologique montre un globe au-dessus d'un croissant posé sur une croix.",
          details: [
            {
              kind: "p",
              text: "Les astrologues modernes lui confient les crises qui obligent à changer, la psychologie des profondeurs, les secrets, l'argent partagé, les héritages et les questions de pouvoir. Ils y voient une force de régénération, à la manière du phénix qui renaît de ses cendres, mais aussi le goût de l'emprise et les passions extrêmes.",
            },
            {
              kind: "p",
              text: "Ce glyphe date du début des années 1930 : on y lit souvent le bident, la fourche à deux dents du dieu des Enfers, surmonté d'un globe. Les astronomes avaient adopté un autre signe, un monogramme des lettres P et L, initiales de Pluton et de Percival Lowell, l'astronome qui avait lancé la recherche d'une planète au-delà de Neptune ; certains astrologues l'emploient encore.",
            },
          ],
        },
        "dans-un-theme": {
          heading: "Pluton dans un thème",
          summary:
            "Son signe, partagé par une génération pendant douze à plus de trente ans, dit le terrain de ses grandes mutations. Sa maison montre où l'on se transforme en profondeur ; ses aspects, quels astres il intensifie.",
          details: [
            {
              kind: "p",
              text: "En maison VIII, qui répond au Scorpion, son signe, Pluton soulignerait l'intérêt pour ce qui est caché, les crises traversées et les ressources partagées ; en maison X, une ambition intense et un rapport fort au pouvoir ; en maison IV, une histoire familiale dense, avec ses secrets.",
            },
            {
              kind: "p",
              text: "Un aspect de Pluton au Soleil ou à la Lune est lu comme une personnalité intense, capable de se réinventer après les épreuves. Les astrologues insistent sur la lecture symbolique : Pluton ne prédit aucun drame, il décrit des transformations, souvent lentes et profondes.",
            },
          ],
        },
        mythe: {
          heading: "Hadès et Pluton",
          summary:
            "Pluton est le nom romain du dieu des Enfers, Hadès pour les Grecs. On l'appelait aussi Ploutôn, « le riche », car les richesses du sous-sol, métaux et récoltes, venaient de son royaume.",
          details: [
            {
              kind: "p",
              text: "Frère de Zeus et de Poséidon, Hadès reçut en partage le monde souterrain, où il régnait sur les morts. Il enleva Perséphone, fille de Déméter, la déesse des moissons ; pour apaiser la colère de celle-ci, la jeune femme passa désormais une partie de l'année sous terre, et la nature, en son absence, connaît l'hiver.",
            },
            {
              kind: "p",
              text: "Le nom de la planète a été proposé par Venetia Burney, une écolière d'Oxford de 11 ans, passionnée de mythologie. Son grand-père le transmit à un astronome anglais, qui le télégraphia à l'observatoire Lowell ; il y fut choisi à l'unanimité, puis publié le 1er mai 1930. Ses lunes portent des noms liés aux Enfers : Charon, le passeur des âmes, Styx, Nix, Kerbéros et Hydra.",
            },
          ],
        },
        astronomie: {
          heading: "Une planète naine aux confins",
          summary:
            "Pluton tourne en moyenne à 5,9 milliards de kilomètres du Soleil et en fait le tour en 248 ans. Plus petit que notre Lune, il a été reclassé planète naine par l'Union astronomique internationale le 24 août 2006.",
          details: [
            {
              kind: "p",
              text: "Clyde Tombaugh l'a découvert le 18 février 1930 à l'observatoire Lowell, à Flagstaff, en Arizona, en comparant des photographies du ciel prises à quelques jours d'intervalle ; la nouvelle fut annoncée le 13 mars. Pluton mesure 2 376 km de diamètre. Son orbite est si allongée qu'entre 1979 et 1999, il était plus proche du Soleil que Neptune.",
            },
            {
              kind: "p",
              text: "En 2006, l'UAI a précisé ce qu'est une planète : un astre qui a fait le vide autour de son orbite. Ce n'est pas le cas de Pluton, qui circule parmi d'innombrables petits corps glacés, la ceinture de Kuiper. En juillet 2015, la sonde New Horizons l'a survolé et a révélé ses plaines de glace, dont la célèbre région en forme de cœur.",
            },
            {
              kind: "p",
              text: "Dans le zodiaque, Pluton reste en moyenne 7 547 jours dans un signe, environ vingt ans et demi, mais de douze ans, dans le Scorpion, à plus de trente, dans le Taureau, selon la partie de son orbite.",
            },
          ],
        },
        retrogradation: {
          heading: "Pluton rétrograde",
          summary:
            "Chaque année, Pluton semble reculer pendant environ 160 jours, plus de cinq mois. C'est la plus longue rétrogradation des dix astres : plus de quatre naissances sur dix ont lieu pendant l'une d'elles.",
          details: [
            {
              kind: "p",
              text: "Le recul apparent de Pluton est minuscule, 2 à 3 degrés environ, mais il dure longtemps, car la planète naine avance à peine : la Terre la double tous les 367 jours environ. L'illusion est la même que pour les autres planètes extérieures, produite par notre propre mouvement autour du Soleil.",
            },
            {
              kind: "p",
              text: "Les astrologues décrivent ces périodes comme un temps de travail intérieur : revenir sur ses peurs, sur un rapport de force, sur ce qui doit finir. La tradition ancienne n'en dit rien, et pour cause : elle ignorait Pluton.",
            },
          ],
        },
        maitrises: {
          heading: "Les maîtrises de Pluton",
          summary:
            "Pour les astrologues modernes, Pluton gouverne le Scorpion ; il est donc en exil dans le Taureau, le signe opposé. La tradition ne lui reconnaît aucune exaltation, et le Scorpion garde son maître ancien, Mars.",
          details: [
            {
              kind: "p",
              text: "L'attribution du Scorpion s'est faite dans les années qui ont suivi la découverte : les astrologues ont vu un écho entre ce signe d'eau fixe, réputé pour son intensité et son goût du secret, et l'astre des profondeurs.",
            },
            {
              kind: "p",
              text: "L'exil en Taureau oppose la transformation à la stabilité, le besoin de tout remettre en jeu au goût de conserver. Quelques auteurs modernes ont avancé une exaltation pour Pluton, sans consensus ; ce site n'en retient aucune.",
            },
          ],
        },
      },
      imageAlt: "Sphère de Pluton, d'après la carte de la sonde New Horizons : une grande plaine claire en forme de cœur, des terrains brun-rouge, et un sud resté noir, faute d'images.",
    },
  },
};
