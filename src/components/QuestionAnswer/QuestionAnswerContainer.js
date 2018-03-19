// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { NavBar } from '../NavBar/NavBar';
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
} from '../../reducers/selectors';
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
import { HeaderTitle } from '../Headers/subcomponents/HeaderTitle';
import { onUpdateFactory } from './QAControl/validation';
import { AmountInputQA } from './AmountInput/AmountInputQA';
import type { CurrencyObject } from '../../model/currencies';
import type { Navigation, TFunction } from '../../types/generalTypes';
import {
  analyticsMainCategoriesChanged,
  analyticsPeopleChanged,
  analyticsScreenMounted,
} from '../../analytics/analyticsApi';
import { hasLargeAmount } from '../../model/utils';
import { getTotalPeople, resetAllAmounts } from '../../model/configurationApi';
import {
  storeAmounts,
  storeBasket,
  storeMainCategories,
  storePeople,
} from '../../asyncStorage/storageApi';
import { MainContentContainer } from '../MainContentContainer/MainContentContainer';
import {
  setInitSeen,
  setQuestionSeen,
  setQuestionSeenInState,
} from './QAControl/controlQuestionSeen';
import { mainCategories } from '../../types/reducers/declaration';

export type QuestionType =
  | 'peopleInput'
  | 'mainCategories'
  | 'quantityInput'
  | 'amounts'
  | 'largeAmounts'
  | 'none';

export type QuestionState = 'expanded' | 'hidden' | 'collapsed' | 'warning';

export type QuestionFlag = 'complete' | 'incomplete';

export type QuestionSeen = boolean;

export type QAState = {
  questionStates: { [QuestionType]: QuestionState },
  questionFlag: { [QuestionType]: QuestionFlag },
  questionSeen: { [QuestionType]: QuestionSeen },
};

export type QAStateEnriched = {
  questionStates: { [QuestionType]: QuestionState },
  questionFlag: { [QuestionType]: QuestionFlag },
  questionSeen: { [QuestionType]: QuestionSeen },
  amounts: Amounts,
  basket: Basket,
  people: People,
  settings: Settings,
  currencies: CurrencyObject,
  currencyDate: string,
};

export type DirectionType = 'forward' | 'back' | 'update';

export type CardProps = {
  qaState: QAStateEnriched,
  onAnswerCardPress: () => void,
  questionState: QuestionState,
  questionFlag: QuestionFlag,
  onUpdate: any => void,
  onAnswer: DirectionType => void,
};

type QuestionAnswerContainerProps = {
  navigation: Navigation,
  // dispatch to props
  setAmounts: (amounts: Amounts) => void,
  setPeople: (people: People) => void,
  setBasket: (basket: Basket) => void,
  setMainCategories: (mainCategories: MainCategories) => Promise<any>,
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
      questionSeen: {
        peopleInput: false,
        mainCategories: false,
        quantityInput: false,
        amounts: false,
        largeAmounts: false,
      },
    };
  }

  componentWillMount() {
    analyticsScreenMounted('QuestionAnswerContainer');
  }

  componentDidMount() {
    this.initState();
    analyticsPeopleChanged(this.props.people);
  }

  enrichState(): QAStateEnriched {
    const { questionStates, questionFlag, questionSeen } = this.state;
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
      questionSeen,
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
      questionSeen: enrichedState.questionSeen,
    };
  }

  initState() {
    const setStates: QAStateEnriched = setInitStates(this.enrichState());
    const setFlags: QAStateEnriched = setInitFlags(setStates);
    const setSeen: QAStateEnriched = setInitSeen(setFlags);
    this.setState(this.simplifyState(setSeen));
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
    let enrichedState = this.enrichState();
    enrichedState = setQuestionSeen(justAnswered, enrichedState);
    if (justAnswered === 'mainCategories' && !this.props.mainCategories.size) {
      enrichedState = setQuestionSeenInState(enrichedState, {
        quantityInput: false,
        amounts: false,
        largeAmounts: false,
      });
    }
    const updateStates: QAStateEnriched = setQuestionStates(
      justAnswered,
      direction,
      this.props.navigation,
      enrichedState
    );
    const updateFlags: QAStateEnriched = setQuestionFlag(
      justAnswered,
      updateStates
    );
    this.setState(this.simplifyState(updateFlags));
  }

  render() {
    const { questionStates, questionFlag } = this.state;
    const {
      t,
      basket,
      people,
      currencies,
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
                    analyticsPeopleChanged(updatedPeople);
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
                    setMainCategories(updatedCategories).then(() => {
                      analyticsMainCategoriesChanged(updatedCategories);
                      setBasket(updatedBasket);
                      if (!updatedCategories.size) {
                        setAmounts(resetAllAmounts());
                      }
                      this.updateFlagsOptimistically(
                        'mainCategories',
                        Object.assign({}, qaStateEnriched, {
                          settings: settings.set(
                            'mainCategories',
                            updatedCategories
                          ),
                        })
                      );
                      this.updateQA('mainCategories', 'update');
                    });
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
                    // analytics are in the component (add/delete)
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
                    const tempState = this.state;
                    tempState.questionStates.largeAmounts =
                      hasLargeAmount(newAmounts, currencies) &&
                      getTotalPeople(people) > 1
                        ? 'collapsed'
                        : 'hidden';
                    this.setState(tempState);
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
      <MainContentContainer>
        <NavBar step={1} />
        <FlatList
          style={{ width: '100%' }}
          data={flatListData}
          renderItem={({ item }) => item.component}
        />
      </MainContentContainer>
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
  setPeople: (people: People) => {
    storePeople(people);
    dispatch({
      type: 'SET_PEOPLE',
      people,
    });
  },
  setMainCategories: (mainCategories: MainCategories): Promise<any> =>
    new Promise(resolve => {
      storeMainCategories(mainCategories);
      dispatch({
        type: 'SET_MAIN_CATEGORIES',
        mainCategories,
      });
      resolve();
    }),
  basketChangeQuantity: (category, quantity) =>
    dispatch({
      type: 'BASKET_ADD_QUANTITY',
      category,
      quantity,
    }),
  setBasket: basket => {
    storeBasket(basket);
    dispatch({
      type: 'SET_BASKET',
      basket,
    });
  },
  setAmounts: amounts => {
    storeAmounts(amounts);
    dispatch({
      type: 'SET_AMOUNTS',
      amounts,
    });
  },
});

export const QuestionAnswerContainer = (connect(
  mapStateToProps,
  mapDispatchToProps
)(
  translate(['qaFlow', 'categories'])(QuestionAnswerContainerInner)
): ComponentType<{}>);
