import { apiSlice } from './apiSlice';

export const extendApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => {
        return {
          url: '/login',
          method: 'POST',
          body: credentials,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = extendApiSlice;
