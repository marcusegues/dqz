import React from 'react';
import ConfirmationQuestion from '../ConfirmationQuestion';
import { Text } from 'react-native';

const PeopleInput = ({
  people,
  onAdultsChangeQuantity,
  onMinorsChangeQuantity,
  onAnswerConfirm,
}) => {
  return (
    <ConfirmationQuestion onAnswerConfirm={onAnswerConfirm}>
      <Text>{`ADD CHILDREN HERE`}</Text>
    </ConfirmationQuestion>
  );
};

export default PeopleInput;
