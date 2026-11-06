import { useState } from "react";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { Locale } from "@/i18n/locales";
import { CalendarPanel } from "./CalendarPanel";
import { DateField } from "./DateField";
import { PICKER_STRINGS } from "./picker.strings";
import { TimeField } from "./TimeField";
import { TimePanel } from "./TimePanel";

afterEach(cleanup);

function DateHarness({ locale = "fr", onChange }: { locale?: Locale; onChange: (value: string) => void }) {
  const [value, setValue] = useState("");
  return (
    <>
      <span id="etiquette">Date de naissance</span>
      <DateField
        id="date"
        labelId="etiquette"
        locale={locale}
        min="1800-01-01"
        max="2100-12-31"
        value={value}
        onChange={(next) => {
          setValue(next);
          onChange(next);
        }}
      />
      <button type="button" onClick={() => setValue("")}>
        Effacer
      </button>
    </>
  );
}

function TimeHarness({
  locale = "fr",
  onChange,
  onSubmit = () => undefined,
}: {
  locale?: Locale;
  onChange: (value: string) => void;
  onSubmit?: () => void;
}) {
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <span id="etiquette">Heure</span>
      <TimeField
        id="heure"
        labelId="etiquette"
        locale={locale}
        value={value}
        onChange={(next) => {
          setValue(next);
          onChange(next);
        }}
      />
    </form>
  );
}

describe("DateField", () => {
  const S = PICKER_STRINGS.fr;

  it("se tape d'un trait, jour, mois, année, et garde YYYY-MM-DD", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<DateHarness onChange={onChange} />);
    await user.click(screen.getByLabelText(S.day));
    await user.keyboard("14071990");
    expect(onChange).toHaveBeenLastCalledWith("1990-07-14");
    expect(screen.getByLabelText(S.year)).toHaveFocus();
    expect(screen.getByRole("group", { name: "Date de naissance" })).toBeInTheDocument();
  });

  it("complète un premier chiffre qui ne peut pas commencer un jour, et passe au mois", async () => {
    const user = userEvent.setup();
    render(<DateHarness onChange={() => undefined} />);
    await user.click(screen.getByLabelText(S.day));
    await user.keyboard("4");
    expect(screen.getByLabelText(S.day)).toHaveValue("04");
    expect(screen.getByLabelText(S.month)).toHaveFocus();
  });

  it("refuse un jour impossible et laisse le segment tel quel", async () => {
    const user = userEvent.setup();
    render(<DateHarness onChange={() => undefined} />);
    await user.click(screen.getByLabelText(S.day));
    await user.keyboard("35");
    expect(screen.getByLabelText(S.day)).toHaveValue("3");
  });

  it("garde une date à moitié tapée partielle, pour que le formulaire la refuse", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<DateHarness onChange={onChange} />);
    await user.click(screen.getByLabelText(S.day));
    await user.keyboard("14/07/199");
    expect(onChange).toHaveBeenLastCalledWith("199-07-14");
  });

  it("monte et descend aux flèches, revient au segment précédent au retour arrière", async () => {
    const user = userEvent.setup();
    render(<DateHarness onChange={() => undefined} />);
    await user.click(screen.getByLabelText(S.month));
    await user.keyboard("{ArrowUp}");
    expect(screen.getByLabelText(S.month)).toHaveValue("01");
    await user.keyboard("{ArrowDown}{ArrowDown}");
    expect(screen.getByLabelText(S.month)).toHaveValue("11");
    await user.keyboard("{Backspace}{Backspace}");
    expect(screen.getByLabelText(S.day)).toHaveFocus();
  });

  it("suit une remise à zéro venue du parent", async () => {
    const user = userEvent.setup();
    render(<DateHarness onChange={() => undefined} />);
    await user.click(screen.getByLabelText(S.day));
    await user.keyboard("14071990");
    await user.click(screen.getByRole("button", { name: "Effacer" }));
    expect(screen.getByLabelText(S.day)).toHaveValue("");
    expect(screen.getByLabelText(S.year)).toHaveValue("");
  });

  it("répartit une date collée sur les trois segments, ISO comprise", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<DateHarness onChange={onChange} />);
    await user.click(screen.getByLabelText(S.day));
    await user.paste("14/07/1990");
    expect(onChange).toHaveBeenLastCalledWith("1990-07-14");
    await user.click(screen.getByLabelText(S.day));
    await user.paste("2024-03-05");
    expect(onChange).toHaveBeenLastCalledWith("2024-03-05");
  });

  it("ne perd pas une date collée dans un segment à moitié rempli", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<DateHarness onChange={onChange} />);
    await user.click(screen.getByLabelText(S.day));
    await user.keyboard("3");
    await user.paste("14/07/1990");
    await new Promise((resolve) => requestAnimationFrame(resolve));
    expect(onChange).toHaveBeenLastCalledWith("1990-07-14");
    expect(screen.getByLabelText(S.day)).toHaveValue("14");
  });

  it("garde l'ordre jour, mois, année en anglais britannique", () => {
    render(<DateHarness locale="en" onChange={() => undefined} />);
    const inputs = within(screen.getByRole("group", { name: "Date de naissance" })).getAllByRole("textbox");
    expect(inputs.map((input) => input.getAttribute("aria-label"))).toEqual(["Day", "Month", "Year"]);
    expect(inputs.map((input) => input.getAttribute("placeholder"))).toEqual(["dd", "mm", "yyyy"]);
  });
});

