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
import { PeriodOfEntryRow } from './subcomponents/PeriodOfEntryRow';
import { RightAlignedHeader } from './subcomponents/RightAlignedHeader';
import { DutyList } from './subcomponents/DutyList';

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
      <DutyList />
      <View style={{ flex: 1, width: '100%' }}>
        <RightAlignedHeader text={t('receipt:vatColumn')} />

        <View style={{ flex: 1, width: '100%' }}>
          <VatRow
            quantity={`~${vatReport.get('totalAmountsApprox')}`}
            vat={vatReport.get('totalVat')}
          />
        </View>

        <PeriodOfEntryRow
          title={t('receipt:entryTime')}
          subtitle={t('receipt:chooseOtherEntryTime')}
          time="Heute, 16:30 - 18:30 Uhr"
          onPress={() => {}}
        />

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
