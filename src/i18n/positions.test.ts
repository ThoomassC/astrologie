// @vitest-environment node
import { describe, expect, it } from "vitest";
import { formatDegreeInSign, formatPosition } from "./positions";

/* Minutes d'arc : prime U+2032, écrite en échappement pour qu'on ne la confonde ni avec l'apostrophe ni avec U+2019. */
const PRIME = "\u2032";
/* Espace insécable U+00A0 entre la minute et le signe (décision du produit) : « 12°34′ » ne se sépare pas de son signe. */
const NBSP = "\u00a0";

describe("formatPosition", () => {
  it.each([
    [29.9999, `29°59${PRIME}${NBSP}Bélier`],
    [0, `0°00${PRIME}${NBSP}Bélier`],
    [359.99, `29°59${PRIME}${NBSP}Poissons`],
    [102.0655, `12°03${PRIME}${NBSP}Cancer`],
    [42.5, `12°30${PRIME}${NBSP}Taureau`],
  ])("devrait écrire %f° « %s »", (longitude, expected) => {
    expect(formatPosition(longitude)).toBe(expected);
  });

  // En double précision, 102,35 donne 12,349999999999994° dans le Cancer : tronqué tel quel, 12°20′.
  it.each([
    [12.35, `12°21${PRIME}${NBSP}Bélier`],
    [102.35, `12°21${PRIME}${NBSP}Cancer`],
    [42.55, `12°33${PRIME}${NBSP}Taureau`],
  ])("devrait tronquer %f° à la minute exacte malgré l'arrondi binaire : « %s »", (longitude, expected) => {
    expect(formatPosition(longitude)).toBe(expected);
  });

  it("devrait écrire 29°59′, jamais 30°00′, à un cheveu de la fin du signe (29,9999999999999°)", () => {
    expect(formatPosition(29.9999999999999)).toBe(`29°59${PRIME}${NBSP}Bélier`);
  });
});

describe("formatDegreeInSign", () => {
  it.each([
    [42.5, `12°30${PRIME}`],
    [29.9999, `29°59${PRIME}`],
    [0, `0°00${PRIME}`],
    [102.35, `12°21${PRIME}`],
  ])("devrait écrire %f° « %s »", (longitude, expected) => {
    expect(formatDegreeInSign(longitude)).toBe(expected);
  });
});
