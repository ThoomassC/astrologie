// @vitest-environment node
import { describe, expect, it } from "vitest";
import { isTimeZone } from "@/lib/astro/time";
import { CITIES, CITY_KEYS, isCityKey } from "./cities";

const ALL = CITY_KEYS.map((key) => CITIES[key]);

describe("CITIES — données", () => {
  it("devrait proposer une quarantaine de villes, sans doublon", () => {
    expect(new Set(CITY_KEYS).size).toBe(CITY_KEYS.length);
    expect(CITY_KEYS.length).toBeGreaterThanOrEqual(35);
  });

  it("devrait ranger chaque ville sous sa propre clé", () => {
    expect(CITY_KEYS.filter((key) => CITIES[key].key !== key)).toEqual([]);
  });

  it("devrait écrire les clés en kebab-case ASCII (« saint-denis-reunion »)", () => {
    expect(CITY_KEYS.filter((key) => !/^[a-z]+(?:-[a-z]+)*$/.test(key))).toEqual([]);
  });

  it("devrait donner des coordonnées dans les bornes du formulaire (|φ| ≤ 89,9, |λ| ≤ 180)", () => {
    expect(ALL.filter((city) => !(Math.abs(city.latitude) <= 89.9 && Math.abs(city.longitude) <= 180))).toEqual([]);
  });

  it("devrait donner un code pays ISO 3166-1 alpha-2", () => {
    expect(ALL.filter((city) => !/^[A-Z]{2}$/.test(city.country))).toEqual([]);
  });

  it("devrait ne citer que des zones que connaît Intl", () => {
    expect(ALL.filter((city) => !isTimeZone(city.zone)).map(({ key, zone }) => ({ key, zone }))).toEqual([]);
  });

  // Liens du fichier `backward` de tzdb 2026f : avant 1970, la base n'y garantit que l'histoire de la zone cible.
  it.each([
    ["montreal", "America/Montreal"],
    ["luxembourg", "Europe/Luxembourg"],
    ["monaco", "Europe/Monaco"],
    ["dakar", "Africa/Dakar"],
    ["saint-denis-reunion", "Indian/Reunion"],
    ["pointe-a-pitre", "America/Guadeloupe"],
  ] as const)("devrait déclarer « linked » %s, dont la zone %s n'est qu'un lien IANA", (key, zone) => {
    expect(CITIES[key]).toMatchObject({ zone, zoneHistory: "linked" });
  });

  it.each([
    ["paris", "Europe/Paris"],
    ["bruxelles", "Europe/Brussels"],
    ["geneve", "Europe/Zurich"],
    ["fort-de-france", "America/Martinique"],
    ["beyrouth", "Asia/Beirut"],
  ] as const)("devrait déclarer « own » %s, de zone propre %s", (key, zone) => {
    expect(CITIES[key]).toMatchObject({ zone, zoneHistory: "own" });
  });
});

describe("isCityKey", () => {
  it.each([
    ["paris", true],
    ["saint-denis-reunion", true],
    ["atlantide", false],
    ["", false],
    ["Paris", false],
    ["constructor", false],
    [42, false],
    [null, false],
  ])("devrait répondre pour %j : %s", (value, expected) => {
    expect(isCityKey(value)).toBe(expected);
  });
});
