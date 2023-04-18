import { FC } from 'react';
import UsersList from '@features/Users/UsersList/';
import GradientBackground from '@comps/GradientBackground';

const UsersScreen: FC = (): JSX.Element => {
  return (
    <GradientBackground>
      <UsersList />
    </GradientBackground>
  );
};

export default UsersScreen;
