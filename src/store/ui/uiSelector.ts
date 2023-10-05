import { UiMenuType } from '@/components/types/ui/types';
import { RootState } from '../store';

export const selectShowMenu = (state: RootState, variant: UiMenuType) =>
  state.ui.menus[variant];
