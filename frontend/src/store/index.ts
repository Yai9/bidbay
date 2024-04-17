import { configureStore } from "@reduxjs/toolkit";
import bidSlice from "./bidSlice";

const store = configureStore({
  reducer: bidSlice.reducer,
});

export default store;
