import React from 'react';
import { connect } from 'react-redux';
import YesNoCard from '../cards/YesNoCard/YesNoCard';
import AnswerCard from '../cards/AnswerCard/AnswerCard';
import OverAllowanceInfo from './OverAllowanceInfo';
import {
  getDeclarationPeople,
  getOverAllowance,
  getLargeAmountPresent,
} from '../../../reducers';
import { getTotalPeople } from '../../../model/configurationApi';

const complete = require('../../../../assets/images/complete.png');
const incomplete = require('../../../../assets/images/incomplete.png');

class OverAllowanceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswerYes = this.handleAnswerYes.bind(this);
    this.handleAnswerNo = this.handleAnswerNo.bind(this);
  }

  getQuestionText() {
    const totalPeople = getTotalPeople(this.props.people);
    const { largeAmountPresent } = this.props;
    if (largeAmountPresent === true) {
      return `Is the rest above ${(totalPeople - 1) * 300}?`;
    }
    return `Übersteigt der Gesamtwert aller Waren CHF ${totalPeople * 300}?`;
  }

  getQuestionComponent() {
    return (
      <YesNoCard
        onAnswerYes={this.handleAnswerYes}
        onAnswerNo={this.handleAnswerNo}
        text={this.getQuestionText()}
      />
    );
  }

  getAnswerComponent() {
    return (
      <AnswerCard
        onAnswerPress={this.props.onAnswerPress}
        mainIcon="crown"
        status={
          this.props.overAllowance === 'notAnswered' ? incomplete : complete
        }
      >
        <OverAllowanceInfo overAllowance={this.props.overAllowance} />
      </AnswerCard>
    );
  }

  async handleAnswerYes() {
    await this.props.declarationSetOverAllowanceTrue();
    this.props.onAnswer();
  }

  async handleAnswerNo() {
    await this.props.declarationSetOverAllowanceFalse();
    this.props.onAnswer();
  }

  render() {
    return this.props.currentQuestion === 'overAllowance'
      ? this.getQuestionComponent()
      : this.getAnswerComponent();
  }
}

const mapStateToProps = state => ({
  people: getDeclarationPeople(state),
  overAllowance: getOverAllowance(state),
  largeAmountPresent: getLargeAmountPresent(state),
});

const mapDispatchToProps = dispatch => ({
  declarationSetOverAllowanceTrue: () =>
    dispatch({ type: 'DECLARATION_SET_OVER_ALLOWANCE_TRUE' }),
  declarationSetOverAllowanceFalse: () =>
    dispatch({ type: 'DECLARATION_SET_OVER_ALLOWANCE_FALSE' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  OverAllowanceContainer
);
