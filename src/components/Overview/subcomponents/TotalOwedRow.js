// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';

import { CardRowText } from '../../QuestionAnswer/Cards/subcomponents/CardRowText';
import { verticalScale } from '../../../styles/Scaling';
import type { TFunction } from '../../../types/generalTypes';

import type {
  Amounts,
  Basket,
  People,
} from '../../../model/types/basketPeopleAmountsTypes';
import type { CurrencyObject } from '../../../model/currencies';
import { calculateVat } from '../../../model/vatCalculations';
import { calculateDuty } from '../../../model/dutyCalculations';

const ownStyles = {
  cardRowTextSum: {
    alignSelf: 'flex-end',
    marginTop: verticalScale(15),
    marginBottom: verticalScale(35),
  },
};

type TotalOwedProps = {
  basket: Basket,
  people: People,
  currencies: CurrencyObject,
  amounts: Amounts,
};

const TotalOwedRowInner = ({
  basket,
  people,
  currencies,
  amounts,
  t,
}: TotalOwedProps & { t: TFunction }) => {
  const fullVat = calculateVat(amounts, people, currencies).get('totalVat');
  const fullDuty = calculateDuty(basket, people).get('totalDuty');

  return (
    <View style={{ alignSelf: 'flex-end', marginRight: 16, marginTop: 8 }}>
      <CardRowText
        text={t('receipt:sumText', {
          value: (fullVat + fullDuty).toFixed(2),
        })}
        style={ownStyles.cardRowTextSum}
      />
    </View>
  );
};

export const TotalOwedRow = (translate(['receipt'])(
  TotalOwedRowInner
): ComponentType<{}>);
