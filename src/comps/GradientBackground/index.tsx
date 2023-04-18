import { FC, ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '@src/theme';
import styles from './styles';

interface GradientBackgroundProps {
  children: ReactNode;
}

const GradientBackground: FC<GradientBackgroundProps> = ({
  children,
}): JSX.Element => {
  return (
    <LinearGradient
      style={styles.gradient}
      colors={[theme.colors.green, theme.colors.purple]}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
