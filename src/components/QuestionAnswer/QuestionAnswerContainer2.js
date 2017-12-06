// @flow
import React from 'react';
// $FlowFixMe
import { FlatList, View } from 'react-native';
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
import type { People } from '../../model/types/basketPeopleTypes';
import { initPeople } from '../../model/configurationApi';

type questionType =
  | 'peopleInput'
  | 'hasLargeAmount'
  | 'largeAmountInput'
  | 'overAllowance'
  | 'amountInput'
  | 'mainCategories'
  | 'none';

type questionState = 'expanded' | 'hidden' | 'collapsed';

type State = {
  questionStates: { [questionType]: questionState },
  people: People,
};

class QuestionAnswerContainer2 extends React.Component<any, State> {
  constructor() {
    super();

    this.state = {
      people: initPeople,
      questionStates: { peopleInput: 'collapsed' },
    };
  }

  updateQA() {
    // for now, just close all the things
    this.setState({
      questionStates: { peopleInput: 'collapsed' },
    });
  }

  expandQuestion(question: questionType) {
    const { questionStates } = this.state;
    questionStates[question] = 'expanded';
    this.setState({
      questionStates,
    });
  }

  render() {
    const { questionStates } = this.state;
    const { peopleInput } = questionStates;
    const { navigation } = this.props;

    const flatListData = [
      {
        key: 'peopleInput',
        component: (
          <PeopleInputContainer
            qaState={this.state}
            onAnswerPress={() => {
              this.expandQuestion('peopleInput');
            }}
            questionState={peopleInput}
            onAnswer={(peopleAnswer: People) => {
              this.setState({
                people: peopleAnswer,
              });
              this.updateQA();
            }}
          />
        ),
      },
      {
        key: 'hasLargeAmount',
        component: <LargeAmountPresentContainer />,
      },
      {
        key: 'largeAmountInput',
        component: <LargeAmountInputContainer />,
      },
      {
        key: 'overAllowance',
        component: <OverAllowanceContainer />,
      },
      {
        key: 'amountInput',
        component: <AmountInputContainer />,
      },
      {
        key: 'mainCategories',
        component: <MainCategoriesInputContainer />,
      },
    ];
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
          <FlatList
            style={{ width: '100%' }}
            data={flatListData}
            renderItem={({ item }) => item.component}
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
