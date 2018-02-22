// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text } from 'react-native';
import type { TFunction } from '../../../../types/generalTypes';

const ownStyles = {};

type CashInnerProps = {
  t: TFunction,
};

const CashInner = ({ t }: CashInnerProps) => (
  <View>
    <Text>Cash</Text>
  </View>
);

export const Cash = (translate(['information'])(CashInner): ComponentType<
  CashInnerProps
>);
