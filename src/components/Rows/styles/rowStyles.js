import { StyleSheet } from 'react-native';

export const rowContainerStyles = (
  borderTop?: boolean,
  borderBottom?: boolean
) => ({
  width: '95%',
  alignSelf: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  borderBottomWidth: borderBottom ? 1 : 0,
  borderColor: '#E0E0E1',
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderTopWidth: borderTop ? 1 : 0,
});

export const rowContentStyles = StyleSheet.create({
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
