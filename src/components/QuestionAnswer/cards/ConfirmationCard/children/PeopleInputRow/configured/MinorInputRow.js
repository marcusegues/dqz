import React from 'react';
import { View, Text } from 'react-native';
import { translate } from 'react-i18next';
import { PeopleInputRow } from '../PeopleInputRow';
import * as fromModelApi from '../../../../../../../model/configurationApi';
import { moderateScale } from '../../../../../../../styles/Scaling';

export const ownStyles = {
  categoryTitleText: {
    fontFamily: 'roboto_medium',
    fontSize: moderateScale(13),
    color: '#24253D',
  },
  categoryAgeText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(11),
    color: '#898989',
  },
};

const kids = require('../../../../../../../../assets/icons/kids.png');

const MinorInputRow = ({ onAddMinor, onSubtractMinor, people, t }) => (
  <PeopleInputRow
    onAdd={onAddMinor}
    onSubtract={onSubtractMinor}
    people={people}
    icon={kids}
    displayedQuantity={fromModelApi.getMinorPeople(people)}
  >
    {{
      textComponent: (
        <View>
          <Text style={ownStyles.categoryTitleText}>{t('minor')}</Text>
          <Text style={ownStyles.categoryAgeText}>{t('minorInfo')}</Text>
        </View>
      ),
    }}
  </PeopleInputRow>
);

export default translate(['qaFlow'])(MinorInputRow);
