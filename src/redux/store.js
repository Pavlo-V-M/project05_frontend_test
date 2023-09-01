import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { filterSlice } from '../components/shared/DrinksPage/redux/filterSlice';
import { recipetsSlice } from '../components/shared/DrinksPage/redux/recipetsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    valueFilter: filterSlice.reducer,
    dataRecipets: recipetsSlice.reducer,
  },
});

export default store;
