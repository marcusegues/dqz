// @flow
import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import type { Set as ImmutableSetType } from 'immutable';
import type { ComponentType } from 'react';
import { ConfirmationCard } from '../../ConfirmationCard';
import { QuantityInput } from './QuantityInput';
import type {
  Basket,
  Category,
} from '../../../../../../model/types/basketPeopleAmountsTypes';
import type { DirectionType } from '../../../../QuestionAnswerContainer';
import type { TFunction } from '../../../../../../types/generalTypes';
import type { MainCategory } from '../../../../../../types/reducers/declaration';
import { anyQuantitiesInBasket } from '../../../../QAControl/controlQuestionFlag';

type QuantityInputConfirmationCardProps = {
  onShowQuantityInputModal: (
    modalCategory: Category,
    modalMainCategory: MainCategory
  ) => void,
  basket: Basket,
  onAnswer: DirectionType => void,
  mainCategories: ImmutableSetType<MainCategory>,
  onConfirmationCardTitlePress: () => void,
};

type ReduxInject = {
  dispatch: Function,
};

const QuantityInputConfirmationCardInner = ({
  onShowQuantityInputModal,
  basket,
  onAnswer,
  onConfirmationCardTitlePress,
  mainCategories,
  t,
  dispatch,
}: QuantityInputConfirmationCardProps & ReduxInject & { t: TFunction }) => (
  <ConfirmationCard
    text={t('quantityInput')}
    onAnswer={() => onAnswer('forward')}
    onConfirmationCardTitlePress={onConfirmationCardTitlePress}
    onBack={() => onAnswer('back')}
    confirmationDisabled={!anyQuantitiesInBasket(basket)}
    onInfoIconPress={() =>
      dispatch({ type: 'NAVIGATE', screen: 'DutyAllowance' })
    }
  >
    <QuantityInput
      onShowQuantityInputModal={onShowQuantityInputModal}
      mainCategories={mainCategories}
      basket={basket}
    />
  </ConfirmationCard>
);

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export const QuantityInputConfirmationCard = (connect(null, mapDispatchToProps)(
  translate(['quantityInput'])(QuantityInputConfirmationCardInner)
): ComponentType<QuantityInputConfirmationCardProps>);
