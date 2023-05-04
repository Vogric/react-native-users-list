import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { theme } from '@src/theme';
import { UserDetail } from '@src/types';

interface UserToEditProps {
  item: UserDetail,
  handleOnPress: () => void
}

const UserToEdit: FC<UserToEditProps> = ({ item, handleOnPress }):JSX.Element => {
  return (
    <View style={styles.userToEditContainer}>
      <Text style={styles.userToEdit}>{item.login}</Text>
      <TouchableOpacity onPress={handleOnPress}>
        <MaterialCommunityIcons
          name="account-edit-outline"
          size={35}
          color={theme.colors.intensePurple}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default UserToEdit;
