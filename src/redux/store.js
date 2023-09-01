import { configureStore } from '@reduxjs/toolkit';
// import { authReducer } from './slices/auth';
import { recipesReducer } from './recipes/recipes-slice';

const store = configureStore({
  reducer: recipesReducer,
});

export default store;
