// @flow
import React from 'react';
// $FlowFixMe
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { translate } from 'react-i18next';
import Entypo from '@expo/vector-icons/Entypo';
import { moderateScale, verticalScale } from '../../../../../../styles/Scaling';
import {
  flatLargeAmounts,
  flatNormalAmounts,
} from '../../../../../../model/utils';
import AmountsRow from './subcomponents/AmountRow';
import type { Amounts } from '../../../../../../model/types/basketPeopleAmountsTypes';
import { MAIN_RED, GREY } from '../../../../../../styles/colors';
import RedButton from '../../../../../Buttons/RedButton';

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
    padding: 15,
  },
  addButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  addButtonText: {
    fontSize: moderateScale(14),
    color: MAIN_RED,
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
};

type AmountInputProps = {
  onShowAmountInputModal: () => void,
  amounts: Amounts,
  onDeleteAmount: string => void,
  large: boolean,
  t: any, // TODO
};

const AmountInput = ({
  onShowAmountInputModal,
  amounts,
  onDeleteAmount,
  large,
  t,
}: AmountInputProps) => (
  <View style={ownStyles.mainContainer}>
    <ScrollView contentContainerStyle={ownStyles.scrollView}>
      <View style={ownStyles.addedItemContainer}>
        {(large ? flatLargeAmounts(amounts) : flatNormalAmounts(amounts)).map(
          a => (
            <AmountsRow
              key={a.id}
              amount={a.amount}
              currency={a.currency}
              id={a.id}
              onDelete={() => onDeleteAmount(a.id)}
            />
          )
        )}
      </View>
      <View style={ownStyles.addButtonContainer}>
        <TouchableOpacity onPress={() => onShowAmountInputModal()}>
          <Entypo
            name="circle-with-plus"
            size={moderateScale(36)}
            color={MAIN_RED}
          />
        </TouchableOpacity>

        <Text style={ownStyles.addButtonText}>
          {t('amountInputAddItem').toUpperCase()}
        </Text>
      </View>
      <View style={ownStyles.redButtonContainerWrapper}>
        <View style={ownStyles.redButtonWrapper}>
          <RedButton
            onPress={() => {}}
            text={t('amountInputButtonBack')}
            buttonStyle={{ backgroundColor: GREY }}
          />
        </View>
        <View style={ownStyles.redButtonWrapper}>
          <RedButton text={t('amountInputButtonContinue')} />
        </View>
      </View>
    </ScrollView>
  </View>
);

export default translate(['amountInput'])(AmountInput);