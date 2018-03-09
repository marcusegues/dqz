// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import { type, size } from '../../../styles/fonts';
import { MAIN_BLACK } from '../../../styles/colors';

const ownStyles = {
  text: {
    color: MAIN_BLACK,
    fontWeight: '300',
    fontFamily: type.light,
    fontSize: size.medium,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
};

type AppInfoLinkProps = {
  text: string,
  onPress: () => void,
};

export const AppInfoLink = ({ text, onPress }: AppInfoLinkProps) => (
  <Text onPress={onPress} style={ownStyles.text}>
    {text}
  </Text>
);
