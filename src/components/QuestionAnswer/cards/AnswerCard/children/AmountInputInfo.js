// @flow
import React from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text } from 'react-native';
import type { ComponentType } from 'react';
import type { TFunction } from '../../../../../types/generalTypes';

type AmountInputInfoProps = {
  vat: number,
};

const AmountInputInfoInner = ({
  vat,
  t,
}: AmountInputInfoProps & { t: TFunction }) => (
  <View>
    <Text>{`${t(`customsVat`)}:`}</Text>
    <Text>{`CHF ${vat.toFixed(2)}`}</Text>
  </View>
);

export const AmountInputInfo = (translate(['general'])(
  AmountInputInfoInner
): ComponentType<AmountInputInfoProps>);
