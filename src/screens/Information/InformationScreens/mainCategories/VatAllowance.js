// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text } from 'react-native';
import type { TFunction } from '../../../../types/generalTypes';

const ownStyles = {};

type VatAllowanceInnerProps = {
  t: TFunction,
};

const VatAllowanceInner = ({ t }: VatAllowanceInnerProps) => (
  <View>
    <Text>vat Allowance</Text>
  </View>
);

export const VatAllowance = (translate(['information'])(
  VatAllowanceInner
): ComponentType<VatAllowanceInnerProps>);
