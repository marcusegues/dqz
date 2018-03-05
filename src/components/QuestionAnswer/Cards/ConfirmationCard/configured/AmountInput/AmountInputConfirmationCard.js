// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { connect } from 'react-redux';
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
import {
  totalLargeAmounts,
  totalNormalAmounts,
} from '../../../../../../model/utils';
import type { CurrencyObject } from '../../../../../../model/currencies';
import { getCurrencies } from '../../../../../../reducers/selectors';

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
};

type ReduxInject = {
  currencies: CurrencyObject,
};

const AmountInputConfirmationCardInner = ({
  onShowAmountInputModal,
  amounts,
  t,
  large,
  onAnswer,
  onDeleteAmount,
  currencies,
}: AmountInputConfirmationCardProps & ReduxInject & { t: TFunction }) => {
  let title: string = t('amountInput');
  if (large) {
    title = t('amountInputLargeItem', {
      value: INDIVIDUALALLOWANCE,
    });
  }

  const totalAmount = large
    ? totalLargeAmounts(amounts, currencies)
    : totalNormalAmounts(amounts, currencies);

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
            <AmountIcon amount={totalAmount} currency="CHF" />
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

const mapStateToProps = state => ({
  currencies: getCurrencies(state),
});

export const AmountInputConfirmationCard = (connect(mapStateToProps, null)(
  translate(['amountInput'])(AmountInputConfirmationCardInner)
): ComponentType<AmountInputConfirmationCardProps>);
