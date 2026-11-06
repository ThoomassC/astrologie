// @vitest-environment node
import { describe, expect, it } from "vitest";
import type { Aspect } from "./aspects";
import { type BirthFormValues, parseBirthInput, type ValidBirthInput } from "./birthInput";
import { computeNatalChart } from "./chart";
import { houseOf } from "./houses";
import { CHART_POINT_KEYS } from "./keys";
import { eclipticToHorizontalAt } from "./testing/oracles";

/** Paris, 3 juillet 2024, 14 h 30 (12:30Z), Placidus. */
const PARIS: BirthFormValues = {
  date: "2024-07-03",
  time: "14:30",
  timeUnknown: false,
  place: { kind: "city", cityKey: "paris" },
  utcOffsetOverride: "",
  ambiguity: null,
  houseSystem: "placidus",
};

/** Une entrée validée ne s'obtient que par le parseur : un formulaire de test refusé est une erreur du test. */
function birth(overrides: Partial<BirthFormValues> = {}): ValidBirthInput {
  const result = parseBirthInput({ ...PARIS, ...overrides });
  if (!result.ok) throw new Error(`Formulaire de test refusé : ${JSON.stringify(result.errors)}`);
  return result.value;
}

const unknownTime = (date: string) => birth({ date, time: "", timeUnknown: true });

/** Clé en `string` : le type d'Aspect exclut déjà le nœud, mais un `as` dans le code suffirait à l'y faire entrer. */
const involves = (aspect: Aspect, ...keys: readonly string[]) => keys.includes(aspect.a) || keys.includes(aspect.b);

describe("computeNatalChart — heure inconnue", () => {
  it("devrait marquer incertain le signe de la Lune le 2 juillet 2024 (Taureau à 00:00, Gémeaux à 23:59)", () => {
    expect(computeNatalChart(unknownTime("2024-07-02")).positions.moon.signUncertain).toBe(true);
  });

  it("devrait marquer aussi Mercure incertain ce jour-là (Cancer à 00:00, Lion à 23:59)", () => {
    expect(computeNatalChart(unknownTime("2024-07-02")).positions.mercury.signUncertain).toBe(true);
  });

  it("devrait laisser certain le signe du Soleil ce jour-là (Cancer toute la journée)", () => {
    expect(computeNatalChart(unknownTime("2024-07-02")).positions.sun.signUncertain).toBe(false);
  });

  it("devrait laisser tous les signes certains le 3 juillet 2024", () => {
    const { positions } = computeNatalChart(unknownTime("2024-07-03"));
    expect(CHART_POINT_KEYS.filter((key) => positions[key].signUncertain)).toEqual([]);
  });

  it("devrait renoncer aux angles et aux maisons", () => {
    expect(computeNatalChart(unknownTime("2024-07-03"))).toMatchObject({ angles: null, houses: null });
  });

  it("devrait laisser chaque point sans maison", () => {
    const { positions } = computeNatalChart(unknownTime("2024-07-03"));
    expect(CHART_POINT_KEYS.filter((key) => positions[key].house !== null)).toEqual([]);
  });

  it("devrait laisser le RAMC indéterminé", () => {
    expect(computeNatalChart(unknownTime("2024-07-03")).frame.ramcDeg).toBeNull();
  });

  it("devrait tenir l'Ascendant et le Milieu du Ciel hors des aspects", () => {
    const { aspects } = computeNatalChart(unknownTime("2024-07-03"));
    expect(aspects.filter((aspect) => involves(aspect, "ascendant", "midheaven"))).toEqual([]);
  });
});

