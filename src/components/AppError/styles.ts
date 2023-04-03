import {ColorEnum} from '@theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    textAlign: 'center',
  },
  errorRetryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  errorRetry: {
    borderColor: ColorEnum.Green,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});
