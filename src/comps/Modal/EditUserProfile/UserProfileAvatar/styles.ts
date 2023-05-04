import { theme } from '@src/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'column',
    marginBottom: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 4,
    borderBottomWidth: 16,
    borderColor: theme.colors.strongGreen,
    opacity: 0.8,
  },
  editAvatarIcon: {
    marginTop: -45,
    marginLeft: 60,
    color: theme.colors.intensePurple,
    textShadowColor: theme.colors.green,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
});

export default styles;
