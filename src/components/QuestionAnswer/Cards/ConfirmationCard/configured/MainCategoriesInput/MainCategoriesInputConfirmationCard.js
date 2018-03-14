// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { ConfirmationCard } from '../../ConfirmationCard';
import { MainCategoriesCheckList } from '../../children/MainCategoriesCheckList/MainCategoriesCheckList';
import type {
  MainCategories,
  MainCategory,
} from '../../../../../../types/reducers/declaration';
import type { DirectionType } from '../../../../QuestionAnswerContainer';
import type { TFunction } from '../../../../../../types/generalTypes';

type MainCategoriesInputConfirmationCardProps = {
  mainCategories: MainCategories,
  onToggleMainCategory: (mainCategory: MainCategory) => void,
  onAnswer: DirectionType => void,
};

type ReduxInject = {
  dispatch: Function,
};

const MainCategoriesInputConfirmationCardInner = ({
  mainCategories,
  onToggleMainCategory,
  onAnswer,
  t,
  dispatch,
}: MainCategoriesInputConfirmationCardProps &
  ReduxInject & { t: TFunction }) => (
  <ConfirmationCard
    text={t('mainCategoriesQuestion')}
    onAnswer={() => onAnswer('forward')}
    onBack={() => onAnswer('back')}
    confirmationDisabled={!mainCategories.size}
    onInfoIconPress={() =>
      dispatch({
        type: 'NAVIGATE',
        screen: 'InformationSubCategories',
        params: { infoCategory: 'declaration' },
      })
    }
  >
    <MainCategoriesCheckList
      mainCategories={mainCategories}
      onToggleMainCategory={onToggleMainCategory}
    />
  </ConfirmationCard>
);

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export const MainCategoriesInputConfirmationCard = (connect(
  null,
  mapDispatchToProps
)(
  translate(['mainCategoriesInput'])(MainCategoriesInputConfirmationCardInner)
): ComponentType<MainCategoriesInputConfirmationCardProps>);
