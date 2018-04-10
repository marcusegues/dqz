// @flow
import React from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';
import type { ComponentType } from 'react';
import type { TFunction } from '../../../../../types/generalTypes';
import { CollapsedCardText } from '../../subcomponents/CollapsedCardText';

type AmountInputInfoProps = {
  vat: number,
};

const AmountInputInfoInner = ({
  vat,
  t,
}: AmountInputInfoProps & { t: TFunction }) => (
  <View>
    <CollapsedCardText text={`${t(`customsVat`)}:`} />
    <CollapsedCardText text={`CHF ${vat.toFixed(2)}`} />
  </View>
);

export const AmountInputInfo = (translate(['general'])(
  AmountInputInfoInner
): ComponentType<AmountInputInfoProps>);
