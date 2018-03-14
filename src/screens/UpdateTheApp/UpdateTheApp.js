// @flow
import React from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import {
  Image,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Platform,
  // $FlowFixMe
} from 'react-native';
import type { ComponentType } from 'react';
import type { TFunction } from '../../types/generalTypes';
import { moderateScale, scale, verticalScale } from '../../styles/Scaling';
import { type } from '../../styles/fonts';
import { RedButton } from '../../components/Buttons/RedButton';

const { width } = Dimensions.get('window');

const ownStyles = {
  container: {
    flex: 1,
    paddingHorizontal: scale(15),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  topImage: {
    width,
    height: verticalScale(269),
  },
  textContainer: {
    marginHorizontal: scale(32),
    alignItems: 'center',
  },
  text: {
    fontSize: 21,
    textAlign: 'center',
    lineHeight: verticalScale(30),
  },
  title: {
    fontFamily: type.medium,
    marginVertical: verticalScale(5),
  },
  subTitle: {
    fontFamily: type.light,
  },
  icon: {
    width: moderateScale(140),
    height: moderateScale(140),
  },
  button: {
    marginBottom: verticalScale(16),
  },
};

const topImage = require('../../../assets/images/updateTheAppTopImage.jpg');
const bottomIcon = require('../../../assets/images/updateTheAppBottomIcon.png');

type UpdateTheAppInnerProps = {
  t: TFunction,
};

const UpdateTheAppInner = ({ t }: UpdateTheAppInnerProps) => {
  const ios = Platform.OS === 'ios';
  const buttonText = ios ? t('buttonTextIos') : t('buttonTextAndroid');
  return (
    <SafeAreaView style={ownStyles.container}>
      <Image source={topImage} resizeMode="cover" style={ownStyles.topImage} />
      <View style={ownStyles.textContainer}>
        <Text style={[ownStyles.text, ownStyles.title]}>{t('title')}</Text>
        <Text style={[ownStyles.text, ownStyles.subTitle]}>
          {t('subtitle')}
        </Text>
      </View>
      <Image source={bottomIcon} resizeMode="contain" style={ownStyles.icon} />
      <View style={ownStyles.button}>
        <RedButton text={buttonText} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export const UpdateTheApp = (translate(['updateTheApp'])(
  UpdateTheAppInner
): ComponentType<UpdateTheAppInnerProps>);