describe("TimeField", () => {
  it("est sur 24 heures en français, sans AM ni PM", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimeHarness onChange={onChange} />);
    await user.click(screen.getByLabelText(PICKER_STRINGS.fr.hour));
    await user.keyboard("1430");
    expect(onChange).toHaveBeenLastCalledWith("14:30");
    expect(screen.queryByRole("button", { name: /AM|PM/ })).not.toBeInTheDocument();
  });

  it("lit une heure collée, AM ou PM compris en anglais", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimeHarness locale="en" onChange={onChange} />);
    await user.click(screen.getByLabelText(PICKER_STRINGS.en.hour));
    await user.paste("2:30 pm");
    expect(onChange).toHaveBeenLastCalledWith("14:30");
  });

  it("envoie le formulaire à l'Entrée sur AM / PM, sans changer la période", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const onSubmit = vi.fn();
    render(<TimeHarness locale="en" onChange={onChange} onSubmit={onSubmit} />);
    await user.click(screen.getByLabelText(PICKER_STRINGS.en.hour));
    await user.keyboard("0230p{Enter}");
    expect(onChange).toHaveBeenLastCalledWith("14:30");
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("laisse Cmd+A et Ctrl+P au navigateur", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimeHarness locale="en" onChange={onChange} />);
    await user.click(screen.getByLabelText(PICKER_STRINGS.en.hour));
    await user.keyboard("0230p");
    await user.click(screen.getByLabelText(PICKER_STRINGS.en.hour));
    expect(onChange).toHaveBeenLastCalledWith("14:30");
    // user-event insère la lettre même avec un modificateur (un navigateur ne le fait pas) : on regarde la période.
    await user.keyboard("{Meta>}a{/Meta}");
    expect(screen.getByRole("button", { name: PICKER_STRINGS.en.periodValue("PM") })).toBeInTheDocument();
    await user.keyboard("{Control>}p{/Control}");
    expect(screen.getByRole("button", { name: PICKER_STRINGS.en.periodValue("PM") })).toBeInTheDocument();
  });

  it("convertit une heure collée dans l'autre convention", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimeHarness locale="en" onChange={onChange} />);
    await user.click(screen.getByLabelText(PICKER_STRINGS.en.hour));
    await user.paste("14:30");
    expect(onChange).toHaveBeenLastCalledWith("14:30");
    expect(screen.getByLabelText(PICKER_STRINGS.en.hour)).toHaveValue("02");
    cleanup();
    const onChangeFr = vi.fn();
    render(<TimeHarness onChange={onChangeFr} />);
    await user.click(screen.getByLabelText(PICKER_STRINGS.fr.hour));
    await user.paste("2:30 PM");
    expect(onChangeFr).toHaveBeenLastCalledWith("14:30");
  });

  it("refuse 24 h", async () => {
    const user = userEvent.setup();
    render(<TimeHarness onChange={() => undefined} />);
    await user.click(screen.getByLabelText(PICKER_STRINGS.fr.hour));
    await user.keyboard("24");
    expect(screen.getByLabelText(PICKER_STRINGS.fr.hour)).toHaveValue("2");
  });

  it("affiche AM et PM en anglais, et garde la valeur sur 24 heures", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TimeHarness locale="en" onChange={onChange} />);
    const E = PICKER_STRINGS.en;
    await user.click(screen.getByLabelText(E.hour));
    await user.keyboard("0230");
    // Sans AM ni PM, l'heure reste incomplète.
    expect(onChange).toHaveBeenLastCalledWith("02:30?");
    await user.keyboard("p");
    expect(onChange).toHaveBeenLastCalledWith("14:30");
    expect(screen.getByRole("button", { name: E.periodValue("PM") })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: E.periodValue("PM") }));
    expect(onChange).toHaveBeenLastCalledWith("02:30");
  });
});

