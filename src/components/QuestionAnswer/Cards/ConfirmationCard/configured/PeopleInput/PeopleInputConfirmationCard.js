// @flow
import React from 'react';
import { connect } from 'react-redux';
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
  onConfirmationCardTitlePress: () => void,
};

type ReduxInject = {
  dispatch: Function,
};

const PeopleInputConfirmationCardInner = ({
  people,
  onAddAdult,
  onSubtractAdult,
  onAddMinor,
  onSubtractMinor,
  onAnswer,
  onConfirmationCardTitlePress,
  t,
  dispatch,
}: PeopleInputConfirmationCardProps & ReduxInject & { t: TFunction }) => (
  <ConfirmationCard
    text={t('peopleInputQuestion')}
    onAnswer={() => onAnswer('forward')}
    onBack={() => onAnswer('back')}
    confirmationDisabled={!getTotalPeople(people)}
    onConfirmationCardTitlePress={onConfirmationCardTitlePress}
    onInfoIconPress={() =>
      dispatch({
        type: 'NAVIGATE',
        screen: 'InformationSubCategories',
        params: { infoCategory: 'declaration' },
      })
    }
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

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export const PeopleInputConfirmationCard = (connect(null, mapDispatchToProps)(
  translate(['peopleInput'])(PeopleInputConfirmationCardInner)
): ComponentType<PeopleInputConfirmationCardProps>);
