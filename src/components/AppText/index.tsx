import React, {PropsWithChildren} from 'react';
import {Text, TextProps} from 'react-native';

import {ColorEnum} from '@theme/colors';
import {FontSizeEnum} from '@theme/fonts';

import styles from './styles';

interface Props extends TextProps {
  bold?: boolean;
  color?: ColorEnum;
  fontSize?: keyof typeof FontSizeEnum;
}

const AppText = ({
  children,
  bold = false,
  fontSize = 'Medium',
  color = ColorEnum.Black,
  style = {},
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <Text
      style={[
        styles.text,
        bold && styles.textBold,
        color && {color},
        fontSize && {fontSize: FontSizeEnum[fontSize]},
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default AppText;
