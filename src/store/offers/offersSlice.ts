import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
});

export const offersActions = offersSlice.actions;
export const offersReducer = offersSlice.reducer;
