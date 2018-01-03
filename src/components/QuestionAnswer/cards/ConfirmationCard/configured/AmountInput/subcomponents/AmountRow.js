import React from 'react';
import Touchable from 'react-native-platform-touchable';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Row from '../../../../../../Rows/Row';
import CardRowText from '../../../../subcomponents/CardRowText';
import { moderateScale } from '../../../../../../../styles/Scaling';
import { GREY } from '../../../../../../../styles/colors';

const AmountsRow = ({ amount, onDelete, currency, borderTop = false }) => (
  <Row borderTop={borderTop}>
    <View style={{ flex: 1 }}>
      <CardRowText text={`${currency} ${amount}`} />
    </View>
    <Touchable onPress={onDelete}>
      <MaterialIcons name="cancel" size={moderateScale(28)} color={GREY} />
    </Touchable>
  </Row>
);

export default AmountsRow;
