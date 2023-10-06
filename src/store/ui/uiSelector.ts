import { UiMenuType, UiModalType } from '@/components/types/ui/types';
import { RootState } from '../store';

export const selectSidebarData = (state: RootState) => state.ui.sidebarData;
export const selectShowMenu = (state: RootState, variant: UiMenuType) =>
  state.ui.menus[variant];
export const selectShowModal = (state: RootState, variant: UiModalType) =>
  state.ui.modals[variant];