describe("computeNatalChart — heure connue (Paris, 3 juillet 2024, 14 h 30)", () => {
  it("devrait calculer les angles et les maisons du système demandé", () => {
    const anyLongitude = expect.any(Number);
    expect(computeNatalChart(birth())).toMatchObject({
      angles: { ascendant: anyLongitude, midheaven: anyLongitude, descendant: anyLongitude, imumCoeli: anyLongitude },
      houses: { requested: "placidus", used: "placidus", fallback: null },
    });
  });

  it("devrait placer l'Ascendant sur l'horizon est de Paris à l'instant de la naissance", () => {
    const chart = computeNatalChart(birth());
    const { input } = chart;
    const ascendant = chart.angles?.ascendant ?? Number.NaN;
    const horizon = eclipticToHorizontalAt(ascendant, input.utcMs, input.latitude, input.longitude);
    expect(Math.abs(horizon.altitudeDeg)).toBeLessThan(1e-6);
    expect(horizon.azimuthDeg > 0 && horizon.azimuthDeg < 180).toBe(true);
  });

  it("devrait placer chacun des onze points dans une maison", () => {
    const { positions } = computeNatalChart(birth());
    expect(CHART_POINT_KEYS.filter((key) => positions[key].house === null)).toEqual([]);
  });

  it("devrait placer chaque point dans la maison que donnent les cuspides", () => {
    const { positions, houses } = computeNatalChart(birth());
    const cusps = houses?.cusps;
    const misplaced = CHART_POINT_KEYS.filter(
      (key) => cusps === undefined || positions[key].house !== houseOf(positions[key].longitude, cusps),
    );
    expect(misplaced).toEqual([]);
  });

  it("devrait placer le Soleil à 12° du Cancer", () => {
    expect(computeNatalChart(birth()).positions.sun).toMatchObject({
      sign: "cancer",
      degreeInSign: expect.closeTo(12.0655, 2),
    });
  });

  it("devrait laisser tous les signes certains", () => {
    const { positions } = computeNatalChart(birth());
    expect(CHART_POINT_KEYS.filter((key) => positions[key].signUncertain)).toEqual([]);
  });

  it("devrait compter les dix astres par élément : 1 feu, 2 terre, 3 air, 4 eau ; l'eau domine", () => {
    expect(computeNatalChart(birth()).balance).toMatchObject({
      elements: { fire: 1, earth: 2, air: 3, water: 4 },
      dominantElements: ["water"],
    });
  });

  it("devrait déclarer ex aequo les modalités fixe et mutable (4 chacune), dans l'ordre des clés", () => {
    expect(computeNatalChart(birth()).balance).toMatchObject({
      modalities: { cardinal: 2, fixed: 4, mutable: 4 },
      dominantModalities: ["fixed", "mutable"],
    });
  });

  it("devrait tenir le nœud hors des aspects", () => {
    const { aspects } = computeNatalChart(birth());
    expect(aspects.filter((aspect) => involves(aspect, "northNode"))).toEqual([]);
  });
});

describe("computeNatalChart — latitude polaire (Tromsø, 15 janvier 2024, 10:00)", () => {
  const tromso = () =>
    birth({
      date: "2024-01-15",
      time: "10:00",
      place: { kind: "manual", latitude: "69,6492", longitude: "18,9553", timeZone: "Europe/Oslo" },
    });

  it("devrait se replier de Placidus sur Porphyre et dire pourquoi", () => {
    expect(computeNatalChart(tromso()).houses).toMatchObject({
      requested: "placidus",
      used: "porphyry",
      fallback: { reason: "polar-latitude", latitudeDeg: 69.6492 },
    });
  });

  // À cet instant, la formule usuelle de l'Ascendant rend le point ouest (azimut 257°).
  it("devrait garder l'Ascendant sur l'horizon est", () => {
    const chart = computeNatalChart(tromso());
    const ascendant = chart.angles?.ascendant ?? Number.NaN;
    const horizon = eclipticToHorizontalAt(ascendant, chart.input.utcMs, chart.input.latitude, chart.input.longitude);
    expect(horizon.azimuthDeg > 0 && horizon.azimuthDeg < 180).toBe(true);
  });
});

describe("aspects du thème, couple des angles", () => {
  it("ne devrait jamais compter l'Ascendant et le Milieu du Ciel comme un aspect entre eux", () => {
    const parsed = parseBirthInput({
      date: "2024-07-03",
      time: "14:30",
      timeUnknown: false,
      place: { kind: "city", cityKey: "paris" },
      utcOffsetOverride: "",
      ambiguity: null,
      houseSystem: "placidus",
    });
    if (!parsed.ok) throw new Error("saisie de référence refusée");
    const chart = computeNatalChart(parsed.value);
    const angles = new Set(["ascendant", "midheaven"]);
    expect(chart.aspects.some((aspect) => angles.has(aspect.a) && angles.has(aspect.b))).toBe(false);
    expect(chart.aspects.some((aspect) => angles.has(aspect.a) || angles.has(aspect.b))).toBe(true);
  });
});
