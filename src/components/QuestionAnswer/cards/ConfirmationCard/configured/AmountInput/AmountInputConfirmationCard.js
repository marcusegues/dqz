// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { translate } from 'react-i18next';
import { AmountInput } from './AmountInput';
import type { Amounts } from '../../../../../../model/types/basketPeopleAmountsTypes';
import { INDIVIDUALALLOWANCE } from '../../../../../../model/constants';
import { Card } from '../../../Card';
import { CardHeader } from '../../../subcomponents/CardHeader';
import { CardHeaderSubText } from '../../../subcomponents/CardHeaderSubText';
import { scale, verticalScale } from '../../../../../../styles/Scaling';
import type { TFunction } from '../../../../../../types/generalTypes';
import { CardRowText } from '../../../subcomponents/CardRowText';
import { BlueInfoIcon } from '../../../../../Headers/subcomponents/BlueInfoIcon';
import { QuantityIcon } from '../../../../../General Components/QuantityIcon';

const ownStyles = {
  cardHeaderContainer: {
    width: '100%',
    paddingRight: scale(35),
  },
  infoIcon: {
    position: 'absolute',
    top: verticalScale(16),
    right: scale(16),
  },
  currentTotalValue: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  currentTotalValueText: {
    alignSelf: 'flex-start',
    marginLeft: scale(16),
    marginRight: scale(10),
  },
  amountInputMoreThan300Text: {
    alignSelf: 'flex-start',
    // borderBottomWidth: 1,
    // borderBottomColor: 'black',
    marginBottom: verticalScale(16),
  },
  amountInputContainer: {
    justifyContent: 'center',
  },
};

type AmountInputConfirmationCardProps = {
  onShowAmountInputModal: () => void,
  amounts: Amounts,
  onDeleteAmount: string => void,
  large: boolean,
};

const AmountInputConfirmationCardInner = ({
  onShowAmountInputModal,
  amounts,
  t,
  large,
  onDeleteAmount,
}: AmountInputConfirmationCardProps & { t: TFunction }) => {
  let title: string = t('amountInput');
  if (large) {
    title = t('amountInputLargeItem', {
      value: INDIVIDUALALLOWANCE,
    });
  }

  return (
    <Card>
      <View style={ownStyles.cardHeaderContainer}>
        <CardHeader text={title} />
      </View>
      <View style={ownStyles.infoIcon}>
        <BlueInfoIcon />
      </View>

      <View style={ownStyles.currentTotalValue}>
        <CardRowText
          text={t('currentTotalValue')}
          style={ownStyles.currentTotalValueText}
        />

        <QuantityIcon unit="CHF" quantity={22} />
      </View>

      <CardHeaderSubText
        text={large ? t('amountInputMoreThan300Text') : ''}
        style={ownStyles.amountInputMoreThan300Text}
      />
      <View style={ownStyles.amountInputContainer}>
        <AmountInput
          onShowAmountInputModal={onShowAmountInputModal}
          amounts={amounts}
          large={large}
          onDeleteAmount={onDeleteAmount}
        />
      </View>
    </Card>
  );
};

export const AmountInputConfirmationCard = (translate(['amountInput'])(
  AmountInputConfirmationCardInner
): ComponentType<AmountInputConfirmationCardProps>);
