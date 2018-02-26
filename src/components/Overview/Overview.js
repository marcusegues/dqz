// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
// $FlowFixMe
import { translate } from 'react-i18next';
// $FlowFixMe
import { CardHeader } from '../QuestionAnswer/Cards/subcomponents/CardHeader';
import type { Navigation, TFunction } from '../../types/generalTypes';
import { PeriodOfEntryRow } from './subcomponents/PeriodOfEntryRow';
import { DutyList } from './subcomponents/DutyList';
import { VatList } from './subcomponents/VatList';
import { ScrollViewCard } from '../General Components/ScrollViewCard';
import { TimePickerModal } from '../Modals/TimePickerModal/TimePickerModal';
import {
  getAmounts,
  getBasket,
  getCurrencies,
  getPeople,
  getReceiptEntryTime,
} from '../../reducers';
import { TotalOwedRow } from './subcomponents/TotalOwedRow';
import { InfoNote } from './subcomponents/InfoNote';
import {
  flatLargeAmounts,
  getConvertedLocalTimeToSwiss,
} from '../../model/utils';
import { BackAndContinueButtons } from '../Buttons/BackAndContinueButtons';
import type {
  Amounts,
  Basket,
  People,
} from '../../model/types/basketPeopleAmountsTypes';
import type { CurrencyObject } from '../../model/currencies';
import { storeReceiptEntryTime } from '../../asyncStorage/storageApi';

type OverviewProps = {
  modalVisible?: boolean,
  onProceedToPayment?: () => void,
  paymentDisabled?: boolean,
  navigation: Navigation,
};

type ReduxInjectedProps = {
  basket: Basket,
  people: People,
  amounts: Amounts,
  currencies: CurrencyObject,
  setReceiptEntryTime: (receiptEntryTime: string) => void,
  receiptEntryTime: string,
};

type OverviewState = {
  modalVisible: boolean,
};

class OverviewInner extends React.Component<
  OverviewProps & {
    t: TFunction,
    i18n: { language: string },
  } & ReduxInjectedProps,
  OverviewState
> {
  static defaultProps = {
    modalVisible: false,
    onProceedToPayment: () => {},
    paymentDisabled: true,
  };

  constructor(
    props: OverviewProps &
      ReduxInjectedProps & { t: TFunction, i18n: { language: string } }
  ) {
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

  periodOfEntryTime(momentReceiptEntryTime) {
    const { i18n } = this.props;
    if (i18n.language === 'fr') {
      return `${momentReceiptEntryTime.toFormat(
        "dd.MM.y HH'h'mm"
      )} - ${momentReceiptEntryTime
        .plus({ hours: 2 })
        .toFormat("dd.MM.y HH'h'mm")}`;
    }
    return `${momentReceiptEntryTime.toFormat(
      'dd.MM.y HH:mm'
    )} - ${momentReceiptEntryTime
      .plus({ hours: 2 })
      .toFormat('dd.MM.y HH:mm')}`;
  }

  render() {
    const {
      t,
      receiptEntryTime,
      onProceedToPayment,
      navigation,
      paymentDisabled,
      basket,
      people,
      amounts,
      currencies,
    } = this.props;
    const momentReceiptEntryTime: DateTime | Date = // TODO: typing not good here,
      // one seems to be a Date and the other a DateTime
      receiptEntryTime !== ''
        ? DateTime.fromISO(receiptEntryTime, {
            zone: 'Europe/Zurich',
          })
        : getConvertedLocalTimeToSwiss();
    return (
      <ScrollViewCard>
        <CardHeader text={t('overViewTitle')} />
        <DutyList basket={basket} people={people} />
        <VatList
          large={false}
          people={people}
          amounts={amounts}
          currencies={currencies}
        />
        {flatLargeAmounts(amounts).length ? (
          <VatList
            large
            borderTop={false}
            people={people}
            amounts={amounts}
            currencies={currencies}
            headerRight={false}
          />
        ) : null}
        <TotalOwedRow
          basket={basket}
          people={people}
          currencies={currencies}
          amounts={amounts}
        />
        <PeriodOfEntryRow
          title={t('receipt:entryTime')}
          subtitle={t('receipt:chooseOtherEntryTime')}
          time={this.periodOfEntryTime(momentReceiptEntryTime)}
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
          currentEntryTime={momentReceiptEntryTime.toString()}
          modalVisible={this.state.modalVisible}
          onHideModal={() => this.handleHideModal()}
          onSelectTime={entryTime => this.handleSetReceiptEntryTime(entryTime)}
        />
      </ScrollViewCard>
    );
  }
}

const mapStateToProps = state => ({
  basket: getBasket(state),
  people: getPeople(state),
  amounts: getAmounts(state),
  currencies: getCurrencies(state),
  receiptEntryTime: getReceiptEntryTime(state),
});

const mapDispatchToProps = dispatch => ({
  setReceiptEntryTime: (receiptEntryTime: string) => {
    storeReceiptEntryTime(receiptEntryTime);
    dispatch({ type: 'SET_RECEIPT_ENTRY_TIME', receiptEntryTime });
  },
});

export const Overview = (connect(mapStateToProps, mapDispatchToProps)(
  translate(['payment', 'receipt', 'mainCategories', 'categories', 'general'])(
    OverviewInner
  )
): ComponentType<OverviewProps>);
