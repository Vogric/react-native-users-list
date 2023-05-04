import { theme } from '@src/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
    width: 380,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: theme.colors.green,
    paddingTop: 24,
    width: 320,
    borderRadius: 25,
    marginBottom: 16,
    backgroundColor: theme.colors.black,
    height: 100,
    borderWidth: 3,
    borderColor: theme.colors.green,
    shadowColor: theme.colors.green,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    elevation: 8,
  },
  button: {
    shadowColor: theme.colors.green,
    backgroundColor: theme.colors.green,
    padding: 20,
    borderRadius: 25,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export default styles;
