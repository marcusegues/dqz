// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import MainCategoriesInputConfirmationCard from '../cards/ConfirmationCard/configured/MainCategoriesInput/MainCategoriesInputConfirmationCard';
import MainCategoriesInputAnswerCard from '../cards/AnswerCard/configured/MainCategoriesInput/MainCategoriesInputAnswerCard';
import type { cardProps } from '../QuestionAnswerContainer';

const MainCategoriesInputContainer = (props: cardProps) => {
  const handleUpdate = mainCategories => {
    props.onUpdate(mainCategories);
  };

  const handleToggleMainCategory = mainCategory => {
    const { settings } = props.qaState;
    const mainCategories = settings.get('mainCategories');
    if (mainCategories.has(mainCategory)) {
      return mainCategories.delete(mainCategory);
    }
    return mainCategories.add(mainCategory);
  };

  const getQuestionComponent = () => {
    const mainCategories = props.qaState.settings.get('mainCategories');
    return (
      <MainCategoriesInputConfirmationCard
        mainCategories={mainCategories}
        onToggleMainCategory={mainCategory => {
          const newMainCategories = handleToggleMainCategory(mainCategory);
          handleUpdate(newMainCategories);
        }}
        onAnswer={props.onAnswer}
        text="Welche Art Waren führen Sie mit sich?"
      />
    );
  };

  const getAnswerComponent = () => {
    const { settings } = props.qaState;
    const mainCategories = settings.get('mainCategories');
    const status = mainCategories.size ? 'complete' : 'incomplete';
    return (
      <MainCategoriesInputAnswerCard
        mainCategories={mainCategories}
        onAnswerCardPress={props.onAnswerCardPress}
        status={status}
      />
    );
  };

  switch (props.questionState) {
    case 'expanded': {
      return getQuestionComponent();
    }
    case 'collapsed': {
      return getAnswerComponent();
    }
    default: {
      return <View />;
    }
  }
};

export default MainCategoriesInputContainer;
