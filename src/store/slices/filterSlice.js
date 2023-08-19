import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	anim: false,
};

export const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		click: (state, action) => {
			state.anim = action.payload;
			console.log(state.anim);
		},
	},
});

export const { click } = filterSlice.actions;

export default filterSlice.reducer;
