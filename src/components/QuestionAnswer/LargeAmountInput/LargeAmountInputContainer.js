import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import ConfirmationCard from '../cards/ConfirmationCard/ConfirmationCard';
import AnswerCard from '../cards/AnswerCard/AnswerCard';
import LargeAmountInput from './LargeAmountInput';
import LargeAmountInputInfo from './LargeAmountInputInfo';
import {
  getDeclarationPeople,
  getLargeAmountPresent,
  getDeclarationBasket,
  getDeclarationSettings,
} from '../../../reducers';
import { getTotalPeople, getAmounts } from '../../../model/configurationApi';

class LargeAmountInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.state = {
      largeAmounts: this.props.largeAmounts,
    };
  }

  async handleAnswer() {
    const { onAnswer, declarationAddLargeAmount } = this.props;
    await this.state.largeAmounts.forEach(amount =>
      declarationAddLargeAmount(amount),
    );
    onAnswer();
  }

  getQuestionComponent() {
    return (
      <ConfirmationCard
        text={`Bitte große Artikel eingeben (> CHF 300)`}
        onAnswer={this.handleAnswer}
      >
        <LargeAmountInput />
      </ConfirmationCard>
    );
  }

  getAnswerComponent() {
    return (
      <AnswerCard
        onAnswerPress={this.props.onAnswerPress}
        mainIcon="cash-multiple"
      >
        <LargeAmountInputInfo largeAmounts={this.props.largeAmounts} />
      </AnswerCard>
    );
  }

  render() {
    const { largeAmountPresent } = this.props.settings;
    if (largeAmountPresent === 'notAnswered' || largeAmountPresent === false) {
      return null;
    }
    return (
      <View>
        {this.props.currentQuestion === 'largeAmountInput'
          ? this.getQuestionComponent()
          : this.getAnswerComponent()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  largeAmounts: getAmounts(getDeclarationBasket(state), 'Meat'),
  settings: getDeclarationSettings(state),
});

const mapDispatchToProps = dispatch => ({
  declarationAddLargeAmount: largeAmount =>
    dispatch({
      type: 'DECLARATION_BASKET_ADD_LARGE_AMOUNT',
      category: 'Meat',
      largeAmount,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  LargeAmountInputContainer,
);
