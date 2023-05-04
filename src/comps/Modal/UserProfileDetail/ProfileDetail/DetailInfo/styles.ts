import { theme } from '@src/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  labelText: {
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 16,
    color: theme.colors.intensePurple,
  },
  contentText: {
    textAlign: 'right',
    color: theme.colors.purple,
    fontWeight: 'bold',
  },
  subContentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
});

export default styles;
