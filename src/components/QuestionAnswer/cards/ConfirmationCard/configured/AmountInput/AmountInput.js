import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { v4 } from 'uuid';
import { moderateScale } from '../../../../../../styles/Scaling';
import * as colors from '../../../../../../styles/colors';
import { flatAmounts } from '../../../../../../model/utils';

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

const AmountInput = ({ onShowAmountInputModal, amounts }) => (
  <View
    style={{
      flex: 1,
      height: '100%',
      width: '100%',
      flexDirection: 'column',
    }}
  >
    <ScrollView contentContainerStyle={ownStyles.scrollView}>
      <View>
        {flatAmounts(amounts).map(a => (
          <Text key={v4()}>{`${a.currency}: ${a.amount}`}</Text>
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
