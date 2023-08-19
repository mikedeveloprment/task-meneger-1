import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import bagSlice from "./slices/bagSlice";

export const store = configureStore({
	reducer: { filter: filterSlice, bag: bagSlice },
});
