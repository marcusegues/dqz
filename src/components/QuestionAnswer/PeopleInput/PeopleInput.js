import React from 'react';
import ConfirmationCard from '../cards/ConfirmationCard/ConfirmationCard';
import AdultInputRow from '../cards/ConfirmationCard/children/PeopleInputRow/configured/AdultInputRow';
import MinorInputRow from '../cards/ConfirmationCard/children/PeopleInputRow/configured/MinorInputRow';

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
