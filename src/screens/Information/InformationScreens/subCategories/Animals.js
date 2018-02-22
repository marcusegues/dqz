// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text } from 'react-native';
import type { TFunction } from '../../../../types/generalTypes';

const ownStyles = {};

type AnimalsInnerProps = {
  t: TFunction,
};

const AnimalsInner = ({ t }: AnimalsInnerProps) => (
  <View>
    <Text>Animals</Text>
  </View>
);

export const Animals = (translate(['information'])(AnimalsInner): ComponentType<
  AnimalsInnerProps
>);
