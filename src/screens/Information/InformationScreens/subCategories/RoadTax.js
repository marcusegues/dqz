// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text } from 'react-native';
import type { TFunction } from '../../../../types/generalTypes';

const ownStyles = {};

type RoadTaxInnerProps = {
  t: TFunction,
};

const RoadTaxInner = ({ t }: RoadTaxInnerProps) => (
  <View>
    <Text>Road Tax</Text>
  </View>
);

export const RoadTax = (translate(['information'])(RoadTaxInner): ComponentType<
  RoadTaxInnerProps
>);
