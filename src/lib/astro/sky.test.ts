// @vitest-environment node
import { describe, expect, it } from "vitest";
import { CHART_POINT_KEYS } from "./keys";
import { computeSky } from "./sky";

const JULY_3_2024 = Date.UTC(2024, 6, 3, 12, 30);

describe("computeSky", () => {
  it("devrait rappeler l'instant demandé", () => {
    expect(computeSky(JULY_3_2024).utcMs).toBe(JULY_3_2024);
  });

  it("devrait donner les onze points du thème, et eux seuls", () => {
    expect(Object.keys(computeSky(JULY_3_2024).positions).sort()).toEqual([...CHART_POINT_KEYS].sort());
  });

  it("devrait laisser chaque point sans maison (aucun lieu)", () => {
    const { positions } = computeSky(JULY_3_2024);
    expect(CHART_POINT_KEYS.filter((key) => positions[key].house !== null)).toEqual([]);
  });

  it("devrait laisser chaque signe certain (l'instant est exact)", () => {
    const { positions } = computeSky(JULY_3_2024);
    expect(CHART_POINT_KEYS.filter((key) => positions[key].signUncertain)).toEqual([]);
  });

  it("devrait tenir les angles et le nœud hors des aspects", () => {
    // Clés en `string` : le type d'Aspect exclut déjà le nœud, mais un `as` dans le code suffirait à l'y faire entrer.
    const outsiders: readonly string[] = ["ascendant", "midheaven", "northNode"];
    const { aspects } = computeSky(JULY_3_2024);
    expect(aspects.filter(({ a, b }) => outsiders.includes(a) || outsiders.includes(b))).toEqual([]);
  });

  it("devrait placer le Soleil à 12° du Cancer", () => {
    expect(computeSky(JULY_3_2024).positions.sun).toMatchObject({
      key: "sun",
      sign: "cancer",
      degreeInSign: expect.closeTo(12.0655, 2),
    });
  });

  it("devrait montrer Mercure stationnaire le 1er avril 2024 à 22:00Z (station rétrograde)", () => {
    expect(computeSky(Date.parse("2024-04-01T22:00:00Z")).positions.mercury.stationary).toBe(true);
  });

  it("devrait montrer Mercure rétrograde et non stationnaire le 10 avril 2024", () => {
    expect(computeSky(Date.parse("2024-04-10T12:00:00Z")).positions.mercury).toMatchObject({
      motion: "retrograde",
      stationary: false,
    });
  });

  it("devrait montrer le nœud rétrograde et jamais stationnaire", () => {
    expect(computeSky(JULY_3_2024).positions.northNode).toMatchObject({ motion: "retrograde", stationary: false });
  });
});
