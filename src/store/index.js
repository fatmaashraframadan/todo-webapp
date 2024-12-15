import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./slices/itemSlice";

const store = configureStore({
  reducer: {
    items: itemSlice,
  },
});

export default store;
