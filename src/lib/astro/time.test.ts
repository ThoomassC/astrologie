// @vitest-environment node
import { describe, expect, it } from "vitest";
import { isTimeZone, localToUtc } from "./time";

describe("localToUtc — Europe/Paris", () => {
  it("devrait déclarer inexistante 02:30 le 31 mars 2024 (passage à l'heure d'été), décalages d'avant et d'après", () => {
    expect(localToUtc({ year: 2024, month: 3, day: 31, hour: 2, minute: 30 }, "Europe/Paris")).toEqual({
      kind: "nonexistent",
      offsetBeforeSeconds: 3600,
      offsetAfterSeconds: 7200,
    });
  });

  it("devrait déclarer ambiguë 02:30 le 27 octobre 2024 (retour à l'heure d'hiver), avec ses deux instants", () => {
    expect(localToUtc({ year: 2024, month: 10, day: 27, hour: 2, minute: 30 }, "Europe/Paris")).toEqual({
      kind: "ambiguous",
      earlier: { utcMs: Date.UTC(2024, 9, 27, 0, 30), offsetSeconds: 7200 },
      later: { utcMs: Date.UTC(2024, 9, 27, 1, 30), offsetSeconds: 3600 },
    });
  });

  it("devrait appliquer le temps moyen de Paris (+00:09:21) le 1er juin 1900", () => {
    expect(localToUtc({ year: 1900, month: 6, day: 1, hour: 12, minute: 0 }, "Europe/Paris")).toEqual({
      kind: "unique",
      utcMs: Date.UTC(1900, 5, 1, 11, 50, 39),
      offsetSeconds: 561,
    });
  });

  it("devrait appliquer l'heure de l'Occupation (+2 h) le 1er juillet 1942", () => {
    expect(localToUtc({ year: 1942, month: 7, day: 1, hour: 12, minute: 0 }, "Europe/Paris")).toEqual({
      kind: "unique",
      utcMs: Date.UTC(1942, 6, 1, 10, 0),
      offsetSeconds: 7200,
    });
  });

  it("devrait donner un instant unique en hiver (+1 h) le 15 janvier 2024", () => {
    expect(localToUtc({ year: 2024, month: 1, day: 15, hour: 12, minute: 0 }, "Europe/Paris")).toEqual({
      kind: "unique",
      utcMs: Date.UTC(2024, 0, 15, 11, 0),
      offsetSeconds: 3600,
    });
  });

  it("devrait calculer la première minute de la plage acceptée, le 1er janvier 1800", () => {
    expect(localToUtc({ year: 1800, month: 1, day: 1, hour: 0, minute: 0 }, "Europe/Paris")).toEqual({
      kind: "unique",
      utcMs: Date.UTC(1799, 11, 31, 23, 50, 39),
      offsetSeconds: 561,
    });
  });
});

describe("localToUtc — hors de France", () => {
  it("devrait appliquer l'heure avancée de l'Est (−4 h) à Montréal le 1er mai 1960", () => {
    expect(localToUtc({ year: 1960, month: 5, day: 1, hour: 12, minute: 0 }, "America/Montreal")).toEqual({
      kind: "unique",
      utcMs: Date.UTC(1960, 4, 1, 16, 0),
      offsetSeconds: -14400,
    });
  });
});

describe("isTimeZone", () => {
  it.each([
    ["Europe/Paris", true],
    ["America/Montreal", true],
    ["UTC", true],
    ["Europe/Nulle", false],
    ["", false],
  ])("devrait répondre pour « %s » : %s", (zone, expected) => {
    expect(isTimeZone(zone)).toBe(expected);
  });
});
