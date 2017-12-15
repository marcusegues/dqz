import React from 'react';
import { View } from 'react-native';
import PeopleInputAnswerCard from '../cards/AnswerCard/configured/PeopleInput/PeopleInputAnswerCard';
import PeopleInputConfirmationCard from '../cards/ConfirmationCard/configured/PeopleInput/PeopleInputConfirmationCard';
import {
  addAdult,
  addMinor,
  subtractAdult,
  subtractMinor,
} from '../../../model/configurationApi';

class PeopleInputQA extends React.Component {
  constructor(props) {
    super(props);
    this.getQuestionComponent = this.getQuestionComponent.bind(this);
    this.getAnswerComponent = this.getAnswerComponent.bind(this);
  }

  getQuestionComponent() {
    const { people } = this.props.qaState;
    return (
      <PeopleInputConfirmationCard
        people={people}
        onAnswer={this.props.onAnswer}
        onAddAdult={() => this.handleUpdate(addAdult(people))}
        onSubtractAdult={() => this.handleUpdate(subtractAdult(people))}
        onAddMinor={() => this.handleUpdate(addMinor(people))}
        onSubtractMinor={() => this.handleUpdate(subtractMinor(people))}
        text={this.props.text}
      />
    );
  }

  getAnswerComponent() {
    return (
      <PeopleInputAnswerCard
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

export default PeopleInputQA;
