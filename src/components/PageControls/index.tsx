import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {AppText} from '..';

import {ColorEnum} from '@theme/colors';

import styles from './styles';

type Props = {
  showPrev: boolean;
  showNext: boolean;
  onPrevPress: () => void;
  onNextPress: () => void;
};

const PageControls: React.FC<Props> = ({
  showPrev,
  showNext,
  onNextPress,
  onPrevPress,
}) => {
  return (
    <View style={styles.container}>
      {showPrev ? (
        <TouchableOpacity onPress={onPrevPress}>
          <AppText fontSize="LargePlus" color={ColorEnum.Gray}>
            {`< Prev`}
          </AppText>
        </TouchableOpacity>
      ) : null}

      {showNext ? (
        <TouchableOpacity onPress={onNextPress}>
          <AppText fontSize="LargePlus" color={ColorEnum.Gray}>
            {`Next >`}
          </AppText>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default PageControls;
