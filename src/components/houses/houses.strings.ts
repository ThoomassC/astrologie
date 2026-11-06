import type { HouseSystemKey } from "@/lib/astro/keys";

/** Textes de la démonstration des systèmes de maisons (composant client). */
export interface HousesStrings {
  title: string;
  intro: string;
  wheelTitle: (system: string, latitude: string) => string;
  systemLegend: string;
  systems: Readonly<Record<HouseSystemKey, string>>;
  latitude: string;
  latitudeValue: (degrees: string, hemisphere: "N" | "S") => string;
  presetsLabel: string;
  presets: readonly { label: string; latitude: number }[];
  sky: string;
  skyHelp: string;
  skyValue: (ascendantSign: string, hours: number, minutes: number) => string;
  tableCaption: string;
  headers: readonly [string, string, string];
  house: (n: number) => string;
  size: (degrees: string) => string;
  fallback: (latitude: string) => string;
  summary: (system: string, ascendant: string, midheaven: string) => string;
}

export const HOUSES_STRINGS: HousesStrings = {
  title: "Comparer les systèmes de maisons",
  intro:
    "Choisissez un système, une latitude et un moment de la journée : la roue montre où tombent les douze cuspides. Les angles restent les mêmes, le découpage change.",
  wheelTitle: (system, latitude) => `Maisons en ${system} à ${latitude}`,
  systemLegend: "Système de maisons",
  systems: {
    placidus: "Placidus",
    equal: "Maisons égales",
    wholeSign: "Signes entiers",
    porphyry: "Porphyre",
  },
  latitude: "Latitude",
  latitudeValue: (degrees, hemisphere) => `${degrees}° ${hemisphere === "N" ? "nord" : "sud"}`,
  presetsLabel: "Lieux",
  presets: [
    { label: "Équateur", latitude: 0 },
    { label: "Dakar", latitude: 14.7 },
    { label: "Paris", latitude: 48.9 },
    { label: "Oslo", latitude: 59.9 },
    { label: "Tromsø", latitude: 69.6 },
  ],
  sky: "Moment de la journée (le ciel tourne)",
  skyHelp: "Faites tourner le ciel : l'Ascendant change de signe toutes les deux heures environ.",
  skyValue: (sign, hours, minutes) => `Ascendant en ${sign}, ${hours} h ${String(minutes).padStart(2, "0")} sidérales`,
  tableCaption: "Cuspides des douze maisons",
  headers: ["Maison", "Cuspide", "Taille"],
  house: (n) => `Maison ${n}`,
  size: (degrees) => `${degrees}°`,
  fallback: (latitude) =>
    `À ${latitude}, Placidus n'est plus défini : certains degrés du zodiaque ne se lèvent ni ne se couchent. La roue montre Porphyre à la place.`,
  summary: (system, ascendant, midheaven) => `${system} : Ascendant à ${ascendant}, Milieu du Ciel à ${midheaven}.`,
};
