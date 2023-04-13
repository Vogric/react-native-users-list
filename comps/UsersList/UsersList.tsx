import { FC } from 'react';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';
import styles from './styles';
import useFetch from '../../hooks/useFetch';
import { shuffleArray, sliceArray } from '../../Utils/Utils';
import { User } from '../../types/User';
import AlertMessage from '../AlertMessage/AlertMessage';
import Card from '../Card/Card';
import { ROUTES } from '../../routes/Routes';
import { theme } from '../../styles/theme';

const UsersList: FC = (): JSX.Element => {
  const { BASE_URL, USERS } = ROUTES;
  const [users, loading, error] = useFetch<User[]>(BASE_URL + USERS);

  const shuffledUsers = shuffleArray(users);

  const fiveShuffledUsers = sliceArray(shuffledUsers, 6);

  return (
    <View style={styles.container}>
      {error && (
        <AlertMessage title={'Error'} message={'Users not available'} />
      )}
      {loading && <ActivityIndicator size="large" color={theme.colors.white} />}
      {users && (
        <FlatList
          data={fiveShuffledUsers}
          keyExtractor={(item) => item?.id.toString()}
          renderItem={({ item }) => <Card user={item} />}
          ListHeaderComponent={
            <Text style={styles.title}>Users: {fiveShuffledUsers?.length}</Text>
          }
        />
      )}
    </View>
  );
};

export default UsersList;
