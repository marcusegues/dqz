import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import YesNoCard from '../cards/YesNoCard/YesNoCard';
import AnswerCard from '../cards/AnswerCard/AnswerCard';
import LargeAmountInfo from './LargeAmountInfo';
import { getDeclarationPeople, getLargeAmountPresent } from '../../../reducers';

class LargeAmountPresentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswerYes = this.handleAnswerYes.bind(this);
    this.handleAnswerNo = this.handleAnswerNo.bind(this);
  }

  async handleAnswerYes() {
    await this.props.declarationSetLargeAmountPresentTrue();
    this.props.onAnswer();
  }

  async handleAnswerNo() {
    await this.props.declarationSetLargeAmountPresentFalse();
    this.props.onAnswer();
  }

  getQuestionComponent() {
    return (
      <YesNoCard
        onAnswerYes={this.handleAnswerYes}
        onAnswerNo={this.handleAnswerNo}
        text="Ist bei Ihren Waren ein Gegenstand dabei, welcher mehr als CHF 300,- Wert ist?"
      />
    );
  }

  getAnswerComponent() {
    return (
      <AnswerCard
        onAnswerPress={this.props.onAnswerPress}
        mainIcon="cash-multiple"
      >
        <LargeAmountInfo largeAmountPresent={this.props.largeAmountPresent} />
      </AnswerCard>
    );
  }

  render() {
    return (
      <View>
        {this.props.currentQuestion === 2
          ? this.getQuestionComponent()
          : this.getAnswerComponent()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  people: getDeclarationPeople(state),
  largeAmountPresent: getLargeAmountPresent(state),
});

const mapDispatchToProps = dispatch => ({
  declarationSetLargeAmountPresentTrue: () =>
    dispatch({ type: 'DECLARATION_SET_LARGE_AMOUNT_PRESENT_TRUE' }),
  declarationSetLargeAmountPresentFalse: () =>
    dispatch({ type: 'DECLARATION_SET_LARGE_AMOUNT_PRESENT_FALSE' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  LargeAmountPresentContainer,
);
