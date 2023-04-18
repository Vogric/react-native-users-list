import { FC } from 'react';
import MainButton from '@comps/MainButton/MainButton';
import GradientBackground from '@comps/GradientBackground';
import { HomeScreenNavigationProp } from '@navigation/types';

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: FC<HomeScreenProps> = ({ navigation }): JSX.Element => {
  return (
    <GradientBackground>
      <MainButton
        text={'See users'}
        navigateTo={(): void => navigation.navigate('Users', { userId: '5' })}
      />
    </GradientBackground>
  );
};

export default HomeScreen;
