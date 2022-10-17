import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { shoppingCartReducer } from "./shoppingCartSlice";
import { cartInitialState } from "./shoppingCartHelpers";

const preloadedState = JSON.parse(localStorage.getItem("application"))
  ? JSON.parse(localStorage.getItem("application"))
  : { user: null, shoppingCart: cartInitialState };

const store = configureStore({
  reducer: {
    user: userReducer,
    shoppingCart: shoppingCartReducer,
  },
  preloadedState: preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("application", JSON.stringify(state));
});
export default store;
