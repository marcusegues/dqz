import React from 'react';
import ConfirmationCard from '../../ConfirmationCard';
import AdultInputRow from '../../children/PeopleInputRow/configured/AdultInputRow';
import MinorInputRow from '../../children/PeopleInputRow/configured/MinorInputRow';
import { getTotalPeople } from '../../../../../../model/configurationApi';

const PeopleInputConfirmationCard = ({
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

export default PeopleInputConfirmationCard;
