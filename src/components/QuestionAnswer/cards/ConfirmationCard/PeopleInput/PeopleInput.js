import React from 'react';
import ConfirmationCard from '../ConfirmationCard';
import AdultInputRow from '../children/PeopleInputRow/configured/AdultInputRow';
import MinorInputRow from '../children/PeopleInputRow/configured/MinorInputRow';

const PeopleInput = ({
  people,
  onAddAdult,
  onSubtractAdult,
  onAddMinor,
  onSubtractMinor,
  onAnswerConfirm,
  text,
}) => (
  <ConfirmationCard text={text} onAnswerConfirm={onAnswerConfirm}>
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

export default PeopleInput;
