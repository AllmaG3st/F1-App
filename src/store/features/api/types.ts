// ============ DRIVERS ============
export interface IGetDriversRequest {
  limit: number;
  offset: number;
}

export interface IGetDriversResponse {
  MRData: MRDataDrivers;
}

export interface MRDataDrivers {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  DriverTable: DriverTable;
}

export interface DriverTable {
  Drivers: Driver[];
}

export interface Driver {
  driverId: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
  permanentNumber?: string;
  code?: string;
}

// ============ RACES ============
export interface IGetRacesByDriverIdRequest extends IGetDriversRequest {
  driverId: string;
}

export interface IGetRacesByDriverIdResponse {
  MRData: MRDataRaces;
}

export interface MRDataRaces {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  RaceTable: RaceTable;
}

export interface RaceTable {
  driverId: string;
  Races: Race[];
}

export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  Results: Result[];
}

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

export interface Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

export interface Result {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
}

export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}
