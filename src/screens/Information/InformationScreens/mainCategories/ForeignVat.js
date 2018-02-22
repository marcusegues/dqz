// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text } from 'react-native';
import type { TFunction } from '../../../../types/generalTypes';

const ownStyles = {};

type ForeignVatInnerProps = {
  t: TFunction,
};

const ForeignVatInner = ({ t }: ForeignVatInnerProps) => (
  <View>
    <Text>Foreign Vat</Text>
  </View>
);

export const ForeignVat = (translate(['information'])(
  ForeignVatInner
): ComponentType<ForeignVatInnerProps>);
