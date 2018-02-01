// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
// $FlowFixMe
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';
// $FlowFixMe
import { CardHeader } from '../QuestionAnswer/cards/subcomponents/CardHeader';
import type { Basket } from '../../model/types/basketPeopleAmountsTypes';
import type { TFunction } from '../../types/generalTypes';
import type { DutyReport, VatReport } from '../../model/types/calculationTypes';
import { PeriodOfEntryRow } from './subcomponents/PeriodOfEntryRow';
import { DutyList } from './subcomponents/DutyList';
import { VatList } from './subcomponents/VatList';
import { ScrollViewCard } from '../General Components/ScrollViewCard';
import { TimePickerModal } from '../Modals/TimePickerModal/TimePickerModal';
import { getReceiptEntryTime } from '../../reducers';
import { TotalOwedRow } from './subcomponents/TotalOwedRow';

type OverviewProps = {
  dutyReport: DutyReport,
  vatReport: VatReport,
  basket: Basket,
  modalVisible?: boolean,
};

type ReduxInjectedProps = {
  setReceiptEntryTime: (receiptEntryTime: string) => void,
  receiptEntryTime: string,
};

type OverviewState = {
  modalVisible: boolean,
};

class OverviewInner extends React.Component<
  OverviewProps & { t: TFunction } & ReduxInjectedProps,
  OverviewState
> {
  static defaultProps = {
    modalVisible: false,
  };

  constructor(props: OverviewProps & ReduxInjectedProps & { t: TFunction }) {
    super(props);
    this.state = {
      modalVisible: props.modalVisible || false,
    };
  }

  handleShowModal() {
    this.setState({ modalVisible: true });
  }

  handleHideModal() {
    this.setState({
      modalVisible: false,
    });
  }

  handleSetReceiptEntryTime(entryTime: string) {
    this.props.setReceiptEntryTime(entryTime);
  }

  render() {
    const { dutyReport, vatReport, t } = this.props;
    const fullVat = vatReport.get('totalVat');
    const fullDuty = dutyReport.get('totalDuty');

    return (
      <ScrollViewCard>
        <CardHeader text={t('overViewTitle')} />
        <DutyList />
        <VatList />
        <TotalOwedRow />
        <PeriodOfEntryRow
          title={t('receipt:entryTime')}
          subtitle={t('receipt:chooseOtherEntryTime')}
          time={this.props.receiptEntryTime}
          onPress={() => this.handleShowModal()}
        />

        <TimePickerModal
          modalVisible={this.state.modalVisible}
          onHideModal={() => this.handleHideModal()}
          onSelectTime={entryTime => this.handleSetReceiptEntryTime(entryTime)}
        />
      </ScrollViewCard>
    );
  }
}

const mapStateToProps = state => ({
  receiptEntryTime: getReceiptEntryTime(state),
});

const mapDispatchToProps = dispatch => ({
  setReceiptEntryTime: (receiptEntryTime: string) =>
    dispatch({ type: 'SET_RECEIPT_ENTRY_TIME', receiptEntryTime }),
});

export const Overview = (connect(mapStateToProps, mapDispatchToProps)(
  translate(['payment', 'receipt', 'mainCategories', 'categories'])(
    OverviewInner
  )
): ComponentType<OverviewProps>);
