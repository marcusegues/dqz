// @flow
/* eslint react/no-unused-state: 0 */
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import NavBar from '../NavBar/NavBar';
import RedButton from '../Buttons/RedButton';
import { PeopleInputQA } from './PeopleInput/PeopleInputQA';
import { MainCategoriesInputQA } from './MainCategoriesInput/MainCategoriesInputQA';
import { QuantityInputQA } from './QuantityInput/QuantityInputQA';

import {
  getBasket,
  getPeople,
  getSettings,
  getAmounts,
  getMainCategories,
  getCurrencies,
  getFormattedCurrencyDate,
} from '../../reducers';
import type {
  Amounts,
  Basket,
  People,
} from '../../model/types/basketPeopleAmountsTypes';
import type {
  MainCategories,
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
import AmountInputQA from './AmountInput/AmountInputQA';
import type { CurrencyObject } from '../../model/currencies';
import type { TFunction } from '../../types/generalTypes';

export type QuestionType =
  | 'peopleInput'
  | 'mainCategories'
  | 'quantityInput'
  | 'amounts'
  | 'largeAmounts'
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
  currencies: CurrencyObject,
  currencyDate: string,
};

export type DirectionType = 'forward' | 'back';

export type CardProps = {
  qaState: QAStateEnriched,
  onAnswerCardPress: () => void,
  questionState: QuestionState,
  questionFlag: QuestionFlag,
  onUpdate: any => void,
  onAnswer: DirectionType => void,
};

type QuestionAnswerContainerProps = {
  navigation: any,
  // dispatch to props
  setAmounts: (amounts: Amounts) => void,
  setPeople: (people: People) => void,
  setBasket: (basket: Basket) => void,
  setMainCategories: (mainCategories: MainCategories) => void,
  // state to props
  settings: Settings,
  basket: Basket,
  amounts: Amounts,
  people: People,
  mainCategories: MainCategories,
  currencies: CurrencyObject,
  currencyDate: string,
  t: TFunction,
};

class QuestionAnswerContainerInner extends React.Component<
  QuestionAnswerContainerProps,
  QAState
