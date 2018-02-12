import { StyleSheet } from 'react-native';

export const ROW_BORDER_WIDTH = 1;

export const rowContainerStyles = (
  borderTop?: boolean,
  borderBottom?: boolean,
  width?: string
) => ({
  width: width ? width : '95%',
  alignSelf: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  borderBottomWidth: borderBottom ? 1 : 0,
  borderColor: '#E0E0E1',
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderTopWidth: borderTop ? 1 : 0,
});

export const collapsibleRowStyles = (
  borderTop?: boolean,
  borderBottom?: boolean
) => rowContainerStyles(borderTop, borderBottom, '100%');

export const rowStyles = StyleSheet.create({
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  borderBottom: {
    borderBottomWidth: ROW_BORDER_WIDTH,
    borderColor: '#E0E0E1',
  },
  borderTop: {
    borderTopWidth: ROW_BORDER_WIDTH,
    borderColor: '#E0E0E1',
  },
});
