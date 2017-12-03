import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PeopleInputContainer from './PeopleInput/PeopleInputContainer';
import LargeAmountPresentContainer from './LargeAmountPresent/LargeAmountPresentContainer';
import LargeAmountInputContainer from './LargeAmountInput/LargeAmountInputContainer';
import OverAllowanceContainer from './OverAllowance/OverAllowanceContainer';
import AmountInputContainer from './AmountInput/AmountInputContainer';
import MainCategoriesInputContainer from './MainCategoriesInput/MainCategoriesInputContainer';
import RedButton from '../Buttons/RedButton';
import NavBar from '../NavBar/NavBar';
import {
  getDeclarationPeople,
  getDeclarationCurrentQuestion,
  getDeclarationSettings,
  getDeclarationInit,
  getDeclarationInitList,
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

  getNextInitOpenQuestion() {
    const { currentQuestion, people, settings } = this.props;
    let nextQuestion;
    switch (currentQuestion) {
      case 'peopleInput': {
        if (getTotalPeople(people) === 1) {
          nextQuestion = 'overAllowance';
        } else {
          nextQuestion = 'largeAmountPresent';
        }
        break;
      }
      case 'largeAmountPresent': {
        if (settings.get('largeAmountPresent')) {
          nextQuestion = 'largeAmountInput';
          break;
        }
        nextQuestion = 'overAllowance';
        break;
      }
      case 'largeAmountInput': {
        nextQuestion = 'overAllowance';
        break;
      }
      case 'overAllowance': {
        if (settings.get('overAllowance') === true) {
          nextQuestion = 'amountInput';
          break;
        }
        nextQuestion = 'mainCategories';
        break;
      }
      case 'amountInput': {
        nextQuestion = 'mainCategories';
        break;
      }
      default: {
        nextQuestion = null;
      }
    }
    return nextQuestion;
  }

  async selectNextOpenQuestion() {
    const {
      settings,
      people,
      init,
      onSetInitFalse,
      onAddToInitList,
    } = this.props;

    if (init) {
      const nextInitQuestion = this.getNextInitOpenQuestion();
      if (nextInitQuestion) {
        await onAddToInitList(nextInitQuestion);
        this.setCurrentQuestion(nextInitQuestion);
        return;
      }
      onSetInitFalse();
    }

    if (
      getTotalPeople(people) > 1 &&
      settings.get('largeAmountPresent') === 'notAnswered'
    ) {
      this.setCurrentQuestion('largeAmountPresent');
      return;
    }

    if (
      getTotalPeople(people) > 1 &&
      settings.get('largeAmountsEntered') === 'notAnswered' &&
      (settings.get('largeAmountPresent') === true ||
        settings.get('largeAmountPresent') === 'dontKnow')
    ) {
      this.setCurrentQuestion('largeAmountInput');
      return;
    }

    if (settings.get('overAllowance') === 'notAnswered') {
      this.setCurrentQuestion('overAllowance');
      return;
    }

    if (
      settings.get('overAllowance') === true &&
      settings.get('amountsEntered') === 'notAnswered'
    ) {
      this.setCurrentQuestion('amountInput');
      return;
    }

    const mainCategories = settings.get('mainCategories');
    if (mainCategories === 'notAnswered' || mainCategories.isEmpty()) {
      this.setCurrentQuestion('mainCategories');
      return;
    }

    this.setCurrentQuestion('finished');
  }

  render() {
    const { init, initList } = this.props;
    return (
      <View
        style={{
          flex: 1,
          height: '100%',
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
            text="Wie viele Reisende sollen bei der Verzollung berücksichtigt werden?"
            currentQuestion={this.props.currentQuestion}
            onAnswerPress={() => this.setCurrentQuestion('peopleInput')}
            onAnswer={this.selectNextOpenQuestion}
          />
          <LargeAmountPresentContainer
            people={this.props.people}
            currentQuestion={this.props.currentQuestion}
            onAnswerPress={() => this.setCurrentQuestion('largeAmountPresent')}
            onAnswer={this.selectNextOpenQuestion}
            init={init}
            initList={initList}
          />
          <LargeAmountInputContainer
            currentQuestion={this.props.currentQuestion}
            onAnswerPress={() => this.setCurrentQuestion('largeAmountInput')}
            onAnswer={this.selectNextOpenQuestion}
            init={init}
            initList={initList}
          />
          <OverAllowanceContainer
            currentQuestion={this.props.currentQuestion}
            onAnswerPress={() => this.setCurrentQuestion('overAllowance')}
            onAnswer={this.selectNextOpenQuestion}
            init={init}
            initList={initList}
          />
          <AmountInputContainer
            currentQuestion={this.props.currentQuestion}
            onAnswerPress={() => this.setCurrentQuestion('amountInput')}
            onAnswer={this.selectNextOpenQuestion}
            init={init}
            initList={initList}
          />
          <MainCategoriesInputContainer
            currentQuestion={this.props.currentQuestion}
            onAnswerPress={() => this.setCurrentQuestion('mainCategories')}
            onAnswer={this.selectNextOpenQuestion}
            init={init}
            initList={initList}
          />
        </View>
        <View
          style={{
            flex: 0.1,
            marginBottom: 20,
            marginTop: 16,
            marginLeft: 16,
            marginRight: 16,
          }}
        >
          <RedButton text="ZUR WARENEINGABE" />
        </View>
      </View>
    );
  }
}

// <MainCategoriesContainer onPress={() => this.setCurrentQuestion(4)} />
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
  QuestionAnswerContainer
);
