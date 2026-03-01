import { StyleSheet } from 'react-native';
import { scaleFontSize } from '../../assets/styles/scaling';

export const style = StyleSheet.create({
  title1: {
    fontFamily: 'Manrope',
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
    fontWeight: '600',
  },
  title2: {
    fontFamily: 'Manrope',
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
    fontWeight: '600',
  },
  title3: {
    fontFamily: 'Manrope',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontWeight: '600',
  },
});
