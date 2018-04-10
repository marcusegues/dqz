// @flow
import React from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';
import type { ComponentType } from 'react';
import type { TFunction } from '../../../../../types/generalTypes';
import { CollapsedCardText } from '../../subcomponents/CollapsedCardText';

type QuantityInputInfoProps = {
  duty: number,
};

const QuantityInputInfoInner = ({
  duty,
  t,
}: QuantityInputInfoProps & { t: TFunction }) => (
  <View>
    <CollapsedCardText text={`${t(`customsDuty`)}:`} />
    <CollapsedCardText text={`CHF ${duty.toFixed(2)}`} />
  </View>
);

export const QuantityInputInfo = (translate(['general'])(
  QuantityInputInfoInner
): ComponentType<QuantityInputInfoProps>);
