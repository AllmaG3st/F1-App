import {TouchableOpacity, View} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {AppText} from '@components';

import {ColorEnum} from '@theme/colors';
import {Driver} from '@store/features/api/types';
import {MainStackNavigationGenericProp} from '@navigation/types';

import styles from './styles';

type Props = {
  driver: Driver;
};

const SingleDriver: React.FC<Props> = ({driver}) => {
  const {navigate} = useNavigation<MainStackNavigationGenericProp<'Drivers'>>();

  const onDriverPress = () =>
    navigate('DriverInfo', {driverId: driver.driverId});

  return (
    <TouchableOpacity onPress={onDriverPress} style={styles.driverContainer}>
      <View style={styles.personalInfoContainer}>
        <AppText fontSize="Large" bold>
          {driver.givenName} {driver.familyName}
        </AppText>
        <AppText fontSize="Large">{driver.dateOfBirth}</AppText>
      </View>

      <AppText color={ColorEnum.Gray}>{driver.nationality}</AppText>
    </TouchableOpacity>
  );
};

export default SingleDriver;
