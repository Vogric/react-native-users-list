import { StyleSheet } from 'react-native';
import { theme } from '@src/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
