import { FC } from 'react';
import { Image, ImageSourcePropType, ImageStyle } from 'react-native';

interface LazyImage {
  source: ImageSourcePropType;
  style: ImageStyle;
  loading?: boolean;
}

const LazyImage: FC<LazyImage> = ({ source, style, loading }): JSX.Element => {
  return <Image source={source} style={style} blurRadius={loading ? 10 : 0} />;
};

export default LazyImage;
