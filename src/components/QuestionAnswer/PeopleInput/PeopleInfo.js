import React from 'react';
import { View, Text } from 'react-native';
import {
  getAdultPeople,
  getMinorPeople,
} from '../../../model/configurationApi';

const PeopleInfo = ({ people }) => {
  const adults = getAdultPeople(people);
  const minors = getMinorPeople(people);
  return (
    <View>
      {adults ? <Text>{`${adults} Erwachsene`}</Text> : null}
      {minors ? <Text>{`${minors} Kinder (unter 17 Jahre)`}</Text> : null}
    </View>
  );
};

export default PeopleInfo;
