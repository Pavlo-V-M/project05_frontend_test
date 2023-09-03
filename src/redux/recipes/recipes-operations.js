import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../components/shared/api/MyRecipes/MyRecipes';

export const fetchRecipes = createAsyncThunk(
  'recipes/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.getMyRecipes();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);

export const deleteRecipes = createAsyncThunk(
  'recipes/delete',
  async (id, { rejectWithValue }) => {
    try {
      const data = await api.deleteRecipes(id);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
