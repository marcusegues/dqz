// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';
// $FlowFixMe
import { Card } from '../QuestionAnswer/cards/Card';
import { CardHeader } from '../QuestionAnswer/cards/subcomponents/CardHeader';
import { getTotalQuantity } from '../../model/configurationApi';
import { DutyRow } from './subcomponents/DutyRow';
import { CardRowSubText } from '../QuestionAnswer/cards/subcomponents/CardRowSubText';
import { CardRowText } from '../QuestionAnswer/cards/subcomponents/CardRowText';
import { getMainCategory } from '../../types/reducers/appReducer';
import type { Basket } from '../../model/types/basketPeopleAmountsTypes';
import { ReceiptSubText } from '../Receipts/subComponents/ReceiptSubText';
import { VatRow } from './subcomponents/VatRow';
import { moderateScale, verticalScale } from '../../styles/Scaling';
import type { TFunction } from '../../types/generalTypes';
import type { DutyReport, VatReport } from '../../model/types/calculationTypes';

type OverviewProps = {
  dutyReport: DutyReport,
  vatReport: VatReport,
  basket: Basket,
};

const ownStyles = {
  cardRowTextSum: {
    alignSelf: 'flex-end',
    marginTop: verticalScale(15),
    marginBottom: verticalScale(35),
  },
  receiptSubTextVat: {
    fontSize: moderateScale(12),
    alignSelf: 'flex-end',
    marginTop: verticalScale(25),
  },
};

const OverviewInner = ({
  dutyReport,
  vatReport,
  basket,
  t,
}: OverviewProps & { t: TFunction }) => {
  const fullVat = vatReport.get('totalVat');
  const fullDuty = dutyReport.get('totalDuty');
  return (
    <Card>
      <CardHeader text={t('overViewTitle')} />
      <View style={{ alignSelf: 'flex-end', marginRight: 16, marginBottom: 2 }}>
        <CardRowSubText text={t('dutyColumn')} />
      </View>
      <View style={{ flex: 1, width: '100%' }}>
        {dutyReport
          .get('dutyByCategoryRaw')
          .entrySeq()
          .filter(entry => getTotalQuantity(basket, entry[0]) > 0)
          .map(([category, dutyOfCategory], idx) => (
            <DutyRow
              borderTop={idx === 0}
              key={category}
              mainCategory={getMainCategory(category)}
              category={category}
              quantity={getTotalQuantity(basket, category)}
              duty={dutyOfCategory}
            />
          ))}

        <View
          style={{ alignSelf: 'flex-end', marginRight: 16, marginBottom: 2 }}
        >
          <ReceiptSubText
            text={t('receipt:vatColumn')}
            style={ownStyles.receiptSubTextVat}
          />
        </View>

        <View style={{ flex: 1, width: '100%' }}>
          <VatRow
            quantity={`~${vatReport.get('totalAmountsApprox')}`}
            vat={vatReport.get('totalVat')}
          />
        </View>
        <View style={{ alignSelf: 'flex-end', marginRight: 16, marginTop: 16 }}>
          <CardRowText
            text={t('receipt:sumText', {
              value: (fullVat + fullDuty).toFixed(2),
            })}
            style={ownStyles.cardRowTextSum}
          />
        </View>
      </View>
    </Card>
  );
};

export const Overview = (translate([
  'payment',
  'receipt',
  'mainCategories',
  'categories',
])(OverviewInner): ComponentType<OverviewProps>);
