import { FC } from 'react';
import GradientBackground from '@src/comps/GradientBackground';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store/reducers';
import UsersToEdit from '@src/features/Users/UsersToEdit';
import NoUsersToEdit from '@src/comps/Message/NoUsersToEdit';

const EditUsersScreen: FC = (): JSX.Element => {
  const { users, usersWithDetails } = useSelector(
    (state: RootState) => state.users
  );

  return (
    <GradientBackground>
      {users.length ? (
        <UsersToEdit usersToEdit={usersWithDetails ? usersWithDetails : []} />
      ) : (
        <NoUsersToEdit />
      )}
    </GradientBackground>
  );
};

export default EditUsersScreen;
