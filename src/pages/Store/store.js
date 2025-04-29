import { configureStore } from "@reduxjs/toolkit";
import imdbApi from "../api/api";

export const store = configureStore({
  reducer: { [imdbApi.reducerPath]: imdbApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      imdbApi.middleware
    ),
});
export default store;
