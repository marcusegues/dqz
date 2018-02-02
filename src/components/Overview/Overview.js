// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
// $FlowFixMe
import { translate } from 'react-i18next';
// $FlowFixMe
import { CardHeader } from '../QuestionAnswer/cards/subcomponents/CardHeader';
import type { Navigation, TFunction } from '../../types/generalTypes';
import { PeriodOfEntryRow } from './subcomponents/PeriodOfEntryRow';
import { DutyList } from './subcomponents/DutyList';
import { VatList } from './subcomponents/VatList';
import { ScrollViewCard } from '../General Components/ScrollViewCard';
import { TimePickerModal } from '../Modals/TimePickerModal/TimePickerModal';
import { getReceiptEntryTime } from '../../reducers';
import { TotalOwedRow } from './subcomponents/TotalOwedRow';
import { InfoNote } from './subcomponents/InfoNote';
import { getConvertedLocalTimeToSwiss } from '../../model/utils';
import { BackAndContinueButtons } from '../Buttons/BackAndContinueButtons';

type OverviewProps = {
  modalVisible?: boolean,
  onProceedToPayment?: () => void,
  paymentDisabled?: boolean,
  navigation: Navigation,
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
    onProceedToPayment: () => {},
    paymentDisabled: true,
  };

  constructor(props: OverviewProps & ReduxInjectedProps & { t: TFunction }) {
    super(props);
    this.state = {
      modalVisible: props.modalVisible || false,
    };
  }

  componentDidMount() {
    const { receiptEntryTime } = this.props;
    if (receiptEntryTime === '')
      this.props.setReceiptEntryTime(getConvertedLocalTimeToSwiss().toString());
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
    const {
      t,
      receiptEntryTime,
      onProceedToPayment,
      navigation,
      paymentDisabled,
    } = this.props;
    const momentReceiptEntryTime =
      receiptEntryTime !== ''
        ? DateTime.fromISO(receiptEntryTime, {
            zone: 'Europe/Zurich',
          }).toFormat('dd.MM.y HH:mm')
        : getConvertedLocalTimeToSwiss().toFormat('dd.MM.y HH:mm');
    return (
      <ScrollViewCard>
        <CardHeader text={t('overViewTitle')} />
        <DutyList />
        <VatList />
        <TotalOwedRow />
        <PeriodOfEntryRow
          title={t('receipt:entryTime')}
          subtitle={t('receipt:chooseOtherEntryTime')}
          time={momentReceiptEntryTime}
          onPress={() => this.handleShowModal()}
        />
        <InfoNote />
        <BackAndContinueButtons
          onPressBack={() => navigation.goBack()}
          onPressContinue={() => onProceedToPayment && onProceedToPayment()}
          textContinue={t('general:toPayment')}
          continueDisabled={paymentDisabled}
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
  translate(['payment', 'receipt', 'mainCategories', 'categories', 'general'])(
    OverviewInner
  )
): ComponentType<OverviewProps>);
