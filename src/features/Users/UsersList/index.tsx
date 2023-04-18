import { FC } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { theme } from '@src/theme';
import AlertMessage from '@comps/AlertMessage';
import Card from '@comps/Card';
import ListHeaderComp from '@comps/List/ListHeaderComp';
import useFetch from '@hooks/useFetch';
import { User } from '@src/types';
import { ROUTES } from '@src/routes';
import { getRandomUsers } from '../helpers';
import SkeletonCard from '@src/comps/Skeleton/Card/SkeletonCard';

const UsersList: FC = (): JSX.Element => {
  const { BASE_URL, USERS } = ROUTES;
  const [data, loading, error] = useFetch<User[]>(BASE_URL + USERS);

  const users = getRandomUsers(data, 6);

  return (
    <>
      {error && (
        <AlertMessage title={'Error'} message={'Users not available'} />
      )}
      {loading && !users && (
        <ActivityIndicator size="large" color={theme.colors.white} />
      )}
      {users && (
        <FlatList
          data={users}
          renderItem={({ item }) =>
            loading ? <SkeletonCard /> : <Card user={item} />
          }
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={
            <ListHeaderComp title={`Users: ${users?.length}`} />
          }
        />
      )}
    </>
  );
};

export default UsersList;
