import React from 'react';
import {TouchableOpacity, View, ViewStyle} from 'react-native';

import AppText from '@components/AppText';

import styles from './styles';

type Props = {
  retry: () => void;
  errorText?: string;
  retryText?: string;
};

const AppError: React.FC<Props> = ({
  retry,
  errorText = 'Something went wrong',
  retryText = 'Retry',
}) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.errorText} fontSize="ExtraLarge">
        {errorText}
      </AppText>

      <View style={styles.errorRetryContainer}>
        <TouchableOpacity style={styles.errorRetry} onPress={retry}>
          <AppText>{retryText}</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppError;
