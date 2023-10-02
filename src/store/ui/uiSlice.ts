import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type UiStateType = {
  showSidebar: boolean;
  showUserMenu: boolean;
};

const initialState: UiStateType = {
  showSidebar: false,
  showUserMenu: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showSidebar: (state, action: PayloadAction<boolean>) => {
      state.showSidebar = action.payload;
    },
    showUserMenu: (state, action: PayloadAction<boolean>) => {
      state.showUserMenu = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
