import { StyleSheet, Platform } from 'react-native';
import { verticalScale, moderateScale } from '../../../../../styles/Scaling';

export default StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '95%',
    borderRadius: 2,
    marginTop: verticalScale(16),
    marginBottom: verticalScale(16),
    borderColor: '#ddd',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 5, width: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  mainTextContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingLeft: 15,
  },
  mainText: {
    fontFamily: 'roboto_regular',
    fontSize: moderateScale(24),
    lineHeight: verticalScale(32),
    color: '#141414',
  },
  bottomButtonContainer: {
    flexDirection: 'row',
  },
});
