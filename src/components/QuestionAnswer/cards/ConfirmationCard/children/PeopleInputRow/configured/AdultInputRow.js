// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View, Text } from 'react-native';
import { translate } from 'react-i18next';
import { PeopleInputRow } from '../PeopleInputRow';
import * as fromModelApi from '../../../../../../../model/configurationApi';

import { ownStyles } from './MinorInputRow';
import type { People } from '../../../../../../../model/types/basketPeopleAmountsTypes';
import type { TFunction } from '../../../../../../../types/generalTypes';

const adults = require('../../../../../../../../assets/icons/adult.png');

type AdultInputRowProps = {
  onAddAdult: () => void,
  onSubtractAdult: () => void,
  people: People,
};

const AdultInputRowInner = ({
  onAddAdult,
  onSubtractAdult,
  people,
  t,
}: AdultInputRowProps & { t: TFunction }) => (
  <PeopleInputRow
    onAdd={onAddAdult}
    onSubtract={onSubtractAdult}
    people={people}
    icon={adults}
    displayedQuantity={fromModelApi.getAdultPeople(people)}
  >
    <View>
      <Text style={ownStyles.categoryTitleText}>{t('adult')}</Text>
      <Text style={ownStyles.categoryAgeText}>{t('adultInfo')}</Text>
    </View>
  </PeopleInputRow>
);

export const AdultInputRow = (translate(['qaFlow'])(
  AdultInputRowInner
): ComponentType<AdultInputRowProps>);
