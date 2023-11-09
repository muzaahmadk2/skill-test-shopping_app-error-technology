import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const Store = configureStore({
  reducer: { product : productSlice.reducer},
});

export default Store;