import { FC, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { onChangeText } from '@src/store/slices/inputUserNumberSlice';
import { setUsers } from '@src/store/slices/usersSlice';
import { useDispatch } from 'react-redux';
import HomeScreen from '@screens/HomeScreen';
import UsersScreen from '@screens/UsersScreen';
import Arrow from '@src/comps/Arrow';

export enum SCREEN {
  HOME = 'Home',
  USERS = 'Users',
}

const HomeStack: FC = (): JSX.Element => {
  const Stack = createStackNavigator();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleGoBack = useCallback((): void => {
    dispatch(onChangeText(''));
    dispatch(setUsers([]));
    navigation.goBack();
  }, [dispatch, navigation]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREEN.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SCREEN.USERS}
        component={UsersScreen}
        options={{
          headerShown: true,
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => <Arrow onPress={handleGoBack} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
