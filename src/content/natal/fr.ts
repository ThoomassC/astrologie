import type { NatalContent } from "./types";

/** Textes de la page du thème natal : introduction, méthode, lecture, précision, confidentialité. */
export const NATAL_FR: NatalContent = {
  title: "Votre thème natal",
  lead: "La carte du ciel à l'instant et au lieu de votre naissance, calculée dans votre navigateur et lue avec les mots-clés de la tradition astrologique.",
  intro: {
    summary:
      "Un thème natal représente le ciel tel qu'on l'aurait vu depuis le lieu de naissance, à l'instant de la naissance : la place du Soleil, de la Lune et des planètes dans les signes, les douze maisons et les aspects. C'est la base de toute l'astrologie individuelle.",
    details: [
      {
        kind: "p",
        text: "Indiquez la date, l'heure et le lieu de naissance : le calculateur dessine la roue du thème, donne les positions et propose une lecture guidée. Si l'heure est inconnue, les positions sont calculées pour midi, sans Ascendant ni maisons ; le signe de la Lune, qui en change tous les deux jours et demi environ, peut alors rester incertain.",
      },
      {
        kind: "p",
        text: "Pour les astrologues, un thème se lit comme un ensemble, où aucun élément ne vaut seul. Ce site montre comment il se construit et ce que la tradition y lit ; il ne prétend pas qu'il décrive une personne ni qu'il annonce son avenir.",
      },
    ],
  },
  method: {
    heading: "Comment se construit un thème",
    summary:
      "Trois données suffisent : la date, l'heure et le lieu de naissance. Le calcul en tire l'instant exact en temps universel, la position des astres dans le zodiaque tropical, puis les angles, les maisons et les aspects.",
    details: [
      {
        kind: "list",
        items: [
          "L'heure : l'heure locale est convertie en temps universel avec les fuseaux horaires de la base IANA, que connaît votre navigateur, heure d'été comprise. Une heure sautée au printemps ou répétée à l'automne est signalée.",
          "Les astres : leur longitude sur l'écliptique est calculée pour cet instant, vue du centre de la Terre, dans le zodiaque tropical, qui part du point vernal de la date, la place du Soleil à l'équinoxe de mars.",
          "Les angles : le temps sidéral du lieu donne l'Ascendant, le degré qui se lève à l'est, et le Milieu du Ciel, le degré qui culmine au méridien ; le Descendant et le Fond du Ciel leur font face.",
          "Les maisons : leurs douze cuspides dépendent du système choisi, Placidus, maisons égales, signes entiers ou Porphyre. Au-delà de 66° de latitude, Placidus ne se calcule plus et le site passe à Porphyre.",
          "Les aspects : le site mesure l'écart entre chaque paire d'astres, Ascendant et Milieu du Ciel compris, et retient les angles remarquables à quelques degrés près, un écart toléré, l'orbe, plus large pour le Soleil et la Lune.",
        ],
      },
      {
        kind: "p",
        text: "Le calcul couvre les naissances de 1800 à 2100. Il donne aussi le nœud nord de la Lune et la répartition des astres entre éléments et modalités, que les astrologues regardent pour dégager une dominante.",
      },
    ],
  },
  reading: {
    heading: "Lire une position",
    summary:
      "La tradition lit chaque position comme une phrase : l'astre dit de quoi il s'agit, le signe comment, la maison où, et les aspects avec qui. La lecture guidée du site assemble ces mots-clés, sans les interpréter.",
    details: [
      {
        kind: "list",
        items: [
          "L'astre répond à « quoi ? » : une fonction ou un besoin. Le Soleil représente l'identité, la Lune les émotions, Mercure la pensée, Vénus l'amour et le goût, Mars l'action.",
          "Le signe répond à « comment ? » : la couleur que prend cette fonction. Selon la tradition, Mars dans le Bélier agit avec élan et franchise, Mars dans la Balance avec le souci de l'autre.",
          "La maison répond à « où ? » : le domaine de la vie où la fonction s'exprime d'abord, le couple pour la maison VII, la carrière pour la maison X.",
          "Les aspects répondent à « avec qui ? » : les liens entre deux fonctions, harmonieux pour un trigone ou un sextile, tendus pour un carré ou une opposition.",
        ],
      },
      {
        kind: "p",
        text: "Un astrologue ne s'arrête pas là : il pèse le thème entier, les maîtres des signes et des maisons, les dignités, les astres dominants, et chaque école a ses règles. Les phrases du site, elles, mettent bout à bout les mots-clés de la tradition, position par position. C'est un exercice de vocabulaire, pas une description de la personne.",
      },
    ],
  },
  accuracy: {
    heading: "Précision du calcul et de l'heure",
    summary:
      "Le calcul des positions est bien plus précis que l'heure de naissance. Quatre minutes d'erreur sur l'heure déplacent l'Ascendant d'environ un degré, et la Lune avance d'environ un demi-degré par heure.",
    details: [
      {
        kind: "p",
        text: "Les positions viennent d'astronomy-engine, une bibliothèque libre que son auteur vérifie contre les éphémérides de référence du JPL, à la NASA, et de l'US Naval Observatory : elle garantit mieux qu'une minute d'arc. Les tests du site la comparent aux exemples du manuel de Jean Meeus, à une dizaine de secondes d'arc près au plus.",
      },
      {
        kind: "p",
        text: "L'heure de naissance est la donnée fragile. Le ciel tourne d'un degré en quatre minutes environ : une heure arrondie au quart d'heure peut décaler l'Ascendant de plusieurs degrés, ou faire changer de signe une cuspide. En France, l'heure figure sur l'acte de naissance ; on la trouve sur sa copie intégrale, à demander à la mairie du lieu de naissance.",
      },
      {
        kind: "p",
        text: "Les fuseaux anciens demandent de la prudence. La base IANA ne garantit l'histoire des fuseaux que depuis 1970 : avant, certaines villes suivent la zone d'une autre, Montréal celle de Toronto. Et avant la loi du 14 mars 1891, chaque ville française vivait à son heure solaire locale, alors que la base applique à tout le pays l'heure de Paris : à Brest, l'heure locale retardait de 27 minutes. Le formulaire permet alors de saisir le décalage à la main.",
      },
    ],
  },
  privacy: {
    heading: "Vos données restent chez vous",
    summary:
      "Le thème est calculé dans votre navigateur : la date, l'heure et le lieu de naissance ne sont envoyés à aucun serveur et ne sont gardés nulle part. Le site ne dépose aucun cookie et ne mesure pas son audience.",
    details: [
      {
        kind: "p",
        text: "Le formulaire n'est relié à aucun serveur : ce que vous saisissez ne quitte pas votre appareil, et n'apparaît ni dans l'adresse de la page ni dans le stockage du navigateur. Fermer ou recharger la page efface tout.",
      },
      {
        kind: "p",
        text: "Le moteur de calcul est un fichier que le navigateur télécharge depuis le site au premier calcul, comme une image : il n'emporte aucune donnée. Comme pour tout site, votre navigateur demande les pages au serveur qui les héberge, mais ces demandes ne contiennent jamais de date ni de lieu de naissance.",
      },
      {
        kind: "p",
        text: "La seule chose que le site garde, dans votre navigateur, est le choix du thème jour ou nuit, si vous l'avez changé.",
      },
    ],
  },
};
