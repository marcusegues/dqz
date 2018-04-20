// @flow
import React from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
import type { ComponentType } from 'react';
import { RedText } from '../../../components/General Components/RedText';

type SkipThisStepProps = {
  onPress: () => void,
  text: string,
};

const SkipThisStepInner = ({ onPress, text }: SkipThisStepProps) => (
  <Touchable background={Touchable.Ripple('#006699')} onPress={() => onPress()}>
    <RedText text={text.toUpperCase()} />
  </Touchable>
);

export const SkipThisStep = (translate(['vatAllowance'])(
  SkipThisStepInner
): ComponentType<SkipThisStepProps>);
