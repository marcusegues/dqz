import React from 'react';
import { connect } from 'react-redux';
import PeopleInput from './PeopleInput';
import { getDeclarationPeople } from '../../../../../reducers';
import * as fromModelApi from '../../../../../model/configurationApi';

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
    this.handleAnswerConfirm = this.handleAnswerConfirm.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { people } = nextProps;
    if (people !== this.props.people) {
      const adultsSaved = fromModelApi.getAdultPeople(people);
      const minorsSaved = fromModelApi.getMinorPeople(people);
      this.handleAnswer(adultsSaved + minorsSaved);
    }
  }

  handleAddAdult() {
    this.setState({
      people: fromModelApi.addAdult(this.state.people),
    });
  }

  handleSubtractAdult() {
    this.setState({
      people: fromModelApi.subtractAdult(this.state.people),
    });
  }

  handleAddMinor() {
    this.setState({
      people: fromModelApi.addMinor(this.state.people),
    });
  }

  handleSubtractMinor() {
    this.setState({
      people: fromModelApi.subtractMinor(this.state.people),
    });
  }

  handleAnswerConfirm() {
    // the logic here to manage handling the answer should be looked at again
    // to make sure it is ideal. This is a piece of code with side effects.
    const { onAdultsSetQuantity, onMinorsSetQuantity, people } = this.props;
    const adults = fromModelApi.getAdultPeople(this.state.people);
    const minors = fromModelApi.getMinorPeople(this.state.people);
    const adultsSaved = fromModelApi.getAdultPeople(people);
    const minorsSaved = fromModelApi.getMinorPeople(people);

    if (adults === adultsSaved && minors === minorsSaved) {
      this.handleAnswer(adults + minors);
    } else {
      onAdultsSetQuantity(adults);
      onMinorsSetQuantity(minors);
    }
  }

  handleAnswer(quantityPeople) {
    const { onAnswer } = this.props;
    if (quantityPeople > 1) {
      onAnswer('confirmMultiplePersons');
    } else {
      onAnswer('confirmSinglePerson');
    }
  }

  render() {
    return (
      <PeopleInput
        people={this.state.people}
        onAnswerConfirm={this.handleAnswerConfirm}
        onAddAdult={this.handleAddAdult}
        onSubtractAdult={this.handleSubtractAdult}
        onAddMinor={this.handleAddMinor}
        onSubtractMinor={this.handleSubtractMinor}
        text={this.props.text}
      />
    );
  }
}

const mapStateToProps = state => ({
  people: getDeclarationPeople(state),
});

const mapDispatchToProps = dispatch => ({
  onAdultsSetQuantity: quantity =>
    dispatch({ type: 'DECLARATION_ADULTS_SET_QUANTITY', quantity }),
  onMinorsSetQuantity: quantity =>
    dispatch({ type: 'DECLARATION_MINORS_SET_QUANTITY', quantity }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  PeopleInputContainer
);