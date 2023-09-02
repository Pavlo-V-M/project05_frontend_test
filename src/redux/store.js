import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { filterSlice } from '../components/shared/DrinksPage/redux/filterSlice';
import { recipetsSlice } from '../components/shared/DrinksPage/redux/recipetsSlice';
import { pagePaginateSlice } from '../components/shared/DrinksPage/redux/pagePaginateSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    valueFilter: filterSlice.reducer,
    dataRecipets: recipetsSlice.reducer,
    pagePaginate: pagePaginateSlice.reducer,
  },
});

export default store;
