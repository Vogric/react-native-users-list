import { StyleSheet } from 'react-native';
import { theme } from '@src/theme';

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    marginTop: 105,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 26,
    color: theme.colors.white,
    textShadowColor: theme.colors.blackShadow,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});

export default styles;
