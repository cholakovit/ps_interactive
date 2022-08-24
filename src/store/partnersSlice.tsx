// Redux toolkit -- , current, PayloadAction
import { createSlice } from "@reduxjs/toolkit";

//Types
import type { InitialStateType } from "./types";

// Define the initial state
const initialState: InitialStateType = {};

const partnersSlice = createSlice({
  name: "partnersSlice",
  initialState,
  reducers: {},
});

export default partnersSlice.reducer;