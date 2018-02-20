// @flow
import React from 'react';
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

type QuantityInputConfirmationCardProps = {
  onShowQuantityInputModal: (
    modalCategory: Category,
    modalMainCategory: MainCategory
  ) => void,
  basket: Basket,
  onAnswer: DirectionType => void,
  mainCategories: ImmutableSetType<MainCategory>,
};

const QuantityInputConfirmationCardInner = ({
  onShowQuantityInputModal,
  basket,
  onAnswer,
  mainCategories,
  t,
}: QuantityInputConfirmationCardProps & { t: TFunction }) => (
  <ConfirmationCard
    text={t('quantityInput')}
    onAnswer={() => onAnswer('forward')}
    onBack={() => onAnswer('back')}
  >
    <QuantityInput
      onShowQuantityInputModal={onShowQuantityInputModal}
      mainCategories={mainCategories}
      basket={basket}
    />
  </ConfirmationCard>
);

export const QuantityInputConfirmationCard = (translate(['quantityInput'])(
  QuantityInputConfirmationCardInner
): ComponentType<QuantityInputConfirmationCardProps>);
