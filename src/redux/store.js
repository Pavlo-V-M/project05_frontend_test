import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// <<<<<<< DrinkPages
import { filterSlice } from '../components/shared/DrinksPage/redux/filterSlice';
import { recipetsSlice } from '../components/shared/DrinksPage/redux/recipetsSlice';
import { pagePaginateSlice } from '../components/shared/DrinksPage/redux/pagePaginateSlice';
import { numberCardsSlice } from '../components/shared/DrinksPage/redux/numberCardsSlice';
// <<<<<<< DrinkPages

// <<<<<<< Favorites			
import { favoritesReducer } from './favoriteCocktails/favorites-slice';			
// <<<<<<< Favorites			

import { recipesReducer } from './recipes/recipes-slice';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    valueFilter: filterSlice.reducer,
    dataRecipets: recipetsSlice.reducer,
    pagePaginate: pagePaginateSlice.reducer,
    numberCards: numberCardsSlice.reducer,
    recipes: recipesReducer,
    favorites: persistReducer(favoritesReducer),
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
