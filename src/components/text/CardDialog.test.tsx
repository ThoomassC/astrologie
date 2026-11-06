import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeAll, describe, expect, it } from "vitest";
import { CardDialog } from "./CardDialog";

afterEach(cleanup);

// jsdom n'ouvre pas les <dialog> en modale : on simule showModal et close.
beforeAll(() => {
  HTMLDialogElement.prototype.showModal ??= function (this: HTMLDialogElement) {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close ??= function (this: HTMLDialogElement) {
    this.removeAttribute("open");
  };
});

function renderCard() {
  return render(
    <CardDialog id="methode" level={3} heading="Comment se construit un thème" summary="Trois données suffisent." closeLabel="Fermer">
      <p>Le détail du calcul.</p>
    </CardDialog>,
  );
}

describe("CardDialog", () => {
  it("affiche titre et résumé sur la carte, sans bouton « Détails », le détail restant dans le HTML", () => {
    renderCard();
    expect(screen.getByRole("heading", { level: 3, name: "Comment se construit un thème" })).toBeInTheDocument();
    expect(screen.queryByText("Détails")).toBeNull();
    expect(document.querySelector("dialog")).not.toHaveAttribute("open");
    expect(document.querySelector("dialog")?.textContent).toContain("Le détail du calcul.");
  });

  it("ouvre la fenêtre au clic sur la carte, nommée par son titre, et la ferme par « Fermer »", async () => {
    const user = userEvent.setup();
    renderCard();
    const opener = screen.getByRole("button", { name: "Comment se construit un thème" });
    expect(opener).toHaveAttribute("aria-haspopup", "dialog");
    await user.click(opener);
    const dialog = screen.getByRole("dialog", { name: "Comment se construit un thème" });
    expect(dialog).toHaveAttribute("open");
    expect(screen.getByText("Le détail du calcul.")).toBeVisible();
    await user.click(screen.getByRole("button", { name: "Fermer" }));
    expect(document.querySelector("dialog")).not.toHaveAttribute("open");
  });

  it("se ferme au clic sur le fond, pas au clic dans le contenu", async () => {
    const user = userEvent.setup();
    renderCard();
    await user.click(screen.getByRole("button", { name: "Comment se construit un thème" }));
    const dialog = document.querySelector("dialog") as HTMLDialogElement;
    await user.click(screen.getByText("Le détail du calcul."));
    expect(dialog).toHaveAttribute("open");
    await user.click(dialog);
    expect(dialog).not.toHaveAttribute("open");
  });

  it("garde l'ancre de la section, qui peut recevoir le focus", () => {
    renderCard();
    const section = document.getElementById("methode");
    expect(section?.tagName).toBe("SECTION");
    expect(section).toHaveAttribute("tabindex", "-1");
  });
});
