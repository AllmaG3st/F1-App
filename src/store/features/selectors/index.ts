import {Driver} from './../api/types';
import {RootState} from '@store';
import {createSelector} from '@reduxjs/toolkit';

const selectDriver = (state: RootState) => state.drivers.drivers;

export const selectDriverById = createSelector(
  [selectDriver, (_, id) => id],
  (data, id) => data.find((driver: Driver) => driver.driverId === id),
);
