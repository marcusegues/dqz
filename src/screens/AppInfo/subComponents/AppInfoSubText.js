// @flow
import React from 'react';
// $FlowFixMe
import { Text, View } from 'react-native';
import { moderateScale } from '../../../styles/Scaling';
import { LIGHT_GREY } from '../../../styles/colors';

const ownStyles = {
  greyContainer: {
    backgroundColor: LIGHT_GREY,
    paddingHorizontal: 16,
    // paddingVertical: 10,
  },
};

type AppInfoSubTextProps = {
  text: string,
  style?: Object,
  greyBox?: boolean,
};

export const AppInfoSubText = ({
  text,
  style,
  greyBox,
}: AppInfoSubTextProps) => (
  <View style={greyBox ? ownStyles.greyContainer : {}}>
    <Text
      style={{
        color: '#1A1A1A',
        fontWeight: '300',
        fontFamily: 'roboto_light',
        lineHeight: moderateScale(21),
        ...style,
      }}
    >
      {text}
    </Text>
  </View>
);

AppInfoSubText.defaultProps = {
  style: {},
  greyBox: false,
};
