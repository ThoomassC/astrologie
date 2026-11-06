import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { AspectExplorer } from "./AspectExplorer";
import { ASPECTS_STRINGS } from "./aspects.strings";

const S = ASPECTS_STRINGS.fr;

afterEach(cleanup);

describe("AspectExplorer", () => {
  it("devrait placer le second astre en carré du premier, puis dire l'aspect avec un lien vers sa section", async () => {
    const user = userEvent.setup();
    render(<AspectExplorer />);
    await user.click(screen.getByRole("button", { name: S.place("carré") }));
    const link = await screen.findByRole("link", { name: S.aspectNames.square });
    expect(link).toHaveAttribute("href", "/fr/aspects#carre");
    expect(link.closest("[aria-live]")).not.toBeNull();
  });

  it("devrait parler anglais et mener à la page anglaise sous une page en anglais", async () => {
    const user = userEvent.setup();
    const en = ASPECTS_STRINGS.en;
    render(
      <LocaleProvider locale="en">
        <AspectExplorer />
      </LocaleProvider>,
    );
    expect(screen.getByRole("heading", { name: en.title })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: en.place("square") }));
    const link = await screen.findByRole("link", { name: en.aspectNames.square });
    expect(link).toHaveAttribute("href", "/en/aspects#carre");
  });

  it("ne devrait pas doubler la valeur des curseurs (aria-valuetext) par un <output> lu", () => {
    const { container } = render(<AspectExplorer />);
    const outputs = Array.from(container.querySelectorAll("output[for]"));
    expect(outputs.length).toBe(2);
    for (const output of outputs) expect(output).toHaveAttribute("aria-hidden", "true");
  });
});
