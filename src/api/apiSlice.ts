import { RootState } from '@/store/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  keepUnusedDataFor: 60,
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_DOMAIN}/${
      import.meta.env.VITE_API_VERSION
    }`,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.user.token;
      if (token) {
        headers.set('X-Access-Token', token);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
