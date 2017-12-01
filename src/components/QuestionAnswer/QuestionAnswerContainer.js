import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PeopleInputContainer from './PeopleInput/PeopleInputContainer';
import LargeAmountPresentContainer from './LargeAmountPresent/LargeAmountPresentContainer';
import OverAllowanceContainer from './OverAllowance/OverAllowanceContainer';
import {
  getDeclarationPeople,
  getDeclarationCurrentQuestion,
  getDeclarationSettings,
} from '../../reducers';
import { getTotalPeople } from '../../model/configurationApi';

class QuestionAnswerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.setCurrentQuestion = this.setCurrentQuestion.bind(this);
    this.selectNextOpenQuestion = this.selectNextOpenQuestion.bind(this);
  }

  setCurrentQuestion(currentQuestion) {
    this.props.onSetCurrentQuestion(currentQuestion);
  }

  selectNextOpenQuestion() {
    const { settings, people } = this.props;
    if (
      getTotalPeople(people) > 1 &&
      settings.get('largeAmountPresent') === undefined
    ) {
      this.setCurrentQuestion(2);
      return;
    }
    if (settings.get('overAllowance') === undefined) {
      this.setCurrentQuestion(3);
      return;
    }
    if (settings.get('mainCategories').isEmpty()) {
      this.setCurrentQuestion(4);
      return;
    }
    this.setCurrentQuestion(0);
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        <PeopleInputContainer
          text="Wie viele Reisende sollen bei der Verzollung berücksichtigt werden?"
          currentQuestion={this.props.currentQuestion}
          onAnswerPress={() => this.setCurrentQuestion(1)}
          onAnswer={this.selectNextOpenQuestion}
        />
        <LargeAmountPresentContainer
          people={this.props.people}
          currentQuestion={this.props.currentQuestion}
          onAnswerPress={() => this.setCurrentQuestion(2)}
          onAnswer={this.selectNextOpenQuestion}
        />
        <OverAllowanceContainer
          currentQuestion={this.props.currentQuestion}
          onAnswerPress={() => this.setCurrentQuestion(3)}
          onAnswer={this.selectNextOpenQuestion}
        />
      </View>
    );
  }
}

// <MainCategoriesContainer onPress={() => this.setCurrentQuestion(4)} />
const mapStateToProps = state => ({
  currentQuestion: getDeclarationCurrentQuestion(state),
  people: getDeclarationPeople(state),
  settings: getDeclarationSettings(state),
});

const mapDispatchToProps = dispatch => ({
  onSetCurrentQuestion: currentQuestion =>
    dispatch({ type: 'DECLARATION_SET_CURRENT_QUESTION', currentQuestion }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  QuestionAnswerContainer,
);
