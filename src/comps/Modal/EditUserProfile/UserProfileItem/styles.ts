import { theme } from '@src/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginVertical: 5,
    borderWidth: 2,
    borderColor: theme.colors.blackShadow,
    backgroundColor: theme.colors.green,
    borderRadius: 8,
    padding: 5,
  },
  label: {
    fontWeight: 'bold',
    color: theme.colors.intensePurple,
    marginRight: 8,
    marginLeft: 5,
    fontSize: 15,
    marginTop: 2,
    textShadowColor: theme.colors.strongGreen,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  value: {
    flex: 1,
    color: theme.colors.black,
  },
  editValue: {
    flex: 1,
    color: theme.colors.intensePurple,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 16,
  },
  icons: {
    color: theme.colors.intensePurple,
    textShadowColor: theme.colors.strongGreen,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    marginLeft: 1,
    fontSize: 22
  },
  editContainer: {
    width: 220,
    height: 100,
    backgroundColor: 'white',
  },
});

export default styles;
