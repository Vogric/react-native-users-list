import { theme } from '@src/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    fontSize: 90,
    fontWeight: 'bold',
    color: theme.colors.black,
    textShadowColor: theme.colors.softPurple,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
});

export default styles;
