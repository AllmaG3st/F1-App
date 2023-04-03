import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Driver} from '../api/types';
import {DriversState} from './types';

const initialState: DriversState = {
  drivers: [],
};

const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {
    addDrivers: (state, action: PayloadAction<Driver[]>) => {
      state.drivers = [...state.drivers, ...action.payload];
    },
  },
});

export const {addDrivers} = driversSlice.actions;

export default driversSlice.reducer;
