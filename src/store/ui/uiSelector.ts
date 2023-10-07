import { UiMenuType, UiModalType, UiOffersColumnType } from '@/types/ui/types';
import { RootState } from '../store';

export const selectSidebarData = (state: RootState) => state.ui.sidebarData;
export const selectShowMenu = (state: RootState, variant: UiMenuType) =>
  state.ui.menus[variant];
export const selectShowModal = (state: RootState, variant: UiModalType) =>
  state.ui.modals[variant];
export const selectShowOffersDataColumn = (
  state: RootState,
  variant: UiOffersColumnType
) => state.ui.offersDataColumns[variant];
