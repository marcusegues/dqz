// @flow
import React from 'react';
import { translate } from 'react-i18next';
// $FlowFixMe
import { Text, View } from 'react-native';
import OnBoardingContainer from '../OnBoarding/subcomponents/OnBoardingContainer';

const ownStyles = {};

type InformationScreenProps = {
  t: (field: string, params?: {}) => void,
  navigation: any,
};

const Information = ({ navigation, t }: InformationScreenProps) => (
  <OnBoardingContainer>
    <Text>lkjnslk</Text>
    {/*<View style={ownStyles.container}>*/}
    {/*<OnBoardingParagraph text={t('confirmationVat')} />*/}
    {/*<Text style={ownStyles.percents}>7.7%</Text>*/}
    {/*<OnBoardingParagraph text={t('confirmationVat2')} />*/}
    {/*</View>*/}
    {/*<Text style={ownStyles.bottomText}>*/}
    {/*{(t('vatInformation') || '').toUpperCase()}*/}
    {/*</Text>*/}
    {/*<DoneButton onPress={() => navigation.navigate('MainMenu')} />*/}
  </OnBoardingContainer>
);

export default translate(['onBoarding'])(Information);
