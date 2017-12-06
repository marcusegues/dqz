import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PeopleInput from './PeopleInput';
import PeopleInputAnswer from './PeopleInputAnswer';
import { getDeclarationPeople } from '../../../reducers';
import {
  addAdult,
  subtractAdult,
  addMinor,
  subtractMinor,
} from '../../../model/configurationApi';

class PeopleInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: this.props.qaState.people,
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
        people={this.state.people}
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

  handleAnswer() {
    const { onAnswer, people } = this.props;
    onAnswer(people);
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

const mapStateToProps = state => ({
  people: getDeclarationPeople(state),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  PeopleInputContainer
);
