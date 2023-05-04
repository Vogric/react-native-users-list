import { FC } from 'react';
import { Text } from 'react-native';
import styles from './styles';

interface ListHeaderComp {
  title: string;
}

const ListHeaderComp: FC<ListHeaderComp> = ({ title }): JSX.Element => {
  return <Text style={styles.title}>{title}</Text>;
};

export default ListHeaderComp;
