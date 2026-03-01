import { StyleSheet } from 'react-native';
import { horizontalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    borderRadius: horizontalScale(36),
    height: horizontalScale(44),
    width: horizontalScale(44),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;
