import { configureStore } from "@reduxjs/toolkit";
import widthReducer from "./slices/widthSlice";

export const store = configureStore({
	reducer: { count: widthReducer },
});