describe("CalendarPanel", () => {
  const base = {
    locale: "fr" as const,
    selected: null,
    today: { year: 2026, month: 11, day: 6 },
    min: { year: 1800, month: 1, day: 1 },
    max: { year: 2100, month: 12, day: 31 },
  };

  it("commence la semaine le lundi, nomme chaque jour en entier et marque aujourd'hui", () => {
    render(<CalendarPanel {...base} start={{ year: 2026, month: 11, day: 6 }} onPick={() => undefined} />);
    const headers = screen.getAllByRole("columnheader");
    expect(headers[0]).toHaveAttribute("abbr", "lundi");
    const today = screen.getByRole("button", { name: "vendredi 6 novembre 2026" });
    expect(today).toHaveAttribute("aria-current", "date");
    expect(today).toHaveFocus();
  });

  it("se parcourt au clavier et choisit à l'Entrée", async () => {
    const user = userEvent.setup();
    const onPick = vi.fn();
    render(<CalendarPanel {...base} start={{ year: 1990, month: 7, day: 14 }} onPick={onPick} />);
    await user.keyboard("{ArrowRight}{ArrowDown}");
    expect(screen.getByRole("button", { name: "dimanche 22 juillet 1990" })).toHaveFocus();
    await user.keyboard("{PageDown}");
    expect(screen.getByRole("button", { name: "mercredi 22 août 1990" })).toHaveFocus();
    await user.keyboard("{Enter}");
    expect(onPick).toHaveBeenCalledWith({ year: 1990, month: 8, day: 22 });
  });

  it("change de mois et d'année par les listes", async () => {
    const user = userEvent.setup();
    render(<CalendarPanel {...base} start={{ year: 2026, month: 11, day: 6 }} onPick={() => undefined} />);
    await user.selectOptions(screen.getByRole("combobox", { name: "Année" }), "1985");
    await user.selectOptions(screen.getByRole("combobox", { name: "Mois" }), "3");
    expect(screen.getByRole("button", { name: "mercredi 6 mars 1985" })).toBeInTheDocument();
  });

  it("ne va pas au-delà de 2100", () => {
    render(<CalendarPanel {...base} start={{ year: 2100, month: 12, day: 31 }} onPick={() => undefined} />);
    expect(screen.getByRole("button", { name: "Mois suivant" })).toHaveAttribute("aria-disabled", "true");
  });
});

describe("TimePanel", () => {
  it("choisit l'heure puis les minutes, et se ferme une fois l'heure complète", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const onDone = vi.fn();
    const { rerender } = render(
      <TimePanel locale="fr" h12={false} parts={{ hour: "", minute: "", period: "" }} onChange={onChange} onDone={onDone} />,
    );
    const hours = screen.getByRole("listbox", { name: "Heures" });
    expect(within(hours).getAllByRole("option")).toHaveLength(24);
    expect(within(hours).queryByRole("option", { selected: true })).toBeNull();
    await user.click(within(hours).getByRole("option", { name: "14" }));
    expect(onChange).toHaveBeenLastCalledWith({ hour: "14", minute: "", period: "" });
    expect(onDone).not.toHaveBeenCalled();
    rerender(
      <TimePanel locale="fr" h12={false} parts={{ hour: "14", minute: "", period: "" }} onChange={onChange} onDone={onDone} />,
    );
    await user.click(within(screen.getByRole("listbox", { name: "Minutes" })).getByRole("option", { name: "30" }));
    expect(onChange).toHaveBeenLastCalledWith({ hour: "14", minute: "30", period: "" });
    expect(onDone).toHaveBeenCalled();
  });

  it("se ferme en anglais quand AM ou PM complète l'heure", async () => {
    const user = userEvent.setup();
    const onDone = vi.fn();
    render(<TimePanel locale="en" h12 parts={{ hour: "02", minute: "30", period: "" }} onChange={() => undefined} onDone={onDone} />);
    await user.click(within(screen.getByRole("listbox", { name: "AM or PM" })).getByRole("option", { name: "PM" }));
    expect(onDone).toHaveBeenCalled();
  });

  it("a douze heures et une colonne AM / PM en anglais", () => {
    render(<TimePanel locale="en" h12 parts={{ hour: "", minute: "", period: "" }} onChange={() => undefined} onDone={() => undefined} />);
    expect(within(screen.getByRole("listbox", { name: "Hours" })).getAllByRole("option")).toHaveLength(12);
    expect(within(screen.getByRole("listbox", { name: "AM or PM" })).getAllByRole("option").map((o) => o.textContent)).toEqual([
      "AM",
      "PM",
    ]);
  });
});
