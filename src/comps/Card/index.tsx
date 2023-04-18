import { FC } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { User } from '@src/types';

interface CardProps {
  user: User;
}

const Card: FC<CardProps> = ({ user }): JSX.Element => (
  <View key={user.id} style={styles.user}>
    <Image style={styles.avatar} source={{ uri: user.avatar_url }} />
    <View>
      <Text style={styles.userName}>Login: {user.login}</Text>
      <Text style={styles.userId}>ID: {user.id}</Text>
    </View>
  </View>
);

export default Card;
