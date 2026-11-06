// @vitest-environment node
import { describe, expect, it } from "vitest";
import { formatMonthDay, formatUtcDay } from "./dates";

describe("dates en français", () => {
  it("devrait écrire le premier du mois en ordinal", () => {
    expect(formatMonthDay({ month: 4, day: 1 })).toBe("1er avril");
    expect(formatMonthDay({ month: 3, day: 21 })).toBe("21 mars");
    expect(formatMonthDay({ month: 8, day: 23 })).toBe("23 août");
  });

  it("devrait lire un instant en temps universel", () => {
    expect(formatUtcDay(Date.UTC(2026, 11, 18, 23, 59))).toBe("18 décembre");
  });
});
