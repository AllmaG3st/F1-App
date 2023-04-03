import {StyleSheet} from 'react-native';

import {ColorEnum} from '@theme/colors';
import {getDeviceHeight} from '@utils/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    height: getDeviceHeight() / 10,
    width: '100%',

    columnGap: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: ColorEnum.LightGray,
  },

  // ========== Single Driver ==========
  driverContainer: {
    padding: 10,
  },
  personalInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
