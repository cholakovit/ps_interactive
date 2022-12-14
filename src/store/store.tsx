// Redux toolkit
import { configureStore } from "@reduxjs/toolkit";

// ps Api
import { psApi } from "./apiSlice";

export const store: any = configureStore({
  reducer: {
    [psApi.reducerPath]: psApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(psApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof store>