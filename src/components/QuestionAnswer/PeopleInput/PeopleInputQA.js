// @flow
import React from 'react';
// $FlowFixMe
import { View } from 'react-native';
import PeopleInputAnswerCard from '../cards/AnswerCard/configured/PeopleInput/PeopleInputAnswerCard';
import PeopleInputConfirmationCard from '../cards/ConfirmationCard/configured/PeopleInput/PeopleInputConfirmationCard';
import {
  addAdult,
  addMinor,
  subtractAdult,
  subtractMinor,
} from '../../../model/configurationApi';
import type { People } from '../../../model/types/basketPeopleTypes';

// todo: flowtype props
const PeopleInputQA = (props: any) => {
  const handleUpdate = (people: People) => {
    props.onUpdate(people);
  };

  const getQuestionComponent = () => {
    const { people } = props.qaState;
    return (
      <PeopleInputConfirmationCard
        people={people}
        onAnswer={props.onAnswer}
        onAddAdult={() => handleUpdate(addAdult(people))}
        onSubtractAdult={() => handleUpdate(subtractAdult(people))}
        onAddMinor={() => handleUpdate(addMinor(people))}
        onSubtractMinor={() => handleUpdate(subtractMinor(people))}
        text={props.text}
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

export default PeopleInputQA;
