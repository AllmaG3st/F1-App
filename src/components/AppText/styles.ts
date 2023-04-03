import {ColorEnum} from '@theme/colors';
import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  text: {
    color: ColorEnum.Black,
    fontFamily: 'Helvetica',
  },
  textBold: {
    fontWeight: Platform.OS === 'android' ? 'bold' : undefined,
    fontFamily: 'Helvetica-Bold',
  },
});
