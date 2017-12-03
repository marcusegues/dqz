import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import ConfirmationCard from '../cards/ConfirmationCard/ConfirmationCard';
import AnswerCard from '../cards/AnswerCard/AnswerCard';
import LargeAmountInput from './LargeAmountInput';
import LargeAmountInputInfo from './LargeAmountInputInfo';
import {
  getDeclarationBasket,
  getDeclarationSettings,
} from '../../../reducers';
import { getLargeAmounts } from '../../../model/configurationApi';

class LargeAmountInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      largeAmounts: Immutable.List(),
    };
    this.handleAnswer = this.handleAnswer.bind(this);
    this.getQuestionComponent = this.getQuestionComponent.bind(this);
    this.addLargeAmount = this.addLargeAmount.bind(this);
  }

  getQuestionComponent() {
    return (
      <ConfirmationCard
        text={`Bitte große Artikel eingeben (> CHF 300)`}
        onAnswer={this.handleAnswer}
      >
        <LargeAmountInput
          onAddLargeAmount={this.addLargeAmount}
          largeAmounts={this.state.largeAmounts}
          savedLargeAmounts={this.props.largeAmounts}
        />
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

  addLargeAmount(largeAmount) {
    this.setState({
      largeAmounts: this.state.largeAmounts.push(parseInt(largeAmount)),
    });
  }

  async handleAnswer() {
    const { onAnswer, onDeclarationAddLargeAmount } = this.props;
    await this.state.largeAmounts.forEach(amount => {
      onDeclarationAddLargeAmount(amount);
    });
    this.setState({
      largeAmounts: Immutable.List(),
    });
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
  largeAmounts: getLargeAmounts(getDeclarationBasket(state), 'Meat'),
  settings: getDeclarationSettings(state),
});

const mapDispatchToProps = dispatch => ({
  onDeclarationAddLargeAmount: largeAmount =>
    dispatch({
      type: 'DECLARATION_BASKET_ADD_LARGE_AMOUNT',
      category: 'Meat',
      largeAmount,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  LargeAmountInputContainer
);
