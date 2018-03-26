// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import { type, size } from '../../../styles/fonts';
import { MAIN_BLACK } from '../../../styles/colors';
import { verticalScale } from '../../../styles/Scaling';

const ownStyles = {
  text: {
    color: MAIN_BLACK,
    fontWeight: '300',
    fontFamily: type.light,
    fontSize: size.medium,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    paddingVertical: verticalScale(2),
  },
};

type AppInfoLinkProps = {
  text: string,
  onPress: () => void,
  style?: Object,
};

export const AppInfoLink = ({ text, onPress, style }: AppInfoLinkProps) => (
  <Text onPress={onPress} style={[ownStyles.text, { ...style }]}>
    {text}
  </Text>
);

AppInfoLink.defaultProps = {
  style: {},
};
