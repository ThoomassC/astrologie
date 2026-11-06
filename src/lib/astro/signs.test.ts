// @vitest-environment node
import { describe, expect, it } from "vitest";
import { CLASSICAL_PLANET_KEYS, ELEMENT_KEYS, MODALITY_KEYS, SIGN_KEYS } from "./keys";
import { detriment, domiciles, fall, SIGNS, signsOfElement, signsOfModality } from "./signs";

/* Invariants des données des signes : ils passent dès aujourd'hui et gardent les tables cohérentes. */

const OPPOSITES = SIGN_KEYS.map((sign, index) => [sign, SIGN_KEYS[(index + 6) % 12]] as const);

describe("exil (detriment)", () => {
  it.each(OPPOSITES)("devrait mettre en exil, en %s, les maîtres du signe opposé (%s)", (sign, opposite) => {
    expect(detriment(sign)).toEqual(SIGNS[opposite].rulers);
  });

  it.each([
    ["aries", "venus"],
    ["taurus", "mars"],
    ["gemini", "jupiter"],
    ["cancer", "saturn"],
    ["leo", "saturn"],
    ["virgo", "jupiter"],
    ["libra", "mars"],
    ["scorpio", "venus"],
    ["sagittarius", "mercury"],
    ["capricorn", "moon"],
    ["aquarius", "sun"],
    ["pisces", "mercury"],
  ] as const)("devrait suivre la tradition : en %s, %s est en exil", (sign, planet) => {
    expect(detriment(sign).traditional).toBe(planet);
  });
});

describe("chute (fall)", () => {
  it.each(OPPOSITES)("devrait mettre en chute, en %s, l'astre exalté dans le signe opposé (%s)", (sign, opposite) => {
    expect(fall(sign)).toBe(SIGNS[opposite].exaltation?.planet ?? null);
  });

  it.each([
    ["aries", "saturn"],
    ["taurus", null],
    ["gemini", null],
    ["cancer", "mars"],
    ["leo", null],
    ["virgo", "venus"],
    ["libra", "sun"],
    ["scorpio", "moon"],
    ["sagittarius", null],
    ["capricorn", "jupiter"],
    ["aquarius", null],
    ["pisces", "mercury"],
  ] as const)("devrait suivre la tradition : en %s, la chute est %s", (sign, planet) => {
    expect(fall(sign)).toBe(planet);
  });
});

describe("éléments et modalités", () => {
  it.each(ELEMENT_KEYS)("devrait compter 3 signes de l'élément %s", (element) => {
    expect(signsOfElement(element)).toHaveLength(3);
  });

  it.each(MODALITY_KEYS)("devrait compter 4 signes de la modalité %s", (modality) => {
    expect(signsOfModality(modality)).toHaveLength(4);
  });

  it.each([
    ["fire", ["aries", "leo", "sagittarius"]],
    ["earth", ["taurus", "virgo", "capricorn"]],
    ["air", ["gemini", "libra", "aquarius"]],
    ["water", ["cancer", "scorpio", "pisces"]],
  ] as const)("devrait ranger dans l'élément %s les signes %j", (element, signs) => {
    expect(signsOfElement(element)).toEqual(signs);
  });

  it.each([
    ["cardinal", ["aries", "cancer", "libra", "capricorn"]],
    ["fixed", ["taurus", "leo", "scorpio", "aquarius"]],
    ["mutable", ["gemini", "virgo", "sagittarius", "pisces"]],
  ] as const)("devrait ranger dans la modalité %s les signes %j", (modality, signs) => {
    expect(signsOfModality(modality)).toEqual(signs);
  });
});

describe("faces des décans", () => {
  it("devrait suivre l'ordre chaldéen en cycle de 7 sur les 36 décans, de Mars (Bélier I) à Mars (Poissons III)", () => {
    const faces = SIGN_KEYS.flatMap((sign) => SIGNS[sign].decans.map(({ faceRuler }) => faceRuler));
    expect(faces).toEqual([
      ...["mars", "sun", "venus"],
      ...["mercury", "moon", "saturn"],
      ...["jupiter", "mars", "sun"],
      ...["venus", "mercury", "moon"],
      ...["saturn", "jupiter", "mars"],
      ...["sun", "venus", "mercury"],
      ...["moon", "saturn", "jupiter"],
      ...["mars", "sun", "venus"],
      ...["mercury", "moon", "saturn"],
      ...["jupiter", "mars", "sun"],
      ...["venus", "mercury", "moon"],
      ...["saturn", "jupiter", "mars"],
    ]);
  });

  it("devrait commencer les décans à 0°, 10° et 20° de chaque signe", () => {
    const starts = SIGN_KEYS.map((sign) => SIGNS[sign].decans.map(({ startDeg }) => startDeg));
    expect(starts).toEqual(SIGN_KEYS.map(() => [0, 10, 20]));
  });
});

describe("domiciles traditionnels", () => {
  it.each([
    ["sun", ["leo"]],
    ["moon", ["cancer"]],
    ["mercury", ["gemini", "virgo"]],
    ["venus", ["taurus", "libra"]],
    ["mars", ["aries", "scorpio"]],
    ["jupiter", ["sagittarius", "pisces"]],
    ["saturn", ["capricorn", "aquarius"]],
  ] as const)("devrait donner à %s les domiciles %j", (planet, signs) => {
    expect(domiciles(planet).traditional).toEqual(signs);
  });

  it.each(CLASSICAL_PLANET_KEYS)("devrait donner à %s un ou deux domiciles traditionnels", (planet) => {
    expect([1, 2]).toContain(domiciles(planet).traditional.length);
  });
});
