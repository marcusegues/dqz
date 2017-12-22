import React from 'react';
import { translate } from 'react-i18next';
import { Text, View } from 'react-native';
import OnBoardingContainer from './subcomponents/OnBoardingContainer';
import OnBoardingParagraph from './subcomponents/OnBoardingParagraph';
import DoneButton from './subcomponents/DoneButton';
import { moderateScale } from '../../styles/Scaling';
import { MAIN_RED } from '../../styles/colors';

const ownStyles = {
  container: {
    alignItems: 'center',
  },
  percents: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(36),
    color: '#4a4a4a',
    paddingVertical: moderateScale(5),
  },
  bottomText: {
    fontFamily: 'roboto_medium',
    fontSize: moderateScale(14),
    color: MAIN_RED,
  },
};

class OnBoardingTaxScreen extends React.Component {
  constructor(props) {
    super(props);
    this.systemLanguage = this.props.i18n.language;
  }
  render() {
    const { navigation } = this.props;
    return (
      <OnBoardingContainer>
        <View style={ownStyles.container}>
          <OnBoardingParagraph text="Hiermit bestätige ich, dass ich den einheitlichen Mehrwertsteuersatz von " />
          <Text style={ownStyles.percents}>7.7%</Text>
          <OnBoardingParagraph text="bei der Verzollung von Waren akzeptiere." />
        </View>
        <Text style={ownStyles.bottomText}>WEITERE INFORMATIONEN</Text>
        <DoneButton handlePress={() => navigation.navigate('MainMenu')} />
      </OnBoardingContainer>
    );
  }
}

export default translate(['general', 'onBoarding'])(OnBoardingTaxScreen);
