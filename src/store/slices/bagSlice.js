import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	anim: false,
};

export const bagSlice = createSlice({
	name: "bag",
	initialState,
	reducers: {
		clickBag: (state, action) => {
			state.anim = action.payload;
		},
	},
});

export const { clickBag } = bagSlice.actions;

export default bagSlice.reducer;
