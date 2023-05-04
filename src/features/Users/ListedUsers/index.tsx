import { FC, Suspense, lazy, useEffect } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { theme } from '@src/theme';
import SkeletonCard from '@src/comps/Skeleton/Card/SkeletonCard';
import ListHeaderComp from '@comps/List/ListHeaderComp';
import useFetch from '@hooks/useFetch';
import { User } from '@src/types';
import { ROUTES } from '@src/routes';
import { getRandomUsers } from '../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@reducers/index';
import {
  setSelectedUser,
  setUsers,
  setUsersWithDetails,
} from '@src/store/slices/usersSlice';
import { showDetailModal } from '@src/store/slices/modalSlice';
import { MODAL_TYPE } from '@comps/Modal';
import fetchUserDetails from '@src/services/User';

const Card = lazy(
  () =>
    new Promise<typeof import('@comps/Card')>((resolve) =>
      setTimeout(() => resolve(import('@comps/Card')), 2500)
    )
);
const CustomModal = lazy(() => import('@comps/Modal'));
const UserProfileDetail = lazy(
  () => import('@src/comps/Modal/UserProfileDetail')
);

const ListedUsers: FC = (): JSX.Element => {
  const { BASE_URL, USERS } = ROUTES;
  const [data] = useFetch<User[]>(BASE_URL + USERS);
  const dispatch = useDispatch();
  const inputUserNumber = useSelector(
    (state: RootState) => state.input.inputUserNumber
  );
  const users = getRandomUsers(data, Number(inputUserNumber));

  const handlePressCard = (user: User): void => {
    dispatch(setSelectedUser(user));
    dispatch(showDetailModal());
  };

  useEffect(() => {
    dispatch(setUsers(users || []));
  }, [users]);

  useEffect(() => {
    if (users) {
      fetchUserDetails(users).then((usersWithDetails) => {
        dispatch(setUsersWithDetails(usersWithDetails));
      });
    }
  }, [users]);

  return (
    <>
      {users && (
        <>
          <FlatList
            data={users}
            renderItem={({ item }: { item: User }) => (
              <Suspense fallback={<SkeletonCard />}>
                <Card onPress={() => handlePressCard(item)} user={item} />
              </Suspense>
            )}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={
              <ListHeaderComp title={`Listed users: ${users?.length}`} />
            }
          />
          <Suspense
            fallback={
              <ActivityIndicator size="large" color={theme.colors.white} />
            }
          >
            <CustomModal modalType={MODAL_TYPE.DETAIL}>
              <Suspense
                fallback={
                  <ActivityIndicator size="large" color={theme.colors.white} />
                }
              >
                <UserProfileDetail />
              </Suspense>
            </CustomModal>
          </Suspense>
        </>
      )}
    </>
  );
};

export default ListedUsers;
