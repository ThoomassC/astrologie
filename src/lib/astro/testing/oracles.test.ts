// @vitest-environment node
import { Body, Equator, HourAngle, Observer } from "astronomy-engine";
import { describe, expect, it } from "vitest";
import {
  angularGap,
  arcForward,
  eclipticToEquatorial,
  eclipticToHorizontal,
  eclipticToHorizontalAt,
  equatorialToHorizontal,
  hourAngleDeg,
  isWithin,
  sampleSkyFrames,
  seededRandom,
  semiArcs,
  skyFrameAt,
} from "./oracles";

/*
 * Les oracles jugent le code des angles et des maisons : on les vérifie ici contre astronomy-engine, sans quoi un test
 * vert ne prouverait rien.
 */

const OBLIQUITY_J2000 = 23.4392911;

const REAL_SKIES = [
  { place: "Paris", iso: "2024-07-03T12:30:00Z", latitudeDeg: 48.8566, longitudeDeg: 2.3522 },
  { place: "Tromsø", iso: "2024-01-15T09:00:00Z", latitudeDeg: 69.6492, longitudeDeg: 18.9553 },
  { place: "McMurdo", iso: "2000-01-01T12:00:00Z", latitudeDeg: -77.85, longitudeDeg: 166.67 },
  { place: "Sydney", iso: "1850-03-01T03:00:00Z", latitudeDeg: -33.87, longitudeDeg: 151.21 },
];

describe("angularGap et arcForward", () => {
  it.each([
    [350, 10, -20],
    [10, 350, 20],
    [0, 180, 180],
    [180, 0, 180],
    [359.5, 0.5, -1],
  ])("devrait mesurer l'écart signé de %f° à %f° : %f°", (a, b, expected) => {
    expect(angularGap(a, b)).toBeCloseTo(expected, 12);
  });

  it.each([
    [350, 10, 20],
    [10, 350, 340],
    [42, 42, 0],
  ])("devrait mesurer l'arc direct de %f° à %f° : %f°", (from, to, expected) => {
    expect(arcForward(from, to)).toBeCloseTo(expected, 12);
  });
});

describe("isWithin", () => {
  it.each([
    [0.5e-6, true],
    [-0.5e-6, true],
    [1e-6, false],
    [Number.NaN, false],
  ])("devrait dire si %f est sous la tolérance 1e-6 : %s", (value, expected) => {
    expect(isWithin(value, 1e-6)).toBe(expected);
  });
});

describe("seededRandom et sampleSkyFrames", () => {
  it("devrait rejouer les mêmes tirages pour la même graine", () => {
    const first = seededRandom(1987);
    const second = seededRandom(1987);
    expect([first(), first(), first()]).toEqual([second(), second(), second()]);
  });

  it("devrait changer de tirages avec la graine", () => {
    expect(seededRandom(1)()).not.toBe(seededRandom(2)());
  });

  it("devrait tirer dans [0, 1)", () => {
    const draws = Array.from({ length: 1000 }, seededRandom(7));
    expect(draws.filter((x) => x < 0 || x >= 1)).toEqual([]);
  });

  it("devrait tirer des cieux dans les bornes demandées", () => {
    const frames = sampleSkyFrames({ seed: 3, count: 500, maxAbsLatitudeDeg: 60, obliquityDeg: [22, 25] });
    const outside = frames.filter(
      (f) => f.ramcDeg < 0 || f.ramcDeg >= 360 || Math.abs(f.latitudeDeg) > 60 || f.obliquityDeg < 22 || f.obliquityDeg >= 25,
    );
    expect(outside).toEqual([]);
  });
});

describe("eclipticToEquatorial", () => {
  it.each([
    [0, 0, 0],
    [90, 90, OBLIQUITY_J2000],
    [180, 180, 0],
    [270, 270, -OBLIQUITY_J2000],
  ])("devrait placer la longitude %f° à l'ascension droite %f° et à la déclinaison %f°", (longitude, ra, dec) => {
    expect(eclipticToEquatorial(longitude, OBLIQUITY_J2000)).toEqual({
      rightAscensionDeg: expect.closeTo(ra, 9),
      declinationDeg: expect.closeTo(dec, 9),
    });
  });
});

describe("eclipticToHorizontal", () => {
  it.each(REAL_SKIES)(
    "devrait coïncider avec la chaîne d'astronomy-engine — $place, $iso",
    ({ iso, latitudeDeg, longitudeDeg }) => {
      const utcMs = Date.parse(iso);
      const frame = skyFrameAt(utcMs, latitudeDeg, longitudeDeg);
      const gaps = [0, 37.5, 111.1, 200, 359.9].map((longitude) => {
        const formula = eclipticToHorizontal(longitude, frame);
        const engine = eclipticToHorizontalAt(longitude, utcMs, latitudeDeg, longitudeDeg);
        return {
          longitude,
          altitudeGap: formula.altitudeDeg - engine.altitudeDeg,
          azimuthGap: angularGap(formula.azimuthDeg, engine.azimuthDeg),
        };
      });
      expect(gaps.filter((g) => !isWithin(g.altitudeGap, 1e-9) || !isWithin(g.azimuthGap, 1e-9))).toEqual([]);
    },
  );

  it("devrait voir le point vernal se lever plein est quand le RAMC vaut 270°", () => {
    expect(eclipticToHorizontal(0, { ramcDeg: 270, latitudeDeg: 48.85, obliquityDeg: OBLIQUITY_J2000 })).toEqual({
      altitudeDeg: expect.closeTo(0, 9),
      azimuthDeg: expect.closeTo(90, 9),
    });
  });
});

describe("hourAngleDeg", () => {
  it.each(REAL_SKIES)(
    "devrait donner l'angle horaire du Soleil que calcule astronomy-engine — $place, $iso",
    ({ iso, latitudeDeg, longitudeDeg }) => {
      const date = new Date(iso);
      const observer = new Observer(latitudeDeg, longitudeDeg, 0);
      const sun = Equator(Body.Sun, date, observer, true, true);
      const frame = skyFrameAt(date.getTime(), latitudeDeg, longitudeDeg);
      const gap = angularGap(hourAngleDeg(15 * sun.ra, frame.ramcDeg), 15 * HourAngle(Body.Sun, date, observer));
      expect(gap).toBeCloseTo(0, 9);
    },
  );
});

describe("semiArcs", () => {
  it.each([
    [0, 45],
    [20, 0],
    [-23.44, 0],
  ])("devrait donner deux demi-arcs de 90° pour δ = %f° et φ = %f°", (dec, lat) => {
    expect(semiArcs(dec, lat)).toEqual({ diurnalDeg: expect.closeTo(90, 12), nocturnalDeg: expect.closeTo(90, 12) });
  });

  it.each([
    { dec: 20, lat: 45 },
    { dec: -23, lat: 60 },
    { dec: 10, lat: -33.9 },
  ])("devrait mettre au lever, sur l'horizon est, le point à un demi-arc diurne du méridien (δ $dec°, φ $lat°)", ({ dec, lat }) => {
    const { diurnalDeg } = semiArcs(dec, lat);
    const rising = equatorialToHorizontal(
      { rightAscensionDeg: 100 + diurnalDeg, declinationDeg: dec },
      { ramcDeg: 100, latitudeDeg: lat },
    );
    expect(rising.altitudeDeg).toBeCloseTo(0, 9);
    expect(rising.azimuthDeg > 0 && rising.azimuthDeg < 180).toBe(true);
  });

  it("devrait lever une erreur pour un point circumpolaire", () => {
    expect(() => semiArcs(20, 80)).toThrow(/circumpolaire/);
  });
});
