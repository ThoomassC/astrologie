import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { POINT_NAMES } from "@/i18n/names";
import { NATAL_STRINGS } from "./natal.strings";
import { NatalCalculator } from "./NatalCalculator";
import { dateValue, segmentsOf, typeDate, typeTime } from "@/components/form/testing";

const S = NATAL_STRINGS.fr;

// Sans les globales de Vitest, Testing Library ne démonte pas seul les rendus entre deux tests.
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

/** Le premier calcul charge le vrai moteur d'éphémérides par `import()` : on lui laisse le temps. */
const SLOW = { timeout: 10_000 };

/** getByText ramène les espaces insécables du DOM à des espaces simples, pas celles de la chaîne attendue. */
const plain = (text: string) => text.replace(/\s+/g, " ").trim();

function setup() {
  const user = userEvent.setup();
  render(<NatalCalculator />);
  /** Un champ par son étiquette ; pour la date et l'heure, en segments, leur premier segment. */
  const field = (label: string) =>
    label === S.date || label === S.time ? segmentsOf(label)[0] : screen.getByLabelText(label);
  const fillParis = async (date: string, time: string | null) => {
    await typeDate(user, S.date, date);
    if (time !== null) await typeTime(user, S.time, time);
    await user.selectOptions(field(S.city), "paris");
  };
  const submit = () => user.click(screen.getByRole("button", { name: S.submit }));
  const result = () => screen.findByRole("heading", { level: 2, name: S.resultTitle }, SLOW);
  return { user, field, fillParis, submit, result };
}

describe("NatalCalculator — calcul réel", () => {
  it("devrait calculer Paris, 3 juillet 2024, 14:30 : focus sur le titre, annonce, roue et positions", async () => {
    const { user, field, fillParis, submit, result } = setup();
    await fillParis("2024-07-03", "14:30");
    await submit();

    const title = await result();
    expect(title).toHaveFocus();
    expect(screen.getByRole("status")).toHaveTextContent(S.done("Soleil en Cancer, Lune en Gémeaux, Ascendant Balance."));
    // Le thème prend la place du formulaire.
    expect(screen.queryByRole("button", { name: S.submit })).toBeNull();

    const table = screen.getByRole("table", { name: S.positionsTitle });
    expect(within(table).getAllByRole("row")).toHaveLength(12);
    expect(within(table).getByRole("link", { name: POINT_NAMES.fr.sun.name })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: S.wheelLabel(true) })).toHaveAttribute("aria-describedby", table.id);

    await user.click(screen.getAllByRole("button", { name: S.editInput })[0]);
    expect(screen.queryByRole("heading", { level: 2, name: S.resultTitle })).toBeNull();
    expect(field(S.date)).toHaveFocus();
    expect(dateValue(S.date)).toBe("2024-07-03");
  }, 20_000);

  it("devrait dresser le thème sans l'heure : ni colonne des maisons, ni angles", async () => {
    const { user, fillParis, submit, result } = setup();
    await user.click(screen.getByRole("checkbox", { name: S.timeUnknown }));
    await fillParis("2024-07-03", null);
    await submit();

    await result();
    const table = screen.getByRole("table", { name: S.positionsTitle });
    expect(within(table).queryByRole("columnheader", { name: S.positionHeaders[2] })).toBeNull();
    expect(screen.getByRole("img", { name: S.wheelLabel(false) })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: S.housesTitle })).toBeNull();
    expect(screen.getByText(plain(S.noteTimeUnknown))).toBeInTheDocument();
  }, 20_000);

  it("devrait recalculer une heure répétée (Paris, 27 octobre 2024, 02:30) au passage choisi", async () => {
    const { user, fillParis, submit, result } = setup();
    await fillParis("2024-10-27", "02:30");
    await submit();
    await user.click(screen.getByRole("button", { name: "Première fois (heure d'été, UTC+2)" }));

    await result();
    expect(screen.getByText(/^Calcul pour le 27 octobre 2024 à 00:30 UTC \(décalage \+02:00\)\.$/)).toBeInTheDocument();
  }, 20_000);

  it("devrait prévoir, dans le rendu serveur, le message des navigateurs sans JavaScript", () => {
    setup();
    // Masqué par la feuille de style, sauf sous `@media (scripting: none)`, où c'est le formulaire qui disparaît.
    expect(screen.getByText(plain(S.noScript))).toBeInTheDocument();
  });
});

describe("NatalCalculator — confidentialité", () => {
  it("ne devrait toucher ni aux cookies, ni à l'adresse, ni à l'historique, erreurs et calcul compris", async () => {
    const pushState = vi.spyOn(window.history, "pushState");
    const replaceState = vi.spyOn(window.history, "replaceState");
    const href = window.location.href;
    const { user, fillParis, submit, result } = setup();

    await submit();
    await user.click(within(screen.getByRole("group", { name: S.summaryTitle })).getAllByRole("link")[0]);
    await fillParis("1990-07-14", "08:15");
    await submit();
    await result();

    expect(document.cookie).toBe("");
    expect(pushState).not.toHaveBeenCalled();
    expect(replaceState).not.toHaveBeenCalled();
    expect(window.location.href).toBe(href);
  }, 20_000);

  // Sous Node 25, `localStorage` est l'objet de Node, pas celui de jsdom : la garde lit donc le code lui-même.
  it("ne devrait employer, dans aucun module du calculateur, ni stockage, ni cookie, ni adresse", () => {
    const dir = join(process.cwd(), "src/components/natal");
    const sources = readdirSync(dir).filter((file) => /\.tsx?$/.test(file) && !/\.test\.tsx?$/.test(file));
    expect(sources).toEqual(expect.arrayContaining(["NatalCalculator.tsx", "BirthForm.tsx", "ChartResult.tsx"]));
    const forbidden =
      /localStorage|sessionStorage|indexedDB|document\.cookie|cookieStore|history\.|location\.|URLSearchParams|useRouter|useSearchParams/;
    expect(sources.filter((file) => forbidden.test(readFileSync(join(dir, file), "utf8")))).toEqual([]);
  });
});
