import { FC, useRef } from 'react';
import { View, Pressable, Animated } from 'react-native';
import styles from './styles';
import { handleApplyAnimation, handleResetAnimation } from './helpers';

export interface MainButtonProps {
  text: string;
  navigateTo: () => void;
  resetAnimation?: boolean;
  isValidUserNumberInput: () => boolean;
}

const MainButton: FC<MainButtonProps> = ({
  text,
  navigateTo,
  resetAnimation,
  isValidUserNumberInput,
}): JSX.Element => {
  const translateYValue = useRef(new Animated.Value(0)).current;

  const animatedStyle = {
    transform: [{ translateY: translateYValue }],
  };

  const handlePressIn = (): void => {
    if (navigateTo && isValidUserNumberInput()) {
      navigateTo();
      handleApplyAnimation(translateYValue);
    }
  };

  if (resetAnimation) {
    handleResetAnimation(translateYValue);
  }

  return (
    <View style={styles.container}>
      <Pressable onPressIn={handlePressIn}>
        <Animated.View style={[styles.button, animatedStyle]}>
          <Animated.Text style={styles.textButton}>{text}</Animated.Text>
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default MainButton;
