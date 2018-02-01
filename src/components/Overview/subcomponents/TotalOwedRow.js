import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { View } from 'react-native';

import { getDutyReport, getVatReport } from '../../../reducers';
import { CardRowText } from '../../QuestionAnswer/cards/subcomponents/CardRowText';
import { verticalScale } from '../../../styles/Scaling';

const ownStyles = {
  cardRowTextSum: {
    alignSelf: 'flex-end',
    marginTop: verticalScale(15),
    marginBottom: verticalScale(35),
  },
};

class TotalOwedRowInner extends React.Component {
  render() {
    const { dutyReport, vatReport, t } = this.props;
    const fullVat = vatReport.get('totalVat');
    const fullDuty = dutyReport.get('totalDuty');

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
  }
}

const mapStateToProps = state => ({
  dutyReport: getDutyReport(state),
  vatReport: getVatReport(state),
});

export const TotalOwedRow = (connect(mapStateToProps, null)(
  translate(['receipt'])(TotalOwedRowInner)
): ComponentType<{}>);
