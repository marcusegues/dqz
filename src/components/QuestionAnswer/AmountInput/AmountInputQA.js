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
} from '../../../model/configurationApi';
import { calculateVat } from '../../../model/vatCalculations';
import { AmountInputAnswerCard } from '../Cards/AnswerCard/configured/AmountInput/AmountInputAnswerCard';
import { CurrencyPickerModal } from '../../Modals/CurrencyPickerModal/CurrencyPickerModal';
import type { Currency } from '../../../model/currencies';
import { AmountInputConfirmationCard } from '../Cards/ConfirmationCard/configured/AmountInput/AmountInputConfirmationCard';
import { flatLargeAmounts } from '../../../model/utils';

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
    const {
      onAnswer,
      qaState,
      large,
      onConfirmationCardTitlePress,
    } = this.props;
    const { modalVisible } = this.state;
    const { currencies, amounts } = qaState;
    return (
      <View>
        <AmountInputConfirmationCard
          large={large}
          onShowAmountInputModal={() => this.handleShowModal()}
          onAnswer={onAnswer}
          onConfirmationCardTitlePress={onConfirmationCardTitlePress}
          amounts={amounts}
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
        largeAmountsPresent={flatLargeAmounts(qaState.amounts).length !== 0}
        onAnswerCardPress={onAnswerCardPress}
        flag={questionFlag}
        vat={calculateVat(amounts, people, currencies).get('totalVat')}
      />
    );
  }

  handleAddAmount(currency: Currency, amount: number) {
    const { large, qaState } = this.props;
    const { amounts } = qaState;

    if (large) {
      this.handleUpdate(addLargeAmount(amounts, currency, amount));
    } else {
      this.handleUpdate(addAmount(amounts, currency, amount));
    }
  }

  handleDeleteAmount(id: string) {
    const { amounts } = this.props.qaState;
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
