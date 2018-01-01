import React from 'react';
import { connect } from 'react-redux';
import YesNoCard from '../YesNoCard';
import { getPeople } from '../../../../../reducers';

class LargeAmountPresentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswerYes = this.handleAnswerYes.bind(this);
    this.handleAnswerNo = this.handleAnswerNo.bind(this);
  }

  handleAnswerYes() {
    this.props.declarationSetLargeAmountPresentTrue();
    this.props.onAnswerYes();
  }

  handleAnswerNo() {
    this.props.declarationSetLargeAmountPresentFalse();
    this.props.onAnswerNo();
  }

  render() {
    return (
      <YesNoCard
        onAnswerYes={this.handleAnswerYes}
        onAnswerNo={this.handleAnswerNo}
        text="Ist bei Ihren Waren ein Gegenstand dabei, welcher mehr als CHF 300.- Wert ist?"
      />
    );
  }
}

const mapStateToProps = state => ({
  people: getPeople(state),
});

const mapDispatchToProps = dispatch => ({
  declarationSetLargeAmountPresentTrue: () =>
    dispatch({ type: 'SET_LARGE_AMOUNT_PRESENT_TRUE' }),
  declarationSetLargeAmountPresentFalse: () =>
    dispatch({ type: 'SET_LARGE_AMOUNT_PRESENT_FALSE' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  LargeAmountPresentContainer
);
