import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import searchReducer from "./searchSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    search: searchReducer,
    ui: uiReducer,
  },
});
