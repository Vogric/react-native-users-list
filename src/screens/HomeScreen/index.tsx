import { FC } from 'react';
import MainButton from '@comps/MainButton/MainButton';
import GradientBackground from '@comps/GradientBackground';
import { useIsFocused } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '@navigation/types';

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: FC<HomeScreenProps> = ({ navigation }): JSX.Element => {
  const isFocused = useIsFocused();

  return (
    <GradientBackground>
      <MainButton
        text="See users"
        navigateTo={() => {
          navigation.navigate('Users', { userId: '5' });
        }}
        resetAnimation={isFocused}
      />
    </GradientBackground>
  );
};

export default HomeScreen;
