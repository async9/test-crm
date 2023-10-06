import { SidebarDataType, UiMenuType } from '@/components/types/ui/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const getMenuItems = localStorage.getItem('menuItems') || '';
const menuItems = getMenuItems ? JSON.parse(getMenuItems) : null;

type UiStateType = {
  sidebarData: null | SidebarDataType[];
  menus: {
    user: boolean;
    sidebar: boolean;
    targets: boolean;
    notifications: boolean;
    navigation: boolean;
  };
};

const initialState: UiStateType = {
  sidebarData: menuItems,
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
    setSidebarData: (state, action) => {
      state.sidebarData = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
