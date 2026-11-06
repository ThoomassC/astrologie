// @vitest-environment node
import { describe, expect, it } from "vitest";
import { sunPassages } from "./constellationPassages";
import { ZODIAC_CONSTELLATION_KEYS, type ZodiacConstellationKey } from "./keys";

const DAY_MS = 86_400_000;

/** Midi UTC d'une date : la tolérance d'un jour couvre alors toute la journée annoncée. */
const noon = (year: number, month: number, day: number) => Date.UTC(year, month - 1, day, 12);

function passageIn(year: number, constellation: ZodiacConstellationKey) {
  const found = sunPassages(year).find((passage) => passage.constellation === constellation);
  if (!found) throw new Error(`Aucun passage du Soleil dans ${constellation} en ${year}.`);
  return found;
}

describe("sunPassages(2026)", () => {
  it("devrait compter 13 passages", () => {
    expect(sunPassages(2026)).toHaveLength(13);
  });

  it("devrait passer une fois par chacune des 13 constellations, Ophiuchus comprise", () => {
    expect(sunPassages(2026).map(({ constellation }) => constellation).sort()).toEqual([...ZODIAC_CONSTELLATION_KEYS].sort());
  });

  it("devrait enchaîner les passages sans trou ni chevauchement (fin de l'un = début du suivant)", () => {
    const passages = sunPassages(2026);
    expect(passages.slice(1).map(({ startUtcMs }) => startUtcMs)).toEqual(passages.slice(0, -1).map(({ endUtcMs }) => endUtcMs));
  });

  it("devrait finir chaque passage après son début", () => {
    expect(sunPassages(2026).filter(({ startUtcMs, endUtcMs }) => !(endUtcMs > startUtcMs))).toEqual([]);
  });

  it("devrait faire commencer chaque passage pendant l'année 2026 (UTC)", () => {
    const outside = sunPassages(2026).filter(
      ({ startUtcMs }) => !(startUtcMs >= Date.UTC(2026, 0, 1) && startUtcMs < Date.UTC(2027, 0, 1)),
    );
    expect(outside).toEqual([]);
  });

  it("devrait mettre le Soleil dans Ophiuchus à partir du 30 novembre 2026 (±1 j)", () => {
    expect(Math.abs(passageIn(2026, "Oph").startUtcMs - noon(2026, 11, 30))).toBeLessThanOrEqual(DAY_MS);
  });

  it("devrait faire sortir le Soleil d'Ophiuchus le 18 décembre 2026 (±1 j)", () => {
    expect(Math.abs(passageIn(2026, "Oph").endUtcMs - noon(2026, 12, 18))).toBeLessThanOrEqual(DAY_MS);
  });

  it("devrait mettre le Soleil dans le Bélier à partir du 19 avril 2026 (±1 j)", () => {
    expect(Math.abs(passageIn(2026, "Ari").startUtcMs - noon(2026, 4, 19))).toBeLessThanOrEqual(DAY_MS);
  });

  it("devrait faire sortir le Soleil du Bélier le 14 mai 2026 (±1 j)", () => {
    expect(Math.abs(passageIn(2026, "Ari").endUtcMs - noon(2026, 5, 14))).toBeLessThanOrEqual(DAY_MS);
  });
});
