import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';

// <<<<<<< DrinkPages
import { filterSlice } from '../components/shared/DrinksPage/redux/filterSlice';
import { recipetsSlice } from '../components/shared/DrinksPage/redux/recipetsSlice';
import { pagePaginateSlice } from '../components/shared/DrinksPage/redux/pagePaginateSlice';
// <<<<<<< DrinkPages

const store = configureStore({
  reducer: {
    auth: authReducer,
    valueFilter: filterSlice.reducer,
    dataRecipets: recipetsSlice.reducer,
    pagePaginate: pagePaginateSlice.reducer,
  },
});

export default store;

// ===> Від Юлі  
// import { recipesReducer } from './recipes/recipes-slice';
// const store = configureStore({
//   reducer: recipesReducer,
// });
// export default store;
// ===> Від Юлі

// >>>>>>> main
// const store = configureStore({
//     reducer: {
//         auth: authReducer
//     },
// });

