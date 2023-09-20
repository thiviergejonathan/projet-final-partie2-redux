import { configureStore } from '@reduxjs/toolkit'
import recipyReducer from '../components/Recipy/store/recipySlice';
import favoriteReducer from '../favorites/store/favoritesSlice';

export default configureStore({
	reducer: {
		recipy: recipyReducer,
		favorites: favoriteReducer,
	},
});
