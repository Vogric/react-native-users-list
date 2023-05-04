import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSelectedUserToEdit,
  setUsersWithDetails,
} from '@src/store/slices/usersSlice';
import { RootState } from '@src/store/reducers';
import { UserDetail } from '@src/types';
import { updateUsersWithDetails } from '../helpers';

interface UserProfileItem {
  label: string;
  value: string | number | undefined;
}

const UserProfileItem: FC<UserProfileItem> = ({
  label,
  value,
}): JSX.Element => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(value?.toString());
  const { selectedUserToEdit, usersWithDetails } = useSelector(
    (state: RootState) => state.users
  );

  const handleChangeText = useCallback(
    (text: string): void => setEditedValue(text),
    []
  );

  const handleEdit = useCallback((): void => setEditing(true), []);

  const handleCancel = useCallback((): void => {
    setEditedValue(editedValue);
    setEditing(false);
  }, [value]);

  const handleSave = useCallback((): void => {
    const updatedUserDetail = {
      ...selectedUserToEdit,
      [label.toLocaleLowerCase()]: editedValue,
    } as UserDetail;
    dispatch(setSelectedUserToEdit(updatedUserDetail));

    const updatedUser = updateUsersWithDetails(
      updatedUserDetail,
      usersWithDetails,
      selectedUserToEdit
    );
    dispatch(setUsersWithDetails(updatedUser as UserDetail[]));

    setEditing(false);
  }, [editedValue]);

  useEffect((): void => setEditedValue(value?.toString()), [value]);

  return (
    <View style={styles.item}>
      <Text style={styles.label}>{label}</Text>
      {editing ? (
        <>
          <TextInput
            style={styles.editValue}
            value={editedValue}
            onChangeText={handleChangeText}
          />
          <TouchableOpacity onPress={handleCancel}>
            <MaterialCommunityIcons name="close-outline" style={styles.icons} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSave}>
            <MaterialCommunityIcons
              name="check-circle-outline"
              style={styles.icons}
            />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TextInput style={styles.value} value={editedValue} />
          <TouchableOpacity onPress={handleEdit}>
            <MaterialCommunityIcons name="pencil" style={styles.icons} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
export default UserProfileItem;
