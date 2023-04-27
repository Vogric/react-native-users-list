import { FC } from 'react';
import ListedUsers from '@src/features/Users/ListedUsers';
import GradientBackground from '@comps/GradientBackground';

const UsersScreen: FC = (): JSX.Element => {
  return (
    <GradientBackground>
      <ListedUsers />
    </GradientBackground>
  );
};

export default UsersScreen;
