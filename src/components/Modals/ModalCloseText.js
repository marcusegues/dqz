// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { moderateScale } from '../../styles/Scaling';

const ownStyles = {
  container: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: moderateScale(32),
    padding: moderateScale(15),
  },
  text: {
    color: '#fff',
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(14),
  },
};

type ModalCloseTextProps = {
  text: string,
  onModalHide: () => void,
};

const ModalCloseTextInner = ({ onModalHide, text }: ModalCloseTextProps) => (
  <TouchableWithoutFeedback onPress={onModalHide}>
    <View style={ownStyles.container}>
      <Text style={ownStyles.text}>{text.toUpperCase()}</Text>
    </View>
  </TouchableWithoutFeedback>
);

export const ModalCloseText = (translate(['modal'])(
  ModalCloseTextInner
): ComponentType<ModalCloseTextProps>);
