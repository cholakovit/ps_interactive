import React from 'react'

import ListView from "./ListView";

import { screen } from "@testing-library/react";

// The custom render function should let us:

// Create a new Redux store instance every time it's called, with an optional preloadedState value that can be used for an initial value
// Alternately pass in an already-created Redux store instance
// Pass through additional options to RTL's original render function
// Automatically wrap the component being tested with a <Provider store={store}>
// Return the store instance in case the test needs to dispatch more actions or check state
import { renderWithProviders } from "../../test-utils";

test("Testing the ListView Component", () => {

    const placeLat = 42.6665921;
    const placeLon = 23.351723;
    const distance = 100;
  
    renderWithProviders(<ListView placeLat={placeLat} placeLon={placeLon} distance={distance} />);
  
    expect(screen.getByText(/Partners within/i)).toBeInTheDocument()
});