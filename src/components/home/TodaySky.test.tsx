import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { CHART_POINT_KEYS } from "@/lib/astro/keys";
import { TodaySky } from "./TodaySky";

afterEach(cleanup);

describe("TodaySky", () => {
  it("devrait rendre les onze astres dès le premier rendu, cachés, pour que leur glissement parte de là", () => {
    const { container } = render(<TodaySky />);
    const points = container.querySelectorAll("[data-point]");
    expect(points).toHaveLength(CHART_POINT_KEYS.length);
    expect(CHART_POINT_KEYS).toHaveLength(11);
  });
});
