import { createSlice } from '@reduxjs/toolkit';

export const pagePaginateSlice = createSlice({
  name: 'pagePaginate',
  initialState: 0,
  reducers: {
    setPaginateSlice(_, action) {
      return action.payload;
    },
  },
});

export const getPagePaginate = state => state.pagePaginate;
export const { setPaginateSlice } = pagePaginateSlice.actions;
