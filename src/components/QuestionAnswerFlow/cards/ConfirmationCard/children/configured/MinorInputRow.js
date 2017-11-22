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
            style={ownStyles.categoryTitleText}
          >{`Kinder & Jugendliche`}</Text>
          <Text style={ownStyles.categoryAgeText}>{`unter 17 Jahre`}</Text>
        </View>
      ),
    }}
  </PeopleInputRow>
);

export default MinorInputRow;

export const ownStyles = {
  categoryTitleText: {
    fontFamily: 'roboto_medium',
    fontSize: moderateScale(14),
    color: '#24253D',
  },
  categoryAgeText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(12),
    color: '#898989',
  },
};
