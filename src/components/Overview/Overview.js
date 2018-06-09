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
  Category,
  People,
} from '../../model/types/basketPeopleAmountsTypes';
import type { CurrencyObject } from '../../model/currencies';
import {
  storeBasket,
  storeReceiptEntryTime,
} from '../../asyncStorage/storageApi';
import { dateTimeToFormat } from '../../utils/datetime/datetime';
import { GoodQuantityListModal } from '../Modals/GoodQuantityListModal/GoodQuantityListModal';
import type { MainCategory } from '../../types/reducers/declaration';
import {
  addQuantity,
  deleteQuantity,
  updateQuantity,
} from '../../model/configurationApi';

type OverviewProps = {
  modalVisible?: boolean,
  onProceedToPayment: () => void,
  paymentDisabled?: boolean,
  navigation: Navigation,
  quantityModalVisible?: boolean,
};

type ReduxInjectedProps = {
  basket: Basket,
  people: People,
  amounts: Amounts,
  currencies: CurrencyObject,
  setReceiptEntryTime: (receiptEntryTime: string) => void,
  receiptEntryTime: string,
  setBasket: (basket: Basket) => void,
};

type OverviewState = {
  modalVisible: boolean,
  updateInterval: number,
  quantityModalVisible: boolean,
  modalCategory?: Category,
  modalMainCategory?: MainCategory,
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
    quantityModalVisible: false,
  };

  constructor(
    props: OverviewProps &
      ReduxInjectedProps & { t: TFunction, i18n: { language: string } }
  ) {
    super(props);
    this.state = {
      modalVisible: props.modalVisible || false,
      quantityModalVisible: props.quantityModalVisible || false,
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

  handleShowQuantityModal = (
    modalCategory: Category,
    modalMainCategory: MainCategory
  ) => {
    this.setState({
      quantityModalVisible: true,
      modalCategory,
      modalMainCategory,
    });
  };

  handleHideQuantityModal() {
    this.setState({
      quantityModalVisible: false,
      modalCategory: undefined,
      modalMainCategory: undefined,
    });
  }

  handleAddQuantity(category: Category, quantity: number) {
    const { basket } = this.props;

    const updatedBasket = addQuantity(basket, category, quantity);
    this.handleUpdate(updatedBasket);
  }

  handleUpdateQuantity(category: Category, index: number, quantity: number) {
    const { basket } = this.props;
    const updatedBasket = updateQuantity(basket, category, index, quantity);
    this.handleUpdate(updatedBasket);
  }

  handleDeleteQuantity(category: Category, index: number) {
    const { basket } = this.props;
    const updatedBasket = deleteQuantity(basket, category, index);
    this.handleUpdate(updatedBasket);
  }

  handleUpdate(basket: Basket) {
    const { setBasket } = this.props;
    return setBasket(basket);
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
        <DutyList
          basket={basket}
          people={people}
          editable
          onPressEdit={this.handleShowQuantityModal}
        />
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
        <GoodQuantityListModal
          onHide={() => this.handleHideQuantityModal()}
          modalVisible={this.state.quantityModalVisible}
          modalCategory={this.state.modalCategory}
          modalMainCategory={this.state.modalMainCategory}
          basket={basket}
          onAddQuantity={(category: Category, quantity: number) => {
            this.handleAddQuantity(category, quantity);
          }}
          onUpdateQuantity={(
            category: Category,
            index: number,
            quantity: number
          ) => {
            this.handleUpdateQuantity(category, index, quantity);
          }}
          onDeleteQuantity={(category: Category, index: number) => {
            this.handleDeleteQuantity(category, index);
          }}
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
  setBasket: basket => {
    storeBasket(basket);
    dispatch({
      type: 'SET_BASKET',
      basket,
    });
  },
});

export const Overview = (connect(mapStateToProps, mapDispatchToProps)(
  translate(['payment', 'receipt', 'mainCategories', 'categories', 'general'])(
    OverviewInner
  )
): ComponentType<OverviewProps>);
