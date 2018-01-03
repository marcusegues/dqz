// @flow
import React from 'react';
import { translate } from 'react-i18next';
import ScrollViewCard from './subComponents/ScrollViewCard';
import InformationRow from './subComponents/InformationRow';
import { informationData } from './InformationData';

// type InformationScreenProps = {
//   t: (field: string, params?: {}) => void,
//   navigation: any,
// };

// const Information = ({ navigation, t }: InformationScreenProps) => (
const Information = () => (
  <ScrollViewCard>
    {informationData.map(i => (
      <InformationRow
        key={i.number}
        number={i.number}
        mainText={i.mainText}
        subText={i.subText}
        rowOnPress={() => {}}
      />
    ))}
  </ScrollViewCard>
);

export default translate(['onBoarding'])(Information);
