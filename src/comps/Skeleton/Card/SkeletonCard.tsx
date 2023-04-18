import { FC, useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';
import styles from './styles';

const SkeletonCard: FC = (): JSX.Element => {
  const animationValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animate = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animationValue, {
            toValue: 0.97,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(animationValue, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };
    animate();
  }, [animationValue]);

  return (
    <Animated.View
      style={[styles.skeletonUser, { transform: [{ scale: animationValue }] }]}
    >
      <View style={[styles.skeletonAvatar]} />
      <View>
        <View style={styles.skeletonText} />
        <View style={styles.skeletonText} />
      </View>
    </Animated.View>
  );
};

export default SkeletonCard;
