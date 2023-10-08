import { apiSlice } from './apiSlice';

export const extendApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    status: builder.mutation({
      query: (query) => {
        return {
          url: `/leads/v2/status/${query.params}`,
          method: 'PUT',
          body: {
            ...query.body,
          },
        };
      },
    }),
    getMessages: builder.query({
      query: (query) => {
        return {
          url: `/assignment${query}`,
        };
      },
    }),
  }),
});

export const { useStatusMutation, useGetMessagesQuery } = extendApiSlice;
