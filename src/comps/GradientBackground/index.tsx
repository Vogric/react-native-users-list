import { FC, ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '@src/theme';
import styles from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store/reducers';

interface GradientBackgroundProps {
  children: ReactNode;
}

const GradientBackground: FC<GradientBackgroundProps> = ({
  children,
}): JSX.Element => {
  const detailModalVisible = useSelector(
    (state: RootState) => state.modal.detailModalVisible
  );

  const editUserModalVisible = useSelector(
    (state: RootState) => state.modal.editUserModalVisible
  );

  return (
    <LinearGradient
      style={
        detailModalVisible || editUserModalVisible
          ? styles.opaque
          : styles.gradient
      }
      colors={[theme.colors.green, theme.colors.purple]}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;
