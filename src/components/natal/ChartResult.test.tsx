import { createRef } from "react";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { POINT_NAMES, SIGN_NAMES } from "@/i18n/names";
import { formatPosition } from "@/i18n/positions";
import { type BirthFormValues, parseBirthInput } from "@/lib/astro/birthInput";
import { computeNatalChart } from "@/lib/astro/chart";
import { ChartResult } from "./ChartResult";
import { NATAL_STRINGS as S } from "./natal.strings";
import { READING_STRINGS as R } from "./reading.strings";

// Sans les globales de Vitest, Testing Library ne démonte pas seul les rendus entre deux tests.
afterEach(cleanup);

/** Paris, 3 juillet 2024, 14:30 : Soleil en Cancer, Lune en Gémeaux, Ascendant Balance, l'Eau dominante. */
const PARIS: BirthFormValues = {
  date: "2024-07-03",
  time: "14:30",
  timeUnknown: false,
  place: { kind: "city", cityKey: "paris" },
  utcOffsetOverride: "",
  ambiguity: null,
  houseSystem: "placidus",
};

function chartOf(overrides: Partial<BirthFormValues> = {}) {
  const parsed = parseBirthInput({ ...PARIS, ...overrides });
  if (!parsed.ok) throw new Error(`Saisie refusée : ${JSON.stringify(parsed.errors)}`);
  return computeNatalChart(parsed.value);
}

function show(overrides: Partial<BirthFormValues> = {}) {
  const chart = chartOf(overrides);
  const onEdit = vi.fn();
  render(<ChartResult chart={chart} titleRef={createRef()} onEdit={onEdit} />);
  return { chart, onEdit };
}

/**
 * Texte attendu sous la forme que lui donne Testing Library : getByText et toHaveTextContent ramènent les espaces
 * insécables (U+00A0, U+202F) du DOM à des espaces simples, pas celles de la chaîne attendue.
 */
const plain = (text: string) => text.replace(/\s+/g, " ").trim();

const section = (title: string) => {
  const heading = screen.getByRole("heading", { level: 3, name: title });
  const element = heading.parentElement;
  if (element === null) throw new Error(`section « ${title} » introuvable`);
  return element;
};
const notes = () => within(section(S.notesTitle)).getAllByRole("listitem").map((item) => item.textContent);

