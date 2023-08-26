import { createSlice } from "@reduxjs/toolkit";
import { images } from "../../data/images";

const initialState = {
	anim: false,
	array: [],
	arrayImg: images,
};

export const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		clickFilter: (state, action) => {
			state.anim = action.payload;
		},
		addFilter: (state, action) => {
			state.array = [...state.array, action.payload];
		},
		removeFilter: (state, action) => {
			state.array = state.array.filter((item) => item != action.payload);
			state.arrayImg = images;
		},
		changePhoto: (state, action) => {
			state.arrayImg = action.payload;
		},
	},
});

export const { clickFilter, addFilter, removeFilter, changePhoto } =
	filterSlice.actions;

export default filterSlice.reducer;
