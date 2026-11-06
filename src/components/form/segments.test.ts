import { describe, expect, it } from "vitest";
import {
  acceptDigits,
  dayOf,
  daysInMonth,
  fillSegments,
  isoDay,
  joinDate,
  joinTime,
  monthGrid,
  moveDay,
  padSegment,
  parseTimeText,
  splitDate,
  splitTime,
  stepSegment,
  to12,
  to24,
} from "./segments";

describe("acceptDigits", () => {
  it("keeps a first digit that can start a two-digit value, and waits", () => {
    expect(acceptDigits("day", "3")).toEqual({ value: "3", advance: false });
    expect(acceptDigits("month", "1")).toEqual({ value: "1", advance: false });
    expect(acceptDigits("hour24", "2")).toEqual({ value: "2", advance: false });
  });

  it("pads a first digit that cannot, and moves on", () => {
    expect(acceptDigits("day", "4")).toEqual({ value: "04", advance: true });
    expect(acceptDigits("month", "7")).toEqual({ value: "07", advance: true });
    expect(acceptDigits("hour24", "9")).toEqual({ value: "09", advance: true });
    expect(acceptDigits("hour12", "2")).toEqual({ value: "02", advance: true });
    expect(acceptDigits("minute", "6")).toEqual({ value: "06", advance: true });
  });

  it("moves on once two digits are in range", () => {
    expect(acceptDigits("day", "31")).toEqual({ value: "31", advance: true });
    expect(acceptDigits("hour24", "23")).toEqual({ value: "23", advance: true });
    expect(acceptDigits("minute", "59")).toEqual({ value: "59", advance: true });
  });

  it("refuses a digit that would leave the range", () => {
    expect(acceptDigits("day", "35")).toBeNull();
    expect(acceptDigits("day", "00")).toBeNull();
    expect(acceptDigits("month", "13")).toBeNull();
    expect(acceptDigits("hour24", "24")).toBeNull();
    expect(acceptDigits("hour12", "00")).toBeNull();
    expect(acceptDigits("hour12", "13")).toBeNull();
    expect(acceptDigits("day", "123")).toBeNull();
  });

  it("takes four digits for the year, whatever they are (the form checks the range)", () => {
    expect(acceptDigits("year", "199")).toEqual({ value: "199", advance: false });
    expect(acceptDigits("year", "1990")).toEqual({ value: "1990", advance: true });
    expect(acceptDigits("year", "0042")).toEqual({ value: "0042", advance: true });
  });

  it("drops anything but digits, and clears on empty", () => {
    expect(acceptDigits("day", "1a")).toEqual({ value: "1", advance: false });
    expect(acceptDigits("day", "")).toEqual({ value: "", advance: false });
  });
});

describe("padSegment", () => {
  it("pads two-digit segments, leaves the year and empty segments alone, clears a lone zero", () => {
    expect(padSegment("day", "7")).toBe("07");
    expect(padSegment("minute", "0")).toBe("00");
    expect(padSegment("day", "0")).toBe("");
    expect(padSegment("year", "199")).toBe("199");
    expect(padSegment("month", "")).toBe("");
  });
});

describe("stepSegment", () => {
  it("wraps within the range", () => {
    expect(stepSegment("month", "12", 1)).toBe("01");
    expect(stepSegment("month", "01", -1)).toBe("12");
    expect(stepSegment("hour24", "23", 1)).toBe("00");
    expect(stepSegment("minute", "00", -1)).toBe("59");
    expect(stepSegment("hour12", "12", 1)).toBe("01");
  });

  it("respects the days of the chosen month", () => {
    expect(stepSegment("day", "28", 1, undefined, 28)).toBe("01");
    expect(stepSegment("day", "01", -1, undefined, 30)).toBe("30");
  });

  it("starts an empty segment from the bottom (up), the top (down) or the given start", () => {
    expect(stepSegment("day", "", 1)).toBe("01");
    expect(stepSegment("day", "", -1)).toBe("31");
    expect(stepSegment("year", "", 1, 2026)).toBe("2026");
  });
});

describe("dates", () => {
  it("joins complete segments into YYYY-MM-DD, padding day and month", () => {
    expect(joinDate({ day: "7", month: "7", year: "1990" })).toBe("1990-07-07");
    expect(joinDate({ day: "14", month: "07", year: "1990" })).toBe("1990-07-14");
  });

  it("keeps a partial date partial, so the form cannot read it as another date", () => {
    expect(joinDate({ day: "14", month: "", year: "1990" })).toBe("1990--14");
    expect(joinDate({ day: "14", month: "07", year: "199" })).toBe("199-07-14");
    expect(joinDate({ day: "", month: "", year: "" })).toBe("");
  });

  it("round-trips through splitDate", () => {
    for (const parts of [
      { day: "14", month: "07", year: "1990" },
      { day: "1", month: "", year: "19" },
      { day: "", month: "3", year: "" },
    ]) {
      const joined = joinDate(parts);
      expect(joinDate(splitDate(joined))).toBe(joined);
    }
  });

  it("knows the length of months, leap years included", () => {
    expect(daysInMonth(2024, 2)).toBe(29);
    expect(daysInMonth(1900, 2)).toBe(28);
    expect(daysInMonth(2000, 2)).toBe(29);
    expect(daysInMonth(1990, 4)).toBe(30);
  });

  it("lays out a month in weeks starting on Monday or Sunday", () => {
    // 1 November 2026 is a Sunday.
    const monday = monthGrid(2026, 11, 1);
    expect(monday[0]).toEqual([null, null, null, null, null, null, 1]);
    expect(monday.at(-1)).toEqual([30, null, null, null, null, null, null]);
    const sunday = monthGrid(2026, 11, 0);
    expect(sunday[0]).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(sunday.every((week) => week.length === 7)).toBe(true);
  });

  it("moves by days across months and years, and by months keeping the day when it can", () => {
    expect(moveDay({ year: 1999, month: 12, day: 31 }, { days: 1 })).toEqual({ year: 2000, month: 1, day: 1 });
    expect(moveDay({ year: 2024, month: 3, day: 1 }, { days: -1 })).toEqual({ year: 2024, month: 2, day: 29 });
    expect(moveDay({ year: 2024, month: 1, day: 31 }, { months: 1 })).toEqual({ year: 2024, month: 2, day: 29 });
    expect(moveDay({ year: 2024, month: 1, day: 15 }, { months: -1 })).toEqual({ year: 2023, month: 12, day: 15 });
    expect(moveDay({ year: 1850, month: 6, day: 10 }, { days: 7 })).toEqual({ year: 1850, month: 6, day: 17 });
  });

  it("reads a complete, real date only", () => {
    expect(dayOf("1990-07-14")).toEqual({ year: 1990, month: 7, day: 14 });
    expect(dayOf("1990-02-30")).toBeNull();
    expect(dayOf("1990--14")).toBeNull();
    expect(isoDay({ year: 1805, month: 3, day: 9 })).toBe("1805-03-09");
  });
});

