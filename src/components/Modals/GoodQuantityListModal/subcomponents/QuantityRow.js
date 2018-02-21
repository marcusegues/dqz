// @flow
import React from 'react';
// $FlowFixMe
import Touchable from 'react-native-platform-touchable';
// $FlowFixMe
import { View } from 'react-native';
import { translate } from 'react-i18next';
import type { ComponentType } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { CardRowText } from '../../../QuestionAnswer/Cards/subcomponents/CardRowText';
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
  t,
  quantity,
  onDelete,
  category,
  borderTop = false,
}: QuantityRowInnerProps & { t: TFunction }) => (
  <Row borderTop={borderTop}>
    <View style={rowStyles.rowContent}>
      <View style={{ flex: 1 }}>
        <CardRowText
          text={`${quantity.toFixed(2)} ${t(
            `units:${CategoriesInfo.getIn([category, 'unit'], '')}`,
            { count: quantity }
          )}`}
        />
      </View>
      <Touchable onPress={onDelete}>
        <MaterialIcons name="cancel" size={moderateScale(28)} color={GREY} />
      </Touchable>
    </View>
  </Row>
);

export const QuantityRow = (translate(['units'])(
  QuantityRowInner
): ComponentType<QuantityRowInnerProps>);
