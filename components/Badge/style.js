import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

export const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    height: verticalScale(22),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: 'Manrope',
    fontSize: scaleFontSize(10),
    fontWeight: '600',
    lineHeight: scaleFontSize(12),
    color: 'white',
    textAlign: 'center',
  },
});
