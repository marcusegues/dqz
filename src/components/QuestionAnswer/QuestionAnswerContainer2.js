import React from 'react';
import { View } from 'react-native';
import NavBar from '../NavBar/NavBar';
import PeopleInputContainer from './PeopleInput/PeopleInputContainer';
import LargeAmountPresentContainer from './LargeAmountPresent/LargeAmountPresentContainer';
import LargeAmountInputContainer from './LargeAmountInput/LargeAmountInputContainer';
import OverAllowanceContainer from './OverAllowance/OverAllowanceContainer';
import AmountInputContainer from './AmountInput/AmountInputContainer';
import MainCategoriesInputContainer from './MainCategoriesInput/MainCategoriesInputContainer';
import RedButton from '../Buttons/RedButton';

export class QuestionAnswerContainer2 extends React.Component {
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
