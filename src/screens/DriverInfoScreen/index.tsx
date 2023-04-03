import React from 'react';
import {Linking, TouchableOpacity, View} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';
import {useAppSelector} from '@utils/reduxHelper';

import {AppText, AppError} from '@components';

import {
  MainStackNavigationGenericProp,
  MainStackRouteGenericProp,
} from '@navigation/types';
import {ColorEnum} from '@theme/colors';
import {selectDriverById} from '@store/features/selectors';

import styles from './styles';

const DriverInfoScreen: React.FC = () => {
  const {goBack} =
    useNavigation<MainStackNavigationGenericProp<'DriverInfo'>>();
  const {
    params: {driverId},
  } = useRoute<MainStackRouteGenericProp<'DriverInfo'>>();

  const driverInfo = useAppSelector(state => selectDriverById(state, driverId));

  const onBiographyPress = async () => {
    if (!driverInfo) return;

    await Linking.openURL(driverInfo.url);
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

        <TouchableOpacity onPress={onBiographyPress}>
          <AppText fontSize="Large" bold style={styles.infoText}>
            Information:{' '}
            <AppText fontSize="Large" color={ColorEnum.Blue}>
              Biography Link
            </AppText>{' '}
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DriverInfoScreen;
