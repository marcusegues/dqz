// @flow
import React from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text } from 'react-native';
import type { ComponentType } from 'react';
import type { TFunction } from '../../../../../types/generalTypes';
import { globalStyles } from '../../../../../styles/globalStyles';

type AmountInputInfoProps = {
  vat: number,
};

const AmountInputInfoInner = ({
  vat,
  t,
}: AmountInputInfoProps & { t: TFunction }) => (
  <View>
    <Text style={globalStyles.collapsedCardText}>{`${t(`customsVat`)}:`}</Text>
    <Text style={globalStyles.collapsedCardText}>{`CHF ${vat.toFixed(
      2
    )}`}</Text>
  </View>
);

export const AmountInputInfo = (translate(['general'])(
  AmountInputInfoInner
): ComponentType<AmountInputInfoProps>);
