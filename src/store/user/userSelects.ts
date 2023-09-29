import { RootState } from '../store';

export const selectUserToken = (state: RootState) => state.user.token;
