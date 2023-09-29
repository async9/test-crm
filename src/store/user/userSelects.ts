import { RootState } from '../store';

export const selectUserToken = (state: RootState) => state.user.token;
export const selectUsername = (state: RootState) => state.user.username;
