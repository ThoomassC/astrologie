// @vitest-environment node
import { describe, expect, it } from "vitest";
import { CITIES } from "@/lib/geo/cities";
import { type BirthFormValues, type BirthInputError, parseBirthInput } from "./birthInput";

/** Paris, 3 juillet 2024, 14 h 30, Placidus : un formulaire valide que chaque test modifie d'un champ. */
const PARIS: BirthFormValues = {
  date: "2024-07-03",
  time: "14:30",
  timeUnknown: false,
  place: { kind: "city", cityKey: "paris" },
  utcOffsetOverride: "",
  ambiguity: null,
  houseSystem: "placidus",
};

const form = (overrides: Partial<BirthFormValues>): BirthFormValues => ({ ...PARIS, ...overrides });

const manual = (overrides: Partial<{ latitude: string; longitude: string; timeZone: string }> = {}): BirthFormValues =>
  form({ place: { kind: "manual", latitude: "48,85", longitude: "2,35", timeZone: "Europe/Paris", ...overrides } });

describe("parseBirthInput — formulaires valides", () => {
  it("devrait accepter une naissance à Paris avec l'heure et en déduire l'instant UTC (heure d'été, +2 h)", () => {
    expect(parseBirthInput(PARIS)).toEqual({
      ok: true,
      value: expect.objectContaining({
        local: { year: 2024, month: 7, day: 3, hour: 14, minute: 30 },
        timeKnown: true,
        utcMs: Date.UTC(2024, 6, 3, 12, 30),
        offsetSeconds: 7200,
        offsetSource: "zone",
        latitude: CITIES.paris.latitude,
        longitude: CITIES.paris.longitude,
        timeZone: "Europe/Paris",
        cityKey: "paris",
        houseSystem: "placidus",
        zoneHistoryUncertain: false,
      }),
    });
  });

  it("devrait lire des coordonnées saisies avec une virgule décimale (« 48,85 », « 2,35 »)", () => {
    expect(parseBirthInput(manual())).toEqual({
      ok: true,
      value: expect.objectContaining({ latitude: 48.85, longitude: 2.35, timeZone: "Europe/Paris", cityKey: null }),
    });
  });

  it("devrait lire aussi le point décimal et le signe moins (« -33.87 », « 151.21 »)", () => {
    expect(parseBirthInput(manual({ latitude: "-33.87", longitude: "151.21", timeZone: "Australia/Sydney" }))).toEqual({
      ok: true,
      value: expect.objectContaining({ latitude: -33.87, longitude: 151.21 }),
    });
  });

  it("devrait poser 12:00 quand l'heure est inconnue, sans exiger d'heure", () => {
    expect(parseBirthInput(form({ time: "", timeUnknown: true }))).toEqual({
      ok: true,
      value: expect.objectContaining({
        local: { year: 2024, month: 7, day: 3, hour: 12, minute: 0 },
        timeKnown: false,
        utcMs: Date.UTC(2024, 6, 3, 10, 0),
      }),
    });
  });

  it.each(["1800-01-01", "2100-12-31"])("devrait accepter la date limite %s", (date) => {
    expect(parseBirthInput(form({ date }))).toMatchObject({ ok: true });
  });

  it.each([
    ["89,9", "180"],
    ["-89,9", "-180"],
  ])("devrait accepter les coordonnées limites %s, %s", (latitude, longitude) => {
    expect(parseBirthInput(manual({ latitude, longitude }))).toMatchObject({ ok: true });
  });

  it.each([
    ["earlier", Date.UTC(2024, 9, 27, 0, 30), 7200],
    ["later", Date.UTC(2024, 9, 27, 1, 30), 3600],
  ] as const)("devrait lever l'ambiguïté de 02:30 le 27 octobre 2024 avec ambiguity « %s »", (ambiguity, utcMs, offsetSeconds) => {
    expect(parseBirthInput(form({ date: "2024-10-27", time: "02:30", ambiguity }))).toEqual({
      ok: true,
      value: expect.objectContaining({ utcMs, offsetSeconds }),
    });
  });
});

describe("parseBirthInput — décalage saisi à la main", () => {
  it("devrait prendre le décalage « +00:09:21 » à la seconde près et le dire manuel", () => {
    expect(parseBirthInput(form({ utcOffsetOverride: "+00:09:21" }))).toEqual({
      ok: true,
      value: expect.objectContaining({
        offsetSeconds: 561,
        offsetSource: "manual",
        utcMs: Date.UTC(2024, 6, 3, 14, 20, 39),
      }),
    });
  });

  it.each([
    ["-03:30", "trait d'union"],
    ["−03:30", "signe moins U+2212"],
  ])("devrait lire un décalage négatif écrit « %s » (%s)", (utcOffsetOverride) => {
    expect(parseBirthInput(form({ utcOffsetOverride }))).toEqual({
      ok: true,
      value: expect.objectContaining({ offsetSeconds: -12600, utcMs: Date.UTC(2024, 6, 3, 18, 0) }),
    });
  });

  it.each(["+14:00", "-14:00"])("devrait accepter le décalage limite %s", (utcOffsetOverride) => {
    expect(parseBirthInput(form({ utcOffsetOverride }))).toMatchObject({ ok: true });
  });

  it("devrait accepter une heure sautée par le passage à l'heure d'été quand le décalage est saisi", () => {
    expect(parseBirthInput(form({ date: "2024-03-31", time: "02:30", utcOffsetOverride: "+01:00" }))).toEqual({
      ok: true,
      value: expect.objectContaining({ utcMs: Date.UTC(2024, 2, 31, 1, 30), offsetSource: "manual" }),
    });
  });

  it("devrait se passer de zone pour un lieu saisi à la main quand le décalage est saisi (timeZone null)", () => {
    expect(parseBirthInput(form({ ...manual({ timeZone: "" }), utcOffsetOverride: "+02:00" }))).toEqual({
      ok: true,
      value: expect.objectContaining({ timeZone: null, offsetSeconds: 7200, utcMs: Date.UTC(2024, 6, 3, 12, 30) }),
    });
  });
});

