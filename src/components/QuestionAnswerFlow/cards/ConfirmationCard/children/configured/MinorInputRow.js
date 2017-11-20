import React from 'react';
import { View, Text } from 'react-native';
import PeopleInputRow from '../PeopleInputRow';
import * as fromModelApi from '../../../../../../model/configurationApi';

const MinorInputRow = ({ onAddMinor, onSubtractMinor, people }) => (
  <PeopleInputRow
    onAdd={onAddMinor}
    onSubtract={onSubtractMinor}
    people={people}
    icon={`human-child`}
    displayedQuantity={fromModelApi.getMinorPeople(people)}
  >
    {{
      textComponent: (
        <View>
          <Text>{`Kinder & Jugendliche`}</Text>
          <Text>{`unter 17 Jahre`}</Text>
        </View>
      ),
    }}
  </PeopleInputRow>
);

export default MinorInputRow;
