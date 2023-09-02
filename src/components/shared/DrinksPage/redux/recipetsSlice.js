import { createSlice } from '@reduxjs/toolkit';

export const recipetsSlice = createSlice({
  name: 'dataRecipets',
  initialState: {
    // currentPage: 0,
  },
  reducers: {
    setDataRecipets(state, action) {
      return action.payload;
    },
  },
});

export const getDataRecipets = state => state.dataRecipets;

export const { setDataRecipets } = recipetsSlice.actions;