describe("parseBirthInput — histoire des fuseaux avant 1970", () => {
  it.each([
    ["montreal", "1960-05-01", true],
    ["montreal", "1969-12-31", true],
    ["montreal", "1970-01-01", false],
    ["paris", "1960-05-01", false],
  ])("devrait signaler l'incertitude pour %s le %s : %s", (cityKey, date, uncertain) => {
    expect(parseBirthInput(form({ date, place: { kind: "city", cityKey } }))).toEqual({
      ok: true,
      value: expect.objectContaining({ zoneHistoryUncertain: uncertain }),
    });
  });
});

describe("parseBirthInput — erreurs, une par champ", () => {
  it.each<[string, BirthFormValues, BirthInputError]>([
    ["date vide", form({ date: "" }), { field: "date", code: "required" }],
    ["date impossible", form({ date: "2024-02-30" }), { field: "date", code: "invalid" }],
    ["date mal formée", form({ date: "03/07/2024" }), { field: "date", code: "invalid" }],
    ["date avant 1800", form({ date: "1799-12-31" }), { field: "date", code: "out-of-range" }],
    ["date après 2100", form({ date: "2101-01-01" }), { field: "date", code: "out-of-range" }],
    ["heure vide", form({ time: "" }), { field: "time", code: "required" }],
    ["heure impossible", form({ time: "25:00" }), { field: "time", code: "invalid" }],
    ["ville vide", form({ place: { kind: "city", cityKey: "" } }), { field: "city", code: "required" }],
    ["ville inconnue", form({ place: { kind: "city", cityKey: "atlantide" } }), { field: "city", code: "unknown" }],
    ["latitude vide", manual({ latitude: "" }), { field: "latitude", code: "required" }],
    ["latitude illisible", manual({ latitude: "abc" }), { field: "latitude", code: "invalid" }],
    ["latitude au-delà de 89,9°", manual({ latitude: "89,91" }), { field: "latitude", code: "out-of-range" }],
    ["longitude vide", manual({ longitude: "" }), { field: "longitude", code: "required" }],
    ["longitude illisible", manual({ longitude: "est" }), { field: "longitude", code: "invalid" }],
    ["longitude au-delà de 180°", manual({ longitude: "180,01" }), { field: "longitude", code: "out-of-range" }],
    ["fuseau vide", manual({ timeZone: "" }), { field: "timeZone", code: "required" }],
    ["fuseau inconnu", manual({ timeZone: "Europe/Nulle" }), { field: "timeZone", code: "unknown" }],
    ["décalage illisible", form({ utcOffsetOverride: "abc" }), { field: "utcOffset", code: "invalid" }],
    ["décalage au-delà de 14 h", form({ utcOffsetOverride: "+14:01" }), { field: "utcOffset", code: "out-of-range" }],
    ["système de maisons inconnu", form({ houseSystem: "koch" }), { field: "houseSystem", code: "unknown" }],
  ])("devrait refuser : %s", (_label, values, error) => {
    expect(parseBirthInput(values)).toEqual({ ok: false, errors: [error] });
  });

  it("devrait refuser 02:30 le 31 mars 2024 à Paris, heure qui n'a pas existé, avec les décalages d'avant et d'après", () => {
    expect(parseBirthInput(form({ date: "2024-03-31", time: "02:30" }))).toEqual({
      ok: false,
      errors: [{ field: "time", code: "nonexistent", offsetBeforeSeconds: 3600, offsetAfterSeconds: 7200 }],
    });
  });

  it("devrait refuser la date d'un jour sauté par le fuseau quand l'heure est inconnue (Apia, 30 décembre 2011)", () => {
    const apia = manual({ latitude: "-13,83", longitude: "-171,76", timeZone: "Pacific/Apia" });
    expect(parseBirthInput({ ...apia, date: "2011-12-30", time: "", timeUnknown: true })).toEqual({
      ok: false,
      errors: [{ field: "date", code: "nonexistent" }],
    });
    expect(parseBirthInput({ ...apia, date: "2011-12-31", time: "", timeUnknown: true }).ok).toBe(true);
  });

  it("devrait demander de choisir pour 02:30 le 27 octobre 2024 à Paris, heure vécue deux fois", () => {
    expect(parseBirthInput(form({ date: "2024-10-27", time: "02:30" }))).toEqual({
      ok: false,
      errors: [
        {
          field: "time",
          code: "ambiguous",
          earlier: { utcMs: Date.UTC(2024, 9, 27, 0, 30), offsetSeconds: 7200 },
          later: { utcMs: Date.UTC(2024, 9, 27, 1, 30), offsetSeconds: 3600 },
        },
      ],
    });
  });

  it("devrait signaler ensemble les erreurs de champs indépendants (date impossible et ville inconnue)", () => {
    expect(parseBirthInput(form({ date: "2024-02-30", place: { kind: "city", cityKey: "atlantide" } }))).toEqual({
      ok: false,
      errors: expect.arrayContaining([
        { field: "date", code: "invalid" },
        { field: "city", code: "unknown" },
      ]),
    });
  });
});
