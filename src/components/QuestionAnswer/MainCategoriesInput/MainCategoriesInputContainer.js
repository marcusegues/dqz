import React from 'react';
import { connect } from 'react-redux';
import { getDeclarationMainCategories } from '../../../reducers';
import MainCategoriesInput from './MainCategoriesInput';
import MainCategoriesInputInfo from './MainCategoriesInputInfo';
import { EmptyMainCategories } from '../../../types/reducers/declaration';
import AnswerCard from '../cards/AnswerCard/AnswerCard';

const complete = require('../../../../assets/images/complete.png');
const incomplete = require('../../../../assets/images/incomplete.png');

class MainCategoriesInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainCategories:
        this.props.mainCategories === 'notAnswered'
          ? EmptyMainCategories
          : this.props.mainCategories,
    };
    this.handleAnswer = this.handleAnswer.bind(this);
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
        mainIcon="owl"
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
      mainCategories: this.state.mainCategories.add(mainCategory),
    });
  }

  handleRemoveMainCategory(mainCategory) {
    this.setState({
      mainCategories: this.state.mainCategories.delete(mainCategory),
    });
  }

  handleToggleMainCategory(mainCategory) {
    if (this.state.mainCategories.has(mainCategory)) {
      this.handleRemoveMainCategory(mainCategory);
    } else {
      this.handleAddMainCategory(mainCategory);
    }
  }

  handleAnswer() {
    this.props.onAnswer(this.state.mainCategories);
  }

  render() {
    switch (this.props.questionState) {
      case 'expanded': {
        return this.getQuestionComponent();
      }
      case 'collapsed': {
        return this.getAnswerComponent();
      }
      default: {
        return <View />;
      }
    }
  }
}

export default MainCategoriesInputContainer;
