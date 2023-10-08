import { apiSlice } from './apiSlice';

export const extendApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    status: builder.mutation({
      query: (query) => {
        return {
          url: `/leads/v2/status/${query}`,
          method: 'PUT',
          body: {
            search: '',
            searchType: '',
            agents: [],
            startDate: '2023-08-30',
            endDate: '2023-09-30',
            additionalAssignmentStatus: null,
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
