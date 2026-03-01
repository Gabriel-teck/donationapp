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
  backButton: {
    marginLeft: horizontalScale(14),
    marginTop: verticalScale(7),
  },
  error: {
    fontFamily: 'Manrope',
    fontSize: scaleFontSize(16),
    color: '#FF0000',
    marginBottom: verticalScale(24),
  },
  success: {
    fontFamily: 'Manrope',
    fontSize: scaleFontSize(16),
    color: '#28A745',
    marginBottom: verticalScale(24),
  },
});

export default style;
