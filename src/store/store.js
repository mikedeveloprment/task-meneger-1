import { configureStore } from "@reduxjs/toolkit";
import widthReducer from "./slices/widthSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
	reducer: { count: widthReducer, filter: filterSlice },
});
