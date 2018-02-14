// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { translate } from 'react-i18next';
import Entypo from '@expo/vector-icons/Entypo';

import {
  flatLargeAmounts,
  flatNormalAmounts,
} from '../../../../../../model/utils';
import { AmountRow } from './subcomponents/AmountRow';
import type { Amounts } from '../../../../../../model/types/basketPeopleAmountsTypes';
import { MAIN_RED } from '../../../../../../styles/colors';
import type { TFunction } from '../../../../../../types/generalTypes';
import { CardHeaderSubText } from '../../../subcomponents/CardHeaderSubText';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../../../../../../styles/Scaling';

const ownStyles = {
  mainContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  subcomponentsContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#E0E0E1',
  },
  scrollView: {
    width: '100%',
    borderColor: '#E0E0E1',
    backgroundColor: '#fff',
  },
  cardMainTitle: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(24),
    color: '#141414',
    padding: scale(15),
  },
  enterValueContainer: {
    alignSelf: 'flex-start',
    paddingTop: verticalScale(16),
    paddingBottom: verticalScale(35),
  },
  addButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginHorizontal: scale(10),
    marginBottom: 0,
  },
  addButtonText: {
    fontSize: moderateScale(14),
    color: MAIN_RED,
    fontFamily: 'roboto_medium',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(30),
  },
  addedItemContainer: {
    flex: 1,
    width: '100%',
  },
  redButtonContainerWrapper: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginBottom: verticalScale(16),
  },
  redButtonWrapper: {
    flex: 0.47,
  },
  lastExchangeRate: {
    paddingBottom: verticalScale(16),
  },
  redPlusIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(5),
    marginBottom: verticalScale(30),
  },
};

type AmountInputProps = {
  onShowAmountInputModal: () => void,
  amounts: Amounts,
  onDeleteAmount: string => void,
  large: boolean,
};

const AmountInputInner = ({
  onShowAmountInputModal,
  amounts,
  onDeleteAmount,
  large,
  t,
}: AmountInputProps & { t: TFunction }) => {
  const relevantAmounts = large
    ? flatLargeAmounts(amounts)
    : flatNormalAmounts(amounts);
  return (
    <View style={ownStyles.mainContainer}>
      <ScrollView contentContainerStyle={ownStyles.scrollView}>
        {relevantAmounts.length ? (
          <CardHeaderSubText
            text={large ? '' : t('lastExchangeRate')}
            style={ownStyles.lastExchangeRate}
          />
        ) : (
          <View style={ownStyles.addButtonContainer}>
            <CardHeaderSubText
              text={
                large
                  ? t('amountInputLargeItemGreyBox')
                  : t('amountInputEnterValue')
              }
              style={ownStyles.enterValueContainer}
            />

            <TouchableOpacity onPress={() => onShowAmountInputModal()}>
              <Entypo
                name="circle-with-plus"
                size={moderateScale(46)}
                color={MAIN_RED}
              />
            </TouchableOpacity>

            <Text style={ownStyles.addButtonText}>
              {large
                ? t('amountInputAddItemLarge').toUpperCase()
                : t('amountInputAddItem').toUpperCase()}
            </Text>
          </View>
        )}
        <View style={ownStyles.addedItemContainer}>
          {relevantAmounts.map((a, idx) => (
            <AmountRow
              borderTop={idx === 0}
              key={a.id}
              amount={a.amount}
              currency={a.currency}
              id={a.id}
              onDelete={() => onDeleteAmount(a.id)}
            />
          ))}
        </View>
        {relevantAmounts.length ? (
          <View style={ownStyles.redPlusIconContainer}>
            <TouchableOpacity onPress={() => onShowAmountInputModal()}>
              <Entypo
                name="circle-with-plus"
                size={moderateScale(46)}
                color={MAIN_RED}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <Text />
        )}
      </ScrollView>
    </View>
  );
};

export const AmountInput = (translate(['amountInput'])(
  AmountInputInner
): ComponentType<AmountInputProps>);
