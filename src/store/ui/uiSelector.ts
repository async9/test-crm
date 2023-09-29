import { RootState } from '../store';

export const selectShowSidebar = (state: RootState) => state.ui.showSidebar;
export const selectShowUserMenu = (state: RootState) => state.ui.showUserMenu;
