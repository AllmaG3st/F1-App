import React from 'react';
import {View} from 'react-native';

import {AppText} from '@components';

import {Race} from '@store/features/api/types';
import {ColorEnum} from '@theme/colors';

import styles from './styles';

type Props = {
  race: Race;
};

const SingleRace: React.FC<Props> = ({race}) => {
  return (
    <View style={styles.raceContainer}>
      <View style={styles.raceLocationContainer}>
        <AppText fontSize="LargePlus" bold>
          {race.raceName}
        </AppText>
        <AppText color={ColorEnum.Gray}>
          {race.Circuit.Location.country}
        </AppText>
      </View>

      <View style={styles.raceInfoContainer}>
        <AppText fontSize="Large" bold style={styles.infoText}>
          Season: <AppText fontSize="Large">{race.season}</AppText>{' '}
        </AppText>

        <AppText fontSize="Large" bold style={styles.infoText}>
          Circuit:{' '}
          <AppText fontSize="Large">{race.Circuit.circuitName}</AppText>{' '}
        </AppText>

        <AppText fontSize="Large" bold style={styles.infoText}>
          Position:{' '}
          <AppText fontSize="Large">{race.Results[0].position}</AppText>{' '}
        </AppText>
      </View>
    </View>
  );
};

export default SingleRace;
