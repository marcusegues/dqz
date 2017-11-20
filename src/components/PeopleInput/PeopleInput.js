import React from 'react';
import ConfirmationQuestionCard from '../ConfirmationQuestionCard';
import { Text } from 'react-native';

const PeopleInput = ({
  people,
  onAdultsChangeQuantity,
  onMinorsChangeQuantity,
  onAnswerConfirm,
}) => {
  return (
    <ConfirmationQuestionCard onAnswerConfirm={onAnswerConfirm}>
      <Text>{`ADD CHILDREN HERE`}</Text>
    </ConfirmationQuestionCard>
  );
};

export default PeopleInput;