> {
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
        amounts: 'hidden',
        largeAmounts: 'hidden',
      },
      questionFlag: {
        peopleInput: 'complete',
        mainCategories: 'incomplete',
        quantityInput: 'incomplete',
        amounts: 'incomplete',
        largeAmounts: 'incomplete',
      },
    };
  }

  componentDidMount() {
    this.initState();
  }

  enrichState(): QAStateEnriched {
    const { questionStates, questionFlag } = this.state;
    const {
      amounts,
      basket,
      people,
      settings,
      currencies,
      currencyDate,
    } = this.props;

    return {
      questionStates,
      questionFlag,
      amounts,
      basket,
      people,
      settings,
      currencies,
      currencyDate,
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

  updateQA(justAnswered: QuestionType, direction: DirectionType) {
    const updateStates: QAStateEnriched = setQuestionStates(
      justAnswered,
      direction,
      this.enrichState()
    );
    const updateFlags: QAStateEnriched = setQuestionFlag(
      justAnswered,
      updateStates
    );
    this.setState(this.simplifyState(updateFlags));
    if (justAnswered === 'peopleInput' && direction === 'back') {
      this.props.navigation.goBack();
    }
  }

  render() {
    const { questionStates, questionFlag } = this.state;
    const {
      t,
      basket,
      people,
      mainCategories,
      settings,
      setMainCategories,
      setPeople,
      setBasket,
      setAmounts,
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
            onUpdate={newPeople =>
              onUpdateFactory(
                {
                  questionType: 'peopleInput',
                  onUpdate: updatedPeople => {
                    setPeople(updatedPeople);
                    this.updateFlagsOptimistically(
                      'peopleInput',
                      Object.assign({}, qaStateEnriched, {
                        people: updatedPeople,
                      })
                    );
                  },
                  people: newPeople,
                },
                qaStateEnriched,
                t
              )
            }
            onAnswer={(direction: DirectionType) => {
              setPeople(people);
              this.updateQA('peopleInput', direction);
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
            onUpdate={newCategories =>
              onUpdateFactory(
                {
                  questionType: 'mainCategories',
                  onUpdate: ({
                    mainCategories: updatedCategories,
                    basket: updatedBasket,
                  }) => {
                    setMainCategories(updatedCategories);
                    setBasket(updatedBasket);
                    this.updateFlagsOptimistically(
                      'mainCategories',
                      Object.assign({}, qaStateEnriched, {
                        settings: settings.set(
                          'mainCategories',
                          updatedCategories
                        ),
                      })
                    );
                  },
                  mainCategories: newCategories,
                },
                qaStateEnriched,
                t
              )
            }
            onAnswer={(direction: DirectionType) => {
              setMainCategories(mainCategories);
              this.updateQA('mainCategories', direction);
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
            onUpdate={newBasket =>
              onUpdateFactory(
                {
                  questionType: 'quantityInput',
                  onUpdate: updatedBasket => {
                    setBasket(updatedBasket);
                    this.updateFlagsOptimistically(
                      'quantityInput',
                      Object.assign({}, qaStateEnriched, {
                        basket: updatedBasket,
                      })
                    );
                  },
                  basket: newBasket,
                },
                qaStateEnriched,
                t
              )
            }
            onAnswer={(direction: DirectionType) => {
              setBasket(basket);
              this.updateQA('quantityInput', direction);
            }}
          />
        ),
      },
      {
        key: 'amounts',
        component: (
          <AmountInputQA
            large={false}
            qaState={qaStateEnriched}
            onAnswerCardPress={() => {
              this.setState(
                this.simplifyState(
                  collapseAllExistingExceptOne('amounts', qaStateEnriched)
                )
              );
            }}
            questionState={questionStates.amounts}
            questionFlag={questionFlag.amounts}
            onUpdate={newAmounts =>
              onUpdateFactory(
                {
                  questionType: 'amounts',
                  onUpdate: updatedAmounts => {
                    setAmounts(updatedAmounts);
                    this.updateFlagsOptimistically(
                      'amounts',
                      Object.assign({}, qaStateEnriched, {
                        amounts: updatedAmounts,
                      })
                    );
                  },
                  amounts: newAmounts,
                },
                qaStateEnriched,
                t
              )
            }
            onAnswer={(direction: DirectionType) => {
              setBasket(basket);
              this.updateQA('amounts', direction);
            }}
          />
        ),
      },
      {
        key: 'largeAmounts',
        component: (
          <AmountInputQA
            large
            qaState={qaStateEnriched}
            onAnswerCardPress={() => {
              this.setState(
                this.simplifyState(
                  collapseAllExistingExceptOne('largeAmounts', qaStateEnriched)
                )
              );
            }}
            questionState={questionStates.largeAmounts}
            questionFlag={questionFlag.largeAmounts}
            onUpdate={newAmounts =>
              onUpdateFactory(
                {
                  questionType: 'largeAmounts',
                  onUpdate: updatedAmounts => {
                    setAmounts(updatedAmounts);
                    this.updateFlagsOptimistically(
                      'largeAmounts',
                      Object.assign({}, qaStateEnriched, {
                        amounts: updatedAmounts,
                      })
                    );
                  },
                  amounts: newAmounts,
                },
                qaStateEnriched,
                t
              )
            }
            onAnswer={(direction: DirectionType) => {
              setBasket(basket);
              this.updateQA('largeAmounts', direction);
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
            text={t('qaFlow:toOverview')}
            onPress={() => this.props.navigation.navigate('Payment')}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  basket: getBasket(state),
  people: getPeople(state),
  amounts: getAmounts(state),
  settings: getSettings(state),
  mainCategories: getMainCategories(state),
  currencies: getCurrencies(state),
  currencyDate: getFormattedCurrencyDate(state),
});

const mapDispatchToProps = dispatch => ({
  setPeople: (people: People) =>
    dispatch({
      type: 'SET_PEOPLE',
      people,
    }),
  setMainCategories: (mainCategories: MainCategories) =>
    dispatch({
      type: 'SET_MAIN_CATEGORIES',
      mainCategories,
    }),
  basketChangeQuantity: (category, quantity) =>
    dispatch({
      type: 'BASKET_ADD_QUANTITY',
      category,
      quantity,
    }),
  setBasket: basket =>
    dispatch({
      type: 'SET_BASKET',
      basket,
    }),
  setAmounts: amounts =>
    dispatch({
      type: 'SET_AMOUNTS',
      amounts,
    }),
});

export const QuestionAnswerContainer = (connect(
  mapStateToProps,
  mapDispatchToProps
)(
  translate(['qaFlow', 'categories'])(QuestionAnswerContainerInner)
): ComponentType<{}>);
