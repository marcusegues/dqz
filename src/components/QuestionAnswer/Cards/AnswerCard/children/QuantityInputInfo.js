// @flow
import React from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View, Text } from 'react-native';
import type { ComponentType } from 'react';
import type { TFunction } from '../../../../../types/generalTypes';
import { globalStyles } from '../../../../../styles/globalStyles';

type QuantityInputInfoProps = {
  duty: number,
};

const QuantityInputInfoInner = ({
  duty,
  t,
}: QuantityInputInfoProps & { t: TFunction }) => (
  <View>
    <Text style={globalStyles.collapsedCardText}>{`${t(`customsDuty`)}:`}</Text>
    <Text style={globalStyles.collapsedCardText}>{`CHF ${duty.toFixed(
      2
    )}`}</Text>
  </View>
);

export const QuantityInputInfo = (translate(['general'])(
  QuantityInputInfoInner
): ComponentType<QuantityInputInfoProps>);
