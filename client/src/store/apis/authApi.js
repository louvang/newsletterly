import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints(builder) {
    return {
      fetchCurrUser: builder.query({
        query: () => {
          return {
            url: 'user',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchCurrUserQuery } = authApi;
export { authApi };
