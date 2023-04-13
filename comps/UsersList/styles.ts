import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    marginTop: 30,
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
