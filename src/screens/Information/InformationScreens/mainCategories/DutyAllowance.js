// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text } from 'react-native';
import type { TFunction } from '../../../../types/generalTypes';

const ownStyles = {};

type DutyAllowanceInnerProps = {
  t: TFunction,
};

const DutyAllowanceInner = ({ t }: DutyAllowanceInnerProps) => (
  <View>
    <Text>duty Allowance</Text>
  </View>
);

export const DutyAllowance = (translate(['information'])(
  DutyAllowanceInner
): ComponentType<DutyAllowanceInnerProps>);
