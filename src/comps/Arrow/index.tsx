import { FC } from 'react';
import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ArrowProps {
  onPress: () => void;
}

const Arrow: FC<ArrowProps> = ({ onPress }): JSX.Element => {
  return (
    <Pressable onPress={onPress}>
      <MaterialCommunityIcons
        name="arrow-left-thin-circle-outline"
        size={40}
        color={'white'}
        style={{ marginTop: 18, marginLeft: 15 }}
      />
    </Pressable>
  );
};

export default Arrow;