describe("ChartResult — heure connue", () => {
  it("devrait résumer le thème, lier chaque signe à sa fiche et rappeler que rien n'est gardé", () => {
    show();
    const summary = screen.getByText((_, element) => element?.tagName === "P" && /^Soleil en Cancer/.test(element.textContent ?? ""));
    expect(summary).toHaveTextContent("Soleil en Cancer, Lune en Gémeaux, Ascendant Balance.");
    expect(within(summary).getByRole("link", { name: "Cancer" })).toHaveAttribute("href", "/signes/cancer");
    expect(within(summary).getByRole("link", { name: "Balance" })).toHaveAttribute("href", "/signes/balance");
    expect(screen.getByText("3 juillet 2024 à 14:30, Paris (France)")).toBeInTheDocument();
    expect(screen.getByText(plain(S.notKept))).toBeInTheDocument();
  });

  it("devrait suivre l'ordre : lecture, roue, positions, aspects, répartition, maisons, notes", () => {
    show();
    expect(screen.getAllByRole("heading", { level: 3 }).map((heading) => heading.textContent)).toEqual([
      R.title,
      S.wheelTitle,
      S.positionsTitle,
      S.aspectsTitle,
      S.balanceTitle,
      S.housesTitle,
      S.notesTitle,
    ]);
  });

  it("devrait lire le Soleil, la Lune et l'Ascendant, et garder les huit autres astres dans les détails", () => {
    const { chart } = show();
    const reading = section(R.title);
    // Le contenu d'un <details> fermé est hors de l'arbre accessible : on le cherche dans le DOM.
    const [first] = within(reading).getAllByRole("list");
    const others = reading.querySelector("details ul");
    if (others === null) throw new Error("détails des autres astres introuvables");
    expect(first.children).toHaveLength(3);
    const house = chart.positions.sun.house;
    if (house === null) throw new Error("maison du Soleil attendue");
    const sun = R.sentence(POINT_NAMES.sun.the, R.planetDomain.sun, SIGN_NAMES.cancer.of, R.signManner.cancer, R.houseArea[house]);
    expect(within(first).getByText(plain(sun))).toBeInTheDocument();
    expect(within(first).getByText(plain(R.ascendantSentence(SIGN_NAMES.libra.of, R.signManner.libra)))).toBeInTheDocument();
    expect(others.closest("details")).not.toHaveAttribute("open");
    expect(others.children).toHaveLength(8);
    expect(within(reading).getByText(plain(R.caveat), { selector: "p" })).toBeInTheDocument();
  });

  it("devrait décrire la roue par le tableau des positions : onze points, maison, mouvement, lexique", () => {
    const { chart } = show();
    const table = screen.getByRole("table", { name: S.positionsTitle });
    expect(screen.getByRole("img", { name: S.wheelLabel(true) })).toHaveAttribute("aria-describedby", table.id);
    expect(within(table).getAllByRole("columnheader").map((cell) => cell.textContent)).toEqual([...S.positionHeaders]);
    expect(within(table).getByRole("link", { name: S.positionHeaders[3] })).toHaveAttribute("href", "/lexique#retrogradation");
    expect(within(table).getAllByRole("row")).toHaveLength(12);
    expect(section(S.positionsTitle)).toHaveTextContent(plain(S.positionsSummary(["Saturne", "Neptune", "Pluton"])));

    const sun = within(table).getByRole("row", { name: new RegExp(`^${POINT_NAMES.sun.name}`) });
    expect(within(sun).getByRole("link", { name: POINT_NAMES.sun.name })).toHaveAttribute("href", "/planetes/soleil");
    expect(sun).toHaveTextContent(plain(formatPosition(chart.positions.sun.longitude)));
    expect(within(sun).getByRole("link", { name: /^Maison [IVX]+$/ })).toHaveAttribute(
      "href",
      `/maisons#maison-${chart.positions.sun.house}`,
    );
    const neptune = within(table).getByRole("row", { name: new RegExp(`^${POINT_NAMES.neptune.name}`) });
    expect(neptune).toHaveTextContent(S.motion.stationary);
    const node = within(table).getByRole("row", { name: new RegExp(`^${POINT_NAMES.northNode.name}`) });
    expect(within(node).queryByRole("link", { name: POINT_NAMES.northNode.name })).toBeNull();
  });

  it("devrait résumer les aspects puis les détailler, majeurs puis mineurs, l'orbe menant au lexique", () => {
    show();
    expect(section(S.aspectsTitle)).toHaveTextContent(plain(S.aspectsSummary(20, 5)));
    const majors = screen.getByRole("table", { name: S.majorAspects });
    expect(within(majors).getAllByRole("row")).toHaveLength(21);
    expect(within(majors).getByRole("link", { name: S.aspectHeaders[2] })).toHaveAttribute("href", "/lexique#orbe");
    // Un aspect à un angle n'a pas de vitesse : ni appliquant ni séparant.
    expect(within(majors).getAllByText(S.noPhaseSpoken).length).toBeGreaterThan(0);
    expect(within(screen.getByRole("table", { name: S.minorAspects(5) })).getAllByRole("row")).toHaveLength(6);
  });

  it("devrait nommer les dominants en résumé et écrire la répartition en nombres", () => {
    show();
    const balance = section(S.balanceTitle);
    expect(balance).toHaveTextContent(plain(S.dominantElements(["Eau"])));
    expect(balance).toHaveTextContent(plain(S.dominantModalities(["Fixe", "Mutable"])));
    const elements = within(screen.getByRole("heading", { level: 4, name: S.elements }).parentElement ?? balance);
    expect(elements.getAllByRole("listitem").map((item) => `${item.children[0]?.textContent}=${item.children[2]?.textContent}`)).toEqual([
      "Feu=1",
      "Terre=2",
      "Air=3",
      "Eau=4",
    ]);
  });

  it("devrait résumer les maisons par les angles et détailler les douze cuspides", () => {
    const { chart } = show();
    const houses = section(S.housesTitle);
    const { ascendant, midheaven } = chart.angles ?? { ascendant: Number.NaN, midheaven: Number.NaN };
    expect(houses).toHaveTextContent(plain(S.housesSummary("Placidus", formatPosition(ascendant), formatPosition(midheaven))));
    const cusps = within(houses).getByRole("table", { name: S.cusps("Placidus") });
    expect(within(cusps).getAllByRole("row")).toHaveLength(13);
    expect(within(cusps).getByRole("link", { name: S.cuspHeaders[1] })).toHaveAttribute("href", "/lexique#cuspide");
    expect(notes()).toEqual([S.noteInstant("3 juillet 2024", "12:30", "+02:00", false)]);
  });

  it("devrait rendre la main au formulaire par « Modifier la saisie », en tête comme en fin", async () => {
    const { onEdit } = show();
    const buttons = screen.getAllByRole("button", { name: S.editInput });
    expect(buttons).toHaveLength(2);
    await userEvent.setup().click(buttons[1]);
    expect(onEdit).toHaveBeenCalledTimes(1);
  });
});

