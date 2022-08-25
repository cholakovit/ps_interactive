// Redux toolkit
import { configureStore } from "@reduxjs/toolkit";

// Partners Slice
import partnersReducer from "./partnersSlice";

// ps Api
import { psApi } from "./apiSlice";

export const store = configureStore({
  reducer: {
    [psApi.reducerPath]: psApi.reducer,
    partners: partnersReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(psApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
