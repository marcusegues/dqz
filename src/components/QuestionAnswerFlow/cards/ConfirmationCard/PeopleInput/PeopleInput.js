import React from 'react';
import { Text } from 'react-native';
import ConfirmationCard from '../ConfirmationCard';
import PeopleInputRow from '../children/PeopleInputRow';

const PeopleInput = ({
  people,
  onAdultsChangeQuantity,
  onMinorsChangeQuantity,
  onAnswerConfirm,
}) => {
  return (
    <ConfirmationCard onAnswerConfirm={onAnswerConfirm}>
      <PeopleInputRow />
    </ConfirmationCard>
  );
};

export default PeopleInput;