describe("ChartResult — heure inconnue et cas particuliers", () => {
  it("devrait se passer des maisons et de l'Ascendant, et dire les signes incertains", () => {
    const { chart } = show({ date: "2024-07-02", time: "", timeUnknown: true });
    const table = screen.getByRole("table", { name: S.positionsTitle });
    expect(within(table).getAllByRole("columnheader").map((cell) => cell.textContent)).toEqual(["Astre", "Position", "Mouvement"]);
    expect(screen.getByRole("img", { name: S.wheelLabel(false) })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: S.housesTitle })).toBeNull();
    expect(within(table).getAllByText(S.uncertain)).toHaveLength(2);
    expect(notes().slice(0, 2)).toEqual([S.noteTimeUnknown, S.noteUncertain(["Lune", "Mercure"])]);
    expect(screen.getByText(/Sans l'heure de naissance/)).toHaveTextContent(`Lune en Taureau${S.uncertainInline}`);

    const [first] = within(section(R.title)).getAllByRole("list");
    expect(first.children).toHaveLength(2);
    const next = chart.positions.moon.degreeInSign >= 15;
    expect(first.children[1]).toHaveTextContent(plain(S.uncertainHint(next)));
  });

  it("devrait signaler le repli de Placidus au-delà du cercle polaire (Tromsø)", () => {
    show({ place: { kind: "manual", latitude: "69,65", longitude: "18,96", timeZone: "Europe/Oslo" } });
    expect(notes()).toContain(S.noteFallback(true));
    expect(screen.getByRole("table", { name: S.cusps("Porphyre") })).toBeInTheDocument();
    expect(screen.getByText(plain(S.birth("3 juillet 2024", "14:30", S.coordinates("69,65", true, "18,96", true))))).toBeInTheDocument();
  });

  it("devrait demander de vérifier le décalage d'un fuseau lié avant 1970 (Montréal, 1960)", () => {
    show({ date: "1960-05-01", time: "10:00", place: { kind: "city", cityKey: "montreal" } });
    expect(notes()).toEqual([S.noteZone("America/Montreal"), S.noteInstant("1er mai 1960", "14:00", "−04:00", false)]);
  });

  it("devrait dire qu'un décalage a été saisi", () => {
    show({ date: "1950-03-01", time: "10:00", utcOffsetOverride: "+01:00" });
    expect(notes()).toEqual([S.noteInstant("1er mars 1950", "09:00", "+01:00", true)]);
  });
});
