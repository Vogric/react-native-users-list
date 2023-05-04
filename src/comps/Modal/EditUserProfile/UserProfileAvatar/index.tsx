import LazyImage from '@src/comps/LazyImage';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { FC } from 'react';

interface UserProfileAvatar {
  value: string | undefined;
  loading?: boolean;
}

const UserProfileAvatar: FC<UserProfileAvatar> = ({
  value,
  loading,
}): JSX.Element => {
  return (
    <View style={styles.avatarContainer}>
      <LazyImage
        source={{ uri: value }}
        style={styles.avatar}
        loading={loading}
      />
      <MaterialCommunityIcons
        name="image-edit"
        size={26}
        style={styles.editAvatarIcon}
      />
    </View>
  );
};

export default UserProfileAvatar;
