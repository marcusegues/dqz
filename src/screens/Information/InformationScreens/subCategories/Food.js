// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text } from 'react-native';
import type { TFunction } from '../../../../types/generalTypes';

const ownStyles = {};

type FoodInnerProps = {
  t: TFunction,
};

const FoodInner = ({ t }: FoodInnerProps) => (
  <View>
    <Text>Food</Text>
  </View>
);

export const Food = (translate(['information'])(FoodInner): ComponentType<
  FoodInnerProps
>);
