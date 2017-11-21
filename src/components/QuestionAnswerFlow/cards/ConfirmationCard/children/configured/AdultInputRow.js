import React from 'react';
import { View, Text } from 'react-native';
import PeopleInputRow from '../PeopleInputRow';
import * as fromModelApi from '../../../../../../model/configurationApi';
import { moderateScale } from '../../../../../../styles/Scaling';

const AdultInputRow = ({ onAddAdult, onSubtractAdult, people }) => (
  <PeopleInputRow
    onAdd={onAddAdult}
    onSubtract={onSubtractAdult}
    people={people}
    icon={`human-male`}
    displayedQuantity={fromModelApi.getAdultPeople(people)}
  >
    {{
      textComponent: (
        <View>
          <Text
            style={{
              fontFamily: 'roboto_medium',
              fontSize: moderateScale(14),
              color: '#24253D',
            }}
          >{`Erwachsene`}</Text>
          <Text
            style={{
              fontFamily: 'roboto_regular',
              fontSize: moderateScale(12),
              color: '#898989',
            }}
          >{`17+ Jahre`}</Text>
        </View>
      ),
    }}
  </PeopleInputRow>
);

export default AdultInputRow;
