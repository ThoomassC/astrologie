// @vitest-environment node
import { describe, expect, it } from "vitest";
import {
  clockJump,
  clockOffset,
  clockTime,
  coordinatePair,
  decimal,
  longDate,
  readDecimal,
  shortOffset,
  standardOffset,
  utcDateTime,
} from "./format";

describe("clockOffset et shortOffset", () => {
  it.each([
    [7200, "+02:00", "+2"],
    [3600, "+01:00", "+1"],
    [0, "+00:00", "+0"],
    [-12_600, "−03:30", "−3:30"],
    [19_800, "+05:30", "+5:30"],
    [561, "+00:09:21", "+0:09:21"],
  ])("devrait écrire %i s comme « %s » et « %s »", (seconds, clock, short) => {
    expect(clockOffset(seconds)).toBe(clock);
    expect(shortOffset(seconds)).toBe(short);
  });
});

describe("dates et heures", () => {
  it("devrait écrire l'heure sur deux chiffres et le premier du mois en ordinal", () => {
    expect(clockTime({ hour: 9, minute: 5 })).toBe("09:05");
    expect(longDate({ year: 2024, month: 7, day: 3 }, "fr")).toBe("3 juillet 2024");
    expect(longDate({ year: 2024, month: 7, day: 3 }, "en")).toBe("3 July 2024");
    expect(longDate({ year: 1990, month: 5, day: 1 }, "fr")).toBe("1er mai 1990");
  });

  it("devrait lire un instant en temps universel, même la veille de la date locale", () => {
    expect(utcDateTime(Date.UTC(2024, 6, 3, 12, 30), "fr")).toEqual({ date: "3 juillet 2024", time: "12:30" });
    expect(utcDateTime(Date.UTC(1999, 11, 31, 23, 0), "fr")).toEqual({ date: "31 décembre 1999", time: "23:00" });
  });

  it("devrait écrire les nombres à la française", () => {
    expect(decimal(48.85, "fr")).toBe("48,85");
    expect(decimal(48.85, "en")).toBe("48.85");
    expect(decimal(2.35221, "fr")).toBe("2,3522");
  });
});

describe("clockJump", () => {
  const paris = (hour: number, minute: number) => ({ year: 2024, month: 3, day: 31, hour, minute });

  it("devrait retrouver le saut de 02:00 à 03:00 (Paris, 31 mars 2024), d'où que parte l'heure sautée", () => {
    expect(clockJump(paris(2, 30), "Europe/Paris", 3600, 7200)).toEqual({ from: "02:00", to: "03:00", time: "02:30", shifted: "03:30" });
    expect(clockJump(paris(2, 0), "Europe/Paris", 3600, 7200)).toMatchObject({ from: "02:00", to: "03:00" });
    expect(clockJump(paris(2, 59), "Europe/Paris", 3600, 7200)).toMatchObject({ from: "02:00", shifted: "03:59" });
  });

  it("devrait suivre un saut d'une demi-heure (Lord Howe, 6 octobre 2024 : 02:00 à 02:30)", () => {
    const at = { year: 2024, month: 10, day: 6, hour: 2, minute: 15 };
    expect(clockJump(at, "Australia/Lord_Howe", 37_800, 39_600)).toMatchObject({ from: "02:00", to: "02:30" });
  });

  it("devrait renoncer à un saut de fuseau d'un jour entier (Apia, 30 décembre 2011), sans chercher", () => {
    const at = { year: 2011, month: 12, day: 30, hour: 12, minute: 0 };
    expect(clockJump(at, "Pacific/Apia", -36_000, 50_400)).toBeNull();
  });

  it("devrait renoncer quand le saut ne compte pas un nombre entier de minutes (décalages anciens, à la seconde)", () => {
    expect(clockJump({ year: 1937, month: 7, day: 1, hour: 0, minute: 0 }, "Europe/Amsterdam", 4772, 4800)).toBeNull();
  });
});

describe("standardOffset, coordinatePair, readDecimal", () => {
  it("devrait prendre l'heure d'hiver dans les deux hémisphères", () => {
    expect(standardOffset("Europe/Paris", 2024)).toBe(3600);
    expect(standardOffset("Australia/Sydney", 2024)).toBe(36_000);
    expect(standardOffset("America/Martinique", 2024)).toBe(-14_400);
  });

  it("devrait reconnaître un couple collé, pas un nombre seul à virgule", () => {
    expect(coordinatePair("48.1173, -1.6778")).toEqual(["48.1173", "-1.6778"]);
    expect(coordinatePair("48,85 2,35")).toEqual(["48,85", "2,35"]);
    expect(coordinatePair("48,85")).toBeNull();
  });

  it("devrait lire la virgule, le point et le signe moins typographique", () => {
    expect(readDecimal("−61,53")).toBe(-61.53);
    expect(readDecimal("2.35")).toBe(2.35);
    expect(readDecimal("2° E")).toBeNull();
  });
});
