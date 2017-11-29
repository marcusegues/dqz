import React from 'react';
import { View, Text } from 'react-native';
import PeopleInputRow from '../PeopleInputRow';
import * as fromModelApi from '../../../../../../../model/configurationApi';

import { ownStyles } from './MinorInputRow';

const AdultInputRow = ({ onAddAdult, onSubtractAdult, people }) => (
  <PeopleInputRow
    onAdd={onAddAdult}
    onSubtract={onSubtractAdult}
    people={people}
    icon="human-male"
    displayedQuantity={fromModelApi.getAdultPeople(people)}
  >
    {{
      textComponent: (
        <View>
          <Text style={ownStyles.categoryTitleText}>Erwachsene</Text>
          <Text style={ownStyles.categoryAgeText}>17+ Jahre</Text>
        </View>
      ),
    }}
  </PeopleInputRow>
);

export default AdultInputRow;
