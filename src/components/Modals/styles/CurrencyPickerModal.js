import { StyleSheet } from 'react-native';
import { moderateScale } from '../../../styles/Scaling';

export default StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: '#A0A0A0',
    width: 110,
    borderBottomWidth: 1,
    borderBottomColor: '#9B9B9B',
    textAlign: 'center',
    marginHorizontal: 20,
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(24),
    color: '#1a1a1a',
  },
  subText: {
    marginTop: 10,
    textAlign: 'center',
  },
});
