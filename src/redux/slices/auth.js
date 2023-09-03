import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../axios.js";
 

const initialState = {
    data: null,
    status: 'idle', 
};



const setLoadingState = (state) => {
    state.status = 'loading';
    state.data = null;
};

const setLoadedState = (state, action) => {
    state.status = 'loaded';
    state.data = action.payload;
};

const setErrorState = (state) => {
    state.status = 'error';
    state.data = null;
};

export const logout = createAsyncThunk('auth/logout', async (params) => {
  const token = localStorage.token;
  

  try {
      await axios.post('/auth/logout', params, {
         headers: {
      'authorization': `Bearer ${token}`,
    },
    });
  } catch (error) {
    throw error;
  }
});

export const fetchAuth = createAsyncThunk('/auth/fetchAuth', async (params) => {
    const {data} = await axios.post('/auth/logIn', params);
    return data;
});

export const fetchRegister = createAsyncThunk('/auth/fetchRegister', async (params) => {
    const {data} = await axios.post('/auth/register', params);
    return data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setPending: setLoadingState,
        setFulfilled: setLoadedState,
        setRejected: setErrorState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuth.pending, setLoadingState)
            .addCase(fetchAuth.fulfilled, setLoadedState)
            .addCase(fetchAuth.rejected, setErrorState)
            .addCase(fetchRegister.pending, setLoadingState)
            .addCase(fetchRegister.fulfilled, setLoadedState)
            .addCase(fetchRegister.rejected, setErrorState)
            .addCase(logout.pending, setLoadingState)
            .addCase(logout.fulfilled, (state) => {
              state.status = 'idle';
              state.data = null; 
            })
            .addCase(logout.rejected, setErrorState);
        
            
            
        
            
    },
});

export const selectIsAuth = state => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;
export const { setPending, setFulfilled, setRejected } = authSlice.actions;