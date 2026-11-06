import type { BirthInputError } from "@/lib/astro/birthInput";

/** Erreurs à message fixe : toutes, sauf l'heure sautée et l'heure répétée, qui ont leur phrase. */
export type FixedBirthError = Exclude<BirthInputError, { field: "time"; code: "nonexistent" | "ambiguous" }>;

/** Codes d'erreur d'un champ ; un membre de l'union peut couvrir deux champs (latitude et longitude). */
type CodesOf<F, E = FixedBirthError> = E extends { field: infer G; code: infer C } ? (F extends G ? C : never) : never;

/** Heure sautée : début et fin du saut, heure saisie, et la même heure décalée du saut (l'heure d'hiver). */
export interface ClockJump {
  readonly from: string;
  readonly to: string;
  readonly time: string;
  readonly shifted: string;
}

const LIST = new Intl.ListFormat("fr-FR", { style: "long", type: "conjunction" });

/** Textes du calculateur du thème natal (composant client) : formulaire, erreurs, résultat, notes. */
export interface NatalStrings {
  title: string;
  requiredNote: string;
  noScript: string;
  birthLegend: string;
  date: string;
  dateHelp: string;
  time: string;
  timeHelp: string;
  timeUnknown: string;
  timeUnknownHelp: string;
  placeLegend: string;
  city: string;
  cityChoose: string;
  cityOther: string;
  cityHelp: string;
  latitude: string;
  longitude: string;
  coordinatesHelp: string;
  /** Longitude d'un signe contraire au fuseau ; `east` : la longitude saisie est à l'est. */
  longitudeWarning: (east: boolean, zone: string, suggestion: string) => string;
  timeZone: string;
  timeZoneHelp: string;
  advanced: string;
  houseSystem: string;
  houseSystemHelp: string;
  utcOffset: string;
  utcOffsetHelp: string;
  privacy: string;
  submit: string;
  clear: string;
  computing: string;
  loadFailed: string;
  computeFailed: string;
  retry: string;
  summaryTitle: string;
  /** Un message par champ et par code : le type suit `BirthInputError`, un code ajouté oblige à l'écrire. */
  errors: { readonly [F in FixedBirthError["field"]]: Readonly<Record<CodesOf<F>, string>> };
  /** Heure sautée ; `jump` null quand les heures du saut ne se calculent pas. */
  nonexistent: (jump: ClockJump | null) => string;
  ambiguous: string;
  /** Un passage de l'heure répétée ; `seasonal` : de l'heure d'été à l'heure d'hiver. */
  choice: (later: boolean, utc: string, seasonal: boolean) => string;
  utc: (offset: string) => string;
  details: string;
  hideDetails: string;
  /** Fin du nom accessible du bouton « Détails », lue seulement. */
  detailsOf: (subject: string) => string;
  resultTitle: string;
  birth: (date: string, time: string | null, place: string) => string;
  cityIn: (city: string, country: string) => string;
  coordinates: (latitude: string, north: boolean, longitude: string, east: boolean) => string;
  editInput: string;
  notKept: string;
  /** Phrase de synthèse ; les signes y sont passés tels quels (liens, ou texte pour l'annonce). */
  bigThree: <T>(sun: T, moon: T, ascendant: T | null) => readonly (string | T)[];
  done: (summary: string) => string;
  uncertain: string;
  /** Après le nom du signe, dans la phrase de synthèse. */
  uncertainInline: string;
  /** Après la phrase de lecture d'un astre de signe incertain. */
  uncertainHint: (next: boolean) => string;
  list: (names: readonly string[]) => string;
  otherPlanets: string;
  wheelTitle: string;
  wheelLabel: (timeKnown: boolean) => string;
  positionsTitle: string;
  positionsSummary: (retrogrades: readonly string[]) => string;
  positionHeaders: readonly [string, string, string, string];
  house: (roman: string) => string;
  motion: Readonly<Record<"direct" | "retrograde" | "stationary", string>>;
  aspectsTitle: string;
  aspectsSummary: (major: number, minor: number) => string;
  majorAspects: string;
  minorAspects: (count: number) => string;
  noAspect: string;
  aspectHeaders: readonly [string, string, string, string];
  pair: (a: string, b: string) => string;
  applying: string;
  separating: string;
  /** Aspect à un angle, sans vitesse : ni appliquant ni séparant. */
  noPhase: string;
  noPhaseSpoken: string;
  balanceTitle: string;
  elements: string;
  modalities: string;
  dominantElements: (names: readonly string[]) => string;
  dominantModalities: (names: readonly string[]) => string;
  readingAspects: string;
  housesTitle: string;
  housesSummary: (system: string, ascendant: string, midheaven: string) => string;
  cusps: (system: string) => string;
  cuspHeaders: readonly [string, string];
  notesTitle: string;
  noteTimeUnknown: string;
  noteUncertain: (names: readonly string[]) => string;
  noteZone: (zone: string) => string;
  noteFallback: (polar: boolean) => string;
  noteInstant: (date: string, time: string, offset: string, typed: boolean) => string;
}

