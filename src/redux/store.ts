import { configureStore } from "@reduxjs/toolkit";

import fruitsReducer from "./reducers/fruitsReducer";

export const store = configureStore({
  reducer: {
    fruits: fruitsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;