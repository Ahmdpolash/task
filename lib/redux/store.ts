import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import openCallReducer from "./features/open-calls/openCall.slice";

const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  openCallDraft: openCallReducer, 
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
