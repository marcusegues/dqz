// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { translate } from 'react-i18next';
import type { FlatAmount } from '../../../../../../model/utils';
import { VatAmountListRowItem } from './VatAmountListRowItem';

type VatAmountListProps = {
  flatAmounts: Array<FlatAmount>,
  setContentHeight?: (height: number) => void,
};

const VatAmountListInner = ({
  setContentHeight = () => {},
  flatAmounts,
}: VatAmountListProps) => (
  <View
    onLayout={event => {
      setContentHeight(event.nativeEvent.layout.height);
    }}
  >
    {flatAmounts.map(a => (
      <VatAmountListRowItem key={a.id} flatAmount={a} fullWidth />
    ))}
  </View>
);

VatAmountListInner.defaultProps = {
  setContentHeight: () => {},
};

export const VatAmountList = (translate(['receipt'])(
  VatAmountListInner
): ComponentType<VatAmountListProps>);
