// @vitest-environment node
import { describe, expect, it } from "vitest";
import { HOUSE_NUMBERS } from "@/lib/astro/keys";
import {
  ANGLE_ABBREVIATIONS,
  ASPECT_NAMES,
  CONSTELLATION_NAMES,
  ELEMENT_NAMES,
  HOUSE_SYSTEM_NAMES,
  houseRoman,
  MODALITY_NAMES,
  MONTH_NAMES,
  PLANET_GROUP_NAMES,
  POINT_NAMES,
  SIGN_NAMES,
} from "./names";

/* Invariant des noms affichés : aucun nom vide, aucune espace en trop. Il passe dès aujourd'hui. */

/** Chaque chaîne d'une table, avec son chemin (« SIGN_NAMES.aries.of »), pour que l'échec dise laquelle. */
function entries(table: string, record: Readonly<Record<string, unknown>>): [string, unknown][] {
  return Object.entries(record).flatMap(([key, value]) =>
    typeof value === "object" && value !== null
      ? Object.entries(value).map(([field, text]): [string, unknown] => [`${table}.${key}.${field}`, text])
      : [[`${table}.${key}`, value]],
  );
}

const NAMES = [
  ...entries("SIGN_NAMES", SIGN_NAMES),
  ...entries("POINT_NAMES", POINT_NAMES),
  ...entries("ANGLE_ABBREVIATIONS", ANGLE_ABBREVIATIONS),
  ...entries("ELEMENT_NAMES", ELEMENT_NAMES),
  ...entries("MODALITY_NAMES", MODALITY_NAMES),
  ...entries("PLANET_GROUP_NAMES", PLANET_GROUP_NAMES),
  ...entries("ASPECT_NAMES", ASPECT_NAMES),
  ...entries("HOUSE_SYSTEM_NAMES", HOUSE_SYSTEM_NAMES),
  ...entries("CONSTELLATION_NAMES", CONSTELLATION_NAMES),
  ...entries("MONTH_NAMES", Object.fromEntries(MONTH_NAMES.map((name, index) => [index + 1, name]))),
];

describe("noms affichés", () => {
  it("devrait parcourir toutes les tables (garde contre le test vide)", () => {
    expect(NAMES.length).toBeGreaterThan(100);
  });

  it.each(NAMES)("devrait donner un texte non vide et sans espace en bord : %s", (_path, text) => {
    expect(typeof text === "string" && text.length > 0 && text === text.trim()).toBe(true);
  });
});

describe("houseRoman", () => {
  it.each([
    [1, "I"],
    [4, "IV"],
    [9, "IX"],
    [12, "XII"],
  ] as const)("devrait écrire la maison %i « %s »", (house, roman) => {
    expect(houseRoman(house)).toBe(roman);
  });

  it("devrait donner douze chiffres romains différents", () => {
    expect(new Set(HOUSE_NUMBERS.map(houseRoman)).size).toBe(12);
  });
});
