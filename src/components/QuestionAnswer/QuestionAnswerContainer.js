import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PeopleInputContainer from './PeopleInput/PeopleInputContainer';
import LargeAmountPresentContainer from './LargeAmountPresent/LargeAmountPresentContainer';
import OverAllowanceContainer from './OverAllowance/OverAllowanceContainer';
import MainCategoriesContainer from './MainCategories/MainCategoriesContainer';
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
    const { settings } = this.props;
    let nextQuestion;
    debugger;
    if (settings.get('largeAmountPresent') === undefined) {
      console.log('setting to ', 2);
      this.setCurrentQuestion(2);
      return;
    }
    if (settings.get('overAllowance') === undefined) {
      console.log('setting to ', 3);
      this.setCurrentQuestion(3);
      return;
    }
    if (settings.get('mainCategories').isEmpty()) {
      console.log('setting to ', 4);
      this.setCurrentQuestion(4);
    }
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        <PeopleInputContainer
          text="Wie viele Reisende sollen bei der Verzollung berücksichtigt werden?"
          current={this.props.currentQuestion}
          onAnswerPress={() => this.setCurrentQuestion(1)}
          onAnswer={this.selectNextOpenQuestion}
        />
        <LargeAmountPresentContainer
          people={this.props.people}
          currentQuestion={this.props.currentQuestion}
          onAnswerPress={() => this.setCurrentQuestion(2)}
          onAnswer={this.selectNextOpenQuestion}
        />
      </View>
    );
  }
}

// <OverAllowanceContainer onPress={() => this.setCurrentQuestion(3)} />
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
