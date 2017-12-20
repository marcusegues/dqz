import React from 'react';
import Touchable from 'react-native-platform-touchable';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CardRowText from '../../../QuestionAnswer/cards/subcomponents/CardRowText';
import { moderateScale } from '../../../../styles/Scaling';
import { GREY } from '../../../../styles/colors';
import { CategoriesInfo } from '../../../../model/constants';

const quantityRowContainerStyles = borderTop => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  borderBottomWidth: 1,
  borderColor: '#E0E0E1',
  paddingVertical: 15,
  paddingHorizontal: 12,
  marginHorizontal: 4,
  borderTopWidth: borderTop ? 1 : 0,
});

const QuantityRow = ({ quantity, onDelete, category, borderTop = false }) => (
  <View style={quantityRowContainerStyles(borderTop)}>
    <View style={{ flex: 1 }}>
      <CardRowText
        text={`${quantity} ${CategoriesInfo.get(category).get('unit')}`}
      />
    </View>
    <Touchable onPress={onDelete}>
      <MaterialIcons name="cancel" size={moderateScale(28)} color={GREY} />
    </Touchable>
  </View>
);

export default QuantityRow;
