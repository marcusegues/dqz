// @flow
import React from 'react';
// $FlowFixMe
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';
// $FlowFixMe
import Card from '../QuestionAnswer/cards/Card';
import CardHeader from '../QuestionAnswer/cards/subcomponents/CardHeader';
import { getTotalQuantity } from '../../model/configurationApi';
import DutyRow from './subcomponents/DutyRow';
import { calculateDuty } from '../../model/dutyCalculations';
import CardRowSubText from '../QuestionAnswer/cards/subcomponents/CardRowSubText';
import CardRowText from '../QuestionAnswer/cards/subcomponents/CardRowText';
import { getMainCategory } from '../../types/reducers/declaration';
import type {
  Basket,
  People,
} from '../../model/types/basketPeopleAmountsTypes';

type OverviewProps = {
  basket: Basket,
  people: People,
  t: (field: string, params?: {}) => string,
};

const Overview = ({ basket, people, t }: OverviewProps) => {
  const dutyReport = calculateDuty(basket, people);
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
          .map(([category, duty], idx) => (
            <DutyRow
              borderTop={idx === 0}
              key={category}
              mainCategory={getMainCategory(category)}
              category={category}
              quantity={getTotalQuantity(basket, category)}
              duty={duty}
            />
          ))}
        <View style={{ alignSelf: 'flex-end', marginRight: 16, marginTop: 16 }}>
          <CardRowText
            text={`${t('sumText')}: ${dutyReport.totalDuty.toFixed(2)}`}
          />
        </View>
      </View>
    </Card>
  );
};

export default translate(['payment', 'mainCategories', 'categories'])(Overview);
