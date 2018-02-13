// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { Text, View } from 'react-native';
import { translate } from 'react-i18next';
import { AmountInput } from './AmountInput';
import type { Amounts } from '../../../../../../model/types/basketPeopleAmountsTypes';
import { INDIVIDUALALLOWANCE } from '../../../../../../model/constants';
import { CardHeaderSubText } from '../../../subcomponents/CardHeaderSubText';
import type { TFunction } from '../../../../../../types/generalTypes';
import { ConfirmationCard } from '../../ConfirmationCard';
import type { DirectionType } from '../../../../QuestionAnswerContainer';
import { CardRowText } from '../../../subcomponents/CardRowText';
import { scale, verticalScale } from '../../../../../../styles/Scaling';
import { AmountIcon } from '../../../../../General Components/GreyBox/configured/AmountIcon';

const ownStyles = {
  currentTotalValueContainer: {
    width: '100%',
  },
  currentTotalValue: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginTop: verticalScale(5),
  },
  currentTotalValueText: {
    alignSelf: 'flex-start',
    marginLeft: scale(16),
    marginRight: scale(10),
    marginTop: verticalScale(2),
  },
  amountInputLargeItem: {
    alignSelf: 'flex-start',
    marginVertical: verticalScale(16),
  },
  amountInputContainer: {
    justifyContent: 'center',
    width: '100%',
  },
};

type AmountInputConfirmationCardProps = {
  onShowAmountInputModal: () => void,
  amounts: Amounts,
  onDeleteAmount: string => void,
  large: boolean,
  onAnswer: DirectionType => void,
  totalAmounts: number,
};

const AmountInputConfirmationCardInner = ({
  onShowAmountInputModal,
  amounts,
  t,
  large,
  onAnswer,
  onDeleteAmount,
  totalAmounts,
}: AmountInputConfirmationCardProps & { t: TFunction }) => {
  let title: string = t('amountInput');
  if (large) {
    title = t('amountInputLargeItem', {
      value: INDIVIDUALALLOWANCE,
    });
  }

  return (
    <ConfirmationCard
      text={title}
      onAnswer={() => onAnswer('forward')}
      onBack={() => onAnswer('back')}
    >
      {large ? (
        <Text />
      ) : (
        <View style={ownStyles.currentTotalValueContainer}>
          <View style={ownStyles.currentTotalValue}>
            <CardRowText
              text={t('currentTotalValue')}
              style={ownStyles.currentTotalValueText}
            />
            <AmountIcon amount={totalAmounts} currency={'CHF'} />
          </View>

          <CardHeaderSubText
            text={large ? t('amountInputLargeItem') : ''}
            style={ownStyles.amountInputLargeItem}
          />
        </View>
      )}

      <View style={ownStyles.amountInputContainer}>
        <AmountInput
          onShowAmountInputModal={onShowAmountInputModal}
          amounts={amounts}
          large={large}
          onDeleteAmount={onDeleteAmount}
        />
      </View>
    </ConfirmationCard>
  );
};

export const AmountInputConfirmationCard = (translate(['amountInput'])(
  AmountInputConfirmationCardInner
): ComponentType<AmountInputConfirmationCardProps>);
