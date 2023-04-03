import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DriversScreen, DriverInfoScreen, DriverRacesScreen} from '@screens';

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Drivers" component={DriversScreen} />
      <MainStack.Screen name="DriverInfo" component={DriverInfoScreen} />
      <MainStack.Screen name="DriverRaces" component={DriverRacesScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
