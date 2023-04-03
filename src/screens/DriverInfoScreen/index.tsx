import React from 'react';
import {Linking, View} from 'react-native';

import {useAppSelector} from '@utils/reduxHelper';
import {useNavigation, useRoute} from '@react-navigation/native';

import {AppText, AppError} from '@components';

import {
  MainStackNavigationGenericProp,
  MainStackRouteGenericProp,
} from '@navigation/types';
import {ColorEnum} from '@theme/colors';
import {selectDriverById} from '@store/features/selectors';

import styles from './styles';

const DriverInfoScreen: React.FC = () => {
  const {goBack, navigate} =
    useNavigation<MainStackNavigationGenericProp<'DriverInfo'>>();
  const {
    params: {driverId},
  } = useRoute<MainStackRouteGenericProp<'DriverInfo'>>();

  const driverInfo = useAppSelector(state => selectDriverById(state, driverId));

  const onBiographyPress = async () => {
    if (!driverInfo) return;

    await Linking.openURL(driverInfo.url);
  };

  const onRacesPress = () => {
    if (!driverInfo) return;

    navigate('DriverRaces', {driverId: driverInfo.driverId});
  };

  if (!driverInfo) return <AppError retry={goBack} retryText="Go Back" />;

  return (
    <View style={styles.container}>
      <View style={styles.personalInfoContainer}>
        <AppText fontSize="LargePlus" bold>
          {driverInfo.givenName} {driverInfo.familyName}
        </AppText>
        <AppText color={ColorEnum.Gray}>{driverInfo.nationality}</AppText>
      </View>

      <View style={styles.otherInfoContainer}>
        <AppText fontSize="Large" bold style={styles.infoText}>
          Permanent number:
          <AppText fontSize="Large">
            {' '}
            {driverInfo.permanentNumber || 'No number'}
          </AppText>
        </AppText>

        <AppText fontSize="Large" bold style={styles.infoText}>
          DOB: <AppText fontSize="Large">{driverInfo.dateOfBirth}</AppText>{' '}
        </AppText>

        <AppText fontSize="Large" bold style={styles.infoText}>
          Information:{' '}
          <AppText
            fontSize="Large"
            color={ColorEnum.Blue}
            onPress={onBiographyPress}>
            Biography Link
          </AppText>{' '}
        </AppText>

        <AppText fontSize="Large" bold style={styles.infoText}>
          Races:{' '}
          <AppText
            fontSize="Large"
            color={ColorEnum.Blue}
            onPress={onRacesPress}>
            Driver Races
          </AppText>{' '}
        </AppText>
      </View>
    </View>
  );
};

export default DriverInfoScreen;
