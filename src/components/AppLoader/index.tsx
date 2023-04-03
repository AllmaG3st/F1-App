import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {ColorEnum} from '@theme/colors';

import styles from './styles';

type Props = {
  fullScreen?: boolean;
  size?: 'small' | 'large';
};

const AppLoader: React.FC<Props> = ({fullScreen = false, size = 'large'}) => {
  return (
    <View style={[styles.container, fullScreen && {flex: 1}]}>
      <ActivityIndicator size={size} color={ColorEnum.Gray} />
    </View>
  );
};

export default AppLoader;
