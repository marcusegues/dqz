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
import { verticalScale } from '../../../../../../styles/Scaling';
import type { TFunction } from '../../../../../../types/generalTypes';

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
      <CardHeader text={title} />
      <CardHeaderSubText
        text={large ? t('amountInputMoreThan300Text') : ''}
        style={{
          alignSelf: 'flex-start',
          borderBottomWidth: 1,
          borderBottomColor: 'black',
          marginBottom: verticalScale(16),
        }}
      />
      <View style={{ justifyContent: 'center' }}>
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
