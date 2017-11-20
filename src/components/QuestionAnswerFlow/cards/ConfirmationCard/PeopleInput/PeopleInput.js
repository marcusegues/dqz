import React from 'react';
import ConfirmationCard from '../ConfirmationCard';
import { Text } from 'react-native';

const PeopleInput = ({
  people,
  onAdultsChangeQuantity,
  onMinorsChangeQuantity,
  onAnswerConfirm,
}) => {
  return (
    <ConfirmationCard onAnswerConfirm={onAnswerConfirm}>
      <Text>{`ADD CHILDREN HERE`}</Text>
    </ConfirmationCard>
  );
};

export default PeopleInput;
