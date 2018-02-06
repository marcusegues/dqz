// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';
import { VatRow } from './VatRow';
import { RightAlignedHeader } from './RightAlignedHeader';
import { getVatReport } from '../../../reducers';
import type { TFunction } from '../../../types/generalTypes';
import type { VatReport } from '../../../model/types/calculationTypes';

type VatListProps = {
  vatReport: VatReport,
};

const VatListInner = ({ vatReport, t }: VatListProps & { t: TFunction }) => (
  <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
    <RightAlignedHeader text={t('receipt:vatColumn')} />
    <View style={{ flex: 1, width: '100%' }}>
      <VatRow
        amount={`~${vatReport.get('totalAmountsApprox')}`}
        vat={vatReport.get('totalVat')}
        borderTop
      />
    </View>
  </View>
);

const mapStateToProps = state => ({
  vatReport: getVatReport(state),
});

export const VatList = (connect(mapStateToProps, null)(
  translate(['payment'])(VatListInner)
): ComponentType<{}>);
