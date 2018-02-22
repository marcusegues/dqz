// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text } from 'react-native';
import type { TFunction } from '../../../../types/generalTypes';

const ownStyles = {};

type PlantsInnerProps = {
  t: TFunction,
};

const PlantsInner = ({ t }: PlantsInnerProps) => (
  <View>
    <Text>Plants</Text>
  </View>
);

export const Plants = (translate(['information'])(PlantsInner): ComponentType<
  PlantsInnerProps
>);
