import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	anim: false,
};

export const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		clickFilter: (state, action) => {
			state.anim = action.payload;
		},
	},
});

export const { clickFilter } = filterSlice.actions;

export default filterSlice.reducer;
