// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { translate } from 'react-i18next';
import { VatAmountListRowItem } from './VatAmountListRowItem';
import { storeAmounts } from '../../../../../../asyncStorage/storageApi';
import type { Amounts } from '../../../../../../model/types/basketPeopleAmountsTypes';
import { deleteAmount } from '../../../../../../model/configurationApi';
import {
  flatLargeAmounts,
  flatNormalAmounts,
} from '../../../../../../model/utils';

type VatAmountListProps = {
  amounts: Amounts,
  large: boolean,
  setContentHeight?: (height?: number) => void,
  swipeable?: boolean,
};

type ReduxInject = {
  setAmounts: (amounts: Amounts) => void,
};

const VatAmountListInner = ({
  // eslint-disable-next-line no-unused-vars
  setContentHeight = height => {},
  amounts,
  large,
  swipeable = false,
  setAmounts,
}: VatAmountListProps & ReduxInject) => {
  const flatAmounts = large
    ? flatLargeAmounts(amounts)
    : flatNormalAmounts(amounts);
  return (
    <View
      onLayout={event => {
        setContentHeight(event.nativeEvent.layout.height);
      }}
    >
      {flatAmounts.map(a => (
        <VatAmountListRowItem
          key={a.id}
          flatAmount={a}
          swipeable={swipeable}
          onDelete={() => setAmounts(deleteAmount(amounts, a.id))}
          fullWidth
        />
      ))}
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  setAmounts: amounts => {
    storeAmounts(amounts);
    dispatch({
      type: 'SET_AMOUNTS',
      amounts,
    });
  },
});

export const VatAmountList = (connect(null, mapDispatchToProps)(
  translate(['receipt'])(VatAmountListInner)
): ComponentType<VatAmountListProps>);
