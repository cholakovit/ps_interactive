import Error from "./Error";
import { render, screen } from "@testing-library/react";

test("Testing the Error Component", () => {
    const error = 'Network Problem'

    render(<Error error={error} />);

    const errorAlert = screen.getByTestId('errorAlert')

    expect(errorAlert).toHaveTextContent(error);

    
  });