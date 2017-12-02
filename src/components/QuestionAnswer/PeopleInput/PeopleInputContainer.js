import React from 'react';
import { connect } from 'react-redux';
import PeopleInput from './PeopleInput';
import PeopleInputAnswer from './PeopleInputAnswer';
import { getDeclarationPeople } from '../../../reducers';
import {
  getAdultPeople,
  getMinorPeople,
  addAdult,
  subtractAdult,
  addMinor,
  subtractMinor,
  getTotalPeople,
} from '../../../model/configurationApi';

class PeopleInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: this.props.people,
    };
    this.handleAddAdult = this.handleAddAdult.bind(this);
    this.handleSubtractAdult = this.handleSubtractAdult.bind(this);
    this.handleAddMinor = this.handleAddMinor.bind(this);
    this.handleSubtractMinor = this.handleSubtractMinor.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.getQuestionComponent = this.getQuestionComponent.bind(this);
    this.getAnswerComponent = this.getAnswerComponent.bind(this);
  }

  getQuestionComponent() {
    return (
      <PeopleInput
        people={this.state.people}
        onAnswer={this.handleAnswer}
        onAddAdult={this.handleAddAdult}
        onSubtractAdult={this.handleSubtractAdult}
        onAddMinor={this.handleAddMinor}
        onSubtractMinor={this.handleSubtractMinor}
        text={this.props.text}
      />
    );
  }

  getAnswerComponent() {
    return (
      <PeopleInputAnswer
        people={this.props.people}
        onAnswerPress={this.props.onAnswerPress}
      />
    );
  }

  handleAddAdult() {
    this.setState({
      people: addAdult(this.state.people),
    });
  }

  handleSubtractAdult() {
    this.setState({
      people: subtractAdult(this.state.people),
    });
  }

  handleAddMinor() {
    this.setState({
      people: addMinor(this.state.people),
    });
  }

  handleSubtractMinor() {
    this.setState({
      people: subtractMinor(this.state.people),
    });
  }

  async handleAnswer() {
    const { onSetPeople, onAnswer, people } = this.props;
    const adults = getAdultPeople(this.state.people);
    const minors = getMinorPeople(this.state.people);
    await onSetPeople(adults, minors);
    if (getTotalPeople(people) > 1 && getTotalPeople(this.state.people) === 1) {
      await this.props.onDeclarationSetLargeAmountNotAnswered();
      await this.props.onDeclarationResetLargeAmounts();
    }
    onAnswer();
  }

  render() {
    return this.props.currentQuestion === 'peopleInput'
      ? this.getQuestionComponent()
      : this.getAnswerComponent();
  }
}

const mapStateToProps = state => ({
  people: getDeclarationPeople(state),
});

const mapDispatchToProps = dispatch => ({
  onDeclarationSetLargeAmountNotAnswered: () =>
    dispatch({ type: 'DECLARATION_SET_LARGE_AMOUNT_PRESENT_NOT_ANSWERED' }),
  onDeclarationResetLargeAmounts: () =>
    dispatch({ type: 'DECLARATION_RESET_LARGE_AMOUNTS', category: 'Meat' }),
  onSetPeople: (adults, minors) =>
    dispatch({ type: 'DECLARATION_SET_PEOPLE', adults, minors }),
  onAdultsSetQuantity: quantity =>
    dispatch({ type: 'DECLARATION_ADULTS_SET_QUANTITY', quantity }),
  onMinorsSetQuantity: quantity =>
    dispatch({ type: 'DECLARATION_MINORS_SET_QUANTITY', quantity }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  PeopleInputContainer
);
