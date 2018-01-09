// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
// $FlowFixMe
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CardRowText } from '../../../QuestionAnswer/cards/subcomponents/CardRowText';
import { moderateScale } from '../../../../styles/Scaling';
import { GREY } from '../../../../styles/colors';
import { CategoriesInfo } from '../../../../model/constants';
import { Row } from '../../../Rows/Row';
import type { Category } from '../../../../model/types/basketPeopleAmountsTypes';

type QuantityRowProps = {
  quantity: number,
  onDelete: () => void,
  category: Category,
  borderTop?: boolean,
};

export const QuantityRow = ({
  quantity,
  onDelete,
  category,
  borderTop,
}: QuantityRowProps) => (
  <Row borderTop={borderTop}>
    <View style={{ flex: 1 }}>
      <CardRowText
        text={`${quantity} ${CategoriesInfo.getIn([category, 'unit'], '')}`}
      />
    </View>
    <Touchable onPress={onDelete}>
      <MaterialIcons name="cancel" size={moderateScale(28)} color={GREY} />
    </Touchable>
  </Row>
);

QuantityRow.defaultProps = {
  borderTop: false,
};
