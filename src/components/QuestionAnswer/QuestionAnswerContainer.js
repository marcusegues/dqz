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
import {
  collapseAllExistingExceptOne,
  setInitStates,
  setQuestionStates,
} from './QAControl/controlQuestionStates';

export type questionType =
  | 'peopleInput'
  | 'mainCategories'
  | 'quantityInput'
  | 'none';

export type questionState = 'expanded' | 'hidden' | 'collapsed' | 'warning';

export type QAState = {
  questionStates: { [questionType]: questionState },
  basket: Basket,
  people: People,
  settings: SettingsType,
};

// TODO: flowtype the props
class QuestionAnswerContainer extends React.Component<any, QAState> {
  constructor(props) {
    super(props);

    this.state = {
      basket: this.props.basket,
      people: this.props.people,
      settings: this.props.settings,
      questionStates: {
        peopleInput: 'expanded',
        mainCategories: 'hidden',
        quantityInput: 'hidden',
      },
    };
  }

  componentDidMount() {
    this.initState();
  }

  initState() {
    this.setState(setInitStates(this.state));
  }

  updateQA(justAnswered: questionType) {
    this.setState(setQuestionStates(justAnswered, this.state));
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
              this.setState(
                collapseAllExistingExceptOne('peopleInput', this.state)
              );
            }}
            questionState={peopleInput}
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
            questionState={mainCategories}
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
            questionState={quantityInput}
            onUpdate={basket => {
              this.setState({
                basket,
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
    dispatch({
      type: 'DECLARATION_SET_MAIN_CATEGORIES',
      mainCategories,
    }),
  onDeclarationBasketChangeQuantity: (category, quantityChange) =>
    dispatch({
      type: 'DECLARATION_BASKET_CHANGE_QUANTITY',
      category,
      quantityChange,
    }),
  onDeclarationSetBasket: basket =>
    dispatch({
      type: 'DECLARATION_SET_BASKET',
      basket,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  QuestionAnswerContainer
);
