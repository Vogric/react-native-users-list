import { FC, lazy } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { User } from '@src/types';

const LazyImage = lazy(() => import('@comps/LazyImage'));

interface CardProps {
  user: User;
  onPress: (user: User) => void;
}

const Card: FC<CardProps> = ({ user, onPress }): JSX.Element => {
  const handlePress = (): void => onPress(user);

  return (
    <TouchableOpacity onPress={handlePress} key={user.id} style={styles.user}>
      <LazyImage source={{ uri: user.avatar_url }} style={styles.avatar} />
      <View>
        <Text style={styles.userName}>Login: {user.login}</Text>
        <Text style={styles.userId}>ID: {user.id}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
