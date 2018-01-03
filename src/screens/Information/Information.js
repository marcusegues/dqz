// @flow
import React from 'react';
import { translate } from 'react-i18next';
import ScrollViewCard from './subComponents/ScrollViewCard';
import InformationRow from './subComponents/InformationRow';
import { informationData } from './InformationData';
import { Text } from 'react-native';
import { languageCodeList } from '../OnBoarding/types';

type InformationScreenProps = {
  t: (field: string, params?: {}) => void,
  navigation: any,
};
//
// let buttonText: string = '';
// if (foo) {
//   buttonText = t('abc');
// } else {
//   buttonText = t('def') + 'aelöijfadilj';
// }

class Information extends React.Component<InformationScreenProps> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { t, navigation } = this.props;
    let mainText = '';
    let subText = '';

    return (
      <ScrollViewCard>
        {informationData.map(i => {
          if (i.id === 1) {
            mainText = t('welcome');
            subText = t('welcome');
          }
          return (
            <InformationRow
              key={i.id}
              number={i.number}
              mainText={mainText}
              subText={subText}
              rowOnPress={() => {}}
            />
          );
        })}
      </ScrollViewCard>
    );
  }
}

export default translate(['onBoarding'])(Information);
