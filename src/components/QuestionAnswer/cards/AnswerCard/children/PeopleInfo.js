import React from 'react';
import { View, Text } from 'react-native';
import { translate } from 'react-i18next';
import {
  getAdultPeople,
  getMinorPeople,
} from '../../../../../model/configurationApi';

const PeopleInfo = ({ people, t }) => {
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

export default translate(['qaFlow'])(PeopleInfo);
