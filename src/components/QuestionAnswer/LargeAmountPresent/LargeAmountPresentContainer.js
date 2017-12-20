import React from 'react';
import { View } from 'react-native';

import YesNoCard from '../cards/YesNoCard/YesNoCard';
import AnswerCard from '../cards/AnswerCard/AnswerCard';
import LargeAmountInfo from './LargeAmountInfo';

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
        text="Ist bei Ihren Waren ein Gegenstand dabei, welcher mehr als CHF 300.- Wert ist?"
      />
    );
  }

  getAnswerComponent() {
    const { hasLargeAmount } = this.props.qaState;
    return (
      <AnswerCard
        onAnswerPress={this.props.onAnswerPress}
        mainIcon="cash-multiple"
        flag={this.props.questionState === 'warning' ? incomplete : complete}
      >
        <LargeAmountInfo largeAmountPresent={hasLargeAmount} />
      </AnswerCard>
    );
  }

  handleAnswerYes() {
    this.props.onAnswer(true);
  }

  handleAnswerNo() {
    this.props.onAnswer(false);
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

export default LargeAmountPresentContainer;
