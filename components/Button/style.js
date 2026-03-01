import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

export const style = StyleSheet.create({
  button: {
    backgroundColor: '#2979f2',
    height: verticalScale(55),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: 'Manrope',
    fontSize: scaleFontSize(16),
    fontWeight: '500',
    lineHeight: scaleFontSize(19),
    color: 'white',
    textAlign: 'center',
  },
  isDisabled: {
    opacity: 0.5,
  },
});
