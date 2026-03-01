import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

export const style = StyleSheet.create({
  searchInput: {
    flex: 1,
    marginLeft: horizontalScale(6),
    height: '100%',
    fontFamily: 'Manrope',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(14),
    color: '#36455A',
  },

  searchInputContainer: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#f3f5f9',
    height: verticalScale(50),
    alignItems: 'center',
    borderRadius: horizontalScale(15),
  },
});
