import { createSlice } from '@reduxjs/toolkit'
import reducers from './recipyReducers';

export const recipySlice = createSlice({
	name: 'recipy',
	initialState: {
		recipy: []
	},
	reducers: reducers,
});

export const { updateRecipy } = recipySlice.actions;

export default recipySlice.reducer;
