import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DriversScreen from '../../screens/DriversScreen';
import DriverInfoScreen from '@screens/DriverInfoScreen';

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Drivers" component={DriversScreen} />
      <MainStack.Screen name="DriverInfo" component={DriverInfoScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
