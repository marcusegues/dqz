// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text } from 'react-native';
import type { TFunction } from '../../../../types/generalTypes';

const ownStyles = {};

type PersonalEffectsInnerProps = {
  t: TFunction,
};

const PersonalEffectsInner = ({ t }: PersonalEffectsInnerProps) => (
  <View>
    <Text>Personal Effects</Text>
  </View>
);

export const PersonalEffects = (translate(['information'])(
  PersonalEffectsInner
): ComponentType<PersonalEffectsInnerProps>);
