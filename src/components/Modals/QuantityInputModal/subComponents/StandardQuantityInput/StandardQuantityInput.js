// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View } from 'react-native';
// $FlowFixMe
import { translate } from 'react-i18next';
import { moderateScale, verticalScale } from '../../../../../styles/Scaling';
import { CardHeaderText } from '../../../../QuestionAnswer/Cards/subcomponents/CardHeaderText';
import { CardHeaderSubText } from '../../../../QuestionAnswer/Cards/subcomponents/CardHeaderSubText';

import type { Category } from '../../../../../model/types/basketPeopleAmountsTypes';
import type { Children, TFunction } from '../../../../../types/generalTypes';

type StandardQuantityInputProps = {
  category: Category,
  children: Children,
};

const StandardQuantityInputInner = ({
  category,
  children,
  t,
}: StandardQuantityInputProps & { t: TFunction }) => (
  <View>
    <View
      style={{
        marginTop: verticalScale(16),
        marginLeft: moderateScale(16),
      }}
    >
      <CardHeaderText text={t('quantityInput:enterQuantity')} />
    </View>
    <CardHeaderSubText
      text={t('quantityInput:standardInputSubText', {
        category: t(`mainCategories:${category}`),
      })}
    />
    {children}
  </View>
);

export const StandardQuantityInput = (translate([
  'quantityInput, mainCategories',
])(StandardQuantityInputInner): ComponentType<StandardQuantityInputProps>);
