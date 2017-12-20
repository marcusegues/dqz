/* eslint-disable react/prefer-stateless-function,react/prefer-stateless-function */
import React from 'react';
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

class Overview extends React.Component {
  render() {
    const { basket, people } = this.props;
    const dutyReport = calculateDuty(basket, people);
    return (
      <Card>
        <CardHeader text="Übersicht Ihrer Anmeldung" />
        <View
          style={{ alignSelf: 'flex-end', marginRight: 16, marginBottom: 2 }}
        >
          <CardRowSubText text="Zollabgabe in CHF" />
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
                mainCategory={category}
                category={category}
                quantity={getTotalQuantity(basket, category)}
                duty={duty.toFixed(2)}
              />
            ))}
          <View
            style={{ alignSelf: 'flex-end', marginRight: 16, marginTop: 16 }}
          >
            <CardRowText
              text={`Summe (CHF): ${dutyReport.totalDuty.toFixed(2)}`}
            />
          </View>
        </View>
      </Card>
    );
  }
}

export default Overview;
