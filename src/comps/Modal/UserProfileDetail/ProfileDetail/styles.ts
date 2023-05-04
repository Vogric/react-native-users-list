import { theme } from '@src/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 25,
    borderWidth: 4,
    borderColor: theme.colors.purple,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  contentInfo: {
    marginTop: 15,
    width: 300,
    borderRadius: 20,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
    padding: 12,
  },
  labelText: {
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 16,
    color: theme.colors.intensePurple,
  },
  labelTextLeft: {
    textAlign: 'left',
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
