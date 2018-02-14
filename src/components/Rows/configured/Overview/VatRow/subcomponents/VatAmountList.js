// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { translate } from 'react-i18next';
import type { Amounts } from '../../../../../../model/types/basketPeopleAmountsTypes';
import {
  flatLargeAmounts,
  flatNormalAmounts,
} from '../../../../../../model/utils';
import { VatAmountListRowItem } from './VatAmountListRowItem';

type VatAmountListProps = {
  large: boolean,
  amounts: Amounts,
  setContentHeight?: (height: number) => void,
};

const VatAmountListInner = ({
  setContentHeight = () => {},
  large,
  amounts,
}: VatAmountListProps) => {
  const relevantAmounts = large
    ? flatLargeAmounts(amounts)
    : flatNormalAmounts(amounts);
  return (
    <View
      onLayout={event => {
        setContentHeight(event.nativeEvent.layout.height);
      }}
    >
      {relevantAmounts.map(a => (
        <VatAmountListRowItem key={a.id} flatAmount={a} fullWidth />
      ))}
    </View>
  );
};

VatAmountListInner.defaultProps = {
  setContentHeight: () => {},
};

export const VatAmountList = (translate(['receipt'])(
  VatAmountListInner
): ComponentType<VatAmountListProps>);
