import React from 'react';
import { connect } from 'react-redux';
import YesNoCard from '../YesNoCard';
import { getPeople } from '../../../../../reducers';
import * as fromModelApi from '../../../../../model/configurationApi';

class OverAllowanceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswerYes = this.handleAnswerYes.bind(this);
    this.handleAnswerNo = this.handleAnswerNo.bind(this);
  }

  handleAnswerYes() {
    this.props.declarationSetOverAllowanceTrue();
    this.props.onAnswerYes();
  }

  handleAnswerNo() {
    this.props.declarationSetOverAllowanceFalse();
    this.props.onAnswerNo();
  }

  questionText() {
    const { people, exceptLast } = this.props;
    const totalPeople =
      fromModelApi.getAdultPeople(people) + fromModelApi.getMinorPeople(people);

    if (exceptLast) {
      return `Ist der restliche Warenwert über ${(totalPeople - 1) * 300}?`;
    }
    return `Übersteigt der Gesamtwert aller Waren CHF ${totalPeople * 300}?`;
  }

  render() {
    return (
      <YesNoCard
        onAnswerYes={this.handleAnswerYes}
        onAnswerNo={this.handleAnswerNo}
        text={this.questionText()}
      />
    );
  }
}

const mapStateToProps = state => ({
  people: getPeople(state),
});

const mapDispatchToProps = dispatch => ({
  declarationSetOverAllowanceTrue: () =>
    dispatch({ type: 'SET_OVER_ALLOWANCE_TRUE' }),
  declarationSetOverAllowanceFalse: () =>
    dispatch({ type: 'SET_OVER_ALLOWANCE_FALSE' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  OverAllowanceContainer
);
