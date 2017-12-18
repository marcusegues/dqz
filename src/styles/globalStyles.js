import { StyleSheet } from 'react-native';
import { BLACK } from './colors';

export default StyleSheet.create({
  boxShadow: {
    elevation: 2,
    shadowColor: BLACK,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
});
