// @vitest-environment node
import { describe, expect, it } from "vitest";
import { CENTER, screenAngle, svgNumber, toXY } from "./geometry";

describe("géométrie de la roue", () => {
  it("devrait poser la longitude de gauche à 9 h", () => {
    expect(toXY(0, 100, 0)).toEqual({ x: CENTER - 100, y: CENTER });
    expect(toXY(123.4, 100, 123.4)).toEqual({ x: CENTER - 100, y: CENTER });
  });

  it("devrait tourner dans le sens inverse des aiguilles d'une montre : +90° vers le bas, +270° en haut", () => {
    expect(toXY(90, 100, 0)).toEqual({ x: CENTER, y: CENTER + 100 });
    expect(toXY(270, 100, 0)).toEqual({ x: CENTER, y: CENTER - 100 });
    expect(screenAngle(180, 0)).toBe(360);
  });

  it("devrait arrondir à deux décimales", () => {
    expect(svgNumber(1.23456)).toBe(1.23);
    expect(svgNumber(-0.004)).toBe(-0);
  });
});
