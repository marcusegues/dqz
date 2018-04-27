// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
// $FlowFixMe
import { translate } from 'react-i18next';
// $FlowFixMe
import { Text, View } from 'react-native';
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
} from '../../reducers/selectors';
import { TotalOwedRow } from './subcomponents/TotalOwedRow';
import { InfoNote } from './subcomponents/InfoNote';
import { flatLargeAmounts } from '../../model/utils';
import { BackAndContinueButtons } from '../Buttons/BackAndContinueButtons';
import type {
  Amounts,
  Basket,
  People,
} from '../../model/types/basketPeopleAmountsTypes';
import type { CurrencyObject } from '../../model/currencies';
import { storeReceiptEntryTime } from '../../asyncStorage/storageApi';
import { dateTimeToFormat } from '../../utils/datetime/datetime';

type OverviewProps = {
  modalVisible?: boolean,
  onProceedToPayment: () => void,
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
  updateInterval: number,
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
    paymentDisabled: true,
  };

  constructor(
    props: OverviewProps &
      ReduxInjectedProps & { t: TFunction, i18n: { language: string } }
  ) {
    super(props);
    this.state = {
      modalVisible: props.modalVisible || false,
      updateInterval: -1,
    };
  }

  componentDidMount() {
    this.setUpdateInterval();
    this.updateTimes();
  }

  componentWillUnmount() {
    clearInterval(this.state.updateInterval);
  }

  setUpdateInterval() {
    const updateInterval = setInterval(() => this.updateTimes(), 1000);
    this.setState({ updateInterval });
  }

  updateTimes() {
    const { modalVisible } = this.state;
    const { setReceiptEntryTime, receiptEntryTime } = this.props;
    const localTime: DateTime = DateTime.local();

    if (receiptEntryTime === '') {
      setReceiptEntryTime(localTime.toString());
      return;
    }

    const prev = DateTime.fromISO(receiptEntryTime);
    if (
      localTime.valueOf() > prev.valueOf() &&
      localTime.minute > prev.minute &&
      !modalVisible
    ) {
      setReceiptEntryTime(localTime.toString());
    }
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
    return `${dateTimeToFormat(momentReceiptEntryTime, {
      locale: i18n.language,
      format: 'datetime',
    })} - ${dateTimeToFormat(momentReceiptEntryTime.plus({ hours: 2 }), {
      locale: i18n.language,
      format: 'datetime',
    })}`;
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

    if (receiptEntryTime === '') {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    const momentReceiptEntryTime: DateTime = DateTime.fromISO(receiptEntryTime);

    return (
      <ScrollViewCard>
        <CardHeader text={t('overViewTitle')} />
        <DutyList basket={basket} people={people} />
        <VatList
          large={false}
          people={people}
          amounts={amounts}
          currencies={currencies}
          swipeable
        />
        {flatLargeAmounts(amounts).length ? (
          <VatList
            large
            borderTop={false}
            people={people}
            amounts={amounts}
            currencies={currencies}
            headerRight={false}
            swipeable
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
          onPressBack={() => navigation.dispatch({ type: 'GO_BACK' })}
          onPressContinue={() => onProceedToPayment()}
          textContinue={t('general:toPayment')}
          confirmationDisabled={paymentDisabled}
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
