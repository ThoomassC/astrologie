// @vitest-environment node
import { describe, expect, it } from "vitest";
import { computeAngles, type SkyFrame } from "./angles";
import { computeHouses, type HouseCusps, houseOf } from "./houses";
import { HOUSE_SYSTEM_KEYS, type HouseSystemKey } from "./keys";
import {
  angularGap,
  arcForward,
  eclipticToEquatorial,
  hourAngleDeg,
  isWithin,
  sampleSkyFrames,
  semiArcs,
} from "./testing/oracles";

const OBLIQUITY_J2000 = 23.4392911;

/** Placidus vérifié par sa définition, loin des cercles polaires : |φ| ≤ 60°, obliquité de 22° à 25°. */
const PLACIDUS_FRAMES = sampleSkyFrames({ seed: 2026, count: 200, maxAbsLatitudeDeg: 60, obliquityDeg: [22, 25] });

/** Tous systèmes, jusqu'à la limite de Placidus (66°) ; obliquité réelle, pour que tout point de l'écliptique se lève. */
const FRAMES_66 = sampleSkyFrames({ seed: 66, count: 200, maxAbsLatitudeDeg: 66, obliquityDeg: [23.4, 23.5] });

const houses = (system: HouseSystemKey, frame: SkyFrame) => computeHouses(system, frame, computeAngles(frame));

const frameAt = (latitudeDeg: number, ramcDeg = 123.4): SkyFrame => ({
  ramcDeg,
  latitudeDeg,
  obliquityDeg: OBLIQUITY_J2000,
});

describe("Placidus — définition par les demi-arcs (|φ| ≤ 60°, 200 cieux tirés)", () => {
  // H = RAMC − AR, positif vers l'ouest ; DSA = acos(−tan φ tan δ), NSA = 180 − DSA.
  it.each([
    { cusp: "XI", index: 10, hourAngle: (dsa: number) => -dsa / 3 },
    { cusp: "XII", index: 11, hourAngle: (dsa: number) => (-2 * dsa) / 3 },
    { cusp: "II", index: 1, hourAngle: (dsa: number, nsa: number) => -(dsa + nsa / 3) },
    { cusp: "III", index: 2, hourAngle: (dsa: number, nsa: number) => -(dsa + (2 * nsa) / 3) },
  ])("devrait placer la cuspide $cusp à l'angle horaire que prévoient ses demi-arcs (±1e-6°)", ({ index, hourAngle }) => {
    const misses = PLACIDUS_FRAMES.map((frame) => {
      const cusp = houses("placidus", frame).cusps[index];
      const { rightAscensionDeg, declinationDeg } = eclipticToEquatorial(cusp, frame.obliquityDeg);
      const { diurnalDeg, nocturnalDeg } = semiArcs(declinationDeg, frame.latitudeDeg);
      const gapDeg = angularGap(hourAngleDeg(rightAscensionDeg, frame.ramcDeg), hourAngle(diurnalDeg, nocturnalDeg));
      return { frame, cusp, gapDeg };
    }).filter(({ gapDeg }) => !isWithin(gapDeg, 1e-6));
    expect(misses).toEqual([]);
  });

  it("devrait calculer Placidus lui-même, sans repli", () => {
    const fallbacks = PLACIDUS_FRAMES.map((frame) => ({ frame, result: houses("placidus", frame) })).filter(
      ({ result }) => result.used !== "placidus" || result.fallback !== null,
    );
    expect(fallbacks).toEqual([]);
  });

  it("devrait retrouver, à l'équateur, les cuspides XI et XII à 30° et 60° d'ascension droite du MC", () => {
    const { cusps } = houses("placidus", frameAt(0, 0));
    expect([cusps[10], cusps[11]]).toEqual([expect.closeTo(32.181259, 6), expect.closeTo(62.08945, 6)]);
  });
});

describe.each(HOUSE_SYSTEM_KEYS)("%s — invariants (|φ| ≤ 66°, 200 cieux tirés)", (system) => {
  it("devrait placer chaque cuspide à 180° de son opposée", () => {
    const misses = FRAMES_66.map((frame) => {
      const { cusps } = houses(system, frame);
      return { frame, gaps: cusps.slice(0, 6).map((cusp, i) => angularGap(cusps[i + 6], cusp + 180)) };
    }).filter(({ gaps }) => !gaps.every((gap) => isWithin(gap, 1e-9)));
    expect(misses).toEqual([]);
  });

  it("devrait donner douze maisons de taille positive qui font une fois le tour du zodiaque", () => {
    const misses = FRAMES_66.map((frame) => {
      const { cusps } = houses(system, frame);
      const sizes = cusps.map((cusp, i) => arcForward(cusp, cusps[(i + 1) % 12]));
      return { frame, sizes, total: sizes.reduce((sum, size) => sum + size, 0) };
    }).filter(({ sizes, total }) => !sizes.every((size) => size > 0) || !isWithin(total - 360, 1e-9));
    expect(misses).toEqual([]);
  });

  it("devrait rendre des cuspides dans [0, 360)", () => {
    const outside = FRAMES_66.map((frame) => ({ frame, cusps: houses(system, frame).cusps })).filter(({ cusps }) =>
      cusps.some((cusp) => !(cusp >= 0 && cusp < 360)),
    );
    expect(outside).toEqual([]);
  });

  it("devrait rendre le système demandé, sans repli, à φ = 48,85°", () => {
    expect(houses(system, frameAt(48.85))).toMatchObject({ requested: system, used: system, fallback: null });
  });
});

