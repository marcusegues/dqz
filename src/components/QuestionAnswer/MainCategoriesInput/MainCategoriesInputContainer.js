import React from 'react';
import { View } from 'react-native';
import MainCategoriesInput from './MainCategoriesInput';
import MainCategoriesInputInfo from './MainCategoriesInputInfo';
import AnswerCard from '../cards/AnswerCard/AnswerCard';

const complete = require('../../../../assets/images/complete.png');
const incomplete = require('../../../../assets/images/incomplete.png');
const mainIcon = require('../../../../assets/icons/mainCategories.png');

class MainCategoriesInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.getQuestionComponent = this.getQuestionComponent.bind(this);
    this.getAnswerComponent = this.getAnswerComponent.bind(this);
  }

  getQuestionComponent() {
    const mainCategories = this.props.qaState.settings.get('mainCategories');
    return (
      <MainCategoriesInput
        mainCategories={mainCategories}
        onToggleMainCategory={mainCategory => {
          const newMainCategories = this.handleToggleMainCategory(mainCategory);
          this.handleUpdate(newMainCategories);
        }}
        onAnswer={this.props.onAnswer}
        text="Welche Art Waren führen Sie mit sich?"
      />
    );
  }

  getAnswerComponent() {
    const { settings } = this.props.qaState;
    const mainCategories = settings.get('mainCategories');
    return (
      <AnswerCard
        onAnswerCardPress={this.props.onAnswerCardPress}
        mainIcon={mainIcon}
        status={mainCategories.isEmpty() ? incomplete : complete}
      >
        <MainCategoriesInputInfo mainCategories={mainCategories} />
      </AnswerCard>
    );
  }

  handleUpdate(mainCategories) {
    this.props.onUpdate(mainCategories);
  }

  handleToggleMainCategory(mainCategory) {
    const { settings } = this.props.qaState;
    const mainCategories = settings.get('mainCategories');
    if (mainCategories.has(mainCategory)) {
      return mainCategories.delete(mainCategory);
    }
    return mainCategories.add(mainCategory);
  }

  handleAnswer() {
    this.props.onAnswer();
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
