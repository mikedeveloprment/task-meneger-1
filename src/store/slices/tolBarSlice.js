import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	resize: false,
	border: false,
	animClick: false,
};

export const tolBarSlice = createSlice({
	name: "tolBar",
	initialState,
	reducers: {
		clickResize: (state, action) => {
			state.resize = action.payload;
		},
		clickBorder: (state, action) => {
			state.border = action.payload;
		},
		animationStane: (state, action) => {
			state.animClick = action.payload;
		},
	},
});

export const { clickResize, clickBorder, animationStane } = tolBarSlice.actions;

export default tolBarSlice.reducer;
