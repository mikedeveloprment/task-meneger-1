import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	resize: false,
	border: false,
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
	},
});

export const { clickResize, clickBorder } = tolBarSlice.actions;

export default tolBarSlice.reducer;
