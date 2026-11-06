import type { AboutContent } from "./types";

/** Textes de la page À propos : démarche, calcul, sources, images (la page ajoute les crédits), confidentialité. */
export const ABOUT_FR: AboutContent = {
  title: "À propos",
  lead: "Pourquoi ce site existe, comment il calcule, d'où viennent ses textes et ses images, et ce qu'il fait de vos données.",
  sections: {
    demarche: {
      heading: "La démarche",
      summary:
        "Ce site est le frère d'Astronomie, du même auteur : après le ciel des astronomes, celui des astrologues. Il présente l'astrologie comme une tradition symbolique et culturelle, avec son histoire et ses règles, sans affirmer qu'elle décrive les personnes ou prédise l'avenir.",
      details: [
        {
          kind: "p",
          text: "L'astrologie fait partie de notre culture : on la croise dans les journaux, les conversations, l'art et jusque dans nos mots. Ce site veut l'expliquer clairement, telle que la pratiquent les astrologues, en distinguant toujours ce que dit la tradition de ce que montrent l'astronomie et les études.",
        },
        {
          kind: "p",
          text: "Chaque notion commence par un résumé simple, suivi de détails à la demande. Les textes s'adressent à tous, dès 12 ans environ. Pour voir le vrai ciel, les vraies distances et les vraies tailles, le site frère Astronomie prend le relais.",
        },
        {
          kind: "p",
          text: "Le code du site est public : chacun peut vérifier comment il calcule et signaler une erreur.",
        },
      ],
      links: [
        { label: "Astronomie, le site frère", href: "https://astronomie.vercel.app" },
        { label: "Le code source du site, sur GitHub", href: "https://github.com/ThoomassC/astrologie" },
      ],
    },
    calcul: {
      heading: "Comment le site calcule",
      summary:
        "Les positions des astres viennent de la bibliothèque libre astronomy-engine, à mieux qu'une minute d'arc. Le site les rapporte au zodiaque tropical, compté depuis l'équinoxe vrai de la date, puis calcule les angles, les maisons et les aspects, entièrement dans votre navigateur.",
      details: [
        {
          kind: "list",
          items: [
            "Les positions : astronomy-engine, de Donald Cross, sous licence MIT, fondée sur les modèles VSOP87 et NOVAS et vérifiée par son auteur contre les éphémérides du JPL et de l'US Naval Observatory. Elles sont géocentriques et apparentes, corrigées du temps de trajet de la lumière, de l'aberration et de la nutation.",
            "Le zodiaque : tropical, rapporté à l'écliptique vraie et à l'équinoxe vrai de la date. Le nœud nord est le nœud moyen de la Lune.",
            "Les maisons : Placidus, maisons égales, signes entiers ou Porphyre, au choix. Au-delà de 66° de latitude, Placidus ne se calcule plus : le site passe alors à Porphyre et le signale.",
            "L'heure : l'heure locale est convertie en temps universel avec les fuseaux horaires de la base IANA, que fournit votre navigateur. Cette base ne garantit l'histoire des fuseaux que depuis 1970.",
            "Les aspects : majeurs et mineurs, avec des orbes de 2° à 8°, un peu plus larges pour le Soleil et la Lune.",
          ],
        },
        {
          kind: "p",
          text: "Les seules positions calculées à l'avance sont les passages du Soleil dans les constellations, affichés sur les pages des signes, d'après les limites officielles de l'Union astronomique internationale.",
        },
      ],
      links: [
        { label: "astronomy-engine, sur GitHub (en anglais)", href: "https://github.com/cosinekitty/astronomy" },
        { label: "La base des fuseaux horaires, IANA (en anglais)", href: "https://www.iana.org/time-zones" },
        { label: "Union astronomique internationale (en anglais)", href: "https://www.iau.org/" },
        { label: "Planetary Fact Sheet, NASA (en anglais)", href: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/" },
      ],
    },
    sources: {
      heading: "Les sources",
      summary:
        "Les textes s'appuient sur des ouvrages et des sites de référence : traités anciens, travaux d'historiens, musées, encyclopédies et publications scientifiques. Chaque époque de l'histoire et chaque sujet de la page Science donnent leurs propres sources.",
      details: [
        {
          kind: "p",
          text: "Pour la tradition, le site suit les auteurs classiques, à commencer par la Tétrabible de Ptolémée et les Astronomiques de Manilius, et les manuels qui en sont issus. Pour l'histoire, il s'appuie sur les travaux d'historiens des sciences, sur les musées qui conservent les objets et sur les encyclopédies.",
        },
        {
          kind: "p",
          text: "Pour l'astronomie, il se fonde sur les données de la NASA, sur les limites des constellations de l'Union astronomique internationale et sur les exemples de calcul du manuel de Jean Meeus, Astronomical Algorithms. Pour les études scientifiques, il renvoie aux articles originaux, comme celui de Shawn Carlson paru dans Nature en 1985.",
        },
      ],
      links: [
        {
          label: "Ptolémée, Tetrabiblos, traduction de F. E. Robbins, LacusCurtius (en anglais)",
          href: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Ptolemy/Tetrabiblos/home.html",
        },
        { label: "Histoire de l'astrologie, Wikipédia", href: "https://fr.wikipedia.org/wiki/Histoire_de_l%27astrologie" },
        {
          label: "Science and Pseudo-Science, Stanford Encyclopedia of Philosophy (en anglais)",
          href: "https://plato.stanford.edu/entries/pseudo-science/",
        },
        { label: "Astrology and science, Wikipédia (en anglais)", href: "https://en.wikipedia.org/wiki/Astrology_and_science" },
      ],
    },
    images: {
      heading: "Les images",
      summary:
        "Les images viennent de collections publiques et de banques d'images libres : gravures anciennes du domaine public, photographies d'objets de musée, cartes des astres et photographie du ciel sous licence Creative Commons. La liste complète des crédits suit, image par image.",
      details: [
        {
          kind: "p",
          text: "Les douze signes sont illustrés par les cartes d'Urania's Mirror, gravées par Sidney Hall et publiées à Londres vers 1825, d'après l'exemplaire de la Library of Congress restauré par Adam Cuerden. Les planches de l'histoire, tablette, bas-relief, enluminure, gravures et astrolabe, viennent de Wikimedia Commons, souvent photographiées dans les musées qui les conservent.",
        },
        {
          kind: "p",
          text: "Les sphères des astres sont habillées de cartes de Solar System Scope, d'après des données de la NASA, et d'une carte de Pluton prise par la sonde New Horizons. La lumière zodiacale a été photographiée pour l'ESO à l'observatoire du Paranal, et le grain du papier vient d'ambientCG.",
        },
        {
          kind: "p",
          text: "Le domaine public et la licence CC0 permettent toute réutilisation ; la licence CC BY 4.0 demande de citer l'auteur, ce que fait la liste ci-dessous.",
        },
      ],
      links: [
        { label: "Wikimedia Commons", href: "https://commons.wikimedia.org/wiki/Accueil" },
        { label: "Solar System Scope, cartes des planètes (en anglais)", href: "https://www.solarsystemscope.com/textures/" },
        { label: "Images de l'ESO (en anglais)", href: "https://www.eso.org/public/images/" },
        { label: "ambientCG (en anglais)", href: "https://ambientcg.com/" },
        { label: "Library of Congress (en anglais)", href: "https://www.loc.gov/" },
      ],
    },
    confidentialite: {
      heading: "Confidentialité",
      summary:
        "Le site ne dépose aucun cookie, ne mesure pas son audience et ne demande aucun compte. Le thème natal est calculé dans votre navigateur : la date, l'heure et le lieu de naissance ne sont ni envoyés ni gardés.",
      details: [
        {
          kind: "p",
          text: "Les données de naissance ne quittent pas votre appareil : elles ne figurent ni dans l'adresse de la page ni dans le stockage du navigateur, et disparaissent quand vous fermez ou rechargez la page. Le moteur de calcul est un simple fichier, téléchargé depuis le site, qui n'emporte rien.",
        },
        {
          kind: "p",
          text: "Comme pour tout site, votre navigateur demande les pages au serveur qui les héberge ; ces demandes ne contiennent jamais de données de naissance. La seule chose gardée, dans votre navigateur, est votre choix du thème jour ou nuit, si vous l'avez changé : revenir au thème du système l'efface.",
        },
      ],
      links: [],
    },
  },
};
