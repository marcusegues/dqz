// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import { size } from '../../../../styles/fonts';
import { CARD_GREY } from '../../../../styles/colors';

type CollapsedCardTextProps = {
  text: string,
  style?: {},
};

export const CollapsedCardText = ({ text, style }: CollapsedCardTextProps) => (
  <Text
    style={{
      fontSize: size.small,
      color: CARD_GREY,
      ...style,
    }}
  >
    {text}
  </Text>
);

CollapsedCardText.defaultProps = {
  style: {},
};
