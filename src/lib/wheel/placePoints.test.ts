// @vitest-environment node
import { describe, expect, it } from "vitest";
import { spreadLongitudes } from "./placePoints";

/** Écart angulaire le plus court entre deux longitudes. */
const gap = (a: number, b: number) => {
  const d = Math.abs(a - b) % 360;
  return d > 180 ? 360 - d : d;
};

function minGap(values: readonly number[]): number {
  let min = Infinity;
  for (let i = 0; i < values.length; i++)
    for (let j = i + 1; j < values.length; j++) min = Math.min(min, gap(values[i], values[j]));
  return min;
}

describe("spreadLongitudes", () => {
  it("devrait laisser en place des points déjà assez écartés", () => {
    expect(spreadLongitudes([10, 50, 200], 8)).toEqual([10, 50, 200]);
  });

  it("devrait écarter deux points trop proches autour de leur milieu", () => {
    const [a, b] = spreadLongitudes([100, 102], 8);
    expect(a).toBeCloseTo(97, 9);
    expect(b).toBeCloseTo(105, 9);
  });

  it("devrait garder l'ordre et l'écart minimal dans un groupe serré (stellium)", () => {
    const input = [120, 121, 122.5, 123, 125];
    const out = spreadLongitudes(input, 8);
    expect(minGap(out)).toBeGreaterThanOrEqual(8 - 1e-9);
    for (let k = 1; k < out.length; k++) expect(out[k]).toBeGreaterThan(out[k - 1]);
  });

  it("devrait traiter le passage par 0° Bélier comme un voisinage", () => {
    const out = spreadLongitudes([359, 1], 8);
    expect(gap(out[0], out[1])).toBeCloseTo(8, 9);
    expect(gap(out[0], 356)).toBeCloseTo(0, 9);
  });

  it("devrait fusionner les groupes qui se rencontrent", () => {
    const out = spreadLongitudes([10, 12, 20, 22], 8);
    expect(minGap(out)).toBeGreaterThanOrEqual(8 - 1e-9);
  });

  it("devrait réduire l'écart quand le cercle ne peut pas tous les tenir", () => {
    const input = Array.from({ length: 60 }, (_, k) => k);
    const out = spreadLongitudes(input, 8);
    expect(minGap(out)).toBeGreaterThanOrEqual(6 - 1e-9);
    for (const value of out) {
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThan(360);
    }
  });
});
