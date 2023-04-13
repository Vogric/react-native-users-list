import { FC } from 'react';
import styles from '../styles';
import { LinearGradient } from 'expo-linear-gradient';
import MainButton from '../../comps/MainButton/MainButton';
import { HomeScreenNavigationProp } from '../types';
import { theme } from '../../styles/theme';

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: FC<HomeScreenProps> = ({ navigation }): JSX.Element => {
  return (
    <LinearGradient
      colors={[theme.colors.green, theme.colors.purple]}
      style={styles.gradient}
    >
      <MainButton
        text={'See users'}
        navigateTo={(): void => navigation.navigate('Users', { userId: '5' })}
      />
    </LinearGradient>
  );
};

export default HomeScreen;
