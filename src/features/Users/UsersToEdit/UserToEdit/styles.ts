import { theme } from '@src/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  userToEditContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
    borderBottomWidth: 5,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: theme.colors.white,
    borderBottomColor: theme.colors.green,
    textShadowColor: theme.colors.purple,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 18,
    margin: 6,
    width: 270,
  },
  userToEdit: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    paddingLeft: 13,
    borderRadius: 20,
    color: theme.colors.blackShadow,
    margin: 4,
    borderWidth: 3,
    borderColor: theme.colors.white,
    borderBottomColor: theme.colors.strongGreen,
    textShadowColor: theme.colors.purple,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 18,
  },
  icon: {
    marginRight: 5,
    marginLeft: 25,
    textShadowColor: theme.colors.modalBackground,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 18,
  },
});

export default styles;
