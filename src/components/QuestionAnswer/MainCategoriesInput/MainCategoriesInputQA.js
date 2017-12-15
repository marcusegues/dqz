import React from 'react';
import { View } from 'react-native';
import MainCategoriesInput from '../cards/ConfirmationCard/configured/MainCategoriesInput/MainCategoriesInputConfirmationCard';
import MainCategoriesInputAnswerCard from '../cards/AnswerCard/configured/MainCategoriesInput/MainCategoriesInputAnswerCard';

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
    const status = mainCategories.size ? 'complete' : 'incomplete';
    return (
      <MainCategoriesInputAnswerCard
        mainCategories={mainCategories}
        onAnswerCardPress={this.props.onAnswerCardPress}
        status={status}
      />
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
