// @flow
import React from 'react';
// $FlowFixMe
import { Text } from 'react-native';
import { translate } from 'react-i18next';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import type { ComponentType } from 'react';
import { moderateScale } from '../../../styles/Scaling';
import { MAIN_RED } from '../../../styles/colors';
import { size, type } from '../../../styles/fonts';

const ownStyles = {
  text: {
    color: MAIN_RED,
    fontFamily: type.medium,
    fontSize: moderateScale(size.medium),
  },
};

type SkipThisStepProps = {
  onPress: () => void,
  text: string,
};

const SkipThisStepInner = ({ onPress, text }: SkipThisStepProps) => (
  <Touchable background={Touchable.Ripple('#006699')} onPress={() => onPress()}>
    <Text style={ownStyles.text}>{text.toUpperCase()}</Text>
  </Touchable>
);

export const SkipThisStep = (translate(['vatAllowance'])(
  SkipThisStepInner
): ComponentType<SkipThisStepProps>);
