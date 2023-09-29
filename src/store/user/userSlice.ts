import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const token = cookies.get('accessToken') || '';
const username = cookies.get('username') || '';

type UserStateType = {
  token: string;
  username: string;
};

const initialState: UserStateType = {
  token,
  username,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    removeUserToken: (state) => {
      state.token = '';
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
