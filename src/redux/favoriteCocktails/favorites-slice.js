import { createSlice } from '@reduxjs/toolkit';	
import { fetchFavorites, deleteFavorites, addFavorites } from './favorites-operations';	
	
const initialState = {	
    items: [],	
    isLoading: false,	
    error: null,	
};	
const favoritesSlice = createSlice({	
    name: 'favorites',	
    initialState,	
    reducers: {	
    changeFavPage(state, action) {	
    state.page = action.payload;	
    },},	
extraReducers: builder => {	
builder	
// FETCH	
    .addCase(fetchFavorites.fulfilled, (state, { payload }) => {	
    state.isLoading = false;	
    state.items = payload;	
    console.log(payload);	
    })	
    .addCase(fetchFavorites.pending, state => {	
    state.isLoading = true;	
    state.error = null;	
    })	
    .addCase(fetchFavorites.rejected, (state, { payload }) => {	
    state.isLoading = false;	
    state.error = payload;	
    })	
    // DELETE	
    .addCase(deleteFavorites.pending, state => {	
    state.isLoading = true;	
    state.error = null;	
    })	
    .addCase(deleteFavorites.fulfilled, (state, {payload}) => {	
    state.isLoading = false;	
    state.items = state.items.filter(({ _id }) => _id !== payload);	
    console.log(payload);
    // state.favorites.items = state.favorites.items.filter(({ _id }) => _id !== action.payload.recipeId);	
    })	
    .addCase(deleteFavorites.rejected, (state, { payload }) => {	
    state.isLoading = false;	
    state.error = payload;	
    })	
    // ADD	
    .addCase(addFavorites.fulfilled, (state, {payload}) => {
        console.log(payload);	
    state.isLoading = false;	
    })	
    },	
});	

export const { changeFavPage } = favoritesSlice.actions;	
export const favoritesReducer = favoritesSlice.reducer;	