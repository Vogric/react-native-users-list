import { FC } from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const NoUsersToEdit: FC = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        source={require('../../../../assets/travolta.gif')}
        style={styles.background}
      >
        <Text style={styles.text}>
          You don't have any users to edit. Please add some users first.
        </Text>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text>Go back</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default NoUsersToEdit;
