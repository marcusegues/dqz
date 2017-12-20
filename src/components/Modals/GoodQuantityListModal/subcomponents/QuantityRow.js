import React from 'react';
import Touchable from 'react-native-platform-touchable';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CardRowText from '../../../QuestionAnswer/cards/subcomponents/CardRowText';
import { moderateScale } from '../../../../styles/Scaling';
import { GREY } from '../../../../styles/colors';
import { CategoriesInfo } from '../../../../model/constants';
import Row from '../../../Rows/Row';

const QuantityRow = ({ quantity, onDelete, category, borderTop = false }) => (
  <Row borderTop={borderTop}>
    <View style={{ flex: 1 }}>
      <CardRowText
        text={`${quantity} ${CategoriesInfo.get(category).get('unit')}`}
      />
    </View>
    <Touchable onPress={onDelete}>
      <MaterialIcons name="cancel" size={moderateScale(28)} color={GREY} />
    </Touchable>
  </Row>
);

export default QuantityRow;
