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
} from '../../reducers';
import { getTotalPeople } from '../../model/configurationApi';

class QuestionAnswerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.setCurrentQuestion = this.setCurrentQuestion.bind(this);
  }

  setCurrentQuestion(currentQuestion) {
    this.props.onSetCurrentQuestion(currentQuestion);
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        <PeopleInputContainer
          text="Wie viele Reisende sollen bei der Verzollung berücksichtigt werden?"
          current={this.props.currentQuestion}
          onPress={() => this.setCurrentQuestion(1)}
          onAnswerConfirm={() => this.setCurrentQuestion(2)}
        />
      </View>
    );
  }
}

// <LargeAmountPresentContainer onPress={() => this.setCurrentQuestion(2)} />
// <OverAllowanceContainer onPress={() => this.setCurrentQuestion(3)} />
// <MainCategoriesContainer onPress={() => this.setCurrentQuestion(4)} />
const mapStateToProps = state => ({
  currentQuestion: getDeclarationCurrentQuestion(state),
  people: getDeclarationPeople(state),
});

const mapDispatchToProps = dispatch => ({
  onSetCurrentQuestion: currentQuestion =>
    dispatch({ type: 'DECLARATION_SET_CURRENT_QUESTION', currentQuestion }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  QuestionAnswerContainer,
);
