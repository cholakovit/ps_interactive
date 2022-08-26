import React from 'react'

import ListView from "./ListView";

import { render, screen } from "@testing-library/react";

import { store } from "../../store/store"
import { Provider } from "react-redux"

test("Testing the HeaderView Component", () => {

  const placeLat = 42.6665921;
  const placeLon = 23.351723;
  const distance = 100;

  render(
    <Provider store={store}>
      <ListView placeLat={placeLat} placeLon={placeLon} distance={distance} />
    </Provider>
  );
});


