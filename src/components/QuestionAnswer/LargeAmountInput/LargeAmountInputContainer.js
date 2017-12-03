import React from 'react';
import { connect } from 'react-redux';
import ConfirmationCard from '../cards/ConfirmationCard/ConfirmationCard';
import AnswerCard from '../cards/AnswerCard/AnswerCard';
import LargeAmountInput from './LargeAmountInput';
import LargeAmountInputInfo from './LargeAmountInputInfo';
import {
  getDeclarationBasket,
  getDeclarationSettings,
} from '../../../reducers';
import { getAmounts } from '../../../model/configurationApi';

class LargeAmountInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.state = {
      largeAmounts: this.props.largeAmounts,
    };
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

  async handleAnswer() {
    const { onAnswer, declarationAddLargeAmount } = this.props;
    await this.state.largeAmounts.forEach(amount =>
      declarationAddLargeAmount(amount)
    );
    onAnswer();
  }

  render() {
    const { largeAmountPresent } = this.props.settings;
    if (largeAmountPresent === 'notAnswered' || largeAmountPresent === false) {
      return null;
    }

    return this.props.currentQuestion === 'largeAmountInput'
      ? this.getQuestionComponent()
      : this.getAnswerComponent();
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
  LargeAmountInputContainer
);
