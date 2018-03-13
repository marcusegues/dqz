// @flow
import React from 'react';
// $FlowFixMe
import { Linking, View } from 'react-native';
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
import { AppInfoLink } from '../../../AppInfo/subComponents/AppInfoLink';
import type { Language } from '../../../../i18n/types/locale';

const bus = require('../../../../../assets/images/info/bus.png');
const camper = require('../../../../../assets/images/info/camper.png');
const pendant = require('../../../../../assets/images/info/pendant.png');
const trailer = require('../../../../../assets/images/info/trailer.png');
const van = require('../../../../../assets/images/info/van.png');

export type LanguageCategory = 'de' | 'en' | 'it' | 'fr';

type roadTaxLinksType = { [LanguageCategory]: string };

const roadTaxLinks: roadTaxLinksType = {
  de:
    'https://www.ezv.admin.ch/ezv/de/home/information-firmen/transport--reisedokument--strassenabgaben/schwerverkehrsabgaben--lsva-und-psva-.html',
  it:
    'https://www.ezv.admin.ch/ezv/it/home/informazioni-per-ditte/trasporto--documenti-di-viaggio-e-tasse-sul-traffico-stradale/tasse-sul-traffico-pesante--ttpcp-e-tftp-.html',
  fr:
    'https://www.ezv.admin.ch/ezv/fr/home/infos-pour-entreprises/transport--document-de-voyage--redevances-routieres/redevances-sur-le-trafic-des-poids-lourds--rplp-et-rplf-.html',
  en:
    'https://www.ezv.admin.ch/ezv/en/home/information-companies/transport--travel-documents--road-taxes/heavy-vehicle-charges--performance-related-and-lump-sum-.html',
};

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
  i18n: { language: Language },
};

const RoadTaxInner = ({ t, i18n }: RoadTaxInnerProps) => (
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
    <AppInfoLink
      text="www.lsva.ch"
      onPress={() => Linking.openURL(`${roadTaxLinks[i18n.language]}`)}
      style={{ marginBottom: verticalScale(10) }}
    />
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
