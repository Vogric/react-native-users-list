import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    width: 340,
    padding: 16,
    shadowColor: theme.colors.blackShadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  userName: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  userId: {
    marginLeft: 16,
    fontSize: 16,
    color: theme.colors.grey,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: theme.colors.purple,
  },
});

export default styles;
