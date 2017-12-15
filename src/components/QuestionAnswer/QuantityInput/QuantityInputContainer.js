import React from 'react';
import { View } from 'react-native';

import PeopleInput from './PeopleInput';
import PeopleInputAnswer from './PeopleInputAnswer';
import {
  addAdult,
  addMinor,
  getTotalPeople,
  subtractAdult,
  subtractMinor,
} from '../../../model/configurationApi';

class QuantityInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getQuestionComponent = this.getQuestionComponent.bind(this);
    this.getAnswerComponent = this.getAnswerComponent.bind(this);
  }

  getQuestionComponent() {
    const { people } = this.props.qaState;
    return (
      <ConfirmationCard
        text={text}
        onAnswer={onAnswer}
        confirmationDisabled={!getTotalPeople(people)}
      >
        <AdultInputRow
          people={people}
          onAddAdult={onAddAdult}
          onSubtractAdult={onSubtractAdult}
        />
        <MinorInputRow
          people={people}
          onAddMinor={onAddMinor}
          onSubtractMinor={onSubtractMinor}
        />
      </ConfirmationCard>
    );
  }

  getAnswerComponent() {
    return (
      <PeopleInputAnswer
        people={this.props.qaState.people}
        onAnswerCardPress={this.props.onAnswerCardPress}
      />
    );
  }

  handleUpdate(people) {
    this.props.onUpdate(people);
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

export default QuantityInputContainer;
