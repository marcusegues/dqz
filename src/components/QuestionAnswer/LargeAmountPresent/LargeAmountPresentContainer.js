import React from 'react';
import { connect } from 'react-redux';
import YesNoCard from '../cards/YesNoCard/YesNoCard';
import AnswerCard from '../cards/AnswerCard/AnswerCard';
import LargeAmountInfo from './LargeAmountInfo';
import { getDeclarationPeople, getLargeAmountPresent } from '../../../reducers';
import { getTotalPeople } from '../../../model/configurationApi';

const complete = require('../../../../assets/images/complete.png');
const incomplete = require('../../../../assets/images/incomplete.png');

class LargeAmountPresentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswerYes = this.handleAnswerYes.bind(this);
    this.handleAnswerNo = this.handleAnswerNo.bind(this);
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
        status={
          this.props.largeAmountPresent === 'notAnswered'
            ? incomplete
            : complete
        }
      >
        <LargeAmountInfo largeAmountPresent={this.props.largeAmountPresent} />
      </AnswerCard>
    );
  }

  async handleAnswerYes() {
    await this.props.declarationSetLargeAmountPresentTrue();
    this.props.onAnswer();
  }

  async handleAnswerNo() {
    await this.props.declarationSetLargeAmountPresentFalse();
    this.props.onAnswer();
  }

  render() {
    const { people, init, initList } = this.props;
    if (
      getTotalPeople(people) === 1 ||
      (init && !initList.has('largeAmountPresent'))
    ) {
      return null;
    }
    return this.props.currentQuestion === 'largeAmountPresent'
      ? this.getQuestionComponent()
      : this.getAnswerComponent();
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
