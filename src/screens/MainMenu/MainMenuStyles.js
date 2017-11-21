import { StyleSheet, Platform } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../styles/Scaling';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  backgroundImageContainer: {
    flex: 0.3,
  },
  backgroundImage: {
    height: verticalScale(160),
    flex: 1,
  },
  mainMenuTitle: {
    alignSelf: 'flex-start',
    paddingTop: verticalScale(13),
    // paddingVertical: verticalScale(12),
    paddingLeft: scale(25),
    // paddingLeft: scale(20),
    fontSize: moderateScale(18),
    fontFamily: 'roboto_bold',
    // ...Platform.select({
    //     ios: {
    //         marginHorizontal: scale(9),
    //         marginVertical: verticalScale(9),
    //     },
    //     android: {
    //         marginHorizontal: scale(11),
    //         marginVertical: verticalScale(11),
    //     },
    // }),
  },
  contentContainer: {
    ...Platform.select({
      ios: {
        flex: 0.7,
      },
      android: {
        flex: 0.7,
      },
    }),
    // flex: 0.65,
    // borderWidth: 1,
    // borderColor: 'red',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileContainer: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'green',
    ...Platform.select({
      ios: {
        width: moderateScale(370),
      },
      android: {
        width: moderateScale(370, 0.6),
        // width: moderateScale(350, 0.6),
      },
    }),

    // width: moderateScale(350, 0.6),
    // width: '100%',
    // paddingHorizontal: scale(20),
    flexDirection: 'row',
    justifyContent: 'center',
    // justifyContent: 'space-between',
    alignContent: 'center',
    // alignContent: 'space-between',
    flexWrap: 'wrap',
  },
});
