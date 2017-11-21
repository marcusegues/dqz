import React from 'react';
import { View, Text } from 'react-native';
import PeopleInputRow from '../PeopleInputRow';
import * as fromModelApi from '../../../../../../model/configurationApi';

const AdultInputRow = ({ onAddAdult, onSubtractAdult, people }) => (
  <PeopleInputRow
    onAdd={onAddAdult}
    onSubtract={onSubtractAdult}
    people={people}
    icon={`human-male-female`}
    displayedQuantity={fromModelApi.getAdultPeople(people)}
  >
    {{
      textComponent: (
        <View>
          <Text>{`Erwachsene`}</Text>
          <Text>{`17+ Jahre`}</Text>
        </View>
      ),
    }}
  </PeopleInputRow>
);

export default AdultInputRow;
