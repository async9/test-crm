import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const getToken = cookies.get('accessToken');
const accessToken = getToken ? getToken : '';

const initialState: any = {
  token: accessToken,
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
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
