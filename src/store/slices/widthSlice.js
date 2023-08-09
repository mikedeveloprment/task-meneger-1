import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	width: 78,
};

export const widthSlice = createSlice({
	name: "width",
	initialState,
	reducers: {
		load: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { load } = widthSlice.actions;

export default widthSlice.reducer;