export const NATAL_STRINGS: NatalStrings = {
  title: "Calculer votre thème",
  requiredNote: "Tous les champs sont obligatoires, sauf les réglages avancés.",
  noScript: "Le calcul se fait dans votre navigateur : activez JavaScript.",
  birthLegend: "Date et heure",
  date: "Date de naissance",
  dateHelp: "Entre 1800 et 2100.",
  time: "Heure de naissance",
  timeHelp: "L'heure locale, celle de l'acte de naissance.",
  timeUnknown: "Je ne connais pas l'heure",
  timeUnknownHelp: "Le calcul se fait alors pour midi, sans Ascendant ni maisons.",
  placeLegend: "Lieu de naissance",
  city: "Ville",
  cityChoose: "Choisissez une ville",
  cityOther: "Autre lieu",
  cityHelp:
    "Votre ville n'y est pas ? Choisissez la grande ville la plus proche dans le même pays : l'heure légale est la même, seuls l'Ascendant et les maisons bougent de quelques degrés. Pour plus de précision, choisissez « Autre lieu ».",
  latitude: "Latitude",
  longitude: "Longitude",
  coordinatesHelp:
    "En degrés décimaux, virgule ou point : 48,85 pour 48° 51′ N ; nord et est positifs, sud et ouest négatifs. Un clic droit ou un appui long sur une carte en ligne affiche les coordonnées ; collé dans Latitude, un couple (48.1173, -1.6778) remplit les deux champs.",
  longitudeWarning: (e, zone, s) =>
    `Cette longitude est à l'${e ? "est" : "ouest"} de Greenwich, mais le fuseau ${zone} est à l'${e ? "ouest" : "est"} : pour l'${e ? "ouest" : "est"}, écrivez-la en ${e ? "négatif" : "positif"} (${s}).`,
  timeZone: "Fuseau horaire (par exemple Europe/Paris)",
  timeZoneHelp: "Pré-rempli avec le fuseau de cet appareil : changez-le si la naissance a eu lieu ailleurs.",
  advanced: "Réglages avancés : système de maisons, décalage horaire",
  houseSystem: "Système de maisons",
  houseSystemHelp: "Placidus, le plus répandu, devient Porphyre au-delà de 66° de latitude.",
  utcOffset: "Décalage horaire à la naissance (par rapport à UTC)",
  utcOffsetHelp: "Pour une heure ancienne mal connue du fuseau (par exemple +01:00) ; il remplace alors le fuseau.",
  privacy: "Vos données restent dans ce navigateur : rien n'est envoyé ni enregistré.",
  submit: "Calculer le thème",
  clear: "Effacer le formulaire",
  computing: "Calcul du thème…",
  loadFailed: "Le calcul n'a pas pu se charger. Vérifiez votre connexion, puis réessayez.",
  computeFailed: "Le thème n'a pas pu être calculé : vérifiez la saisie.",
  retry: "Réessayer",
  summaryTitle: "Le thème ne peut pas encore être calculé",
  errors: {
    date: {
      required: "Indiquez la date de naissance (jour, mois et année).",
      invalid: "Date non valide : écrivez-la sous la forme 1990-07-14.",
      "out-of-range": "Le calcul couvre les années 1800 à 2100.",
      nonexistent: "Ce jour n'a pas existé en ce lieu (le fuseau l'a sauté) : vérifiez la date.",
    },
    time: {
      required: "Indiquez l'heure, ou cochez « Je ne connais pas l'heure ».",
      invalid: "Heure non valide : écrivez-la sous la forme 14:30.",
    },
    city: {
      required: "Choisissez une ville, ou « Autre lieu ».",
      unknown: "Ville inconnue : choisissez-en une dans la liste.",
    },
    latitude: {
      required: "Indiquez la latitude.",
      invalid: "Latitude non valide : écrivez un nombre, par exemple 48,85.",
      "out-of-range": "La latitude va de −89,9 à 89,9.",
    },
    longitude: {
      required: "Indiquez la longitude.",
      invalid: "Longitude non valide : écrivez un nombre, par exemple 2,35.",
      "out-of-range": "La longitude va de −180 à 180.",
    },
    timeZone: {
      required: "Indiquez le fuseau horaire, ou un décalage dans les réglages avancés.",
      unknown: "Fuseau inconnu : choisissez-en un dans la liste.",
    },
    utcOffset: {
      invalid: "Décalage non valide : écrivez-le sous la forme +01:00 ou −03:30.",
      "out-of-range": "Un décalage ne dépasse pas 14 heures.",
    },
    houseSystem: { unknown: "Choisissez un système de maisons." },
  },
  nonexistent: (j) =>
    j
      ? `À cette date, les horloges sont passées de ${j.from} à ${j.to} : ${j.time} n'a pas existé. L'acte suit peut-être l'heure d'hiver : essayez ${j.shifted}, ou indiquez le décalage dans les réglages avancés.`
      : "À cette date, les horloges ont avancé : cette heure n'a pas existé. Indiquez le décalage dans les réglages avancés.",
  ambiguous: "Ce jour-là, les horloges ont reculé : cette heure a eu lieu deux fois. Laquelle retenir ?",
  choice: (l, utc, s) => `${l ? "Seconde" : "Première"} fois (${s ? (l ? "heure d'hiver, " : "heure d'été, ") : ""}${utc})`,
  utc: (offset) => `UTC${offset}`,
  details: "Détails",
  hideDetails: "Masquer les détails",
  detailsOf: (subject) => ` : ${subject}`,
  resultTitle: "Votre thème natal",
  birth: (d, t, p) => `${d}${t ? ` à ${t}` : ", heure inconnue"}, ${p}`,
  cityIn: (c, k) => (c === k ? c : `${c} (${k})`),
  coordinates: (lat, n, lon, e) => `${lat}° ${n ? "N" : "S"}, ${lon}° ${e ? "E" : "O"}`,
  editInput: "Modifier la saisie",
  notKept: "Ce thème n'est gardé nulle part : un rechargement de la page l'efface.",
  bigThree: (s, m, a) =>
    a === null
      ? ["Soleil en ", s, ", Lune en ", m, ". Sans l'heure de naissance, l'Ascendant reste inconnu."]
      : ["Soleil en ", s, ", Lune en ", m, ", Ascendant ", a, "."],
  done: (summary) => `Thème calculé. ${summary}`,
  uncertain: "signe incertain",
  uncertainInline: " (signe incertain)",
  uncertainHint: (next) => ` Signe incertain : peut-être le signe ${next ? "suivant" : "précédent"}.`,
  list: (names) => LIST.format(names),
  otherPlanets: "Les autres astres",
  wheelTitle: "Roue du thème",
  wheelLabel: (known) => `Roue du thème : les astres${known ? ", les maisons" : ""} et les aspects majeurs`,
  positionsTitle: "Positions des astres",
  positionsSummary: (n) => (n.length > 0 ? `Rétrogrades : ${LIST.format(n)}.` : "Aucune planète rétrograde."),
  positionHeaders: ["Astre", "Position", "Maison", "Mouvement"],
  house: (roman) => `Maison ${roman}`,
  motion: { direct: "direct", retrograde: "rétrograde", stationary: "stationnaire" },
  aspectsTitle: "Aspects",
  aspectsSummary: (major, minor) => `Aspects majeurs : ${major} ; aspects mineurs : ${minor}.`,
  majorAspects: "Aspects majeurs",
  minorAspects: (count) => `Aspects mineurs (${count})`,
  noAspect: "Aucun aspect majeur dans ce thème.",
  aspectHeaders: ["Aspect", "Astres", "Orbe", "Évolution"],
  pair: (a, b) => `${a} et ${b}`,
  applying: "appliquant",
  separating: "séparant",
  noPhase: "—",
  noPhaseSpoken: "sans objet",
  balanceTitle: "Répartition des dix astres",
  elements: "Par élément",
  modalities: "Par modalité",
  dominantElements: (n) => `Élément${n.length > 1 ? "s dominants" : " dominant"} : ${LIST.format(n)}.`,
  dominantModalities: (n) => `Modalité${n.length > 1 ? "s dominantes" : " dominante"} : ${LIST.format(n)}.`,
  readingAspects: "Les aspects les plus serrés",
  housesTitle: "Maisons",
  housesSummary: (system, ascendant, midheaven) =>
    `En ${system} : Ascendant à ${ascendant}, Milieu du Ciel à ${midheaven}.`,
  cusps: (system) => `Cuspides des douze maisons (${system})`,
  cuspHeaders: ["Maison", "Cuspide"],
  notesTitle: "Notes sur le calcul",
  noteTimeUnknown: "Heure inconnue : calcul pour midi, sans Ascendant ni maisons.",
  noteUncertain: (names) => `Signe incertain, l'astre changeant de signe ce jour-là : ${LIST.format(names)}.`,
  noteZone: (zone) =>
    `Avant 1970, l'heure légale de ce lieu a pu différer du fuseau ${zone} : vérifiez le décalage retenu (réglages avancés).`,
  noteFallback: (polar) =>
    `${polar ? "Au-delà de 66° de latitude, Placidus n'est pas défini" : "Placidus n'a pas convergé"} : les maisons sont en Porphyre.`,
  noteInstant: (d, t, o, typed) => `Calcul pour le ${d} à ${t} UTC (décalage ${o}${typed ? ", saisi" : ""}).`,
};
