import { createSlice } from '@reduxjs/toolkit';
import { fetchRecipes, deleteRecipes } from './recipes-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchRecipes.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
        console.log(payload);
      })
      .addCase(fetchRecipes.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteRecipes.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteRecipes.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ _id }) => _id !== payload);
      })
      .addCase(deleteRecipes.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const recipesReducer = recipesSlice.reducer;
