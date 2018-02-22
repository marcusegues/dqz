// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text } from 'react-native';
import type { TFunction } from '../../../../types/generalTypes';

const ownStyles = {};

type FuelAndRepairsInnerProps = {
  t: TFunction,
};

const FuelAndRepairsInner = ({ t }: FuelAndRepairsInnerProps) => (
  <View>
    <Text>Fuel And Repairs</Text>
  </View>
);

export const FuelAndRepairs = (translate(['information'])(
  FuelAndRepairsInner
): ComponentType<FuelAndRepairsInnerProps>);
