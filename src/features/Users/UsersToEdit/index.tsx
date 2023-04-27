import { FC, lazy, Suspense } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { UserDetail } from '@src/types';
import ListHeaderComp from '@src/comps/List/ListHeaderComp';
import { theme } from '@src/theme';
import { setSelectedUserToEdit } from '@src/store/slices/usersSlice';
import { showEditUserModal } from '@src/store/slices/modalSlice';
import { MODAL_TYPE } from '@src/comps/Modal';
import { RootState } from '@src/store/reducers';
import { useDispatch, useSelector } from 'react-redux';

interface UsersToEditProps {
  usersToEdit: UserDetail[] | null;
}

const CustomModal = lazy(() => import('@src/comps/Modal'));
const UserToEdit = lazy(
  () => import('@src/features/Users/UsersToEdit/UserToEdit')
);
const EditUserProfile = lazy(() => import('@src/comps/Modal/EditUserProfile'));

const UsersToEdit: FC<UsersToEditProps> = ({ usersToEdit }): JSX.Element => {
  const dispatch = useDispatch();
  const selectedUserToEdit = useSelector(
    (state: RootState) => state.users.selectedUserToEdit
  );

  const handlePressEditUser = (user: UserDetail): void => {
    dispatch(setSelectedUserToEdit(user));
    dispatch(showEditUserModal());
  };

  return (
    <>
      <FlatList
        data={usersToEdit}
        ListHeaderComponent={<ListHeaderComp title={'Users to edit'} />}
        renderItem={({ item }) => (
          <UserToEdit
            item={item}
            handleOnPress={() => handlePressEditUser(item)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <CustomModal modalType={MODAL_TYPE.EDIT}>
        <Suspense
          fallback={
            <ActivityIndicator size="large" color={theme.colors.white} />
          }
        >
          {selectedUserToEdit && <EditUserProfile />}
        </Suspense>
      </CustomModal>
    </>
  );
};

export default UsersToEdit;
