// @flow
import React from 'react';
// $FlowFixMe
import { Text, View } from 'react-native';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import type { TFunction } from '../../../../types/generalTypes';
import { SubCategoryContainer } from '../../subComponents/SubCategoryContainer';
import { scale, verticalScale } from '../../../../styles/Scaling';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { BulletText } from '../../../AppInfo/subComponents/BulletText';
import { CardRowText } from '../../../../components/QuestionAnswer/Cards/subcomponents/CardRowText';
import { CardHeaderText } from '../../../../components/QuestionAnswer/Cards/subcomponents/CardHeaderText';
import { RightAlignedHeader } from '../../../../components/Overview/subcomponents/RightAlignedHeader';
import { RoadTaxRow } from '../../subComponents/RoadTaxRow';
import { AmountIcon } from '../../../../components/General Components/GreyBox/configured/AmountIcon';

const bus = require('../../../../../assets/images/info/bus.png');
const camper = require('../../../../../assets/images/info/camper.png');
const pendant = require('../../../../../assets/images/info/pendant.png');
const trailer = require('../../../../../assets/images/info/trailer.png');
const van = require('../../../../../assets/images/info/van.png');

const ownStyles = {
  rightHeader: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  busImage: {
    width: 85,
    height: 35,
  },
  camperImage: {
    width: 80,
    height: 40,
  },
  trailerImage: {
    width: 69,
    height: 40,
  },
  vanImage: {
    width: 82,
    height: 40,
  },
  pendantImage: {
    width: 77,
    height: 40,
  },
};

type RoadTaxInnerProps = {
  t: TFunction,
};

const RoadTaxInner = ({ t }: RoadTaxInnerProps) => (
  <SubCategoryContainer title={t('roadTaxMainText')}>
    <AppInfoSubText
      text={t('roadTaxText1')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('roadTaxText2')}
      style={{ marginTop: verticalScale(10) }}
    />
    <AppInfoSubText
      text={t('roadTaxText3')}
      style={{ marginTop: verticalScale(10) }}
    />
    <Text style={{ marginBottom: verticalScale(10) }}>www.lsva.ch</Text>
    <AppInfoSubText
      text={t('roadTaxText4')}
      style={{ paddingVertical: verticalScale(10) }}
      greyBox
    />
    <CardRowText
      text={t('roadTaxText5')}
      style={{ marginTop: verticalScale(20) }}
    />

    <AppInfoSubText text={t('roadTaxText6')} />
    <AppInfoSubText
      text={t('roadTaxText7')}
      style={{ marginTop: verticalScale(10) }}
    />
    <BulletText text={t('roadTaxText8')} />
    <BulletText text={t('roadTaxText9')} />
    <BulletText text={t('roadTaxText10')} />
    <BulletText text={t('roadTaxText11')} />
    <AppInfoSubText
      text={t('roadTaxText12')}
      style={{ marginBottom: verticalScale(10) }}
    />

    <CardHeaderText text={t('commonRates')} />
    <AppInfoSubText
      text={t('vehicleTariffs')}
      style={{ paddingTop: verticalScale(10) }}
    />

    <View style={ownStyles.rightHeader}>
      <RightAlignedHeader text={t('costPerDay')} />
    </View>

    <RoadTaxRow
      borderTop
      source={bus}
      title={t('roadTaxCategory1')}
      imageStyle={ownStyles.busImage}
      amount={11}
    >
      <AppInfoSubText text={t('till')} style={{ marginHorizontal: scale(5) }} />
      <AmountIcon amount={25} currency="CHF" />
    </RoadTaxRow>
    <RoadTaxRow
      source={camper}
      title={t('roadTaxCategory2')}
      imageStyle={ownStyles.camperImage}
      amount={3.25}
    />
    <RoadTaxRow
      source={trailer}
      title={t('roadTaxCategory3')}
      imageStyle={ownStyles.trailerImage}
      amount={3.25}
    />
    <RoadTaxRow
      source={van}
      title={t('roadTaxCategory4')}
      imageStyle={ownStyles.vanImage}
      amount={3.25}
    />
    <RoadTaxRow
      pendant
      source={pendant}
      title={t('roadTaxCategory5')}
      imageStyle={ownStyles.pendantImage}
      amount={0.11}
    >
      <AppInfoSubText text={t('per100kgTrailerLoad')} />
    </RoadTaxRow>

    <AppInfoSubText
      text={t('roadTaxText13')}
      style={{ paddingTop: verticalScale(10) }}
      greyBox
    />
    <AppInfoSubText text={t('roadTaxText14')} greyBox />
    <AppInfoSubText
      text={t('roadTaxText15')}
      style={{ paddingBottom: verticalScale(10) }}
      greyBox
    />
  </SubCategoryContainer>
);

export const RoadTax = (translate(['roadTax'])(RoadTaxInner): ComponentType<
  RoadTaxInnerProps
>);
