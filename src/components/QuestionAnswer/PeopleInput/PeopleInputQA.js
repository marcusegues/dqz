// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { PeopleInputAnswerCard } from '../cards/AnswerCard/configured/PeopleInput/PeopleInputAnswerCard';
import { PeopleInputConfirmationCard } from '../cards/ConfirmationCard/configured/PeopleInput/PeopleInputConfirmationCard';
import {
  addAdult,
  addMinor,
  subtractAdult,
  subtractMinor,
} from '../../../model/configurationApi';
import type { CardProps } from '../QuestionAnswerContainer';
import { analyticsQACardOpenend } from '../../../analytics/analyticsApi';

export const PeopleInputQA = (props: CardProps) => {
  const getQuestionComponent = () => {
    analyticsQACardOpenend('PeopleInput');
    const { onAnswer, onUpdate, qaState } = props;
    const { people } = qaState;
    return (
      <PeopleInputConfirmationCard
        people={people}
        onAnswer={onAnswer}
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
