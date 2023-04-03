import {getDeviceHeight} from '@utils/dimensions';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: getDeviceHeight() / 10,
    width: '100%',

    columnGap: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
