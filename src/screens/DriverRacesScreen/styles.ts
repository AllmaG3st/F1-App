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

  // ========== Single Race ==========
  raceContainer: {
    padding: 10,
  },
  raceLocationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  raceInfoContainer: {
    marginTop: 20,
  },
  infoText: {
    marginVertical: 5,
  },
});
