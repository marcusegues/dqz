// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { ConfirmationCard } from '../../ConfirmationCard';
import { AdultInputRow } from '../../children/PeopleInputRow/configured/AdultInputRow';
import { MinorInputRow } from '../../children/PeopleInputRow/configured/MinorInputRow';
import { getTotalPeople } from '../../../../../../model/configurationApi';
import type { TFunction } from '../../../../../../types/generalTypes';
import type { People } from '../../../../../../model/types/basketPeopleAmountsTypes';
import type { DirectionType } from '../../../../QuestionAnswerContainer';

type PeopleInputConfirmationCardProps = {
  people: People,
  onAddAdult: () => void,
  onSubtractAdult: () => void,
  onAddMinor: () => void,
  onSubtractMinor: () => void,
  onAnswer: DirectionType => void,
};

const PeopleInputConfirmationCardInner = ({
  people,
  onAddAdult,
  onSubtractAdult,
  onAddMinor,
  onSubtractMinor,
  onAnswer,
  t,
}: PeopleInputConfirmationCardProps & { t: TFunction }) => (
  <ConfirmationCard
    text={t('peopleInputQuestion')}
    onAnswer={() => onAnswer('forward')}
    onBack={() => onAnswer('back')}
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

export const PeopleInputConfirmationCard = (translate(['peopleInput'])(
  PeopleInputConfirmationCardInner
): ComponentType<PeopleInputConfirmationCardProps>);
