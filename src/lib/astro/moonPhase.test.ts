// @vitest-environment node
import { describe, expect, it } from "vitest";
import { moonPhase } from "./moonPhase";

describe("moonPhase", () => {
  it.each([
    [0, 0, "new"],
    [100, 120, "new"],
    [0, 45, "waxingCrescent"],
    [0, 90, "firstQuarter"],
    [0, 135, "waxingGibbous"],
    [10, 190, "full"],
    [0, 225, "waningGibbous"],
    [0, 270, "lastQuarter"],
    [0, 315, "waningCrescent"],
    [350, 10, "new"],
    [0, 338, "new"],
  ] as const)("Soleil %d°, Lune %d° → %s", (sun, moon, phase) => {
    expect(moonPhase(sun, moon)).toBe(phase);
  });
});
