// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';
import { VatRow } from '../../Rows/configured/Overview/VatRow/VatRow';
import { RightAlignedHeader } from './RightAlignedHeader';
import type { TFunction } from '../../../types/generalTypes';
import type {
  Amounts,
  People,
} from '../../../model/types/basketPeopleAmountsTypes';
import type { CurrencyObject } from '../../../model/currencies';
import { calculateVat } from '../../../model/vatCalculations';

type VatListProps = {
  large: boolean,
  amounts: Amounts,
  people: People,
  currencies: CurrencyObject,
  headerRight?: boolean,
  borderTop?: boolean,
  borderBottom?: boolean,
  swipeable?: boolean,
};

const VatListInner = ({
  amounts,
  people,
  currencies,
  large,
  t,
  headerRight = true,
  borderTop = true,
  borderBottom = true,
  swipeable = false,
}: VatListProps & { t: TFunction }) => {
  const vatReport = calculateVat(amounts, people, currencies);
  return (
    <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
      {headerRight ? (
        <RightAlignedHeader text={t('receipt:vatColumn')} />
      ) : null}
      <View style={{ flex: 1, width: '100%' }}>
        <VatRow
          large={large}
          amounts={amounts}
          currencies={currencies}
          vat={vatReport.get('totalVat')}
          borderTop={borderTop}
          borderBottom={borderBottom}
          swipeable={swipeable}
        />
      </View>
    </View>
  );
};

export const VatList = (translate(['payment'])(
  VatListInner
): ComponentType<{}>);
