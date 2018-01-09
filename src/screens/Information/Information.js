// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
import { ScrollViewCard } from './subComponents/ScrollViewCard';
import { InformationRow } from './subComponents/InformationRow';
import { informationData } from './InformationData';
import { HeaderTitle } from '../../components/Headers/subcomponents/HeaderTitle';
import type { TFunction } from '../../types/generalTypes';

class InformationInner extends React.Component<{ t: TFunction }> {
  static navigationOptions = ({ screenProps }) => ({
    headerTitle: (
      <HeaderTitle text={screenProps.t('information:informationTitle')} />
    ),
  });

  render() {
    const { t } = this.props;
    return (
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
  }
}

export const Information = (translate(['information'])(
  InformationInner
): ComponentType<{}>);
