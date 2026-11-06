import { INTL_LOCALE, type Locale } from "@/i18n/locales";
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

/** « Feu et Terre », « Fire and Earth ». */
const list = (locale: Locale, names: readonly string[]) =>
  new Intl.ListFormat(INTL_LOCALE[locale], { style: "long", type: "conjunction" }).format(names);

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
  /** Éléments puis modalités dominants. */
  dominants: (elements: readonly string[], modalities: readonly string[]) => string;
  readingAspects: string;
  housesTitle: string;
  housesSummary: (system: string, ascendant: string, midheaven: string) => string;
  cusps: (system: string) => string;
  cuspHeaders: readonly [string, string];
  privacyTitle: string;
  calculationTitle: string;
  noteTimeUnknown: string;
  noteUncertain: (names: readonly string[]) => string;
  noteZone: (zone: string) => string;
  noteFallback: (polar: boolean) => string;
  noteInstant: (date: string, time: string, offset: string, typed: boolean) => string;
}

export const NATAL_STRINGS: Readonly<Record<Locale, NatalStrings>> = {
  fr: {
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
        invalid: "Date incomplète ou non valide : jour, mois et année, par exemple 14/07/1990.",
        "out-of-range": "Le calcul couvre les années 1800 à 2100.",
        nonexistent: "Ce jour n'a pas existé en ce lieu (le fuseau l'a sauté) : vérifiez la date.",
      },
      time: {
        required: "Indiquez l'heure, ou cochez « Je ne connais pas l'heure ».",
        invalid: "Heure incomplète ou non valide : heures et minutes, par exemple 14:30.",
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
    list: (names) => list("fr", names),
    otherPlanets: "Les autres astres",
    wheelTitle: "Roue du thème",
    wheelLabel: (known) => `Roue du thème : les astres${known ? ", les maisons" : ""} et les aspects majeurs`,
    positionsTitle: "Positions des astres",
    positionsSummary: (n) => (n.length > 0 ? `Rétrogrades : ${list("fr", n)}.` : "Aucune planète rétrograde."),
    positionHeaders: ["Astre", "Position", "Maison", "Mouvement"],
    house: (roman) => `Maison ${roman}`,
    motion: { direct: "direct", retrograde: "rétrograde", stationary: "stationnaire" },
    aspectsTitle: "Aspects",
    aspectsSummary: (major, minor) => `${major} majeurs, ${minor} mineurs.`,
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
    dominants: (e, m) => `Dominantes : ${list("fr", e)} ; ${list("fr", m)}.`,
    readingAspects: "Les aspects les plus serrés",
    housesTitle: "Maisons",
    housesSummary: (system, asc, mc) => `${system} : Ascendant ${asc}, Milieu du Ciel ${mc}.`,
    cusps: (system) => `Cuspides des douze maisons (${system})`,
    cuspHeaders: ["Maison", "Cuspide"],
    privacyTitle: "Confidentialité",
    calculationTitle: "le calcul",
    noteTimeUnknown: "Heure inconnue : calcul pour midi, sans Ascendant ni maisons.",
    noteUncertain: (n) => `Signe incertain (l'astre change de signe ce jour-là) : ${list("fr", n)}.`,
    noteZone: (zone) =>
      `Avant 1970, l'heure légale de ce lieu a pu différer du fuseau ${zone} : vérifiez le décalage retenu (réglages avancés).`,
    noteFallback: (polar) =>
      `${polar ? "Au-delà de 66° de latitude, Placidus n'est pas défini" : "Placidus n'a pas convergé"} : les maisons sont en Porphyre.`,
    noteInstant: (d, t, o, typed) => `Calcul pour le ${d} à ${t} UTC (décalage ${o}${typed ? ", saisi" : ""}).`,
  },
  en: {
    title: "Calculate your chart",
    requiredNote: "All fields are required, except the advanced settings.",
    noScript: "The calculation runs in your browser: please enable JavaScript.",
    birthLegend: "Date and time",
    date: "Date of birth",
    dateHelp: "Between 1800 and 2100.",
    time: "Time of birth",
    timeHelp: "The local time, as on the birth certificate.",
    timeUnknown: "I don't know the time",
    timeUnknownHelp: "The chart is then calculated for noon, without an Ascendant or houses.",
    placeLegend: "Place of birth",
    city: "City",
    cityChoose: "Choose a city",
    cityOther: "Other place",
    cityHelp:
      "Your city isn't listed? Choose the nearest large city in the same country: the legal time is the same, only the Ascendant and the houses move by a few degrees. For more precision, choose “Other place”.",
    latitude: "Latitude",
    longitude: "Longitude",
    coordinatesHelp:
      "In decimal degrees, with a point or a comma: 48.85 for 48° 51′ N; north and east positive, south and west negative. A right-click or a long press on an online map shows the coordinates; pasted into Latitude, a pair (48.1173, -1.6778) fills in both fields.",
    longitudeWarning: (e, zone, s) =>
      `This longitude is ${e ? "east" : "west"} of Greenwich, but the ${zone} time zone is to the ${e ? "west" : "east"}: for the ${e ? "west" : "east"}, write it as a ${e ? "negative" : "positive"} number (${s}).`,
    timeZone: "Time zone (for example Europe/London)",
    timeZoneHelp: "Pre-filled with this device's time zone: change it if the birth took place elsewhere.",
    advanced: "Advanced settings: house system, UTC offset",
    houseSystem: "House system",
    houseSystemHelp: "Placidus, the most widely used, becomes Porphyry beyond 66° of latitude.",
    utcOffset: "UTC offset at birth",
    utcOffsetHelp: "For an old time that the time zone records poorly (for example +01:00); it then replaces the time zone.",
    privacy: "Your data stays in this browser: nothing is sent or stored.",
    submit: "Calculate the chart",
    clear: "Clear the form",
    computing: "Calculating the chart…",
    loadFailed: "The calculation could not load. Check your connection, then try again.",
    computeFailed: "The chart could not be calculated: check what you entered.",
    retry: "Try again",
    summaryTitle: "The chart cannot be calculated yet",
    errors: {
      date: {
        required: "Enter the date of birth (day, month and year).",
        invalid: "Incomplete or invalid date: day, month and year, for example 14/07/1990.",
        "out-of-range": "The calculation covers the years 1800 to 2100.",
        nonexistent: "This day did not exist in this place (the time zone skipped it): check the date.",
      },
      time: {
        required: "Enter the time, or tick “I don't know the time”.",
        invalid: "Incomplete or invalid time: hours, minutes and AM or PM, for example 02:30 PM.",
      },
      city: {
        required: "Choose a city, or “Other place”.",
        unknown: "Unknown city: choose one from the list.",
      },
      latitude: {
        required: "Enter the latitude.",
        invalid: "Invalid latitude: write a number, for example 48.85.",
        "out-of-range": "Latitude runs from −89.9 to 89.9.",
      },
      longitude: {
        required: "Enter the longitude.",
        invalid: "Invalid longitude: write a number, for example 2.35.",
        "out-of-range": "Longitude runs from −180 to 180.",
      },
      timeZone: {
        required: "Enter the time zone, or an offset in the advanced settings.",
        unknown: "Unknown time zone: choose one from the list.",
      },
      utcOffset: {
        invalid: "Invalid offset: write it as +01:00 or −03:30.",
        "out-of-range": "An offset cannot exceed 14 hours.",
      },
      houseSystem: { unknown: "Choose a house system." },
    },
    nonexistent: (j) =>
      j
       ? `On this date, the clocks went from ${j.from} to ${j.to}: ${j.time} did not exist. The certificate may follow winter time: try ${j.shifted}, or enter the offset in the advanced settings.`
       : "On this date, the clocks went forward: this time did not exist. Enter the offset in the advanced settings.",
    ambiguous: "That day, the clocks went back: this time happened twice. Which one should be used?",
    choice: (l, utc, s) => `${l ? "Second" : "First"} time (${s ? (l ? "winter time, " : "summer time, ") : ""}${utc})`,
    utc: (offset) => `UTC${offset}`,
    details: "Details",
    hideDetails: "Hide details",
    detailsOf: (subject) => `: ${subject}`,
    resultTitle: "Your birth chart",
    birth: (d, t, p) => `${d}${t ? ` at ${t}` : ", time unknown"}, ${p}`,
    cityIn: (c, k) => (c === k ? c : `${c} (${k})`),
    coordinates: (lat, n, lon, e) => `${lat}° ${n ? "N" : "S"}, ${lon}° ${e ? "E" : "W"}`,
    editInput: "Edit your details",
    notKept: "This chart is not kept anywhere: reloading the page erases it.",
    bigThree: (s, m, a) =>
      a === null
       ? ["Sun in ", s, ", Moon in ", m, ". Without the time of birth, the Ascendant remains unknown."]
       : ["Sun in ", s, ", Moon in ", m, ", Ascendant ", a, "."],
    done: (summary) => `Chart calculated. ${summary}`,
    uncertain: "uncertain sign",
    uncertainInline: " (uncertain sign)",
    uncertainHint: (next) => ` Uncertain sign: perhaps the ${next ? "next" : "previous"} sign.`,
    list: (names) => list("en", names),
    otherPlanets: "The other planets",
    wheelTitle: "Chart wheel",
    wheelLabel: (known) => `Chart wheel: the planets${known ? ", the houses" : ""} and the major aspects`,
    positionsTitle: "Planetary positions",
    positionsSummary: (n) => (n.length > 0 ? `Retrograde: ${list("en", n)}.` : "No retrograde planets."),
    positionHeaders: ["Planet", "Position", "House", "Motion"],
    house: (roman) => `House ${roman}`,
    motion: { direct: "direct", retrograde: "retrograde", stationary: "stationary" },
    aspectsTitle: "Aspects",
    aspectsSummary: (major, minor) => `${major} major, ${minor} minor.`,
    majorAspects: "Major aspects",
    minorAspects: (count) => `Minor aspects (${count})`,
    noAspect: "No major aspects in this chart.",
    aspectHeaders: ["Aspect", "Planets", "Orb", "Phase"],
    pair: (a, b) => `${a} and ${b}`,
    applying: "applying",
    separating: "separating",
    noPhase: "—",
    noPhaseSpoken: "not applicable",
    balanceTitle: "Distribution of the ten planets",
    elements: "By element",
    modalities: "By modality",
    dominants: (e, m) => `Dominants: ${list("en", e)}; ${list("en", m)}.`,
    readingAspects: "The tightest aspects",
    housesTitle: "Houses",
    housesSummary: (system, asc, mc) => `${system}: Ascendant ${asc}, Midheaven ${mc}.`,
    cusps: (system) => `Cusps of the twelve houses (${system})`,
    cuspHeaders: ["House", "Cusp"],
    privacyTitle: "Privacy",
    calculationTitle: "the calculation",
    noteTimeUnknown: "Time unknown: calculated for noon, without an Ascendant or houses.",
    noteUncertain: (n) => `Uncertain sign (the planet changes sign that day): ${list("en", n)}.`,
    noteZone: (zone) =>
      `Before 1970, the legal time in this place may have differed from the ${zone} time zone: check the offset used (advanced settings).`,
    noteFallback: (polar) =>
      `${polar ? "Beyond 66° of latitude, Placidus is not defined" : "Placidus did not converge"}: the houses are in Porphyry.`,
    noteInstant: (d, t, o, typed) => `Calculated for ${d} at ${t} UTC (offset ${o}${typed ? ", entered" : ""}).`,
  },
};
