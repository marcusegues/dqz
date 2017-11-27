import React from 'react';
import { Text } from 'react-native';
import ConfirmationCard from '../ConfirmationCard';
import AdultInputRow from '../children/PeopleInputRow/configured/AdultInputRow';
import MinorInputRow from '../children/PeopleInputRow/configured/MinorInputRow';

const MainCategoriesInput = ({
  mainCategories,
  onAddMainCategory,
  onRemoveMainCategory,
  onAnswerConfirm,
  text,
}) => {
  return (
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
};

export default MainCategoriesInput;
