// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';

import { getDutyReport, getVatReport } from '../../../reducers';
import { CardRowText } from '../../QuestionAnswer/cards/subcomponents/CardRowText';
import { verticalScale } from '../../../styles/Scaling';
import type { TFunction } from '../../../types/generalTypes';
import type {
  DutyReport,
  VatReport,
} from '../../../model/types/calculationTypes';

const ownStyles = {
  cardRowTextSum: {
    alignSelf: 'flex-end',
    marginTop: verticalScale(15),
    marginBottom: verticalScale(35),
  },
};

type TotalOwedProps = {
  dutyReport: DutyReport,
  vatReport: VatReport,
};

const TotalOwedRowInner = ({
  dutyReport,
  vatReport,
  t,
}: TotalOwedProps & { t: TFunction }) => {
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
};

const mapStateToProps = state => ({
  dutyReport: getDutyReport(state),
  vatReport: getVatReport(state),
});

export const TotalOwedRow = (connect(mapStateToProps, null)(
  translate(['receipt'])(TotalOwedRowInner)
): ComponentType<{}>);
