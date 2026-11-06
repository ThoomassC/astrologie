// @vitest-environment node
import { describe, expect, it } from "vitest";
import { isLocale, LOCALES } from "@/i18n/locales";
import { PLANET_KEYS, SIGN_KEYS } from "@/lib/astro/keys";
import {
  ASPECT_ANCHORS,
  aspectPath,
  housePath,
  lexiconPath,
  negotiatedPath,
  planetFromSlug,
  planetPath,
  PLANET_SLUGS,
  SECTION_SEGMENTS,
  sectionPath,
  SIGN_SLUGS,
  signFromSlug,
  signPath,
  switchLocale,
} from "./routes";

/* Invariants des adresses : ils gardent les liens du site stables, dans les deux langues. */

const SLUG_TABLES = [
  ["SIGN_SLUGS", Object.values(SIGN_SLUGS)],
  ["PLANET_SLUGS", Object.values(PLANET_SLUGS)],
  ["ASPECT_ANCHORS", Object.values(ASPECT_ANCHORS)],
  ["SECTION_SEGMENTS", Object.values(SECTION_SEGMENTS)],
] as const;

describe("unicité et forme des adresses", () => {
  it.each(SLUG_TABLES)("devrait donner des valeurs toutes différentes dans %s", (_name, values) => {
    expect(new Set(values).size).toBe(values.length);
  });

  it.each(SLUG_TABLES.slice(0, 3))("devrait écrire les valeurs de %s en minuscules ASCII et tirets", (_name, values) => {
    expect(values.filter((slug) => !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug))).toEqual([]);
  });

  it.each(Object.values(SECTION_SEGMENTS))(
    "ne devrait jamais prendre un code de langue pour segment (« %s ») : le proxy lit la langue au premier segment",
    (segment) => {
      expect(isLocale(segment)).toBe(false);
    },
  );
});

describe("aller-retour entre clés et slugs", () => {
  it.each(SIGN_KEYS)("devrait retrouver le signe %s à partir de son slug", (sign) => {
    expect(signFromSlug(SIGN_SLUGS[sign])).toBe(sign);
  });

  it.each(PLANET_KEYS)("devrait retrouver l'astre %s à partir de son slug", (planet) => {
    expect(planetFromSlug(PLANET_SLUGS[planet])).toBe(planet);
  });

  it.each(["ophiuchus", "", "Belier", "bélier", "aries"])("devrait répondre null au slug de signe inconnu « %s »", (slug) => {
    expect(signFromSlug(slug)).toBeNull();
  });

  it.each(["vulcain", "", "Soleil", "terre", "sun"])("devrait répondre null au slug d'astre inconnu « %s »", (slug) => {
    expect(planetFromSlug(slug)).toBeNull();
  });
});

describe("chemins", () => {
  it.each([
    [sectionPath("home", "fr"), "/fr"],
    [sectionPath("home", "en"), "/en"],
    [sectionPath("natal", "en"), "/en/theme-natal"],
    [signPath("aries", "fr"), "/fr/signes/belier"],
    [signPath("aries", "en"), "/en/signes/belier"],
    [planetPath("sun", "en"), "/en/planetes/soleil"],
    [housePath(4, "fr"), "/fr/maisons#maison-4"],
    [aspectPath("square", "en"), "/en/aspects#carre"],
    [lexiconPath("orbe", "en"), "/en/lexique#orbe"],
  ])("devrait construire %s", (path, expected) => {
    expect(path).toBe(expected);
  });

  it.each(LOCALES)("devrait garder les mêmes segments dans chaque langue (%s)", (locale) => {
    expect(signPath("leo", locale)).toBe(`/${locale}/signes/lion`);
  });
});

describe("negotiatedPath", () => {
  it.each([
    ["/fr", "/"],
    ["/en/signes/belier", "/signes/belier"],
    ["/fr/maisons", "/maisons"],
    ["/signes", "/signes"],
  ])("devrait retirer la langue de « %s » (« %s »), que le proxy négocie", (path, expected) => {
    expect(negotiatedPath(path)).toBe(expected);
  });
});

describe("switchLocale", () => {
  it.each([
    ["/fr/signes/belier", "en", "/en/signes/belier"],
    ["/en", "fr", "/fr"],
    ["/fr/", "en", "/en/"],
    ["/en/theme-natal", "fr", "/fr/theme-natal"],
    ["/", "en", "/en"],
    ["/signes", "en", "/en/signes"],
  ] as const)("devrait passer « %s » en %s (« %s ») en gardant le reste du chemin", (pathname, locale, expected) => {
    expect(switchLocale(pathname, locale)).toBe(expected);
  });
});
