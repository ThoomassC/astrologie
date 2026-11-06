// @vitest-environment node
import { describe, expect, it } from "vitest";
import { formatMonthDay, formatUtcDay } from "./dates";

describe("dates en français", () => {
  it("devrait écrire le premier du mois en ordinal", () => {
    expect(formatMonthDay({ month: 4, day: 1 }, "fr")).toBe("1er avril");
    expect(formatMonthDay({ month: 3, day: 21 }, "fr")).toBe("21 mars");
    expect(formatMonthDay({ month: 8, day: 23 }, "fr")).toBe("23 août");
  });

  it("devrait lire un instant en temps universel", () => {
    expect(formatUtcDay(Date.UTC(2026, 11, 18, 23, 59), "fr")).toBe("18 décembre");
  });
});

describe("dates en anglais britannique", () => {
  it("devrait écrire le jour avant le mois, sans ordinal, le mois avec sa capitale", () => {
    expect(formatMonthDay({ month: 4, day: 1 }, "en")).toBe("1 April");
    expect(formatMonthDay({ month: 3, day: 21 }, "en")).toBe("21 March");
  });

  it("devrait lire un instant en temps universel", () => {
    expect(formatUtcDay(Date.UTC(2026, 11, 18, 23, 59), "en")).toBe("18 December");
  });
});
