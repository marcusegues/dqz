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
  getDeclarationAmounts,
  getDeclarationMainCategories,
} from '../../reducers';
import type {
  Amounts,
  Basket,
  People,
} from '../../model/types/basketPeopleAmountsTypes';
import type {
  MainCategoriesType,
  Settings,
} from '../../types/reducers/declaration';
import {
  collapseAllExistingExceptOne,
  setInitStates,
  setQuestionStates,
} from './QAControl/controlQuestionStates';
import { setInitFlags, setQuestionFlag } from './QAControl/controlQuestionFlag';
import { verticalScale } from '../../styles/Scaling';
import HeaderTitle from '../Headers/subcomponents/HeaderTitle';
import { onUpdateFactory } from './QAControl/validation';

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
};

export type QAStateEnriched = {
  questionStates: { [QuestionType]: QuestionState },
  questionFlag: { [QuestionType]: QuestionFlag },
  amounts: Amounts,
  basket: Basket,
  people: People,
  settings: Settings,
};

export type CardProps = {
  qaState: QAStateEnriched,
  onAnswerCardPress: any, // TODO
  questionState: QuestionState,
  questionFlag: QuestionFlag,
  onUpdate: any, // TODO
  onAnswer: any, // TODO
};

// TODO: flowtype the props
class QuestionAnswerContainer extends React.Component<any, QAState> {
  static navigationOptions = ({ screenProps }) => ({
    headerTitle: <HeaderTitle text={screenProps.t('qaFlow:declareGoods')} />,
  });

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
    };
  }

  componentDidMount() {
    this.initState();
  }

  enrichState(): QAStateEnriched {
    const { questionStates, questionFlag } = this.state;
    const { amounts, basket, people, settings } = this.props;

    return {
      questionStates,
      questionFlag,
      amounts,
      basket,
      people,
      settings,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  simplifyState(enrichedState: QAStateEnriched): QAState {
    return {
      questionStates: enrichedState.questionStates,
      questionFlag: enrichedState.questionFlag,
    };
  }

  initState() {
    const setStates: QAStateEnriched = setInitStates(this.enrichState());
    const setFlags: QAStateEnriched = setInitFlags(setStates);
    this.setState(this.simplifyState(setFlags));
  }

  updateFlagsOptimistically(
    justAnswered: QuestionType,
    enrichedState: QAStateEnriched
  ) {
    const updateFlags: QAStateEnriched = setQuestionFlag(
      justAnswered,
      enrichedState
    );
    this.setState(this.simplifyState(updateFlags));
  }

  updateQA(justAnswered: QuestionType) {
    const updateStates: QAStateEnriched = setQuestionStates(
      justAnswered,
      this.enrichState()
    );
    const updateFlags: QAStateEnriched = setQuestionFlag(
      justAnswered,
      updateStates
    );
    this.setState(this.simplifyState(updateFlags));
  }

  allQuestionsAnswered(): boolean {
    // TODO Object.values returns Array<mixed> in flow. Find better way.
    return Object.values(this.state.questionFlag).every(
      (flag): boolean => flag === 'complete'
    );
  }

  render() {
    const { questionStates, questionFlag } = this.state;
    const {
      t,
      basket,
      people,
      mainCategories,
      settings,
      onDeclarationSetMainCategories,
      onDeclarationSetPeople,
      onDeclarationSetBasket,
    } = this.props;

    const qaStateEnriched: QAStateEnriched = this.enrichState();

    const flatListData = [
      {
        key: 'peopleInput',
        component: (
          <PeopleInputQA
            qaState={qaStateEnriched}
            onAnswerCardPress={() => {
              this.setState(
                this.simplifyState(
                  collapseAllExistingExceptOne('peopleInput', qaStateEnriched)
                )
              );
            }}
            questionState={questionStates.peopleInput}
            questionFlag={questionFlag.peopleInput}
            onUpdate={onUpdateFactory(
              'peopleInput',
              newPeople => {
                onDeclarationSetPeople(newPeople);
                this.updateFlagsOptimistically(
                  'peopleInput',
                  Object.assign({}, qaStateEnriched, { people: newPeople })
                );
              },
              qaStateEnriched
            )}
            onAnswer={() => {
              onDeclarationSetPeople(people);
              this.updateQA('peopleInput');
            }}
          />
        ),
      },
      {
        key: 'mainCategories',
        component: (
          <MainCategoriesInputQA
            qaState={qaStateEnriched}
            onAnswerCardPress={() => {
              this.setState(
                this.simplifyState(
                  collapseAllExistingExceptOne(
                    'mainCategories',
                    qaStateEnriched
                  )
                )
              );
            }}
            questionState={questionStates.mainCategories}
            questionFlag={questionFlag.mainCategories}
            onUpdate={onUpdateFactory(
              'mainCategories',
              activeCategories => {
                onDeclarationSetMainCategories(activeCategories);
                this.updateFlagsOptimistically(
                  'mainCategories',
                  Object.assign({}, qaStateEnriched, {
                    settings: settings.set('mainCategories', activeCategories),
                  })
                );
              },
              qaStateEnriched
            )}
            onAnswer={() => {
              onDeclarationSetMainCategories(mainCategories);
              this.updateQA('mainCategories');
            }}
          />
        ),
      },
      {
        key: 'quantityInput',
        component: (
          <QuantityInputQA
            qaState={qaStateEnriched}
            onAnswerCardPress={() => {
              this.setState(
                this.simplifyState(
                  collapseAllExistingExceptOne('quantityInput', qaStateEnriched)
                )
              );
            }}
            questionState={questionStates.quantityInput}
            questionFlag={questionFlag.quantityInput}
            onUpdate={onUpdateFactory(
              'quantityInput',
              newBasket => {
                onDeclarationSetBasket(newBasket);
                this.updateFlagsOptimistically(
                  'quantityInput',
                  Object.assign({}, qaStateEnriched, { basket: newBasket })
                );
              },
              qaStateEnriched
            )}
            onAnswer={() => {
              onDeclarationSetBasket(basket);
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
  amounts: getDeclarationAmounts(state),
  settings: getDeclarationSettings(state),
  mainCategories: getDeclarationMainCategories(state),
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
