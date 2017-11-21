import { StyleSheet, Platform, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../../styles/Scaling';

export default StyleSheet.create({
  container: {
    width: verticalScale(160),
    // width: '47%',
    height: verticalScale(160),
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
        marginHorizontal: scale(9),
        marginVertical: verticalScale(9),
      },
      android: {
        marginHorizontal: scale(11),
        marginVertical: verticalScale(11),
      },
    }),
  },
  contentContainer: {
    flex: 0.6,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: moderateScale(14),
    color: '#0A5287',
    fontFamily: 'roboto_bold',
  },
});
