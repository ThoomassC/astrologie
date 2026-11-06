// @vitest-environment node
import { describe, expect, it } from "vitest";
import { PLANET_KEYS, SIGN_KEYS } from "@/lib/astro/keys";
import {
  ASPECT_ANCHORS,
  aspectPath,
  housePath,
  planetFromSlug,
  planetPath,
  PLANET_SLUGS,
  SECTION_PATHS,
  SIGN_SLUGS,
  signFromSlug,
  signPath,
} from "./routes";

/* Invariants des adresses : ils passent dès aujourd'hui et gardent les liens du site stables. */

const SLUG_TABLES = [
  ["SIGN_SLUGS", Object.values(SIGN_SLUGS)],
  ["PLANET_SLUGS", Object.values(PLANET_SLUGS)],
  ["ASPECT_ANCHORS", Object.values(ASPECT_ANCHORS)],
  ["SECTION_PATHS", Object.values(SECTION_PATHS)],
] as const;

describe("unicité et forme des adresses", () => {
  it.each(SLUG_TABLES)("devrait donner des valeurs toutes différentes dans %s", (_name, values) => {
    expect(new Set(values).size).toBe(values.length);
  });

  it.each(SLUG_TABLES.slice(0, 3))("devrait écrire les valeurs de %s en minuscules ASCII et tirets", (_name, values) => {
    expect(values.filter((slug) => !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug))).toEqual([]);
  });
});

describe("aller-retour entre clés et slugs", () => {
  it.each(SIGN_KEYS)("devrait retrouver le signe %s à partir de son slug", (sign) => {
    expect(signFromSlug(SIGN_SLUGS[sign])).toBe(sign);
  });

  it.each(PLANET_KEYS)("devrait retrouver l'astre %s à partir de son slug", (planet) => {
    expect(planetFromSlug(PLANET_SLUGS[planet])).toBe(planet);
  });

  it.each(["ophiuchus", "", "Belier", "bélier"])("devrait répondre null au slug de signe inconnu « %s »", (slug) => {
    expect(signFromSlug(slug)).toBeNull();
  });

  it.each(["vulcain", "", "Soleil", "terre"])("devrait répondre null au slug d'astre inconnu « %s »", (slug) => {
    expect(planetFromSlug(slug)).toBeNull();
  });
});

describe("chemins", () => {
  it.each([
    [signPath("aries"), "/signes/belier"],
    [planetPath("sun"), "/planetes/soleil"],
    [housePath(4), "/maisons#maison-4"],
    [aspectPath("square"), "/aspects#carre"],
  ])("devrait construire %s", (path, expected) => {
    expect(path).toBe(expected);
  });
});
