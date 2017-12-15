import React from 'react';
import { View } from 'react-native';

import { getTotalPeople } from '../../../model/configurationApi';

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
        onAnswer={this.props.onAnswer}
        confirmationDisabled={!getTotalPeople(people)}
      />
    );
  }

  getAnswerComponent() {
    return (
      <AnswerCard
        onAnswerCardPress={this.props.onAnswerCardPress}
        mainIcon={mainIcon}
        status={mainCategories.isEmpty() ? incomplete : complete}
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
