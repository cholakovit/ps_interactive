// Redux toolkit - current
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Types
import type { InitialStateType } from "./types";

// Define the initial state
const initialState: InitialStateType = {
  placeLat: "",
  placeLon: "",
  distance: "",
  //status: import.meta.env.VITE_IDLE, //'idle' | 'loading' | 'succeeded' | 'failed'
};

const partnersSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {
    setCoordinatesAndDistance(
      state: InitialStateType,
      action: PayloadAction<InitialStateType>
    ) {
      state.placeLat = action.payload.placeLat;
      state.placeLon = action.payload.placeLon;
      state.distance = action.payload.distance;
    },
  },
});

export const { setCoordinatesAndDistance } = partnersSlice.actions;

export default partnersSlice.reducer;
