import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { userReducer } from './user/userSlice';
import { offersReducer } from './offers/offersSlice';
import { apiSlice } from '../api/apiSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    offers: offersReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
