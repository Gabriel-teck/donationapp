import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: horizontalScale(24),
  },
  registrationButton: {
    alignItems: 'center',
  },
  error: {
    fontFamily: 'Manrope',
    fontSize: scaleFontSize(16),
    color: '#FF0000',
    marginBottom: verticalScale(24),
  },
});

export default style;
