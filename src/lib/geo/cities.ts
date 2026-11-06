/**
 * Villes proposées par le formulaire du thème natal : une quarantaine de villes francophones. Aucun nom affiché ici
 * (les noms vivent dans une table de chaînes client) ; le commentaire de chaque entrée donne le nom français.
 * Zones et liens vérifiés sur tzdb 2026f (fichiers `backward` et `tzdata.zi`).
 */
export const CITY_KEYS = [
  // France métropolitaine
  "paris",
  "lyon",
  "marseille",
  "toulouse",
  "nice",
  "nantes",
  "strasbourg",
  "bordeaux",
  "lille",
  "ajaccio",
  // Outre-mer
  "fort-de-france",
  "pointe-a-pitre",
  "cayenne",
  "saint-denis-reunion",
  "mamoudzou",
  "noumea",
  "papeete",
  "saint-pierre-miquelon",
  // Belgique, Suisse, Luxembourg, Monaco
  "bruxelles",
  "liege",
  "geneve",
  "lausanne",
  "luxembourg",
  "monaco",
  // Canada
  "montreal",
  "quebec",
  "moncton",
  // Maghreb
  "alger",
  "oran",
  "tunis",
  "casablanca",
  "rabat",
  // Afrique de l'Ouest
  "dakar",
  "abidjan",
  "bamako",
  "ouagadougou",
  "lome",
  // Afrique centrale
  "kinshasa",
  "brazzaville",
  "douala",
  "libreville",
  // Océan Indien, Caraïbes, Proche-Orient
  "antananarivo",
  "port-au-prince",
  "beyrouth",
] as const;
/** Clé d'une ville du formulaire, en kebab-case ASCII. */
export type CityKey = (typeof CITY_KEYS)[number];

/** Une ville du formulaire : coordonnées, zone IANA et fiabilité de l'histoire de cette zone. */
export interface CityData {
  key: CityKey;
  /** Code pays ISO 3166-1 alpha-2. */
  country: string;
  /** Degrés, nord positif. */
  latitude: number;
  /** Degrés, est positif. */
  longitude: number;
  /** Zone IANA. */
  zone: string;
  /**
   * « own » : la zone retrace l'heure légale de la ville (zone propre, ou zone d'un pays à heure unique : Lyon suit
   * Europe/Paris, temps moyen de Paris compris avant 1891).
   * « linked » : la zone est un lien IANA vers la zone d'une autre ville (America/Montreal → America/Toronto) ; avant
   * 1970, la base ne garantit que l'histoire de l'autre ville.
   */
  zoneHistory: "own" | "linked";
}

/** Vrai si la valeur est une clé de ville connue. */
export function isCityKey(value: unknown): value is CityKey {
  return typeof value === "string" && CITY_KEYS.some((key) => key === value);
}

