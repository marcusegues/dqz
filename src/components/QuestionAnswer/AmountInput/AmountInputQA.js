// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import type { Amounts } from '../../../model/types/basketPeopleAmountsTypes';
import type { CardProps } from '../QuestionAnswerContainer';
import {
  addAmount,
  addLargeAmount,
  deleteAmount,
  getAmount,
} from '../../../model/configurationApi';
import { calculateVat } from '../../../model/vatCalculations';
import { AmountInputAnswerCard } from '../cards/AnswerCard/configured/AmountInput/AmountInputAnswerCard';
import { CurrencyPickerModal } from '../../Modals/CurrencyPickerModal/CurrencyPickerModal';
import type { Currency } from '../../../model/currencies';
import { AmountInputConfirmationCard } from '../cards/ConfirmationCard/configured/AmountInput/AmountInputConfirmationCard';
import {
  analyticsAmountAdded,
  analyticsAmountDeleted,
  analyticsQACardOpenend,
} from '../../../analytics/analyticsApi';
import type { FlatAmount } from '../../../model/utils';
import { totalAllAmounts } from '../../../model/utils';

export type AmountInputState = {
  modalVisible: boolean,
};

type ExtendedCardProps = CardProps & { large: boolean };

export class AmountInputQA extends React.Component<
  ExtendedCardProps,
  AmountInputState
> {
  constructor(props: ExtendedCardProps) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  getQuestionComponent() {
    const { onAnswer, qaState, large } = this.props;
    if (large) {
      analyticsQACardOpenend('AmountInput (large items)');
    } else {
      analyticsQACardOpenend('AmountInput (normal items)');
    }
    const { modalVisible } = this.state;
    const { currencies, amounts } = qaState;
    return (
      <View>
        <AmountInputConfirmationCard
          large={large}
          onShowAmountInputModal={() => this.handleShowModal()}
          onAnswer={onAnswer}
          amounts={amounts}
          totalAmounts={totalAllAmounts(amounts, currencies)}
          onDeleteAmount={(id: string) => {
            this.handleDeleteAmount(id);
          }}
        />
        <CurrencyPickerModal
          large={large}
          onHide={() => this.handleHideModal()}
          toggleModalVisible={() => this.handleHideModal()}
          modalVisible={modalVisible}
          currencyObject={currencies}
          currencyDate={qaState.currencyDate}
          amounts={qaState.amounts}
          onAddAmount={(currency: Currency, amount: number) => {
            this.handleAddAmount(currency, amount);
          }}
        />
      </View>
    );
  }

  getAnswerComponent() {
    const { qaState, questionFlag, onAnswerCardPress, large } = this.props;
    const { amounts, people, currencies } = qaState;
    return (
      <AmountInputAnswerCard
        large={large}
        onAnswerCardPress={onAnswerCardPress}
        flag={questionFlag}
        vat={calculateVat(amounts, people, currencies).get('totalVat')}
      />
    );
  }

  handleAddAmount(currency: Currency, amount: number) {
    const { large, qaState } = this.props;
    const { amounts } = qaState;

    analyticsAmountAdded(currency, amount, large);

    if (large) {
      this.handleUpdate(addLargeAmount(amounts, currency, amount));
    } else {
      this.handleUpdate(addAmount(amounts, currency, amount));
    }
  }

  handleDeleteAmount(id: string) {
    const { amounts } = this.props.qaState;
    const amount: FlatAmount = getAmount(amounts, id);
    analyticsAmountDeleted(amount.currency, amount.amount, amount.large);
    const updatedAmounts = deleteAmount(amounts, id);
    this.handleUpdate(updatedAmounts);
  }

  handleUpdate(amounts: Amounts) {
    return this.props.onUpdate(amounts);
  }

  handleShowModal() {
    this.setState({ modalVisible: true });
  }

  handleHideModal() {
    this.setState({
      modalVisible: false,
    });
  }

  render() {
    switch (this.props.questionState) {
      case 'expanded': {
        return this.getQuestionComponent();
      }
      case 'collapsed': {
        return this.getAnswerComponent();
      }
      default: {
        return <View />;
      }
    }
  }
}
