import { SidebarDataType, UiMenuType, UiModalType } from '@/types/ui/types';
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
  modals: {
    newEntryForm: boolean;
    viewOptionsTable: boolean;
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
  modals: {
    newEntryForm: false,
    viewOptionsTable: false,
  },
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSidebarData: (state, action) => {
      state.sidebarData = action.payload;
    },
    showMenu: (
      state,
      action: PayloadAction<{ variant: UiMenuType; show: boolean }>
    ) => {
      const { variant, show } = action.payload;
      state.menus[variant] = show;
    },
    showModal: (
      state,
      action: PayloadAction<{ variant: UiModalType; show: boolean }>
    ) => {
      const { variant, show } = action.payload;
      state.modals[variant] = show;
    },
  },
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
