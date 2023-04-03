import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainStackParamList = {
  Drivers: undefined;
  DriverInfo: {driverId: string};
  DriverRaces: {driverId: string};
};

export type MainStackNavigationGenericProp<
  T extends keyof MainStackParamList & string,
> = NativeStackNavigationProp<MainStackParamList, T>;

export type MainStackRouteGenericProp<
  T extends keyof MainStackParamList & string,
> = RouteProp<MainStackParamList, T>;
