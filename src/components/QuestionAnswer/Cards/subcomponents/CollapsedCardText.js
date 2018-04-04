// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import { size } from '../../../../styles/fonts';
import { CARD_GREY } from '../../../../styles/colors';

type CollapsedCardTextProps = {
  text: string,
};

export const CollapsedCardText = ({ text }: CollapsedCardTextProps) => (
  <Text
    style={{
      fontSize: size.small,
      color: CARD_GREY,
    }}
  >
    {text}
  </Text>
);
