import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styled = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background
  },
});
