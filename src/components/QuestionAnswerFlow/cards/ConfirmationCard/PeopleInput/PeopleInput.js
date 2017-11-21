import React from 'react';
import { Text } from 'react-native';
import ConfirmationCard from '../ConfirmationCard';
import AdultInputRow from '../children/configured/AdultInputRow';
import MinorInputRow from '../children/configured/MinorInputRow';

const PeopleInput = ({
  people,
  onAddAdult,
  onSubtractAdult,
  onAddMinor,
  onSubtractMinor,
  onAnswerConfirm,
}) => {
  return (
    <ConfirmationCard onAnswerConfirm={onAnswerConfirm}>
      <AdultInputRow
        people={people}
        onAddAdult={onAddAdult}
        onSubtractAdult={onSubtractAdult}
      />
      <MinorInputRow
        people={people}
        onAddMinor={onAddMinor}
        onSubtractMinor={onSubtractMinor}
      />
    </ConfirmationCard>
  );
};

export default PeopleInput;
