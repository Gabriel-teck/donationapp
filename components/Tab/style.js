import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

export const style = StyleSheet.create({
  tab: {
    backgroundColor: '#2979f2',
    height: verticalScale(50),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: 'Manrope',
    fontSize: scaleFontSize(14),
    fontWeight: '500',
    lineHeight: scaleFontSize(17),
    color: 'white',
    textAlign: 'center',
  },
  isInactiveTab: {
    backgroundColor: '#f3f5f9',
  },
  inactiveTitle: {
    color: '#79869f',
  },
});
