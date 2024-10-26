import { combineReducers, configureStore } from '@reduxjs/toolkit';
import campersReducer from './campersSlice.js';
import filtersReducer from './filtersSlice';
import favoritesReducer from './favoritesSlice.js';


const rootReducer = combineReducers({
  campers: campersReducer,
  filters: filtersReducer,
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
