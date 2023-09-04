import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../components/shared/api/FavoriteById/FavoriteById';

export const fetchFavorites = createAsyncThunk('favorites/fetch', async (_, thunkAPI) => {
    try {
        const data = await api.getMyFavorites();
        return data;
        } catch ({ response }) {
        return thunkAPI.rejectWithValue(response);
        }
    }
);

export const deleteFavorites = createAsyncThunk('favorites/delete', async (id, { rejectWithValue }) => {
    try {
        const data = await api.deleteFavorites(id);
        return data;
        } catch ({ response }) {
        return rejectWithValue(response);
        }
    }
);

export const addFavorites = createAsyncThunk('favorite/addFavorites', async (id, { rejectWithValue }) => {
    try {
        const data = await api.addFavorites(id);
        return data;
        } catch (response) {
        return rejectWithValue(response);
        }
});