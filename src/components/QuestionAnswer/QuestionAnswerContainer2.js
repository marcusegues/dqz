// @flow
/* eslint react/no-unused-state: 0 */
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
import {
  EmptyMainCategories,
  SettingsType,
} from '../../types/reducers/declaration';

type questionType =
  | 'peopleInput'
  | 'hasLargeAmount'
  | 'largeAmountInput'
  | 'overAllowance'
  | 'amountInput'
  | 'mainCategories'
  | 'none';

type questionState = 'expanded' | 'hidden' | 'collapsed' | 'warning';

type State = {
  questionStates: { [questionType]: questionState },
  people: People,
  settings: SettingsType,
};

class QuestionAnswerContainer2 extends React.Component<any, State> {
  constructor(props) {
    super(props);

    this.state = {
      people: this.props.people,
      settings: this.props.settings,
      questionStates: {
        peopleInput: 'collapsed',
        mainCategories: 'collapsed',
      },
    };
  }

  updateQA() {
    // for now, just close all the things
    this.setState({
      questionStates: { peopleInput: 'collapsed', hasLargeAmount: 'collapsed' },
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
    const { peopleInput, mainCategories } = questionStates;
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
              this.props.onSetPeople(peopleAnswer).then(this.updateQA());
            }}
          />
        ),
      },
      {
        key: 'mainCategories',
        component: (
          <MainCategoriesInputContainer
            qaState={this.state}
            onAnswerPress={() => {
              this.expandQuestion('mainCategories');
            }}
            questionState={mainCategories}
            onAnswer={(mainCategories: MainCategoriesType) => {
              this.props
                .onSetMainCategories(mainCategories)
                .then(this.updateQA());
            }}
          />
        ),
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
});

const mapDispatchToProps = dispatch => ({
  onSetPeople: (people: People) => {
    return new Promise(resolve => {
      dispatch({ type: 'DECLARATION_SET_PEOPLE', people });
      resolve();
    });
  },
  onSetMainCategories: (mainCategories: MainCategoriesType) => {
    return new Promise(resolve => {
      dispatch({ type: 'DECLARATION_SET_MAIN_CATEGORIES', mainCategories });
      resolve();
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(
  QuestionAnswerContainer2
);
