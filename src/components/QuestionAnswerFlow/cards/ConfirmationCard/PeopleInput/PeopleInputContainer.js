import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PeopleInput from './PeopleInput';
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
    const {
      onAdultsSetQuantity,
      onMinorsSetQuantity,
      onAnswerConfirm,
      onAnswer,
      people,
    } = this.props;
    onAdultsSetQuantity(fromModelApi.getAdultPeople(this.state.people));
    onMinorsSetQuantity(fromModelApi.getMinorPeople(this.state.people));

    if (
      fromModelApi.getAdultPeople(people) +
        fromModelApi.getMinorPeople(people) >
      1
    ) {
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
      />
    );
  }
}

const mapStateToProps = state => ({
  people: state.declaration.get('people'),
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