describe("times", () => {
  it("converts between 12- and 24-hour clocks", () => {
    expect(to24(12, "am")).toBe(0);
    expect(to24(12, "pm")).toBe(12);
    expect(to24(7, "pm")).toBe(19);
    expect(to12(0)).toEqual({ hour: 12, period: "am" });
    expect(to12(12)).toEqual({ hour: 12, period: "pm" });
    expect(to12(19)).toEqual({ hour: 7, period: "pm" });
  });

  it("always keeps a 24-hour HH:MM once complete", () => {
    expect(joinTime({ hour: "14", minute: "30", period: "" }, false)).toBe("14:30");
    expect(joinTime({ hour: "7", minute: "5", period: "" }, false)).toBe("07:05");
    expect(joinTime({ hour: "02", minute: "30", period: "pm" }, true)).toBe("14:30");
    expect(joinTime({ hour: "12", minute: "00", period: "am" }, true)).toBe("00:00");
  });

  it("keeps a partial time partial, AM or PM included", () => {
    expect(joinTime({ hour: "07", minute: "", period: "" }, false)).toBe("07:?");
    expect(joinTime({ hour: "07", minute: "30", period: "" }, true)).toBe("07:30?");
    expect(joinTime({ hour: "", minute: "", period: "" }, true)).toBe("");
  });

  it("round-trips through splitTime on both clocks", () => {
    expect(splitTime("14:30", false)).toEqual({ hour: "14", minute: "30", period: "" });
    expect(splitTime("14:30", true)).toEqual({ hour: "02", minute: "30", period: "pm" });
    expect(splitTime("00:15", true)).toEqual({ hour: "12", minute: "15", period: "am" });
    for (const parts of [
      { hour: "7", minute: "", period: "pm" as const },
      { hour: "", minute: "30", period: "" as const },
    ]) {
      const joined = joinTime(parts, true);
      expect(joinTime(splitTime(joined, true), true)).toBe(joined);
    }
  });
});

describe("fillSegments", () => {
  const DATE = ["day", "month", "year"] as const;
  it("répartit des chiffres à la suite", () => {
    expect(fillSegments(DATE, "14071990")).toEqual(["14", "07", "1990"]);
    expect(fillSegments(DATE, "4071990")).toEqual(["04", "07", "1990"]);
    expect(fillSegments(["hour24", "minute"], "1430")).toEqual(["14", "30"]);
  });

  it("prend un groupe par segment quand le texte est séparé", () => {
    expect(fillSegments(DATE, "1/7/1990")).toEqual(["01", "07", "1990"]);
    expect(fillSegments(DATE, "14.07.1990")).toEqual(["14", "07", "1990"]);
    expect(fillSegments(["hour24", "minute"], "8:05")).toEqual(["08", "05"]);
  });

  it("remet une date ISO dans l'ordre jour, mois, année", () => {
    expect(fillSegments(DATE, "1990-07-14")).toEqual(["14", "07", "1990"]);
  });

  it("s'arrête au premier segment refusé", () => {
    expect(fillSegments(DATE, "35/07/1990")).toEqual([]);
    expect(fillSegments(DATE, "14/13/1990")).toEqual(["14"]);
  });
});

describe("parseTimeText", () => {
  it("lit une heure collée dans l'une ou l'autre convention", () => {
    expect(parseTimeText("14:30")).toEqual({ hour: 14, minute: 30 });
    expect(parseTimeText("1430")).toEqual({ hour: 14, minute: 30 });
    expect(parseTimeText("230")).toEqual({ hour: 2, minute: 30 });
    expect(parseTimeText("14h30")).toEqual({ hour: 14, minute: 30 });
    expect(parseTimeText("2:30 PM")).toEqual({ hour: 14, minute: 30 });
    expect(parseTimeText("12:05 a.m.")).toEqual({ hour: 0, minute: 5 });
  });

  it("refuse ce qui n'est pas une heure", () => {
    expect(parseTimeText("24:00")).toBeNull();
    expect(parseTimeText("13:00 pm")).toBeNull();
    expect(parseTimeText("14:60")).toBeNull();
    expect(parseTimeText("demain")).toBeNull();
  });
});
