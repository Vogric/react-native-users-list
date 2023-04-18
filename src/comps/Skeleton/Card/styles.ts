import { theme } from '@src/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  skeletonUser: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: theme.colors.grey,
    borderRadius: 8,
    width: 340,
    padding: 16,
    shadowColor: theme.colors.blackShadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    opacity: 0.5,
  },
  skeletonAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
    backgroundColor: theme.colors.blackShadow,
  },
  skeletonText: {
    width: 60,
    height: 16,
    padding: 4,
    borderRadius: 8,
    backgroundColor: theme.colors.blackShadow,
    marginBottom: 4,
  },
});

export default styles;
