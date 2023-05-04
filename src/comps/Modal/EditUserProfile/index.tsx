import { UserDetail } from '@src/types';
import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserProfileItem from './UserProfileItem';
import UserProfileAvatar from './UserProfileAvatar';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  setCleanDetailsUser,
  setUsersWithDetails,
} from '@src/store/slices/usersSlice';
import { RootState } from '@src/store/reducers';
import { updateUsersWithDetails } from './helpers';

export enum LABEL {
  NAME = 'Name',
  BIO = 'Bio',
  BLOG = 'Blog',
  LOCATION = 'Location',
  EMAIL = 'Email',
}

const EditUserProfile: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { usersWithDetails, selectedUserToEdit } = useSelector(
    (state: RootState) => state.users
  );

  const handleDeleteFields = useCallback((): void => {
    const userWithEmptyFields = {
      ...selectedUserToEdit,
      name: '',
      bio: '',
      blog: '',
      location: '',
      email: '',
    } as UserDetail | null;
    dispatch(setCleanDetailsUser(userWithEmptyFields));

    const updatedUser = updateUsersWithDetails(
      userWithEmptyFields,
      usersWithDetails,
      selectedUserToEdit
    );
    dispatch(setUsersWithDetails(updatedUser as UserDetail[]));
  }, []);

  return (
    <>
      <TouchableOpacity onPress={handleDeleteFields}>
        <MaterialCommunityIcons
          name="delete-circle-outline"
          size={32}
          style={{ marginLeft: 270, marginTop: -35, color: 'grey' }}
        />
      </TouchableOpacity>
      <UserProfileAvatar value={selectedUserToEdit?.avatar_url} />
      <UserProfileItem label={LABEL.NAME} value={selectedUserToEdit?.name} />
      <UserProfileItem label={LABEL.BIO} value={selectedUserToEdit?.bio} />
      <UserProfileItem label={LABEL.BLOG} value={selectedUserToEdit?.blog} />
      <UserProfileItem
        label={LABEL.LOCATION}
        value={selectedUserToEdit?.location}
      />
      <UserProfileItem label={LABEL.EMAIL} value={selectedUserToEdit?.email} />
    </>
  );
};

export default EditUserProfile;
