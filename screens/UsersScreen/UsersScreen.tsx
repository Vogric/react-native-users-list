import { FC } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import UsersList from '../../comps/UsersList/UsersList';
import { theme } from '../../styles/theme';
import styles from '../styles';

const UsersScreen: FC = (): JSX.Element => {
  return (
    <LinearGradient
      style={styles.gradient}
      colors={[theme.colors.green, theme.colors.purple]}
    >
      <UsersList />
    </LinearGradient>
  );
};

export default UsersScreen;
