import ApiClient from './axios';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {
  IGetDriversRequest,
  IGetDriversResponse,
  IGetRacesByDriverIdRequest,
  IGetRacesByDriverIdResponse,
} from './types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: ApiClient.defaults.baseURL,
  }),

  endpoints: builder => ({
    getDrivers: builder.query<IGetDriversResponse, IGetDriversRequest>({
      query: ({limit = 10, offset = 0}) =>
        `f1/drivers.json?limit=${limit}&offset=${offset}`,
    }),
    getRacesByDriverId: builder.query<
      IGetRacesByDriverIdResponse,
      IGetRacesByDriverIdRequest
    >({
      query: ({limit = 10, offset = 0, driverId}) =>
        `f1/drivers/${driverId}/results.json?limit=${limit}&offset=${offset}`,
    }),
  }),
});

export const {useGetDriversQuery, useGetRacesByDriverIdQuery} = apiSlice;
