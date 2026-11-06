import type { HomeContent } from "./types";

/** Textes de l'accueil : l'astrologie en bref, les portes vers les sections, la note de la science, la frise des signes. */
export const HOME_FR: HomeContent = {
  essentialsTitle: "L'astrologie en bref",
  essentials: [
    {
      heading: "Une tradition venue de Babylone",
      summary:
        "L'astrologie est une tradition qui relie la position des astres à la vie humaine. Née en Mésopotamie il y a plus de trois mille ans, elle a été transmise par les Grecs, les Romains, les savants du monde islamique puis l'Europe, jusqu'à aujourd'hui.",
      details: [
        {
          kind: "p",
          text: "Les premiers astrologues étaient des scribes de Babylone et d'Assyrie. Ils lisaient le ciel comme un message adressé au roi : une éclipse ou l'éclat d'une planète annonçait une guerre, une épidémie ou une bonne récolte. L'horoscope individuel, calculé pour une naissance, n'apparaît qu'à la fin du Ve siècle av. J.-C.",
        },
        {
          kind: "p",
          text: "Dans l'Égypte gouvernée par des rois grecs, vers le IIe ou le Ier siècle av. J.-C., cet héritage se mêle à la géométrie grecque et aux décans égyptiens : c'est la naissance de l'astrologie horoscopique, avec l'Ascendant et les maisons. Pendant des siècles, astronomie et astrologie avancent ensemble ; elles se séparent au XVIIe siècle, avec la science moderne.",
        },
        {
          kind: "p",
          text: "Ce site présente l'astrologie comme une tradition symbolique et culturelle. Il explique ce que disent les astrologues, sans affirmer que les astres décrivent une personne ou prédisent l'avenir.",
        },
      ],
    },
    {
      heading: "Le zodiaque et les douze signes",
      summary:
        "Le zodiaque est la bande du ciel où passent le Soleil, la Lune et les planètes. Les astrologues la divisent en douze signes de 30°, du Bélier aux Poissons, en partant de l'équinoxe de mars.",
      details: [
        {
          kind: "p",
          text: "Vu de la Terre, le Soleil semble faire le tour du ciel en un an, devant les étoiles : son chemin s'appelle l'écliptique. La Lune et les planètes restent toujours près de ce grand cercle, dans une bande que les Grecs ont nommée zodiaque, d'un mot qui évoque de petits animaux, parce que la plupart de ses figures en sont.",
        },
        {
          kind: "p",
          text: "La tradition associe chaque signe à un élément (feu, terre, air ou eau), à une modalité (cardinal, fixe ou mutable) et à un astre maître. Le zodiaque des astrologues occidentaux est calé sur les saisons : à cause de la précession des équinoxes, il ne coïncide plus avec les constellations qui portent les mêmes noms.",
        },
      ],
    },
    {
      heading: "Planètes, maisons et aspects",
      summary:
        "Dans un thème, chaque astre représente une fonction : l'identité pour le Soleil, les émotions pour la Lune, la pensée pour Mercure. Les maisons découpent le ciel du lieu en douze domaines de la vie, et les aspects mesurent les angles entre les astres.",
      details: [
        {
          kind: "list",
          items: [
            "Les astres : le Soleil et la Lune, que la tradition appelle les luminaires ; Mercure, Vénus, Mars, Jupiter et Saturne, visibles à l'œil nu et connus depuis l'Antiquité ; Uranus, Neptune et Pluton, découverts au télescope en 1781, en 1846 et en 1930.",
            "Les maisons : douze secteurs comptés à partir de l'Ascendant, le degré du zodiaque qui se lève à l'est au moment de la naissance. Chacune correspond à un domaine de la vie, des ressources au couple et à la carrière.",
            "Les aspects : des angles remarquables entre deux astres, comme la conjonction (0°), le sextile (60°), le carré (90°), le trigone (120°) ou l'opposition (180°), que la tradition dit harmonieux ou tendus.",
          ],
        },
        {
          kind: "p",
          text: "Les astrologues résument souvent leur méthode ainsi : l'astre dit de quoi il s'agit, le signe dit comment, la maison dit où, et les aspects disent avec quels autres astres il dialogue.",
        },
      ],
    },
    {
      heading: "Le thème natal",
      summary:
        "Le thème natal, ou thème astral, est la carte du ciel à l'instant et au lieu d'une naissance. Ce site le calcule dans votre navigateur, à partir de la date, de l'heure et du lieu, sans rien envoyer ni rien garder.",
      details: [
        {
          kind: "p",
          text: "Il se dessine comme une roue : le cercle du zodiaque, les dix astres à leur place, les douze maisons et les traits des aspects. L'heure de naissance compte beaucoup : l'Ascendant change de signe toutes les deux heures en moyenne, et la Lune avance d'environ un demi-degré par heure.",
        },
        {
          kind: "p",
          text: "Pour les astrologues, ce dessin est un portrait symbolique. Pour la science, aucune étude n'a montré qu'il décrive une personnalité mieux que le hasard. La page du thème natal explique comment il se calcule et comment la tradition le lit.",
        },
      ],
    },
  ],
  doors: {
    signs: {
      title: "Les douze signes",
      text: "Du Bélier aux Poissons, ce que la tradition associe à chaque signe, et ce que montre le ciel réel.",
    },
    planets: {
      title: "Les planètes",
      text: "Du Soleil à Pluton, le rôle de chaque astre dans un thème, ses mythes et sa réalité astronomique.",
    },
    houses: {
      title: "Les maisons",
      text: "Douze domaines de la vie, comptés à partir de l'Ascendant, et plusieurs façons de les découper.",
    },
    aspects: {
      title: "Les aspects",
      text: "Conjonction, carré, trigone : les angles entre les astres et ce que les astrologues y lisent.",
    },
    natal: {
      title: "Votre thème natal",
      text: "La carte du ciel de votre naissance, calculée dans votre navigateur, avec une lecture guidée des mots-clés de la tradition.",
    },
    history: {
      title: "Histoire",
      text: "De Babylone aux applications pour téléphone, l'histoire d'une tradition qui a traversé les empires, les religions et les sciences.",
    },
    science: {
      title: "Ce que dit la science",
      text: "Précession, Ophiuchus, tests en double aveugle : ce que les études ont mesuré, et pourquoi l'astrologie reste un fait culturel.",
    },
  },
  scienceNote: {
    title: "Ce que disent les études",
    text: "Depuis le milieu du XXe siècle, des dizaines d'études ont cherché un lien entre la position des astres à la naissance et la personnalité ou le destin : aucun n'a résisté aux vérifications indépendantes, et aucune force connue ne pourrait l'expliquer. Ce site présente donc l'astrologie comme une tradition symbolique, riche d'histoire et de culture, et non comme une science.",
  },
  signsFrieze: {
    title: "Le zodiaque d'Urania's Mirror",
    lead: "Chaque signe est illustré par une carte d'Urania's Mirror, un coffret de 32 cartes du ciel gravées par Sidney Hall et publiées à Londres vers 1825, dont les étoiles, percées dans le carton, brillaient devant une lampe.",
  },
};
