// @vitest-environment node
import { describe, expect, it } from "vitest";
import { type Aspect, type AspectPoint, findAspects } from "./aspects";
import type { AspectPointKey } from "./keys";

const point = (key: AspectPointKey, longitude: number, speedDegPerDay: number | null = 0): AspectPoint => ({
  key,
  longitude,
  speedDegPerDay,
});

/** Couple sans ordre, pour ne pas dépendre de qui est `a` et qui est `b`. */
const pairOf = ({ a, b }: Aspect) => [a, b].sort().join("–");

describe("findAspects — orbes", () => {
  it("devrait retenir une conjonction Soleil–Lune à 9,5° grâce au bonus des luminaires (8° + 2°)", () => {
    expect(findAspects([point("sun", 100), point("moon", 109.5)])).toEqual([
      expect.objectContaining({ key: "conjunction", separation: expect.closeTo(9.5, 9), orb: expect.closeTo(9.5, 9), maxOrb: 10 }),
    ]);
  });

  it("devrait accorder le bonus dès qu'un seul luminaire y prend part (Lune–Mars à 9,5°)", () => {
    expect(findAspects([point("moon", 100), point("mars", 109.5)])).toEqual([
      expect.objectContaining({ key: "conjunction", maxOrb: 10 }),
    ]);
  });

  it("devrait ignorer Mars–Saturne à 9,5° (orbe de conjonction : 8°)", () => {
    expect(findAspects([point("mars", 100), point("saturn", 109.5)])).toEqual([]);
  });

  it("devrait refuser le bonus des luminaires à l'Ascendant (Ascendant–Mars à 9,5°)", () => {
    expect(findAspects([point("ascendant", 100, null), point("mars", 109.5)])).toEqual([]);
  });

  it("devrait retenir un carré Mars–Saturne d'orbe 2° à 92°", () => {
    expect(findAspects([point("mars", 10), point("saturn", 102)])).toEqual([
      expect.objectContaining({ key: "square", separation: expect.closeTo(92, 9), orb: expect.closeTo(2, 9), maxOrb: 7 }),
    ]);
  });

  it("devrait retenir un aspect dont l'orbe égale exactement l'orbe toléré (carré à 97°, orbe 7°)", () => {
    expect(findAspects([point("mars", 0), point("saturn", 97)])).toEqual([expect.objectContaining({ key: "square", orb: 7 })]);
  });

  it("devrait écarter un aspect juste au-delà de l'orbe toléré (carré à 97,01°)", () => {
    expect(findAspects([point("mars", 0), point("saturn", 97.01)])).toEqual([]);
  });

  it("devrait mesurer l'écart par le plus court chemin, à travers 0° Bélier (358° et 2°)", () => {
    expect(findAspects([point("mars", 358), point("saturn", 2)])).toEqual([
      expect.objectContaining({ key: "conjunction", separation: expect.closeTo(4, 9), orb: expect.closeTo(4, 9) }),
    ]);
  });
});

describe("findAspects — couples et tri", () => {
  it.each<[readonly AspectPoint[]]>([[[]], [[point("sun", 0)]]])("devrait ne rien trouver avec %j", (points) => {
    expect(findAspects(points)).toEqual([]);
  });

  it("devrait produire un seul aspect par couple, quel que soit l'ordre des points", () => {
    const aspects = findAspects([point("sun", 0), point("moon", 0.5), point("mercury", 1)]);
    expect(aspects.map(pairOf).sort()).toEqual(["mercury–moon", "mercury–sun", "moon–sun"]);
  });

  it("devrait trier les aspects par orbe croissant", () => {
    const aspects = findAspects([point("sun", 0), point("mars", 93), point("jupiter", 179)]);
    expect(aspects.map(({ key, orb }) => ({ key, orb }))).toEqual([
      { key: "opposition", orb: expect.closeTo(1, 9) },
      { key: "square", orb: expect.closeTo(3, 9) },
      { key: "square", orb: expect.closeTo(4, 9) },
    ]);
  });
});

describe("findAspects — familles", () => {
  it("devrait retenir un semi-carré (aspect mineur) sans filtre de famille", () => {
    expect(findAspects([point("mars", 0), point("saturn", 45)])).toEqual([expect.objectContaining({ key: "semiSquare" })]);
  });

  it("devrait écarter le semi-carré avec families: [\"major\"]", () => {
    expect(findAspects([point("mars", 0), point("saturn", 45)], ["major"])).toEqual([]);
  });

  it("devrait écarter le carré avec families: [\"minor\"]", () => {
    expect(findAspects([point("mars", 0), point("saturn", 90)], ["minor"])).toEqual([]);
  });
});

describe("findAspects — aspect appliquant ou séparant", () => {
  // Libellé en %s : l'interpolation $label tronque à 40 caractères, et le nom doit dire seul ce qui a régressé.
  it.each([
    ["appliquante une conjonction qui se resserre (A à 10°, v = 1 ; B à 15°, v = 0)", [10, 1], [15, 0], true],
    ["séparante une conjonction qui se défait (A à 15°, v = 1 ; B à 10°, v = 0)", [15, 1], [10, 0], false],
    ["appliquant un carré dont l'écart descend vers 90° (A à 0°, v = 1 ; B à 92°, v = 0)", [0, 1], [92, 0], true],
    ["séparant le même carré quand A recule (A à 0°, v = −1 ; B à 92°, v = 0)", [0, -1], [92, 0], false],
  ] as const)("devrait dire %s", (_label, a, b, applying) => {
    const [aspect] = findAspects([point("mars", a[0], a[1]), point("saturn", b[0], b[1])]);
    expect(aspect).toMatchObject({ applying });
  });

  it("devrait rendre applying null quand une vitesse manque (Ascendant)", () => {
    expect(findAspects([point("ascendant", 10, null), point("mars", 15, 1)])).toEqual([
      expect.objectContaining({ key: "conjunction", applying: null }),
    ]);
  });
});
