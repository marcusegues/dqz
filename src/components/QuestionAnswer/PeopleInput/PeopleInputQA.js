// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { PeopleInputAnswerCard } from '../Cards/AnswerCard/configured/PeopleInput/PeopleInputAnswerCard';
import { PeopleInputConfirmationCard } from '../Cards/ConfirmationCard/configured/PeopleInput/PeopleInputConfirmationCard';
import {
  addAdult,
  addMinor,
  subtractAdult,
  subtractMinor,
} from '../../../model/configurationApi';
import type { CardProps } from '../QuestionAnswerContainer';

export const PeopleInputQA = (props: CardProps) => {
  const getQuestionComponent = () => {
    const { onAnswer, onUpdate, qaState, onConfirmationCardTitlePress } = props;
    const { people } = qaState;
    return (
      <PeopleInputConfirmationCard
        people={people}
        onAnswer={onAnswer}
        onConfirmationCardTitlePress={onConfirmationCardTitlePress}
        onAddAdult={() => onUpdate(addAdult(people))}
        onSubtractAdult={() => onUpdate(subtractAdult(people))}
        onAddMinor={() => onUpdate(addMinor(people))}
        onSubtractMinor={() => onUpdate(subtractMinor(people))}
      />
    );
  };

  const getAnswerComponent = () => (
    <PeopleInputAnswerCard
      people={props.qaState.people}
      onAnswerCardPress={props.onAnswerCardPress}
    />
  );

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
