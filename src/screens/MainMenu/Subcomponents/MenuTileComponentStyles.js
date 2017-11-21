import { StyleSheet, Platform, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../../styles/Scaling';

export default StyleSheet.create({
  container: {
    width: verticalScale(166),
    // width: '47%',
    height: verticalScale(142),
    // height: '47%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 2,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,

    ...Platform.select({
      ios: {
        marginHorizontal: scale(6),
        // marginHorizontal: scale(9),
        marginVertical: verticalScale(6),
        // marginVertical: verticalScale(9),
      },
      android: {
        marginHorizontal: scale(9),
        // marginHorizontal: scale(11),
        marginVertical: verticalScale(9),
        // marginVertical: verticalScale(11),
      },
    }),
  },
  contentContainer: {
    flex: 0.6,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: moderateScale(12),
    lineHeight: verticalScale(17),
    color: '#141414',
    fontFamily: 'roboto_bold',
    textAlign: 'center',
  },
});
