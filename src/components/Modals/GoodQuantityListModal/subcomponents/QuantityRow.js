// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
// $FlowFixMe
import { View } from 'react-native';
import { translate } from 'react-i18next';
import type { ComponentType } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { CardRowText } from '../../../QuestionAnswer/cards/subcomponents/CardRowText';
import { moderateScale } from '../../../../styles/Scaling';
import { GREY } from '../../../../styles/colors';
import { CategoriesInfo } from '../../../../model/constants';
import { Row } from '../../../Rows/Row';
import type { Category } from '../../../../model/types/basketPeopleAmountsTypes';
import { rowStyles } from '../../../Rows/styles/rowStyles';
import type { TFunction } from '../../../../types/generalTypes';

type QuantityRowInnerProps = {
  quantity: number,
  onDelete: () => void,
  category: Category,
  borderTop?: boolean,
};

const QuantityRowInner = ({
  quantity,
  onDelete,
  category,
  borderTop,
  t,
}: QuantityRowInnerProps & { t: TFunction, borderTop: false }) => (
  <Row borderTop={borderTop}>
    <View style={rowStyles.rowContent}>
      <View style={{ flex: 1 }}>
        <CardRowText
          text={`${quantity} ${CategoriesInfo.getIn([category, 'unit'], '')}`}
        />
      </View>
      <Touchable onPress={onDelete}>
        <MaterialIcons name="cancel" size={moderateScale(28)} color={GREY} />
      </Touchable>
    </View>
  </Row>
);

export const QuantityRow = (translate(['quantityInput'])(
  QuantityRowInner
): ComponentType<QuantityRowInnerProps>);
