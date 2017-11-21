import React from 'react';
import { View, Text } from 'react-native';
import PeopleInputRow from '../PeopleInputRow';
import * as fromModelApi from '../../../../../../model/configurationApi';
import { moderateScale } from '../../../../../../styles/Scaling';

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
          <Text
            style={{
              fontFamily: 'roboto_medium',
              fontSize: moderateScale(14),
              color: '#24253D',
            }}
          >{`Kinder & Jugendliche`}</Text>
          <Text
            style={{
              fontFamily: 'roboto_regular',
              fontSize: moderateScale(12),
              color: '#898989',
            }}
          >{`unter 17 Jahre`}</Text>
        </View>
      ),
    }}
  </PeopleInputRow>
);

export default MinorInputRow;
