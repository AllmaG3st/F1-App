import ApiClient from './axios';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {IGetDriversRequest, IGetDriversResponse} from './types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: ApiClient.defaults.baseURL,
  }),

  endpoints: builder => ({
    getDrivers: builder.query<IGetDriversResponse, IGetDriversRequest>({
      query: ({limit = 10, offset = 10}) =>
        `f1/drivers.json?limit=${limit}&offset=${offset}`,
    }),
  }),
});

export const {useGetDriversQuery} = apiSlice;
