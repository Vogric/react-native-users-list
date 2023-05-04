import { Text, View } from 'react-native';
import styles from './styles';
import { FC, lazy } from 'react';
import DetailInfo from './DetailInfo';
import { UserDetail } from '@src/types';

const LazyImage = lazy(() => import('@comps/LazyImage'));

interface ProfileDetailProps {
  userDetail: UserDetail;
}

const ProfileDetail: FC<ProfileDetailProps> = ({ userDetail }): JSX.Element => {
  return (
    <View style={styles.container}>
      <LazyImage
        source={{ uri: userDetail?.avatar_url }}
        style={styles.avatar}
      />
      {userDetail?.name && <Text style={styles.title}>{userDetail?.name}</Text>}

      {userDetail?.bio && <DetailInfo value={userDetail?.bio} />}

      <View style={styles.contentInfo}>
        {userDetail?.followers && (
          <DetailInfo label={'Followers:'} value={userDetail?.followers} />
        )}
        {userDetail?.following && (
          <DetailInfo label={'Following:'} value={userDetail?.following} />
        )}
        {userDetail?.public_repos && (
          <DetailInfo
            label={'Public Repos:'}
            value={userDetail?.public_repos}
          />
        )}
        {userDetail?.blog && (
          <DetailInfo label={'Blog:'} value={userDetail?.blog} />
        )}
        {userDetail?.location && (
          <DetailInfo label={'Location:'} value={userDetail?.location} />
        )}
        {userDetail?.email && (
          <DetailInfo label={'Email:'} value={userDetail?.email} />
        )}
      </View>
    </View>
  );
};

export default ProfileDetail;
