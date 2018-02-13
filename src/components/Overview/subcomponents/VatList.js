// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';
import { VatRow } from '../../Rows/configured/Overview/VatRow/VatRow';
import { RightAlignedHeader } from './RightAlignedHeader';
import { getAmounts, getVatReport } from '../../../reducers';
import type { TFunction } from '../../../types/generalTypes';
import type { VatReport } from '../../../model/types/calculationTypes';
import type { Amounts } from '../../../model/types/basketPeopleAmountsTypes';

type VatListProps = {
  large: boolean,
  amounts: Amounts,
  vatReport: VatReport,
};

const VatListInner = ({
  vatReport,
  amounts,
  large,
  t,
}: VatListProps & { t: TFunction }) => (
  <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
    <RightAlignedHeader text={t('receipt:vatColumn')} />
    <View style={{ flex: 1, width: '100%' }}>
      <VatRow
        large={large}
        amounts={amounts}
        amount={`~${vatReport.get('totalAmountsApprox')}`}
        vat={vatReport.get('totalVat')}
        borderTop
        borderBottom
      />
    </View>
  </View>
);

const mapStateToProps = state => ({
  amounts: getAmounts(state),
  vatReport: getVatReport(state),
});

export const VatList = (connect(mapStateToProps, null)(
  translate(['payment'])(VatListInner)
): ComponentType<{}>);
