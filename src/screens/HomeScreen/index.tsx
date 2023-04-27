import { FC } from 'react';
import MainButton from '@comps/MainButton/MainButton';
import GradientBackground from '@comps/GradientBackground';
import { useIsFocused } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '@navigation/types';
import Date from '@src/comps/Date';
import { View } from 'react-native';
import styles from './style';
import Input from '@src/comps/Input';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store/reducers';

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: FC<HomeScreenProps> = ({ navigation }): JSX.Element => {
  const isFocused = useIsFocused();

  const inputUserNumber = useSelector(
    (state: RootState) => state.input.inputUserNumber
  );

  const isValidUserNumberInput = (): boolean =>
    inputUserNumber !== '' && inputUserNumber !== '0';

  const handlerMainButtonNavigation = (): void => {
    if (isValidUserNumberInput()) {
      return navigation.navigate('Users', { userId: '5' });
    }
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Date />
        <Input />
        <MainButton
          text="See users"
          navigateTo={handlerMainButtonNavigation}
          resetAnimation={isFocused}
          isValidUserNumberInput={isValidUserNumberInput}
        />
      </View>
    </GradientBackground>
  );
};

export default HomeScreen;
