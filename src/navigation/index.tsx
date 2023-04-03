import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './navigators/MainStackNavigator';

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
