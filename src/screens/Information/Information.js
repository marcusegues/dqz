// @flow
import React from 'react';
import { translate } from 'react-i18next';
import ScrollViewCard from './subComponents/ScrollViewCard';
import InformationRow from './subComponents/InformationRow';
import { informationData } from './InformationData';

type InformationScreenProps = {
  t: (field: string, params?: {}) => string,
};

const Information = ({ t }: InformationScreenProps) => (
  <ScrollViewCard>
    {informationData.map(i => (
      <InformationRow
        key={i.id}
        number={i.number}
        mainText={t(i.dataMainText)}
        subText={t(i.dataSubText)}
        rowOnPress={() => {}}
      />
    ))}
  </ScrollViewCard>
);

export default translate(['information'])(Information);
