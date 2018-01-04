// @flow
import React from 'react';
// $FlowFixMe
import { View, ScrollView, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { moderateScale } from '../../../../../../styles/Scaling';
import * as colors from '../../../../../../styles/colors';
import { flatAmounts } from '../../../../../../model/utils';
import AmountsRow from './subcomponents/AmountRow';
import type { Amounts } from '../../../../../../model/types/basketPeopleAmountsTypes';

const ownStyles = {
  mainContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  subcomponentsContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#E0E0E1',
  },
  scrollView: {
    width: '100%',
    borderColor: '#E0E0E1',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  cardMainTitle: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(24),
    color: '#141414',
    padding: 15,
  },
};

type AmountInputProps = {
  onShowAmountInputModal: () => void,
  amounts: Amounts,
  onDeleteAmount: string => void,
};

const AmountInput = ({
  onShowAmountInputModal,
  amounts,
  onDeleteAmount,
}: AmountInputProps) => (
  <View
    style={{
      flexDirection: 'row',
      alignSelf: 'flex-start',
      marginLeft: 12,
      marginTop: 12,
    }}
  >
    <ScrollView contentContainerStyle={ownStyles.scrollView}>
      <View>
        {flatAmounts(amounts).map(a => (
          <AmountsRow
            key={a.id}
            amount={a.amount}
            currency={a.currency}
            id={a.id}
            onDelete={() => onDeleteAmount(a.id)}
          />
        ))}
      </View>
      <TouchableOpacity onPress={() => onShowAmountInputModal()}>
        <Entypo
          name="circle-with-plus"
          size={moderateScale(28)}
          color={colors.MAIN_RED}
        />
      </TouchableOpacity>
    </ScrollView>
  </View>
);

export default AmountInput;
