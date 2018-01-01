import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import ConfirmationCard from '../cards/ConfirmationCard/ConfirmationCard';
import AnswerCard from '../cards/AnswerCard/AnswerCard';
import AmountInput from './AmountInput';
import AmountInputInfo from './AmountInputInfo';
import { getBasket, getSettings, getPeople } from '../../../reducers';
import { getAmounts } from '../../../model/configurationApi';

const complete = require('../../../../assets/images/complete.png');
const incomplete = require('../../../../assets/images/incomplete.png');
const mainIcon = require('../../../../assets/icons/mwst.png');

class AmountInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amounts: Immutable.List(),
    };
    this.handleAnswer = this.handleAnswer.bind(this);
    this.getQuestionComponent = this.getQuestionComponent.bind(this);
    this.addAmount = this.addAmount.bind(this);
  }

  getQuestionComponent() {
    return (
      <ConfirmationCard
        text="Bitte Artikel eingeben."
        onAnswer={this.handleAnswer}
      >
        <AmountInput
          onAddAmount={this.addAmount}
          amounts={this.state.amounts}
          savedAmounts={this.props.amounts}
          people={this.props.people}
        />
      </ConfirmationCard>
    );
  }

  getAnswerComponent() {
    return (
      <AnswerCard
        onAnswerPress={this.props.onAnswerPress}
        mainIcon={mainIcon}
        flag={
          this.props.settings.get('amountsEntered') === 'notAnswered'
            ? incomplete
            : complete
        }
      >
        <AmountInputInfo
          amounts={this.props.amounts}
          amountsEntered={this.props.settings.get('amountsEntered')}
        />
      </AnswerCard>
    );
  }

  addAmount(amount) {
    this.setState({
      amounts: this.state.amounts.push(parseInt(amount, 10)),
    });
  }

  async handleAnswer() {
    const { onAnswer, onDeclarationAddAmount } = this.props;
    await this.state.amounts.forEach(amount => {
      onDeclarationAddAmount(amount);
    });
    this.setState({
      amounts: Immutable.List(),
    });
    await this.props.onDeclarationSetAmountsEnteredTrue();
    onAnswer();
  }

  render() {
    const overAllowance = this.props.settings.get('overAllowance');
    if (overAllowance === 'notAnswered' || overAllowance === false) {
      return null;
    }

    return this.props.currentQuestion === 'amountInput'
      ? this.getQuestionComponent()
      : this.getAnswerComponent();
  }
}

const mapStateToProps = state => ({
  people: getPeople(state),
  amounts: getAmounts(getBasket(state), 'Meat'),
  settings: getSettings(state),
});

const mapDispatchToProps = dispatch => ({
  onDeclarationSetAmountsEnteredTrue: () =>
    dispatch({ type: 'DECLARATION_SET_AMOUNTS_ENTERED_TRUE' }),
  onDeclarationAddAmount: amount =>
    dispatch({
      type: 'DECLARATION_ADD_AMOUNT',
      category: 'Meat',
      amount,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  AmountInputContainer
);
