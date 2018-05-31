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
import { addQuantity, deleteQuantity } from '../../model/configurationApi';
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
import { storeReceiptEntryTime } from '../../asyncStorage/storageApi';
import { dateTimeToFormat } from '../../utils/datetime/datetime';
import { GoodQuantityListModal } from '../Modals/GoodQuantityListModal/GoodQuantityListModal';
import type { MainCategory } from '../../types/reducers/declaration';
import type { CardProps } from '../QuestionAnswer/QuestionAnswerContainer';
import { QAStateEnriched } from '../QuestionAnswer/QuestionAnswerContainer';

type OverviewProps = (
  props: CardProps
) => {
  modalVisible?: boolean,
  onProceedToPayment: () => void,
  paymentDisabled?: boolean,
  navigation: Navigation,
  qaState: QAStateEnriched,
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
  quantityListModalVisible: boolean,
  updateInterval: number,
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
  };

  constructor(
    props: OverviewProps &
      ReduxInjectedProps & { t: TFunction, i18n: { language: string } }
  ) {
    super(props);
    this.state = {
      quantityListModalVisible: false,
      modalVisible: props.modalVisible || false,
      updateInterval: -1,
      modalCategory: undefined,
      modalMainCategory: undefined,
    };
  }

  componentDidMount() {
    this.setUpdateInterval();
    this.updateTimes();
  }

  componentWillUnmount() {
    clearInterval(this.state.updateInterval);
  }

  onPressEdit = (category, mainCategory) => {
    console.log(
      `onPressEdit --> category = ${category} mainCategory = ${mainCategory}`
    );
    this.setState({
      quantityListModalVisible: true,
      modalCategory: category,
      modalMainCategory: mainCategory,
    });
    // this.handleShowModal();
  };

  // const categotyReceived = getCategory(category);

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

  // handleShowModal = () => {
  //   console.log('handleShowModal');
  //   this.setState({ quantityListModalVisible: true });
  //
  //   // this.setState({ modalVisible: true });
  // };

  handleHideModal() {
    this.setState({
      modalVisible: false,
      quantityListModalVisible: false,
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

  handleDeleteQuantity(category: Category, index: number) {
    const { basket } = this.props.qaState;

    console.log(`basket = ${basket} `);
    console.log(`category = ${category} && index = ${index}`);
    const updatedBasket = deleteQuantity(basket, category, index);
    this.handleUpdate(updatedBasket);
  }

  handleAddQuantity(category: Category, quantity: number) {
    const { basket } = this.props.qaState;
    // const { basket } = this.props.qaState;

    const updatedBasket = addQuantity(basket, category, quantity);
    this.handleUpdate(updatedBasket);
  }

  handleUpdate(basket: Basket) {
    return this.props.onUpdate(basket);
  }

  render() {
    // console.log(this.props.basket);

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
          onPressEdit={this.onPressEdit}
          // onPressEdit={() => this.handleShowModal()}
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
          onPress={() => {}}
          // onPress={() => this.handleShowModal()}
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
          onHide={() => this.handleHideModal()}
          modalVisible={this.state.quantityListModalVisible}
          modalCategory={this.state.modalCategory}
          modalMainCategory={this.state.modalMainCategory}
          basket={basket}
          onAddQuantity={() => {}}
          // onAddQuantity={(category: Category, quantity: number) => {
          //   this.handleAddQuantity(category, quantity);
          // }}
          // onDeleteQuantity={() => {}}
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
});

export const Overview = (connect(mapStateToProps, mapDispatchToProps)(
  translate(['payment', 'receipt', 'mainCategories', 'categories', 'general'])(
    OverviewInner
  )
): ComponentType<OverviewProps>);
