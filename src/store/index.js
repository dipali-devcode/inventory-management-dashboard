import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import searchReducer from "./searchSlice";
import uiReducer from "./uiSlice";
import authReducer from "./authSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    search: searchReducer,
    ui: uiReducer,
    auth: authReducer,
  },
});
