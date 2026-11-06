import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { AspectExplorer } from "./AspectExplorer";
import { ASPECTS_STRINGS as S } from "./aspects.strings";

afterEach(cleanup);

describe("AspectExplorer", () => {
  it("devrait placer le second astre en carré du premier, puis dire l'aspect avec un lien vers sa section", async () => {
    const user = userEvent.setup();
    render(<AspectExplorer />);
    await user.click(screen.getByRole("button", { name: S.place("carré") }));
    const link = await screen.findByRole("link", { name: S.aspectNames.square });
    expect(link).toHaveAttribute("href", "/aspects#carre");
    expect(link.closest("[aria-live]")).not.toBeNull();
  });

  it("ne devrait pas doubler la valeur des curseurs (aria-valuetext) par un <output> lu", () => {
    const { container } = render(<AspectExplorer />);
    const outputs = Array.from(container.querySelectorAll("output[for]"));
    expect(outputs.length).toBe(2);
    for (const output of outputs) expect(output).toHaveAttribute("aria-hidden", "true");
  });
});
