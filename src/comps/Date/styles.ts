import { StyleSheet } from 'react-native';
import { theme } from '@src/theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.white,
    fontSize: 26,
    fontWeight: 'bold',
    textShadowColor: theme.colors.blackShadow,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
});

export default styles;
