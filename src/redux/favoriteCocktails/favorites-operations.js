import { createAsyncThunk } from '@reduxjs/toolkit';	

			
import * as api from '../../components/services/Api';		
			
export const fetchFavorites = createAsyncThunk(
    'favorites/fetch', 
    async (_, thunkAPI) => {			
    try {			
        const data = await api.getMyFavorites();			
    return data;			
    } catch ({ response }) {			
    return thunkAPI.rejectWithValue(response);			
    }			
}			
);	
			
export const deleteFavorites = createAsyncThunk(
    'favorites/delete', 
    async (_id, { rejectWithValue }) => {			
        try {			
            await api.deleteFavorites(_id);			
        return _id;			
        } catch ({ response }) {			
        return rejectWithValue(response);			
        }			
    }			
);	
			
export const addFavorites = createAsyncThunk(
    'favorite/addFavorites', 
    async (_id, { rejectWithValue }) => {			
    try {			
        const {data: result} = await api.addFavorites(_id);			
        return result;			
        } catch ({response}) {			
        return rejectWithValue(response);			
        }			
});			