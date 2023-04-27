import { RootState } from '@src/store/reducers';
import { FC, Suspense, lazy, useMemo } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { UserDetail } from '@src/types';
import { theme } from '@src/theme';

const ProfileDetail = lazy(() => import('./ProfileDetail'));

const UserProfileDetail: FC = (): JSX.Element => {
  const { selectedUser, usersWithDetails } = useSelector(
    (state: RootState) => state.users
  );

  const selectedUserDetails = useMemo(() => {
    if (usersWithDetails && selectedUser) {
      return usersWithDetails?.filter(
        (userDetail) => userDetail.login === selectedUser.login
      );
    }
    return null;
  }, [selectedUser, usersWithDetails]);

  return (
    <>
      {usersWithDetails && (
        <FlatList
          data={selectedUserDetails ? selectedUserDetails : []}
          renderItem={({ item }: { item: UserDetail }) => (
            <Suspense
              fallback={
                <ActivityIndicator size="large" color={theme.colors.white} />
              }
            >
              <ProfileDetail userDetail={item} />
            </Suspense>
          )}
          keyExtractor={(item) => item.id?.toString()}
        />
      )}
    </>
  );
};

export default UserProfileDetail;
