import type {ComponentType} from 'react';
// @flow
import React from 'react';
// $FlowFixMe
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import {translate} from 'react-i18next';

import {NavBar} from '../NavBar/NavBar';
import {PeopleInputQA} from './PeopleInput/PeopleInputQA';
import {MainCategoriesInputQA} from './MainCategoriesInput/MainCategoriesInputQA';
import {QuantityInputQA} from './QuantityInput/QuantityInputQA';

import {
    getAmounts,
    getBasket,
    getCurrencies,
    getFormattedCurrencyDate,
    getMainCategories,
    getPeople,
    getQAState,
    getReceiptEntryTime,
    getSettings,
} from '../../reducers/selectors';
import type {Amounts, Basket, People,} from '../../model/types/basketPeopleAmountsTypes';
import type {MainCategories, Settings,} from '../../types/reducers/declaration';
import {
    collapseAllExistingExceptOne,
    collapseQuestion,
    setInitStates,
    setQuestionStates,
} from './QAControl/controlQuestionStates';
import {setInitFlags, setQuestionFlag} from './QAControl/controlQuestionFlag';
import {HeaderTitle} from '../Headers/subcomponents/HeaderTitle';
import {onUpdateFactory} from './QAControl/validation';
import {AmountInputQA} from './AmountInput/AmountInputQA';
import type {CurrencyObject} from '../../model/currencies';
import type {Navigation, TFunction} from '../../types/generalTypes';
import {
    analyticsMainCategoriesChanged,
    analyticsPeopleChanged,
    analyticsScreenMounted,
} from '../../analytics/analyticsApi';
import {resetAllAmounts} from '../../model/configurationApi';
import {
    storeAmounts,
    storeBasket,
    storeMainCategories,
    storePeople,
    storeQAState,
} from '../../asyncStorage/storageApi';
import {MainContentContainer} from '../MainContentContainer/MainContentContainer';
import {isInitBasket} from '../../utils/declaration/declaration';
import type {QAState, QuestionFlag, QuestionState, QuestionType} from "./types/questionAnswerTypes";

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

export type DirectionType = 'forward' | 'back' | 'update';

export type CardProps = {
  qaState: QAStateEnriched,
  onConfirmationCardTitlePress: () => void,
  onAnswerCardPress: () => void,
  questionState: QuestionState,
  questionFlag: QuestionFlag,
  onUpdate: any => void,
  onAnswer: DirectionType => void,
};

type QuestionAnswerContainerProps = {
  navigation: Navigation,
  // dispatch to props
  saveQAState: (qaState: QAState) => void,
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
  receiptEntryTime: string,
  qaState: QAState,
  currencies: CurrencyObject,
  currencyDate: string,
  t: TFunction,
};

export const initialQAState = {
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

class QuestionAnswerContainerInner extends React.Component<
  QuestionAnswerContainerProps,
  QAState
> {
  static navigationOptions = ({ screenProps }) => ({
    headerTitle: <HeaderTitle text={screenProps.t('qaFlow:declareGoods')} />,
  });

  constructor(props) {
    super(props);
    this.state = initialQAState;
  }

  componentWillMount() {
    analyticsScreenMounted('QuestionAnswerContainer');
  }

  componentDidMount() {
    const {
      people,
      basket,
      mainCategories,
      amounts,
      receiptEntryTime,
    } = this.props;
    if (
      isInitBasket(people, basket, mainCategories, amounts, receiptEntryTime)
    ) {
      this.initState();
    } else {
      this.setReduxQAStateToComponentState();
    }
    analyticsPeopleChanged(this.props.people);
  }

  componentWillUnmount() {
    this.props.saveQAState(this.state);
  }

  setReduxQAStateToComponentState() {
    this.setState(this.props.qaState);
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
      this.props.navigation,
      this.enrichState()
    );
    const updateFlags: QAStateEnriched = setInitFlags(updateStates);
    this.setState(this.simplifyState(updateFlags));
  }

  collapseQuestion(question: QuestionType, qaStateEnriched: QAStateEnriched) {
    this.setState(
      this.simplifyState(collapseQuestion(question, qaStateEnriched))
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
            onConfirmationCardTitlePress={() =>
              this.collapseQuestion('peopleInput', qaStateEnriched)
            }
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
            onConfirmationCardTitlePress={() =>
              this.collapseQuestion('mainCategories', qaStateEnriched)
            }
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
            onConfirmationCardTitlePress={() =>
              this.collapseQuestion('quantityInput', qaStateEnriched)
            }
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
            onConfirmationCardTitlePress={() => {
              this.collapseQuestion('amounts', qaStateEnriched);
            }}
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
            onConfirmationCardTitlePress={() =>
              this.collapseQuestion('largeAmounts', qaStateEnriched)
            }
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
  receiptEntryTime: getReceiptEntryTime(state),
  qaState: getQAState(state),
});

const mapDispatchToProps = dispatch => ({
  saveQAState: (qaState: QAState) => {
    storeQAState(qaState);
    dispatch({
      type: 'SET_QA_STATE',
      qaState,
    });
  },
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
