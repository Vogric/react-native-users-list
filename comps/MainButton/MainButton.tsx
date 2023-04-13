import { FC } from 'react';
import { View, Pressable, Text } from 'react-native';
import styles from './styles';

interface MainButtonProps {
  text: string;
  navigateTo?: () => void;
}

const MainButton: FC<MainButtonProps> = ({ text, navigateTo }): JSX.Element => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={navigateTo}>
        <Text style={styles.textButton}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default MainButton;
