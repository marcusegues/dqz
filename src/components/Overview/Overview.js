// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { translate } from 'react-i18next';
// $FlowFixMe
import { ScrollView, View } from 'react-native';
// $FlowFixMe
import { Card } from '../QuestionAnswer/cards/Card';
import { CardHeader } from '../QuestionAnswer/cards/subcomponents/CardHeader';
import { CardRowText } from '../QuestionAnswer/cards/subcomponents/CardRowText';
import type { Basket } from '../../model/types/basketPeopleAmountsTypes';
import { moderateScale, verticalScale } from '../../styles/Scaling';
import type { TFunction } from '../../types/generalTypes';
import type { DutyReport, VatReport } from '../../model/types/calculationTypes';
import { PeriodOfEntryRow } from './subcomponents/PeriodOfEntryRow';
import { DutyList } from './subcomponents/DutyList';
import { VatList } from './subcomponents/VatList';
import { ScrollViewCard } from '../General Components/ScrollViewCard';

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
    <ScrollViewCard>
      <CardHeader text={t('overViewTitle')} />
      <DutyList />
      <VatList />
      <PeriodOfEntryRow
        title={t('receipt:entryTime')}
        subtitle={t('receipt:chooseOtherEntryTime')}
        time="Heute, 16:30 - 18:30 Uhr"
        onPress={() => {}}
      />
      <View style={{ flex: 1, width: '100%' }}>
        <View style={{ alignSelf: 'flex-end', marginRight: 16, marginTop: 16 }}>
          <CardRowText
            text={t('receipt:sumText', {
              value: (fullVat + fullDuty).toFixed(2),
            })}
            style={ownStyles.cardRowTextSum}
          />
        </View>
      </View>
    </ScrollViewCard>
  );
};

export const Overview = (translate([
  'payment',
  'receipt',
  'mainCategories',
  'categories',
])(OverviewInner): ComponentType<OverviewProps>);
