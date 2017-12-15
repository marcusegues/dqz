// @flow
/* eslint react/no-unused-state: 0 */
import React from 'react';
// $FlowFixMe
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import PeopleInputContainer from './PeopleInput/PeopleInputContainer';
import MainCategoriesInputContainer from './MainCategoriesInput/MainCategoriesInputContainer';
import RedButton from '../Buttons/RedButton';
import {
  getDeclarationCurrentQuestion,
  getDeclarationPeople,
  getDeclarationSettings,
} from '../../reducers';
import type { People } from '../../model/types/basketPeopleTypes';
import type {
  SettingsType,
  MainCategoriesType,
} from '../../types/reducers/declaration';
import { getAdultPeople, getMinorPeople } from '../../model/configurationApi';

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

  componentWillReceiveProps() {
    this.updateQA(true);
  }

  updateQA(collapseAll: boolean) {
    // for now, just close all the things
    if (collapseAll) {
      this.setState({
        questionStates: {
          peopleInput: 'collapsed',
          mainCategories: 'collapsed',
        },
      });
    } else {
      // do something...
      this.setState({});
    }
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
            onAnswerCardPress={() => {
              this.expandQuestion('peopleInput');
            }}
            questionState={peopleInput}
            onUpdate={people => {
              this.setState({ people });
            }}
            onAnswer={() => {
              this.props.onSetPeople(this.state.people);
            }}
          />
        ),
      },
      {
        key: 'mainCategories',
        component: (
          <MainCategoriesInputContainer
            qaState={this.state}
            onAnswerCardPress={() => {
              this.expandQuestion('mainCategories');
            }}
            questionState={mainCategories}
            onUpdate={m => {
              this.setState({
                settings: this.state.settings.set('mainCategories', m),
              });
            }}
            onAnswer={() => {
              this.props.onSetMainCategories(
                this.state.settings.get('mainCategories')
              );
            }}
          />
        ),
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
  onSetPeople: (people: People) =>
    new Promise(resolve => {
      dispatch({
        type: 'DECLARATION_SET_PEOPLE',
        adults: getAdultPeople(people),
        minors: getMinorPeople(people),
      });
      resolve();
    }),
  onSetMainCategories: (mainCategories: MainCategoriesType) =>
    new Promise(resolve => {
      dispatch({ type: 'DECLARATION_SET_MAIN_CATEGORIES', mainCategories });
      resolve();
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  QuestionAnswerContainer2
);
