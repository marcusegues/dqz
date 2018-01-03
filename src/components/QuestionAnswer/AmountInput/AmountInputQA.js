/* eslint-disable react/no-unused-state */
// @flow
// TODO remove eslint-disable
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import type { Amounts } from '../../../model/types/basketPeopleAmountsTypes';
import type { CardProps } from '../QuestionAnswerContainer';
import { addAmount } from '../../../model/configurationApi';
import { calculateVat } from '../../../model/vatCalculations';
import AmountInputAnswerCard from '../cards/AnswerCard/configured/AmountInput/AmountInputAnswerCard';
import CurrencyPickerModal from '../../Modals/CurrencyPickerModal/CurrencyPickerModal';
import type { Currency } from '../../../model/currencies';
import AmountInputConfirmationCard from '../cards/ConfirmationCard/configured/AmountInput/AmountInputConfirmationCard';

export type AmountInputState = {
  modalVisible: boolean,
};

class AmountInputQA extends React.Component<CardProps, AmountInputState> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  getQuestionComponent() {
    const { onAnswer, qaState } = this.props;
    const { currencies } = qaState;
    return (
      <View>
        <AmountInputConfirmationCard
          onShowAmountInputModal={() => this.handleShowModal()}
          onAnswer={onAnswer}
          amounts={qaState.amounts}
        />
        <CurrencyPickerModal
          onHide={() => this.handleHideModal()}
          amountInputState={this.state}
          currencyObject={currencies}
          currencyDate={new Date()}
          basket={qaState.basket}
          onAddAmount={(currency: Currency, amount: number) => {
            this.handleAddAmount(currency, amount);
          }}
          onDeleteAmount={(currency: Currency, index: number) => {
            this.handleDeleteAmount(currency, index);
          }}
        />
      </View>
    );
  }

  getAnswerComponent() {
    const { qaState, questionFlag, onAnswerCardPress } = this.props;
    const { amounts, people, currencies } = qaState;
    return (
      <AmountInputAnswerCard
        onAnswerCardPress={onAnswerCardPress}
        flag={questionFlag}
        vat={calculateVat(amounts, people, currencies).get('totalVat')}
      />
    );
  }

  handleAddAmount(currency: Currency, amount: number) {
    const { amounts } = this.props.qaState;

    const updatedAmounts = addAmount(amounts, currency, amount);
    this.handleUpdate(updatedAmounts);
  }

  // eslint-disable-next-line no-unused-vars
  handleDeleteAmount(currency: Currency, index: number) {
    const { amounts } = this.props.qaState;
    // TODO
    this.handleUpdate(amounts);
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
export default AmountInputQA;
