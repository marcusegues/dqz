import { StyleSheet, Platform } from 'react-native';
import { moderateScale } from '../../styles/Scaling';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  contentContainer: {
    flex: 0.7,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        width: moderateScale(370),
      },
      android: {
        width: moderateScale(370, 0.6),
      },
    }),

    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  iconAndBadgeWrapper: {
    flexDirection: 'row',
  },
  redBadge: {
    borderWidth: 1,
    borderColor: '#DC0018',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    backgroundColor: '#DC0018',
    borderRadius: 100,
    position: 'absolute',
    top: -10,
    right: -7,
  },
  badgeValue: {
    color: '#fff',
    fontSize: moderateScale(14),
    fontFamily: 'roboto_regular',
  },
});
