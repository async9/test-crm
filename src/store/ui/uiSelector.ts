import { UiMenuType } from '@/components/types/ui/types';
import { RootState } from '../store';

export const selectSidebarData = (state: RootState) => state.ui.sidebarData;
export const selectShowMenu = (state: RootState, variant: UiMenuType) =>
  state.ui.menus[variant];
