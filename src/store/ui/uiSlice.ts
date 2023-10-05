import { UiMenuType } from '@/components/types/ui/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type UiStateType = {
  menus: {
    user: boolean;
    sidebar: boolean;
    targets: boolean;
    notifications: boolean;
    navigation: boolean;
  };
};

const initialState: UiStateType = {
  menus: {
    user: false,
    sidebar: false,
    targets: false,
    notifications: false,
    navigation: false,
  },
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showMenu: (
      state,
      action: PayloadAction<{ variant: UiMenuType; show: boolean }>
    ) => {
      const { variant, show } = action.payload;
      state.menus[variant] = show;
    },
  },
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
