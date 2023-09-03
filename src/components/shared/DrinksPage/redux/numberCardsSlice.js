import { createSlice } from '@reduxjs/toolkit';

export const numberCardsSlice = createSlice({
  name: 'numberCards',
  initialState: 9,
  reducers: {
    setNumberCards(_, action) {
      return action.payload;
    },
  },
});

export const getNumberCards = state => state.numberCards;
export const { setNumberCards } = numberCardsSlice.actions;
