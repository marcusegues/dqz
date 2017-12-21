// @flow
/* eslint react/no-unused-state: 0 */
import React from 'react';
// $FlowFixMe
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import NavBar from '../NavBar/NavBar';
import RedButton from '../Buttons/RedButton';
import PeopleInputQA from './PeopleInput/PeopleInputQA';
import MainCategoriesInputQA from './MainCategoriesInput/MainCategoriesInputQA';
import QuantityInputQA from './QuantityInput/QuantityInputQA';

import {
  getDeclarationBasket,
  getDeclarationPeople,
  getDeclarationSettings,
  getDeclarationDutyReport,
} from '../../reducers';
import type { People, Basket } from '../../model/types/basketPeopleTypes';
import type {
  SettingsType,
  MainCategoriesType,
} from '../../types/reducers/declaration';
import {
  collapseAllExistingExceptOne,
  setInitStates,
  setQuestionStates,
} from './QAControl/controlQuestionStates';
import { setInitFlags, setQuestionFlag } from './QAControl/controlQuestionFlag';
import type { DutyReport } from '../../model/types/calculationTypes';
import { calculateDuty } from '../../model/dutyCalculations';
import { verticalScale } from '../../styles/Scaling';
import HeaderTitle from '../Headers/subcomponents/HeaderTitle';

export type QuestionType =
  | 'peopleInput'
  | 'mainCategories'
  | 'quantityInput'
  | 'none';

export type QuestionState = 'expanded' | 'hidden' | 'collapsed' | 'warning';

export type QuestionFlag = 'complete' | 'incomplete';

export type QAState = {
  questionStates: { [QuestionType]: QuestionState },
  questionFlag: { [QuestionType]: QuestionFlag },
  basket: Basket,
  people: People,
  settings: SettingsType,
  duty: DutyReport,
};

export type CardProps = {
  qaState: QAState,
  onAnswerCardPress: any, // TODO
  questionState: QuestionState,
  questionFlag: QuestionFlag,
  onUpdate: any, // TODO
  onAnswer: any, // TODO
};

// TODO: flowtype the props
class QuestionAnswerContainer extends React.Component<any, QAState> {
  static navigationOptions = ({ screenProps }) => {
    return {
      headerTitle: <HeaderTitle text={screenProps.t('qaFlow:declareGoods')} />,
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      questionStates: {
        peopleInput: 'expanded',
        mainCategories: 'hidden',
        quantityInput: 'hidden',
      },
      questionFlag: {
        peopleInput: 'complete',
        mainCategories: 'incomplete',
        quantityInput: 'incomplete',
      },
      basket: this.props.basket,
      people: this.props.people,
      settings: this.props.settings,
      // not getting duty as props from redux because dues are not being updated all the time, perhaps they should be
      duty: calculateDuty(this.props.basket, this.props.people),
    };
  }

  componentDidMount() {
    this.initState();
  }

  initState() {
    const setStates = setInitStates(this.state);
    const setFlags = setInitFlags(setStates);
    this.setState(setFlags);
  }

  updateQA(justAnswered: QuestionType) {
    const updateStates: QAState = setQuestionStates(justAnswered, this.state);
    const updateFlags: QAState = setQuestionFlag(justAnswered, updateStates);
    this.setState(updateFlags);
  }

  allQuestionsAnswered(): boolean {
    // TODO Object.values returns Array<mixed> in flow. Find better way.
    return Object.values(this.state.questionFlag).every(
      (flag): boolean => flag === 'complete'
    );
  }

  render() {
    const { questionStates, questionFlag } = this.state;
    const { t } = this.props;

    const flatListData = [
      {
        key: 'peopleInput',
        component: (
          <PeopleInputQA
            qaState={this.state}
            onAnswerCardPress={() => {
              this.setState(
                collapseAllExistingExceptOne('peopleInput', this.state)
              );
            }}
            questionState={questionStates.peopleInput}
            questionFlag={questionFlag.peopleInput}
            onUpdate={people => {
              this.setState({ people });
            }}
            onAnswer={() => {
              this.props.onDeclarationSetPeople(this.state.people);
              this.updateQA('peopleInput');
            }}
          />
        ),
      },
      {
        key: 'mainCategories',
        component: (
          <MainCategoriesInputQA
            qaState={this.state}
            onAnswerCardPress={() => {
              this.setState(
                collapseAllExistingExceptOne('mainCategories', this.state)
              );
            }}
            questionState={questionStates.mainCategories}
            questionFlag={questionFlag.mainCategories}
            onUpdate={activeCategories => {
              this.setState({
                settings: this.state.settings.set(
                  'mainCategories',
                  activeCategories
                ),
              });
            }}
            onAnswer={() => {
              this.props.onDeclarationSetMainCategories(
                this.state.settings.get('mainCategories')
              );
              this.updateQA('mainCategories');
            }}
          />
        ),
      },
      {
        key: 'quantityInput',
        component: (
          <QuantityInputQA
            qaState={this.state}
            onAnswerCardPress={() => {
              this.setState(
                collapseAllExistingExceptOne('quantityInput', this.state)
              );
            }}
            questionState={questionStates.quantityInput}
            questionFlag={questionFlag.quantityInput}
            onUpdate={basket => {
              this.setState({
                basket,
                duty: calculateDuty(basket, this.state.people),
              });
            }}
            onAnswer={() => {
              this.props.onDeclarationSetBasket(this.state.basket);
              this.updateQA('quantityInput');
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
          marginHorizontal: 16,
          marginBottom: 16,
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flex: 1,
            width: '100%',
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
        <View
          style={{
            flex: 0.1,
            marginBottom: verticalScale(4),
            marginTop: verticalScale(4),
            marginLeft: 16,
            marginRight: 16,
            backgroundColor: 'transparent',
          }}
        >
          <RedButton
            text={t('toOverview')}
            confirmationDisabled={!this.allQuestionsAnswered()}
            onPress={() => this.props.navigation.navigate('Payment')}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  basket: getDeclarationBasket(state),
  people: getDeclarationPeople(state),
  dutyReport: getDeclarationDutyReport(state),
  settings: getDeclarationSettings(state),
});

const mapDispatchToProps = dispatch => ({
  onDeclarationSetPeople: (people: People) =>
    dispatch({
      type: 'DECLARATION_SET_PEOPLE',
      people,
    }),
  onDeclarationSetMainCategories: (mainCategories: MainCategoriesType) =>
    dispatch({
      type: 'DECLARATION_SET_MAIN_CATEGORIES',
      mainCategories,
    }),
  onDeclarationBasketChangeQuantity: (category, quantity) =>
    dispatch({
      type: 'DECLARATION_BASKET_ADD_QUANTITY',
      category,
      quantity,
    }),
  onDeclarationSetBasket: basket =>
    dispatch({
      type: 'DECLARATION_SET_BASKET',
      basket,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  translate(['qaFlow'])(QuestionAnswerContainer)
);
