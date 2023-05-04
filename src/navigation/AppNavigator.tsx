import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EditUsersScreen from '@src/screens/EditUsersScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '@src/theme';
import HomeStack from './HomeStack';

export enum TAB {
  SEARCH_USERS = 'Search Users',
  EDIT_USERS = 'Edit Users',
}

export enum ICON_NAME {
  HOME = 'home',
  EDIT_USERS = 'human-edit',
}

const Tab = createBottomTabNavigator();

const AppNavigator: FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.colors.intensePurple,
          tabBarInactiveTintColor: theme.colors.softPurple,
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarStyle: {
            backgroundColor: theme.colors.white,
            height: 50,
          },
        }}
      >
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name={ICON_NAME.HOME}
                color={color}
                size={size}
              />
            ),
          }}
          name={TAB.SEARCH_USERS}
          component={HomeStack}
        />
        <Tab.Screen
          name={TAB.EDIT_USERS}
          component={EditUsersScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name={ICON_NAME.EDIT_USERS}
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
