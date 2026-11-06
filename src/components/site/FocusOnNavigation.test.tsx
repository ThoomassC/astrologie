import { act, cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MAIN_ID } from "@/lib/site/ids";
import { FocusOnNavigation } from "./FocusOnNavigation";

const navigation = vi.hoisted(() => ({ pathname: "/" }));
vi.mock("next/navigation", () => ({ usePathname: () => navigation.pathname }));

afterEach(() => {
  cleanup();
  window.history.replaceState(null, "", "/");
  navigation.pathname = "/";
});

/** Une barre (un onglet), puis la page : un `main` et une cible d'ancre en tabIndex −1. */
function Page() {
  return (
    <>
      <header>
        <a href="/lexique">Lexique</a>
      </header>
      <main id={MAIN_ID} tabIndex={-1}>
        <article id="retrogradation" tabIndex={-1}>
          Rétrogradation
        </article>
        <button type="button">Dans la page</button>
      </main>
      <FocusOnNavigation />
    </>
  );
}

function navigate(rerender: (ui: React.ReactNode) => void, url: string) {
  window.history.pushState(null, "", url);
  navigation.pathname = new URL(url, window.location.origin).pathname;
  act(() => rerender(<Page />));
}

describe("FocusOnNavigation", () => {
  it("devrait donner le focus à la cible de l'ancre quand l'adresse en désigne une", () => {
    const { rerender, getByText } = render(<Page />);
    navigate(rerender, "/lexique#retrogradation");
    expect(document.activeElement).toBe(getByText("Rétrogradation"));
  });

  it("devrait sortir le focus de la barre vers le contenu après un clic sur un onglet", () => {
    const { rerender, getByText, container } = render(<Page />);
    getByText("Lexique").focus();
    navigate(rerender, "/lexique");
    expect(document.activeElement).toBe(container.querySelector("main"));
  });

  it("devrait laisser le focus qu'une page a posé dans son contenu", () => {
    const { rerender, getByText } = render(<Page />);
    getByText("Dans la page").focus();
    navigate(rerender, "/lexique");
    expect(document.activeElement).toBe(getByText("Dans la page"));
  });

  it("ne devrait rien faire au premier chargement", () => {
    render(<Page />);
    expect(document.activeElement).toBe(document.body);
  });
});
