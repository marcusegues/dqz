// @flow
import React from 'react';
// $FlowFixMe
import { Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from '../../../../styles/Scaling';
import { BLACK, GREY, MAIN_RED, WHITE } from '../../../../styles/colors';

const touchableStyles = {
  paddingVertical: 15,
  alignItems: 'center',
};

const touchableTextStyles = {
  fontFamily: 'roboto_regular',
  fontSize: moderateScale(14),
};

const ownStyles = {
  topTouchable: {
    flex: 0.5,
  },
  touchableActive: {
    ...touchableStyles,
    backgroundColor: WHITE,
    borderTopWidth: 3,
    borderTopColor: MAIN_RED,
  },
  touchableInactive: {
    ...touchableStyles,
    backgroundColor: GREY,
    borderTopWidth: 3,
    borderTopColor: GREY,
  },
  touchableActiveText: {
    ...touchableTextStyles,
    color: BLACK,
  },
  touchableInactiveText: {
    ...touchableTextStyles,
    color: WHITE,
  },
};

type ModalTabProps = {
  onPress: Function,
  standardInput: boolean,
  text: string,
};

const ModalTab = ({ standardInput, onPress, text }: ModalTabProps) => (
  <View style={ownStyles.topTouchable}>
    <TouchableOpacity
      onPress={onPress}
      style={
        standardInput ? ownStyles.touchableActive : ownStyles.touchableInactive
      }
    >
      <Text
        style={
          standardInput
            ? ownStyles.touchableActiveText
            : ownStyles.touchableInactiveText
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);

export default ModalTab;
