import React from 'react';
import ConfirmationCard from '../cards/ConfirmationCard/ConfirmationCard';
import AdultInputRow from '../cards/ConfirmationCard/children/PeopleInputRow/configured/AdultInputRow';
import MinorInputRow from '../cards/ConfirmationCard/children/PeopleInputRow/configured/MinorInputRow';
import { getTotalPeople } from '../../../model/configurationApi';

const PeopleInput = ({
  people,
  onAddAdult,
  onSubtractAdult,
  onAddMinor,
  onSubtractMinor,
  onAnswer,
  text,
}) => (
  <ConfirmationCard
    text={text}
    onAnswer={onAnswer}
    confirmationDisabled={!getTotalPeople(people)}
  >
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