import { describe, it } from "vitest";
import ListView from "./ListView";

import { render, screen } from "@testing-library/react";

describe("Testing the HeaderView Component", () => {
  it("Render HeaderView", () => {
    render(<ListView />);
  });
});