/** Les villes du formulaire, par clé ; le commentaire de chaque entrée donne le nom français. */
export const CITIES: Readonly<Record<CityKey, CityData>> = {
  // Paris
  paris: { key: "paris", country: "FR", latitude: 48.8566, longitude: 2.3522, zone: "Europe/Paris", zoneHistory: "own" },
  // Lyon
  lyon: { key: "lyon", country: "FR", latitude: 45.764, longitude: 4.8357, zone: "Europe/Paris", zoneHistory: "own" },
  // Marseille
  marseille: {
    key: "marseille",
    country: "FR",
    latitude: 43.2965,
    longitude: 5.3698,
    zone: "Europe/Paris",
    zoneHistory: "own",
  },
  // Toulouse
  toulouse: {
    key: "toulouse",
    country: "FR",
    latitude: 43.6047,
    longitude: 1.4442,
    zone: "Europe/Paris",
    zoneHistory: "own",
  },
  // Nice
  nice: { key: "nice", country: "FR", latitude: 43.7102, longitude: 7.262, zone: "Europe/Paris", zoneHistory: "own" },
  // Nantes
  nantes: { key: "nantes", country: "FR", latitude: 47.2184, longitude: -1.5536, zone: "Europe/Paris", zoneHistory: "own" },
  // Strasbourg
  strasbourg: {
    key: "strasbourg",
    country: "FR",
    latitude: 48.5734,
    longitude: 7.7521,
    zone: "Europe/Paris",
    zoneHistory: "own",
  },
  // Bordeaux
  bordeaux: {
    key: "bordeaux",
    country: "FR",
    latitude: 44.8378,
    longitude: -0.5792,
    zone: "Europe/Paris",
    zoneHistory: "own",
  },
  // Lille
  lille: { key: "lille", country: "FR", latitude: 50.6292, longitude: 3.0573, zone: "Europe/Paris", zoneHistory: "own" },
  // Ajaccio
  ajaccio: { key: "ajaccio", country: "FR", latitude: 41.9192, longitude: 8.7386, zone: "Europe/Paris", zoneHistory: "own" },
  // Fort-de-France (Martinique)
  "fort-de-france": {
    key: "fort-de-france",
    country: "MQ",
    latitude: 14.6037,
    longitude: -61.0742,
    zone: "America/Martinique",
    zoneHistory: "own",
  },
  // Pointe-à-Pitre (Guadeloupe) — America/Guadeloupe est un lien vers America/Puerto_Rico.
  "pointe-a-pitre": {
    key: "pointe-a-pitre",
    country: "GP",
    latitude: 16.2412,
    longitude: -61.5361,
    zone: "America/Guadeloupe",
    zoneHistory: "linked",
  },
  // Cayenne (Guyane)
  cayenne: {
    key: "cayenne",
    country: "GF",
    latitude: 4.9333,
    longitude: -52.3333,
    zone: "America/Cayenne",
    zoneHistory: "own",
  },
  // Saint-Denis (La Réunion) — Indian/Reunion est un lien vers Asia/Dubai.
  "saint-denis-reunion": {
    key: "saint-denis-reunion",
    country: "RE",
    latitude: -20.8823,
    longitude: 55.4504,
    zone: "Indian/Reunion",
    zoneHistory: "linked",
  },
  // Mamoudzou (Mayotte) — Indian/Mayotte est un lien vers Africa/Nairobi.
  mamoudzou: {
    key: "mamoudzou",
    country: "YT",
    latitude: -12.7794,
    longitude: 45.2272,
    zone: "Indian/Mayotte",
    zoneHistory: "linked",
  },
  // Nouméa (Nouvelle-Calédonie)
  noumea: {
    key: "noumea",
    country: "NC",
    latitude: -22.2763,
    longitude: 166.4572,
    zone: "Pacific/Noumea",
    zoneHistory: "own",
  },
  // Papeete (Polynésie française)
  papeete: {
    key: "papeete",
    country: "PF",
    latitude: -17.5373,
    longitude: -149.5665,
    zone: "Pacific/Tahiti",
    zoneHistory: "own",
  },
  // Saint-Pierre (Saint-Pierre-et-Miquelon)
  "saint-pierre-miquelon": {
    key: "saint-pierre-miquelon",
    country: "PM",
    latitude: 46.7791,
    longitude: -56.1773,
    zone: "America/Miquelon",
    zoneHistory: "own",
  },
  // Bruxelles
  bruxelles: {
    key: "bruxelles",
    country: "BE",
    latitude: 50.8503,
    longitude: 4.3517,
    zone: "Europe/Brussels",
    zoneHistory: "own",
  },
  // Liège
  liege: { key: "liege", country: "BE", latitude: 50.6326, longitude: 5.5797, zone: "Europe/Brussels", zoneHistory: "own" },
  // Genève
  geneve: { key: "geneve", country: "CH", latitude: 46.2044, longitude: 6.1432, zone: "Europe/Zurich", zoneHistory: "own" },
  // Lausanne
  lausanne: {
    key: "lausanne",
    country: "CH",
    latitude: 46.5197,
    longitude: 6.6323,
    zone: "Europe/Zurich",
    zoneHistory: "own",
  },
  // Luxembourg — Europe/Luxembourg est un lien vers Europe/Brussels.
  luxembourg: {
    key: "luxembourg",
    country: "LU",
    latitude: 49.6116,
    longitude: 6.1319,
    zone: "Europe/Luxembourg",
    zoneHistory: "linked",
  },
  // Monaco — Europe/Monaco est un lien vers Europe/Paris.
  monaco: {
    key: "monaco",
    country: "MC",
    latitude: 43.7384,
    longitude: 7.4246,
    zone: "Europe/Monaco",
    zoneHistory: "linked",
  },
  // Montréal — America/Montreal est un lien vers America/Toronto.
  montreal: {
    key: "montreal",
    country: "CA",
    latitude: 45.5017,
    longitude: -73.5673,
    zone: "America/Montreal",
    zoneHistory: "linked",
  },
  // Québec — le Québec n'a pas de zone propre : America/Montreal, lien vers America/Toronto.
  quebec: {
    key: "quebec",
    country: "CA",
    latitude: 46.8139,
    longitude: -71.208,
    zone: "America/Montreal",
    zoneHistory: "linked",
  },
  // Moncton (Nouveau-Brunswick)
  moncton: {
    key: "moncton",
    country: "CA",
    latitude: 46.0878,
    longitude: -64.7782,
    zone: "America/Moncton",
    zoneHistory: "own",
  },
  // Alger
  alger: { key: "alger", country: "DZ", latitude: 36.7538, longitude: 3.0588, zone: "Africa/Algiers", zoneHistory: "own" },
  // Oran
  oran: { key: "oran", country: "DZ", latitude: 35.6971, longitude: -0.6308, zone: "Africa/Algiers", zoneHistory: "own" },
  // Tunis
  tunis: { key: "tunis", country: "TN", latitude: 36.8065, longitude: 10.1815, zone: "Africa/Tunis", zoneHistory: "own" },
  // Casablanca
  casablanca: {
    key: "casablanca",
    country: "MA",
    latitude: 33.5731,
    longitude: -7.5898,
    zone: "Africa/Casablanca",
    zoneHistory: "own",
  },
  // Rabat
  rabat: {
    key: "rabat",
    country: "MA",
    latitude: 34.0209,
    longitude: -6.8416,
    zone: "Africa/Casablanca",
    zoneHistory: "own",
  },
  // Dakar — Africa/Dakar est un lien vers Africa/Abidjan.
  dakar: {
    key: "dakar",
    country: "SN",
    latitude: 14.6937,
    longitude: -17.4441,
    zone: "Africa/Dakar",
    zoneHistory: "linked",
  },
  // Abidjan
  abidjan: { key: "abidjan", country: "CI", latitude: 5.36, longitude: -4.0083, zone: "Africa/Abidjan", zoneHistory: "own" },
  // Bamako — Africa/Bamako est un lien vers Africa/Abidjan.
  bamako: {
    key: "bamako",
    country: "ML",
    latitude: 12.6392,
    longitude: -8.0029,
    zone: "Africa/Bamako",
    zoneHistory: "linked",
  },
  // Ouagadougou — Africa/Ouagadougou est un lien vers Africa/Abidjan.
  ouagadougou: {
    key: "ouagadougou",
    country: "BF",
    latitude: 12.3714,
    longitude: -1.5197,
    zone: "Africa/Ouagadougou",
    zoneHistory: "linked",
  },
  // Lomé — Africa/Lome est un lien vers Africa/Abidjan.
  lome: { key: "lome", country: "TG", latitude: 6.1375, longitude: 1.2123, zone: "Africa/Lome", zoneHistory: "linked" },
  // Kinshasa — Africa/Kinshasa est un lien vers Africa/Lagos.
  kinshasa: {
    key: "kinshasa",
    country: "CD",
    latitude: -4.3276,
    longitude: 15.3136,
    zone: "Africa/Kinshasa",
    zoneHistory: "linked",
  },
  // Brazzaville — Africa/Brazzaville est un lien vers Africa/Lagos.
  brazzaville: {
    key: "brazzaville",
    country: "CG",
    latitude: -4.2661,
    longitude: 15.2832,
    zone: "Africa/Brazzaville",
    zoneHistory: "linked",
  },
  // Douala — Africa/Douala est un lien vers Africa/Lagos.
  douala: {
    key: "douala",
    country: "CM",
    latitude: 4.0483,
    longitude: 9.7043,
    zone: "Africa/Douala",
    zoneHistory: "linked",
  },
  // Libreville — Africa/Libreville est un lien vers Africa/Lagos.
  libreville: {
    key: "libreville",
    country: "GA",
    latitude: 0.3924,
    longitude: 9.4536,
    zone: "Africa/Libreville",
    zoneHistory: "linked",
  },
  // Antananarivo — Indian/Antananarivo est un lien vers Africa/Nairobi.
  antananarivo: {
    key: "antananarivo",
    country: "MG",
    latitude: -18.9137,
    longitude: 47.5361,
    zone: "Indian/Antananarivo",
    zoneHistory: "linked",
  },
  // Port-au-Prince
  "port-au-prince": {
    key: "port-au-prince",
    country: "HT",
    latitude: 18.5435,
    longitude: -72.3388,
    zone: "America/Port-au-Prince",
    zoneHistory: "own",
  },
  // Beyrouth
  beyrouth: {
    key: "beyrouth",
    country: "LB",
    latitude: 33.8933,
    longitude: 35.5016,
    zone: "Asia/Beirut",
    zoneHistory: "own",
  },
};
