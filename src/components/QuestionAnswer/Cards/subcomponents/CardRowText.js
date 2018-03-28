// @flow
import React from 'react';
// $FlowFixMe
import { Text, View } from 'react-native';
import { moderateScale } from '../../../../styles/Scaling';
import { LIGHT_GREY } from '../../../../styles/colors';

const ownStyles = {
  greyContainer: {
    backgroundColor: LIGHT_GREY,
    paddingHorizontal: 16,
  },
};

type CardRowTextProps = {
  text: string,
  style?: Object,
  greyBox?: boolean,
};

export const CardRowText = ({ text, style, greyBox }: CardRowTextProps) => (
  <View style={greyBox ? ownStyles.greyContainer : {}}>
    <Text
      style={{
        fontFamily: 'roboto_medium',
        fontSize: moderateScale(14),
        color: '#24253D',
        ...style,
      }}
    >
      {text}
    </Text>
  </View>
);

CardRowText.defaultProps = {
  style: {},
  greyBox: false,
};
