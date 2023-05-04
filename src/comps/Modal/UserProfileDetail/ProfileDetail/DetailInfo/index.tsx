import { FC } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface DetailInfoProps {
  label?: string;
  value: string | number;
}

const DetailInfo: FC<DetailInfoProps> = ({ label, value }): JSX.Element => {
  return (
    <View style={styles.subContentInfo}>
      {label && <Text style={styles.labelText}>{label}</Text>}
      <Text style={styles.contentText}>{value}</Text>
    </View>
  );
};

export default DetailInfo;
