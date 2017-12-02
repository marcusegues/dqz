import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import YesNoCard from '../cards/YesNoCard/YesNoCard';
import AnswerCard from '../cards/AnswerCard/AnswerCard';
import LargeAmountInput from './LargeAmountInput';
import LargeAmountInputInfo from './LargeAmountInputInfo';
import { getDeclarationPeople, getLargeAmountPresent } from '../../../reducers';
import { getTotalPeople } from '../../../model/configurationApi';

class LargeAmountInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswerYes = this.handleAnswerYes.bind(this);
    this.handleAnswerNo = this.handleAnswerNo.bind(this);
    this.state = {
      largeAmounts: [],
    };
  }

  async handleAnswer() {
    const { onAnswer, declarationAddLargeAmount } = this.props;
    this.state.largeAmounts.forEach(amount => {
      await declarationAddLargeAmount(amount)
    })
    onAnswer();
  }

  getQuestionComponent() {
    return (
      <ConfirmationCard text={text} onAnswer={this.handleAnswer}>
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
    if (getTotalPeople(this.props.people) === 1) {
      return null;
    }
    return (
      <View>
        {this.props.currentQuestion === 'largeAmountPresent'
          ? this.getQuestionComponent()
          : this.getAnswerComponent()}
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  declarationAddLargeAmount: largeAmount =>
    dispatch({ type: 'DECLARATION_BASKET_ADD_LARGE_AMOUNT', largeAmount }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  LargeAmountInputContainer,
);
