// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View, Text } from 'react-native';
import { translate } from 'react-i18next';
import {
  getAdultPeople,
  getMinorPeople,
} from '../../../../../model/configurationApi';
import type { People } from '../../../../../model/types/basketPeopleAmountsTypes';
import type { TFunction } from '../../../../../types/generalTypes';

type PeopleInfoProps = {
  people: People,
};

const PeopleInfoInner = ({ people, t }: PeopleInfoProps & { t: TFunction }) => {
  const adults = getAdultPeople(people);
  const minors = getMinorPeople(people);
  return (
    <View>
      {adults ? (
        <Text>{t('adultCount', { value: adults, count: adults })}</Text>
      ) : null}
      {minors ? (
        <Text>{t('minorCount', { value: minors, count: minors })}</Text>
      ) : null}
    </View>
  );
};

export const PeopleInfo = (translate(['qaFlow'])(
  PeopleInfoInner
): ComponentType<PeopleInfoProps>);
