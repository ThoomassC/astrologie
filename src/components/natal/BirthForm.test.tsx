import { createRef } from "react";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { ValidBirthInput } from "@/lib/astro/birthInput";
import { BirthForm } from "./BirthForm";
import { NATAL_STRINGS as S } from "./natal.strings";

// Sans les globales de Vitest, Testing Library ne démonte pas seul les rendus entre deux tests.
afterEach(cleanup);

/** getByText ramène les espaces insécables du DOM à des espaces simples, pas celles de la chaîne attendue. */
const plain = (text: string) => text.replace(/\s+/g, " ").trim();

function setup() {
  const onValid = vi.fn<(input: ValidBirthInput) => void>();
  const user = userEvent.setup();
  const view = render(<BirthForm onValid={onValid} onWarmUp={() => undefined} dateRef={createRef()} />);
  const field = (label: string) => screen.getByLabelText(label);
  /** Une naissance à Paris ; `time: null` laisse l'heure vide. */
  const fillParis = async (date: string, time: string | null) => {
    await user.type(field(S.date), date);
    if (time !== null) await user.type(field(S.time), time);
    await user.selectOptions(field(S.city), "paris");
  };
  /** « Autre lieu », fuseau pré-rempli remplacé par `zone`. */
  const fillManual = async (latitude: string, longitude: string, zone: string) => {
    await user.selectOptions(field(S.city), S.cityOther);
    if (latitude) await user.type(field(S.latitude), latitude);
    if (longitude) await user.type(field(S.longitude), longitude);
    await user.clear(field(S.timeZone));
    await user.type(field(S.timeZone), zone);
  };
  const submit = () => user.click(screen.getByRole("button", { name: S.submit }));
  const summary = () => screen.getByRole("group", { name: S.summaryTitle });
  const noSummary = () => screen.queryByRole("group", { name: S.summaryTitle });
  return { onValid, user, view, field, fillParis, fillManual, submit, summary, noSummary };
}

describe("BirthForm — confidentialité", () => {
  it("ne devrait porter ni attribut name, ni action, même tous les champs ouverts", async () => {
    const { user, view, field } = setup();
    await user.selectOptions(field(S.city), S.cityOther);
    await user.click(screen.getByText(plain(S.advanced)));
    const form = view.container.querySelector("form");
    expect(form).not.toBeNull();
    expect(form).not.toHaveAttribute("action");
    expect(view.container.querySelectorAll("input, select, textarea, button").length).toBeGreaterThan(9);
    expect(view.container.querySelectorAll("[name]")).toHaveLength(0);
  });

  it("devrait annuler l'envoi natif du formulaire", () => {
    const { view } = setup();
    const form = view.container.querySelector("form");
    if (form === null) throw new Error("formulaire absent");
    // fireEvent rend false quand le gestionnaire a appelé preventDefault.
    expect(fireEvent.submit(form)).toBe(false);
  });

  it("devrait dire que les champs sont obligatoires et, près du bouton, que les données restent ici", () => {
    setup();
    expect(screen.getByRole("form", { name: S.title })).toHaveAccessibleDescription(S.requiredNote);
    expect(screen.getByRole("button", { name: S.submit })).toHaveAccessibleDescription(S.privacy);
  });
});

