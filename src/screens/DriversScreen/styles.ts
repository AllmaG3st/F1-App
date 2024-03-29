import {StyleSheet} from 'react-native';

import {ColorEnum} from '@theme/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
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
