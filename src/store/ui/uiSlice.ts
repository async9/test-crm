import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type UiStateType = {
  showUserMenu: boolean;
};

const initialState: UiStateType = {
  showUserMenu: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showUserMenu: (state, action: PayloadAction<boolean>) => {
      state.showUserMenu = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
