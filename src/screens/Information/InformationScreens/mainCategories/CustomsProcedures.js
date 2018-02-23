// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { View } from 'react-native';
import type { Navigation, TFunction } from '../../../../types/generalTypes';
import { MainContentContainer } from '../../../../components/MainContentContainer/MainContentContainer';
import { ScrollViewCard } from '../../../../components/General Components/ScrollViewCard';
import { CardHeaderText } from '../../../../components/QuestionAnswer/Cards/subcomponents/CardHeaderText';
import { moderateScale, verticalScale } from '../../../../styles/Scaling';
import { AppInfoSubText } from '../../../AppInfo/subComponents/AppInfoSubText';
import { BulletText } from '../../../AppInfo/subComponents/BulletText';
import { CardRowText } from '../../../../components/QuestionAnswer/Cards/subcomponents/CardRowText';

type CustomsProceduresInnerProps = {
  t: TFunction,
  navigation: Navigation,
};

const CustomsProceduresInner = ({
  t,
  navigation,
}: CustomsProceduresInnerProps) => (
  <MainContentContainer>
    <ScrollViewCard>
      <View style={{ margin: moderateScale(16) }}>
        <CardHeaderText text={t('customsProceduresMainText')} />
        <AppInfoSubText
          text={t('customsProceduresText1')}
          style={{ marginVertical: verticalScale(10) }}
        />
        <AppInfoSubText text={t('customsProceduresText2')} />
        <BulletText text={t('customsProceduresText3')} />
        <BulletText text={t('customsProceduresText4')} />
        <AppInfoSubText
          text={t('customsProceduresText5')}
          style={{ marginVertical: verticalScale(10) }}
        />
        <AppInfoSubText text={t('customsProceduresText6')} />
        <BulletText
          text={t('customsProceduresText7')}
          onPress={() => navigation.navigate('VatAllowance')}
          style={{ color: 'green' }}
        />
        <BulletText
          text={t('customsProceduresText8')}
          onPress={() => navigation.navigate('DutyAllowance')}
          style={{ color: 'green' }}
        />
        <BulletText
          text={t('customsProceduresText9')}
          onPress={() => navigation.navigate('PersonalEffects')}
          style={{ color: 'green' }}
        />
        <CardRowText
          text={t('customsProceduresText10')}
          style={{ marginTop: verticalScale(20) }}
        />
        <AppInfoSubText text={t('customsProceduresText11')} />
        <CardRowText
          text={t('customsProceduresText12')}
          style={{ marginTop: verticalScale(20) }}
        />
        <AppInfoSubText text={t('customsProceduresText13')} />
        <AppInfoSubText
          text={t('customsProceduresText14')}
          style={{ marginTop: verticalScale(10) }}
        />
        <AppInfoSubText
          text={t('customsProceduresText15')}
          style={{ marginTop: verticalScale(10) }}
        />
        <CardRowText
          text={t('customsProceduresText16')}
          style={{ marginTop: verticalScale(20) }}
        />
        {/*<TouchableOpacity onPress={() => Linking.openURL(url)}>*/}
        <AppInfoSubText text={t('customsProceduresText17')} />
        {/*</TouchableOpacity>*/}
        <AppInfoSubText
          text={t('customsProceduresText18')}
          style={{ marginVertical: verticalScale(10) }}
        />
        <AppInfoSubText text={t('customsProceduresText19')} />
        <CardRowText
          text={t('customsProceduresText20')}
          style={{ marginTop: verticalScale(20) }}
        />
        <AppInfoSubText
          text={t('customsProceduresText21')}
          style={{ marginBottom: verticalScale(10) }}
        />
      </View>
    </ScrollViewCard>
  </MainContentContainer>
);

export const CustomsProcedures = (translate(['information'])(
  CustomsProceduresInner
): ComponentType<CustomsProceduresInnerProps>);
