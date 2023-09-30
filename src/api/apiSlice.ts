import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  keepUnusedDataFor: 60,
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_DOMAIN}/${
      import.meta.env.VITE_API_VERSION
    }`,
  }),
  endpoints: () => ({}),
});
