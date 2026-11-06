// @vitest-environment node
import { describe, expect, it } from "vitest";
import { SIGN_KEYS } from "./keys";
import { degreeInSign, norm360, separation, signOf } from "./zodiac";

describe("norm360", () => {
  it.each([
    [720.5, 0.5],
    [360, 0],
    [-90, 270],
    [0, 0],
    [359.5, 359.5],
  ])("devrait ramener %f° à %f°", (input, expected) => {
    expect(norm360(input)).toBeCloseTo(expected, 12);
  });

  // 360 − 1e-14 s'arrondit à 360 en double précision : « x + 360 » seul rendrait 360.
  it.each([-1e-9, -1e-14, -Number.MIN_VALUE])("devrait rester dans [0, 360) pour le négatif minuscule %e", (input) => {
    const result = norm360(input);
    expect(result >= 0 && result < 360).toBe(true);
  });
});

describe("separation", () => {
  it.each([
    [350, 10, 20],
    [10, 350, 20],
    [0, 180, 180],
    [90, 90, 0],
    [0, 359.5, 0.5],
    [100, 290, 170],
  ])("devrait mesurer entre %f° et %f° un écart de %f°", (a, b, expected) => {
    expect(separation(a, b)).toBeCloseTo(expected, 12);
  });
});

describe("signOf", () => {
  it.each([
    [0, "aries"],
    [29.9999, "aries"],
    [30, "taurus"],
    [359.9999, "pisces"],
  ])("devrait placer %f° en %s", (longitude, sign) => {
    expect(signOf(longitude)).toBe(sign);
  });

  it.each(SIGN_KEYS.map((sign, index) => [30 * index + 15, sign] as const))(
    "devrait placer le milieu du signe, %f°, en %s",
    (longitude, sign) => {
      expect(signOf(longitude)).toBe(sign);
    },
  );
});

describe("degreeInSign", () => {
  it.each([
    [45.5, 15.5],
    [30, 0],
    [0, 0],
    [359.9999, 29.9999],
  ])("devrait placer %f° à %f° dans son signe", (longitude, expected) => {
    expect(degreeInSign(longitude)).toBeCloseTo(expected, 9);
  });

  it("devrait rester sous 30° juste avant la fin des Poissons", () => {
    expect(degreeInSign(359.99999999999994)).toBeLessThan(30);
  });
});
