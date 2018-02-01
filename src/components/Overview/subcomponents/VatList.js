import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { View } from 'react-native';
import { VatRow } from './VatRow';
import { RightAlignedHeader } from './RightAlignedHeader';
import { getVatReport } from '../../../reducers';

class VatListInner extends React.Component {
  render() {
    const { vatReport, t } = this.props;

    return (
      <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
        <RightAlignedHeader text={t('receipt:vatColumn')} />
        <View style={{ flex: 1, width: '100%' }}>
          <VatRow
            quantity={`~${vatReport.get('totalAmountsApprox')}`}
            vat={vatReport.get('totalVat')}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  vatReport: getVatReport(state),
});

export const VatList = (connect(mapStateToProps, null)(
  translate(['payment'])(VatListInner)
): ComponentType<{}>);
