// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import { type, size } from '../../../styles/fonts';

const ownStyles = {
  text: {
    fontFamily: type.regular,
    fontSize: size.small,
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
