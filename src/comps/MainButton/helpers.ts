import { Animated, Easing } from 'react-native';

export const handleApplyAnimation = (translateYValue: Animated.Value) => {
  Animated.timing(translateYValue, {
    toValue: -400,
    duration: 150,
    useNativeDriver: true,
    easing: Easing.inOut(Easing.ease),
  }).start();
};

export const handleResetAnimation = (translateYValue: Animated.Value) => {
  Animated.timing(translateYValue, {
    toValue: 0,
    duration: 275,
    useNativeDriver: true,
    easing: Easing.inOut(Easing.ease),
  }).start();
};
