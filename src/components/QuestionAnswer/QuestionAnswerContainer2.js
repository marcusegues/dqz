import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import NavBar from '../NavBar/NavBar';
import PeopleInputContainer from './PeopleInput/PeopleInputContainer';
import LargeAmountPresentContainer from './LargeAmountPresent/LargeAmountPresentContainer';
import LargeAmountInputContainer from './LargeAmountInput/LargeAmountInputContainer';
import OverAllowanceContainer from './OverAllowance/OverAllowanceContainer';
import AmountInputContainer from './AmountInput/AmountInputContainer';
import MainCategoriesInputContainer from './MainCategoriesInput/MainCategoriesInputContainer';
import RedButton from '../Buttons/RedButton';
import {
  getDeclarationCurrentQuestion,
  getDeclarationInit,
  getDeclarationInitList,
  getDeclarationPeople,
  getDeclarationSettings,
} from '../../reducers';

class QuestionAnswerContainer2 extends React.Component {
  constructor() {
    super();

    this.state = { currentQuestion: 0 };
  }

  setCurrentQuestion(question) {
    this.setState({ currentQuestion: question });
  }

  render() {
    const { currentQuestion } = this.state;
    const { navigation } = this.props;
    return (
      <View
        style={{
          flex: 1,
          height: '100%',
          marginBottom: 16,
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flex: 1,
            width: '95%',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <NavBar step={1} />
          <PeopleInputContainer
            currentQuestion={currentQuestion}
            onAnswerPress={() => this.setCurrentQuestion('peopleInput')}
            onAnswer={this.selectNextOpenQuestion}
          />
          <LargeAmountPresentContainer
            currentQuestion={currentQuestion}
            onAnswerPress={() => this.setCurrentQuestion('largeAmountPresent')}
            onAnswer={this.selectNextOpenQuestion}
          />
          <LargeAmountInputContainer
            currentQuestion={currentQuestion}
            onAnswerPress={() => this.setCurrentQuestion('largeAmountInput')}
            onAnswer={this.selectNextOpenQuestion}
          />
          <OverAllowanceContainer
            currentQuestion={currentQuestion}
            onAnswerPress={() => this.setCurrentQuestion('overAllowance')}
            onAnswer={this.selectNextOpenQuestion}
          />
          <AmountInputContainer
            currentQuestion={currentQuestion}
            onAnswerPress={() => this.setCurrentQuestion('amountInput')}
            onAnswer={this.selectNextOpenQuestion}
          />
          <MainCategoriesInputContainer
            currentQuestion={currentQuestion}
            onAnswerPress={() => this.setCurrentQuestion('mainCategories')}
            onAnswer={this.selectNextOpenQuestion}
          />
        </View>
        {this.props.currentQuestion !== 'finished' ? null : (
          <View
            style={{
              flex: 0.1,
              marginBottom: 20,
              marginTop: 16,
              marginLeft: 16,
              marginRight: 16,
            }}
          >
            <RedButton
              text="ZUR WARENEINGABE"
              onPress={() => navigation.navigate('BasketInput')}
            />
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentQuestion: getDeclarationCurrentQuestion(state),
  people: getDeclarationPeople(state),
  settings: getDeclarationSettings(state),
  init: getDeclarationInit(state),
  initList: getDeclarationInitList(state),
});

const mapDispatchToProps = dispatch => ({
  onSetCurrentQuestion: currentQuestion =>
    dispatch({ type: 'DECLARATION_SET_CURRENT_QUESTION', currentQuestion }),
  onAddToInitList: nextQuestion =>
    dispatch({ type: 'DECLARATION_ADD_TO_INIT_LIST', nextQuestion }),
  onSetInitFalse: () => dispatch({ type: 'DECLARATION_SET_INIT_FALSE' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  QuestionAnswerContainer2
);
