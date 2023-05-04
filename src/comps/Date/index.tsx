import { FC } from 'react';
import { getCurrentDate } from '@src/utils/dates';
import { Text } from 'react-native';
import styles from './styles';

const Date: FC = (): JSX.Element => {
  return <Text style={styles.text}>{getCurrentDate()}</Text>;
};

export default Date;
