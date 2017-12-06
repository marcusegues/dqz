import React from 'react';
import { connect } from 'react-redux';
import { getDeclarationMainCategories } from '../../../reducers';
import MainCategoriesInput from './MainCategoriesInput';
import MainCategoriesInputInfo from './MainCategoriesInputInfo';
import { EmptyMainCategories } from '../../../types/reducers/declaration';
import AnswerCard from '../cards/AnswerCard/AnswerCard';

const complete = require('../../../../assets/images/complete.png');
const incomplete = require('../../../../assets/images/incomplete.png');
const mainIcon = require('../../../../assets/icons/mainCategories.png');

class MainCategoriesInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainCategories:
        this.props.mainCategories === 'notAnswered'
          ? EmptyMainCategories
          : this.props.mainCategories
    };
    this.handleAddMainCategory = this.handleAddMainCategory.bind(this);
    this.handleRemoveMainCategory = this.handleRemoveMainCategory.bind(this);
    this.handleToggleMainCategory = this.handleToggleMainCategory.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.getQuestionComponent = this.getQuestionComponent.bind(this);
    this.getAnswerComponent = this.getAnswerComponent.bind(this);
  }

  getQuestionComponent() {
    return (
      <MainCategoriesInput
        mainCategories={this.state.mainCategories}
        onToggleMainCategory={this.handleToggleMainCategory}
        onAnswer={this.handleAnswer}
        text="Welche Art Waren führen Sie mit sich?"
      />
    );
  }

  getAnswerComponent() {
    const { onAnswerPress, mainCategories } = this.props;
    return (
      <AnswerCard
        onAnswerPress={onAnswerPress}
        mainIcon={mainIcon}
        status={
          mainCategories === 'notAnswered' || mainCategories.isEmpty()
            ? incomplete
            : complete
        }
      >
        <MainCategoriesInputInfo mainCategories={this.state.mainCategories} />
      </AnswerCard>
    );
  }

  handleAddMainCategory(mainCategory) {
    this.setState({
      mainCategories: this.state.mainCategories.add(mainCategory)
    });
  }

  handleRemoveMainCategory(mainCategory) {
    this.setState({
      mainCategories: this.state.mainCategories.delete(mainCategory)
    });
  }

  handleToggleMainCategory(mainCategory) {
    if (this.state.mainCategories.has(mainCategory)) {
      this.handleRemoveMainCategory(mainCategory);
    } else {
      this.handleAddMainCategory(mainCategory);
    }
  }

  async handleAnswer() {
    await this.props.onSetMainCategories(this.state.mainCategories);
    this.props.onAnswer();
  }

  render() {
    const { init, initList, currentQuestion } = this.props;
    if (init && !initList.includes('mainCategories')) {
      return null;
    }
    return currentQuestion === 'mainCategories'
      ? this.getQuestionComponent()
      : this.getAnswerComponent();
  }
}

const mapStateToProps = state => ({
  mainCategories: getDeclarationMainCategories(state)
});

const mapDispatchToProps = dispatch => ({
  onSetMainCategories: mainCategories =>
    dispatch({ type: 'DECLARATION_SET_MAIN_CATEGORIES', mainCategories })
});

export default connect(mapStateToProps, mapDispatchToProps)(
  MainCategoriesInputContainer
);
