// @vitest-environment node
import { describe, expect, it } from "vitest";
import { earthFrame, pointAt } from "./ephemeris";
import { CHART_POINT_KEYS } from "./keys";
import { angularGap, sampleInstants } from "./testing/oracles";

/** Écart toléré sur les positions apparentes de référence. */
const TOLERANCE_DEG = 0.003;

const MARCH_EQUINOX_2024 = Date.parse("2024-03-20T03:06:00Z");

/** Soixante instants tirés une fois pour toutes (graine fixe) entre 1800 et 2100. */
const INSTANTS = sampleInstants(42, 60, Date.UTC(1800, 0, 1), Date.UTC(2101, 0, 1));

describe("pointAt — positions apparentes de référence", () => {
  it("devrait placer le Soleil à 0° Bélier à l'équinoxe de mars 2024 (2024-03-20T03:06Z)", () => {
    expect(Math.abs(angularGap(pointAt("sun", MARCH_EQUINOX_2024).longitude, 0))).toBeLessThan(TOLERANCE_DEG);
  });

  it("devrait donner la longitude apparente de la Lune de Meeus 47.a (133,1673° le 1992-04-12 à 0 h TT)", () => {
    const { longitude } = pointAt("moon", Date.parse("1992-04-11T23:59:02Z"));
    expect(Math.abs(angularGap(longitude, 133.1673))).toBeLessThan(TOLERANCE_DEG);
  });

  it("devrait donner la latitude de la Lune de Meeus 47.a (−3,2291°)", () => {
    const { latitude } = pointAt("moon", Date.parse("1992-04-11T23:59:02Z"));
    expect(Math.abs(latitude - -3.2291)).toBeLessThan(TOLERANCE_DEG);
  });

  it("devrait donner la longitude apparente de Vénus de Meeus 33.a (313,0810° le 1992-12-20 à 0 h TT)", () => {
    const { longitude } = pointAt("venus", Date.parse("1992-12-19T23:59:01Z"));
    expect(Math.abs(angularGap(longitude, 313.081))).toBeLessThan(TOLERANCE_DEG);
  });

  it("devrait donner la latitude de Vénus de Meeus 33.a (−2,0847°)", () => {
    const { latitude } = pointAt("venus", Date.parse("1992-12-19T23:59:01Z"));
    expect(Math.abs(latitude - -2.0847)).toBeLessThan(TOLERANCE_DEG);
  });

  it("devrait rendre des longitudes dans [0, 360) pour les onze points, Soleil à 359,9997° compris", () => {
    const outside = CHART_POINT_KEYS.map((key) => ({ key, longitude: pointAt(key, MARCH_EQUINOX_2024).longitude })).filter(
      ({ longitude }) => !(longitude >= 0 && longitude < 360),
    );
    expect(outside).toEqual([]);
  });
});

describe("pointAt — vitesses en longitude", () => {
  it.each([
    ["2024-03-25T12:00:00Z", "directe", 1],
    ["2024-04-10T12:00:00Z", "rétrograde", -1],
    ["2024-05-05T12:00:00Z", "directe", 1],
  ])("devrait donner à Mercure, le %s, une vitesse %s", (iso, _motion, sign) => {
    expect(Math.sign(pointAt("mercury", Date.parse(iso)).speedDegPerDay)).toBe(sign);
  });

  it("devrait donner à Mars une vitesse négative le 2025-01-15 (rétrogradation)", () => {
    expect(pointAt("mars", Date.parse("2025-01-15T12:00:00Z")).speedDegPerDay).toBeLessThan(0);
  });

  // La différence centrée enjambe 0° : 0,49° − 359,51° ne vaut pas −359°.
  it.each([
    ["sun", "2024-03-20T03:06:00Z"],
    ["moon", "2024-01-16T05:00:00Z"],
  ] as const)("devrait garder une vitesse positive à %s quand il franchit 0° Bélier (%s)", (key, iso) => {
    expect(pointAt(key, Date.parse(iso)).speedDegPerDay).toBeGreaterThan(0);
  });

  it.each(["sun", "moon"] as const)("devrait donner une vitesse positive à %s à soixante dates de 1800 à 2100", (key) => {
    const backwards = INSTANTS.map((utcMs) => ({
      at: new Date(utcMs).toISOString(),
      speed: pointAt(key, utcMs).speedDegPerDay,
    })).filter(({ speed }) => !(speed > 0));
    expect(backwards).toEqual([]);
  });

  it.each([
    ["2024-01-03T00:00:00Z", "au périhélie", 1.0192],
    ["2024-07-05T06:00:00Z", "à l'aphélie", 0.9538],
  ])("devrait exprimer la vitesse du Soleil en degrés par jour : le %s, %s, ≈ %f °/j", (iso, _when, expected) => {
    expect(Math.abs(pointAt("sun", Date.parse(iso)).speedDegPerDay - expected)).toBeLessThan(1e-3);
  });
});

describe("pointAt — nœud nord", () => {
  it("devrait donner au nœud une latitude nulle", () => {
    expect(pointAt("northNode", Date.parse("2024-07-03T12:30:00Z")).latitude).toBe(0);
  });

  // Nœud moyen (Meeus 47.7) 11,253081° + Δψ −0,001032° ; sans la nutation, l'écart serait de 0,001°.
  it("devrait corriger le nœud moyen de la nutation en longitude (1987-04-10T00:00Z : 11,252049°)", () => {
    expect(Math.abs(pointAt("northNode", Date.UTC(1987, 3, 10)).longitude - 11.252049)).toBeLessThan(2e-4);
  });

  it("devrait faire reculer le nœud d'environ 0,053° par jour", () => {
    expect(Math.abs(pointAt("northNode", Date.parse("2024-07-03T12:30:00Z")).speedDegPerDay - -0.05295)).toBeLessThan(5e-4);
  });
});

describe("earthFrame — exemples de Meeus, 1987-04-10T00:00Z", () => {
  const APRIL_10_1987 = Date.UTC(1987, 3, 10);

  it("devrait donner le temps sidéral apparent de Greenwich (12.a : 13,179482 h)", () => {
    expect(Math.abs(earthFrame(APRIL_10_1987).gastHours - 13.179482)).toBeLessThan(1e-5);
  });

  it("devrait donner l'obliquité vraie de l'écliptique (22.a : 23,4435694°)", () => {
    expect(Math.abs(earthFrame(APRIL_10_1987).trueObliquityDeg - 23.4435694)).toBeLessThan(1e-5);
  });

  // Meeus (IAU 1980) donne −3,788″ ; astronomy-engine (IAU 2000B) −3,716″ : on tolère 0,1″.
  it("devrait donner la nutation en longitude, en degrés (22.a : −3,788″ à 0,1″ près)", () => {
    expect(Math.abs(earthFrame(APRIL_10_1987).nutationLongitudeDeg - -3.788 / 3600)).toBeLessThan(0.1 / 3600);
  });
});
