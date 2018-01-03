// @flow
import React from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { Text, View } from 'react-native';
import ScrollViewCard from './subComponents/ScrollViewCard';
import InformationRow from './subComponents/InformationRow';

const ownStyles = {};

type InformationScreenProps = {
  t: (field: string, params?: {}) => void,
  navigation: any,
};

const Information = ({ navigation, t }: InformationScreenProps) => (
  <ScrollViewCard>
    <InformationRow mainText="mainText" subText="subtext" number="1.1" />
    <InformationRow mainText="mainText" subText="subtext" number="1.1" />
    <InformationRow mainText="mainText" subText="subtext" number="1.1" />
    <InformationRow mainText="mainText" subText="subtext" number="1.1" />
    <InformationRow mainText="mainText" subText="subtext" number="1.1" />
    <InformationRow
      mainText="mainText"
      subText="subtextkjl lksjdlkjlsjflsdkj lskdjflksjdlfjsdl "
      number="1.1"
    />
  </ScrollViewCard>
);

export default translate(['onBoarding'])(Information);