describe("cuspides I et X", () => {
  it.each(["placidus", "porphyry", "equal"] as const)("devrait faire commencer la maison I à l'Ascendant — %s", (system) => {
    const misses = FRAMES_66.map((frame) => {
      const angles = computeAngles(frame);
      return { frame, gapDeg: angularGap(computeHouses(system, frame, angles).cusps[0], angles.ascendant) };
    }).filter(({ gapDeg }) => !isWithin(gapDeg, 1e-9));
    expect(misses).toEqual([]);
  });

  it.each(["placidus", "porphyry"] as const)("devrait faire commencer la maison X au Milieu du Ciel — %s", (system) => {
    const misses = FRAMES_66.map((frame) => {
      const angles = computeAngles(frame);
      return { frame, gapDeg: angularGap(computeHouses(system, frame, angles).cusps[9], angles.midheaven) };
    }).filter(({ gapDeg }) => !isWithin(gapDeg, 1e-9));
    expect(misses).toEqual([]);
  });
});

describe("systèmes à découpage fixe", () => {
  it("devrait espacer les maisons égales de 30° à partir de l'Ascendant (cuspide n = ASC + 30·(n − 1))", () => {
    const misses = FRAMES_66.map((frame) => {
      const angles = computeAngles(frame);
      const { cusps } = computeHouses("equal", frame, angles);
      return { frame, gaps: cusps.map((cusp, i) => angularGap(cusp, angles.ascendant + 30 * i)) };
    }).filter(({ gaps }) => !gaps.every((gap) => isWithin(gap, 1e-9)));
    expect(misses).toEqual([]);
  });

  it("devrait ouvrir la maison I des signes entiers au début du signe de l'Ascendant (30·⌊ASC/30⌋)", () => {
    const misses = FRAMES_66.map((frame) => {
      const angles = computeAngles(frame);
      return { frame, cusp: computeHouses("wholeSign", frame, angles).cusps[0], ascendant: angles.ascendant };
    }).filter(({ cusp, ascendant }) => cusp !== 30 * Math.floor(ascendant / 30));
    expect(misses).toEqual([]);
  });

  it("devrait ouvrir chaque maison des signes entiers au début d'un signe, la X neuf signes après la I", () => {
    const misses = FRAMES_66.map((frame) => {
      const { cusps } = houses("wholeSign", frame);
      return { frame, gaps: cusps.map((cusp, i) => angularGap(cusp, cusps[0] + 30 * i)) };
    }).filter(({ gaps }) => !gaps.every((gap) => gap === 0));
    expect(misses).toEqual([]);
  });

  it("devrait diviser chaque quadrant de Porphyre en trois parts égales", () => {
    const misses = FRAMES_66.map((frame) => {
      const angles = computeAngles(frame);
      const { cusps } = computeHouses("porphyry", frame, angles);
      const upper = arcForward(angles.midheaven, angles.ascendant);
      const lower = arcForward(angles.ascendant, angles.imumCoeli);
      const gaps = [
        angularGap(cusps[10], angles.midheaven + upper / 3),
        angularGap(cusps[11], angles.midheaven + (2 * upper) / 3),
        angularGap(cusps[1], angles.ascendant + lower / 3),
        angularGap(cusps[2], angles.ascendant + (2 * lower) / 3),
      ];
      return { frame, gaps };
    }).filter(({ gaps }) => !gaps.every((gap) => isWithin(gap, 1e-9)));
    expect(misses).toEqual([]);
  });
});

describe("Placidus aux latitudes polaires", () => {
  it.each([66.01, -66.01, 80])("devrait se replier sur Porphyre à φ = %f° et dire pourquoi", (latitudeDeg) => {
    expect(houses("placidus", frameAt(latitudeDeg))).toMatchObject({
      requested: "placidus",
      used: "porphyry",
      fallback: { reason: "polar-latitude", latitudeDeg },
    });
  });

  it("devrait calculer, en repli, exactement les cuspides de Porphyre", () => {
    const frame = frameAt(70, 240);
    expect(houses("placidus", frame).cusps).toEqual(houses("porphyry", frame).cusps);
  });

  it("devrait garder Placidus à la limite exacte de 66°", () => {
    expect(houses("placidus", frameAt(66))).toMatchObject({ used: "placidus", fallback: null });
  });

  it.each(["equal", "wholeSign", "porphyry"] as const)("devrait calculer %s à 80° sans repli", (system) => {
    expect(houses(system, frameAt(80))).toMatchObject({ requested: system, used: system, fallback: null });
  });
});

describe("houseOf", () => {
  const EQUAL_FROM_10: HouseCusps = [10, 40, 70, 100, 130, 160, 190, 220, 250, 280, 310, 340];
  const ACROSS_ARIES: HouseCusps = [350, 20, 45, 75, 110, 140, 170, 200, 225, 255, 290, 320];

  it.each([
    [100, 4, "exactement sur la cuspide IV"],
    [10, 1, "exactement sur la cuspide I"],
    [99.999, 3, "juste avant la cuspide IV"],
    [9.999, 12, "juste avant la cuspide I"],
    [345, 12, "dans la maison XII, avant 0°"],
    [5, 12, "dans la maison XII, après 0°"],
  ])("devrait placer %f° en maison %i (%s) — maisons égales depuis 10°", (longitude, house) => {
    expect(houseOf(longitude, EQUAL_FROM_10)).toBe(house);
  });

  it.each([
    [355, 1],
    [0, 1],
    [19.999, 1],
    [20, 2],
    [349.999, 12],
    [320, 12],
  ])("devrait placer %f° en maison %i quand la maison I chevauche 0° Bélier", (longitude, house) => {
    expect(houseOf(longitude, ACROSS_ARIES)).toBe(house);
  });
});
