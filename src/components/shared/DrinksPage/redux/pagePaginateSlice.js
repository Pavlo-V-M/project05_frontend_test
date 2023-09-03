import { createSlice } from '@reduxjs/toolkit';

export const pagePaginateSlice = createSlice({
  name: 'pagePaginate',
  initialState: 0,
  reducers: {
    setPaginateValue(_, action) {
      return action.payload;
    },
  },
});

export const getPagePaginate = state => state.pagePaginate;
export const { setPaginateValue } = pagePaginateSlice.actions;
