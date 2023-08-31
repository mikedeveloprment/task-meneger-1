import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	timeComplitionFrom: "",
	timeComplitionEnd: "",
};

export const taskInfoCreateSlice = createSlice({
	name: "tolBar",
	initialState,
	reducers: {
		setTimeComplitionFrom: (state, action) => {
			state.timeComplitionFrom = action.payload;
		},
		setTimeComplitionEnd: (state, action) => {
			state.timeComplitionEnd = action.payload;
		},
	},
});

export const { setTimeComplitionFrom, setTimeComplitionEnd } =
	taskInfoCreateSlice.actions;

export default taskInfoCreateSlice.reducer;
