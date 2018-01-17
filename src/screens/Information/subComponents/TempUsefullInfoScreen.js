// @flow
import React from 'react';
// $FlowFixMe
import { View, Text, Image } from 'react-native';
import { UsefulInformationCard } from './UsefulInformationCard';
import { moderateScale, scale, verticalScale } from '../../../styles/Scaling';

const ownStyles = {
  image: {
    width: 314,
    height: 190,
  },
  paragraph: {
    fontFamily: 'roboto_light',
    fontSize: moderateScale(14),
    color: '#1A1A1A',
    lineHeight: 21,
    paddingTop: 16,
  },
  yellowSection: {
    backgroundColor: '#FFF8BE',
    paddingHorizontal: scale(16),
    marginVertical: verticalScale(16),
    paddingBottom: verticalScale(16),
  },
};

const infoImage = require('../../../../assets/images/infoImage.png');

export const TempUsefullInfoScreen = () => (
  <UsefulInformationCard cardHeaderText="Freimengen: Lebensmittel, Alkohol und Tabak">
    <Image source={infoImage} style={{}} />
    <Text style={ownStyles.paragraph}>
      Führen Sie für Ihren privaten Gebrauch oder zum Verschenken Waren ein,
      sind diese zollfrei. Ausgenommen davon sind so genannte sensible Waren,
      für die Sie aus agrar- oder gesundheits-politischen Gründen ab einer
      gewissen Menge Zoll bezahlen müssen (siehe nachstehende Tabelle). Die
      Freimengen gelten pro Person und pro Tag.
    </Text>
    <View style={ownStyles.yellowSection}>
      <Text style={ownStyles.paragraph}>
        Führen Sie für Ihren privaten Gebrauch oder zum Verschenken Waren ein,
        sind diese zollfrei. Ausgenommen davon sind so genannte sensible Waren,
        für die Sie aus agrar- oder gesundheits-politischen Gründen ab einer
        gewissen Menge Zoll bezahlen müssen (siehe nachstehende Tabelle). Die
        Freimengen gelten pro Person und pro Tag.
      </Text>
    </View>
  </UsefulInformationCard>
);
