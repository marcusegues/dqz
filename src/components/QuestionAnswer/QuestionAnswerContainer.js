// @flow
/* eslint react/no-unused-state: 0 */
import React from 'react';
// $FlowFixMe
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import RedButton from '../Buttons/RedButton';
import PeopleInputQA from './PeopleInput/PeopleInputQA';
import MainCategoriesInputQA from './MainCategoriesInput/MainCategoriesInputQA';
import QuantityInputQA from './QuantityInput/QuantityInputQA';
import {
  getDeclarationBasket,
  getDeclarationPeople,
  getDeclarationSettings,
} from '../../reducers';
import type { People, Basket } from '../../model/types/basketPeopleTypes';
import type {
  SettingsType,
  MainCategoriesType,
} from '../../types/reducers/declaration';

type questionType =
  | 'peopleInput'
  | 'hasLargeAmount'
  | 'largeAmountInput'
  | 'overAllowance'
  | 'amountInput'
  | 'mainCategories'
  | 'quantityInput'
  | 'none';

type questionState = 'expanded' | 'hidden' | 'collapsed' | 'warning';

type State = {
  questionStates: { [questionType]: questionState },
  basket: Basket,
  people: People,
  settings: SettingsType,
};

class QuestionAnswerContainer2 extends React.Component<any, State> {
  constructor(props) {
    super(props);

    this.state = {
      basket: this.props.basket,
      people: this.props.people,
      settings: this.props.settings,
      questionStates: {
        peopleInput: 'collapsed',
        mainCategories: 'collapsed',
        quantityInput: 'collapsed',
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
          quantityInput: 'collapsed',
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
    const { peopleInput, mainCategories, quantityInput } = questionStates;
    const { navigation } = this.props;

    const flatListData = [
      {
        key: 'peopleInput',
        component: (
          <PeopleInputQA
            qaState={this.state}
            onAnswerCardPress={() => {
              this.expandQuestion('peopleInput');
            }}
            questionState={peopleInput}
            onUpdate={people => {
              this.setState({ people });
            }}
            onAnswer={() => {
              this.props.onDeclarationSetPeople(this.state.people);
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
              this.expandQuestion('mainCategories');
            }}
            questionState={mainCategories}
            onUpdate={m => {
              this.setState({
                settings: this.state.settings.set('mainCategories', m),
              });
            }}
            onAnswer={() => {
              this.props.onDeclarationSetMainCategories(
                this.state.settings.get('mainCategories')
              );
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
              this.expandQuestion('quantityInput');
            }}
            questionState={quantityInput}
            onUpdate={basket => {
              this.setState({
                basket,
              });
            }}
            onAnswer={() => {
              this.props.onDeclarationSetBasket(this.state.basket);
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
  basket: getDeclarationBasket(state),
  people: getDeclarationPeople(state),
  settings: getDeclarationSettings(state),
});

const mapDispatchToProps = dispatch => ({
  onDeclarationSetPeople: (people: People) =>
    dispatch({
      type: 'DECLARATION_SET_PEOPLE',
      people,
    }),
  onDeclarationSetMainCategories: (mainCategories: MainCategoriesType) =>
    dispatch({ type: 'DECLARATION_SET_MAIN_CATEGORIES', mainCategories }),
  onDeclarationBasketChangeQuantity: (category, quantityChange) =>
    dispatch({
      type: 'DECLARATION_BASKET_CHANGE_QUANTITY',
      category,
      quantityChange,
    }),
  onDeclarationSetBasket: basket =>
    dispatch({ type: 'DECLARATION_SET_BASKET', basket }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  QuestionAnswerContainer2
);
