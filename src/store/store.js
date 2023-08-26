import { configureStore } from "@reduxjs/toolkit";
import tolBarSlice from "./slices/tolBarSlice";

export const store = configureStore({
	reducer: { tolBar: tolBarSlice },
});
