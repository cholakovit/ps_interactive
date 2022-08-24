import { describe, it } from "vitest";
import Error from "./Error";

import { render, screen } from "@testing-library/react";

describe("Testing the Error Component", () => {

    const error = 'Network Problem'

    it("render Error", () => {
      render(<Error error={error} />);

      const errorAlert = screen.getByTestId('errorAlert')

      expect(errorAlert).toHaveTextContent(error);

    });
  });