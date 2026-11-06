// @vitest-environment node
import { describe, expect, it } from "vitest";
import { computeAngles } from "./angles";
import { angularGap, eclipticToEquatorial, eclipticToHorizontal, isWithin, sampleSkyFrames } from "./testing/oracles";

const OBLIQUITY_J2000 = 23.4392911;

/** 400 cieux tirés une fois pour toutes (graine fixe) : latitudes jusqu'à ±89,9°, obliquité de 22° à 25°. */
const FRAMES = sampleSkyFrames({ seed: 1987, count: 400, maxAbsLatitudeDeg: 89.9, obliquityDeg: [22, 25] });

describe("computeAngles — repères", () => {
  it.each([
    { ramcDeg: 0, latitudeDeg: 0, ascendant: 90 },
    { ramcDeg: 0, latitudeDeg: 45, ascendant: 111.6915 },
    { ramcDeg: 90, latitudeDeg: 45, ascendant: 180 },
    { ramcDeg: 180, latitudeDeg: 0, ascendant: 270 },
    { ramcDeg: 270, latitudeDeg: 48.85, ascendant: 0 },
  ])(
    "devrait placer l'Ascendant à $ascendant° pour RAMC $ramcDeg° et φ $latitudeDeg°",
    ({ ramcDeg, latitudeDeg, ascendant }) => {
      const angles = computeAngles({ ramcDeg, latitudeDeg, obliquityDeg: OBLIQUITY_J2000 });
      expect(Math.abs(angularGap(angles.ascendant, ascendant))).toBeLessThan(1e-4);
    },
  );

  it.each([
    { ramcDeg: 0, latitudeDeg: 0, midheaven: 0 },
    { ramcDeg: 90, latitudeDeg: 45, midheaven: 90 },
    { ramcDeg: 180, latitudeDeg: 0, midheaven: 180 },
    { ramcDeg: 270, latitudeDeg: 48.85, midheaven: 270 },
  ])(
    "devrait placer le Milieu du Ciel à $midheaven° pour RAMC $ramcDeg° et φ $latitudeDeg°",
    ({ ramcDeg, latitudeDeg, midheaven }) => {
      const angles = computeAngles({ ramcDeg, latitudeDeg, obliquityDeg: OBLIQUITY_J2000 });
      expect(Math.abs(angularGap(angles.midheaven, midheaven))).toBeLessThan(1e-4);
    },
  );

  // Au-delà du cercle polaire, la formule usuelle atan2(cos θ, −(sin θ cos ε + tan φ sin ε)) rend ici le point ouest.
  it.each([
    { ramcDeg: 240, latitudeDeg: 70, ascendant: 59.177925 },
    { ramcDeg: 210, latitudeDeg: 80, ascendant: 25.728678 },
    { ramcDeg: 45, latitudeDeg: -75, ascendant: 220.233143 },
  ])(
    "devrait prendre le point est de l'horizon là où la formule usuelle prend l'ouest (φ $latitudeDeg°, RAMC $ramcDeg°)",
    ({ ramcDeg, latitudeDeg, ascendant }) => {
      const angles = computeAngles({ ramcDeg, latitudeDeg, obliquityDeg: OBLIQUITY_J2000 });
      expect(Math.abs(angularGap(angles.ascendant, ascendant))).toBeLessThan(1e-4);
    },
  );
});

describe("computeAngles — définition, sur 400 cieux tirés au hasard", () => {
  it("devrait placer l'Ascendant sur l'horizon (|altitude| < 1e-6°)", () => {
    const offHorizon = FRAMES.map((frame) => ({
      frame,
      altitudeDeg: eclipticToHorizontal(computeAngles(frame).ascendant, frame).altitudeDeg,
    })).filter(({ altitudeDeg }) => !isWithin(altitudeDeg, 1e-6));
    expect(offHorizon).toEqual([]);
  });

  it("devrait placer l'Ascendant du côté est de l'horizon (azimut dans ]0°, 180°[)", () => {
    const westward = FRAMES.map((frame) => ({
      frame,
      azimuthDeg: eclipticToHorizontal(computeAngles(frame).ascendant, frame).azimuthDeg,
    })).filter(({ azimuthDeg }) => !(azimuthDeg > 0 && azimuthDeg < 180));
    expect(westward).toEqual([]);
  });

  it("devrait donner au Milieu du Ciel une ascension droite égale au RAMC", () => {
    const misses = FRAMES.map((frame) => ({
      frame,
      gapDeg: angularGap(
        eclipticToEquatorial(computeAngles(frame).midheaven, frame.obliquityDeg).rightAscensionDeg,
        frame.ramcDeg,
      ),
    })).filter(({ gapDeg }) => !isWithin(gapDeg, 1e-9));
    expect(misses).toEqual([]);
  });

  it("devrait placer le Descendant à 180° de l'Ascendant", () => {
    const misses = FRAMES.map((frame) => {
      const { ascendant, descendant } = computeAngles(frame);
      return { frame, gapDeg: angularGap(descendant, ascendant + 180) };
    }).filter(({ gapDeg }) => !isWithin(gapDeg, 1e-9));
    expect(misses).toEqual([]);
  });

  it("devrait placer le Fond du Ciel à 180° du Milieu du Ciel", () => {
    const misses = FRAMES.map((frame) => {
      const { midheaven, imumCoeli } = computeAngles(frame);
      return { frame, gapDeg: angularGap(imumCoeli, midheaven + 180) };
    }).filter(({ gapDeg }) => !isWithin(gapDeg, 1e-9));
    expect(misses).toEqual([]);
  });

  it("devrait rendre les quatre angles dans [0, 360)", () => {
    const outside = FRAMES.map((frame) => ({ frame, angles: computeAngles(frame) })).filter(({ angles }) =>
      Object.values(angles).some((longitude) => !(longitude >= 0 && longitude < 360)),
    );
    expect(outside).toEqual([]);
  });
});
