// @flow
import React from 'react';
import type { ComponentType } from 'react';
// $FlowFixMe
import { View } from 'react-native';
import { translate } from 'react-i18next';
import {
  getAdultPeople,
  getMinorPeople,
} from '../../../../../model/configurationApi';
import type { People } from '../../../../../model/types/basketPeopleAmountsTypes';
import type { TFunction } from '../../../../../types/generalTypes';
import { CollapsedCardText } from '../../subcomponents/CollapsedCardText';

type PeopleInfoProps = {
  people: People,
};

const PeopleInfoInner = ({ people, t }: PeopleInfoProps & { t: TFunction }) => {
  const adults = getAdultPeople(people);
  const minors = getMinorPeople(people);
  return (
    <View>
      {adults ? (
        <CollapsedCardText
          text={t('adultCount', { value: adults, count: adults })}
        />
      ) : null}
      {minors ? (
        <CollapsedCardText
          text={t('minorCount', { value: minors, count: minors })}
        />
      ) : null}
    </View>
  );
};

export const PeopleInfo = (translate(['qaFlow'])(
  PeopleInfoInner
): ComponentType<PeopleInfoProps>);
