// @vitest-environment node
import { describe, expect, it } from "vitest";
import { meanNodeMeanEquinox } from "./node";

describe("meanNodeMeanEquinox (Meeus 47.7)", () => {
  it("devrait retrouver l'exemple 22.a de Meeus : 11,2531° le 10 avril 1987 à 0 h TT", () => {
    const t = (2446895.5 - 2451545) / 36525;
    expect(Math.abs(meanNodeMeanEquinox(t) - 11.2531)).toBeLessThan(1e-3);
  });

  it("devrait valoir 125,0445479° à J2000, la constante de l'équation 47.7", () => {
    expect(Math.abs(meanNodeMeanEquinox(0) - 125.0445479)).toBeLessThan(1e-7);
  });

  it("devrait ramener dans [0, 360) une valeur négative (T = 0,1 : 291,630940°)", () => {
    expect(Math.abs(meanNodeMeanEquinox(0.1) - 291.63094)).toBeLessThan(1e-6);
  });
});
