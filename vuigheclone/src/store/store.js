import { configureStore } from "@reduxjs/toolkit";
import filmReducer from "../slices/react.slices";

const store = configureStore({
  reducer: {
    films: filmReducer,
  },
  devTools: {},
  preloadedState: {},
});

export default store;
