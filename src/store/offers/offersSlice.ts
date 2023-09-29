import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  data: null,
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
});

export const offersActions = offersSlice.actions;
export const offersReducer = offersSlice.reducer;
