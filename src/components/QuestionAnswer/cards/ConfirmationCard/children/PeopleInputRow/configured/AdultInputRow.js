import React from 'react';
import { View, Text } from 'react-native';
import { translate } from 'react-i18next';
import PeopleInputRow from '../PeopleInputRow';
import * as fromModelApi from '../../../../../../../model/configurationApi';

import { ownStyles } from './MinorInputRow';

const kids = require('../../../../../../../../assets/icons/adult.png');

const AdultInputRow = ({ onAddAdult, onSubtractAdult, people, t }) => (
  <PeopleInputRow
    onAdd={onAddAdult}
    onSubtract={onSubtractAdult}
    people={people}
    icon={kids}
    displayedQuantity={fromModelApi.getAdultPeople(people)}
  >
    {{
      textComponent: (
        <View>
          <Text style={ownStyles.categoryTitleText}>{t('adult')}</Text>
          <Text style={ownStyles.categoryAgeText}>{t('adultInfo')}</Text>
        </View>
      ),
    }}
  </PeopleInputRow>
);

export default translate(['qaFlow'])(AdultInputRow);
