const reducers = {
	updateRecipy: (state, action) => {
		if (action.payload && action.payload.results) {
			state.recipy = action.payload.results;
		}

		return state;
	},
}

export default reducers;