describe("BirthForm — erreurs", () => {
  it("devrait signaler la date manquante : récapitulatif focalisé et lu, lien vers le champ, message relié", async () => {
    const { user, field, submit, summary, onValid } = setup();
    await user.type(field(S.time), "14:30");
    await user.selectOptions(field(S.city), "paris");
    await submit();

    expect(onValid).not.toHaveBeenCalled();
    expect(summary()).toHaveFocus();
    expect(summary()).toHaveAccessibleDescription(S.errors.date.required);
    const date = field(S.date);
    expect(date).toHaveAttribute("aria-invalid", "true");
    expect(date).toHaveAccessibleDescription(`${S.errors.date.required} ${S.dateHelp}`);

    await user.click(within(summary()).getByRole("link", { name: S.errors.date.required }));
    expect(date).toHaveFocus();
    expect(window.location.hash).toBe("");
  });

  it("devrait signaler une latitude non valide sous son champ, puis la revalider en direct", async () => {
    const { user, field, fillManual, submit, summary, noSummary, onValid } = setup();
    await user.type(field(S.date), "1990-07-14");
    await user.type(field(S.time), "08:15");
    await fillManual("quarante-huit", "2,35", "Europe/Paris");
    await submit();

    const latitude = field(S.latitude);
    expect(within(summary()).getAllByRole("link").map((link) => link.textContent)).toEqual([S.errors.latitude.invalid]);
    expect(latitude).toHaveAttribute("aria-invalid", "true");
    expect(latitude).toHaveAccessibleDescription(`${S.errors.latitude.invalid} ${S.coordinatesHelp}`);
    expect(field(S.longitude)).not.toHaveAttribute("aria-invalid");

    await user.clear(latitude);
    await user.type(latitude, "48,85");
    expect(noSummary()).toBeNull();
    expect(latitude).not.toHaveAttribute("aria-invalid");
    await submit();
    expect(onValid).toHaveBeenCalledWith(expect.objectContaining({ latitude: 48.85, longitude: 2.35, cityKey: null }));
  });

  it("ne devrait rien reprocher à un champ apparu après l'envoi tant qu'on ne l'a pas quitté", async () => {
    const { user, field, submit, summary } = setup();
    await user.type(field(S.date), "1990-07-14");
    await user.type(field(S.time), "08:15");
    await submit();
    expect(within(summary()).getAllByRole("link").map((link) => link.textContent)).toEqual([S.errors.city.required]);

    await user.selectOptions(field(S.city), S.cityOther);
    expect(field(S.latitude)).not.toHaveAttribute("aria-invalid");
    await user.click(field(S.latitude));
    await user.tab();
    expect(field(S.latitude)).toHaveAttribute("aria-invalid", "true");
    expect(field(S.longitude)).not.toHaveAttribute("aria-invalid");
  });

  it("devrait ouvrir les réglages avancés pour montrer un décalage non valide", async () => {
    const { user, fillParis, field, submit } = setup();
    await fillParis("1950-03-01", "10:00");
    await user.click(screen.getByText(plain(S.advanced)));
    await user.type(field(S.utcOffset), "1 h");
    await user.click(screen.getByText(plain(S.advanced)));
    await submit();
    expect(field(S.utcOffset).closest("details")).toHaveAttribute("open");
    expect(field(S.utcOffset)).toHaveAccessibleDescription(`${S.errors.utcOffset.invalid} ${S.utcOffsetHelp}`);
  });

  it("devrait expliquer l'heure sautée (Paris, 31 mars 2024, 02:30) et proposer 03:30", async () => {
    const { fillParis, field, submit, onValid } = setup();
    await fillParis("2024-03-31", "02:30");
    await submit();
    expect(onValid).not.toHaveBeenCalled();
    const jump = { from: "02:00", to: "03:00", time: "02:30", shifted: "03:30" };
    expect(field(S.time)).toHaveAccessibleDescription(`${S.nonexistent(jump)} ${S.timeHelp}`);
  });

  it("devrait refuser, sans l'heure, un jour sauté par le fuseau (Apia, 30 décembre 2011)", async () => {
    const { user, field, fillManual, submit } = setup();
    await user.type(field(S.date), "2011-12-30");
    await user.click(screen.getByRole("checkbox", { name: S.timeUnknown }));
    await fillManual("-13,83", "-171,76", "Pacific/Apia");
    await submit();
    expect(field(S.date)).toHaveAccessibleDescription(`${S.errors.date.nonexistent} ${S.dateHelp}`);
  });

  it("devrait faire choisir le passage d'une heure répétée (Paris, 27 octobre 2024, 02:30), puis valider", async () => {
    const { user, fillParis, submit, summary, noSummary, onValid } = setup();
    await fillParis("2024-10-27", "02:30");
    await submit();
    expect(onValid).not.toHaveBeenCalled();

    const first = screen.getByRole("button", { name: "Première fois (heure d'été, UTC+2)" });
    const second = screen.getByRole("button", { name: "Seconde fois (heure d'hiver, UTC+1)" });
    await user.click(within(summary()).getByRole("link", { name: S.ambiguous }));
    expect(first).toHaveFocus();

    await user.click(second);
    expect(onValid).toHaveBeenCalledTimes(1);
    expect(onValid.mock.calls[0][0]).toMatchObject({ offsetSeconds: 3600, utcMs: Date.UTC(2024, 9, 27, 1, 30) });
    expect(noSummary()).toBeNull();
  });
});

describe("BirthForm — saisie d'un autre lieu", () => {
  it("devrait pré-remplir le fuseau avec celui de l'appareil", async () => {
    const { user, field } = setup();
    await user.selectOptions(field(S.city), S.cityOther);
    expect(field(S.timeZone)).toHaveValue(Intl.DateTimeFormat().resolvedOptions().timeZone);
  });

  it("devrait répartir un couple collé dans la latitude (« 48.1173, -1.6778 »)", async () => {
    const { user, field } = setup();
    await user.selectOptions(field(S.city), S.cityOther);
    await user.click(field(S.latitude));
    await user.paste("48.1173, -1.6778");
    expect(field(S.latitude)).toHaveValue("48.1173");
    expect(field(S.longitude)).toHaveValue("-1.6778");
  });

  it("devrait avertir, sans bloquer, d'une longitude de signe contraire au fuseau", async () => {
    const { user, field, fillManual } = setup();
    await fillManual("14,60", "61,53", "America/Martinique");
    const warning = S.longitudeWarning(true, "America/Martinique", "−61,53");
    expect(field(S.longitude)).toHaveAccessibleDescription(`${warning} ${S.coordinatesHelp}`);
    expect(field(S.longitude)).not.toHaveAttribute("aria-invalid");

    // Bordeaux : un peu à l'ouest de Greenwich, à l'heure de Paris ; rien de suspect.
    await user.clear(field(S.longitude));
    await user.type(field(S.longitude), "-0,58");
    await user.clear(field(S.timeZone));
    await user.type(field(S.timeZone), "Europe/Paris");
    expect(field(S.longitude)).toHaveAccessibleDescription(S.coordinatesHelp);
  });
});

describe("BirthForm — heure inconnue, effacement", () => {
  it("devrait désactiver l'heure et valider sans elle", async () => {
    const { user, fillParis, field, submit, onValid } = setup();
    await user.click(screen.getByRole("checkbox", { name: S.timeUnknown }));
    expect(field(S.time)).toBeDisabled();
    await fillParis("2024-07-03", null);
    await submit();
    expect(onValid).toHaveBeenCalledWith(expect.objectContaining({ timeKnown: false, cityKey: "paris" }));
  });

  it("devrait effacer le formulaire et ses erreurs, puis rendre le focus à la date", async () => {
    const { user, fillParis, field, submit, noSummary } = setup();
    await fillParis("2024-03-31", "02:30");
    await submit();
    await user.click(screen.getByRole("button", { name: S.clear }));
    expect(field(S.date)).toHaveValue("");
    expect(field(S.city)).toHaveValue("");
    expect(noSummary()).toBeNull();
    expect(field(S.date)).toHaveFocus();
  });
});
