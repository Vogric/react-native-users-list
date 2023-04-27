import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { theme } from '@src/theme';

const UserToEdit = ({ item, handleOnPress }: any) => {
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
