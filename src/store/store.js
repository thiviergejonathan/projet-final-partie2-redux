import { configureStore } from '@reduxjs/toolkit'
// import authReducer from '../auth/store/authSlice'; to delete
// import peopleReducer from '../people/store/peopleSlice';
import favoriteReducer from '../favorites/store/favoritesSlice';

export default configureStore({
	reducer: {
		// auth: authReducer, to delete
		// people: peopleReducer,
		favorites: favoriteReducer,
	},
});
