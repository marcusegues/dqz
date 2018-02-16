// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View, Text } from 'react-native';
import { translate } from 'react-i18next';
import { PeopleInputRow } from '../PeopleInputRow';
import * as fromModelApi from '../../../../../../../model/configurationApi';
import { moderateScale } from '../../../../../../../styles/Scaling';
import type { People } from '../../../../../../../model/types/basketPeopleAmountsTypes';
import type { TFunction } from '../../../../../../../types/generalTypes';

export const ownStyles = {
  categoryTitleText: {
    fontFamily: 'roboto_medium',
    fontSize: moderateScale(13),
    color: '#24253D',
  },
  categoryAgeText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(11),
    color: '#898989',
  },
};

const kids = require('../../../../../../../../assets/icons/kids.png');

type MinorInputRowProps = {
  onAddMinor: () => void,
  onSubtractMinor: () => void,
  people: People,
};

const MinorInputRowInner = ({
  onAddMinor,
  onSubtractMinor,
  people,
  t,
}: MinorInputRowProps & { t: TFunction }) => (
  <PeopleInputRow
    onAdd={onAddMinor}
    onSubtract={onSubtractMinor}
    people={people}
    icon={kids}
    displayedQuantity={fromModelApi.getMinorPeople(people)}
  >
    <View>
      <Text style={ownStyles.categoryTitleText}>{t('minor')}</Text>
      <Text style={ownStyles.categoryAgeText}>{t('minorInfo')}</Text>
    </View>
  </PeopleInputRow>
);

export const MinorInputRow = (translate(['qaFlow'])(
  MinorInputRowInner
): ComponentType<MinorInputRowProps>);
