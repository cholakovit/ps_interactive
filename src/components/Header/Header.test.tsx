import HeaderView from "./HeaderView";

import { render, screen } from "@testing-library/react";

test("Testing the HeaderView Component", () => {
  
    render(<HeaderView />);

    const checkbox = screen.getByTestId("button").querySelector("input");
    expect(checkbox).toHaveAttribute("type", "checkbox");
  
});

