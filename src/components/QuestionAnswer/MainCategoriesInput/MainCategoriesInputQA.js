// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { MainCategoriesInputConfirmationCard } from '../cards/ConfirmationCard/configured/MainCategoriesInput/MainCategoriesInputConfirmationCard';
import { MainCategoriesInputAnswerCard } from '../cards/AnswerCard/configured/MainCategoriesInput/MainCategoriesInputAnswerCard';
import type { CardProps } from '../QuestionAnswerContainer';
import type {
  MainCategories,
  MainCategory,
} from '../../../types/reducers/declaration';

export const MainCategoriesInputQA = (props: CardProps) => {
  const handleUpdate = mainCategories => {
    props.onUpdate(mainCategories);
  };

  const handleToggleMainCategory = (
    mainCategory: MainCategory
  ): MainCategories => {
    const { settings } = props.qaState;
    const mainCategories: MainCategories = settings.get('mainCategories');
    if (mainCategories.has(mainCategory)) {
      return mainCategories.delete(mainCategory);
    }
    return mainCategories.add(mainCategory);
  };

  const getQuestionComponent = () => {
    const mainCategories: MainCategories = props.qaState.settings.get(
      'mainCategories'
    );
    return (
      <MainCategoriesInputConfirmationCard
        mainCategories={mainCategories}
        onToggleMainCategory={mainCategory => {
          const newMainCategories = handleToggleMainCategory(mainCategory);
          handleUpdate(newMainCategories);
        }}
        onAnswer={props.onAnswer}
      />
    );
  };

  const getAnswerComponent = () => {
    const { settings } = props.qaState;
    const mainCategories = settings.get('mainCategories');
    return (
      <MainCategoriesInputAnswerCard
        mainCategories={mainCategories}
        onAnswerCardPress={props.onAnswerCardPress}
        flag={props.questionFlag}
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
